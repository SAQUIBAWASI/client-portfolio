const Experience = () => {
  const experiences = [
    {
      period: "5/2024 - Present",
      company: "Master Works- Hyderabad",
      position: "SDE-1 (Computer Vision Engineer)",
      description: "Trained a segmentation model using YOLOv8 for accurate object segmentation across diverse datasets.",
      achievements: [
        "Analyzed feature maps to improve feature extraction and model performance.",
        "Built a Retrieval-Augmented Generation (RAG) chatbot with integrated database retrieval for context-aware responses.",
        "Fine-tuned the LLaMA 3.1 model on Hugging Face, enhancing domain-specific adaptability."
      ]
    },
    {
      period: "10/2022 - 11/2022",
      company: "The Trinity Company",
      position: "Data Science Engineer (Internship) - Remote",
      description: "",
      achievements: [
        "Conducted data analysis using Python libraries (NumPy, Pandas, Matplotlib).",
        "Cleaned data for accuracy and reliability"
        
      ]
    },
    {
      period: "02/2010 - 05/2020",
      company: "WebMonk Solution.",
      position: "Web Developer (Internship) - Delhi",
      description: "",
      achievements: [
        "Developed dynamic websites using PHP and MySQL.",
        "Created custom WordPress plugins and themes to enhance functionality."
        
      ]
    }
   ];

  return (
    <section id="experience" className="py-20">
      <div className="container px-6 mx-auto">
        <div className="mb-16 text-center duration-700 animate-in fade-in slide-in-from-bottom-8">
          <h2 className="mb-4 text-4xl font-bold">Work Experience</h2>
          <div className="w-24 h-1 mx-auto bg-gradient-to-r from-primary to-secondary"></div>
          <p className="max-w-2xl mx-auto mt-6 text-gray-300">
            My professional journey in computer vision and Web development across various industries.
          </p>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-primary via-primary-light to-secondary"></div>
          
          {/* Experience items */}
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-16 last:mb-0">
              <div className={`md:flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="absolute hidden w-5 h-5 transform -translate-x-1/2 border-4 rounded-full md:block left-1/2 bg-primary border-dark"></div>
                
                {/* Year */}
                <div className={`md:w-1/2 mb-6 md:mb-0 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <span className="inline-block px-4 py-2 font-medium rounded-lg bg-dark-light text-primary">
                    {exp.period}
                  </span>
                </div>
                
                {/* Content */}
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12'}`}>
                  <div className="p-6 transition-all duration-300 border border-gray-800 bg-dark-light rounded-xl hover:shadow-lg hover:shadow-primary/10">
                    <h3 className="mb-1 text-xl font-bold text-white">{exp.position}</h3>
                    <h4 className="mb-4 font-medium text-primary">{exp.company}</h4>
                    <p className="mb-4 text-gray-300">{exp.description}</p>
                    
                    <h5 className="mb-2 font-medium text-white">Key Achievements:</h5>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <svg className="h-5 w-5 text-primary mr-2 mt-0.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-300">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Education */}
        <div className="mt-24">
          <h3 className="mb-8 text-2xl font-bold text-center">Education</h3>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="p-6 transition-all duration-300 border border-gray-800 bg-dark-light rounded-xl hover:shadow-lg hover:shadow-primary/10">
              <div className="mb-4">
                <span className="text-gray-400">2020 - 2024</span>
                <h4 className="mt-1 text-xl font-bold text-white">Bachelor of Engineering in Computer Science</h4>
                <h5 className="font-medium text-primary">Maulana Azad National Urdu University, Hyderabad, India</h5>
                <span className="text-gray-400">GPA: 8.1</span>
              </div>
              <p className="text-gray-300">Specialized in Computer Vision and Machine Learning. Thesis on "Efficient Real-time Object Detection in Resource Constrained Environments".</p>
            </div>
            
            <div className="p-6 transition-all duration-300 border border-gray-800 bg-dark-light rounded-xl hover:shadow-lg hover:shadow-primary/10">
              <div className="mb-4">
                <span className="text-gray-400">20017 - 2020</span>
                <h4 className="mt-1 text-xl font-bold text-white">Diploma in Computer Science</h4>
                <h5 className="font-medium text-primary">Maulana Azad National Urdu University, Darbhanga, Bihar, India</h5>
                <span className="text-gray-400">GPA: 8.75</span>
              </div>
              <p className="text-gray-300">Focus on Artificial Intelligence and Algorithm Design. Graduated with honors, top 5% of class.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;