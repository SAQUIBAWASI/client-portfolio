import { useEffect, useRef } from 'react';

const Hero = () => {
  const containerRef = useRef(null);
  
  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = containerRef.current;
      if (!container) return;
      
      const { clientX, clientY } = e;
      const { left, top, width, height } = container.getBoundingClientRect();
      
      const x = (clientX - left) / width - 0.5;
      const y = (clientY - top) / height - 0.5;
      
      container.style.transform = `perspective(1000px) rotateY(${x * 4}deg) rotateX(${y * -4}deg)`;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute w-64 h-64 rounded-full top-20 left-10 bg-primary opacity-10 filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute w-64 h-64 rounded-full bottom-20 right-10 bg-secondary opacity-10 filter blur-3xl animate-pulse-slow"></div>
      
      <div className="container flex flex-col items-center justify-between px-6 py-20 mx-auto md:flex-row">
        <div className="w-full mb-12 text-center md:w-1/2 md:text-left md:mb-0">
          <div className="duration-700 animate-in slide-in-from-bottom-8">
            <div className="inline-block mb-4">
              <span className="px-4 py-1 text-sm font-medium rounded-full bg-gradient-to-r from-primary to-secondary">
                Computer Vision Developer
              </span>
            </div>
            
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">
              <span className="block">Hello,</span>
              <span className="text-transparent bg-gradient-to-r from-primary to-secondary bg-clip-text">
                I'm MD Rashedin
              </span>
            </h1>
            
            <p className="max-w-lg mb-10 text-lg text-gray-300">
              A highly motivated Computer Vision and Data Science professional with expertise in machine learning, deep learning, and natural language processing.
            </p>
            
            <div className="flex flex-col justify-center space-y-4 sm:flex-row md:justify-start sm:space-y-0 sm:space-x-4">
              <a 
                href="#contact"
                className="px-8 py-3 font-medium text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-primary to-primary-dark hover:shadow-lg hover:shadow-primary/30"
              >
                Hire Me
              </a>
              <button onClick={() => { const link = document.createElement('a'); link.href = '/md_rashedin_resume-1.pdf'; link.download = 'MD_Rashedin_Resume.pdf'; document.body.appendChild(link); link.click(); document.body.removeChild(link); }} className="px-8 py-3 font-medium text-white transition-all duration-300 rounded-lg bg-gradient-to-r from-primary to-primary-dark hover:shadow-lg hover:shadow-primary/30">Download Resume</button>
              <a 
                href="#projects"
                className="px-8 py-3 font-medium transition-all duration-300 bg-transparent border rounded-lg border-primary text-primary hover:bg-primary/10"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
        
        <div className="w-full md:w-1/2" ref={containerRef}>
          <div className="relative p-4 transition-transform duration-300">
            <div className="flex items-center justify-center mx-auto overflow-hidden rounded-full w-72 h-72 bg-gradient-to-r from-primary to-secondary opacity-90">
              <img 
                src="https://img.freepik.com/free-photo/robot-doing-peace-sign_1048-3527.jpg" 
                alt="Computer Vision AI" 
                className="object-cover w-full h-full"
              />
            </div>
            
            {/* Floating elements */}
            <div className="absolute top-0 p-3 rounded-lg shadow-lg left-10 bg-dark-light backdrop-blur-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium">Object Detection</span>
              </div>
            </div>
            
            <div className="absolute left-0 p-3 rounded-lg shadow-lg bottom-10 bg-dark-light backdrop-blur-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium">Facial Recognition</span>
              </div>
            </div>
            
            <div className="absolute right-0 p-3 rounded-lg shadow-lg top-1/2 bg-dark-light backdrop-blur-sm">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                <span className="text-xs font-medium">Deep Learning</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute left-0 right-0 flex justify-center bottom-10">
        <a href="#about" className="animate-bounce-slow">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;