import * as React from 'react'
import {FC} from 'react'
import Typography from '@mui/material/Typography';
import NavBar from "../app/NavBar";
import {Button, Card, Checkbox, FormControlLabel, FormGroup, Stack} from "@mui/material";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import {DesktopDatePicker} from "@mui/x-date-pickers";
import {AdapterDateFns} from "@mui/x-date-pickers/AdapterDateFns";
import {LocalizationProvider} from "@mui/x-date-pickers/LocalizationProvider";
import {useNavigate} from "react-router-dom";

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

    return (
        <>
            <Grid container direction="column" justifyContent="space-between" alignContent="center" gap={8}>
                <NavBar hideLinks={false}/>
                <Card sx={{height: "80%", border: "thick", borderRadius: 1}}>
                    <Grid container direction="column" justifyContent="center" alignItems="center" sx={{padding: 3}}>
                        <Stack spacing={5}>
                            <Grid item justifyContent="center" alignItems="center">
                                <Typography variant='h1'>Detalles de su pago</Typography>
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
                                        <DesktopDatePicker label="Fecha de caducidad" inputFormat="MM/yyyy"
                                                           value={value} onChange={handleChange}
                                                           renderInput={(params) => <TextField {...params} />}/>
                                    </LocalizationProvider>
                                </Grid>
                                <Grid container justifyContent="flex-start">
                                    <FormGroup>
                                        <FormControlLabel control={<Checkbox defaultChecked/>}
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