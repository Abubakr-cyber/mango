
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
                {/* Brand */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-pink-500">
                        Tajik Mango
                    </h3>
                    <p className="text-gray-400">
                        Ояндаи тароват. Фишори сард, бой аз маводи ғизоӣ ва интиқол
                        то дари хонаи шумо.
                    </p>
                </div>

                {/* Shop */}
                <div>
                    <h4 className="font-bold mb-4">Мағоза</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li className="hover:text-white cursor-pointer">Ҳама маззаҳо</li>
                        <li className="hover:text-white cursor-pointer">Маҷмӯаҳо</li>
                        <li className="hover:text-white cursor-pointer">Обунаҳо</li>
                    </ul>
                </div>

                {/* Support */}
                <div>
                    <h4 className="font-bold mb-4">Дастгирӣ</h4>
                    <ul className="space-y-2 text-gray-400">
                        <li className="hover:text-white cursor-pointer">Саволҳои маъмул</li>
                        <li className="hover:text-white cursor-pointer">Интиқол</li>
                        <li className="hover:text-white cursor-pointer">Бозгашт</li>
                        <li className="hover:text-white cursor-pointer">Бо мо тамос гиред</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="font-bold mb-4">Тоза бошед</h4>
                    <div className="flex gap-2">
                        <input
                            type="email"
                            placeholder="Email-и худро ворид кунед"
                            className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-orange-500"
                        />
                        <button className="bg-orange-500 px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors">
                            →
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    );
}
