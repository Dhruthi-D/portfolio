import type { Metadata } from "next";
import { Playfair_Display, Lora } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: "DHRUTHI D - Portfolio",
  description: "Information Science & Engineering Student | Web Developer | IoT Enthusiast",
  keywords: ["portfolio", "web development", "IoT", "student", "engineering"],
  authors: [{ name: "DHRUTHI D" }],
  openGraph: {
    title: "DHRUTHI D - Portfolio",
    description: "Information Science & Engineering Student | Web Developer | IoT Enthusiast",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable}`} suppressHydrationWarning>
      <body className="font-serif antialiased">
        <ThemeProvider>
          <div className="min-h-screen bg-[#f4f0ea] dark:bg-[#181614] text-[#1c1917] dark:text-[#eae6df] transition-colors duration-300">
            <Navigation />
            <main className="pt-20 pb-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
