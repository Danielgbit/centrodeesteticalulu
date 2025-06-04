import Link from "next/link"
import { FaInstagram, FaFacebookF, FaWhatsapp } from "react-icons/fa"

const Footer = () => {
  return (
  <footer className="bg-pink-600 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {/* Marca */}
        <div>
          <h2 className="text-xl font-bold mb-3">Peluquería Bella</h2>
          <p>Realza tu belleza natural con nuestros servicios de calidad.</p>
        </div>

        {/* Horarios */}
        <div>
          <h3 className="font-semibold mb-2">Horarios</h3>
          <ul className="text-sm space-y-1">
            <li>Lun - Vie: 9:00 AM – 7:00 PM</li>
            <li>Sábados: 9:00 AM – 5:00 PM</li>
            <li>Domingos: Cerrado</li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="font-semibold mb-2">Contacto</h3>
          <ul className="text-sm space-y-1">
            <li>📍 Calle Ficticia #123, Ciudad</li>
            <li>📞 +57 300 123 4567</li>
            <li>
              💬{" "}
              <a
                href="https://wa.me/573001234567"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-200"
              >
                Escríbenos por WhatsApp
              </a>
            </li>
          </ul>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h3 className="font-semibold mb-2">Enlaces</h3>
          <ul className="text-sm space-y-1">
            <li><Link href="/">Inicio</Link></li>
            <li><Link href="/productos">Productos</Link></li>
            <li><Link href="/contacto">Contacto</Link></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#galeria">Galería</a></li>
          </ul>
        </div>
      </div>

      {/* Social + copyright */}
      <div className="mt-10 border-t border-pink-400 pt-6 text-center text-sm flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto">
        <p className="mb-4 sm:mb-0">© {new Date().getFullYear()} Peluquería Bella. Todos los derechos reservados.</p>
        <div className="flex space-x-4 text-xl">
          <a href="https://wa.me/573001234567" target="_blank" aria-label="WhatsApp" rel="noopener noreferrer">
            <FaWhatsapp className="hover:text-gray-200" />
          </a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
            <FaInstagram className="hover:text-gray-200" />
          </a>
          <a href="https://facebook.com" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
            <FaFacebookF className="hover:text-gray-200" />
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
