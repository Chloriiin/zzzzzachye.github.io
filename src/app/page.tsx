import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-4 md:p-24">
      <Navbar />
      <div className="max-w-4xl w-full flex flex-col items-center justify-center py-12">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 text-center">
          Welcome to My Personal Website
        </h1>
        <p className="text-lg text-center mb-8">
          This is a placeholder for my personal GitHub website. It will be updated according to the Figma design.
        </p>
      </div>
    </main>
  );
} 