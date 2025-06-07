"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import { easeInOut, motion } from "framer-motion";


const Gallery = () => {
  const images = [
    "/services/img-1.jpg",
    "/services/img-2.jpg",
    "/services/img-3.jpg",
    "/services/img-4.jpg",
    "/services/img-5.jpg",
    "/services/img-6.jpg",
    "/services/img-7.jpg",
    "/services/img-8.jpg",
    "/services/img-9.jpg",
  ];

  return (
    <motion.section
      id="gallery"
      className="py-12 px-6"
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0,}}
      transition={{ duration: 0.8, ease: easeInOut }}
      viewport={{ once: false, amount: 0.5 }}
    >
      <h2 className="text-title text-light tracking-text font-bold mb-20 text-center">
        Nuestro trabajo
      </h2>
      <Swiper
        modules={[Autoplay]}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={12000}
        slidesPerView={2}
        spaceBetween={30}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        className="w-300 object-cover"
        grabCursor={true}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i}>
            <Image
              src={src}
              width={900}
              height={300}
              alt={`imagen-${i}`}
              className="w-full h-[500px] object-cover rounded-xl shadow-lg"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.section>
  );
};

export default Gallery;
