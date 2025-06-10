"use client";

import Link from "next/link";
import Button from "./Button";
import { useEffect, useState } from "react";
import clsx from "clsx";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setLastScrollY(currentScrollY);

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowNav(false);
      } else {
        setShowNav(true);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const links = [
    { href: "/", label: "Inicio" },
    { href: "/products", label: "Productos" },
    { href: "/#contact", label: "Contacto" },
    { href: "/#gallery", label: "Galería" },
    { href: "/#services", label: "Servicios" },
    { href: "/#testimonials", label: "Testimonios" },
  ];

  return (
    <nav
      className={clsx(
        "fixed z-50 w-full px-6 py-5 bg-navbar flex items-center justify-between transition duration-500 ease-in-out",
        {
          "translate-y-0": showNav,
          "-translate-y-100": !showNav,
        }
      )}
    >
      {/* Logo */}
      <a href="/" className="font-bold text-xl text-light">
        LULÚ
      </a>

      {/* Desktop menu */}
      <div className="hidden md:flex space-x-6 items-center">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-light text-sm font-medium hover:text-pink-400 transition"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* Button */}
      <div className="hidden md:block">
        <a href="https://wa.me/573148280265" rel="noopener noreferrer">
          <Button text="Agenda tu cita" />
        </a>
      </div>

      {/* Mobile icon */}
      <button
        onClick={toggleMobileMenu}
        className="text-light text-2xl md:hidden focus:outline-none"
        aria-label="Abrir menú"
      >
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-navbar flex flex-col items-center py-6 gap-4 shadow-lg md:hidden z-40 transition-all duration-300">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-light text-base hover:text-pink-400 transition"
            >
              {link.label}
            </Link>
          ))}
          <a
            href="https://wa.me/573148280265"
            rel="noopener noreferrer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <Button text="Agenda tu cita" />
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
