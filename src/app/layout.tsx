import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata = {
  title: "Amelie — Pastelería",
  description: "Pastelería creativa y elegante. Quilmes, Argentina.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body className={`${inter.variable} ${playfair.variable} bg-[#F4ECE6] text-black`}>
        {children}
      </body>
    </html>
  );
}
