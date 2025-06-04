const Services = () => {
  return (
   <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-2xl font-bold mb-8 text-center">Nuestros Servicios</h2>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div>
          <h3 className="text-xl font-semibold mb-4 text-pink-600">Uñas</h3>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
            <li>Press On</li>
            <li>Semi permanente</li>
            <li>Tradicional</li>
            <li>Base Rubber</li>
            <li>Acrílicas</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-4 text-pink-600">Cabello</h3>
          <ul className="space-y-2 list-disc list-inside text-gray-700">
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
