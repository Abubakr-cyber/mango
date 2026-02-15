"use client";

import { motion } from "framer-motion";

export default function LoadingScreen() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/10 backdrop-blur-3xl"
        >
            <div className="relative w-48 h-48 mb-12 flex items-center justify-center">
                {/* Elegant Concentric Rings */}
                <motion.div
                    className="absolute inset-0 border-[1px] border-orange-500/20 rounded-full"
                    animate={{ scale: [1, 1.5], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                />
                <motion.div
                    className="absolute inset-4 border-[1px] border-orange-500/30 rounded-full"
                    animate={{ scale: [1, 1.4], opacity: [0.5, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                />

                {/* Main Logo/Icon Placeholder - Using a clean SVG or stylized text */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative z-10 flex flex-col items-center"
                >
                    <div className="text-4xl font-black text-orange-500 tracking-tighter mb-2">MANGO</div>
                    <div className="w-12 h-0.5 bg-orange-500/50 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-orange-500"
                            animate={{ x: [-50, 50] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col items-center gap-3"
            >
                <p className="text-sm font-black text-gray-900 tracking-[0.4em] uppercase">
                    ТАЪМИ ТАБИӢ
                </p>
                <div className="flex gap-2">
                    {[0, 1, 2].map((i) => (
                        <motion.div
                            key={i}
                            className="w-1.5 h-1.5 bg-orange-500 rounded-full"
                            animate={{ opacity: [0.2, 1, 0.2] }}
                            transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                        />
                    ))}
                </div>
            </motion.div>
        </motion.div>
    );
}
