import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import img1 from '../../assets/images/Injection-molding-machine.png';
import img2 from '../../assets/images/Pet-beverage-filling-line.png';
import img3 from '../../assets/images/pet-preforn-mold.png';
import img4 from '../../assets/images/PET-material-lab-equipment.jpg';
import img5 from '../../assets/images/IMH.jpg';
import img6 from '../../assets/images/caps-closures-mold.jpg';
import img7 from '../../assets/images/Medical-pharma-paxkaging-mold.jpg';
import img8 from '../../assets/images/Packaging&Systems.jpg';

const servicesData = [
  { id: 1, title: "Injection Molding Machine", slug: "injection-molding", image: img1, isFeatured: true, displayOrder: 1 },
  { id: 2, title: "Beverage Filling Line", slug: "beverage-filling", image: img2, isFeatured: true, displayOrder: 2 },
  { id: 3, title: "PET Preform Molds", slug: "pet-preform", image: img3, isFeatured: true, displayOrder: 3 },
  { id: 4, title: "Lab Equipment", slug: "lab-equipment", image: img4, isFeatured: true, displayOrder: 4 },
  // { id: 5, title: "Exclusive applications", slug: "integrated-plastics", image: img5, isFeatured: true, displayOrder: 5 },
  { id: 5, title: "Exclusive applications", slug: "integrated-plastics", image: img5, isFeatured: true, displayOrder: 5 },
  { id: 6, title: "Caps & Closures Mold", slug: "caps-mold", image: img6, isFeatured: true, displayOrder: 6 },
  { id: 7, title: "Packaging Mold", slug: "packaging-mold", image: img7, isFeatured: true, displayOrder: 7 },
  { id: 8, title: "Packaging & Systems", slug: "packaging-systems", image: img8, isFeatured: true, displayOrder: 8 }
];

const ImageCard = ({ service, index, isVisible }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`relative overflow-hidden rounded-xl bg-white shadow-md transition-all duration-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
      style={{
        transitionDelay: `${index * 120}ms`,
        transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
        boxShadow: isHovered ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' : '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Dynamically link to the correct product page */}
      <a href={`/products/${service.slug}`} className="block h-full">
        <div className="relative overflow-hidden">
          <div
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-600/60 to-indigo-800/60 z-10 transition-all duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              backgroundSize: isHovered ? '200% 200%' : '100% 100%',
              backgroundPosition: isHovered ? 'right bottom' : 'left top'
            }}
          >
            <div className="text-white px-6 py-3 border-2 border-white rounded-lg transform transition-all duration-300"
                 style={{
                   opacity: isHovered ? 1 : 0,
                   transform: isHovered ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.9)',
                   boxShadow: isHovered ? '0 0 20px rgba(255,255,255,0.3)' : 'none'
                 }}>
              View Details
            </div>
          </div>

          <div className="h-52 lg:h-48 overflow-hidden p-4 bg-white flex items-center justify-center">
            <img
              src={service.image}
              alt={service.title}
              className="max-h-full max-w-full object-contain transition-all duration-500"
              style={{
                transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                filter: `drop-shadow(0 4px 6px rgba(0, 0, 0, ${isHovered ? '0.2' : '0'}))`
              }}
            />
          </div>
        </div>

        <div className="p-4 border-t border-gray-100 bg-white relative">
          <h3 className={`font-medium text-lg transition-colors duration-300 text-center ${isHovered ? 'text-blue-600' : 'text-gray-800'}`}>
            {service.title}
          </h3>

          <div
            className="absolute bottom-0 left-1/2 h-0.5 bg-blue-500 transition-all duration-300 rounded-full"
            style={{
              width: isHovered ? '80%' : '0%',
              transform: 'translateX(-50%)',
              opacity: isHovered ? 1 : 0
            }}
          ></div>
        </div>
      </a>
    </div>
  );
};



const ProductImageShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [filter, setFilter] = useState('all');
  
  // Filter and sort services
  const featuredServices = servicesData
    .filter(service => service.isFeatured)
    .sort((a, b) => a.displayOrder - b.displayOrder);

  useEffect(() => {
    // Set visibility after component mounts for animations
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        {/* Enhanced Header Section with Animation */}
        <div className="text-center mb-16">
          <div className={`relative inline-block transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <span className="absolute -left-8 -top-8 w-16 h-16 rounded-full bg-blue-100 opacity-60 blur-xl"></span>
            <span className="absolute -right-8 -bottom-8 w-16 h-16 rounded-full bg-indigo-100 opacity-60 blur-xl"></span>
           <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Explore Our Products And Services</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-6"></div>
        </motion.div>
          </div>
          
          {/* <p 
            className={`text-gray-600 max-w-2xl mx-auto mt-6 transition-all duration-700 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            Discover our comprehensive range of solutions designed to meet your needs and exceed your expectations.
          </p> */}
        </div>

    
        {/* Grid Layout with Hover Effects */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredServices.map((service, index) => (
            <ImageCard 
              key={service.id} 
              service={service} 
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>

        {/* CTA Button with Enhanced Animation */}
        <div 
          className="text-center"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
            transition: 'all 0.5s ease-out',
            transitionDelay: '0.9s'
          }}
        >
          <a 
            href="#view-all" 
            className="relative inline-block px-8 py-3 overflow-hidden group rounded-full"
          >
            {/* Button background with gradient effect */}
            {/* <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:bg-gradient-to-l"></span> */}
            
            {/* Button text */}
            {/* <span className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-semibold">
              <span>View All Services</span>
              <span className="ml-2 transform transition-transform duration-300 group-hover:translate-x-1">→</span>
            </span> */}
            
            {/* Light effect overlay */}
            <span className="absolute top-0 left-0 w-full h-full bg-white opacity-0 transition-opacity duration-300 group-hover:opacity-10"></span>
            
            {/* Glow effect */}
            <span className="absolute -inset-px rounded-full opacity-0 group-hover:opacity-20 group-hover:blur transition-all duration-300 bg-white"></span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductImageShowcase;
