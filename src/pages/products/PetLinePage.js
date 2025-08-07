import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// Assuming these images are in the same location as in the main component
import petLineImg from '../../assets/images/Injection-molding-machine.png';
import petPreformImg from '../../assets/images/pet-preforn-mold.png';
import petLabImg from '../../assets/images/PET-material-lab-equipment.jpg';

const PetLinePage = () => {
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${petLineImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">NETSTAL PET-LINE</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            High-performance PET preform production with maximum efficiency
          </p>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-6 text-blue-800">PET-LINE Overview</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                With full compatibility with existing peripheral supply and other molding solutions, the PET-LINE makes switching to NETSTAL a breeze. The brand new PET-LINE also makes an impressive impact on its extremely-robust, highest-energy efficiency, optimized processing of PET and reliability in full continuous operation.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The NETSTAL PET-LINE is designed for high-volume production of PET preforms with exceptional quality and consistency. It features advanced technology that ensures optimal material processing and superior energy efficiency.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Our PET-LINE machines offer clamping forces ranging from 3000 kN to 5000 kN, supporting molds with up to 144 cavities for maximum production output.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src={petLineImg} 
                alt="NETSTAL PET-LINE Machine" 
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
                  <span>Clamping force: 3000 kN, 4000 kN, 5000 kN</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Electric clamping unit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Lock-to-lock time: 1.9 seconds</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Up to 144 cavities</span>
                </li>
              </ul>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Injection Unit</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Energy-efficient, two-stage injection unit</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>New PETX screw for optimal processing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Handles virgin PET, rPET and additives</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Precise shot-to-shot consistency</span>
                </li>
              </ul>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Control & Operation</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>aXos controller of the latest generation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Innovative operating concept</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>SMART OPERATION for easier, safer and faster commissioning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Intuitive user interface</span>
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
                src={petPreformImg} 
                alt="PET Preform Mold" 
                className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
              />
              <h3 className="text-xl font-bold text-blue-700 mb-4">Superior Performance</h3>
              <ul className="space-y-3 w-full">
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Lateral post-mold cooling unit with up to 4 post-cooling stations</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Fastest cycle times in the industry</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Exceptional part quality and consistency</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Advanced cooling for optimal preform quality</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col items-center">
              <img 
                src={petLabImg} 
                alt="PET Material Lab Equipment" 
                className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
              />
              <h3 className="text-xl font-bold text-blue-700 mb-4">Energy Efficiency</h3>
              <ul className="space-y-3 w-full">
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Lowest energy consumption in the market</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Recuperation of kinetic energy</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Reduced operational costs</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Environmentally responsible manufacturing</span>
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
                <i className="fas fa-wine-bottle"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Beverage Industry</h3>
              <p className="text-gray-700">
                Ideal for water, carbonated soft drinks, juices, and other beverage containers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 text-5xl mb-4">
                <i className="fas fa-pump-soap"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Consumer Goods</h3>
              <p className="text-gray-700">
                Perfect for household products, personal care items, and food packaging.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 text-5xl mb-4">
                <i className="fas fa-recycle"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Sustainable Packaging</h3>
              <p className="text-gray-700">
                Compatible with rPET and bio-based materials for eco-friendly solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Enhance Your PET Production?</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Contact our team to learn more about the NETSTAL PET-LINE and how it can revolutionize your manufacturing process.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md font-medium shadow-md transition-all duration-300"
            >
              Request a Quote
            </Link>
            <Link
              to="/services/technical-support"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 px-8 py-3 rounded-md font-medium transition-all duration-300"
            >
              Technical Support
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default PetLinePage;