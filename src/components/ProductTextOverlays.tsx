"use client";

import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { Product } from "../../data/products";
import { useRef } from "react";

interface ProductTextOverlaysProps {
    product: Product;
}

export default function ProductTextOverlays({ product }: ProductTextOverlaysProps) {
    // We share the same scroll range as the bottle wrapper conceptually, 
    // but here we just need to overlay content at absolute positions 
    // relative to the same 400vh height container used in the parent.
    // However, since this component sits *inside* the same scroll context or checks scroll,
    // we can use a ref tracked on the main page or just assume this component 
    // is placed in a way it overlays. 
    // BETTER APPROACH: Make this component accept the scroll progress or simpler:
    // Just position absolute divs at 50vh, 150vh, 250vh inside the parent container.
    // Let's use the latter for simplicity and robustness.

    return (
        <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
            {/* Section 1 - Intro */}
            <ScrollSection top="15%" themeColor={product.themeColor}>
                <motion.h2 className="text-5xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-white drop-shadow-2xl" variants={textVariants}>
                    {product.section1.title}
                </motion.h2>
                <motion.p className="text-xl md:text-3xl font-light text-white/90 mt-4 tracking-widest uppercase" variants={textVariants}>
                    {product.section1.subtitle}
                </motion.p>
            </ScrollSection>

            {/* Section 2 - Ingredients */}
            <ScrollSection top="40%" themeColor={product.themeColor}>
                <motion.h2 className="text-3xl md:text-6xl font-black text-white max-w-4xl text-center leading-tight transition-all" variants={textVariants}>
                    {product.section2.title}
                </motion.h2>
                <motion.p className="text-lg md:text-2xl font-medium text-white/80 mt-6 max-w-2xl text-center leading-relaxed" variants={textVariants}>
                    {product.section2.subtitle}
                </motion.p>
            </ScrollSection>

            {/* Section 3 - Benefits */}
            <ScrollSection top="65%" themeColor={product.themeColor}>
                <motion.h2 className="text-3xl md:text-6xl font-black text-white text-center" variants={textVariants}>
                    {product.section3.title}
                </motion.h2>
                <motion.p className="text-lg md:text-2xl font-medium text-white/80 mt-6 text-center max-w-xl" variants={textVariants}>
                    {product.section3.subtitle}
                </motion.p>
            </ScrollSection>

            {/* Section 4 - Pure */}
            <ScrollSection top="82%" themeColor={product.themeColor}>
                <motion.h2 className="text-5xl md:text-8xl lg:text-9xl font-black uppercase text-white drop-shadow-2xl" variants={textVariants}>
                    {product.section4.title}
                </motion.h2>
            </ScrollSection>
        </div>
    );
}

const textVariants: Variants = {
    hidden: { opacity: 0, y: 50, filter: "blur(10px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px) drop-shadow(0 0 20px rgba(255,255,255,0.3))",
        transition: {
            type: "spring",
            stiffness: 80,
            damping: 20
        }
    },
    exit: {
        opacity: 0,
        y: -50,
        filter: "blur(10px)",
        transition: { duration: 0.5, ease: "easeInOut" }
    }
};

function ScrollSection({
    children,
    top,
    themeColor
}: {
    children: React.ReactNode;
    top: string;
    themeColor?: string;
}) {
    return (
        <div className="absolute left-0 w-full flex flex-col items-center justify-center px-6 md:px-12 text-center" style={{ top }}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ amount: 0.2, margin: "-10% 0px -10% 0px" }}
                transition={{ staggerChildren: 0.1 }}
            >
                {children}
            </motion.div>
        </div>
    );
}
