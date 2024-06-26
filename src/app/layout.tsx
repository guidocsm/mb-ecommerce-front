'use client'

import { OrderProvider } from "@/providers/orderStoreProvider";
import { Header } from "../components/ui/Header";
import { jost } from "../fonts/fonts";
import '@/scss/index.scss'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${jost.className} antialiased`}>
        <OrderProvider>
          <Header />
          {children}
        </OrderProvider>
      </body>
    </html>
  );
}
