import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google"; // 1. Import Plus Jakarta Sans font
import "./globals.css";

// 2. Configure font
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

// 3. Set Metadata
export const metadata: Metadata = {
  title: "Tajik Mango | Ояндаи тароват",
  description: "Ояндаи шарбати тозаро бо Tajik Mango ҳис кунед.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tg">
      <body className={jakarta.className}>{children}</body>
    </html>
  );
}
