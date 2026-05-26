import { useState, useEffect } from "react";
import LottieComponent from "lottie-react";
const Lottie = (LottieComponent as any).default || LottieComponent;
import heroAnim from "./assets/hero.json"; 

import Navbar from "./components/Navbar"; 
import Hero from "./components/Hero";
import Services from "./components/Services"; 
import Footer from "./components/Footer"; 

function App() {
  const [isLoading, setIsLoading] = useState(true);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); 
    return () => clearTimeout(timer);
  }, []);

  // Loading Screen
  if (isLoading) {
    return (
      <div className="h-screen w-screen flex items-center justify-center bg-white z-50 fixed inset-0">
        <div className="w-24 h-24 md:w-32 md:h-32">
          <Lottie animationData={heroAnim} loop={true} />
        </div>
      </div>
    );
  }

  // Website
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      {/* EVERYTHING STACKED IN ORDER */}
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </div>
  );
}

export default App;