import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// Assuming these images are in the same location as in the main component
import eliosImg from '../../assets/images/PET-material-lab-equipment.jpg';
import dryingImg from '../../assets/images/Drying-dehumidification-system.jpg';
import capsImg from '../../assets/images/caps-closures-mold.jpg';
import petLineImg from '../../assets/images/Injection-molding-machine.png';

const EliosPage = () => {
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
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${eliosImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in">NETSTAL ELIOS</h1>
          <p className="text-xl max-w-3xl mx-auto opacity-90">
            Setting standards in the premium segment for high performance injection molding
          </p>
        </div>
      </section>

      {/* Product Overview Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-8 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-6 text-blue-800">ELIOS Overview</h2>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Setting standards in the premium segment – Discover the ELIOS. Perfect results now available for high performance injection molding with its cutting-edge drive technology.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                The NETSTAL ELIOS series represents the pinnacle of large-scale injection molding technology, offering clamping forces from 6500 to 10000 kN. Designed for demanding applications requiring exceptional precision and power, the ELIOS delivers unmatched performance and reliability.
              </p>
              <p className="text-gray-700 leading-relaxed">
                With advanced drive systems and state-of-the-art control technology, the ELIOS series provides maximum energy efficiency while maintaining absolute accuracy for the most challenging molding applications.
              </p>
            </div>
            <div className="md:w-1/2">
              <img 
                src={eliosImg} 
                alt="NETSTAL ELIOS Machine" 
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
                  <span>Clamping force: 6500 - 10000 kN</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Hydraulic clamping system with optimized kinematics</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Reinforced platen design for reduced deflection</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>High-precision mold movement</span>
                </li>
              </ul>
            </div>
            
            {/* Card 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Injection Unit</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Advanced hybrid injection system</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Cutting-edge drive technology</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Multiple screw configurations available</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>High injection speeds and pressures</span>
                </li>
              </ul>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold text-blue-700 mb-4">Control System</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>aXos controller with intuitive interface</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Advanced process monitoring and control</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Integrated quality assurance systems</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">•</span>
                  <span>Real-time production data analytics</span>
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
                alt="Advanced Processing System" 
                className="w-full h-64 object-cover rounded-lg shadow-md mb-6"
              />
              <h3 className="text-xl font-bold text-blue-700 mb-4">Performance & Efficiency</h3>
              <ul className="space-y-3 w-full">
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Specialized adaptive drive systems for maximum energy efficiency</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Optimized cycle times for large-scale production</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Reduced operating costs through energy recovery</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Advanced cooling systems for thermal stability</span>
                </li>
              </ul>
            </div>
            
            <div className="flex flex-col items-center">
              <img 
                src={capsImg} 
                alt="Precision Components" 
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
                  <span className="text-gray-700">Outstanding shot-to-shot consistency</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Modular design for system customization</span>
                </li>
                <li className="flex items-start">
                  <div className="text-green-500 mr-3 mt-1">➤</div>
                  <span className="text-gray-700">Industry-leading reliability and excellence</span>
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
                <i className="fas fa-car"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Automotive</h3>
              <p className="text-gray-700">
                Large automotive components requiring high strength and precise dimensional stability.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 text-5xl mb-4">
                <i className="fas fa-home"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Construction & Infrastructure</h3>
              <p className="text-gray-700">
                Heavy-duty plastic components for construction and infrastructure applications.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-blue-600 text-5xl mb-4">
                <i className="fas fa-pallet"></i>
              </div>
              <h3 className="text-xl font-bold text-blue-700 mb-2">Logistics & Material Handling</h3>
              <p className="text-gray-700">
                Large containers, pallets, and logistics equipment requiring durability and precision.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Comparison */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-blue-800">Product Range Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr>
                  <th className="py-3 px-4 border-b text-left">Feature</th>
                  <th className="py-3 px-4 border-b text-center">ELIOS 6500</th>
                  <th className="py-3 px-4 border-b text-center">ELIOS 7500</th>
                  <th className="py-3 px-4 border-b text-center">ELIOS 8500</th>
                  <th className="py-3 px-4 border-b text-center">ELIOS 10000</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b">Clamping Force (kN)</td>
                  <td className="py-3 px-4 border-b text-center">6500</td>
                  <td className="py-3 px-4 border-b text-center">7500</td>
                  <td className="py-3 px-4 border-b text-center">8500</td>
                  <td className="py-3 px-4 border-b text-center">10000</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b">Max Shot Weight (g)</td>
                  <td className="py-3 px-4 border-b text-center">4200</td>
                  <td className="py-3 px-4 border-b text-center">5000</td>
                  <td className="py-3 px-4 border-b text-center">6300</td>
                  <td className="py-3 px-4 border-b text-center">7800</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Max Injection Pressure (bar)</td>
                  <td className="py-3 px-4 border-b text-center">2200</td>
                  <td className="py-3 px-4 border-b text-center">2200</td>
                  <td className="py-3 px-4 border-b text-center">2500</td>
                  <td className="py-3 px-4 border-b text-center">2500</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="py-3 px-4 border-b">Energy Efficiency Rating</td>
                  <td className="py-3 px-4 border-b text-center">High</td>
                  <td className="py-3 px-4 border-b text-center">High</td>
                  <td className="py-3 px-4 border-b text-center">Very High</td>
                  <td className="py-3 px-4 border-b text-center">Very High</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* CTA Section */}
      <section className="py-16 bg-blue-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Take Your Production to the Next Level</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Contact our team to discover how the NETSTAL ELIOS can transform your large-scale injection molding capabilities.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="bg-green-600 hover:bg-orange-700 text-white px-8 py-3 rounded-md font-medium shadow-md transition-all duration-300"
            >
              Request Technical Consultation
            </Link>
            <Link
              to="/services/equipment-financing"
              className="bg-transparent border-2 border-white hover:bg-white hover:text-blue-800 px-8 py-3 rounded-md font-medium transition-all duration-300"
            >
              Financing Options
            </Link>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">Related Products</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <img 
                src={petLineImg} 
                alt="NETSTAL PET-LINE" 
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-lg font-bold text-blue-700 mb-2">NETSTAL PET-LINE</h3>
              <p className="text-gray-700 mb-4">
                High-performance PET preform production with maximum efficiency.
              </p>
              <Link 
                to="/products/pet-line"
                className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <img 
                src={eliosImg} 
                alt="NETSTAL ELION" 
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-lg font-bold text-blue-700 mb-2">NETSTAL ELION</h3>
              <p className="text-gray-700 mb-4">
                Powerful, fast, and precise injection molding machine.
              </p>
              <Link 
                to="/products/elion"
                className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md overflow-hidden">
              <img 
                src={dryingImg} 
                alt="NETSTAL ELION MEDICAL" 
                className="w-full h-48 object-cover mb-4"
              />
              <h3 className="text-lg font-bold text-blue-700 mb-2">NETSTAL ELION MEDICAL</h3>
              <p className="text-gray-700 mb-4">
                Specialized injection molding machines for medical applications.
              </p>
              <Link 
                to="/products/elion-medical"
                className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EliosPage;