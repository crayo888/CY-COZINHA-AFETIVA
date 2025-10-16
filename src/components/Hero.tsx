import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import hero1 from "@/assets/hero1.jpeg";
import hero2 from "@/assets/hero2.jpeg";
import hero3 from "@/assets/hero3.jpeg";
import hero4 from "@/assets/hero4.jpeg";
import hero5 from "@/assets/hero5.jpeg";
import hero7 from "@/assets/hero7.jpeg";
import hero8 from "@/assets/hero8.jpeg";
import hero9 from "@/assets/hero9.jpeg";
import hero10 from "@/assets/hero10.jpeg";
import hero11 from "@/assets/hero11.jpeg";
import hero12 from "@/assets/hero12.jpeg";
import hero13 from "@/assets/hero13.jpeg";
import hero14 from "@/assets/hero14.jpeg";
import hero15 from "@/assets/hero15.jpeg";
import hero16 from "@/assets/hero16.jpeg";
import hero17 from "@/assets/hero17.jpeg";
import hero18 from "@/assets/hero18.jpeg";
import hero19 from "@/assets/hero19.jpeg";
import hero20 from "@/assets/hero20.jpeg";
import hero21 from "@/assets/hero21.jpeg";
import hero22 from "@/assets/hero22.jpeg";
import hero23 from "@/assets/hero23.jpeg";
import hero24 from "@/assets/hero24.jpeg";
import hero25 from "@/assets/hero25.jpeg";
import hero26 from "@/assets/hero26.jpeg";
import hero27 from "@/assets/hero27.jpeg";
import hero28 from "@/assets/hero28.jpeg";
import hero29 from "@/assets/hero29.jpeg";
import hero30 from "@/assets/hero30.jpeg";
import hero31 from "@/assets/hero31.jpeg";

const imagens = [hero1, hero2, hero3, hero4, hero5, hero7, hero8, hero9, hero10, hero11, hero12, hero13, hero14, hero15, hero16, hero17, hero18, hero19, hero20, hero21, hero22, hero23, hero24, hero25, hero26, hero27, hero28, hero29, hero30, hero31];


const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagens.length);
    }, 8000);
    return () => clearInterval(intervalo);
  }, []);

  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
      {/* Imagem de fundo com transição suave */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={imagens[index]}
            src={imagens[index]}
            alt="Pratos da Cy Cozinha Afetiva"
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          />
        </AnimatePresence>

        {/* Sobreposição de cor (para o texto continuar legível) */}
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/40" />
      </div>

      {/* Conteúdo principal do Hero */}
      <div className="relative z-10 text-center w-full">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-[#e15459]">
          Cy Cozinha Afetiva
        </h1>
        <p className="text-lg md:text-xl  text-[#e15459]">
          Nossa proposta é levar carinho de forma de comida para nossos clientes.
        </p>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <ChevronDown
          className="h-10 w-10 text-[#e15959] animate-bounce cursor-pointer"
          onClick={() =>
            window.scrollTo({
              top: window.innerHeight,
              behavior: "smooth",
            })
          }
        />
      </div>

    </section>
  );
};

export default Hero;