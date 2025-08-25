import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ThemeProvider from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <div className="min-h-screen bg-gray-900 transition-colors duration-300">
            <Navigation />
            <main className="pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
