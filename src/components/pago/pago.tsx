import * as React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import NavBar from "../app/NavBar";
import { Card } from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {DesktopDatePicker} from "@mui/x-date-pickers";
import Login from "../login/Login";
import {FC} from "react";

const Pago: FC = () => {
    const [date, setDate] = React.useState<Date | null>(
        new Date(),
    );

    const handleChange = (newValue: Date | null) => {
        setDate(newValue);
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
                            item
                            justifyContent="center"
                            sx={{
                                width: "30%",
                                height: "100%",
                                padding: 4
                            }}>
                            <Typography
                                variant='h1'
                                align="center"
                                alignContent="center"
                            >
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
                            <Grid container direction="column" justifyContent="flex-start" alignItems="center"
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
                                <Grid container direction="row" justifyContent="flex-start" alignContent="center">
                                    <DesktopDatePicker
                                        label="Fecha de cadudidad"
                                        inputFormat="MM/yy"
                                        value={date}
                                        onChange={handleChange}
                                        renderInput={(params) => <TextField {...params} />}
                                    />
                                    <Grid item justifyContent="flex-start" alignContent="center">
                                        <img height="30px" src="https://webiconspng.com/wp-content/uploads/2017/09/Visa-PNG-Image-57116.png" />
                                    </Grid>
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