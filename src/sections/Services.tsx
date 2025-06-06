const Services = () => {
  return (
   <section id="services" className="py-12 px-6">
      <h2 className="text-title text-light tracking-text font-bold mb-20 text-center">Nuestros Servicios</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="text-left mx-30">
          <h3 className="text-xl font-semibold mb-10 text-light">Uñas</h3>
          <ul className="space-y-2 list-disc text-sm list-inside font-normal text-light tracking-text">
            <li>Press On</li>
            <li>Semi permanente</li>
            <li>Tradicional</li>
            <li>Base Rubber</li>
            <li>Acrílicas</li>
          </ul>
        </div>
        <div className="text-left mx-30">
          <h3 className="text-xl font-semibold mb-10 text-light">Cabello</h3>
          <ul className="space-y-2 list-disc text-sm list-inside font-normal text-light tracking-text">
            <li>Enjuagues</li>
            <li>Tratamientos capilares</li>
            <li>Cepillados y alisado</li>
            <li>Keratinas sin formol</li>
            <li>Rayitos o rayos</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Services
