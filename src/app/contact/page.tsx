
const page = () => {

    const whatsapp = 32434324;
    const message = 'Que esperas para gendar?'

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-semibold mb-4">Contáctanos</h2>
      <p className="mb-4">Estamos disponibles para resolver tus dudas y agendar citas.</p>
      <a
        href={`https://wa.me/${whatsapp}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
      >
        Escríbenos por WhatsApp
      </a>
    </div>
  )
}

export default page
