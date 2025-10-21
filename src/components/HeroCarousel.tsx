"use client";
import { useState, useEffect } from "react";
const images = ["/hero1.jpg", "/hero2.jpg", "/hero3.jpg"]; // poné tus fotos en /public

export default function HeroCarousel() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % images.length), 3000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="relative aspect-[16/9] overflow-hidden rounded-2xl shadow">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt=""
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </div>
  );
}
