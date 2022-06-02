import { AppBar, Box, Button, Toolbar } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { FC, useEffect, useState } from 'react'
import * as React from "react";

interface NavBarProps {
    hideLinks?: boolean
}

const NavBar: FC<NavBarProps> = ({ hideLinks }) => {
    const [user, setUser] = useState<string | null>(null)
    const navigate = useNavigate()

    useEffect(() => {
        setUser(localStorage.getItem('activeUser'))
    })

    const signOut = () => {
        localStorage.removeItem("activeUser")
        setUser(null)
        navigate("/?success=Sesión+cerrada")
    }

    const navigate = useNavigate();

    function nuevaSubasta() {
        navigate("/crearProducto")
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: "background.default" }} elevation={0}>
                <Toolbar sx={{ flexGrow: 1, padding: 2, justifyContent: "space-between" }}>
                    <Link to={"/"}>
                        <img src="./img/logo.jpg" alt="Logo" height={60} width={200} />
                    </Link>
                    {hideLinks ? null : user ?
                        <Box>
                            <Button variant="contained" onClick={nuevaSubasta}>Nueva Subasta</Button>
                            {/* <Link to="/perfil" style={{ textDecoration: "none", marginRight: 4 }}><Button color='secondary' >Mi Perfil</Button></Link> */}
                            <Button onClick={() => signOut()}>Cerrar Sesión</Button>
                        </Box>
                        :
                        <Box>
                            <Link to="/iniciarSesion" style={{ textDecoration: "none", marginRight: 4 }}><Button color="secondary">Iniciar Sesión</Button></Link>
                            <Link to="/registrar" style={{ textDecoration: "none" }}><Button color='secondary' >Registrarse</Button></Link>
                        </Box>}
                </Toolbar>
            </AppBar>
        </Box >
    )
}

export default NavBar