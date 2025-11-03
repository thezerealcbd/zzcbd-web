import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function App(){
  const [openFaq,setOpenFaq]=useState(null)

  const novedades = [
    { img: "https://images.unsplash.com/photo-1501004016487-9d1d9e8b4f35?q=80&w=1200&auto=format&fit=crop", titulo:"Oferta Aceite 10%", etiqueta:"-20%" },
    { img: "https://images.unsplash.com/photo-1485965120184-e220f721d03e?q=80&w=1200&auto=format&fit=crop", titulo:"Pack Crema + Aceite", etiqueta:"Pack" },
    { img: "https://images.unsplash.com/photo-1519340333755-9b6f9b8e3f56?q=80&w=1200&auto=format&fit=crop", titulo:"Gominolas Sabor Frutas", etiqueta:"Nuevo" }
  ]

  const productos = [
    { img: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1200&auto=format&fit=crop", titulo:"Aceite CBD 5%" },
    { img: "https://images.unsplash.com/photo-1505740106531-4243f3831f66?q=80&w=1200&auto=format&fit=crop", titulo:"Crema CBD" },
    { img: "https://images.unsplash.com/photo-1522184216315-3c1d3f6c2a7a?q=80&w=1200&auto=format&fit=crop", titulo:"Gominolas CBD" }
  ]

  const noticias = [
    { img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1200&auto=format&fit=crop", titulo:"El negocio del CBD crece en España", resumen:"Cada vez más personas descubren los beneficios del CBD."},
    { img: "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=1200&auto=format&fit=crop", titulo:"Nuevos estudios destacan efectos positivos del CBD", resumen:"Investigaciones subrayan propiedades relajantes y antiinflamatorias."},
    { img: "https://images.unsplash.com/photo-1544033522-1b5d6a2fa1f6?q=80&w=1200&auto=format&fit=crop", titulo:"España avanza en la regulación del CBD", resumen:"Debates públicos buscan clarificar el marco legal."}
  ]

  const sectionVariant = { hidden:{opacity:0,y:12}, visible:{opacity:1,y:0} }

  return (
    <div className="min-h-screen bg-[#fffaf5] text-emerald-900 antialiased">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-emerald-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#home" className="flex items-center gap-3 text-2xl font-bold text-emerald-800 tracking-tight">
            <span>ZZ_CBD</span>
            <span className="inline-flex" style={{transform:"translateY(1px)"}}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                <defs>
                  <linearGradient id="g1" x1="0" x2="1">
                    <stop offset="0%" stopColor="#f7d794"/>
                    <stop offset="100%" stopColor="#b0883b"/>
                  </linearGradient>
                </defs>
                <path d="M12 2C10 8 4 9 4 15c0 3.31 2.69 6 6 6 1.66 0 3.14-.67 4.24-1.76A6.004 6.004 0 0020 15c0-6-6-7-8-13z" fill="url(#g1)" stroke="#a67c2a" strokeWidth="0.6"/>
              </svg>
            </span>
          </a>
          <nav className="hidden md:flex gap-6 text-sm font-medium">
            <a href="#novedades" className="hover:text-green-600">Novedades</a>
            <a href="#tienda" className="hover:text-green-600">Tienda</a>
            <a href="#info" className="hover:text-green-600">Sobre nosotros</a>
            <a href="#faq" className="hover:text-green-600">FAQ</a>
            <a href="#noticias" className="hover:text-green-600">Noticias</a>
            <a href="#contacto" className="hover:text-green-600">Contacto</a>
          </nav>
          <div className="md:hidden"><button aria-label="Abrir menú" className="p-2 rounded-md hover:bg-emerald-100">☰</button></div>
        </div>
      </header>

      <main id="home" className="max-w-6xl mx-auto px-6 py-20">
        <motion.section className="relative text-center" initial="hidden" animate="visible" variants={sectionVariant}>
          <div className="absolute inset-0 -z-10 overflow-hidden flex justify-center">
            <div className="w-full max-w-6xl h-64 sm:h-96 rounded-3xl overflow-hidden shadow-md">
              <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1600&auto=format&fit=crop" alt="Banner campo CBD" className="w-full h-full object-cover brightness-95" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-b from-emerald-600/12 to-transparent" />
            </div>
          </div>

          <motion.h1 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="relative text-4xl md:text-5xl font-extrabold text-emerald-900">Bienvenido a <span className="text-green-600">ZZ_CBD</span></motion.h1>
          <p className="relative mt-4 text-lg text-emerald-800 max-w-2xl mx-auto">Tu tienda de confianza en productos naturales de CBD. Calidad, bienestar y confianza en cada gota.</p>
        </motion.section>

        <motion.section id="novedades" className="mt-20" initial="hidden" animate="visible" variants={sectionVariant}>
          <h2 className="text-3xl font-semibold text-emerald-800 text-center">Novedades</h2>
          <p className="mt-2 text-center text-emerald-700">Ofertas y lanzamientos destacados</p>

          <div className="mt-8 overflow-x-auto">
            <div className="flex gap-6 pb-4">
              {novedades.map((n,idx)=>(
                <article key={idx} className="min-w-[260px] bg-white rounded-2xl p-4 shadow-sm transition transform hover:scale-105 hover:shadow-lg group">
                  <div className="w-full aspect-square overflow-hidden rounded-lg bg-emerald-50">
                    <img src={n.img} alt={n.titulo} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90" loading="lazy" />
                  </div>
                  <div className="mt-4 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-emerald-800">{n.titulo}</h3>
                    <span className="text-sm font-medium text-green-700">{n.etiqueta}</span>
                  </div>
                </article>
              ))}
          </div>
        </motion.section>

        <motion.section id="tienda" className="mt-24" initial="hidden" animate="visible" variants={sectionVariant}>
          <h2 className="text-3xl font-semibold text-emerald-800 text-center">Tienda</h2>
          <p className="mt-2 text-center text-emerald-700">Nuestra gama de productos</p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {productos.map((p,i)=>(
              <article key={i} className="bg-white rounded-2xl p-4 shadow-sm transition hover:shadow-md group">
                <div className="aspect-square overflow-hidden rounded-lg">
                  <img src={p.img} alt={p.titulo} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 group-hover:brightness-90" loading="lazy" />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-emerald-800">{p.titulo}</h3>
                <p className="mt-2 text-sm text-emerald-700">Descripción breve del producto y sus beneficios.</p>
                <div className="mt-4 flex gap-3">
                  <button className="px-4 py-2 rounded-md bg-green-600 text-white text-sm hover:bg-green-700">Ver</button>
                  <button className="px-3 py-2 rounded-md border border-emerald-200 text-sm">Añadir</button>
                </div>
              </article>
            ))}
          </div>
        </motion.section>

        <motion.section id="info" className="mt-24" initial="hidden" animate="visible" variants={sectionVariant}>
          <h2 className="text-3xl font-semibold text-emerald-800 text-center">Sobre nosotros</h2>
