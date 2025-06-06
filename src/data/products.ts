const products = [
  {
    id: 1,
    name: 'Shampoo Hidratante',
    description: 'Ideal para cabello seco y maltratado.',
    image: 'https://plus.unsplash.com/premium_photo-1747375614453-bd5a94217a6e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    name: 'Aceite Reparador',
    description: 'Repara puntas abiertas y da brillo.',
    image: 'https://plus.unsplash.com/premium_photo-1747375614453-bd5a94217a6e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    name: 'Mascarilla Nutritiva',
    description: 'Nutre profundamente desde la raíz.',
    image: 'https://plus.unsplash.com/premium_photo-1747375614453-bd5a94217a6e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    name: 'Serum Capilar',
    description: 'Controla el frizz y sella la humedad.',
    image: 'https://plus.unsplash.com/premium_photo-1747375614453-bd5a94217a6e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 5,
    name: 'Acondicionador Suavizante',
    description: 'Deja el cabello manejable y suave.',
    image: 'https://plus.unsplash.com/premium_photo-1747375614453-bd5a94217a6e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 6,
    name: 'Gel Fijador',
    description: 'Fija tu peinado sin dejar residuos.',
    image: 'https://plus.unsplash.com/premium_photo-1747375614453-bd5a94217a6e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 7,
    name: 'Crema para Peinar',
    description: 'Define rizos y ondas sin apelmazar.',
    image: 'https://plus.unsplash.com/premium_photo-1747375614453-bd5a94217a6e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 8,
    name: 'Spray Protector Térmico',
    description: 'Protege del calor de planchas y secadores.',
    image: 'https://plus.unsplash.com/premium_photo-1747375614453-bd5a94217a6e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 9,
    name: 'Ampollas Regeneradoras',
    description: 'Tratamiento intensivo para cabellos dañados.',
    image: 'https://plus.unsplash.com/premium_photo-1747375614453-bd5a94217a6e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 10,
    name: 'Keratina Vegetal',
    description: 'Alisado suave sin químicos agresivos.',
    image: 'https://plus.unsplash.com/premium_photo-1747375614453-bd5a94217a6e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 11,
    name: 'Tónico Capilar',
    description: 'Estimula el crecimiento del cabello.',
    image: 'https://plus.unsplash.com/premium_photo-1747375614453-bd5a94217a6e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 12,
    name: 'Champú Matizante',
    description: 'Neutraliza tonos amarillentos en rubios.',
    image: 'https://plus.unsplash.com/premium_photo-1747375614453-bd5a94217a6e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 13,
    name: 'Bálsamo Reparador Nocturno',
    description: 'Actúa mientras duermes para restaurar.',
    image: 'https://plus.unsplash.com/premium_photo-1747375614453-bd5a94217a6e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 14,
    name: 'Mousse Voluminizador',
    description: 'Aporta cuerpo y volumen desde la raíz.',
    image: 'https://plus.unsplash.com/premium_photo-1747375614453-bd5a94217a6e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 15,
    name: 'Spray Iluminador',
    description: 'Brillo instantáneo para tu cabello.',
    image: 'https://plus.unsplash.com/premium_photo-1747375614453-bd5a94217a6e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 16,
    name: 'Leave-In Nutritivo',
    description: 'Aplicación sin enjuague para todo tipo de cabello.',
    image: 'https://plus.unsplash.com/premium_photo-1747375614453-bd5a94217a6e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 17,
    name: 'Tinte Sin Amoniaco',
    description: 'Coloración suave que cuida tu cabello.',
    image: 'https://plus.unsplash.com/premium_photo-1747375614453-bd5a94217a6e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 18,
    name: 'Peine de Carbono',
    description: 'Antiestático y resistente al calor.',
    image: 'https://plus.unsplash.com/premium_photo-1747375614453-bd5a94217a6e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 19,
    name: 'Cepillo Desenredante',
    description: 'Ideal para todo tipo de cabello, sin tirones.',
    image: 'https://plus.unsplash.com/premium_photo-1747375614453-bd5a94217a6e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 20,
    name: 'Spray Detox',
    description: 'Purifica el cuero cabelludo y refresca.',
    image: 'https://plus.unsplash.com/premium_photo-1747375614453-bd5a94217a6e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default products;