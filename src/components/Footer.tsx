export default function Footer() {
    return (
        <footer className="bg-gray-950 text-white pt-32 pb-16 px-6 relative z-30">
            <div className="max-w-7xl mx-auto border-t border-white/5 pt-20">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-20">
                    {/* Brand Column */}
                    <div className="flex flex-col gap-8">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500 tracking-tighter">
                                NANO BANANA
                            </span>
                        </div>
                        <p className="text-sm text-white/40 leading-relaxed font-medium">
                            Пешвои ояндаи тароват тавассути технологияи фишори сард ва ҳифзи комили маводи ғизоӣ.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-white/30">Маҳсулот</h4>
                        <ul className="flex flex-col gap-5 text-sm font-bold tracking-tight">
                            <li><a href="#" className="text-white/60 hover:text-orange-400 transition-colors">Ҳама маззаҳо</a></li>
                            <li><a href="#" className="text-white/60 hover:text-orange-400 transition-colors">Маҷмӯаҳо</a></li>
                            <li><a href="#" className="text-white/60 hover:text-orange-400 transition-colors">Обуна</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-white/30">Дастгирӣ</h4>
                        <ul className="flex flex-col gap-5 text-sm font-bold tracking-tight">
                            <li><a href="#" className="text-white/60 hover:text-orange-400 transition-colors">Пайгирии фармоиш</a></li>
                            <li><a href="#" className="text-white/60 hover:text-orange-400 transition-colors">Саволҳо</a></li>
                            <li><a href="#" className="text-white/60 hover:text-orange-400 transition-colors">Ҳамкорӣ</a></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="text-[10px] font-black uppercase tracking-[0.4em] mb-10 text-white/30">Пайваст шавед</h4>
                        <div className="flex flex-col gap-6">
                            <input
                                type="email"
                                placeholder="Email-и худро ворид кунед"
                                className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 text-sm focus:outline-none focus:border-orange-500 transition-all font-medium"
                            />
                            <button className="bg-white text-black font-black text-xs uppercase tracking-widest py-4 rounded-xl hover:bg-orange-500 hover:text-white transition-all">
                                Обуна шудан
                            </button>
                        </div>
                    </div>
                </div>

                <div className="mt-40 pt-10 border-t border-white/5 flex flex-col md:row justify-between items-center gap-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white/20">© 2026 Nano Banana Pressery. Ҳамаи ҳуқуқҳо ҳифз шудаанд.</p>
                    <div className="flex gap-10 text-[10px] font-black uppercase tracking-[0.4em] text-white/20">
                        <a href="#" className="hover:text-white transition-colors">Маҳфият</a>
                        <a href="#" className="hover:text-white transition-colors">Шартҳо</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
