"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/30 backdrop-blur-xl"
        >
            <div className="relative w-32 h-32 mb-8">
                {/* Pulsing Glow behind */}
                <motion.div
                    className="absolute inset-0 bg-orange-400 rounded-full blur-2xl opacity-50"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                />

                {/* Rotating Mango Image (using one of the optimized assets) */}
                <motion.img
                    src="/images/mango_1_000/mango_1_000.jpg" // Using first frame as loader
                    alt="Loading..."
                    className="w-full h-full object-contain drop-shadow-lg rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                />
            </div>

            <motion.p
                className="text-2xl font-bold text-orange-600 tracking-wider uppercase"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
                Лутфан интизор шавед...
            </motion.p>
        </motion.div>
    );
}
