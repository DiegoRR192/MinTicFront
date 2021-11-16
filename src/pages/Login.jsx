import React, { useState } from 'react';
import 'styles/login.css';
import iconoLogin from 'media/iconoLogin.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import GoogleLogin from 'react-google-login';
//import { useGoogleLogin } from 'react-google-login';


//adiciones
import 'styles/stylesGeneral.css'
import { Link } from "react-router-dom";


const Login = () => {
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    function takeDatUser(event) {
        setUser(event.target.value)
    }
    function takeDatPass(event) {
        setPass(event.target.value)
    }

    function ingresoSistema() {
        if (user === 'Mueble' && pass === 'Muebles') {
            console.log('Ingreso Exitoso');
        } else {
            console.log('Ingreso errado');
        }
    }
    /* Aquí se implementa l login con google*/
    /*const { signIn, loaded } = useGoogleLogin({
        onSuccess,
        onAutoLoadFinished,
        clientId,
        cookiePolicy,
        loginHint,
        hostedDomain,
        autoLoad,
        isSignedIn,
        fetchBasicProfile,
        redirectUri,
        discoveryDocs,
        onFailure,
        uxMode,
        scope,
        accessType,
        responseType,
        jsSrc,
        onRequest,
        prompt
      })*/

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [url, setUrl] = useState("");

    const responseGoogle = (response) => {
        console.log(response);
        setName(response.profileObj.name);
        setEmail(response.profileObj.email);
        setUrl(response.profileObj.imageUrl);
    }



    return (
        <div className="contLogin">
            <div className="tituloLogin">
                <Link to="/">
                    <Button variant="outlined" type="submit" color="Secondary">Volver</Button>
                </Link>
            </div>
            <div className="tituloLogin">MUEBLES TIC</div>
            <img src={iconoLogin} className="contIma" alt="IconoIngreso" />
            <div className="inputsLogin">
                <TextField id="inputLogin" label="Usuario" onChange={(e) => takeDatUser(e)} variant="outlined" color="secondary" />
                <TextField id="inputLogin" type="password" onChange={(e) => takeDatPass(e)} label="Password" variant="outlined" color="secondary" />
                <Button variant="outlined" type="submit" onClick={() => ingresoSistema()} color="Secondary">Ingresar</Button>
                <h2>Bienvenido: {name}</h2>
                <h2>Email: {email}</h2>
                <img src={url} alt="foto"/>
                <GoogleLogin
                    clientId="369011281328-dkjpaeefsfddtalp476k0677ghe811qn.apps.googleusercontent.com"
                    buttonText="Ingresar con Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                />
            </div>
        </div>
    );
}
export default Login;

