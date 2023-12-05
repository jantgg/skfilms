"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef, useContext } from "react";
import { AppContext } from "app/appContext.js";
import "./section1.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MdKeyboardArrowUp } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";


gsap.registerPlugin(ScrollTrigger);

const Section1 = () => {
  const { estado1, setEstado1, estado2, setEstado2, estado3, setEstado3 } =
    useContext(AppContext);

    const sectionRef1 = useRef(null);
    const containerRef1 = useRef(null);
    const containerRef2 = useRef(null);
    const containerRef3 = useRef(null);
    const containerRef4 = useRef(null);
    const [container1, setContainer1] = useState(true);
    const [container2, setContainer2] = useState(false);
    const [container3, setContainer3] = useState(false);
    const [container4, setContainer4] = useState(false);

    const goUp = () => {
      if(container4 != true ) {
        setContainer1(container4);
        setContainer2(container1);
        setContainer3(container2);
        setContainer4(container3);
      }

  };

  // Función para mover hacia abajo
  const goDown = () => {
    if(container1 != true ) {
      setContainer1(container2);
      setContainer2(container3);
      setContainer3(container4);
      setContainer4(container1);}
  };

  useEffect(() => {
    // Retrasar la adición de la clase
    const timer = setTimeout(() => {
        sectionRef1.current.classList.add('active1');
    }, 200); // Retraso de 200ms

    // Limpiar el timeout cuando el componente se desmonta
    return () => clearTimeout(timer);
}, []);


    return (
        <section className={`section1 ${estado1 ? "section-visible1":"section-invisible1"}`} ref={sectionRef1}>
            <div ref={containerRef1} className={`video-container ${container1 ? "position-mid": container2 || container3 || container4 ? "position-up":"position-down"}`}>
            <video src="https://res.cloudinary.com/dsbp8pqdb/video/upload/v1701791760/shuck/barberia_nq1hox.mp4" autoPlay loop muted fill="true" />
            </div>
            <div ref={containerRef2} className={`video-container ${container2 ? "position-mid": container3 || container4 ? "position-up":"position-down"}`}>
             <video src="https://res.cloudinary.com/dsbp8pqdb/video/upload/v1701791753/shuck/flashback_g8h4r4.mp4" autoPlay loop muted fill="true" />
            </div>
            <div ref={containerRef3} className={`video-container ${container3 ? "position-mid": container1 || container2 ? "position-down":"position-up"}`}>
             <video src="https://res.cloudinary.com/dsbp8pqdb/video/upload/v1701791743/shuck/tattoo_jcn2gf.mp4" autoPlay loop muted fill="true" />
            </div>
            <div ref={containerRef4} className={`video-container ${container4 ? "position-mid": container1 || container2 || container3 ? "position-down":"position-up"}`}>
             <video src="https://res.cloudinary.com/dsbp8pqdb/video/upload/v1701791727/shuck/laser_dhield.mp4" autoPlay loop muted fill="true" />
            </div>
            <div className="s1-buttons-container texto-bold-wide">
            <button className="arrowup dark" onClick={()=>goDown()}><MdKeyboardArrowUp/></button>
            <div className="indicators">
            <span className={`indicator ${container1 ? "position-mid": container2 || container3 || container4 ? "position-up-b":"position-down-b"}`}>01</span>
            <span className={`indicator ${container2 ? "position-mid": container3 || container4 ? "position-up-b":"position-down-b"}`}>02</span> 
            <span className={`indicator ${container3 ? "position-mid": container1 || container2 ? "position-down-b":"position-up-b"}`}>03</span> 
            <span className={`indicator ${container4 ? "position-mid": container1 || container2 || container3 ? "position-down-b":"position-up-b"}`}>04</span> 
            </div>
            <div className="indicatorR">{"//04"}</div>
           
              <button className="arrowdown dark" onClick={()=>goUp()}><MdKeyboardArrowDown/></button>
   
            </div>
            <div className="s1-l1"></div>
            <div className="s1-l2"></div>
        </section>
    );
};

export default Section1;
