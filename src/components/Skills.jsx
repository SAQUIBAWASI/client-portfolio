import { useEffect, useRef } from 'react';

const Skills = () => {
  const containerRef = useRef(null);
  
  const skills = [
    { 
      category: "Computer Vision",
      items: ["Object Detection", "Image Classification", "Semantic Segmentation", "Face Recognition", "Pose Estimation", "OCR", "3D Vision","Ollama(LLaMA 3,Gemma 2)"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      )
    },
    { 
      category: "Deep Learning",
      items: ["TensorFlow", "PyTorch", "Keras", "CNN", "RNN", "Transformers", "GAN", "Transfer Learning","NLP"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      )
    },
    { 
      category: "Programming",
      items: ["Python", "C","C++", "Java", "CUDA", "OpenCV", "Scikit-Learn", "NumPy", "Pandas"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      )
    },
    { 
      category: "Deployment",
      items: ["Docker", "Kubernetes", "AWS", "Azure", "GCP", "NVIDIA Jetson", "TensorRT", "ONNX","GitHub"],
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
        </svg>
      )
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const containerPosition = container.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Check if container is in viewport
      if (containerPosition.top < windowHeight * 0.8 && containerPosition.bottom > 0) {
        const cards = container.querySelectorAll('.skill-card');
        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add('opacity-100', 'translate-y-0');
            card.classList.remove('opacity-0', 'translate-y-10');
          }, 150 * index);
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Trigger once on load
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="skills" className="py-20">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center duration-700 animate-in fade-in slide-in-from-bottom-8">
          <h2 className="mb-4 text-4xl font-bold">Skills & Expertise</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-primary to-secondary"></div>
          <p className="max-w-2xl mx-auto mt-6 text-gray-300">
            I've developed expertise across various aspects of computer vision and AI. 
            Here are the key technologies and skills I bring to the table:
          </p>
        </div>
        
        <div ref={containerRef} className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-card opacity-0 translate-y-10 transition-all duration-700 ease-out bg-dark-light p-6 rounded-xl hover:shadow-lg hover:shadow-primary/20 hover:translate-y-[-5px] border border-gray-800"
            >
              <div className="mb-6 text-primary">
                {skill.icon}
              </div>
              
              <h3 className="mb-4 text-xl font-bold text-white">{skill.category}</h3>
              
              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <svg className="h-5 w-5 text-primary mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Skill bars */}
        <div className="mt-20">
          <h3 className="mb-8 text-2xl font-bold text-center">Core Competencies</h3>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-white">Computer Vision Algorithms</span>
                  <span className="text-primary">95%</span>
                </div>
                <div className="h-2.5 bg-gray-700 rounded-full">
                  <div className="h-2.5 bg-gradient-to-r from-primary to-secondary rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-white">Deep Learning</span>
                  <span className="text-primary">90%</span>
                </div>
                <div className="h-2.5 bg-gray-700 rounded-full">
                  <div className="h-2.5 bg-gradient-to-r from-primary to-secondary rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-white">Python</span>
                  <span className="text-primary">95%</span>
                </div>
                <div className="h-2.5 bg-gray-700 rounded-full">
                  <div className="h-2.5 bg-gradient-to-r from-primary to-secondary rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-white">TensorFlow/PyTorch</span>
                  <span className="text-primary">85%</span>
                </div>
                <div className="h-2.5 bg-gray-700 rounded-full">
                  <div className="h-2.5 bg-gradient-to-r from-primary to-secondary rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-white">OpenCV</span>
                  <span className="text-primary">90%</span>
                </div>
                <div className="h-2.5 bg-gray-700 rounded-full">
                  <div className="h-2.5 bg-gradient-to-r from-primary to-secondary rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-white">Edge AI Deployment</span>
                  <span className="text-primary">80%</span>
                </div>
                <div className="h-2.5 bg-gray-700 rounded-full">
                  <div className="h-2.5 bg-gradient-to-r from-primary to-secondary rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;