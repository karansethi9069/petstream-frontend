import React, { useState, useEffect } from 'react';
import { ChevronDown, ChevronRight, Award, Zap, Minimize2, TrendingUp, Users, Shield } from 'lucide-react';
import ContactCTA from '../../components/home/ContactCTA';
// Mock Contact CTA Component
// Import actual images
import combiblockImg from '../../assets/images/know_more/1/7.png';
import starbloc from '../../assets/images/know_more/1/7.png';
import waterCombi from '../../assets/images/know_more/1/6.png';
import bigContainerImage from '../../assets/images/know_more/1/8.png';
import asepticImage from '../../assets/images/know_more/1/5.png';
import ultraCleanImage from '../../assets/images/know_more/1/4.png';
import csdImage from '../../assets/images/know_more/1/7.png';
import hotFillImage from '../../assets/images/know_more/1/2.png';
import nonBeverageImage from '../../assets/images/know_more/1/4.png';
// Use placeholder images - replace with your actual image imports

const Combiblock = () => {
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

    // Use a timeout to ensure elements are rendered
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
      id: 'starbloc',
      title: 'Starbloc',
      description: 'In line with the trend of equipment integration, convenience and intelligence, Newamstar launches Starbloc featuring leading technology and excellent performance through independent, collaborative and open innovation on the basis of years of research and development. Starbloc integrates blowing, labelling, filling and capping into a single system, which is the ideal solution for water, beverage, condiment and dairy product, with maximum capacity of 53000BPH for 200-2500ml PET bottle.',
      image: starbloc,
      features: [
       
      ],
      gradient: 'from-blue-500 to-purple-600'
    },
    {
      id: 'water',
      title: 'Bottled Water Combiblock',
      description: '',
      image: waterCombi,
      applicationScope: 'Mainly used for PET-bottle drinking water packaging',
      capacityRange: '12000 bottles/hour – 81000 bottles/hour (500 ml) for the 150ml – 1500ml bottle',
      features: [
     
      ],
      gradient: 'from-cyan-500 to-blue-600'
    },
    {
      id: 'big-container',
      title: 'Big-Container Combiblock',
      description: '',
      image: bigContainerImage,
      applicationScope: 'Mainly used for package of large-capacity PET bottles for drinking water',
      capacityRange: '1200 bottles/hour -16800 bottles/hour; for the bottle types of 3L-7L. 2400 bottles/hour – 6000 bottles/hour; for the bottle types of 7L-15.6L',
      features: [
       
      ],
      gradient: 'from-green-500 to-teal-600'
    },
    {
      id: 'aseptic',
      title: 'Aseptic Combiblock',
      description: 'Newamstar medium-and-high-speed PET bottle aseptic cold filling technology can be applied to a wide range of beverage products. Based on the aseptic cold filling technology, the Company has developed an Aseptic Blowing-Filling-Capping Combiblock that integrates solutions of blowing bottles, packaging materials sterilization, filling and capping. The equipment has perfect package hygiene conditions and complete sterilization process. The complete isolation area guarantees the sterility in the liquid packaging process, providing the perfect packaging service for highly-and-low-acid products.',
      image: asepticImage,
      applicationScope: 'Mainly used for packaging PET bottle tea, fruit juice, vegetable protein drinks, liquid milk, etc.',
      capacityRange: '12000 bottles/hour -48000 bottles/hour; for the bottle types of 150ml-1500ml',
      features: [
       
      ],
      gradient: 'from-red-500 to-pink-600'
    },
    {
      id: 'ultra-clean',
      title: 'Ultra-clean Combiblock',
      description: 'Ultra-Clean Blowing-Filing-Capping Combiblock integrates functions of blowing, disinfection, cleaning, filling and capping to ensure the health and safety of beverages. The technology can be divided into ultra-clean hot filling (82-92 °C), ultra-clean medium temperature filling (68-75 °C), ultra-clean normal temperature filling (16-35 °C), ultra-clean cold filling (4- 15°C).',
      image: ultraCleanImage,
      applicationScope: 'Mainly used for packaging PET bottles of juice, liquid milk, tea, energy drinks, etc.',
      capacityRange: '12000 bottles/hour -48000 bottles/hour; for the bottle types of 150ml-1500ml',
      features: [
       
      ],
      gradient: 'from-indigo-500 to-purple-600'
    },
    {
      id: 'hot-fill',
      title: 'Hot-fill Combiblock',
      description: '',
      image: hotFillImage,
      applicationScope: 'Mainly used for the packaging of PET bottles of fruit juice, tea, functional beverages, etc.',
      capacityRange: '9000 bottles/hour -48000 bottles/hour（500 ml）; for the bottle types of 150ml-2000ml',
      features: [
       
      ],
      gradient: 'from-yellow-500 to-orange-600'
    },
    {
      id: 'non-beverage',
      title: 'Non-beverage Combiblock',
      description: '',
      image: nonBeverageImage,
      applicationScope: 'Mainly used for the packaging of PET bottles of beer, edible oil, soy sauce and vinegar',
      capacityRange: '6000 bottles/hour -48000 bottles/hour（500 ml）; for the bottle types of 150ml-2500ml. 1200 bottles/hour -16800 bottles/hour（500 ml）; for the bottle types of 1800ml-6000ml',
      features: [
       
      ],
      gradient: 'from-emerald-500 to-green-600'
    }
  ];

  const benefits = [
    {
      icon: <Minimize2 className="w-8 h-8" />,
      title: 'Space Efficiency',
      description: 'Up to 30% smaller footprint compared to separate machines.',
      color: 'text-blue-600'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Energy Savings',
      description: 'Reduced energy consumption through integrated operations.',
      color: 'text-yellow-600'
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Higher Efficiency',
      description: 'Streamlined process flow with fewer transfer points.',
      color: 'text-green-600'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Improved Product Quality',
      description: 'Better control over entire packaging process for consistent quality.',
      color: 'text-purple-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Reduced Labor Costs',
      description: 'Integrated systems require fewer operators than separate machines.',
      color: 'text-indigo-600'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Enhanced Safety',
      description: 'Integrated safety systems and reduced manual handling.',
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
                    Combiblock Solutions
                  </span>
                </h1>
                {/* <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed">
                  Innovative and efficient integrated packaging solutions that maximize efficiency while minimizing footprint and operational costs.
                </p> */}
              </div>
              
              {/* <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  className="group inline-flex items-center justify-center bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Request a Quote
                  <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="inline-flex items-center justify-center border-2 border-white/30 hover:border-white text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 hover:bg-white/10">
                  Learn More
                </button>
              </div> */}
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <img 
                  src={combiblockImg} 
                  alt="Newamstar Combiblock" 
                  className="relative rounded-2xl shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      {/* <section 
        id="section-intro" 
        className={`py-20 transition-all duration-1000 ${
          isVisible['section-intro'] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-gray-800">Advanced Combiblock Systems</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              Newamstar's Combiblock systems are integrated solutions that combine multiple packaging processes into a single, efficient unit. These systems are designed to maximize production efficiency while minimizing footprint and operational costs. Our combiblock solutions are ideal for beverage, dairy, and food processing facilities looking to streamline their packaging operations.
            </p>
          </div>
        </div>
      </section> */}

      {/* Products Section */}
      <section id="section-products" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6 text-gray-800">Our Combiblock Product Line</h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive range of combiblock solutions, each engineered for specific applications and production requirements.
            </p>
          </div> */}
          
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
                  
                  {product.applicationScope && (
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-800 mb-2">Application Scope:</h5>
                      <p className="text-gray-600 text-sm mb-3">{product.applicationScope}</p>
                    </div>
                  )}
                  
                  {product.capacityRange && (
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-800 mb-2">Capacity Range:</h5>
                      <p className="text-gray-600 text-sm mb-3">{product.capacityRange}</p>
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
                  
                  {/* <button 
                    onClick={() => handleLearnMoreClick(product.id)}
                    className="mt-6 inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors self-start"
                  >
                    {expandedProduct === product.id ? 'Show Less' : ''}
                    <ChevronDown className={`ml-2 w-5 h-5 transition-transform ${expandedProduct === product.id ? 'rotate-180' : ''}`} />
                  </button> */}
                
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
              Watch our combiblock solutions working in real production environments
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
     


      <ContactCTA />
    </>
  );
};

export default Combiblock;