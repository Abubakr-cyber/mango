import { motion } from "framer-motion";
import MangoLogo from "./MangoLogo";

export default function LoadingScreen() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white/10 backdrop-blur-3xl"
        >
            <div className="relative w-64 h-64 mb-12 flex items-center justify-center">
                {/* Elegant Concentric Rings */}
                <motion.div
                    className="absolute inset-0 border-[2px] border-orange-500/20 rounded-full"
                    animate={{ scale: [1, 1.3, 1], rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <motion.div
                    className="absolute inset-8 border-[1px] border-pink-500/20 rounded-full"
                    animate={{ scale: [1, 1.2, 1], rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />

                {/* Main Logo */}
                <motion.div
                    initial={{ scale: 0.5, opacity: 0, rotate: -20 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="relative z-10"
                >
                    <MangoLogo className="w-24 h-24 drop-shadow-[0_20px_50px_rgba(255,143,0,0.4)]" />
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
