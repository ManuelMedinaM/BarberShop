import React,{Component} from 'react';
import CajaPromo from './CajaPromo';
export default class Portada extends Component {

    render() {
        return (
        <div className="row altura-cont-2 mx-md-0 mx-lg-0">
            <div className="p-lg-2  mt-5 col-lg-7 col-md-3 offset-2">
                <p className="mt-lg-2 mb-lg-0 lead white amarillo">
                  <strong>Estilista Najeeran Jahoor</strong>
                </p>
                <h1 className=" white tamaño-titulo">
                    <strong>Medina barbershop</strong>
                </h1>
                <p className="amarillo">
                  <strong> Shearing and shaving for brutal woodcuter</strong>
                </p>
                <button type="button" className="btn btn-warning"><strong>Book barber &rarr;</strong></button>
            </div>
            <CajaPromo/>
        </div>
        );
    }
}