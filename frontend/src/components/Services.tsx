import { useRef } from 'react';
import LottieComponent, { type LottieRefCurrentProps } from 'lottie-react';
import { motion } from 'framer-motion';

const Lottie = (LottieComponent as any).default || LottieComponent;

import packersAnim from '../assets/packers.json';
import cleaningAnim from '../assets/cleaning.json';
import pestControlAnim from '../assets/pestcontrol.json';

const Services = () => {
  const servicesData = [
    {
      title: "Packers & Movers",
      description: "Complete relocation services. We safely pack, transport, and unpack your belongings with absolute care.",
      animation: packersAnim,
      scaleClass: "scale-100" 
    },
    {
      title: "Deep Cleaning",
      description: "Professional cleaning services to make your new or old home spotless, sanitized, and completely fresh.",
      animation: cleaningAnim,
      scaleClass: "scale-75" 
    },
    {
      title: "Pest Control",
      description: "Effective and safe pest management solutions to keep your space hygienic, comfortable, and bug-free.",
      animation: pestControlAnim,
      scaleClass: "scale-125 translate-y-10" 
    }
  ];

  return (
    <section className="pt-10 py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Unified vertical slide for the header (Matched to Hero) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-black text-[#3b5998] mb-4">
            Our Premium Services
          </h2>
          <div className="w-24 h-1 bg-[#f6c844] mx-auto rounded"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {servicesData.map((service, index) => (
            <ServiceCard 
              key={index}
              index={index}
              title={service.title} 
              description={service.description} 
              animationData={service.animation} 
              scaleClass={service.scaleClass}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

// Services Cards
const ServiceCard = ({ title, description, animationData, scaleClass, index }: { title: string, description: string, animationData: unknown, scaleClass: string, index: number }) => {
  const lottieRef = useRef<LottieRefCurrentProps>(null);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ 
        duration: 0.8, 
        ease: "easeOut", 
        delay: index * 0.2 
      }}
      className="bg-gray-50 rounded-xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-[#f6c844] hover:-translate-y-2 group"
      onMouseEnter={() => lottieRef.current?.play()}
      onMouseLeave={() => lottieRef.current?.stop()}
    >
      
      <div className={`w-32 h-32 mx-auto mb-6 transition-transform ${scaleClass}`}>
        <Lottie 
          lottieRef={lottieRef}
          animationData={animationData} 
          autoplay={false} 
          loop={true} 
        />
      </div>
      
      <h3 className="text-xl font-bold text-[#3b5998] mb-3 group-hover:text-gray-900 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-sm">
        {description}
      </p>
    </motion.div>
  );
};

export default Services;