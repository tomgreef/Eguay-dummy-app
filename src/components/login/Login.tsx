import './Login.css'
import { Box, Link, Typography } from '@mui/material';

export default function Login() {
    return(

        <>
            <head>
                <meta charSet="UTF-8"/>
                <title>Login Page in HTML with CSS Code Example</title>
                <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet"/>
                <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                      rel="stylesheet"
                      integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                      crossOrigin="anonymous"/>
                    <link rel="stylesheet" href="./style.css"/>

            </head>
            <body>
            <div className="box-form">
                <div className="left">
                    <div className="overlay">
                        <h1>EGUAY</h1>
                        <br/>

                        <span>
			<p>Bienvenido al mercado EGUAY donde comprar ha sido
                            Mucho mas facil y mas divertido !!!</p>
			<a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
			<a href="#"><i className="fa fa-twitter" aria-hidden="true"></i> Login with Twitter</a>
		</span>
                    </div>
                </div>
                <div className="right">
                    <h5>Iniciar Session</h5>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>

                    <p>Aún no tienes cuenta? <a href="#">Crea tu cuenta aquí</a> tardará menos de un minuto</p>
                        <div className="inputs">
                            <input type="text" placeholder="Usuario"/>
                                <br/>
                            <input type="password" placeholder="Contraseña"/>
                        </div>
                    <br/>
                    <br/>
                    <label>
                        <input type="checkbox" name="item" checked/>
                        <span className="text-checkbox">Remember me</span>
                    </label>
                    <br/>
                        <button>Login</button>
                </div>
            </div>

            </body>
        </>
    )
}