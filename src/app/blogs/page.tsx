import Navbar from '../../components/Navbar';

export default function Blogs() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 pt-28 pb-24">
      <div className="w-full max-w-4xl">
        <Navbar />
        
        <div className="flex flex-col items-center justify-center mt-32 md:mt-48">
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-center">
            Blogs & Notes
          </h1>
          <p className="text-xl text-center">
            Coming soon...
          </p>
        </div>
      </div>
    </main>
  );
} 