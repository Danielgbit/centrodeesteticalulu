import Image from 'next/image'

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1560264641-1b5191cc63e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1560264641-1b5191cc63e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1560264641-1b5191cc63e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1560264641-1b5191cc63e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1560264641-1b5191cc63e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1560264641-1b5191cc63e2?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  return (
    <section className="py-12 px-6 bg-white">
      <h2 className="text-2xl font-bold mb-6 text-center">Nuestro trabajo</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {images.map((src, i) => (
          <Image
            key={i}
            src={src}
            alt={`Trabajo ${i + 1}`}
            width={500}
            height={500}
            className="w-full h-48 object-cover rounded shadow"
          />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
