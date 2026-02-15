"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductBottleScroll from "@/components/ProductBottleScroll";
import ProductTextOverlays from "@/components/ProductTextOverlays";
import { products } from "../../data/products";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const activeProduct = products[currentIndex];

  // 1. Scroll Reset on Flavor Change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Update Theme Background
    document.documentElement.style.setProperty('--product-gradient', activeProduct.gradient);
  }, [currentIndex, activeProduct.gradient]);

  const nextProduct = () => setCurrentIndex((prev) => (prev + 1) % products.length);
  const prevProduct = () => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);

  return (
    <main className="relative min-h-screen bg-transparent">
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeProduct.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          {/* --- SCROLL EXPERIENCE --- */}
          <section className="relative">
            <ProductBottleScroll product={activeProduct} />
            <ProductTextOverlays product={activeProduct} />
          </section>

          {/* --- DETAILS SECTION --- */}
          <section className="relative z-20 bg-white py-32 md:py-48 px-6 rounded-t-[4rem] -mt-20 shadow-2xl">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-24 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-orange-500 font-black uppercase tracking-[0.4em] text-sm mb-6">Аз Боғ то Шиша</h3>
                  <h2 className="text-5xl md:text-7xl font-black mb-10 tracking-tighter text-gray-900 leading-none">
                    {activeProduct.detailsSection.title}
                  </h2>
                  <p className="text-xl text-gray-500 leading-relaxed font-medium max-w-xl">
                    {activeProduct.detailsSection.description}
                  </p>
                </motion.div>

                {/* Performance Stats */}
                <div className="grid grid-cols-2 gap-6">
                  {activeProduct.stats.map((stat, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-gray-50 p-12 rounded-[2.5rem] border border-gray-100 group hover:border-orange-500/20 transition-all"
                    >
                      <div className="text-5xl font-black text-gray-900 mb-2 group-hover:scale-110 transition-transform origin-left">
                        {stat.val}
                      </div>
                      <div className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-400">
                        {stat.label}
                      </div>
                    </motion.div>
                  ))}
                  <div className="col-span-2 bg-gradient-to-br from-orange-500 to-pink-600 p-1 text-white rounded-[2.5rem]">
                    <div className="bg-gray-900 w-full h-full rounded-[2.4rem] p-12 flex flex-col justify-end">
                      <span className="text-xs font-black uppercase tracking-widest text-white/40 mb-2">Стандарти тозагӣ</span>
                      <span className="text-2xl font-black">100% Шарбати холис</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- FRESHNESS SECTION --- */}
          <section className="py-40 bg-gray-50 px-6 overflow-hidden">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <h2 className="text-4xl md:text-6xl font-black mb-12 text-gray-900 tracking-tight">
                  {activeProduct.freshnessSection.title}
                </h2>
                <p className="text-2xl md:text-4xl text-gray-400 font-medium italic leading-relaxed">
                  "{activeProduct.freshnessSection.description}"
                </p>
              </motion.div>
            </div>
          </section>

          {/* --- BUY NOW SECTION --- */}
          <section className="py-20 md:py-40 px-6 bg-white">
            <div className="max-w-7xl mx-auto bg-gray-950 rounded-[4rem] p-8 md:p-24 overflow-hidden relative">
              {/* Abstract decorative elements */}
              <div className="absolute top-0 right-0 w-[50rem] h-[50rem] bg-orange-500/10 rounded-full blur-[120px] -mr-40 -mt-40" />

              <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
                <div>
                  <h3 className="text-orange-500 font-black uppercase tracking-[0.4em] text-xs mb-8">Барои харид омода</h3>
                  <h2 className="text-6xl md:text-[8rem] font-black text-white leading-none tracking-tighter mb-8">
                    {activeProduct.name}
                  </h2>
                  <div className="flex flex-wrap gap-4 mb-12">
                    {activeProduct.buyNowSection.processingParams.map(param => (
                      <span key={param} className="bg-white/5 border border-white/10 px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest text-white/60">
                        {param}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="bg-white/5 backdrop-blur-3xl border border-white/10 rounded-[3rem] p-12 md:p-16">
                  <div className="flex justify-between items-end mb-12">
                    <div>
                      <span className="text-white/40 text-[10px] font-black uppercase tracking-widest mb-2 block">Нарх</span>
                      <div className="text-5xl md:text-7xl font-black text-white">{activeProduct.buyNowSection.price}</div>
                    </div>
                    <span className="text-green-400 text-[10px] font-black uppercase tracking-[0.3em] pb-4">Дар анбор</span>
                  </div>

                  <button className="w-full py-8 bg-white hover:bg-orange-500 text-black hover:text-white font-black text-xl uppercase tracking-widest rounded-2xl transition-all active:scale-95 shadow-2xl mb-8">
                    Ба сабад илова кардан
                  </button>

                  <div className="flex flex-col gap-4 text-center">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/30">{activeProduct.buyNowSection.deliveryPromise}</p>
                    <p className="text-[9px] font-bold text-white/20">{activeProduct.buyNowSection.returnPolicy}</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* --- NEXT FLAVOR CTA --- */}
          <section className="h-[60vh] flex flex-col items-center justify-center bg-gray-950 relative border-t border-white/5 overflow-hidden group">
            <button
              onClick={nextProduct}
              className="relative z-10 text-center transition-transform duration-700 group-hover:scale-110"
            >
              <span className="text-xs font-black uppercase tracking-[1em] text-white/40 mb-6 block">Маззаи навбатӣ</span>
              <span className="text-6xl md:text-9xl font-black text-white tracking-tighter uppercase leading-none block">
                {products[(currentIndex + 1) % products.length].name}
              </span>
              <div className="mt-12 text-white/20 text-4xl animate-bounce">↓</div>
            </button>
            {/* Background movement on hover */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-orange-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-1000" />
          </section>
        </motion.div>
      </AnimatePresence>

      {/* --- NAVIGATION PILLS --- */}
      {/* Side Arrows */}
      <div className="fixed top-1/2 -translate-y-1/2 left-8 md:left-12 z-50 flex flex-col gap-4">
        <button
          onClick={prevProduct}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-3xl border border-white/10 text-white hover:bg-white hover:text-black transition-all active:scale-90"
        >
          ←
        </button>
        <button
          onClick={nextProduct}
          className="w-12 h-12 flex items-center justify-center rounded-full bg-white/5 backdrop-blur-3xl border border-white/10 text-white hover:bg-white hover:text-black transition-all active:scale-90"
        >
          →
        </button>
      </div>

      {/* Center Flavor Menu */}
      <div className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-black/40 backdrop-blur-3xl p-2 rounded-3xl border border-white/10 shadow-2xl">
        {products.map((p, i) => (
          <button
            key={p.id}
            onClick={() => setCurrentIndex(i)}
            className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${currentIndex === i ? "bg-white text-black scale-105" : "text-white/40 hover:text-white"
              }`}
          >
            {p.name}
          </button>
        ))}
      </div>

      <Footer />
    </main>
  );
}
