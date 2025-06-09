"use client";

import Link from "next/link";
import Button from "./Button";
import { useEffect, useState } from "react";
import { log } from "console";
import clsx from "clsx";

const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScroolY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
        const currentScrollY = window.scrollY;
        setLastScrollY(currentScrollY);

        if(currentScrollY > lastScroolY && currentScrollY > 50) {
          setShowNav(false);
            console.log("setShowNav se ha establecido en:", false); // Mensaje más descriptivo
        }else {
          setShowNav(true);
            console.log("setShowNav se ha establecido en:", true); // Mensaje más descriptivo
        };
    };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroolY]);

  

  return (
    <nav className={clsx('fixed z-50 w-screen px-6 py-7 bg-navbar flex justify-between transition duration-800 ease-in-out',
      {
      'translate-y-[0px]' : showNav,
      'translate-y-[-100px]' : !showNav
      }
    )}>
      <a href="/" className="font-bold text-xl text-light">
        LULÚ
      </a>
      <div className="flex justify-between w-[50%] items-center">
        <Link className="lg:text-[16px] md:text[10px] link-fx text-sm tracking-[-0.5px] text-light" href="/">
          Inicio
        </Link>
        <Link
          className="link-fx text-sm font-bold tracking-[-0.5px] text-light"
          href="/products"
        >
          Productos
        </Link>
        <Link
          className="sm-hidden   md:text-[14px] lg:text-[16px] link-fx text-sm tracking-[-0.5px] text-light"
          href="#contact"
        >
          Contacto
        </Link>
        <Link
          className="sm-hidden   md:text-[14px] lg:text-[16px] link-fx text-sm tracking-[-0.5px] text-light"
          href="/#gallery"
        >
          Galeria
        </Link>
        <Link
          className="sm-hidden   md:text-[14px] lg:text-[16px] link-fx text-sm tracking-[-0.5px] text-light"
          href="/#services"
        >
          Servicios
        </Link>
        <Link
          className="sm-hidden   md:text-[14px] lg:text-[16px] link-fx text-sm tracking-[-0.5px] text-light"
          href="/#testimonials"
        >
          Testimonios
        </Link>
      </div>
      <a href="https://wa.me/573148280265" rel="noopener noreferrer">
        <Button text="Agenda tu cita" />
      </a>
    </nav>
  );
};

export default NavBar;
