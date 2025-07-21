import './globals.css';
import Navbar from '../components/Navbar';

export const metadata = {
  title: 'Zach Ye - Personal Website',
  description: 'My personal website and portfolio',
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="pt-[56px]">
          {children}
        </main>
      </body>
    </html>
  );
} 