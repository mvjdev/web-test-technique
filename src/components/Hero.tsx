"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import { FaCalendarAlt, FaArrowDown } from "react-icons/fa";

const Hero = () => {
  const containerVariants : Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 1,
        delayChildren: 2,
      },
    },
  };

  const wordVariants : Variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 1,
      textShadow: "0px 0px 0px rgba(113,221,174,0)"
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      textShadow: "0px 0px 0px rgba(113,221,174,0)",
      transition: { duration: 0.1, ease: "easeOut" }
    },
    hover: { 
      scale: 1.1, 
      textShadow: "0px 0px 8px rgba(113,221,174,0.6)",
      opacity: 1,
      y: 0,
      transition: { duration: 0.2 }
    },
  };

  const itemVariants : Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  // Helper to wrap words for animation
  const AnimatedWord = ({ children, className = "", isGreen = false }: { children: React.ReactNode; className?: string; isGreen?: boolean }) => (
    <motion.span
      className={`inline-block cursor-default ${className} ${isGreen ? "text-[#71ddae]" : "text-white"}`}
      variants={wordVariants}
      whileHover="hover"
      whileTap="hover"
    >
      {children}
    </motion.span>
  );

  return (
    <section className="min-h-screen bg-[#1C1C1C] flex flex-col items-center justify-center relative overflow-hidden px-4 py-20 text-center selection:bg-[#71ddae] selection:text-[#1C1C1C]">
      
      {/* Top Pill */}
      <motion.div
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        className="mb-12 relative group"
      >
        <div className="flex items-center gap-4 px-8 py-4 rounded-full border border-[#71ddae]/20 bg-white shadow-[0_18px_48px_rgba(0,0,0,0.32),0_0_20px_rgba(113,221,174,0.4),0_0_40px_rgba(113,221,174,0.2)] hover:shadow-[0_18px_48px_rgba(0,0,0,0.32),0_0_30px_rgba(113,221,174,0.5),0_0_50px_rgba(113,221,174,0.3)] transition-shadow duration-300">
          <div className="relative w-8 h-8 md:w-10 md:h-10 shrink-0">
             <Image 
               src="/assets/2_Logo_Bulle.png" 
               alt="Logo" 
               fill
               className="object-contain"
             />
          </div>
          <h2 className="text-xl lg:text-3xl font-extrabold text-[#1C1C1C] tracking-wide uppercase">
            Créer un site web <span className="underline decoration-[#1C1C1C]  underline-offset-4">vraiment</span> unique
          </h2>
        </div>
      </motion.div>

      {/* Headline */}
      <motion.h1
        className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight max-w-5xl mx-auto mb-8 text-white relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Line 1 */}
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2">
            <AnimatedWord>Votre</AnimatedWord>
            <AnimatedWord isGreen>site</AnimatedWord>
            <AnimatedWord>doit</AnimatedWord>
            <AnimatedWord isGreen>donner</AnimatedWord>
            <AnimatedWord isGreen>envie</AnimatedWord>
            <AnimatedWord>de</AnimatedWord>
        </div>
        
        {/* Line 2 */}
        <div className="flex flex-wrap justify-center gap-x-3 gap-y-2 mt-2">
           <AnimatedWord isGreen>rester,</AnimatedWord>
           <AnimatedWord>pas</AnimatedWord>
           <AnimatedWord>de</AnimatedWord>
           
           <span className="relative inline-flex items-center gap-3 decoration-[#1C1C1C] line-through decoration-4">
              <AnimatedWord isGreen className="line-through decoration-[#1C1C1C]">revenir</AnimatedWord>
              <AnimatedWord className="line-through decoration-[#1C1C1C]">en</AnimatedWord>
           </span>
        </div>

        {/* Line 3 */}
        <div className="flex flex-wrap justify-center gap-x-1 mt-2 line-through decoration-[#1C1C1C]">
            <AnimatedWord isGreen>arrière</AnimatedWord>
            <motion.span variants={wordVariants} className="text-white">.</motion.span>
        </div>

      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="max-w-lg text-base font-medium text-white/80 sm:max-w-2xl sm:text-lg md:text-xl mb-13"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
      >
        Design moderne, SEO solide, Suivi complet : on construit un site qui retient vos visiteurs et vous apporte des résultats.
      </motion.p>

      {/* CTAs */}
      <motion.div
        className="flex flex-col sm:flex-row items-center gap-6 relative"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.8 }}
      >
        {/* Primary CTA */}
        <motion.button
          className="flex items-center gap-3 px-8 py-4 rounded-lg bg-gradient-to-r from-[#71ddae] to-[#2A9D7A] text-[#1C1C1C] text-xl font-extrabold shadow-lg shadow-[#71ddae]/20"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(113,221,174,0.5)" }}
          whileTap={{ scale: 0.95 }}
        >
          <FaCalendarAlt className="text-xl" />
          Prendre RDV
        </motion.button>

        {/* Secondary CTA */}
        <motion.button
          className="flex items-center gap-2 px-8 py-4 rounded-lg border-2 border-[#71ddae] text-[#71ddae] text-lg font-extrabold bg-transparent"
          whileHover={{ scale: 1.05, backgroundColor: "rgba(113,221,174,0.1)", boxShadow: "0 0 15px rgba(113,221,174,0.2)" }}
          whileTap={{ scale: 0.95 }}
        >
          Découvrir nos projets
          <FaArrowDown className="group-hover:rotate-0 transition-transform" />
        </motion.button>

        {/* Decorative "Un p'tit click ?" - Desktop only */}
        <div className="absolute hidden lg:block -left-[50px] top-22 -translate-y-1/2 pointer-events-none select-none">
           <div className="relative w-40 h-20 transform rotate-[-10deg] opacity-90">
             <Image 
               src="/assets/3_Un_Ptit_Click.png" 
               alt="Un p'tit click ?" 
               fill
               className="object-contain"
             />
           </div>
        </div>

      </motion.div>
    </section>
  );
};

export default Hero;