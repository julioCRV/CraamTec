import React from 'react'
import './Componente2.css'
import cuento from '../assets/cuento.jpg'
export default function Componente2() {
  return (
    <div>
      <h2 >Un error en el plan de respaldo</h2>
      <div className='cuento'>
      <img src={cuento} alt="logo"/>
      <p className='texto1'>Esto ocurrió con el lanzamiento de un sistema completamente nuevo para una instalación médica sin <br />
        el plan de respaldo adecuado. Lo que significaba que los registros del hospital en esa instalación <br />
        tenían que ser recuperados mediante la entrada manual. Además, para recuperar los registros de esta <br />
        instalación médica,los funcionarios de la administración del hospital tuvieron que pagar un costo más <br />
        alto al solicitar ayuda adicional de un proveedor externo para volver a ingresar la información de <br />
        aproximadamente 5,000 registros manualmente.</p>
      </div>
      <div className='textoSecundario'>
        <p>Hace un par de años, estaba trabajando en dar una sesión introductoria sobre Xamarin. Tenía la intención <br />
           de seguir los pasos básicos para crear un proyecto, agregar una página de contenido con algunos controles <br />
            y demostrar cómo podría manipularlo en C # y XAML. En algún momento la noche anterior a la presentación, <br />
            la máquina debe haberse reiniciado e instalado algunas actualizaciones. Lo que sucedió durante esas actualizaciones <br />
             terminó rompiendo sutilmente mi instalación de Visual Studio en la medida en que ya no tenía ninguna plantilla de <br />
              proyecto o la capacidad de agregar páginas XAML a través del IDE. Descubrí esto justo antes de la presentación.</p>
      </div>
    </div>
  )
}
