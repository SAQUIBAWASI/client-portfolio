const About = () => {
  return (
    <section id="about" className="py-20 bg-dark-light">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center duration-700 animate-in fade-in slide-in-from-bottom-8">
          <h2 className="mb-4 text-4xl font-bold">About Me</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-primary to-secondary"></div>
        </div>
        
        <div className="flex flex-col items-center justify-between md:flex-row">
          <div className="w-full mb-10 md:w-2/5 md:mb-0">
            <div className="relative">
              <div className="w-64 h-64 mx-auto overflow-hidden border-4 rounded-full shadow-lg border-primary shadow-primary/30">
                <img 
                  src="../public/assets/images/android-chrome-192x192.png" 
                  alt="Profile"
                  className="object-cover w-full h-full"
                />
              </div>
              
              {/* Experience badge */}
              <div className="absolute px-4 py-2 rounded-lg shadow-lg -bottom-5 -right-5 md:bottom-5 md:right-20 bg-dark">
                <p className="text-xl font-bold text-primary">2+ Years</p>
                <p className="text-sm text-gray-400">Experience</p>
              </div>
            </div>
          </div>
          
          <div className="w-full md:w-3/5">
            <h3 className="mb-4 text-2xl font-bold text-primary">Computer Vision Expert</h3>
            <p className="mb-6 text-gray-300">
              A highly motivated Computer Vision and Data Science professional with expertise in machine learning, deep learning, and natural language processing. Skilled in developing end-to-end solutions using advanced frameworks such as YOLOv8, Hugging Face, LangChain, and LlamaIndex.
            </p>
            
            <p className="mb-6 text-gray-300">
              Proven experience in building cutting-edge projects like RAG-based chatbots, object detection pipelines, and large language model fine-tuning.
            </p>
            
            <p className="mb-8 text-gray-300">
              Adept at applying advanced programming techniques and tools to deliver innovative solutions in both academic and professional settings.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Object Detection</span>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Facial Recognition</span>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Image Segmentation</span>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Pose Estimation</span>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>3D Reconstruction</span>
              </div>
              
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mr-2 text-primary" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Action Recognition</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;