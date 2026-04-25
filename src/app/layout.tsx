import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

const amoresa = localFont({
  src: "./fonts/Amoresa-Regular.woff2",
  variable: "--font-amoresa",
  display: "swap",
});

export const metadata: Metadata = {
  title: "The Glam Barn Nails",
  description: "Handcrafted nail art and premium nail care in a warm, welcoming space.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${amoresa.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
