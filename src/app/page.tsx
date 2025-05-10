import Link from 'next/link';
import Navbar from '../components/Navbar';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 pt-28 pb-24">
      <div className="w-full max-w-4xl">
        <Navbar />
        
        <div className="flex flex-col items-start justify-center mt-32 md:mt-48 px-4 md:px-8">
          <div className="w-full">
            <h1 className="text-5xl md:text-7xl font-bold mb-4 text-left whitespace-nowrap">
              Chloriiin<span className="ml-2 md:ml-4">です。</span>
            </h1>
            <p className="text-xl md:text-3xl font-bold text-left">
              Please select the page on navigator
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 