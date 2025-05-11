import Image from 'next/image';

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center px-2 sm:px-4 pt-16 pb-24">
      <div className="w-full max-w-5xl xl:max-w-6xl">
        <div className="flex flex-col items-start mt-6">
          <div className="w-full flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8 px-2 sm:px-0">
            <h1 className="text-5xl md:text-6xl font-bold whitespace-nowrap mb-6 lg:mb-0 text-[#86CECB]">
              About me
            </h1>
            
            <div className="flex flex-wrap gap-2 sm:gap-3">
              <a 
                href="https://drive.google.com/file/d/1-An8E7yUP2rvaIk2sOIvLIVWWQHk03as/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black text-white px-3 sm:px-4 py-2 rounded-full hover:bg-gray-800 transition-colors font-bold text-sm sm:text-base"
              >
                Curriculum vitae (English)
              </a>
              <a 
                href="https://drive.google.com/file/d/1-An8E7yUP2rvaIk2sOIvLIVWWQHk03as/view?usp=sharing" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black text-white px-3 sm:px-4 py-2 rounded-full hover:bg-gray-800 transition-colors font-bold text-sm sm:text-base"
              >
                Curriculum vitae (Chinese)
              </a>
              <a 
                href="https://github.com/Chloriiin" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black text-white px-3 sm:px-4 py-2 rounded-full hover:bg-gray-800 transition-colors font-bold flex items-center text-sm sm:text-base"
              >
                <svg 
                  width="20" 
                  height="20" 
                  viewBox="0 0 98 96" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-2"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                    fill="#fff"
                  />
                </svg>
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/zhijiangye" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-black text-white px-3 sm:px-4 py-2 rounded-full hover:bg-gray-800 transition-colors font-bold text-sm sm:text-base"
              >
                LinkedIn
              </a>
              <a 
                href="mailto:zhijiang.ye@emory.edu"
                className="bg-black text-white px-3 sm:px-4 py-2 rounded-full hover:bg-gray-800 transition-colors font-bold text-sm sm:text-base"
              >
                Email
              </a>
            </div>
          </div>
          
          <p className="text-lg mb-2 font-bold text-[#525252] px-2 sm:px-0">
            My name is Zhijiang (Zach) Ye, and I am currently pursuing Bachelor of Science in Biology and Applied 
            Mathematics (double major) at Emory University, with an expected graduation in May 2026.
          </p>

          <hr className="w-full border-gray-300 my-2" />
          
          <div className="w-full flex flex-col md:flex-row gap-8 mt-1 px-2 sm:px-0">
            <div className="md:w-2/3 flex flex-col gap-6">
              <div className="flex flex-col">
                <div className="flex-grow mb-[150px]">
                  <p className="text-lg text-black mb-2">
                    Currently I am working as an undergraduate researcher in the Sarafianos Lab at Emory Pediatrics. Here I investigate interaction dynamics between engineered HIV-1 Capsid protein (CA121) mutants and specific inhibitory compounds.
                  </p>
                  <p className="text-lg text-black">
                    My academic interests are focused particularly in biochemical pharmacology and structural biology.
                  </p>
                </div>
                <div className="flex-shrink-0 flex items-start justify-start">
                  <h2 className="text-5xl font-bold text-[#86CECB] whitespace-nowrap">biology</h2>
                </div>
              </div>

              <div className="flex flex-col">
                <div className="flex-grow mb-[150px]">
                  <p className="text-lg text-black">
                    While working at Sarafianos Lab, I am particularly fascinated by how numerical methods as well as mathematical modeling can be integrated with experimental biology to elucidate complex biochemical mechanisms. My work includes developing and optimizing curve-fitting algorithms to improve the accuracy of Thermal Shift Assay data interpretation.
                  </p>
                </div>
                <div className="flex-shrink-0 flex flex-col items-start justify-start">
                  <h2 className="text-5xl font-bold text-[#86CECB] whitespace-nowrap">Applied</h2>
                  <h2 className="text-5xl font-bold text-[#86CECB] whitespace-nowrap mt-1">Math</h2>
                </div>
              </div>
            </div>

            <div className="md:w-1/3 mt-4 md:mt-0">
              <div className="relative w-4/5 mx-auto h-auto aspect-[3/4]">
                <Image 
                  src="/imgs/profile_trimmed.jpg"
                  alt="Zhijiang (Zach) Ye profile picture"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 