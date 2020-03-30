import React,{Component} from 'react';
import b1 from '../img/b1.jpg'
class CajaPromo extends Component {

    render() {
        return (
            <div className="d-none d-lg-block col-lg-3 px-lg-0 offset-lg-0 pt-lg-2 align-self-center color-oscuro">
               <samp className="amarillo ml-lg-3"># Free</samp>
               <div className="media mx-lg-3">
                    <div className="media-body white">
                        <h4 className="mt-lg-4 titulo-box"> beer jar every friday</h4>
                    </div>
                    <img src={b1} className="ml-lg-0 w-50" alt="imagen de promocion"/>
                </div>
                <div className="mt-lg-2 text-center w-100">
                    <button type="button" className="w-100 btn color-oscuro border-0 btn-dark"><strong>&rang;</strong></button>
                </div>
            </div>
        );
    }
}
export default CajaPromo 