import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// Assuming these images are in the same location as in the main component
import elionMedImg from '../../assets/images/pet-preforn-mold.png';
import petLabImg from '../../assets/images/PET-material-lab-equipment.jpg';
import dryingImg from '../../assets/images/Drying-dehumidification-system.jpg';

const ElionMedicalPage = () => {
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${elionMedImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">NETSTAL ELION MEDICAL</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Precision Injection Molding for Medical Applications
          </p>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-6 text-blue-800">ELION MEDICAL Overview</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The ELION MEDICAL injection molding machines are the most widely used new standard of complex production lines for syringes, petri dishes, microplates, and all other plastic parts in medical technology.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                With clamping forces ranging from 800 to 2800 kN, these specialized machines feature electrical clamping apparatus for incredibly quick cycle times and integral force measurement for maximum shot-to-shot consistency and stable part weight.
              </p>
                              <p className="text-gray-700 leading-relaxed">
                Designed specifically for clean room environments and medical manufacturing, the ELION MEDICAL delivers unparalleled precision, reliability, and efficiency for the most demanding medical applications.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src={elionMedImg} 
                alt="NETSTAL ELION MEDICAL Machine" 
                className="w-full h-auto rounded-lg shadow-xl"
              />
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
                src={petLabImg} 
                alt="Medical Lab Equipment" 
                className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
              />
              <h3 className="text-xl font-bold text-blue-700 mb-4">Clean Room Performance</h3>
              <ul className="space-y-3 w-full">
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Designed for ISO Class 7 and 8 clean rooms</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Minimal particle emission</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Easy to clean and maintain sterile conditions</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Special surface treatments for medical environments</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col items-center">
              <img 
                src={dryingImg} 
                alt="Advanced Processing System" 
                className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
              />
              <h3 className="text-xl font-bold text-blue-700 mb-4">Precision & Efficiency</h3>
              <ul className="space-y-3 w-full">
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Maximum energy efficiency through recovery of kinetic energy</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Exceptional system availability and dependability</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Reliable integration of handling requirements</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Validation-ready processes for medical requirements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Medical Applications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 text-5xl mb-4">
                <i className="fas fa-syringe"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Syringes & Needles</h3>
              <p className="text-gray-700">
                Precision manufacturing of syringes, needle hubs, and medical delivery devices.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 text-5xl mb-4">
                <i className="fas fa-flask"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Laboratory Consumables</h3>
              <p className="text-gray-700">
                Production of petri dishes, microplates, test tubes, and laboratory equipment.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 text-5xl mb-4">
                <i className="fas fa-heartbeat"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Medical Devices</h3>
              <p className="text-gray-700">
                Components for diagnostic equipment, implantable devices, and medical instruments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Elevate Your Medical Manufacturing</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Contact our team to learn how the NETSTAL ELION MEDICAL can transform your medical device production.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md font-medium shadow-md transition-all duration-300"
            >
              Request Consultation
            </Link>
            <Link
              to="/services/clean-room-solutions"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 px-8 py-3 rounded-md font-medium transition-all duration-300"
            >
              Clean Room Solutions
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default ElionMedicalPage;

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
                  <span>Clamping force: 800 - 2800 kN</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Electrical clamping apparatus</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Incredibly quick cycle times</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Clean room compatible design</span>
                </li>
              </ul>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Injection Unit</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>All-electric injection unit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Integral force measurement</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Maximum shot-to-shot consistency</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Stable part weight control</span>
                </li>
              </ul>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Control System</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>AXOS controller</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Freely programmable for maximum flexibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Intelligent Action integration</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>User-friendly interface</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>