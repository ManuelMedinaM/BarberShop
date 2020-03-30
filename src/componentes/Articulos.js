import React,{Component} from 'react';


export default class Articulos extends Component {

    render() {
        return (
            <div className="align-self-center pl-lg-5 p-md-0 h-100" style={this.props.color}>
               <div className="media mx-lg-5 mx-md-0 pt-lg-5">
                    <img src={this.props.imagen} width="60" height="60" className="ml-lg-5 ml-md-5 align-self-center" alt="imagen de promocion"/>
                    <div className="media-body ml-lg-3 ">
                        <h4 className="mt-4"> <strong>{this.props.titulo}</strong></h4>
                        {this.props.contenido}
                    </div>
                </div>
                <div className="mt-lg-2 text-center w-100">
                    <button type="button" className="w-100 btn border-0 btn-light" style={this.props.color}><strong><a className="no-decoration" href={this.props.id}>{this.props.boton}</a> &rarr;</strong></button>
                </div>
            </div>
        );
    }
}