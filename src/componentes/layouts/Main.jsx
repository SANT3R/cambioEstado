import React, {useState} from 'react'
import { Img } from '../UI/Img'
import screen from './images/screen.jpg'

export const Main = () => {
    const [estado, setEstado] = useState(true)
    
    const cambiarEstado = () =>{
        let imagen1= document.getElementById('img1')
        let imagen2= document.getElementById('img2')
        let boton= document.getElementById('btn-main')

        if(estado === false){
            imagen1.style.filter = 'grayscale(50%)'
            imagen2.style.filter = 'grayscale(50%)'
            boton.style.backgroundColor= 'gray'
            boton.style.boxShadow= '10px 10px 10px gray'
            setEstado(true)
        }else{
            imagen1.style.filter = 'grayscale(0%)'
            imagen1.style.boxShadow= '0 0 30px red'
            imagen2.style.filter = 'grayscale(0%)'
            imagen2.style.boxShadow= '0 0 30px rgb(3, 180, 3)'
            boton.style.backgroundColor= 'rgb(3, 180, 3)'
            boton.style.boxShadow= '10px 10px 10px rgb(3, 180, 3)'
            setEstado(false)
        }
    } 

  return (
    <div class="centrar">
        <section id="main">
            <figure id="imagenes">
                <Img direccion={screen} info="Hombre con mascara" className="img-main" idName="img1" />
                <Img direccion={screen} info="Hombre con mascara" className="img-main" idName="img2" />
            </figure>
            <button onClick={cambiarEstado} id="btn-main">Activar</button>
        </section>
    </div>
  )
}
