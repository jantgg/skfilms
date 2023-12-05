"use client";
import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "app/appContext.js";
import "./navbar.scss";
import { MdKeyboardArrowRight } from "react-icons/md";

const Navbar = () => {
  const { estado1, setEstado1, estado2, setEstado2, estado3, setEstado3 } =
    useContext(AppContext);

  const handleVideoClick = () => {
    setEstado1(true);
    setEstado2(false);
    setEstado3(false);
  };
  const handlePhotoClick = () => {
    setEstado1(false);
    setEstado2(true);
    setEstado3(false);
  };
  const handleAboutClick = () => {
    setEstado1(false);
    setEstado2(false);
    setEstado3(true);
  };

  return (
    <section className="navbar">
      <div className="div2-inter texto-normal-wide">
        <span className="glitch-hover-video" onClick={handleVideoClick}>
          <span className={`right-arrow ${estado1 ? "opacity1":"opacity0"}`}><MdKeyboardArrowRight/></span>
          <span>VIDEO</span>
        </span>
        <span className="glitch-hover-photo" onClick={handlePhotoClick}>
          <span className={`right-arrow ${estado2 ? "opacity1":"opacity0"}`}><MdKeyboardArrowRight/></span>
          <span>FOTO</span>
        </span>
        <span className="glitch-hover-about" onClick={handleAboutClick}>
          <span className={`right-arrow ${estado3 ? "opacity1":"opacity0"}`}><MdKeyboardArrowRight/></span>
          <span>SOBRE MI</span>
        </span>
      </div>
    </section>
  );
};

export default Navbar;
