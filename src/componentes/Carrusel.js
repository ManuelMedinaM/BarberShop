import React,{Component} from 'react';


class Carrusel extends Component {

    render() {
        return (

        <div id="carrusel" className=" carousel slide" data-ride="carousel">

            <div className="carousel-inner ">
              <div className="carousel-item active ">
                <img src={this.props.imagen1} className="imagen-caru d-block w-100" />
              </div>
              <div className="carousel-item ">
                <img src={this.props.imagen2} className=" imagen-caru altura-cont d-block w-100" />
              </div>
            </div>
        </div>
        );
    }
}
export default Carrusel