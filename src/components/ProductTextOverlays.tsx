"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Product } from "../../data/products";
import { useRef } from "react";

interface ProductTextOverlaysProps {
    product: Product;
}

export default function ProductTextOverlays({ product }: ProductTextOverlaysProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // V2.7: Perfect sequential mapping with gaps (linear)
    // Section 1: Intro (0.0 to 0.2)
    const opacity1 = useTransform(scrollYProgress, [0.0, 0.15, 0.2], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0.0, 0.15, 0.2], [0, -30, -50]);

    // Section 2: Ingredients (0.3 to 0.5) - Gap 0.2 to 0.3
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.5], [50, 0, 0, -50]);

    // Section 3: Benefits (0.6 to 0.8) - Gap 0.5 to 0.6
    const opacity3 = useTransform(scrollYProgress, [0.55, 0.6, 0.75, 0.8], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.55, 0.6, 0.75, 0.8], [50, 0, 0, -50]);

    // Section 4: Pure (0.9 to 1.0) - Gap 0.8 to 0.9
    const opacity4 = useTransform(scrollYProgress, [0.85, 0.9, 1.0], [0, 1, 1]);
    const y4 = useTransform(scrollYProgress, [0.85, 0.9, 1.0], [50, 0, 0]);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none z-10 w-full h-[400vh]">
            <div className="sticky top-0 left-0 w-full h-screen">
                {/* Section 1 - Intro */}
                <motion.div
                    style={{ opacity: opacity1, y: y1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                >
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                        {product.section1.title}
                    </h2>
                    <p className="text-xl md:text-3xl font-extrabold text-white/90 mt-6 tracking-[0.4em] uppercase">
                        {product.section1.subtitle}
                    </p>
                </motion.div>

                {/* Section 2 - Ingredients */}
                <motion.div
                    style={{ opacity: opacity2, y: y2 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                >
                    <h2 className="text-4xl md:text-7xl font-black text-white max-w-4xl leading-tight drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                        {product.section2.title}
                    </h2>
                    <p className="text-lg md:text-2xl font-bold text-white/80 mt-10 max-w-2xl leading-relaxed">
                        {product.section2.subtitle}
                    </p>
                </motion.div>

                {/* Section 3 - Benefits */}
                <motion.div
                    style={{ opacity: opacity3, y: y3 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                >
                    <h2 className="text-4xl md:text-7xl font-black text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                        {product.section3.title}
                    </h2>
                    <p className="text-lg md:text-2xl font-bold text-white/80 mt-10 max-w-xl leading-relaxed">
                        {product.section3.subtitle}
                    </p>
                </motion.div>

                {/* Section 4 - Pure */}
                <motion.div
                    style={{ opacity: opacity4, y: y4 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                >
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase text-white drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                        {product.section4.title}
                    </h2>
                </motion.div>
            </div>
        </div>
    );
}
