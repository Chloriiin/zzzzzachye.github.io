import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const metadata = {
  title: 'Chloriiin - Personal Website',
  description: 'My personal website and portfolio',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
} 