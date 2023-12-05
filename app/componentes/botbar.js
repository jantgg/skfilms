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
      
          <span>YOUTUBE</span>
        </span>
        <span className="glitch-hover-instagram">
        
          <span>INSTAGRAM</span>
        </span>
        <span className="glitch-hover-linkedin">
        
          <span>LINKEDIN</span>
        </span>
      </div>
    </section>
  );
};

export default Botbar;
