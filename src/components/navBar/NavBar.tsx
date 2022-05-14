import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'

export default function NavBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: "background.default" }}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, padding: 1 }}>
                        <img src="./img/logo.jpg" alt="Logo" height={60} width={200} />
                    </Typography>
                    <Button color="secondary">Iniciar Sesión</Button>
                    <Button color='secondary' >Registrarse</Button>
                </Toolbar>
            </AppBar>
        </Box >
    )
}
