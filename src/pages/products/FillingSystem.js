import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

// Import actual images
import fillingSystemImg from '../../assets/images/n-filling.jpg';
import asepticFillingImage from '../../assets/images/Aseptic-Filling.jpg';
import ultraCleanImage from '../../assets/images/Ultra-clean.jpg';
import hotFillingImage from '../../assets/images/hot-filling.jpg';
import waterFillingImage from '../../assets/images/water-filling.jpg';
import gallonWaterFillingImage from '../../assets/images/Gallon-Water-Filling.jpg';
import csdFillingImage from '../../assets/images/csd-filling.jpg';
import liquorFillingImage from '../../assets/images/liquir-filling.jpg';
import condimentFillingImage from '../../assets/images/Condiment-Filling.jpg';
import edibleOilImage from '../../assets/images/ediable-oil.jpg';
import dailyChemicalImage from '../../assets/images/dailychecimical.jpg';
import ContactCTA from '../../components/home/ContactCTA';

const FillingSystem = () => {
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
  
  const products = [
    {
      id: 'aseptic-filling',
      title: 'Aseptic Filling',
      description: 'Newamstar has a mature medium and high-speed PET bottle aseptic filling technology that can be applied to a wide range of products. For high-acid and low-acid products, the sterilization efficiency of the system can reach 5D or 6D. Sterilization technical process can be divided into wet sterilization, dry sterilization and electron beam sterilization. This process is used to sterilize packaging materials such as bottles and caps, as well as filling environment. The aseptic zone is realized by an isolator, and the sanitary area inside the machine with different grades is maintained by positive pressure.',
      image: asepticFillingImage,
      applicableProducts: 'Juices, tea drinks, functional drinks, vegetable protein drinks, liquid milk, etc.',
      suitableContainer: 'PET bottles of various shapes and capacities',
      features: []
    },
    {
      id: 'ultra-clean-filling',
      title: 'Ultra-clean Filling',
      description: 'The ultra-clean filling process needs to meet the following three requirements: 1) Filled materials should meet the shelf-life safety requirements; 2) The interface between packaging materials and materials must be sterilized; 3) The environment of the filling and sealing area is sterilized and kept in a clean environment. Ultra-clean filling equipment uses ultra-clean filling technology. The sterilization efficiency of the interface between the packaging material and the material must be SE ≥ 3. Filling and sealing areas should meet the requirements of Class N6 for clean rooms as specified in GB 50073-2013 "Code for Design of Clean Room".',
      image: ultraCleanImage,
      applicableProducts: 'Juices, tea drinks, functional drinks, milk drinks, etc.',
      suitableContainer: 'PET bottles of various shapes and capacities',
      fillingTemperature: 'Hot filling (82-92 °C), ultra-clean medium temperature filling (68-75 °C), ultra-clean normal temperature filling (16-35 °C), ultra-clean cold filling (4- 15°C)',
      fillingModes: 'Mechanical filling, flow-controlled filling, level-controlled filling, weighing filling',
      productionCapacity: '12000 bottles/hour – 72000 bottles/hour',
      features: []
    },
    {
      id: 'hot-filling',
      title: 'Hot Filling',
      description: 'Our Hot Filling systems are designed for products that require thermal processing for preservation.',
      image: hotFillingImage,
      applicableProducts: 'Juices, tea drinks, functional drinks, milk drinks, etc.',
      suitableContainer: 'PET bottles of various shapes and capacities',
      fillingModes: 'Contact filling or non-contact filling',
      productionCapacity: '5000 bottles/hour – 60000 bottles/hour',
      features: []
    },
    {
      id: 'water-filling',
      title: 'Water Filling',
      description: 'Specialized for still water applications, our Water Filling systems offer high-speed operation with exceptional accuracy and hygiene.',
      image: waterFillingImage,
      applicableProducts: 'Pure water, mineral water, spring water, etc.',
      suitableContainer: 'PET bottles of various shapes and capacities',
      fillingModes: 'Mechanical valve filling, flow meter filling, weighing filling or laser positioning filling',
      productionCapacity: '5000 bottles/hour – 81000 bottles/hour',
      features: []
    },
    {
      id: 'gallon-water-filling',
      title: 'Gallon-Water Filling',
      description: 'Specialized for large format containers, our Gallon-Water Filling systems handle gallon bottles with high efficiency and reliability.',
      image: gallonWaterFillingImage,
      applicableProducts: 'Pure water, mineral water, etc.',
      suitableContainer: '5 Gallons (18.9L)',
      fillingModes: 'Mechanical valve filling, flow meter filling or laser positioning filling',
      productionCapacity: '600 barrels/hour – 3000 barrels/hour',
      features: []
    },
    {
      id: 'csd-filling',
      title: 'CSD Filling',
      description: 'For carbonated soft drinks, our CSD Filling systems maintain precise carbonation levels while ensuring high-speed production.',
      image: csdFillingImage,
      applicableProducts: 'Cola, soft drinks, gas soda, etc.',
      suitableContainer: 'PET bottles of various shapes and capacities',
      fillingModes: 'Mechanical valve filling or electronic valve filling',
      productionCapacity: '5000 bottles/hour – 60000 bottles/hour',
      features: []
    },
    {
      id: 'liquor-filling',
      title: 'Liquor Filling',
      description: 'Specialized systems for alcoholic beverages, with features designed to handle spirits, wine, and beer with precision.',
      image: liquorFillingImage,
      applicableProducts: 'PET-bottle beers',
      suitableContainer: 'PET bottles of various shapes and capacities',
      fillingModes: 'Mechanical valve filling or electronic valve filling',
      productionCapacity: '5000 bottles/hour – 48000 bottles/hour',
      features: []
    },
    {
      id: 'condiment-filling',
      title: 'Condiment Filling',
      description: 'Newamstar provides packaging solutions for edible oil, soy sauce, vinegar, and other liquid seasonings with various packing forms, such as plastic containers (PET and HDPE), glass containers, and metal containers. We also provides multiple filling solutions according to products, filling volume, and production capacity to meet your production and packaging needs.',
      image: condimentFillingImage,
      applicableProducts: 'Cooking oil, soy sauce, vinegar and other liquid seasonings',
      suitableContainer: 'Plastic containers (PET and HDPE), glass containers or metal containers',
      fillingModes: 'Mechanical valve filling or electronic valve filling',
      productionCapacity: '5000 bottles/hour – 48000 bottles/hour',
      features: []
    },
    {
      id: 'edible-oil-filling',
      title: 'Edible Oil Filling',
      description: 'Systems optimized for the unique challenges of edible oils, with features to prevent oxidation and contamination.',
      image: edibleOilImage,
      applicableProducts: 'Edible Oil',
      suitableContainer: 'Plastic containers (PET and HDPE), glass containers or metal containers',
      fillingModes: 'Mechanical valve filling or electronic valve filling',
      productionCapacity: '5000 bottles/hour – 36000 bottles/hour',
      features: []
    },
    {
      id: 'daily-chemical-filling',
      title: 'Daily Chemical Product Filling',
      description: 'Specialized for personal care and home care products, with appropriate materials and sealing systems.',
      image: dailyChemicalImage,
      applicableProducts: 'Liquid detergent, liquid soap and other daily chemicals',
      suitableContainer: 'Plastic containers (PET and HDPE), glass containers or metal containers',
      fillingModes: 'Mechanical valve filling or electronic valve filling',
      productionCapacity: '5000 bottles/hour – 36000 bottles/hour',
      features: []
    }
  ];

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
                    Filling Systems
                  </span>
                </h1>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <img 
                  src={fillingSystemImg} 
                  alt="Newamstar Filling System" 
                  className="relative rounded-2xl shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
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
                  
                  {product.applicableProducts && (
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-800 mb-2">Applicable Products:</h5>
                      <p className="text-gray-600 text-sm mb-3">{product.applicableProducts}</p>
                    </div>
                  )}
                  
                  {product.suitableContainer && (
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-800 mb-2">Suitable Container:</h5>
                      <p className="text-gray-600 text-sm mb-3">{product.suitableContainer}</p>
                    </div>
                  )}
                  
                  {product.fillingTemperature && (
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-800 mb-2">Filling Temperature:</h5>
                      <p className="text-gray-600 text-sm mb-3">{product.fillingTemperature}</p>
                    </div>
                  )}
                  
                  {product.fillingModes && (
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-800 mb-2">Filling Modes:</h5>
                      <p className="text-gray-600 text-sm mb-3">{product.fillingModes}</p>
                    </div>
                  )}
                  
                  {product.productionCapacity && (
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-800 mb-2">Production Capacity:</h5>
                      <p className="text-gray-600 text-sm mb-3">{product.productionCapacity}</p>
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
              Watch our filling systems working in real production environments
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="250" 
                  src="https://www.youtube.com/embed/25UtkOxzt7o?si=5b8A-gjb4fSUpYn5" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full rounded-t-2xl"
                ></iframe>
              </div>
              <div className="p-4">
                <h4 className="text-gray-800 font-semibold mb-2">Filling Technology Solution</h4>
                <p className="text-gray-600 text-sm">Advanced filling systems technology</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="250" 
                  src="https://www.youtube.com/embed/SQt4XVPRl_g?si=jNlOgLdOYH32er5Q" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full rounded-t-2xl"
                ></iframe>
              </div>
              <div className="p-4">
                <h4 className="text-gray-800 font-semibold mb-2">Production Line Technology</h4>
                <p className="text-gray-600 text-sm">Integrated filling production lines</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="250" 
                  src="https://www.youtube.com/embed/sOvzF3lcdT0?si=pQqyqopkf3ENvO3B" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full rounded-t-2xl"
                ></iframe>
              </div>
              <div className="p-4">
                <h4 className="text-gray-800 font-semibold mb-2">Advanced Filling Systems</h4>
                <p className="text-gray-600 text-sm">High-performance filling solutions</p>
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

export default FillingSystem;