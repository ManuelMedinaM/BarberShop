import React,{Component} from 'react';
import Imagen from './Imagen';

export default class InfoI extends Component {

    render() {
        return (
           <div className="row m-0 my-lg-5 justify-content-center">
            <div className="col-lg-9 px-md-0">
                <div id={this.props.id} className="media fondo-media tamaño-media">
                    <div className="media-body px-lg-3 mt-lg-3 text-right">
                        <h5 className="mt-lg-0 titulo-box"><strong>{this.props.titulo}</strong></h5>
                        <p className="tamaño-contenido">{this.props.contenido1}</p>
                        <p className="tamaño-contenido">{this.props.contenido2}</p>
                    </div>
                    <Imagen 
                        imagen={this.props.imagen}
                        boton={this.props.boton}
                    />
                </div>   
            </div>
          </div>
        );
    }
}