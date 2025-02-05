import { Geist, Geist_Mono, Josefin_Sans } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const josefin_sans = Josefin_Sans({
  variable: "--josefin",
  subsets: ["latin"],
});

export const metadata = {
  title: "World of Planets",
  description: "sarcastic description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${josefin_sans.variable} antialiased`}>{children}</body>
    </html>
  );
}
