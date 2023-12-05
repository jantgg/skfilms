import React from "react";
import { AppProvider } from "./appContext.js"; // Asegúrate de importar correctamente el AppProvider
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
  return (
    <AppProvider>
      <main>
        <Loader/>
        <Navbar />
        <Side />
        <Section1 />
        <Section2 />
        <Section3 />
        <Botbar />
        <div className="background"></div>
        <div className="noise"></div>
        {/* <div className="red-line"></div> */}
      </main>
    </AppProvider>
  );
}
