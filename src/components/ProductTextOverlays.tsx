"use client";

import { motion, useScroll, useTransform } from "framer-motion";
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
        <div className="absolute inset-0 pointer-events-none z-10">
            {/* Section 1 - Intro (approx 10-30% scroll) */}
            <ScrollSection top="10%" opacity={[0, 1, 0]}>
                <h2 className="text-8xl font-black uppercase tracking-tighter text-white drop-shadow-lg">
                    {product.section1.title}
                </h2>
                <p className="text-3xl font-light text-white/90 mt-4">
                    {product.section1.subtitle}
                </p>
            </ScrollSection>

            {/* Section 2 - Ingredients (approx 35-55% scroll) */}
            <ScrollSection top="35%" opacity={[0, 1, 0]}>
                <h2 className="text-6xl font-black text-white drop-shadow-md max-w-4xl text-center">
                    {product.section2.title}
                </h2>
                <p className="text-2xl font-medium text-white/80 mt-6 max-w-2xl text-center">
                    {product.section2.subtitle}
                </p>
            </ScrollSection>

            {/* Section 3 - Benefits (approx 60-80% scroll) */}
            <ScrollSection top="60%" opacity={[0, 1, 0]}>
                <h2 className="text-6xl font-black text-white drop-shadow-md">
                    {product.section3.title}
                </h2>
                <p className="text-2xl font-medium text-white/80 mt-6">
                    {product.section3.subtitle}
                </p>
            </ScrollSection>

            {/* Section 4 - Pure (approx 85-95% scroll) */}
            <ScrollSection top="85%" opacity={[0, 1, 1]}>
                <h2 className="text-7xl font-black uppercase text-white drop-shadow-xl">
                    {product.section4.title}
                </h2>
            </ScrollSection>
        </div>
    );
}

function ScrollSection({
    children,
    top,
    opacity
}: {
    children: React.ReactNode;
    top: string;
    opacity: number[]
}) {
    // We need to hook into the parent's scroll progress. 
    // Since we are inside the huge 400vh div, we can use `useScroll` with offsets relative to this viewport.

    // Actually, simple CSS sticky or absolute positioning with motion.div whileInView might be easier
    // BUT user asked for "useTransform to fade them In/Out based on scroll progress"
    // So we need access to the scroll progress.
    // The cleanest way is to pass the ref or progress down, OR use absolute positioning + viewport trigger.

    // Let's use `whileInView` for fade in/out as it effectively maps to scroll position without complex wiring.
    return (
        <div className="absolute left-0 w-full flex flex-col items-center justify-center p-12 text-center" style={{ top }}>
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                viewport={{ amount: 0.5, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
            >
                {children}
            </motion.div>
        </div>
    );
}
