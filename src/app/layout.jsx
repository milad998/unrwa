import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Navbar";
import Footer from "./footer";
import BootstrapClient from './BootstrapClient';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "unrwa france",
  description: "Soutenir les réfugiés palestiniens",
};

export default function RootLayout({ children }) {

  return (
    <html lang="fr">
      <body className={`${geistSans.variable} ${geistMono.variable} bg-white`}>
        <BootstrapClient />
        <Navbar/>

        {children}
        <Footer/>
      </body>
    </html>
  );
}
