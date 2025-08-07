const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black">
      <div className="relative">
        <div className="w-20 h-20 border-4 border-gray-700 border-t-primary rounded-full animate-spin"></div>
        
        <div className="mt-8 text-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Loading
          </span>
          <span className="loading-dots">
            <span className="dot animate-pulse">.</span>
            <span className="dot animate-pulse" style={{ animationDelay: '0.2s' }}>.</span>
            <span className="dot animate-pulse" style={{ animationDelay: '0.4s' }}>.</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Loader;