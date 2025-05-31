import Link from "next/link"

const NavBar = () => {
  return (
    <nav className="bg-pink-600 text-white px-6 py-4 flex justify-between">
      <span className="font-bold text-xl">Peluquería Bella</span>
      <div className="space-x-4">
        <Link href="/">Inicio</Link>
        <Link href="/productos">Productos</Link>
        <Link href="/contacto">Contacto</Link>
      </div>
    </nav>
  )
}

export default NavBar
