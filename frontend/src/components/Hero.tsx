import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import cleaningImg from "../assets/images/cleaning.webp";
import packingImg from "../assets/images/packing.webp";
import pestControlImg from "../assets/images/pestcontrol.webp";


//Header Hover
const HoverText = ({ text }: { text: string }) => {
  return (
    <>
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split("").map((char, charIndex) => (
            <span
              key={charIndex}
              className="transition-colors duration-300 hover:duration-75 hover:text-[#ffcc2a] cursor-default inline-block"
            >
              {char}
            </span>
          ))}
          {wordIndex < text.split(" ").length - 1 && "\u00A0"}
        </span>
      ))}
    </>
  )
}


const slides = [
  {
    image: cleaningImg, 
    heading: "Professional Cleaning Services in Mumbai",
  },
  {
    image: packingImg, 
    heading: "Safe and Reliable Moving Services in Mumbai",
  },
  {
    image: pestControlImg, 
    heading: "Effective Pest Control Services in Mumbai",
  },
];

//Mobile Slider Logic
const Hero = () => {
  const [current, setCurrent] = useState(0);

  
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;
    const distance = touchStartX - touchEndX;
    
    if (distance > 50) {
      
      setCurrent((prev) => (prev + 1) % slides.length);
    } else if (distance < -50) {
      
      setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    }
    
    
    setTouchStartX(0);
    setTouchEndX(0);
  };

  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-white px-4 md:px-6 pt-10 pb-4 flex flex-col items-center overflow-hidden">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center mb-8 px-4 max-w-7xl mx-auto"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#3b5998] mb-4 leading-tight break-words">
          <HoverText text="Welcome to City Professionals" />
        </h1>
        <p className="text-gray-500 text-lg md:text-xl font-medium max-w-2xl mx-auto">
          Connect with verified top-rated professionals for moving, cleaning, pest control, and all your home essential needs under one trusted marketplace.
        </p>
      </motion.div>

      {/* Slider */}
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 40 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="relative w-[95%] max-w-7xl overflow-hidden rounded-3xl touch-pan-y" 
        style={{ height: "70vh" }}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        
        {/* Images */}
        {slides.map((slide, index) => (
          <div key={index} className="absolute inset-0 w-full h-full pointer-events-none">
            <img
              src={slide.image}
              alt={`Slide ${index + 1}`}
              loading="eager"
              className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
              style={{ opacity: index === current ? 1 : 0 }}
            />
          </div>
        ))}

        
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />

        
        <div className="absolute inset-0 flex flex-col items-center justify-center h-full text-center px-6 z-10 pointer-events-none">
          <AnimatePresence mode="wait">
            <motion.h2
              key={current} 
              initial={{ opacity: 0, y: 15 }} 
              animate={{ opacity: 1, y: 0 }}  
              exit={{ opacity: 0, y: -15 }}   
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-snug drop-shadow-lg max-w-4xl"
            >
              {slides[current].heading}
            </motion.h2>
          </AnimatePresence>
        </div>

        {/* Slider Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className="w-3.5 h-3.5 rounded-full transition-all duration-300 cursor-pointer shadow-sm"
              style={{ background: index === current ? "#ffcc2a" : "rgba(255,255,255,0.6)" }}
            />
          ))}
        </div>
      </motion.div>

      {/* Form */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="w-full mt-20 px-4 max-w-7xl mx-auto"
      >
        <div className="bg-gray-100 rounded-3xl shadow-md border-2 border-[#ffcc2a] p-8 max-w-5xl mx-auto">
          
          <h3 className="text-2xl font-bold text-[#3b5998] mb-6 text-center md:text-left">
            Request a Callback
          </h3>
          
          <form className="flex flex-col gap-4 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Full Name"
                className="bg-white px-5 py-3.5 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3b5998] w-full"
                required
              />
              <input
                type="tel"
                placeholder="Phone Number (+91...)"
                className="bg-white px-5 py-3.5 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3b5998] w-full"
                required
              />
            </div>

            <div className="relative w-full">
              <select
                className="bg-white px-5 py-3.5 border border-gray-300 rounded-xl text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#3b5998] w-full cursor-pointer appearance-none"
                required
                defaultValue=""
              >
                <option value="" disabled>Select an Essential Service...</option>
                <option value="packers-movers">Premium Packers and Movers</option>
                <option value="cleaning">Deep Cleaning Experts</option>
                <option value="pest-control">Reliable Pest Control</option>
              </select>
              <svg
                className="absolute right-5 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-500 pointer-events-none"
                fill="none" stroke="currentColor" viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>

            <button type="submit" className="bg-[#3b5998] text-white px-10 py-4 font-extrabold rounded-xl hover:bg-blue-800 transition w-full md:w-auto cursor-pointer shadow-md text-lg self-center md:self-start">
              Submit Request
            </button>
          </form>
        </div>
      </motion.div>

    </section>
  );
};

export default Hero;