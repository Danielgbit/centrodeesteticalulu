import Link from "next/link";
import Button from "./Button";

const NavBar = () => {
  return (
    <nav className="text-white px-6 py-7 bg-navbar flex justify-between">
      <a href="/" className="font-bold text-xl text-[#3b0d35]">LULÚ</a>
      <div className="flex justify-between w-[50%] items-center">
        <Link className="link-fx text-sm tracking-[-0.5px] text-light" href="/">
          Inicio
        </Link>
        <Link
          className="link-fx text-sm font-bold tracking-[-0.5px] text-light"
          href="/products"
        >
          Productos
        </Link>
        <Link className="link-fx text-sm tracking-[-0.5px] text-light" href="#contact">
          Contacto
        </Link>
        <Link className="link-fx text-sm tracking-[-0.5px] text-light" href="/#gallery">
          Galeria
        </Link>
        <Link className="link-fx text-sm tracking-[-0.5px] text-light" href="/#services">
          Servicios
        </Link>
        <Link
          className="link-fx text-sm tracking-[-0.5px] text-light"
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
