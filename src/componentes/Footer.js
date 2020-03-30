import React from 'react';
import f1 from '../img/iconos/gorjeo.png' ;
import f2 from '../img/iconos/facebook.png' ;
import f3 from '../img/iconos/instagram.png' ;
import f4 from '../img/iconos/whatsapp.png' ;

const Footer = (props) => {
    return (
        <div className="row altura-foot m-0">
            <div className="col-lg-12" style={props.color}>
                <div className="row mt-md-3  mt-lg-4 justify-content-center">
                    <div className="col-lg-1 col-md-1 mx-lg-0 px-0 text-center">
                            <img className="img-foot" src={f1}/>
                    </div>
                    <div className="col-lg-1 col-md-1 mx-0 px-lg-0 text-center">
                            <img className="img-foot" src={f2}/>
                    </div>
                    <div className="col-lg-1 col-md-1 mx-0 px-lg-0 text-center">
                            <img className="img-foot" src={f3}/>
                    </div>
                    <div className="col-lg-1 col-md-1 mx-0 px-lg-0 text-center">
                            <img className="img-foot" src={f4}/>
                    </div>
                </div>
                <hr className="mt-lg-4"/>
                <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-5">
                        <p> ipsum dolor sit amet consectetur adipisicing elit. Corporis omnis ali</p>
                        <p> ipsum dolor sit amet consectetur adipisicing elit. Corporis omnis ali</p>
                        <p> ipsum dolor sit amet consectetur adipisicing elit. Corporis omnis ali</p>
                    </div>                    
                </div>
            </div>
        </div>
    );
};

export default Footer;