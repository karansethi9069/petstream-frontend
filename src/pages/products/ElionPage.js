import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// Assuming these images are in the same location as in the main component
import elionImg from '../../assets/images/Pet-beverage-filling-line.png';
import dryingImg from '../../assets/images/Drying-dehumidification-system.jpg';
import capsImg from '../../assets/images/caps-closures-mold.jpg';

const ElionPage = () => {
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
  return (
    <>
      {/* Hero Banner Section */}
      <section
        className="relative py-32 bg-gradient-to-r from-blue-900 to-blue-700 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${elionImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">NETSTAL ELION</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Powerful, fast, and precise injection molding machine
          </p>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-6 text-blue-800">ELION Overview</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The NETSTAL ELION series represents the pinnacle of injection molding technology, offering exceptional performance for a wide range of applications. With clamping forces ranging from 800 to 4200 kN, the ELION delivers unmatched precision and reliability.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Engineered with cutting-edge technology, the ELION series features specialized electronic clamping devices and high-performance injection units that are electric or hybrid. This combination ensures maximum efficiency, absolute accuracy, and outstanding reliability.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The ELION's modular system design allows for customization to meet specific production requirements, making it versatile for various manufacturing needs.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src={elionImg} 
                alt="NETSTAL ELION Machine" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Technical Specifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Clamping Unit</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Clamping force: 800 - 4200 kN</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Specialized electronic clamping device</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>High-speed operation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Precision mold protection</span>
                </li>
              </ul>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Injection Unit</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>High-performance electric or hybrid injection units</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Adaptive drive systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Precision material control</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Multiple screw and barrel options</span>
                </li>
              </ul>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Control System</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Advanced aXos controller</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Intuitive user interface</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Comprehensive process monitoring</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Integrated quality control</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features and Benefits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Key Benefits</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center">
              <img 
                src={dryingImg} 
                alt="Drying and Dehumidification System" 
                className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
              />
              <h3 className="text-xl font-bold text-blue-700 mb-4">Efficiency & Performance</h3>
              <ul className="space-y-3 w-full">
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Maximum energy effectiveness through adaptive drive systems</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Short cycle times for increased productivity</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Minimal maintenance requirements</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Optimized for reduced operation costs</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col items-center">
              <img 
                src={capsImg} 
                alt="Caps and Closures Mold" 
                className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
              />
              <h3 className="text-xl font-bold text-blue-700 mb-4">Precision & Reliability</h3>
              <ul className="space-y-3 w-full">
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Absolute accuracy in part production</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Exceptional shot-to-shot consistency</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Industry-leading uptime and reliability</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Modular design for future expansion</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Applications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 text-5xl mb-4">
                <i className="fas fa-prescription-bottle"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Closures & Caps</h3>
              <p className="text-gray-700">
                High-speed production of precision caps and closures for various industries.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 text-5xl mb-4">
                <i className="fas fa-box"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Thin-Wall Packaging</h3>
              <p className="text-gray-700">
                Ideal for thin-wall containers and packaging with complex geometries.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 text-5xl mb-4">
                <i className="fas fa-cogs"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Technical Components</h3>
              <p className="text-gray-700">
                Perfect for technical parts requiring high precision and repeatability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Boost Your Manufacturing Performance</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Contact our team to discover how the NETSTAL ELION can elevate your production capabilities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md font-medium shadow-md transition-all duration-300"
            >
              Get a Custom Quote
            </Link>
            <Link
              to="/services/training"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 px-8 py-3 rounded-md font-medium transition-all duration-300"
            >
              Training Programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ElionPage;