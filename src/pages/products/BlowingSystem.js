import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Award, Zap, Minimize2, TrendingUp, Users, Shield, Settings, Gauge, Timer } from 'lucide-react';

// Import actual images
import blowingSystemImg from '../../assets/images/n-bowler.jpg';
import bottleBlowerImage from '../../assets/images/Bottle-Blower.jpg';
import bigContainerBlowerImage from '../../assets/images/Big-container-Blower.jpg';
import gallonBlowerImage from '../../assets/images/Gallon-Blower.jpg';
import ContactCTA from '../../components/home/ContactCTA';


const BlowingSystem = () => {
  useEffect(() => {
    // Method 1: Immediate scroll to top
    window.scrollTo(0, 0);
    
    // Method 2: Smooth scroll after a brief delay
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
    }, 100);
    
    // Method 3: Using document body scroll
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);
  
  const [expandedProduct, setExpandedProduct] = useState(null);
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const timer = setTimeout(() => {
      document.querySelectorAll('[id^="section-"]').forEach((el) => {
        if (el) observer.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  const products = [
    {
      id: 'bottle-blower',
      title: 'Bottle Blower',
      description: 'Through the configuration of different molds, different types of bottle blowing can be realized to meet the requirements of different production capacities. It can be applied to the fields of PET bottle for water, fruit juice, gas-containing beverages, dairy products, beer, soy sauce, oil and daily used chemicals product.',
      image: bottleBlowerImage,
      capacityRange: '12000-81000 bottles/hour (500 ml)',
      features: [
   
      ],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 'big-container-blower',
      title: 'Big-container Blower',
      description: 'Through the configuration of different molds, different types of bottle blowing can be realized to meet the requirements of different production capacities. It can be applied to the PET bottled water, edible oil.',
      image: bigContainerBlowerImage,
      applicableBottleType: '3-7 liters, production capacity at 1200-16800 bottles/hour',
      features: [
   
      ],
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 'gallon-blower',
      title: 'Gallon Blower',
      description: 'Through the configuration of different molds, different types of bottle blowing can be realized to meet the requirements of different production capacities. It can be applied to the PET bottled water, edible oil.',
      image: gallonBlowerImage,
      applicableBottleType: '5-15.6 liters, production capacity at 2400-6000 bottles/hour',
      features: [

      ],
      gradient: 'from-orange-500 to-red-600'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Energy Efficiency',
      description: 'Advanced heating technology reduces energy consumption by up to 35% compared to conventional systems.',
      color: 'text-yellow-600'
    },
    {
      icon: <Gauge className="w-8 h-8" />,
      title: 'Precise Temperature Control',
      description: 'Zone-specific heating profiles ensure optimal material distribution and bottle quality.',
      color: 'text-blue-600'
    },
    {
      icon: <Timer className="w-8 h-8" />,
      title: 'Fast Mold Changeover',
      description: 'Quick-change mold systems reduce downtime when switching between different bottle formats.',
      color: 'text-green-600'
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: 'Advanced Process Control',
      description: 'Sophisticated control systems with user-friendly interfaces for precise adjustment of all blowing parameters.',
      color: 'text-purple-600'
    },
    {
      icon: <Minimize2 className="w-8 h-8" />,
      title: 'Lightweight Bottle Capability',
      description: 'Specially designed to handle ultra-lightweight bottles for sustainable packaging solutions.',
      color: 'text-indigo-600'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Integration Ready',
      description: 'Designed for seamless integration with filling systems, whether as standalone equipment or as part of a combiblock solution.',
      color: 'text-red-600'
    }
  ];

  const handleLearnMoreClick = (productId) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    Blowing Systems
                  </span>
                </h1>
             
              </div>
        
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <img 
                  src={blowingSystemImg} 
                  alt="Newamstar Blowing System" 
                  className="relative rounded-2xl shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}


      {/* Products Section */}
      <section id="section-products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
    
          
          <div className="grid gap-8">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className={`bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
               
                  
                  <h4 className="text-3xl font-bold mb-4 text-gray-800">{product.title}</h4>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    {product.description}
                  </p>
                  
                  {product.capacityRange && (
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-800 mb-2">Capacity Range:</h5>
                      <p className="text-gray-600 text-sm mb-3">{product.capacityRange}</p>
                    </div>
                  )}
                  
                  {product.applicableBottleType && (
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-800 mb-2">Applicable Bottle Type:</h5>
                      <p className="text-gray-600 text-sm mb-3">{product.applicableBottleType}</p>
                    </div>
                  )}
                  
                  <div className="space-y-3">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
           
                  
                  {expandedProduct === product.id && (
                    <div className="mt-6 p-6 bg-gray-50 rounded-xl transition-all duration-300">
                      <h5 className="font-semibold text-gray-800 mb-2">Technical Specifications</h5>
                      <p className="text-gray-600 text-sm">
                        Contact our technical team for detailed specifications, customization options, and integration requirements for your specific production needs.
                      </p>
                    </div>
                  )}
                </div>
                
                <div className="lg:w-1/2 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-10"></div>
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


  

      {/* Videos Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6">See Our Solutions in Action</h3>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Watch our blowing systems working in real production environments
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="250" 
                  src="https://www.youtube.com/embed/NPysSxHISgM" 
                  title="Newamstar Integrated Solution Shows Excellence." 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full rounded-t-2xl"
                ></iframe>
              </div>
              <div className="p-4">
                <h4 className="text-gray-800 font-semibold mb-2">Newamstar Integrated Solution</h4>
                <p className="text-gray-600 text-sm">Shows Excellence in packaging technology</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="250" 
                  src="https://www.youtube.com/embed/URlfh8PX03M" 
                  title="Carbonated Drinks Filling And Packaging Combibloc Line #Newamstar #Filling #Packaging​ #Technology" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full rounded-t-2xl"
                ></iframe>
              </div>
              <div className="p-4">
                <h4 className="text-gray-800 font-semibold mb-2">Carbonated Drinks Filling</h4>
                <p className="text-gray-600 text-sm">Packaging Combiblock Line Technology</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="250" 
                  src="https://www.youtube.com/embed/W8pmReuQY_k" 
                  title="Newamstar Ultra-Clean Blowing-Filling-Capping Combiblock #Packaging #ProductionLine #Combiblock" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full rounded-t-2xl"
                ></iframe>
              </div>
              <div className="p-4">
                <h4 className="text-gray-800 font-semibold mb-2">Ultra-Clean Combiblock</h4>
                <p className="text-gray-600 text-sm">Blowing-Filling-Capping Production Line</p>
              </div>
            </div>
          </div>
        </div>
      </section>

    

      {/* CTA Section */}
      <ContactCTA />
    </>
  );
};

export default BlowingSystem;