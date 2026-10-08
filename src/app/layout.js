import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavHadder from "./Components/Navbar/NavHadder";
import { ToastContainer } from "react-toastify";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Website",
  description: "My Next.js Website",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} light`}
    >
      <body className="max-w-[1400px] mx-auto bg-white text-black antialiased">
        <ToastContainer position="top-right" autoClose={3000} />
        <NavHadder/>
        {children}
      </body>
    </html>
  );
}