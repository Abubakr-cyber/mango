"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { products } from "../../data/products";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductBottleScroll from "../components/ProductBottleScroll";
import LoadingScreen from "../components/LoadingScreen";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const product = products[currentIndex];

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
    setTimeout(() => setIsLoading(false), 500);
  };

  return (
    <main className="min-h-screen font-sans selection:bg-orange-500 selection:text-white">
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loader" />}
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
          <section className="bg-white py-24 px-6 relative z-20 rounded-t-[3rem] -mt-24 shadow-[0_-20px_40px_rgba(0,0,0,0.1)]">
            <div className="max-w-6xl mx-auto">
              <div className="grid md:grid-cols-2 gap-16 items-center">
                <motion.div
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-orange-500 font-bold uppercase tracking-wider mb-2">Таърих</h3>
                  <h2 className="text-5xl font-bold mb-6 text-gray-900">{product.detailsSection.title}</h2>
                  <p className="text-xl text-gray-600 leading-relaxed">
                    {product.detailsSection.description}
                  </p>
                </motion.div>

                {/* Stats Grid */}
                <motion.div
                  className="grid grid-cols-2 gap-6"
                  initial={{ x: 50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  {product.stats.map((stat, i) => (
                    <div key={i} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-orange-200 transition-colors">
                      <div className="text-4xl font-bold text-gray-900 mb-1">{stat.val}</div>
                      <div className="text-gray-500 text-sm uppercase tracking-wide">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </section>

          {/* --- FRESHNESS SECTION --- */}
          <section className="py-24 px-6 bg-gray-50">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-4xl font-bold mb-8 text-gray-900">{product.freshnessSection.title}</h2>
                <p className="text-2xl text-gray-600 leading-relaxed font-light">
                  "{product.freshnessSection.description}"
                </p>
              </motion.div>
            </div>
          </section>

          {/* --- BUY NOW SECTION --- */}
          <section className="py-24 px-6 bg-white relative overflow-hidden">
            <div className="max-w-5xl mx-auto bg-gray-900 rounded-[3rem] p-12 md:p-20 text-white relative">
              {/* Decorative background gradients */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl -mr-20 -mt-20"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl -ml-20 -mb-20"></div>

              <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
                <div>
                  <h2 className="text-5xl font-bold mb-2">{product.name}</h2>
                  <div className="text-3xl font-light text-gray-400 mb-8">{product.buyNowSection.unit}</div>
                  <div className="flex flex-wrap gap-3 mb-8">
                    {product.buyNowSection.processingParams.map(param => (
                      <span key={param} className="bg-white/10 px-4 py-2 rounded-full text-sm border border-white/10">{param}</span>
                    ))}
                  </div>
                </div>
                <div className="bg-white/5 p-8 rounded-3xl backdrop-blur-md border border-white/10">
                  <div className="flex justify-between items-end mb-6">
                    <div className="text-5xl font-bold text-orange-400">{product.buyNowSection.price}</div>
                    <div className="text-green-400 text-sm font-bold bg-green-400/10 px-3 py-1 rounded-full">Дар фурӯш</div>
                  </div>
                  <button className="w-full py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-xl font-bold shadow-lg shadow-orange-500/25 transition-all mb-4 active:scale-95">
                    Ба сабад партоед
                  </button>
                  <p className="text-xs text-center text-gray-400">{product.buyNowSection.deliveryPromise}</p>
                </div>
              </div>
            </div>
          </section>

        </motion.div>
      </AnimatePresence>

      {/* --- NAVIGATION CONTROLS --- */}
      {/* 1. Side Arrows */}
      <button
        onClick={prevProduct}
        className="fixed left-6 top-1/2 -translate-y-1/2 z-40 p-4 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all hover:scale-110 border border-white/10"
      >
        ←
      </button>
      <button
        onClick={nextProduct}
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 p-4 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all hover:scale-110 border border-white/10"
      >
        →
      </button>

      {/* 2. Bottom Flavor Menu */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-40 flex gap-4 bg-black/30 backdrop-blur-xl p-2 rounded-full border border-white/10">
        {products.map((p, idx) => (
          <button
            key={p.id}
            onClick={() => setCurrentIndex(idx)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${currentIndex === idx
              ? "bg-white text-gray-900 shadow-lg"
              : "text-white/70 hover:text-white"
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
