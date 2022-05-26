import './Login.css'

export default function LoginParsa() {
    return (
        <div className="box-form">
            <div className="left">
                <div className="overlay">
                    <h1>EGUAY</h1>
                    <br />

                    <span>
                        <p>Bienvenido al mercado EGUAY donde comprar ha sido
                            Mucho mas facil y mas divertido !!!</p>
                        <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                        <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                    </span>
                </div>
            </div>
            <div className="right">
                <h5>Iniciar Session</h5>
                <br />
                <br />
                <br />
                <br />
                <br />

                <p>Aún no tienes cuenta? <a href="#">Crea tu cuenta aquí</a> tardará menos de un minuto</p>
                <div className="inputs">
                    <input type="text" placeholder="Usuario" />
                    <br />
                    <input type="password" placeholder="Contraseña" />
                </div>
                <br />
                <br />
                <label>
                    <input type="checkbox" name="item" checked />
                    <span className="text-checkbox">Remember me</span>
                </label>
                <br />
                <button>Login</button>
            </div>
        </div>
    )
}