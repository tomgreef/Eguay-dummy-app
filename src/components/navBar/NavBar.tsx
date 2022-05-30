import { AppBar, Box, Button, Toolbar } from '@mui/material'
import { Link } from 'react-router-dom'
import { FC } from 'react'

interface NavBarProps {
    hideLinks?: boolean
}

const NavBar: FC<NavBarProps> = ({ hideLinks }) => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: "background.default" }} elevation={0}>
                <Toolbar sx={{ flexGrow: 1, padding: 2, justifyContent: "space-between" }}>
                    <Link to={"/"}>
                        <img src="./img/logo.jpg" alt="Logo" height={60} width={200} />
                    </Link>
                    {hideLinks ? null :
                        <div>
                            <Button color="secondary">Iniciar Sesión</Button>
                            <Button color='secondary' >Registrarse</Button>
                        </div>}
                </Toolbar>
            </AppBar>
        </Box >
    )
}

export default NavBar