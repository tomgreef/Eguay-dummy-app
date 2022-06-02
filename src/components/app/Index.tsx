import { Button, Snackbar, Alert, Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';
import Footer from './Footer';
import NavBar from './NavBar';
import Productos from "../../context/productos.json"
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

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

const Index = () => {
  const navigate = useNavigate()
  const productos: Producto[] = Productos.products;
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
        <Typography variant='h1' >Pujas recientes</Typography>
        <Grid container spacing={2} sx={{ marginTop: 2 }}>
          {productos.map((producto: Producto) => {
            return (
              <Grid item key={producto.id} xs={12} sm={6} md={4} lg={3}>
                <Card sx={{ minHeight: 600, maxHeight: 600 }} onClick={() => navigate("/producto?id=" + producto.id)}>
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
                    <Typography variant="h3" color="text.secondary" sx={{ height: 40, color: "black", alignSelf: "center" }}>
                      Precio actual ${producto.price}
                    </Typography>
                    <Typography variant="h2" color="secondary.main" sx={{ height: 50 }}>
                      Paga  <Box color="primary.main" component="div" sx={{ display: 'inline' }}>${producto.price + 100}</Box> y te lo llevas
                    </Typography>
                    <Typography color="text.secondary" sx={{ height: 50, color: "black", fontSize: 15 }}>
                      Queda: {remainingTime(randomDate(new Date(), new Date(2022, 6, 12)))}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{
                    minHeight: 100
                    , maxHeight: 100, display: "flex", flexDirection: "column", width: "100%", gap: 2
                  }}>
                    <Button variant="contained" sx={{ width: "100%" }} onClick={() => null}>Comprar Ahora</Button>
                    <Button variant="outlined" sx={{ width: "100%", margin: "0px !important" }} onClick={() => null}>Puja</Button>
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

export default Index