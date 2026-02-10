import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl border-b border-white/10 bg-white/5">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Branding */}
                <Link href="/" className="flex items-center gap-2 group">
                    <svg
                        className="w-8 h-8 text-orange-500 group-hover:rotate-12 transition-transform duration-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8 8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                        {/* Abstract Lightning/Banana shape - placeholder logic but following style */}
                        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" className="text-pink-500" stroke="none" fill="url(#grad1)" />
                        <defs>
                            <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" style={{ stopColor: "#FFB74D", stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: "#E91E63", stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                    </svg>
                    <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500">
                        Tajik Mango
                    </span>
                </Link>

                {/* Action Button */}
                <button className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium hover:shadow-[0_0_20px_rgba(233,30,99,0.5)] transition-shadow duration-300">
                    Ҳозир фармоиш диҳед
                </button>
            </div>
        </nav>
    );
}
