import React,{Component} from 'react';
import '../css/Imagen.css';

export default class Imagen extends Component {

    render() {
        return (
            <div style={this.props.imagen} className="img ml-lg-3 mr-lg-3">
                <div className="scream">
                    <div className="centro">
                        <h3><a className="white decoration" href="#">{this.props.boton}&rarr;</a></h3>
                    </div>   
                </div>
            </div>
        );
    }
}