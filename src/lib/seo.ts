// src/lib/seo.ts
import type { Metadata } from "next";

export const seo: Metadata = {
  title: 'Centro de Estética Lulu | Cuidado Capilar en Sabaneta',
  description:
    'Centro de Estética Lulu en Medellín: expertos en cuidado capilar, tratamientos faciales, uñas, y más. Agenda tu cita hoy y resalta tu belleza natural.',
  keywords: [
    'centro de estética Medellín',
    'peluquería Medellín',
    'peluquería Sabaneta',
    'tratamientos capilares',
    'cuidado facial',
    'press on sabaneta',
    'manicure y pedicure Medellín',
    'salón de belleza Medellín',
    'Lulu estética Medellín',
    'Lulu estética Sabaneta',
  ],
  metadataBase: new URL('https://web-lulu-hair-salon-next-js-ts-tw-c-gray.vercel.app'),
  openGraph: {
    title: 'Centro de Estética Lulu | Belleza en Sabaneta',
    description:
      'Expertos en belleza capilar, facial y corporal. Visítanos en Medellin-Sabaneta y vive una experiencia de cuidado total.',
    url: 'https://web-lulu-hair-salon-next-js-ts-tw-c-gray.vercel.app',
    siteName: 'Centro de Estética Lulu',
    locale: 'es_CO',
    type: 'website',
    images: [
      {
        url: 'https://web-lulu-hair-salon-next-js-ts-tw-c-gray.vercel.app/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Centro de Estética Lulu',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Centro de Estética Lulu | Cuidado Capilar en Sabaneta',
    description:
      'Tratamientos para el cabello, rostro y cuerpo en el mejor centro de estética de Medellín-Sabaneta.',
    images: ['https://web-lulu-hair-salon-next-js-ts-tw-c-gray.vercel.app/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://web-lulu-hair-salon-next-js-ts-tw-c-gray.vercel.app',
  },
  robots: {
    index: true,
    follow: true,
  },
};


export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "BeautySalon",
  name: "Centro de Estética Lulu",
  image: "https://web-lulu-hair-salon-next-js-ts-tw-c-gray.vercel.app/og-image.jpg",
  "@id": "https://web-lulu-hair-salon-next-js-ts-tw-c-gray.vercel.app",
  url: "https://web-lulu-hair-salon-next-js-ts-tw-c-gray.vercel.app",
  telephone: "+573148280265",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Calle 78 C-Sur #46-101",
    addressLocality: "Sabaneta",
    addressRegion: "Antioquia",
    postalCode: "055450",
    addressCountry: "CO",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      opens: "10:00",
      closes: "19:30",
    }
  ],
  sameAs: [
    "https://www.instagram.com/lulucentrodeestetica/?hl=es-la",
    "https://wa.me/573148280265"
  ]
});
