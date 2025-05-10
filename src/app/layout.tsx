import './globals.css';

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
      <body>{children}</body>
    </html>
  );
} 