
import { Metadata } from "next";
import { geistSans, geistMono } from "../config/fonts";
import "./globals.css";
import { Provider } from "@/components";

export const metadata: Metadata = {
  title: {
    template: "%s - Teslo | Shop",
    default: "Home"
  },
  description: 'Tienda Virtual de Productos'
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Provider>
        {children}
        </Provider>
      </body>
    </html>
  );
}
