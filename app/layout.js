import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Nav from "@/components/Navbar";
import Popup from "@/components/Popup";

export const metadata = {
  title: "GiftPerks",
  description: "Buy and receive NFTs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {children}
          <Popup />
        </main>
      </body>
    </html>
  );
}
