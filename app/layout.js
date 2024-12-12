"use client"
import dynamic from 'next/dynamic';
import localFont from "next/font/local";
import "./globals.css";
import MainNav from "./components/MainNav";
import Footer from "./components/Footer";
import { AppProvider } from "@/app/components/AppContext";
import { Suspense } from 'react';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export default function RootLayout({ children }) {
  const Cart = dynamic(() => import('./components/Cart'), {
    ssr: false,
  })
 
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
        />
        <title>Graham Gardens</title>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} flex flex-col min-h-screen`}>
        
        <AppProvider>
          <MainNav />
          <client-only>
            <Cart />
          </client-only>
          <Suspense>
            {children}
          </Suspense>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
