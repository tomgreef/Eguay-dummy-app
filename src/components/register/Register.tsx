import { FC, useState } from 'react'
import { Box, TextField, Card, Button, FormControl, Grid, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../app/NavBar'
import { validName } from '../../context/validation'

const Register: FC = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [confirmPassword, setConfirmPassword] = useState<string>();

    const [usernameError, setUsernameError] = useState<string>();
    const [passwordError, setPasswordError] = useState<string>();

    const register = () => {

        if (!!!username) {
            setUsernameError("Usuario está vacío")
            return
        } else
            setUsernameError("")
        if (!!!password) {
            setPasswordError("Contraseña está vacío")
            return
        } else
            setPasswordError("")

        if (!validName.test(username)) {
            setUsernameError("Formato de usuario incorrecto")
            return
        } else
            setUsernameError("")

        if (password !== confirmPassword) {
            setPasswordError("Contraseñas no coinciden")
            return
        }



        localStorage.setItem('user', username);
        localStorage.setItem('password', password);
        localStorage.setItem('activeUser', username);
        navigate("/")
    }

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
                                    <TextField id="outlined-basic"
                                        label="Usuario"
                                        variant="filled"
                                        required
                                        onChange={(e) => setUsername(e.target.value.toLowerCase())}
                                        error={!!usernameError}
                                        helperText={usernameError}
                                        onKeyDown={(e) => (
                                            e.code === 'Enter' ? register() : null
                                        )} />
                                    <TextField id="password"
                                        label="Contraseña"
                                        type="password"
                                        autoComplete="current-password"
                                        variant="filled"
                                        required
                                        onChange={(e) => setPassword(e.target.value)}
                                        error={!!passwordError}
                                        helperText={passwordError}
                                        onKeyDown={(e) => (
                                            e.code === 'Enter' ? register() : null
                                        )} />
                                    <TextField id="confirmPassword"
                                        label="Repetir Contraseña"
                                        type="password"
                                        autoComplete="current-password"
                                        variant="filled"
                                        required
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        onKeyDown={(e) => (
                                            e.code === 'Enter' ? register() : null
                                        )} />
                                    <Button variant="contained" sx={{ alignContent: "center" }} onClick={() => register()}>Registrarse</Button>
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