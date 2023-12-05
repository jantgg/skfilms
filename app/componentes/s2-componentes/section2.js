"use client";
import React, { useState, useEffect, useRef, useContext } from "react";
import { AppContext } from "app/appContext.js";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {Elisa1 } from "public/fotos/elisa1.jpg";
import {Elisa2 } from "public/fotos/elisa2.jpg";
import {Elisa3 } from "public/fotos/elisa3.jpg";
import {Shuck1 } from "public/fotos/shuck1.jpg";
import {Shuck2 } from "public/fotos/shuck2.jpg";
import {Shuck3 } from "public/fotos/shuck3.jpg";
import {Tia1 } from "public/fotos/tia1.jpg";
import {Tia2 } from "public/fotos/tia2.jpg";
import "./section2.css";
import "./slider.css";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

gsap.registerPlugin(ScrollTrigger);

const Section2 = () => {
  const sectionRef2 = useRef(null);
  const {estado2} =
    useContext(AppContext);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(window.innerWidth <= 700);
    }
  }, []);

    const containerS2Ref1 = useRef(null);
    const containerS2Ref2 = useRef(null);
    const containerS2Ref3 = useRef(null);
    const containerS2Ref4 = useRef(null);
    const containerS2Ref5 = useRef(null);
    const containerS2Ref6 = useRef(null);
    const containerS2Ref7 = useRef(null);
    const containerS2Ref8 = useRef(null);
    const [containerS21, setContainerS21] = useState(true);
    const [containerS22, setContainerS22] = useState(false);
    const [containerS23, setContainerS23] = useState(false);
    const [containerS24, setContainerS24] = useState(false);
    const [containerS25, setContainerS25] = useState(false);
    const [containerS26, setContainerS26] = useState(false);
    const [containerS27, setContainerS27] = useState(false);
    const [containerS28, setContainerS28] = useState(false);

    const goUp = () => {
      let newStates = [containerS28, containerS21, containerS22, containerS23, containerS24, containerS25, containerS26, containerS27];
      setContainerS21(newStates[0]);
      setContainerS22(newStates[1]);
      setContainerS23(newStates[2]);
      setContainerS24(newStates[3]);
      setContainerS25(newStates[4]);
      setContainerS26(newStates[5]);
      setContainerS27(newStates[6]);
      setContainerS28(newStates[7]);
  };

  const goDown = () => {
      let newStates = [containerS22, containerS23, containerS24, containerS25, containerS26, containerS27, containerS28, containerS21];
      setContainerS21(newStates[0]);
      setContainerS22(newStates[1]);
      setContainerS23(newStates[2]);
      setContainerS24(newStates[3]);
      setContainerS25(newStates[4]);
      setContainerS26(newStates[5]);
      setContainerS27(newStates[6]);
      setContainerS28(newStates[7]);
  };

  useEffect(() => {
   
}, []);

useEffect(() => {
  if (!isMobile) {
    const timer = setTimeout(() => {
      sectionRef2.current.classList.add('active2');
  }, 200); 
  return () => clearTimeout(timer);
  }

  if (isMobile) {
    setContainerS21(true);
    setContainerS22(true);
    setContainerS23(true);
    setContainerS24(true);
    setContainerS25(true);
    setContainerS26(true);
    setContainerS27(true);
    setContainerS28(true);
  }

}, [isMobile]);



    return (
      <>{isMobile ?      
      
      <section className={`section2`}>
      <div ref={containerS2Ref1} className={`video-containerS2 ${containerS21 ? "position-mid-s2" : "position-up-s2"}`}>
   <Image className="img-slider-s2" src="/fotos/elisa1.jpg" fill
alt="Una mujer joven con cabello castaño claro a la altura de los hombros y un piercing en la nariz, mira hacia la derecha con una expresión contemplativa. Lleva una camiseta blanca básica y un peto vaquero con una de las tiras bajada. La foto tiene un tono ligeramente púrpura y está tomada al atardecer, lo que da una luz suave y cálida. El fondo desenfocado muestra la textura áspera de la corteza de un árbol grande."/>
      </div>
      <div ref={containerS2Ref2} className={`video-containerS2 ${containerS22 ? "position-mid-s2": containerS21 ? "position-down-s2":"position-up-s2"}`}>
      <Image className="img-slider-s2" src="/fotos/elisa2.jpg" fill
alt= "Retrato de una mujer joven con cabello castaño corto y liso, mirando hacia la derecha con una expresión pensativa. Lleva una camiseta negra y un collar delgado. Está rodeada de hojas verdes en primer plano, con una estructura metálica oxidada y ladrillos al fondo, lo que sugiere un entorno abandonado o rústico. La iluminación natural suave enfatiza la atmósfera tranquila y reflexiva de la escena."/>
      </div>
      <div ref={containerS2Ref3} className={`video-containerS2 ${containerS23 ? "position-mid-s2": containerS21 || containerS22 ? "position-down-s2":"position-up-s2"}`}>
      <Image className="img-slider-s2" src="/fotos/elisa3.jpg" fill
alt= "Una mujer con cabello corto color rojo y gafas de sol redondas se encuentra de perfil bajo la sombra de hojas de árbol, proyectadas sobre una pared azul. Lleva una camiseta negra con una imagen estampada del Silver Surfer de los cómics, con colores vibrantes como el amarillo, azul y rojo. La expresión de la mujer es pensativa y está mirando hacia la derecha fuera del cuadro de la imagen"/>
      </div>
      <div ref={containerS2Ref4} className={`video-containerS2 ${containerS24 ? "position-mid-s2": containerS21 || containerS22 || containerS23 ? "position-down-s2":"position-up-s2"}`}>
      <Image className="img-slider-s2" src="/fotos/shuck1.jpg" fill
alt="Un hombre joven mira hacia arriba, extendiendo su brazo hacia algo fuera de la vista. Lleva una camisa de botones con un estampado tropical que incluye hojas de palmera en tonos de azul y verde. La luz natural filtra a través de las hojas detrás de él, y se encuentra dentro de lo que parece ser un invernadero o un ambiente con vegetación exuberante visible a través de los paneles de vidrio detrás de él, lo que da la impresión de exploración o admiración por la naturaleza."/>
      </div>
      <div ref={containerS2Ref5} className={`video-containerS2 ${containerS25 ? "position-mid-s2": containerS21 || containerS22 || containerS23 || containerS24? "position-down-s2":"position-up-s2"}`}>
<Image className="img-slider-s2" src="/fotos/shuck2.jpg" fill
alt="Un hombre joven con una postura relajada está de pie contra una pared de madera. Lleva una camiseta de rayas horizontales grises y blancas, pantalones cortos turquesa desgastados y zapatillas blancas con detalles negros. Tiene un corte de cabello corto y lleva una bandolera verde neón con texto negro cruzada sobre el pecho. El ambiente parece informal y urbano."/>

      </div>
      <div ref={containerS2Ref6} className={`video-containerS2 ${containerS26 ? "position-mid-s2": containerS21 || containerS22 || containerS23 || containerS24 || containerS25? "position-down-s2":"position-up-s2"}`}>
<Image className="img-slider-s2" src="/fotos/shuck3.jpg" fill
alt="Un hombre joven mira hacia arriba, extendiendo su brazo hacia algo fuera de la vista. Lleva una camisa de botones con un estampado tropical que incluye hojas de palmera en tonos de azul y verde. La luz natural filtra a través de las hojas detrás de él, y se encuentra dentro de lo que parece ser un invernadero o un ambiente con vegetación exuberante visible a través de los paneles de vidrio detrás de él, lo que da la impresión de exploración o admiración por la naturaleza."/>

      </div>
      <div ref={containerS2Ref7} className={`video-containerS2 ${containerS27 ? "position-mid-s2": containerS21 || containerS22 || containerS23 || containerS24 || containerS25|| containerS26? "position-down-s2":"position-up-s2"}`}>
<Image className="img-slider-s2" src="/fotos/tia1.jpg" fill
alt="foto de una mujer"/>

      </div>
      <div ref={containerS2Ref8} className={`video-containerS2 ${containerS28 ? "position-mid-s2": containerS21 || containerS22 || containerS23 || containerS24 || containerS25|| containerS26 || containerS27? "position-down-s2":"position-up-s2"}`}>
<Image className="img-slider-s2" src="/fotos/tia2.jpg" fill
alt="foto de una mujer"/>

      </div>

    

  </section> 
  
  :   
  
  <section className={`section2 ${estado2 ? "section-visible2":"section-invisible2"}`} ref={sectionRef2}>
      <div ref={containerS2Ref1} className={`video-containerS2 ${containerS21 ? "position-mid-s2" : "position-up-s2"}`}>
   <Image className="img-slider-s2" src="/fotos/elisa1.jpg" fill
alt="Una mujer joven con cabello castaño claro a la altura de los hombros y un piercing en la nariz, mira hacia la derecha con una expresión contemplativa. Lleva una camiseta blanca básica y un peto vaquero con una de las tiras bajada. La foto tiene un tono ligeramente púrpura y está tomada al atardecer, lo que da una luz suave y cálida. El fondo desenfocado muestra la textura áspera de la corteza de un árbol grande."/>
      </div>
      <div ref={containerS2Ref2} className={`video-containerS2 ${containerS22 ? "position-mid-s2": containerS21 ? "position-down-s2":"position-up-s2"}`}>
      <Image className="img-slider-s2" src="/fotos/elisa2.jpg" fill
alt= "Retrato de una mujer joven con cabello castaño corto y liso, mirando hacia la derecha con una expresión pensativa. Lleva una camiseta negra y un collar delgado. Está rodeada de hojas verdes en primer plano, con una estructura metálica oxidada y ladrillos al fondo, lo que sugiere un entorno abandonado o rústico. La iluminación natural suave enfatiza la atmósfera tranquila y reflexiva de la escena."/>
      </div>
      <div ref={containerS2Ref3} className={`video-containerS2 ${containerS23 ? "position-mid-s2": containerS21 || containerS22 ? "position-down-s2":"position-up-s2"}`}>
      <Image className="img-slider-s2" src="/fotos/elisa3.jpg" fill
alt= "Una mujer con cabello corto color rojo y gafas de sol redondas se encuentra de perfil bajo la sombra de hojas de árbol, proyectadas sobre una pared azul. Lleva una camiseta negra con una imagen estampada del Silver Surfer de los cómics, con colores vibrantes como el amarillo, azul y rojo. La expresión de la mujer es pensativa y está mirando hacia la derecha fuera del cuadro de la imagen"/>
      </div>
      <div ref={containerS2Ref4} className={`video-containerS2 ${containerS24 ? "position-mid-s2": containerS21 || containerS22 || containerS23 ? "position-down-s2":"position-up-s2"}`}>
      <Image className="img-slider-s2" src="/fotos/shuck1.jpg" fill
alt="Un hombre joven mira hacia arriba, extendiendo su brazo hacia algo fuera de la vista. Lleva una camisa de botones con un estampado tropical que incluye hojas de palmera en tonos de azul y verde. La luz natural filtra a través de las hojas detrás de él, y se encuentra dentro de lo que parece ser un invernadero o un ambiente con vegetación exuberante visible a través de los paneles de vidrio detrás de él, lo que da la impresión de exploración o admiración por la naturaleza."/>
      </div>
      <div ref={containerS2Ref5} className={`video-containerS2 ${containerS25 ? "position-mid-s2": containerS21 || containerS22 || containerS23 || containerS24? "position-down-s2":"position-up-s2"}`}>
<Image className="img-slider-s2" src="/fotos/shuck2.jpg" fill
alt="Un hombre joven con una postura relajada está de pie contra una pared de madera. Lleva una camiseta de rayas horizontales grises y blancas, pantalones cortos turquesa desgastados y zapatillas blancas con detalles negros. Tiene un corte de cabello corto y lleva una bandolera verde neón con texto negro cruzada sobre el pecho. El ambiente parece informal y urbano."/>

      </div>
      <div ref={containerS2Ref6} className={`video-containerS2 ${containerS26 ? "position-mid-s2": containerS21 || containerS22 || containerS23 || containerS24 || containerS25? "position-down-s2":"position-up-s2"}`}>
<Image className="img-slider-s2" src="/fotos/shuck3.jpg" fill
alt="Un hombre joven mira hacia arriba, extendiendo su brazo hacia algo fuera de la vista. Lleva una camisa de botones con un estampado tropical que incluye hojas de palmera en tonos de azul y verde. La luz natural filtra a través de las hojas detrás de él, y se encuentra dentro de lo que parece ser un invernadero o un ambiente con vegetación exuberante visible a través de los paneles de vidrio detrás de él, lo que da la impresión de exploración o admiración por la naturaleza."/>

      </div>
      <div ref={containerS2Ref7} className={`video-containerS2 ${containerS27 ? "position-mid-s2": containerS21 || containerS22 || containerS23 || containerS24 || containerS25|| containerS26? "position-down-s2":"position-up-s2"}`}>
<Image className="img-slider-s2" src="/fotos/tia1.jpg" fill
alt="foto de una mujer"/>

      </div>
      <div ref={containerS2Ref8} className={`video-containerS2 ${containerS28 ? "position-mid-s2": containerS21 || containerS22 || containerS23 || containerS24 || containerS25|| containerS26 || containerS27? "position-down-s2":"position-up-s2"}`}>
<Image className="img-slider-s2" src="/fotos/tia2.jpg" fill
alt="foto de una mujer"/>

      </div>
      <div className="s1-buttons-containerS2 texto-bold-wide">
      <button className="arrowupS2 dark" onClick={()=>goDown()}><MdKeyboardArrowLeft/></button>
      <div className="indicatorsS2">
      <span className={`indicatorS2 ${containerS21 ? "position-mid-s2": "position-up-s2-b"}`}>01</span>
      <span className={`indicatorS2 ${containerS22 ? "position-mid-s2": containerS21 ? "position-down-s2-b":"position-up-s2-b"}`}>02</span> 
      <span className={`indicatorS2 ${containerS23 ? "position-mid-s2": containerS21 || containerS22 ? "position-down-s2-b":"position-up-s2-b"}`}>03</span> 
      <span className={`indicatorS2 ${containerS24 ? "position-mid-s2": containerS21 || containerS22 || containerS23 ? "position-down-s2-b":"position-up-s2-b"}`}>04</span>
      <span className={`indicatorS2 ${containerS25 ? "position-mid-s2": containerS21 || containerS22 || containerS23 || containerS24 ? "position-down-s2-b":"position-up-s2-b"}`}>05</span>
      <span className={`indicatorS2 ${containerS26 ? "position-mid-s2": containerS21 || containerS22 || containerS23 || containerS24 || containerS25? "position-down-s2-b":"position-up-s2-b"}`}>06</span> 
      <span className={`indicatorS2 ${containerS27 ? "position-mid-s2": containerS21 || containerS22 || containerS23 || containerS24 || containerS25|| containerS26? "position-down-s2-b":"position-up-s2-b"}`}>07</span> 
      <span className={`indicatorS2 ${containerS28 ? "position-mid-s2": containerS21 || containerS22 || containerS23 || containerS24 || containerS25|| containerS26 || containerS26? "position-up-s2-b":"position-down-s2-b"}`}>08</span>  
      </div>
      <div className="indicatorRS2">{"//08"}</div>
     
        <button className="arrowdownS2 dark" onClick={()=>goUp()}><MdKeyboardArrowRight/></button>

      </div>
      <div className="s2-l1"></div>
      <div className="s2-l2"></div>
    
      {/* <div className="s2-text texto-light-wide"><span>NEGOCIO</span><span>-</span><span>RETRATO</span><span>-</span><span>DEPORTES</span></div> */}
 
  </section> }</>

    );
};

export default Section2;
