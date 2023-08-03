import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";
import { ThemeProvider, useThemeContext } from "./context/ThemeContext";
import { CountryProvider } from "./context/CountryContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Search Countries ",
  description:
    "Search counrties for the detailed information, developed by Mehmet Akif AKKUS",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CountryProvider>
          <ThemeProvider>
            <Navbar />
            {children}
          </ThemeProvider>
        </CountryProvider>
      </body>
    </html>
  );
}
