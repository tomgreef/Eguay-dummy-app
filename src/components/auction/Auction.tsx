import { Grid,Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import NavBar from "../app/NavBar";
import Item from "@mui/material";


const Image = 'http://img.freepik.com/vector-gratis/ilustracion-cambio-hora-primavera-plana-organica-reloj-flores_23-2148856650.jpg?w=2000'

const HeaderStyle = {
    fontFamily: 'Roboto',
fontStyle: 'normal',
fontWeight: 400,
fontSize: '72px',
lineHeight: '84px',
marginTop: 17,
marginLeft :0 ,

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
marginLeft :0 ,

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
  return (
    <>
      <NavBar />
      <Grid container display="flex" justifyContent="flex-start"
        alignItems="flex-start" spacing={20} >
        <Grid item xs={5} >
        <Box
            sx={{
                width: 700,
                height: 700,
                alignItems: 'center',
                alignContent:'center',
                margin : "normal",
                borderradius :"5px" ,
                backgroundImage: `url(${Image})`,
                backgroundPosition: "center" , 
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                m: 15,
                mt:2,
                backdropfilter: "blur(10px)", 
                '&:hover': {
                backgroundColor: '#929496',
                opacity: [0.9, 0.8, 0.7],
                display: 'flex'
                },
            }}
    />
        </Grid>
        <Grid item xs={5}>
            <Box 
                sx={{backgroundColor:"#FFFFFF"}}>
                <Grid>
                    <Box sx={{marginLeft:"57px" }}>
                        <h1 style={HeaderStyle} >Titulo</h1>
                        <h1 style={HeaderStyle2}>Werimer - 40MM</h1>
                        <Box sx={{maxWidth:"500px"}}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </Box>
                        <br></br>
                        <Stack gap={5}>
                            <Stack direction="row" gap={8}>
                                <Typography color="text.secondary"  sx={{ height: 50, color: "black", fontSize: 19 }}>
                                    Tiempo Restante: 
                                </Typography>
                                <Typography color="text.secondary"  sx={{ height: 50, color: "black", fontSize: 20 , fontWeight:900 }}>
                                    {remainingTime(randomDate(new Date(), new Date(2022, 6, 12)))}
                                </Typography>
                            </Stack>
                            <Stack direction="row" gap={8}>
                                <Typography color="text.secondary"  sx={{ height: 50, color: "black", fontSize: 19 }}>
                                    Tiempo Restante: 
                                </Typography>
                                <Typography color="text.secondary"  sx={{ height: 50, color: "black", fontSize: 20 , fontWeight:900 }}>
                                    {remainingTime(randomDate(new Date(), new Date(2022, 6, 12)))}
                                </Typography>
                            </Stack>    
                        </Stack>
                    </Box>
                </Grid>  
                </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Auction;
