import { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const projects = [
    {
      title: "RAG-based Multi-Source Document Processing System",
      category: ["computer-vision", "object-detection"],
      image: "https://img.freepik.com/free-vector/cctv-surveillance-system-concept_23-2148529257.jpg",
      description: "Designed a system to query data from PDFs, Excel files, and URLs using Retrieval-Augmented Generation (RAG). Integrated citation features and structured query pipelines for Excel data, enabling efficient and accurate information extraction. Developed a web scraping component with vector store-based querying for seamless access to information across diverse sources. Implemented optimized data retrieval techniques to enhance the system’s responsiveness.",
      technologies: ["TensorFlow", "YOLO v5", "OpenCV", "Python"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "RAG-based Chatbot for NL2SQL Conversion",
      category: ["computer-vision", "face-recognition"],
      image: "https://img.freepik.com/free-vector/facial-recognition-concept-illustration_114360-7731.jpg",
      description: "Built a chatbot for converting natural language queries into SQL statements, bridging the gap between non-technical users and database interaction. Integrated database retrieval mechanisms to handle complex queries and ensure accurate SQL command generation. Incorporated conversational context handling for better user experience and query relevance.",
      technologies: ["PyTorch", "FaceNet", "Docker", "Kubernetes"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Object Detection and Segmentation Pipeline",
      category: ["computer-vision", "pose-estimation"],
      image: "https://img.freepik.com/free-photo/woman-touching-virtual-screen_53876-94488.jpg",
      description: "Developed detection and segmentation models using YOLOv8 to accurately identify and segment objects across diverse datasets. Improved model precision with advanced data preprocessing techniques and anchor box visualization. Utilized domain-specific augmentation strategies to improve performance on challenging datasets.",
      technologies: ["MediaPipe", "TensorFlow.js", "React", "WebGL"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Large Language Model (LLM) Projects",
      category: ["deep-learning", "segmentation"],
      image: "https://img.freepik.com/free-photo/medical-banner-with-doctor-holding-tablet_23-2149611236.jpg",
      description: "Fine-tuned advanced language models like LLaMA 3 and Qwen 2 using LlamaIndex and LangChain frameworks. Enhanced the adaptability and efficiency of models for various domain-specific applications. Evaluated model performance through rigorous benchmarking to identify areas of improvement and ensure deployment readiness.",
      technologies: ["PyTorch", "U-Net", "MONAI", "DICOM"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "CNN-Based ISL Gesture Recognition",
      category: ["computer-vision", "slam"],
      image: "https://img.freepik.com/free-photo/drone-flying-nature_23-2149133584.jpg",
      description: "Conducted preprocessing of Indian Sign Language (ISL) gesture images to develop a CNN-based recognition system. Collaborated with academic advisors to align the project with educational standards. Designed a robust architecture for accurate recognition of gestures under varying conditions.",
      technologies: ["ROS", "OpenCV", "ORB-SLAM", "CUDA"],
      demoLink: "#",
      codeLink: "#"
    },
    {
      title: "Hate Speech Detection in Urdu Tweets",
      category: ["deep-learning", "analytics"],
      image: "https://img.freepik.com/free-photo/people-shopping-grocery-store-supermarket_23-2149114952.jpg",
      description: "Applied NLP techniques to detect hate speech in Urdu tweets using the Twitter API. Analyzed textual logs with clustering algorithms to improve fault prediction accuracy. Designed a scalable pipeline for processing large datasets to enhance system reliability.",
      technologies: ["TensorFlow", "OpenCV", "AWS", "React"],
      demoLink: "#",
      codeLink: "#"
    }
  ];
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category.includes(activeFilter));
    
  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'computer-vision', name: 'Computer Vision' },
    { id: 'deep-learning', name: 'Deep Learning' },
    { id: 'object-detection', name: 'Object Detection' },
    { id: 'face-recognition', name: 'Face Recognition' },
    { id: 'segmentation', name: 'Segmentation' },
    { id: 'slam', name: 'SLAM' }
  ];

  return (
    <section id="projects" className="py-20 bg-dark-light">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center duration-700 animate-in fade-in slide-in-from-bottom-8">
          <h2 className="mb-4 text-4xl font-bold">Featured Projects</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-primary to-secondary"></div>
          <p className="max-w-2xl mx-auto mt-6 text-gray-300">
            Browse through some of my recent work in computer vision and AI. 
            These projects showcase different applications of visual intelligence technologies.
          </p>
        </div>
        
        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map(filter => (
            <button 
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === filter.id 
                  ? 'bg-primary text-white' 
                  : 'bg-dark text-gray-400 hover:text-white hover:bg-dark-lighter'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <div 
              key={index} 
              className="overflow-hidden transition-all duration-300 border border-gray-800 bg-dark rounded-xl hover:shadow-lg hover:shadow-primary/20 hover:border-primary/30 group"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 w-full p-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6">
                <p className="mb-4 text-gray-300">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="px-3 py-1 text-xs text-gray-300 rounded-full bg-dark-lighter">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-3">
                  <a 
                    href={project.demoLink} 
                    className="px-4 py-2 text-sm font-medium text-white transition-colors duration-300 rounded-lg bg-primary hover:bg-primary-dark"
                  >
                    Live Demo
                  </a>
                  <a 
                    href={project.codeLink} 
                    className="px-4 py-2 text-sm font-medium text-white transition-colors duration-300 rounded-lg bg-dark-lighter hover:bg-gray-700"
                  >
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://github.com/raftaarrashedin" 
            target="_blank"
            rel="noopener noreferrer" 
            className="inline-flex items-center px-6 py-3 text-base font-medium text-white transition-colors duration-300 rounded-lg bg-dark hover:bg-dark-lighter"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
            View More Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;