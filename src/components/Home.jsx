import React from 'react';
import WithRoom from './WithRoom';
import WithoutRoom from './WithoutRoom';
import Footer from './Footer';

const Home = () => {
  return (
    <div>
        <div className="bg-gray-100 flex flex-col justify-center items-center relative">
      {/* Title */}
      <div className="text-blue-500 font-bold font-mono text-3xl text-center mt-12">
        👋 <span>The easy way to find College Roommates</span>
      </div>

      {/* Cards Row */}
      <div className="flex justify-center items-center space-x-12 mt-10">
        <WithoutRoom />
        <WithRoom />
      </div>

      {/* Floating Images */}
      <div className="absolute top-16 left-8 space-y-8">
        <img
          className="animate-floating w-32 h-32 "
          src="src/assets/img1.png"
          alt="Left 1"
        />
        <img
          className="animate-floating w-32 h-32 "
          src="src/assets/img4.png"
          alt="Left 2"
        />
      </div>
      <div className="absolute top-16 right-8 space-y-8">
        <img
          className="animate-floating w-32 h-32 "
          src="src/assets/img2.png"
          alt="Right 1"
        />
        <img
          className="animate-floating w-32 h-32 ml-6"
          src="src/assets/img3.png"
          alt="Right 2"
        />
      </div>
    </div>
    <Footer/>
    </div>
    
    
  );
};

export default Home;
