import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Container, Paper, Box, InputAdornment, Stack, Button, Checkbox, FormControl } from '@mui/material';
import EuroIcon from '@mui/icons-material/Euro';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useNavigate } from 'react-router-dom';
import Footer from '../app/Footer';
import NavBar from '../app/NavBar';
import { useTitle } from '../..'

const currencies = [
    {
        value: 'Juguetes',
        label: 'Juguetes',
    },
    {
        value: 'Viajes',
        label: 'Viajes',
    },
    {
        value: 'Mobiliario',
        label: 'Mobiliario',
    },
    {
        value: 'Tectonogía',
        label: 'Tectonogía',
    },
    {
        value: 'Domésticos',
        label: 'Domésticos',
    },
    {
        value: 'Ropa',
        label: 'Ropa',
    },
    {
        value: 'Bebés',
        label: 'Bebés',
    },
    {
        value: 'Accesorios',
        label: 'Accesorios',
    },
    {
        value: 'Papelería',
        label: 'Papelería',
    },
    {
        value: 'Belleza',
        label: 'Belleza',
    },
    {
        value: 'Salud',
        label: 'Salud',
    },
    {
        value: 'Arte',
        label: 'Arte',
    },
    {
        value: 'Comida',
        label: 'Comida',
    },
    {
        value: 'Vehículos',
        label: 'Vehículos',
    },
    {
        value: 'Inmoviliarios',
        label: 'Inmoviliarios',
    },
    {
        value: 'Otros...',
        label: 'Otros...',
    },
];


export default function CrearProducto() {
    useTitle("Añadir subasta - Eguay")
    const navigate = useNavigate()
    const [currency, setCurrency] = React.useState('EUR');
    const [isCompraDirecta, setIsCompraDirecta] = React.useState(true);
    const [isPuja, setIsPuja] = React.useState(false);
    const [precioInicial, setPrecioInicial] = React.useState("")
    const [precioCompra, setPrecioCompra] = React.useState("")
    const [date, setDate] = React.useState<Date | null>(new Date())

    const [error, setError] = React.useState("")

    const createProduct = () => {
        if (parseInt(precioInicial) < 0 || (isCompraDirecta && parseInt(precioCompra) < 0)) {
            setError("Precios no pueden ser valores negativos");
            return
        }
        if (!isCompraDirecta && !isPuja) {
            setError("Seleccione una de las casillas");
            return
        }
        if (isCompraDirecta && (parseInt(precioCompra) <= parseInt(precioInicial))) {
            setError("Precio de compra no puede ser igual o menor que la puja inicial");
            return
        }
        if (isCompraDirecta && precioCompra === "") {
            setError("Introduzca un precio de compra directa");
            return
        }
        if (isPuja && !date) {
            setError("Seleccione una fecha de fin de puja");
            return
        }
        if (isPuja && date && (date <= new Date())) {
            setError("La fecha no puede ser inferior a la fecha actual");
            return
        }
        navigate("/producto?id=1&success=Subasta+guardada")
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    };
    ;

    return (
        <>
            <NavBar />
            <Container component="main" sx={{ mb: 4, width: "50%" }}>
                <Paper variant="outlined" sx={{ marginTop: 2, border: 1, borderColor: 'primary.main', p: { xs: 2, md: 3 } }}>
                    <Typography variant="h1">Añadir Subasta</Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sx={{ ma: 4 }}>
                            <TextField
                                fullWidth
                                required
                                id="Titulo"
                                name="Titulo"
                                label="Titulo"
                                margin="normal"
                                autoComplete="given-name"
                                variant="filled"
                                inputProps={{ maxLength: 26 }}
                            />
                        </Grid>
                        <Grid item xs={12} sx={{ ma: 4 }} >
                            <TextField
                                fullWidth
                                id="URL"
                                name="URL"
                                label="URL de la foto"
                                margin="normal"
                                autoComplete="family-name"
                                variant="filled" />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="Descripcion"
                                name="Descripcion"
                                label="Descripcion"
                                multiline
                                rows={3}
                                margin="normal"
                                autoComplete="shipping address-line1"
                                variant="filled" inputProps={{ maxLength: 255 }} />

                        </Grid>
                        <Grid container xs={12} sx={{ marginTop: 2 }} justifyContent="space-between" direction="row" alignContent="center">
                            <Grid item>

                                <TextField id="filled-select-currency-native"
                                    select
                                    fullWidth
                                    value={currency}
                                    onChange={handleChange}
                                    sx={{ marginLeft: 3 }}
                                    SelectProps={{
                                        native: true,
                                    }}
                                    helperText="Selecciona la categoria deseada"
                                    variant="filled"
                                >
                                    {currencies.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </TextField>

                            </Grid><Grid>
                                <TextField
                                    id="input-with-icon-textfield"
                                    label="Puja mínima"
                                    fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EuroIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="filled"
                                    value={precioInicial}
                                    onChange={(e) => setPrecioInicial(e.target.value)}
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}   >
                            <Stack spacing={5}>
                                <Grid container
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="flex-end"
                                    gap={4}
                                >
                                    <Grid item>
                                        <Checkbox checked={isCompraDirecta} onChange={() => setIsCompraDirecta(!isCompraDirecta)} />
                                        Precio de compra directa
                                    </Grid>

                                    <Grid item sx={{ m: 1 }} direction="row" gap={1} >
                                        <TextField
                                            id="input-with-icon-textfield"
                                            disabled={!isCompraDirecta}
                                            InputProps={{
                                                startAdornment: (
                                                    <InputAdornment position="start">
                                                        <EuroIcon />
                                                    </InputAdornment>
                                                ),
                                            }}
                                            variant="standard"
                                            value={precioCompra}
                                            onChange={(e) => setPrecioCompra(e.target.value)}
                                            error={parseInt(precioCompra) <= parseInt(precioInicial)}
                                        />
                                    </Grid>

                                </Grid>

                                <Grid container
                                    direction="row"
                                    justifyContent="flex-start"
                                    alignItems="flex-end"
                                    gap={4}
                                >
                                    <Grid item>
                                        <Checkbox checked={isPuja} onChange={() => setIsPuja(!isPuja)} />
                                        La puja se la lleva el mejor postor el
                                    </Grid>

                                    <Grid item>
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <DateTimePicker
                                                renderInput={(props) => <TextField {...props} />}
                                                disabled={!isPuja}
                                                value={date}
                                                onChange={(newValue) => {
                                                    setDate(newValue);
                                                }}

                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                </Grid>
                                <Grid >
                                    <Typography sx={{ color: "primary.main" }}>{!!error ? error : null}</Typography>
                                    <Button variant="contained" onClick={createProduct}>Añadir</Button>
                                </Grid>
                            </Stack>
                        </Grid>
                    </Grid>
                </Paper>
            </Container >
            <Footer />
        </>
    );
}