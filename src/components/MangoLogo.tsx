"use client";

import { motion } from "framer-motion";

interface MangoLogoProps {
    className?: string;
}

export default function MangoLogo({ className = "w-10 h-10" }: MangoLogoProps) {
    return (
        <svg
            className={className}
            viewBox="0 0 100 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <defs>
                <linearGradient id="mango-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#FFD54F", stopOpacity: 1 }} />
                    <stop offset="50%" style={{ stopColor: "#FF8F00", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#E91E63", stopOpacity: 1 }} />
                </linearGradient>
                <linearGradient id="leaf-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: "#81C784", stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: "#388E3C", stopOpacity: 1 }} />
                </linearGradient>
            </defs>

            {/* Mango Body */}
            <path
                d="M50 20C30 20 15 35 15 55C15 75 35 90 50 90C65 90 85 75 85 55C85 35 70 20 50 20Z"
                fill="url(#mango-grad)"
                className="drop-shadow-lg"
            />

            {/* Leaf */}
            <path
                d="M50 20C50 20 55 5 70 5C70 5 75 20 50 30"
                fill="url(#leaf-grad)"
                stroke="#1B5E20"
                strokeWidth="1"
            />

            {/* Glossy Highlight */}
            <ellipse
                cx="35"
                cy="40"
                rx="10"
                ry="15"
                fill="white"
                fillOpacity="0.3"
                transform="rotate(-20 35 40)"
            />
        </svg>
    );
}
