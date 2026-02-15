"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-700 ${scrolled ? "py-4 bg-white/10 backdrop-blur-2xl border-b border-white/10" : "py-8 bg-transparent border-b border-transparent"
            }`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Branding */}
                <Link href="/" className="flex items-center gap-3 group">
                    <svg className="w-8 h-8 group-hover:rotate-[30deg] transition-transform duration-500" viewBox="0 0 24 24" fill="none">
                        <path d="M13 2L3 14H12L11 22L21 10H12L13 2Z" fill="url(#brandGradient)" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <defs>
                            <linearGradient id="brandGradient" x1="3" y1="2" x2="21" y2="22" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#FB923C" />
                                <stop offset="1" stopColor="#DB2777" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500 tracking-tighter group-hover:tracking-normal transition-all duration-500">
                        NANO BANANA
                    </span>
                </Link>

                {/* Navigation Links */}
                <div className="hidden md:flex items-center gap-10">
                    <Link href="#" className="text-xs font-black uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors">Сарчашма</Link>
                    <Link href="#" className="text-xs font-black uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors">Раванд</Link>
                    <Link href="#" className="text-xs font-black uppercase tracking-[0.3em] text-white/60 hover:text-white transition-colors">Файз</Link>
                </div>

                {/* CTA */}
                <button className="relative group px-8 py-3 rounded-full overflow-hidden transition-all duration-300 active:scale-95">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-pink-600 opacity-100 group-hover:opacity-90 transition-opacity" />
                    <div className="absolute inset-0 bg-white/20 blur-xl translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    <span className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em] text-white">Ҳозир фармоиш диҳед</span>
                </button>
            </div>
        </nav>
    );
}
