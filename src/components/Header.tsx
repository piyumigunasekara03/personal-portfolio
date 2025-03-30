const Header = () => {
  return (
    <header 
      id="home" 
      className="min-h-screen flex items-center justify-end relative bg-cover bg-center dark:before:bg-gray-900 dark:before:bg-opacity-50" 
      style={{ backgroundImage: 'url(/background.png)' }}
    >
      {/* Semi-transparent overlay with backdrop blur */}
      <div className="absolute inset-0 bg-black opacity-30 backdrop-blur-lg dark:opacity-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center justify-end">
          {/* Left Side Content */}
          <div className="flex items-center space-x-8 ml-12">
            <div className='-mt-16'>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-4"> 
                Hi, I'm <span className="text-purple-600 dark:text-purple-400">Piyumi Gunasekara</span>
              </h1>
              <p className="text-2xl font-bold font-[Arial, sans-serif] text-black dark:text-gray-200 mb-8">
                Blending aesthetics and functionality to create impactful digital interfaces
              </p>
              <a
                href="/Resume.pdf"
                download
                className="inline-flex items-center px-6 py-3 bg-purple-600 dark:bg-purple-500 text-white rounded-lg hover:bg-purple-700 dark:hover:bg-purple-600 transition-colors shadow-lg hover:shadow-xl"
              >
                Download Resume
              </a>
            </div>
          </div>

          {/* Right Side Image */}
          <div className="relative -mt-6 ml-6">
            <img
              src="/profilepic.png"
              alt="Designer workspace"
              className="rounded-full shadow-2xl w-96 h-96 object-contain transform scale-105 dark:shadow-purple-500/20"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;