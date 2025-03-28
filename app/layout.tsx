import type { Metadata } from 'next';
import './globals.css';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import CounterProvider from '@/app/lib/context/CounterContext';

export const metadata: Metadata = {
  title: 'Work counter',
  description: 'A simple work hour tracker built with Next.js and authentication via GitHub',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdn.jsdelivr.net/gh/ekmas/cs16.css@main/css/cs16.min.css"
        />
      </head>
      <body className="mx-auto grid h-screen max-w-[650px] grid-cols-1 items-center gap-12 p-8 pb-20 sm:gap-16">
        <CounterProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </CounterProvider>
      </body>
    </html>
  );
}
