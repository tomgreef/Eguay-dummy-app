import { FC, useState } from 'react'
import { Box, TextField, Card, Button, FormControl, Grid, Typography, Checkbox, FormControlLabel } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import NavBar from '../app/NavBar'

const Login: FC = () => {
    const navigate = useNavigate()
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();

    const [usernameError, setUsernameError] = useState<string>();
    const [passwordError, setPasswordError] = useState<string>();

    const signIn = () => {
        if (!!!username) {
            setUsernameError("Username is empty")
            return
        } else
            setUsernameError("")

        if (!!!password) {
            setPasswordError("Password is empty")
            return
        } else
            setPasswordError("")

        const localUsername = localStorage.getItem('user');
        if (localUsername === null || localUsername !== username.toLowerCase()) {
            setUsernameError("Username does not exist")
            return
        } else
            setUsernameError("")

        const localPassword = localStorage.getItem("password");
        if (localPassword !== password) {
            setPasswordError("Wrong password")
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
                                <Typography variant="h1">Iniciar Sesión</Typography>
                            </Grid>
                            <Grid item>
                                <FormControl fullWidth sx={{ gap: 4 }}>
                                    <TextField id="outlined-basic" label="Usuario" variant="filled" required error={!!usernameError} helperText={usernameError}
                                        onChange={(e) => setUsername(e.target.value.toLowerCase())} onKeyDown={(e) => (
                                            e.code === 'Enter' ? signIn() : null
                                        )} />
                                    <TextField id="standard-password-input"
                                        label="Contraseña"
                                        type="password"
                                        autoComplete="current-password"
                                        variant="filled" required error={!!passwordError} helperText={passwordError} onChange={(e) => setPassword(e.target.value)}
                                        onKeyDown={(e) => (
                                            e.code === 'Enter' ? signIn() : null
                                        )} />
                                    <Button variant="contained" sx={{ alignContent: "center" }} onClick={() => signIn()} type="submit">Iniciar Sesión</Button>
                                </FormControl>
                            </Grid>
                            <Grid container direction="row" justifyContent="space-between" alignItems="center">
                                <Grid item>
                                    <FormControlLabel control={<Checkbox defaultChecked />} label="Recuérdame" />
                                </Grid>
                                <Grid item>
                                    <Link to={"/"} style={{ textDecoration: 'none' }}><Typography variant="body2">Volver al inicio</Typography></Link>
                                </Grid>
                                <Grid item>
                                    <Link to={"/registrar"} style={{ textDecoration: 'none' }}><Typography variant="body2" sx={{ color: "primary.main" }}>Registrarse</Typography></Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Card >
            </Box >
        </>
    )
}

export default Login