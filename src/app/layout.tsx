import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nano Banana | Ояндаи тароват",
  description: "Насли нави шарбатҳои табиии фишори сард. 100% мева, бидуни созиш.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tg" className="no-scrollbar">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
