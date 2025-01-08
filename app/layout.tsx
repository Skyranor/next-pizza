import "./globals.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({
  subsets: ["cyrillic"],
  variable: "--font-nunito",
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="./logo.png" />
      <body className={`${nunito.variable} antialiased`}>{children}</body>
    </html>
  );
}
