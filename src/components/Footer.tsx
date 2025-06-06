import Link from "next/link";
import { FaInstagram, FaFacebookF, FaWhatsapp, FaPhone } from "react-icons/fa";
import { FaLocationPin  } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-footer text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-8">
        {/* Marca */}
        <div>
          <h2 className="text-xl font-bold mb-3 text-light">LULÚ</h2>
          <p className="text-sm tracking-text text-light">
            Realza tu belleza natural con nuestros servicios de calidad.
          </p>
        </div>

        {/* Horarios */}
        <div>
          <h3 className="font-semibold mb-2 tracking-text text-light">Horarios</h3>
          <ul className="text-sm space-y-1 text-light">
            <li>Lun - Vie: 10:00 AM – 7:30 PM</li>
            <li>Sábados: 10:00 AM – 7:30 PM</li>
            <li>Domingos: Cerrado</li>
            <li>Festivos: Cerrado</li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 id="contact" className="font-semibold mb-2 tracking-text text-light">Contacto</h3>
          <ul className="text-sm space-y-2 text-light ">
            <li className="flex gap-3 text-center justify-left aling-center"><FaLocationPin/> Calle 78 C-SUR #46-101</li>
            <li className="flex gap-3 text-center justify-left aling-center"><FaPhone/> +57 3148280265</li>
            <li>
              <a
                href="https://wa.me/573148280265"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-gray-200"
              >
                <div className="flex gap-3 text-center justify-left aling-center">
                  <FaWhatsapp className="self-center" /> Escríbenos por WhatsApp
                </div>
              </a>
            </li>
          </ul>
        </div>

        {/* Enlaces rápidos */}
        <div>
          <h3 className="font-semibold mb-2 tracking-text text-light">Enlaces</h3>
          <ul className="text-sm space-y-1 text-light">
            <li>
              <Link href="/" className="text-sm tracking-text">
                Inicio
              </Link>
            </li>
            <li>
              <Link href="/products" className="text-sm tracking-text">
                Productos
              </Link>
            </li>
            <li>
              <Link href="#contact" className="text-sm tracking-text">
                Contacto
              </Link>
            </li>
            <li>
              <a href="#services" className="text-sm tracking-text">
                Servicios
              </a>
            </li>
            <li>
              <a href="#gallery" className="text-sm tracking-text">
                Galería
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Social + copyright */}
      <div className="mt-10 border-t border-pink-400 pt-6 text-center text-sm flex flex-col sm:flex-row justify-between items-center max-w-6xl mx-auto">
        <p className="mb-4 sm:mb-0 text-light text-xs">
          © {new Date().getFullYear()} Peluquería LULÚ. Todos los derechos
          reservados.
        </p>
        <div className="flex space-x-4 text-xl">
          <a
            href="https://wa.me/573148280265"
            target="_blank"
            aria-label="WhatsApp"
            rel="noopener noreferrer"
            className="flex aling-center justify-center"
          >
            <FaWhatsapp className="hover:text-gray-200" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            aria-label="Instagram"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-gray-200" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            aria-label="Facebook"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="hover:text-gray-200" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
