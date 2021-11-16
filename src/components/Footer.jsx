import React from 'react'
import 'styles/stylesGeneral.css'
import imagenLogo from 'media/instagram.png';
import imagenLogo2 from 'media/face.png';
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer >
            <div className='footer'>
                <div className='contenedorDivsFooter'>
                    <div>
                        <span >Calle 16 # 43 - 76 Colombia / 3102224445 / mueblestic@hotmail.com  | </span>
                    </div>
                    <div >
                        <span >Síguenos en nuestras redes sociales:</span>
                    </div>
                    <div>
                    <Link to="/">
                        <img src={imagenLogo} className="imaMain" alt='Logo Instagram'></img>
                    </Link>
                    </div>
                    <div>
                    <Link to="/">
                        <img src={imagenLogo2} className="imaMain" alt='Logo Facebook'></img>
                    </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
