import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/CartContext";
import CartSidebar from "@/components/CartSidebar";
import { WishlistProvider } from "@/context/WishlistContext";
import WishlistSidebar from "@/components/WishlistSidebar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "Maximum Effort",
  description: "Train like it counts. Storefront.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased text-gray-900 bg-white`}>
        <WishlistProvider>
          <CartProvider>
            <Navbar />
            <CartSidebar />
            <WishlistSidebar />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </CartProvider>
        </WishlistProvider>
      </body>
    </html>
  );
}
