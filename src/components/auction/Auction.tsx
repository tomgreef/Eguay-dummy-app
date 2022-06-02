import {Avatar, Button, Grid, Stack, TextField, Typography} from "@mui/material";
import { Box } from "@mui/system";
import NavBar from "../app/NavBar";
import Productos from "../../context/productos.json"
import Item from "@mui/material";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import GavelIcon from '@mui/icons-material/Gavel';
import Footer from '../app/Footer';
import { Producto } from "../app/Index";
import {useNavigate, useSearchParams} from "react-router-dom";


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

const Auction = () => {
    const productos: Producto[] = Productos.products;
    const [searchParams, setSearchParams] = useSearchParams();

    const producto: Producto | undefined = productos.find((producto: Producto) => producto.id.toString() === searchParams.get("id"))

    const Image = producto?.thumbnail

    const navigate = useNavigate()

    const pagar = () => {
        navigate("/pago")
    }

    return (
        <>
            <NavBar />
            <Grid container display="flex" justifyContent="flex-start"
                alignItems="flex-start" spacing={70} >
                <Grid item xs={12} md={5}>
                    <Box
                        sx={{
                            width: 800,
                            height: 840,
                            alignItems: 'center',
                            alignContent: 'center',
                            margin: "normal",
                            borderradius: "5px",
                            backgroundImage: `url(${Image})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            backgroundColor: "#FFFFFF",
                            m: 15,
                            mt: 0,
                            backdropfilter: "blur(10px)",
                            '&:hover': {
                                backgroundColor: '#929496',
                                opacity: [0.9, 0.8, 0.7],
                                display: 'flex'
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box
                        sx={{ backgroundColor: "#FFFFFF", height: "85vh" }}>
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
                                            {remainingTime(randomDate(new Date(), new Date(2022, 6, 12)))}
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" gap={1}>
                                        <Typography color="text.secondary" sx={{ height: 50, color: "black", fontSize: 19, paddingTop: 1 }}>
                                            Precio de cierre:
                                        </Typography>
                                        <Typography color="primary.main" sx={{ height: 50, color: "#880E0D", fontSize: 30, fontWeight: 900 }}>
                                            {producto?.price}
                                        </Typography>
                                    </Stack>
                                    <Stack direction="row" gap={1}>
                                        <Typography color="text.secondary" sx={{ height: 50, color: "black", fontSize: 19, paddingTop: 1 }}>
                                            Puja Más Alta :
                                        </Typography>
                                        <Typography color="primary.main" sx={{ height: 50, color: "#625959", fontSize: 30, fontWeight: 900 }}>
                                            {producto ? producto.price - 100 < 0 ? producto.price - 10 : producto.price - 100 : null}
                                        </Typography>
                                    </Stack>
                                    <Stack gap={4}>
                                        <Button variant="contained" startIcon={<LocalMallIcon />} sx={{ width: "70%", height: "5vh", boxShadow: "7px 7px #888888" }} onClick={pagar}>Adquirir a precio de cierre</Button>
                                        <Stack direction="row" gap={2}>
                                            <Button variant="outlined" startIcon={<GavelIcon />} sx={{ width: "30%", height: "5vh"}} onClick={pagar}>Puja</Button>
                                            <TextField
                                                id="precioDePuja"
                                                label="Number"
                                                type="number"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                defaultValue={producto ? producto.price - 100 < 0 ? producto.price - 10 + 1 : producto.price - 100 + 1 : 0}
                                                sx={{height: "5vh"}}
                                                variant="filled"
                                            />
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
        </>
    );
};

export default Auction;
