import { Inter } from "next/font/google";
import "./styles/globals.scss";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SVOZD - Sindikat varnosti, obrambe, zaščite in družine",
  description:
    "Samostojna, prostovoljna, nestrankarska, interesna organizacija delavcev Ministrstva za obrambo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sl">
      <body className={cn(inter.className)}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
