import { Inter } from 'next/font/google';
import Navbar from './components/navbar/Navbar';
import type { Metadata } from 'next';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'WNYU 89.1 FM',
  description: "NYU'S ONLY COLLEGE RADIO STATION",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
