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

    // Transforms for 4 sequential text sections
    // 1. Intro
    const opacity1 = useTransform(scrollYProgress, [0.0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0.0, 0.05, 0.15, 0.2], [40, 0, 0, -40]);

    // 2. Section 2
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.25, 0.3, 0.45, 0.5], [40, 0, 0, -40]);

    // 3. Section 3
    const opacity3 = useTransform(scrollYProgress, [0.55, 0.6, 0.75, 0.8], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.55, 0.6, 0.75, 0.8], [40, 0, 0, -40]);

    // 4. Section 4
    const opacity4 = useTransform(scrollYProgress, [0.85, 0.9, 0.95], [0, 1, 1]);
    const y4 = useTransform(scrollYProgress, [0.85, 0.9], [40, 0]);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none z-10 w-full h-[500vh] overflow-hidden">
            <div className="sticky top-0 left-0 w-full h-screen">

                {/* Section 1 */}
                <motion.div
                    style={{ opacity: opacity1, y: y1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                >
                    <h2 className="text-7xl md:text-[9rem] font-black tracking-tighter text-white uppercase leading-none">
                        {product.section1.title}
                    </h2>
                    <p className="text-xl md:text-3xl font-medium text-white/80 mt-8 tracking-widest uppercase">
                        {product.section1.subtitle}
                    </p>
                </motion.div>

                {/* Section 2 */}
                <motion.div
                    style={{ opacity: opacity2, y: y2 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                >
                    <h2 className="text-5xl md:text-8xl font-black text-white max-w-4xl tracking-tight leading-none uppercase">
                        {product.section2.title}
                    </h2>
                    <p className="text-lg md:text-2xl font-medium text-white/70 mt-12 max-w-2xl leading-relaxed uppercase tracking-widest">
                        {product.section2.subtitle}
                    </p>
                </motion.div>

                {/* Section 3 */}
                <motion.div
                    style={{ opacity: opacity3, y: y3 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                >
                    <h2 className="text-5xl md:text-8xl font-black text-white tracking-tighter uppercase leading-none">
                        {product.section3.title}
                    </h2>
                    <p className="text-base md:text-xl font-bold text-white/60 mt-8 max-w-xl leading-relaxed uppercase tracking-[0.3em]">
                        {product.section3.subtitle}
                    </p>
                </motion.div>

                {/* Section 4 */}
                <motion.div
                    style={{ opacity: opacity4, y: y4 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                >
                    <h2 className="text-8xl md:text-[10rem] font-black text-white uppercase tracking-tighter drop-shadow-2xl">
                        {product.name}
                    </h2>
                </motion.div>
            </div>
        </div>
    );
}
