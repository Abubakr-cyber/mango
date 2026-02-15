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

    // V2.6: Precise sequential mapping (linear)
    // Range 0.0 - 1.0 (corresponds to the 400vh scroll)

    // Section 1: Intro (0.0 to 0.2)
    const opacity1 = useTransform(scrollYProgress, [0.0, 0.1, 0.2, 0.25], [1, 1, 0, 0]);
    const y1 = useTransform(scrollYProgress, [0.0, 0.2, 0.25], [0, -50, -50]);

    // Section 2: Ingredients (0.25 to 0.5)
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.25, 0.45, 0.5], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.25, 0.45, 0.5], [50, 0, 0, -50]);

    // Section 3: Benefits (0.5 to 0.75)
    const opacity3 = useTransform(scrollYProgress, [0.45, 0.5, 0.7, 0.75], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.45, 0.5, 0.7, 0.75], [50, 0, 0, -50]);

    // Section 4: Pure (0.75 to 1.0)
    const opacity4 = useTransform(scrollYProgress, [0.7, 0.75, 0.95], [0, 1, 1]);
    const y4 = useTransform(scrollYProgress, [0.7, 0.75, 0.95], [50, 0, 0]);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none z-10 w-full h-[400vh]">
            <div className="sticky top-0 left-0 w-full h-screen">
                {/* Section 1 - Intro */}
                <motion.div
                    style={{ opacity: opacity1, y: y1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                >
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
                        {product.section1.title}
                    </h2>
                    <p className="text-xl md:text-3xl font-bold text-white/90 mt-4 tracking-[0.3em] uppercase">
                        {product.section1.subtitle}
                    </p>
                </motion.div>

                {/* Section 2 - Ingredients */}
                <motion.div
                    style={{ opacity: opacity2, y: y2 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                >
                    <h2 className="text-4xl md:text-7xl font-black text-white max-w-4xl leading-tight drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
                        {product.section2.title}
                    </h2>
                    <p className="text-lg md:text-2xl font-bold text-white/80 mt-8 max-w-2xl leading-relaxed">
                        {product.section2.subtitle}
                    </p>
                </motion.div>

                {/* Section 3 - Benefits */}
                <motion.div
                    style={{ opacity: opacity3, y: y3 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                >
                    <h2 className="text-4xl md:text-7xl font-black text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
                        {product.section3.title}
                    </h2>
                    <p className="text-lg md:text-2xl font-bold text-white/80 mt-8 max-w-xl leading-relaxed">
                        {product.section3.subtitle}
                    </p>
                </motion.div>

                {/* Section 4 - Pure */}
                <motion.div
                    style={{ opacity: opacity4, y: y4 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                >
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase text-white drop-shadow-[0_5px_15px_rgba(0,0,0,0.3)]">
                        {product.section4.title}
                    </h2>
                </motion.div>
            </div>
        </div>
    );
}
