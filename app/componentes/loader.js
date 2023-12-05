"use client";
import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "app/appContext.js";
import "./loader.css";
import { MdKeyboardArrowDown } from "react-icons/md";

const Loader = () => {
  const [loaded, setLoaded] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  
   useEffect(() => {
     setTimeout(() => {
     setTextVisible(true);
       }, 200);
   }, []);

  return (
    <section className={`loader ${loaded ? "load-finish" : ""}`}>
      <h1 className={`texto-extrabold ${textVisible ? "":"not-visible1"}`}><span className="dark">SK</span> FILMS</h1>
      <h2 className={`texto-light-wide ${textVisible ? "":"not-visible2"}`}>
        Este <strong>portfolio</strong> es una ventana a mi mundo, una colección de narrativas
        visuales y momentos inolvidables que hablan de mi <strong>habilidad</strong> y 
        <strong> dedicación</strong>.<br></br><br></br> <strong>Te invito a explorar mi trabajo.</strong>
      </h2>
      <button className={`botton-go dark ${textVisible ? "":"not-visible1"}`} onClick={()=>setLoaded(true)}>< MdKeyboardArrowDown/></button>
    </section>
  );
};

export default Loader;
