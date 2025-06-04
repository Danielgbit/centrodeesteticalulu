import React from 'react'

const LocationSection = () => {
  return (
    <section className="py-12 px-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4 text-center">Dónde estamos y horarios</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-lg font-semibold mb-2">Dirección</h3>
          <p className="mb-4">Calle Ficticia #123, Ciudad, Colombia</p>

          <h3 className="text-lg font-semibold mb-2">Horarios</h3>
          <ul className="text-gray-700">
            <li>Lunes a Viernes: 9:00 AM – 7:00 PM</li>
            <li>Sábados: 9:00 AM – 5:00 PM</li>
            <li>Domingos: Cerrado</li>
          </ul>
        </div>

        <div className="w-full h-64 md:h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!..." // Pega aquí tu enlace real de Google Maps
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            className="rounded-lg shadow"
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default LocationSection;
