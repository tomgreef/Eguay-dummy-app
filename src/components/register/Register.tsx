import { FC } from 'react'
import { Box, TextField, Card, Button, FormControl, Grid, Typography, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { Link } from 'react-router-dom'
import NavBar from '../navBar/NavBar'

const Register: FC = () => {

    return (
        <>
            <NavBar hideLinks={true} />
            <Box sx={{
                display: "flex", justifyContent: "center",
                alignItems: "center", height: "84vh"
            }}>
                <Card sx={{
                    width: "68%",
                    maxHeight: "60vh"
                }}>
                    <Grid container direction="row"
                        justifyContent="space-between"
                    >
                        <Grid item sx={{ width: "50%", maxHeight: "60vh" }}>
                            <img src="https://images.pexels.com/photos/3530113/pexels-photo-3530113.jpeg?cs=srgb&dl=pexels-dids-3530113.jpg&fm=jpg" alt="Background image" width="100%" height="100%" />
                        </Grid>
                        <Grid container direction="column"
                            justifyContent="center" sx={{ width: "50%", minHeight: "100%", padding: 4 }} gap={4}
                        >
                            <Grid item >
                                <Typography variant="h1">Registrarse</Typography>
                            </Grid>
                            <Grid item>
                                <FormControl fullWidth sx={{ gap: 4 }}>
                                    <TextField id="outlined-basic" label="Usuario" variant="filled" required />
                                    <TextField id="standard-password-input"
                                        label="Contraseña"
                                        type="password"
                                        autoComplete="current-password"
                                        variant="filled" required />
                                    <TextField id="standard-password-input"
                                        label="Repetir Contraseña"
                                        type="password"
                                        autoComplete="current-password"
                                        variant="filled" required />
                                    <Button variant="contained" sx={{ alignContent: "center" }} onSubmit={() => null}>Registrarse</Button>
                                </FormControl>
                            </Grid>
                            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                <Grid item>
                                    <Link to={"/"} style={{ textDecoration: 'none' }}><Typography variant="body2">Volver al inicio</Typography></Link>
                                </Grid>
                                <Grid item>
                                    <Link to={"/iniciarSesion"} style={{ textDecoration: 'none' }}><Typography variant="body2" sx={{ color: "primary.main" }}>Iniciar Sesión</Typography></Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card >
            </Box >
        </>
    )
}

export default Register