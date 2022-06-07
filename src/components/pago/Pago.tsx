import * as React from 'react'
import { FC, useEffect, useState } from 'react'
import Typography from '@mui/material/Typography';
import NavBar from "../app/NavBar";
import { Button, Card, Checkbox, FormControlLabel, FormGroup, Stack } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { useNavigate, useSearchParams } from "react-router-dom";
import { validCreditCard, validCVC, validName } from '../../context/validation';
import { useTitle } from '../..'

const Pago: FC = () => {
    useTitle("Pago - Eguay")
    const [value, setValue] = React.useState<Date | null>(
        new Date(),
    );
    const [searchParams, setSearchParams] = useSearchParams();
    const [precio, setPrecio] = useState<number>(0);
    const [compraDirecta, setCompraDirecta] = useState<String>("No especificado");
    const navigate = useNavigate();

    const [titular, setTitular] = useState("")
    const [numeroTarjeta, setNumeroTarjeta] = useState("")
    const [cvc, setCvc] = useState("")
    const [fechaCaducidad, setFechaCaducidad] = useState(new Date())

    const [titularError, setTitularError] = useState("")
    const [numeroTarjetaError, setNumeroTarjetaError] = useState("")
    const [cvcError, setCvcError] = useState("")
    const [fechaCaducidadError, setFechaCaducidadError] = useState("")

    const pagar = () => {
        if (titular === "" || !validName.test(titular)) {

            setTitularError("Nombre de titular incorrecto")
            return
        }
        setTitularError("")
        if (numeroTarjeta === "" || !validCreditCard.test(numeroTarjeta.replaceAll(" ", ""))) {
            setNumeroTarjetaError("Número de tarjeta inválido")
            console.log("Validation", numeroTarjeta === "", !validCreditCard.test(numeroTarjeta.replace(" ", "")), numeroTarjeta.replaceAll(" ", ""))
            return
        }
        setNumeroTarjetaError("")
        if (cvc === "" || !validCVC.test(cvc)) {
            setCvcError("Formato CVC incorrecto")
            return
        }
        setCvcError("")

        if (fechaCaducidad.getFullYear() < new Date().getFullYear() ||
            (fechaCaducidad.getFullYear() === new Date().getFullYear() && fechaCaducidad.getMonth() < new Date().getMonth())) {
            setFechaCaducidadError("Tarjeta está caducada")
            return
        }
        setFechaCaducidadError("")

        navigate("/?success=Pago+realizado+correctamente");
    }

    useEffect(() => {
        if (numeroTarjeta.length > 0) {
            if (numeroTarjeta.length % 4 == 0) {
                setNumeroTarjeta(numeroTarjeta.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim());
            }
        }
    }, [numeroTarjeta])

    useEffect(() => {
        const precio = Number(searchParams.get("precio"));
        if (precio !== null) {
            setPrecio(precio);
        }
    }, [])

    useEffect(() => {
        const compraDirecta = searchParams.get("compra");
        if (compraDirecta !== null) {
            setCompraDirecta(compraDirecta);
        }
    }, [])

    return (
        <>
            <NavBar />
            <Grid container direction="column" justifyContent="center" alignContent="center" gap={8}>

                <Card sx={{ height: "85%", border: "thick", borderRadius: 1, padding: 1, marginTop: 8 }}>
                    <Grid container direction="row" justifyContent="center" alignItems="flex-start" sx={{ padding: 4 }} gap={8}>
                        <Stack spacing={5}>
                            <Grid item justifyContent="center" alignItems="center">
                                <Typography variant='h1'>1. Resumen de compra</Typography>
                            </Grid>
                            <Grid container justifyContent="flex-start" alignContent="flex-end" direction="row" gap={1}>
                                <Grid item><Typography variant='h3'>Metodo de compra:</Typography></Grid>
                                <Grid item>{compraDirecta}</Grid>
                            </Grid>
                            <Grid container justifyContent="flex-start" alignContent="flex-end" direction="row" gap={1}>
                                <Grid item><Typography variant='h3'>{!!!compraDirecta ? "Precio final del producto" : "Puja"}:</Typography></Grid>
                                <Grid item>{precio}€</Grid>
                            </Grid>
                            <Grid container justifyContent="flex-start" alignContent="flex-end" direction="row" gap={1}>
                                <Grid item><Typography variant='h3'>Costes de envío:</Typography></Grid>
                                <Grid item>{3}€</Grid>
                            </Grid>
                            <Grid container justifyContent="flex-start" alignContent="flex-end" direction="row" gap={1}>
                                <Grid item><Typography variant='h3'>{!!!compraDirecta ? "Precio a pagar" : "Dinero a retener"}:</Typography></Grid>
                                <Grid item>{precio + 3}€</Grid>
                            </Grid>
                        </Stack>
                        <Stack spacing={5}>
                            <Grid item justifyContent="center" alignItems="center">
                                <Typography variant='h1'>2. Envío</Typography>
                            </Grid>
                            <Grid container justifyContent="center" alignItems="center" direction="column" gap={4}>
                                <Grid item>
                                    <TextField label="Pais" variant="filled" required />
                                </Grid>
                                <Grid item>
                                    <TextField label="Provincia" variant="filled" required />
                                </Grid>
                                <Grid item>
                                    <TextField label="Codigo postal" variant="filled" required />
                                </Grid>
                                <Grid item>
                                    <TextField label="Dirección" variant="filled" required />
                                </Grid>
                            </Grid>
                        </Stack>
                        <Stack spacing={5}>
                            <Grid item justifyContent="center" alignItems="center">
                                <Typography variant='h1'>3. Autorización de pago</Typography>
                            </Grid>
                            <Stack spacing={2}>
                                <Grid container justifyContent="flex-start">
                                    <TextField label="Titular" variant="filled" required error={!!titularError} helperText={titularError} value={titular} onChange={(e) => setTitular(e.target.value)} />
                                </Grid>
                                <Grid container direction="row" justifyContent="flex-start" alignContent="center">
                                    <Stack direction="row" spacing={3}>
                                        <TextField label="Numero de tarjeta" variant="filled" required error={!!numeroTarjetaError} helperText={numeroTarjetaError} value={numeroTarjeta} onChange={(e) => setNumeroTarjeta(e.target.value)} />
                                        <TextField label="CVC" variant="filled" type="password" sx={{ width: "80px" }}
                                            required error={!!cvcError} helperText={cvcError} value={cvc} onChange={(e) => setCvc(e.target.value)} />
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
                                            renderInput={(params) => <TextField {...params}
                                                error={!!fechaCaducidadError} helperText={fechaCaducidadError} value={fechaCaducidad} onChange={(e) => setFechaCaducidad(new Date(e.target.value))}
                                            />}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid container justifyContent="flex-start">
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox />}
                                            label="Guardar mi tarjeta para futuras compras" />
                                        <Button variant="contained" onClick={pagar}>Pagar ahora</Button>
                                    </FormGroup>
                                </Grid>
                                <Grid container direction="row" justifyContent="flex-start" alignItems="center">
                                    <Grid item>
                                        <Typography variant='h1'>Pago verificado por </Typography>
                                    </Grid>
                                    <Grid item><img height="80px"
                                        src="http://uscardsystems.com/wp-content/uploads/2016/05/verifone-logo-primary-pos-2color.png" />
                                    </Grid>
                                </Grid>
                            </Stack>
                        </Stack>
                    </Grid>
                </Card>
            </Grid >
        </>
    );
}

export default Pago