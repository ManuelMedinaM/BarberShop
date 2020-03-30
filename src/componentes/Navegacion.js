import React,{Component} from 'react';
import i1 from '../img/iconos/peinado.png'
export default class Navegacion extends Component {

    render() {
        return (
        <div className="row mx-md-0 mx-lg-0">
            <div className=" col-lg-12 p-md-0 p-lg-0">
                <nav className=" navbar navbar-expand-lg color-oscuro navbar-dark">
                    <a className="navbar-brand" href="#"> <img src={i1} width="30" height="30" className="d-inline-block align-top mr-lg-2" alt=""></img>BARBERSHOP</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav mr-lg-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Pricing</a>
                        </li>
                        </ul>
                        <span className="navbar-text">
                        Los mejores barberos y estilistas
                        </span>
                    </div>
                </nav>
            </div>
        </div>
        );
    }
}