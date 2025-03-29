const Header = () => {
  return (
    <header 
      id="home" 
      className="min-h-screen flex items-center justify-end relative bg-cover bg-center" 
      style={{ backgroundImage: 'url(/background.png)' }} // Ensure the path is correct
    >
      {/* Semi-transparent overlay with backdrop blur */}
      <div className="absolute inset-0 bg-black opacity-30 backdrop-blur-lg"></div> {/* Added backdrop blur to the overlay */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center justify-end">
          {/* Left Side Content */}
          <div className="flex items-center space-x-8 ml-12"> {/* Added margin-left to shift content right */}
            {/* Logo with increased size and moved up */}
            {/* <img 
              src="/icon.png" 
              alt="Logo" 
              className="h-24 w-24 rounded-full -mt-12 shadow-xl" // Added shadow to the logo
            /> */}
            
            {/* Name and Tagline */}
            <div className='-mt-16'>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4"> 
  Hi, I'm <span className="text-purple-600">Piyumi Gunasekara</span>
</h1>
<p className="text-2xl font-bold font-[Arial, sans-serif] text-black">
  Blending aesthetics and functionality to create impactful digital interfaces
</p>
            </div>
          </div>

          {/* Right Side Image (Profile Picture) */}
          <div className="relative -mt-6 ml-6">
            <img
              src="/profilepic.png"
              alt="Designer workspace"
              className="rounded-full shadow-2xl w-96 h-96 object-contain transform scale-105" // Slight zoom in with scale-105 and shadow
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;