import TypedTitle from '../components/TypedTitle';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 pt-28 pb-24">
      <div className="w-full max-w-4xl">
        <div className="flex flex-col items-start justify-center mt-32 md:mt-48">
          <div className="max-w-[500px] md:max-w-[600px]">
            <TypedTitle />
            <p className="text-xl md:text-5xl font-bold text-left">
              Please select the page on navigator
            </p>
          </div>
        </div>
      </div>
    </main>
  );
} 