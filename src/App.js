import React from 'react';
import './css/App.css';
import ZaraPort from './componentes/ZaraPort';
import Articulos from './componentes/Articulos';
import i2 from './img/iconos/navaja.png'
import i3 from './img/iconos/cerveza.png'
import i4 from './img/iconos/bigote.png'
import Info from './componentes/Info';
import InfoI from './componentes/InfoI';
import b2 from './img/b2.jpg'
import b3 from './img/b3.jpg'
import b4 from './img/b4.png'
import Footer from './componentes/Footer';



function App() {
  var imagen1 = {
    background: `url(${b2})`,
    width:'270px' ,
    height:'200px'
  }
  var imagen2 = {
    background: `url(${b3})`,
    width:'270px' ,
    height:'200px'
  }
  var imagen3 = {
    background: `url(${b4})`,
    width:'270px' ,
    height:'200px'
  }

  var color={background: 'rgb(254, 211, 91) none repeat scroll 0% 0%'}

  var color2={background:'#fff'}
  return (
    <div className="container-fluid px-md-0">
      <div className="row altura-cont m-0">
        <div className="col-lg-12 px-md-0 px-lg-0">
         <ZaraPort/>
        </div>    
      </div>
      <div className="row m-0 altura-foot mt-md-5 mt-lg-0">
        <div className="col-lg-4 col-md-4 px-lg-0  px-md-0">
          <Articulos
            id='#1'
            titulo={'Medina Shop'}
            contenido={'Over 1000 haircuts syles'}
            imagen ={i2}
            boton ={`More `}
            color={color}
          />
        </div>
        <div className="col-lg-4 col-md-4 px-lg-0  px-md-0 ">
        <Articulos
            id='#2'
            titulo={'Medina Bar'}
            contenido={'More than 25 craft beers'}
            imagen ={i3}
            boton ={`More `}
            color={color}
          />
        </div>
        <div className="col-lg-4 col-md-4 px-lg-0 px-md-0 ">
        <Articulos
            id="#3"
            titulo={'-20% for barbels'}
            contenido={'In all september'}
            imagen ={i4}
            boton ={`More `}
            color={color2}
          />
        </div>
      </div>
      <hr className="bordes-puntos my-lg-5"/>
        <Info
        id='1'
        boton= 'Read More'
        imagen ={imagen1}
        titulo =  'No es viejo es clasico'
        contenido1='Lorem iptatum velit soluta omnis cum recusandae magnam alias ea expedita.'
        contenido2='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis omnis alias deleniti repudiandae esse eveniet iste non vel ad impedit cuuptatibus? Quisquam doloribus obcaecati laudantium hic modi ab expedita saepe, nisi ipsam rem voluptatum, debitis voluptatem commodi fuga molestiae ipsum similique facere provident. '
        />
        <InfoI
        id='2'
        boton='Read More'
        imagen ={imagen2}
        titulo = 'Grandes artesanos cuando de cerveza se habla'
        contenido1='sin adit natural a partir del grano, malta, sin utilizar extractos ni productos diferentes del agua, levadura, lúpulo y el cereal para hacer la malta.'
        contenido2={'cada lugar tiene el aroma que desprende su cultura, y esto se refleja en las cervezas artesanas que se elaboran a lo largo y ancho de nueadrid.'}
        />
        <Info
        id='3'
        boton="Read More"
        imagen ={imagen3}
        titulo='No te pierdas de las ofertas'
        contenido1='Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis omnis alias deleniti repudiandae esse eveniet iste non vel ad impedit olenisi, aperiam, consequatur doloribus beatae, at dolore hic natus quos veniam suscipit repellendus eos. Natus, possimus voluptatibus? Possimus, amet quidem sed asperiores quae aut.'
        />
         <Footer
         color={color}
         />
    </div>
   
  );
}

export default App;
