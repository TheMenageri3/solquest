import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { WalletContextProvider } from "@/components/providers/WalletContextProvider";
import Navbar from "@/components/general/Navbar";
import Footer from "@/components/general/Footer";
import '@solana/wallet-adapter-react-ui/styles.css';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SolQuest",
  description: "Solana's number one bounty board!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <WalletContextProvider>
        <body className={`relative w-screen min-h-screen overflow-x-hidden flex flex-col ${inter.className}`}>
          <Navbar />
          {children}
          <Footer />
        </body>
      </WalletContextProvider>
    </html>
  );
}
