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
            <ScrollSection top="10%" themeColor={product.themeColor}>
                <motion.h2 className="text-8xl font-black uppercase tracking-tighter text-white" variants={textVariants}>
                    {product.section1.title}
                </motion.h2>
                <motion.p className="text-3xl font-light text-white/90 mt-4" variants={textVariants}>
                    {product.section1.subtitle}
                </motion.p>
            </ScrollSection>

            {/* Section 2 - Ingredients */}
            <ScrollSection top="35%" themeColor={product.themeColor}>
                <motion.h2 className="text-6xl font-black text-white max-w-4xl text-center" variants={textVariants}>
                    {product.section2.title}
                </motion.h2>
                <motion.p className="text-2xl font-medium text-white/80 mt-6 max-w-2xl text-center" variants={textVariants}>
                    {product.section2.subtitle}
                </motion.p>
            </ScrollSection>

            {/* Section 3 - Benefits */}
            <ScrollSection top="60%" themeColor={product.themeColor}>
                <motion.h2 className="text-6xl font-black text-white" variants={textVariants}>
                    {product.section3.title}
                </motion.h2>
                <motion.p className="text-2xl font-medium text-white/80 mt-6" variants={textVariants}>
                    {product.section3.subtitle}
                </motion.p>
            </ScrollSection>

            {/* Section 4 - Pure */}
            <ScrollSection top="85%" themeColor={product.themeColor}>
                <motion.h2 className="text-7xl font-black uppercase text-white" variants={textVariants}>
                    {product.section4.title}
                </motion.h2>
            </ScrollSection>
        </div>
    );
}

const textVariants: Variants = {
    hidden: { opacity: 0, y: 100, filter: "blur(20px)" },
    visible: {
        opacity: 1,
        y: 0,
        filter: "blur(0px) drop-shadow(0 0 10px rgba(255,255,255,0.5))"
    },
    exit: {
        opacity: 0,
        y: -150,
        filter: "blur(20px) drop-shadow(0 50px 40px rgba(255,255,255,0.8))", // The "Glow Down" effect
        transition: { duration: 0.8, ease: "easeInOut" }
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
        <div className="absolute left-0 w-full flex flex-col items-center justify-center p-12 text-center mix-blend-overlay" style={{ top }}>
            <motion.div
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ amount: 0.4, margin: "-100px 0px -100px 0px" }}
                transition={{ duration: 1, ease: "easeOut", staggerChildren: 0.2 }}
                style={{
                    // Optional: Add a subtle ambient glow based on product color
                    textShadow: `0 0 30px ${themeColor || "rgba(255,255,255,0.3)"}`
                }}
            >
                {children}
            </motion.div>
        </div>
    );
}
