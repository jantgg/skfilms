"use client";
import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "app/appContext.js";
import "./botbar.scss";
import { MdKeyboardArrowRight } from "react-icons/md";

const Botbar = () => {
    const { estado1, setEstado1, estado2, setEstado2, estado3, setEstado3 } =
    useContext(AppContext);

  return (
    <section className={`botbar ${estado3 ? "moveup":""}`}>
      <div className="div2-inter texto-normal-wide">
        <span className="glitch-hover-youtube">
       <a target="_blank" href="https://www.youtube.com/@skproduccion/videos">YOUTUBE</a>
       
        </span>
        <span className="glitch-hover-instagram">
         <a target="_blank" href="https://www.instagram.com/sk.filming/">INSTAGRAM</a>

       
        </span>
        <span className="glitch-hover-linkedin">
            <a target="_blank" href="https://www.linkedin.com/in/shuck-undefined-9491332a3/">LINKEDIN</a>

      
        </span>
      </div>
    </section>
  );
};

export default Botbar;
