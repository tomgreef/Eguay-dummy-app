import { Button, Grid, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import NavBar from "../app/NavBar";
import Productos from "../../context/productos.json"
import Footer from '../app/Footer';
import { Producto } from "../app/Index";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useTitle } from '../..'

const HeaderStyle = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '72px',
    lineHeight: '84px',
    marginTop: 17,
    marginLeft: 0,

    /* Banner */

    color: '#880E0D',
};

const HeaderStyle2 = {
    fontFamily: 'Red Rose',
    fontStyle: 'normal',
    fontWeight: 300,
    fontSize: '36px',
    lineHeight: '35px',
    marginTop: 17,
    marginLeft: 0,

    /* Banner */

    color: '#000000',
};

const MyAuction = () => {
    useTitle("Mi Puja - Eguay")
    const productos: Producto[] = Productos.products;
    const [searchParams, setSearchParams] = useSearchParams();
    const [puja, setPuja] = useState<number>();

    const randomDate = (start: Date, end: Date) => {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    const remainingTime = (date: Date) => {
        // get total seconds between the times
        var delta = Math.abs(date.getTime() - new Date().getTime()) / 1000;

        // calculate (and subtract) whole days
        var days = Math.floor(delta / 86400);
        delta -= days * 86400;

        // calculate (and subtract) whole hours
        var hours = Math.floor(delta / 3600) % 24;
        delta -= hours * 3600;

        // calculate (and subtract) whole minutes
        var minutes = Math.floor(delta / 60) % 60;
        delta -= minutes * 60;

        return `${days} días, ${hours} horas y ${minutes} minutos`
    }

    const [time, setTime] = useState(remainingTime(randomDate(new Date(), new Date(2022, 6, 12))));
    const producto: Producto | undefined = productos.find((producto: Producto) => producto.id.toString() === searchParams.get("id"))
    const Image = producto?.thumbnail

    const navigate = useNavigate()

    const eliminar = () => {
        navigate("/?success=Subasta+eliminada")
    }
    const cerrar = () => {
        navigate("/?success=Subasta+cerrada")
    }

    function pujaMasAlta(producto: Producto | undefined) {
        if (producto !== null && producto !== undefined) {
            return producto ? producto.price - 100 < 0 ? producto.price - 10 + 1 : producto.price - 100 + 1 : 0
        } else {
            return 0;
        }
    }

    const [msg, setMsg] = useState<string>("");

    useEffect(() => {
        const msg = searchParams.get("success");
        if (msg !== null) {
            setMsg(msg);
        }
    }, [])

    return (
        <>
            <Grid container height="inherit%" justifyContent="space-between" gap={5} alignContent="center" alignItems="center">
                <NavBar hideLinks={false} />
                <Grid container display="flex" justifyContent="center" direction="row" alignContent="center"
                    alignItems="center" sx={{ backgroundColor: "#FFFFFF", border: 1, borderColor: 'primary.main', marginLeft: 4, marginRight: 4 }} borderRadius={3} gap={5} padding={3}>
                    <Grid item>
                        <Grid container justifyContent="center" alignContent="center">
                            <img height="100%" object-fit="cover" src={Image} />
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Box
                            sx={{ backgroundColor: "#FFFFFF" }}>
                            <Grid>
                                <Box sx={{ marginLeft: "60px", paddingTop: 2 }}>
                                    <h1 style={HeaderStyle} >{producto?.title}</h1>
                                    <Box sx={{ maxWidth: "550px", paddingTop: 1 }}>
                                        <p>{producto?.description}</p>
                                    </Box>
                                    <br></br>
                                    <Stack gap={2}>
                                        <Stack direction="row" gap={1}>
                                            <Typography color="text.secondary" sx={{ height: 50, color: "black", fontSize: 19 }}>
                                                Tiempo Restante :
                                            </Typography>
                                            <Typography color="text.secondary" sx={{ height: 50, color: "black", fontSize: 20, fontWeight: 900 }}>
                                                {time}
                                            </Typography>
                                        </Stack>
                                        <Stack direction="row" gap={1}>
                                            <Typography color="text.secondary" sx={{ height: 50, color: "black", fontSize: 19, paddingTop: 1 }}>
                                                Precio de cierre:
                                            </Typography>
                                            <Typography color="primary.main" sx={{ height: 50, color: "#880E0D", fontSize: 30, fontWeight: 900 }}>
                                                {producto?.price}€
                                            </Typography>
                                        </Stack>
                                        <Stack direction="row" gap={1}>
                                            <Typography color="text.secondary" sx={{ height: 50, color: "black", fontSize: 19, paddingTop: 1 }}>
                                                Puja Más Alta :
                                            </Typography>
                                            <Typography color="primary.main" sx={{ height: 50, color: "#625959", fontSize: 30, fontWeight: 900 }}>
                                                {pujaMasAlta(producto)}€
                                            </Typography>

                                        </Stack>
                                        <Stack gap={4}>
                                            <Button variant="contained" sx={{ width: "70%", height: "5vh", boxShadow: "7px 7px #888888" }} onClick={() => cerrar()}>Cerrar Puja</Button>
                                            <Stack direction="row" gap={2}>
                                                <Button variant="outlined" sx={{ width: "30%", height: "6vh" }} onClick={() => eliminar()}>Eliminar Puja</Button>

                                            </Stack>
                                        </Stack>
                                        <br></br>
                                    </Stack>
                                </Box>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
                <Footer />
            </Grid>
        </>
    );
};

export default MyAuction;
