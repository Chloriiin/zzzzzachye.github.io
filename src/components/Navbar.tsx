import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full max-w-6xl py-4 flex items-center justify-between">
      <Link href="/" className="text-xl font-bold">
        Chloriiin
      </Link>
      <div className="flex gap-4">
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/projects" className="hover:underline">
          Projects
        </Link>
        <Link href="/about" className="hover:underline">
          About
        </Link>
        <Link href="/contact" className="hover:underline">
          Contact
        </Link>
      </div>
    </nav>
  );
} 