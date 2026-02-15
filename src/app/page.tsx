"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { products } from "../../data/products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductBottleScroll from "../components/ProductBottleScroll";
import ProductTextOverlays from "../components/ProductTextOverlays";
import LoadingScreen from "../components/LoadingScreen";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [initialLoading, setInitialLoading] = useState(true);
  const product = products[currentIndex];

  useEffect(() => {
    // Only show the full-screen loader for the very first visit
    const timer = setTimeout(() => setInitialLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Reset scroll when product changes
    window.scrollTo(0, 0);
    // Update body background
    document.documentElement.style.setProperty('--product-gradient', product.gradient);
  }, [currentIndex, product]);

  const nextProduct = () => {
    setCurrentIndex((prev) => (prev + 1) % products.length);
  };

  const prevProduct = () => {
    setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);
  };

  // Callback when bottle images are ready
  const handleImageLoad = () => {
    // Small delay to ensure smooth transition
    // Removed setIsLoading(false) as per new loading strategy
  };

  return (
    <main className="relative min-h-screen bg-white text-gray-900 overflow-x-hidden selection:bg-orange-500 selection:text-white">
      <AnimatePresence mode="wait">
        {initialLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      <Navbar />

      <AnimatePresence mode="wait">
        <motion.div
          key={product.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* --- SCROLLYTELLING HERO SECTION (400vh) --- */}
          <section className="relative">
            <ProductBottleScroll product={product} onLoaded={handleImageLoad} />
            <ProductTextOverlays product={product} />
          </section>

          {/* --- DETAILS SECTION --- */}
          <section className="bg-white py-16 md:py-32 px-4 md:px-8 relative z-20 rounded-t-[2.5rem] md:rounded-t-[5rem] -mt-16 md:-mt-32 shadow-2xl">
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
                <motion.div
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs md:text-sm mb-4">Мероси мо</h3>
                  <h2 className="text-4xl md:text-6xl font-black mb-8 text-gray-900 leading-[1.1]">{product.detailsSection.title}</h2>
                  <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium">
                    {product.detailsSection.description}
                  </p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                  className="grid grid-cols-2 gap-4 md:gap-8"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {product.stats.map((stat, i) => (
                    <div key={i} className="bg-gray-50 p-6 md:p-10 rounded-[2rem] border border-gray-100/50 hover:border-orange-500/20 transition-all group overflow-hidden relative">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-orange-500/5 rounded-full -mr-10 -mt-10 group-hover:scale-150 transition-transform duration-700"></div>
                      <div className="text-3xl md:text-5xl font-black text-gray-900 mb-2 relative z-10">{stat.val}</div>
                      <div className="text-gray-400 text-xs md:text-sm uppercase tracking-[0.2em] font-bold relative z-10">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          {/* --- FRESHNESS SECTION --- */}
          <section className="py-20 md:py-40 px-6 bg-gray-50 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <h2 className="text-3xl md:text-5xl font-black mb-12 text-gray-900 leading-tight">{product.freshnessSection.title}</h2>
                <p className="text-xl md:text-3xl text-gray-400 leading-relaxed font-light italic">
                  "{product.freshnessSection.description}"
                </p>
              </motion.div>
            </div>
          </section>

          {/* --- BUY NOW SECTION --- */}
          <section className="py-16 md:py-32 px-4 md:px-8 bg-white relative overflow-hidden">
            <div className="max-w-6xl mx-auto bg-gray-950 rounded-[3rem] md:rounded-[5rem] p-8 md:p-24 text-white relative shadow-3xl">
              {/* Decorative background gradients */}
              <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-orange-500/10 rounded-full blur-[120px] -mr-40 -mt-40"></div>
              <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-pink-500/10 rounded-full blur-[120px] -ml-40 -mb-40"></div>

              <div className="grid lg:grid-cols-2 gap-16 md:gap-24 items-center relative z-10">
                <div>
                  <h3 className="text-orange-500 font-bold uppercase tracking-[0.4em] text-xs mb-6">Маҳсулоти интихобӣ</h3>
                  <h2 className="text-5xl md:text-8xl font-black mb-6 tracking-tighter">{product.name}</h2>
                  <div className="text-2xl md:text-3xl font-medium text-gray-500 mb-10 tracking-tight">{product.buyNowSection.unit}</div>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {product.buyNowSection.processingParams.map(param => (
                      <span key={param} className="bg-white/5 backdrop-blur-md px-5 py-2.5 rounded-full text-xs md:text-sm font-bold border border-white/10 text-gray-300 tracking-wide">{param}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-white/5 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] backdrop-blur-2xl border border-white/10 shadow-inner">
                  <div className="flex justify-between items-end mb-10">
                    <div className="flex flex-col">
                      <span className="text-gray-500 text-xs md:text-sm uppercase font-bold tracking-widest mb-1">Нархи ҷорӣ</span>
                      <div className="text-5xl md:text-7xl font-black text-white">{product.buyNowSection.price}</div>
                    </div>
                    <div className="text-green-400 text-[10px] md:text-xs font-black bg-green-400/10 px-4 py-2 rounded-full uppercase tracking-widest border border-green-400/20 mb-2">Дар анбор</div>
                  </div>
                  <button className="w-full py-5 md:py-7 bg-white hover:bg-orange-500 text-black hover:text-white rounded-2xl md:rounded-3xl text-xl md:text-2xl font-black shadow-2xl transition-all mb-6 active:scale-95 group">
                    <span className="group-hover:tracking-widest transition-all">ХАРИДОРӢ</span>
                  </button>
                  <p className="text-[10px] md:text-xs text-center text-gray-500 font-bold uppercase tracking-[0.2em]">{product.buyNowSection.deliveryPromise}</p>
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>

      {/* --- NAVIGATION CONTROLS --- */}
      {/* 1. Side Arrows - Hidden on mobile */}
      <button
        onClick={prevProduct}
        className="hidden md:flex fixed left-8 top-1/2 -translate-y-1/2 z-40 w-16 h-16 items-center justify-center rounded-full bg-white/5 backdrop-blur-xl text-white hover:bg-orange-500 transition-all hover:scale-110 border border-white/10 shadow-2xl group"
      >
        <span className="text-2xl transition-transform group-hover:-translate-x-1">←</span>
      </button>
      <button
        onClick={nextProduct}
        className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 w-16 h-16 items-center justify-center rounded-full bg-white/5 backdrop-blur-xl text-white hover:bg-orange-500 transition-all hover:scale-110 border border-white/10 shadow-2xl group"
      >
        <span className="text-2xl transition-transform group-hover:translate-x-1">→</span>
      </button>

      {/* 2. Bottom Flavor Menu */}
      <div className="fixed bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 z-40 flex gap-2 md:gap-4 bg-black/40 backdrop-blur-3xl p-2 rounded-3xl border border-white/10 shadow-3xl">
        {products.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => setCurrentIndex(idx)}
            className={`px-4 md:px-8 py-2 md:py-3 rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-widest transition-all ${currentIndex === idx
              ? "bg-white text-black shadow-xl scale-105"
              : "text-white/40 hover:text-white hover:bg-white/5"
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
