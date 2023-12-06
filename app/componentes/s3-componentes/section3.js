"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef, useContext } from "react";
import { AppContext } from "app/appContext.js";
import "./section3.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
  const { estado1, setEstado1, estado2, setEstado2, estado3, setEstado3 } =
    useContext(AppContext);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth <= 700);
      }
    }, []);


  return (
    <>{isMobile ? <section
      className={`section3`}
    >
      {/* <div className="foto-about">
      <Image className="img-s3" src="/fotos/shuck3.jpg"   layout="fill"
 alt="Un hombre joven mira hacia arriba, extendiendo su brazo hacia algo fuera de la vista. Lleva una camisa de botones con un estampado tropical que incluye hojas de palmera en tonos de azul y verde. La luz natural filtra a través de las hojas detrás de él, y se encuentra dentro de lo que parece ser un invernadero o un ambiente con vegetación exuberante visible a través de los paneles de vidrio detrás de él, lo que da la impresión de exploración o admiración por la naturaleza."/>

      </div> */}
      <div className="description-about">
        {" "}
        <h3 className="texto-extrabold-wide dark">CARLOS VILLAVERDE</h3>
        <p className="texto-lato">
          Videógrafo y fotógrafo con sede en Gijón, donde la dinámica urbana y
          la cultura son la esencia de mi arte. Me especializo en
          capturar la singularidad de los negocios locales, brindando una visión
          única que realza su identidad y los conecta con la comunidad. Mi
          enfoque combina una estética clásica con las tendencias
          contemporáneas, priorizando la innovación y la adaptación a las nuevas
          corrientes.
          <br></br>  <br></br>
          Mi cartera de servicios va desde: la promoción de negocios locales
          hasta la inmortalización de eventos significativos y deportivos.
          <br></br>  <br></br>
          Cada imagen y video que capturo es un testimonio de mi pasión por el
          arte visual y mi compromiso con la excelencia.
          <br></br>  <br></br>
          Para consultas, colaboraciones o conocer más sobre mi trabajo no dudes
          en contactarme.
        </p>

        <div className="footer-movil texto-bold-wide dark">
    
      
          <a target="_blank" href="https://www.youtube.com/@skproduccion/videos">YOUTUBE</a>
   
    
        
          <a target="_blank" href="https://www.instagram.com/sk.filming/">INSTAGRAM</a>

  
        
          <a target="_blank" href="https://www.linkedin.com/in/shuck-undefined-9491332a3/">LINKEDIN</a>

      </div>



      </div>
    </section>
    :
    <section
      className={`section3 ${
        estado3 ? "section-visible3" : "section-invisible3"
      }`}
    >
      <div className="foto-about">
      <Image className="img-s3" src="/fotos/shuck3.jpg"   layout="fill"
 alt="Un hombre joven mira hacia arriba, extendiendo su brazo hacia algo fuera de la vista. Lleva una camisa de botones con un estampado tropical que incluye hojas de palmera en tonos de azul y verde. La luz natural filtra a través de las hojas detrás de él, y se encuentra dentro de lo que parece ser un invernadero o un ambiente con vegetación exuberante visible a través de los paneles de vidrio detrás de él, lo que da la impresión de exploración o admiración por la naturaleza."/>

      </div>
      <div className="description-about">
        {" "}
        <h3 className="texto-extrabold-wide dark">CARLOS VILLAVERDE</h3>
        <p className="texto-lato">
          Videógrafo y fotógrafo con sede en Gijón, donde la dinámica urbana y
          la cultura son la esencia de mi arte. Me especializo en
          capturar la singularidad de los negocios locales, brindando una visión
          única que realza su identidad y los conecta con la comunidad. Mi
          enfoque combina una estética clásica con las tendencias
          contemporáneas, priorizando la innovación y la adaptación a las nuevas
          corrientes.
          <br></br>  <br></br>
          Mi cartera de servicios va desde: la promoción de negocios locales
          hasta la inmortalización de eventos significativos y deportivos.
          <br></br>  <br></br>
          Cada imagen y video que capturo es un testimonio de mi pasión por el
          arte visual y mi compromiso con la excelencia.
          <br></br>  <br></br>
          Para consultas, colaboraciones o conocer más sobre mi trabajo no dudes
          en contactarme.
        </p>
      </div>
    </section>
    
    }</>
   
  );
};

export default Section3;
