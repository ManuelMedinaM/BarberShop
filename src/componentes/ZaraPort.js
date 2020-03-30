import React,{Component} from 'react';
import Carrusel from './Carrusel';
import Portada from './Portada';
import Navegacion from './Navegacion';
//imagenes
import p1 from '../img/p1.jpg' ;
import p2 from '../img/p2.jpg' ;

class ZaraPort extends Component {

    render() {
        return (
        <React.Fragment>
                {/* texto a mostrar */}
                <div className="col-lg-12 z-index px-md-0 float-left px-lg-0">
                    <Navegacion/>
                    <Portada/>
                </div>             
                <div className="col-lg-12 px-md-0 px-lg-0">
                    <div className="position-absolute -z-index ancho">
                        <Carrusel
                            imagen1={p1}
                            imagen2={p2}
                        />
                    </div>
            </div> 

        </React.Fragment>
        );
    }
}

export default ZaraPort