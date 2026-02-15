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

    // V2.9: Precise sequential mapping with delays and Pro Gaps
    // Section 1: Intro (Delayed: 0.05 to 0.2)
    const opacity1 = useTransform(scrollYProgress, [0.0, 0.05, 0.15, 0.2], [0, 1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0.0, 0.15, 0.2], [30, -30, -80]);

    // Section 2: Ingredients (0.3 to 0.5)
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.5], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.2, 0.3, 0.45, 0.5], [80, 0, 0, -80]);

    // Section 3: Benefits (0.6 to 0.8)
    const opacity3 = useTransform(scrollYProgress, [0.55, 0.6, 0.75, 0.8], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.55, 0.6, 0.75, 0.8], [80, 0, 0, -80]);

    // Section 4: Pure (0.9 to 1.0)
    const opacity4 = useTransform(scrollYProgress, [0.85, 0.9, 1.0], [0, 1, 1]);
    const y4 = useTransform(scrollYProgress, [0.85, 0.9, 1.0], [80, 0, 0]);

    // Floating Pro Parallax Elements (Leaves)
    const leaf1Y = useTransform(scrollYProgress, [0, 1], [0, -500]);
    const leaf2Y = useTransform(scrollYProgress, [0, 1], [0, -800]);
    const leaf1Rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
    const leaf2Rotate = useTransform(scrollYProgress, [0, 1], [0, -45]);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none z-10 w-full h-[400vh] overflow-hidden">
            <div className="sticky top-0 left-0 w-full h-screen">

                {/* Pro Parallax Decor */}
                <motion.div
                    style={{ y: leaf1Y, rotate: leaf1Rotate, opacity: 0.4 }}
                    className="absolute -left-10 top-1/4 w-32 h-32 bg-green-500/20 blur-3xl rounded-full"
                />
                <motion.div
                    style={{ y: leaf2Y, rotate: leaf2Rotate, opacity: 0.3 }}
                    className="absolute -right-20 top-2/3 w-64 h-64 bg-yellow-400/10 blur-[100px] rounded-full"
                />

                {/* Section 1 - Intro (Delayed) */}
                <motion.div
                    style={{ opacity: opacity1, y: y1 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                >
                    <StaggeredText
                        text={product.section1.title}
                        className="text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tight text-white drop-shadow-[0_15px_40px_rgba(0,0,0,0.6)]"
                    />
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-xl md:text-3xl font-extrabold text-white/90 mt-8 tracking-[0.5em] uppercase"
                    >
                        {product.section1.subtitle}
                    </motion.p>
                </motion.div>

                {/* Section 2 - Ingredients */}
                <motion.div
                    style={{ opacity: opacity2, y: y2 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                >
                    <h2 className="text-4xl md:text-7xl font-black text-white max-w-4xl leading-tight drop-shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
                        {product.section2.title}
                    </h2>
                    <p className="text-lg md:text-2xl font-bold text-white/80 mt-12 max-w-2xl leading-relaxed">
                        {product.section2.subtitle}
                    </p>
                </motion.div>

                {/* Section 3 - Benefits */}
                <motion.div
                    style={{ opacity: opacity3, y: y3 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                >
                    <h2 className="text-4xl md:text-7xl font-black text-white drop-shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
                        {product.section3.title}
                    </h2>
                    <p className="text-lg md:text-2xl font-bold text-white/80 mt-12 max-w-xl leading-relaxed">
                        {product.section3.subtitle}
                    </p>
                </motion.div>

                {/* Section 4 - Pure */}
                <motion.div
                    style={{ opacity: opacity4, y: y4 }}
                    className="absolute inset-0 flex flex-col items-center justify-center text-center px-6"
                >
                    <h2 className="text-6xl md:text-8xl lg:text-9xl font-black uppercase text-white drop-shadow-[0_15px_40px_rgba(0,0,0,0.6)]">
                        {product.section4.title}
                    </h2>
                </motion.div>
            </div>
        </div>
    );
}

function StaggeredText({ text, className }: { text: string, className: string }) {
    return (
        <span className={className}>
            {text.split("").map((char, i) => (
                <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
                    className="inline-block"
                >
                    {char === " " ? "\u00A0" : char}
                </motion.span>
            ))}
        </span>
    );
}
