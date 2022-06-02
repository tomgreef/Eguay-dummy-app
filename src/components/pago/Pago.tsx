import * as React from 'react'
import {FC, useEffect, useState} from 'react'
import Typography from '@mui/material/Typography';
import NavBar from "../app/NavBar";
import {Button, Card, Checkbox, FormControlLabel, FormGroup, Stack} from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {DatePicker, DesktopDatePicker} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {useNavigate, useSearchParams} from "react-router-dom";

const Pago: FC = () => {
    const [value, setValue] = React.useState<Date | null>(
        new Date(),
    );

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };

    const navigate = useNavigate();

    const pagar = () => {
        navigate("/?success=Pago+realizado+correctamente");
    }

    const [searchParams, setSearchParams] = useSearchParams();

    const [precio, setPrecio] = useState<number>(0);

    useEffect(() => {
        const precio = Number(searchParams.get("precio"));
        if (precio !== null) {
            setPrecio(precio);
        }
    }, [])

    const [compraDirecta, setCompraDirecta] = useState<String>("No especificado");

    useEffect(() => {
        const compraDirecta = searchParams.get("compra");
        if (compraDirecta !== null) {
            setCompraDirecta(compraDirecta);
        }
    }, [])

    return (
        <>
            <Grid container direction="column" justifyContent="space-between" alignContent="center" gap={8}>
                <NavBar hideLinks={false}/>
                <Card sx={{height: "80%", border: "thick", borderRadius: 1, padding: 1}}>
                    <Grid container direction="row" justifyContent="center" alignItems="flex-start" sx={{padding: 3}} gap={10}>
                        <Stack spacing={5}>
                            <Grid item justifyContent="center" alignItems="center">
                                <Typography variant='h1'>1. Resumen de compra</Typography>
                            </Grid>
                            <Grid container justifyContent="flex-start" alignItems="center" direction="row" gap={1}>
                                <Grid item><Typography variant='h3'>Metodo de compra:</Typography></Grid>
                                <Grid item>{compraDirecta}</Grid>
                            </Grid>
                            <Grid container justifyContent="flex-start" alignItems="center" direction="row" gap={1}>
                                <Grid item><Typography variant='h3'>{compraDirecta ? "Precio final del producto" : "Puja"}:</Typography></Grid>
                                <Grid item>{precio}€</Grid>
                            </Grid>
                            <Grid container justifyContent="flex-start" alignItems="center" direction="row" gap={1}>
                                <Grid item><Typography variant='h3'>Costes de envío:</Typography></Grid>
                                <Grid item>{3}€</Grid>
                            </Grid>
                            <Grid container justifyContent="flex-start" alignItems="center" direction="row" gap={1}>
                                <Grid item><Typography variant='h3'>{compraDirecta ? "Precio a pagar" : "Dinero a retener"}:</Typography></Grid>
                                <Grid item>{precio + 3}€</Grid>
                            </Grid>
                        </Stack>
                        <Stack spacing={5}>
                            <Grid item justifyContent="center" alignItems="center">
                                <Typography variant='h1'>2. Envío</Typography>
                            </Grid>
                            <Grid container justifyContent="center" alignItems="center" direction="column" gap={4}>
                                <Grid item>
                                    <TextField label="Pais" variant="filled" required/>
                                </Grid>
                                <Grid item>
                                    <TextField label="Provincia" variant="filled" required/>
                                </Grid>
                                <Grid item>
                                    <TextField label="Codigo postal" variant="filled" required/>
                                </Grid>
                                <Grid item>
                                    <TextField label="Dirección" variant="filled" required/>
                                </Grid>
                            </Grid>
                        </Stack>
                        <Stack spacing={5}>
                            <Grid item justifyContent="center" alignItems="center">
                                <Typography variant='h1'>3. Autorización de pago</Typography>
                            </Grid>
                            <Stack spacing={2}>
                                <Grid container justifyContent="flex-start">
                                    <TextField label="Titular" variant="filled" required/>
                                </Grid>
                                <Grid container direction="row" justifyContent="flex-start" alignContent="center">
                                    <Stack direction="row" spacing={3}>
                                        <TextField label="Numero de tarjeta" variant="filled" required/>
                                        <TextField label="CVC" variant="filled" type="password" sx={{width: "80px"}}
                                                   required/>
                                    </Stack>
                                </Grid>
                                <Grid container direction="column" justifyContent="flex-start"
                                      alignContent="flex-start">
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DatePicker
                                            views={['year', 'month']}
                                            label="Year and Month"
                                            minDate={new Date()}
                                            value={value}
                                            onChange={(newValue) => {
                                                setValue(newValue);
                                            }}
                                            renderInput={(params) => <TextField {...params} helperText={null} />}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid container justifyContent="flex-start">
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox/>}
                                                          label="Guardar mi tarjeta para futuras compras"/>
                                        <Button variant="contained" onClick={pagar}>Pagar ahora</Button>
                                    </FormGroup>
                                </Grid>
                                <Grid container direction="row" justifyContent="flex-start" alignContent="center">
                                    <Stack direction="row" spacing={3}>
                                        <Typography variant='h1'>Pago verificado por </Typography>
                                        <img height="80px"
                                             src="http://uscardsystems.com/wp-content/uploads/2016/05/verifone-logo-primary-pos-2color.png"/>
                                    </Stack>
                                </Grid>
                            </Stack>
                        </Stack>
                    </Grid>
                </Card>
            </Grid>
        </>
    );
}

export default Pago