import React from 'react'

const LocationSection = () => {
  return (
    <section className="py-12 px-6">
      <h2 className="text-title text-light tracking-text font-bold mb-20 text-center">Dónde estamos y horarios</h2>
      <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h3 className="text-xl font-semibold mb-5 text-light">Dirección</h3>
          <p className="mb-4 text-shadow text-sm">Calle Ficticia #123, Ciudad, Colombia</p>

          <h3 className="text-xl text-light font-semibold mb-5">Horarios</h3>
          <ul className="text-shadow text-sm">
            <li>Lunes a Viernes: 9:00 AM – 7:00 PM</li>
            <li>Sábados: 9:00 AM – 5:00 PM</li>
            <li>Domingos: Cerrado</li>
          </ul>
        </div>

        <div className="w-full h-64 md:h-80">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.8776842243265!2d-75.6255729264984!3d6.14712592742573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4681607a0bf0e3%3A0x693c3a6c1e15d9b6!2sCentro%20De%20Estetica%20Lulu!5e0!3m2!1ses-419!2sco!4v1749151542944!5m2!1ses-419!2sco" // Pega aquí tu enlace real de Google Maps
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
