import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css"
import TopNav from "@/components/TopNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ecomm",
  description: "Eccom app using NextJs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <TopNav/>
        {children}
      </body>
    </html>
  );
}
