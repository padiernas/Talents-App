import React from 'react'
import './About.css'
import imageDescription from '../../../Assets/images/sobrenosotros.png'
import imageBanner from '../../../Assets/images/bannerSonBata.jpg'

const About = () => {
  const titulo = 'El talento no tiene estrato social'
  return (
    <div className="container-principal">
      <div className="container-about">
        <div className="container-titles">
          <h1 className="title-aboutUs">Escuela de Código Comuna C13</h1>
          <h2 className="slogan">{titulo}</h2>
        </div>
      </div>

      <div className="container-banner">
        <img src={imageBanner} alt="" className="image-baner" />
      </div>

      <div className="container-description">
        <iframe
          width="80%"
          height="500"
          src="https://www.youtube.com/embed/Gx2EHOrCuZU"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="container-description-1">
        <img src={imageDescription} alt="" className="image-description" />
        <div className="container-description-2">
          <h1 className="description-1">
            Código Comuna 13 es una escuela para el desarrollo de capacidades
            digitales "TI" y la generación de conocimiento aplicado a la
            economía digital y la construcción de un proyecto de vida legal y
            sostenible.
          </h1>
        </div>

        <div className="container-description-3">
          <h1 className="description-2">
            <span> Aprovechar la alta demanda en las </span>
            <span> areas de la tecnología </span> de la información como una
            herramienta para el cierre de brechas de inequidad social,
            convertirla en un puente para la <span> empleabilidad </span> y la
            generación de riqueza en comunidades socialmente vulnerables,
            aportando a la transformación hacia comunidades socialmente
            sostenibles.
          </h1>
        </div>
      </div>

      <div className="container-description">
        <iframe
          width="80%"
          height="550"
          src="https://www.youtube.com/embed/pWlSoH4yhvA"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <div className="container-description">
        <iframe
          width="80%"
          height="500"
          src="https://www.youtube.com/embed/q2mg3QTxef0"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

    </div>
  )
}

export default About
