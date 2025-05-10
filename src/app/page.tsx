import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-white flex flex-col items-center">
      <Navbar />
      <div className="flex-1 flex flex-col justify-center items-center w-full px-4" style={{ marginTop: '-40px' }}>
        <h1 className="text-7xl sm:text-8xl font-bold text-black text-center mb-10">
          Chloriiin<span style={{ fontWeight: 'normal' }}>です。</span>
        </h1>
        <div className="text-center">
          <h2 className="text-4xl font-bold text-black">
            Please select the page on
          </h2>
          <h2 className="text-4xl font-bold text-black">
            navigator
          </h2>
        </div>
      </div>
    </main>
  );
}
