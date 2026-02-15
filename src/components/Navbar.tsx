import Link from "next/link";
import MangoLogo from "./MangoLogo";

export default function Navbar() {
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl border-b border-white/10 bg-white/5">
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Branding */}
                <Link href="/" className="flex items-center gap-3 group">
                    <div className="relative">
                        <MangoLogo className="w-9 h-9 group-hover:scale-110 transition-transform duration-300" />
                        <div className="absolute -top-1 -right-1 w-2 h-2 bg-pink-500 rounded-full animate-pulse" />
                    </div>
                    <div className="flex flex-col -gap-1">
                        <span className="text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500 uppercase tracking-tighter">
                            Tajik Mango
                        </span>
                        <span className="text-[10px] font-black text-white/40 tracking-[0.3em] uppercase leading-none">
                            Premium Soft Drink
                        </span>
                    </div>
                </Link>

                {/* Action Button */}
                <button className="px-6 py-2 rounded-full bg-gradient-to-r from-orange-500 to-pink-500 text-white font-medium hover:shadow-[0_0_20px_rgba(233,30,99,0.5)] transition-shadow duration-300">
                    Ҳозир фармоиш диҳед
                </button>
            </div>
        </nav>
    );
}
