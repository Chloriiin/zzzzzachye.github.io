export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 pt-28 pb-24">
      <div className="w-full max-w-4xl">
        <div className="flex flex-col items-start mt-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            About me
          </h1>
          
          <div className="flex flex-wrap gap-3 mb-8">
            <a 
              href="https://drive.google.com/file/d/1-An8E7yUP2rvaIk2sOIvLIVWWQHk03as/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              Curriculum vitae (English)
            </a>
            <a 
              href="https://drive.google.com/file/d/1-An8E7yUP2rvaIk2sOIvLIVWWQHk03as/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              Curriculum vitae (Chinese)
            </a>
            <a 
              href="https://github.com/Chloriiin" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              GitHub
            </a>
            <a 
              href="https://www.linkedin.com/in/zhijiangye" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black text-white px-4 py-2 rounded-full hover:bg-gray-800 transition-colors"
            >
              LinkedIn
            </a>
          </div>
          
          <p className="text-lg mb-6">
            My name is Zhijiang (Zach) Ye, and I am currently pursuing Bachelor of Science in Biology and Applied 
            Mathematics (double major) at Emory University, with an expected graduation in May 2026.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mt-8">
            <div className="bg-[#f2f2f2] p-6 rounded-xl">
              <h2 className="text-3xl font-bold mb-4">Biology</h2>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. 
                Maecenas vel magna vel libero tincidunt scelerisque non id turpis.
              </p>
            </div>
            
            <div className="bg-[#f2f2f2] p-6 rounded-xl">
              <h2 className="text-3xl font-bold mb-4">Applied Math</h2>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. 
                Maecenas vel magna vel libero tincidunt scelerisque non id turpis.
              </p>
            </div>
            
            <div className="bg-[#f2f2f2] p-6 rounded-xl md:col-span-2">
              <h2 className="text-3xl font-bold mb-4">Research Interests</h2>
              <p className="text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla facilisi. 
                Maecenas vel magna vel libero tincidunt scelerisque non id turpis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 