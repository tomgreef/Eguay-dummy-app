import { FC } from 'react'
import { Box, TextField, Card, Button, FormControl, Grid, Typography, Checkbox, FormControlLabel, FormGroup } from '@mui/material'
import { Link } from 'react-router-dom'

const Login: FC = () => {

    return (
        <Box sx={{
            display: "flex", justifyContent: "center",
            alignItems: "center", minHeight: "100vh"
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
                        justifyContent="space-around" alignItems="center" sx={{ width: "50%", minHeight: "100%", padding: 4 }}
                    >
                        <Grid item >
                            <Typography sx={{ color: "primary.main", fontSize: 44 }}>Iniciar Sesión</Typography>
                        </Grid>
                        <Grid item container direction="column"
                            justifyContent="space-between" alignItems="center">
                            <Typography sx={{ paddingBottom: 4 }}>¿Aún no tienes cuenta? <Link to={"/registrar"}>Crear tu cuenta</Link> tardará menos de un minuto</Typography>
                            <FormControl fullWidth sx={{ gap: 2 }}>
                                <TextField id="outlined-basic" label="Username" variant="standard" required />
                                <TextField id="standard-password-input"
                                    label="Password"
                                    type="password"
                                    autoComplete="current-password"
                                    variant="standard" required />
                                <Grid item container direction="row"
                                    alignSelf="end" sx={{ width: "100%" }}>
                                    <Button variant="contained" sx={{ width: "40%", marginTop: 2, alignContent: "center" }} onSubmit={() => null}>Iniciar Sesión</Button>
                                </Grid>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>

            </Card >
        </Box >
    )
}

export default Login