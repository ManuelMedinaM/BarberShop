import React,{Component} from 'react';
import Imagen from './Imagen';

export default class Info extends Component {

    render() {
        return (
           <div className="row my-lg-5 m-0 my-md-5 justify-content-center">
            <div className="col-lg-9 px-md-0">
                <div id={this.props.id} class="tamaño-media media fondo-media">
                    <Imagen
                        imagen={this.props.imagen}
                        boton={this.props.boton}
                    />
                    <div class="media-body mt-lg-3 px-lg-3">
                        <h5 class="mt-lg-0 titulo-box"><strong>{this.props.titulo}</strong></h5>
 
                        <p className="tamaño-contenido">{this.props.contenido1}</p>
                        <p className="tamaño-contenido">{this.props.contenido2}</p>
                    </div>
                </div>   
            </div>
          </div>
        );
    }
}