import Link from 'next/link';
import Navbar from '@/components/navbar';
import { Roboto } from 'next/font/google';

/* Metadata solo funciona del lado del servidor */
export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
};

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  styles: ['italic', 'normal'],
  subsets: ['latin'],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
