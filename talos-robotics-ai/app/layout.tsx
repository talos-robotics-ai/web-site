import type { Metadata } from "next";
import { Jost, Source_Serif_4 } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
});

// opsz is opted into explicitly so the 18pt optical size can be pinned in CSS
const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  style: "italic",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Talos Robotics — A Physical AI OS",
  description:
    "TalOS turns any humanoid into a working teammate — describe the job in plain language, watch it run in simulation, then deploy it on your floor.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jost.variable} ${sourceSerif.variable}`}>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
