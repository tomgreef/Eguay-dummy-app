import * as React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NavBar from "../app/NavBar";
import {Button, Card, Checkbox, FormControlLabel, FormGroup} from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {DesktopDatePicker} from "@mui/x-date-pickers";
import Login from "../login/Login";
import {FC} from "react";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {DateTimePicker} from "@mui/x-date-pickers/DateTimePicker";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";

const Pago: FC = () => {
    const [value, setValue] = React.useState<Date | null>(
        new Date(),
    );

    const handleChange = (newValue: Date | null) => {
        setValue(newValue);
    };

    return (
        <>
            <NavBar hideLinks={true} />
            <Box sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "84vh"
            }}>
                <Card sx={{
                    width: "68%",
                    height: "100%"
                }}>
                    <Grid container
                        direction="row"
                        justifyContent="center"
                    >
                        <Grid
                            container
                            justifyContent="center"
                            alignContent="center"
                            sx={{
                                width: "30%",
                                height: "100hv",
                                padding: 4,
                                backgroundColor: "#880E0D",
                            }}>
                            <Typography variant='h1' align="center" alignContent="center" color="white">
                                ¡Muchas gracias por tu Compra!
                            </Typography>
                        </Grid>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                            sx={{
                                width: "70%",
                                height: "100%",
                                padding: 4
                            }}>
                            <Grid item justifyContent="center" alignItems="center">
                                <Typography variant='h1'>Detalles de su pago</Typography>
                            </Grid>
                            <Grid container direction="column" display="flex" justifyContent="space-between"
                                sx={{
                                    width: "70%",
                                    height: "100%",
                                    padding: 4
                                }}>
                                <Grid container justifyContent="flex-start">
                                    <TextField label="Nombre" variant="filled" required />
                                </Grid>
                                <Grid container direction="row" justifyContent="flex-start" alignContent="center">
                                    <TextField label="Numero de tarjeta" variant="filled" required />
                                    <Grid item justifyContent="flex-start" alignContent="center">
                                        <img height="30px" src="https://webiconspng.com/wp-content/uploads/2017/09/Visa-PNG-Image-57116.png" />
                                    </Grid>
                                </Grid>
                                <Grid container justifyContent="flex-start">
                                    <TextField label="CVC" variant="filled" required />
                                </Grid>
                                <Grid container direction="column" justifyContent="flex-start" alignContent="flex-start">
                                    <h3>Fecha de caducidad</h3>
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <DesktopDatePicker
                                            label="Date desktop"
                                            inputFormat="MM/yyyy"
                                            value={value}
                                            onChange={handleChange}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                </Grid>
                                <Grid container justifyContent="flex-start">
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked />} label="Guardar mi tarjeta para futuras compras" />
                                        <Button variant="contained">Pagar ahora</Button>
                                    </FormGroup>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card>
            </Box>
        </>
    );
}

export default Pago