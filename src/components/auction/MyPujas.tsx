import { Button, Snackbar, Alert, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Productos from "../../context/productos.json"
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Footer from '../app/Footer';
import NavBar from '../app/NavBar';
import { useTitle } from '../..'

export type Producto = {
    id: number,
    title: string,
    description: string,
    price: number,
    discountPercentage: number,
    rating: number,
    stock: number,
    brand: string,
    category: string,
    thumbnail: string,
    images: string[]
}

const MyPujas = () => {
    useTitle("Mis Pujas - Eguay")
    const navigate = useNavigate()
    const productosActivos: Producto[] = Productos.products.slice(9, 13);
    const productosInactivos: Producto[] = Productos.products.slice(14, 16);
    const [searchParams, setSearchParams] = useSearchParams();
    const [msg, setMsg] = useState<string>("");

    useEffect(() => {
        const msg = searchParams.get("success");
        if (msg !== null) {
            setMsg(msg);
        }
    }, [])


    function randomDate(start: Date, end: Date) {
        return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    }

    function remainingTime(date: Date) {
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

    return (
        <>
            <Snackbar open={msg !== ""} autoHideDuration={6000} onClose={() => setMsg("")}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}>
                <Alert severity="success" sx={{ width: '100%', fontSize: 20, marginTop: 4 }}>
                    {msg}
                </Alert>
            </Snackbar>
            <NavBar />
            <Box sx={{ padding: 4 }}>
                <Typography variant='h1' >Mis Pujas</Typography>
                <Grid container spacing={2} sx={{ marginTop: 2 }}>
                    {productosActivos.map((producto: Producto) => {
                        return (
                            <Grid item key={producto.id} xs={12} sm={6} md={4} lg={3}>
                                <Card sx={{ minHeight: 520, maxHeight: 520 }} onClick={() => navigate("/miProducto?id=" + producto.id)}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={producto.thumbnail}
                                        alt={producto.title}
                                    />
                                    <CardContent sx={{ height: 250, display: "flex", flexDirection: "column", justifyContent: "space-between", minHeigh: 250 }}>
                                        <Typography gutterBottom variant="h3" component="div" sx={{ height: 50 }}>
                                            {producto.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ height: 80 }}>
                                            {producto.description}
                                        </Typography>
                                        <Typography variant="h3" color="text.secondary" sx={{ height: 40, color: "black" }}>
                                            Mi puja: ${producto.price}
                                        </Typography>
                                        <Typography variant="h2" color="secondary.main" sx={{ height: 50 }}>
                                            Precio de compra: <Box color="primary.main" component="div" sx={{ display: 'inline' }}>${producto.price + 100}</Box>
                                        </Typography>
                                        <Typography color="text.secondary" sx={{ height: 50, color: "black", fontSize: 15 }}>
                                            Queda: {remainingTime(randomDate(new Date(), new Date(2022, 6, 12)))}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{
                                        minHeight: 100
                                        , maxHeight: 100, display: "flex", flexDirection: "column", width: "100%", gap: 2
                                    }}>
                                        <Button variant="contained" sx={{ width: "100%" }} onClick={() => null}>Ver producto</Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })}
                    {productosInactivos.map((producto: Producto) => {
                        return (
                            <Grid item key={producto.id} xs={12} sm={6} md={4} lg={3}>
                                <Card sx={{ minHeight: 520, maxHeight: 520, backgroundColor: "grey !important" }} onClick={() => navigate("/miProducto?id=" + producto.id)}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={producto.thumbnail}
                                        alt={producto.title}
                                    />
                                    <CardContent sx={{ height: 250, display: "flex", flexDirection: "column", justifyContent: "space-between", minHeigh: 250 }}>
                                        <Typography gutterBottom variant="h3" component="div" sx={{ height: 50 }}>
                                            {producto.title}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ height: 80 }}>
                                            {producto.description}
                                        </Typography>
                                        <Typography variant="h3" color="text.secondary" sx={{ height: 40, color: "black" }}>
                                            Mi puja: ${producto.price}
                                        </Typography>
                                        <Typography variant="h2" color="secondary.main" sx={{ height: 50 }}>
                                            Precio de compra: <Box color="primary.main" component="div" sx={{ display: 'inline' }}>${producto.price + 100}</Box>
                                        </Typography>
                                        <Typography color="text.secondary" sx={{ height: 50, color: "black", fontSize: 15 }}>
                                            Cerrado: {randomDate(new Date(2021, 6, 12), new Date()).toDateString()}
                                        </Typography>
                                    </CardContent>
                                    <CardActions sx={{
                                        minHeight: 100
                                        , maxHeight: 100, display: "flex", flexDirection: "column", width: "100%", gap: 2
                                    }}>
                                        <Typography>Producto vendido</Typography>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
            <Footer />
        </>
    );
}

export default MyPujas