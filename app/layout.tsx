import type { Metadata } from "next";
import { Poppins, Montserrat, Mynerve } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const mynerve = Mynerve({
  variable: "--font-mynerve",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Klub psáčů a Petr Hanel",
  description:
    "Kurzy storytellingu, redakce textů a individuální mentoring pro každého, kdo chce líp psát.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs">
      <body
        className={`${poppins.variable} ${montserrat.variable} ${mynerve.variable} antialiased max-w-screen overflow-x-hidden`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}