import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Container, Paper, Divider, Box, FormControl, InputLabel, Input, InputAdornment, Stack, Button, Checkbox } from '@mui/material';
import EuroIcon from '@mui/icons-material/Euro';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { Navigate, useNavigate } from 'react-router-dom';
import NavBar from '../app/NavBar';
import Footer from '../app/Footer';

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

const mystyle = {
    top: "5px",
    width: "25px",
    height: "20px",
    border: "solid white",
    margin: "1px"
};

export default function CrearProducto() {
    const navigate = useNavigate()
    const [currency, setCurrency] = React.useState('EUR');
    const [isCompraDirecta, setIsCompraDirecta] = React.useState(false);
    const [isPuja, setIsPuja] = React.useState(false);

    const createProduct = () => {
        navigate("/producto?id=1&success=Subasta+guardada")
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrency(event.target.value);
    };
    const [value, setValue] = React.useState<Date | null>(new Date());

    return (
        <>
            <Container component="main" sx={{ mb: 4, width: "40%" }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, border: 1, borderColor: 'primary.main', p: { xs: 2, md: 3 } }}>
                    <Typography variant="h1">Añadir puja</Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sx={{ ma: 4 }}>
                            <TextField
                                required
                                id="Titulo"
                                name="Titulo"
                                label="Titulo"
                                margin="normal"
                                autoComplete="given-name"
                                variant="filled"
                            />

                        </Grid>
                        <Grid item xs={12} sx={{ ma: 4 }} >
                            <TextField
                                id="URL"
                                name="URL"
                                label="URL de la foto"
                                margin="normal"
                                autoComplete="family-name"
                                variant="filled" />
                        </Grid>
                        <Grid item xs={12} sm={7}  >
                            <TextField
                                id="filled-select-currency-native"
                                select
                                value={currency}
                                onChange={handleChange}
                                inputProps={{ min: 0 }}
                                margin="normal"
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
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                id="Descripcion"
                                name="Descripcion"
                                label="Descripcion"
                                multiline
                                rows={3}
                                margin="normal"
                                autoComplete="shipping address-line1"
                                variant="filled" />

                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                <TextField
                                    id="input-with-icon-textfield"
                                    label="Puja mínima"

                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EuroIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="filled"
                                />
                            </Box >
                        </Grid>
                        <Grid item xs={12} sx={{ ma: 4 }} >
                            <TextField
                                required
                                id="URL"
                                name="URL"
                                label="URL de la foto"
                                fullWidth
                                margin="normal"
                                autoComplete="family-name"
                                variant="filled" />
                        </Grid>
                        <Grid item xs={12} sm={7}  >
                            <TextField
                                id="filled-select-currency-native"
                                select
                                value={currency}
                                onChange={handleChange}
                                fullWidth
                                inputProps={{ min: 0 }}
                                margin="normal"
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
                        </Grid>

                        <Grid item xs={12}>
                            <TextField
                                required
                                id="Descripcion"
                                name="Descripcion"
                                label="Descripcion"
                                fullWidth
                                multiline
                                rows={3}
                                margin="normal"
                                autoComplete="shipping address-line1"
                                variant="filled" />

                        </Grid>
                        <Grid item xs={12}>
                            <Box sx={{ '& > :not(style)': { m: 1 } }}>
                                <TextField
                                    id="input-with-icon-textfield"
                                    label="Precio inicial"

                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">
                                                <EuroIcon />
                                            </InputAdornment>
                                        ),
                                    }}
                                    variant="filled"
                                />

                            </Box>
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
                                                value={value}
                                                onChange={(newValue) => {
                                                    setValue(newValue);
                                                }}

                                            />
                                        </LocalizationProvider>
                                    </Grid>
                                </Grid>
                                <Grid >
                                    <Button variant="contained" onClick={createProduct}>Añadir</Button>
                                </Grid>
                            </Stack>
                        </Grid>
                    </Grid>
                </Paper>
            </Container>
            <Footer />
        </>
    );
}