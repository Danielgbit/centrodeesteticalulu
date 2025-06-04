import Link from "next/link"
import Button from "./Button"

const NavBar = () => {
  return (
<nav className="bg-nav-background text-white px-6 py-4 flex justify-between">
      <span className="font-bold text-xl text-[#3b0d35]">LULÚ</span>
      <div className="space-x-4">
        <Link className="text-sm tracking-[-0.5px] text-light" href="/">Inicio</Link>
        <Link className="text-sm tracking-[-0.5px] text-light" href="/productos">Productos</Link>
        <Link className="text-sm tracking-[-0.5px] text-light" href="/contacto">Contacto</Link>
        <Button text="Agenda tu cita"/>
      </div>
    </nav>
  )
}

export default NavBar
