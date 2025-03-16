import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Email Scraper",
  description: "A professional tool to scrape emails and automate outreach",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50 min-h-screen font-sans antialiased flex flex-col">
        <Navbar />
        <main className="flex-grow">{children}</main> {/* Removed extra padding here */}
        <Footer />
      </body>
    </html>
  );
}