"use client";
import React, { useState, useEffect } from "react";
import { AppProvider } from "./appContext.js";
import Image from "next/image";
import Navbar from "app/componentes/navbar.js";
import Botbar from "app/componentes/botbar.js";
import Loader from "app/componentes/loader.js";
import Side from "app/componentes/side.js";
import Section1 from "app/componentes/s1-componentes/section1.js";
import Section2 from "app/componentes/s2-componentes/section2.js";
import Section3 from "app/componentes/s3-componentes/section3.js";
import "./page.css";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Función para actualizar el estado basado en el ancho de la ventana
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 700);
    };

    // Establece el estado inicial
    handleResize();

    // Agrega un event listener para el evento resize
    window.addEventListener('resize', handleResize);

    // Limpia el event listener cuando el componente se desmonta
    return () => window.removeEventListener('resize', handleResize);
  }, []); // El array vacío indica que este efecto se ejecuta solo en el montaje y desmontaje


  return (
    <AppProvider>
      <main>
        {isMobile ? (
          <>
<div>holaaaaaaaa</div>
          </>
        ) : (
          <>
            <Loader />
            <Navbar />
            <Side />
            <Section1 />
            <Section2 />
            <Section3 />
            <Botbar />
            <div className="background"></div>
            <div className="noise"></div>
            {/* <div className="red-line"></div> */}
          </>
        )}
      </main>
    </AppProvider>
  );
}
