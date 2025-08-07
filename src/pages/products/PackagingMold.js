import React, { useState , useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import img1 from '../../assets/images/medizinal.jpg';
import img2 from '../../assets/images/food.jpg';
import img3 from '../../assets/images/lebensmittel_header.jpg';
import ContactCTA from '../../components/home/ContactCTA';

import imgP1 from '../../assets/images/Injection-molding-machine.png';
import imgP2 from '../../assets/images/Pet-beverage-filling-line.png';
import imgP3 from '../../assets/images/pet-preforn-mold.png';
import imgP4 from '../../assets/images/PET-material-lab-equipment.jpg';
import imgP5 from '../../assets/integratedplastics/IMH.jpg';
import imgP6 from '../../assets/images/caps-closures-mold.jpg';
import imgP7 from '../../assets/images/Medical-pharma-paxkaging-mold.jpg';
import imgP8 from '../../assets/images/Packaging&Systems.jpg'

const Glaroform = () => {
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
  // State for benefits tab selection
  const [activeTab, setActiveTab] = useState('medical'); // 'medical', 'packaging', or 'custom'
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      {/* Hero Banner Section with Background Image */}
<section
  className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white h-64 sm:h-80 md:h-96 lg:h-[80vh] mt-20 sm:mt-12"
  style={{
    backgroundImage: `url(${img3})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Background overlay - only visible on mobile */}
  <div className="absolute inset-0 bg-black bg-opacity-20 sm:bg-opacity-0"></div>
</section>

      {/* Partner Information Section */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Glaroform -</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              An Exclusive Partner of PSI Group INC, are experts in the development and manufacture of high-performance injection moulds for food packaging, medical packaging. The trust in the uncompromising reliability of Glaroform molds and commitment gives excellence in the latest technology, a drive to find solutions, and inclusive teamwork.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              We As an Exclusive partner of Glaroform offer –
            </p>
          </div>
        </div>
      </section>

      {/* Product Category Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 border-b pb-2">TOOLS WITH HIGHEST PRECISION FOR MEDICAL DEVICES</h2>
          
          {/* First Product */}
          <div className="flex flex-col md:flex-row items-center mb-12 bg-white p-6 rounded-lg shadow-md">
            <div className="md:w-2/3 md:pr-8 mb-6 md:mb-0">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Medical Products Solutions</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our moulds for medical products meet the most stringent demands for reproducible product quality with narrow tolerances. This also includes excellent cavity surface quality and comprehensive documentation. Our comprehensive development know-how yields important preliminary work for an efficient project workflow and excellent quality parts. We offer valuable support with plant integration and validation processes in our modern in-house test centre. The bottom line is that our customers benefit from a faster path to maximum manufacturing quality.
              </p>
            </div>
            <div className="md:w-1/3">
              <img 
                src={img1} 
                alt="Medical Products Mold" 
                className="w-full h-auto rounded shadow"
              />
            </div>
          </div>
          

    {/* First Product */}
          <div className="flex flex-col md:flex-row items-center mb-12 bg-white p-6 rounded-lg shadow-md">
            <div className="md:w-2/3 md:pr-8 mb-6 md:mb-0">
         <h3 className="text-xl font-bold text-blue-800 mb-3">Packaging Molds</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
               We are seasoned experts in developing and implementing new solutions for the food industry. We are fully familiar with the toughest demands for high hygiene, minimized plastic use, and complex packaging. The quality and wear resistance of our tools always guarantee constant results for problem-free further processing on downstream machines.
              </p>
               <p className="text-gray-700 mb-4 leading-relaxed">
                Our customers can rely on fast and smooth implementation, and on all requirements being reliably met over extended service lives.
              </p>
            </div>
            <div className="md:w-1/3">
              <img 
                src={img2} 
                alt="Medical Products Mold" 
                className="w-full h-auto rounded shadow"
              />
            </div>
          </div>

          {/* Second Product - Added mb-12 for consistent spacing */}
          {/* <div className="flex flex-col md:flex-row items-center mb-12 bg-white p-6 rounded-lg shadow-md">
            <div className="md:w-1/3">
              <img 
                src={img2} 
                alt="Packaging Molds" 
                className="w-full h-auto rounded shadow"
              />
            </div>
            <div className="md:w-2/3 order-1 md:order-2">
              <h3 className="text-xl font-bold text-blue-800 mb-3">Packaging Molds</h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                We are seasoned experts in developing and implementing new solutions for the food industry. We are fully familiar with the toughest demands for high hygiene, minimized plastic use, and complex packaging. The quality and wear resistance of our tools always guarantee constant results for problem-free further processing on downstream machines.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Our customers can rely on fast and smooth implementation, and on all requirements being reliably met over extended service lives.
              </p>
            </div>
          </div> */}
        </div>
      </section>
      
      {/* Integrated Benefits Section with Tabs */}
  
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container mx-auto px-6 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block">
              <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2 block">
                Explore More
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Other Suggested Products
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Discover our comprehensive range of cutting-edge industrial solutions designed to optimize your production efficiency and enhance manufacturing capabilities
            </p>
          </div>
          
          {/* Products Grid */}
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {/* Injection Molding Machine */}
                    <div 
                      onClick={() => handleNavigation('/products/injection-molding')}
                      className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-100"
                    >
                      <div className="relative h-56 overflow-hidden">
                          <img 
                          src={imgP1}
                          alt="Injection Molding Machine" 
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                         Injection Molding Machine
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          High-performance injection molding machines with cutting-edge technology
                        </p>
                        <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                          <span>Learn More</span>
                          <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
            {/* Beverage Filling Line */}
            <div 
              onClick={() => handleNavigation('/products/beverage-filling')}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={imgP2}
                  alt="Beverage Filling Line" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  Beverage Filling Line
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Complete automated beverage production solutions with high-speed filling capabilities
                </p>
                <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* PET Preform Molds */}
            <div 
              onClick={() => handleNavigation('/products/pet-preform')}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={imgP3}
                  alt="PET Preform Molds" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  PET Preform Molds
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  High-precision molds for PET preform production with exceptional durability
                </p>
                <div className="flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Lab Equipment */}
            <div 
              onClick={() => handleNavigation('/products/lab-equipment')}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={imgP4}
                  alt="Lab Equipment" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  Lab Equipment
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Advanced laboratory testing and analysis equipment for quality control
                </p>
                <div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Exclusive Applications */}
            <div 
              onClick={() => handleNavigation('/products/integrated-plastics')}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={imgP5}
                  alt="Exclusive Applications" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  Exclusive Applications
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Integrated Plastics- Patented, recyclable plastic container solutions for market-ready products.
                </p>
                <div className="flex items-center text-orange-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Caps & Closures Mold */}
            <div 
              onClick={() => handleNavigation('/products/caps-mold')}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={imgP6}
                  alt="Caps & Closures Mold" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  Caps & Closures Mold
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Specialized molds for high-quality caps and closures with precise threading
                </p>
                <div className="flex items-center text-red-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Packaging & Systems */}
            <div 
              onClick={() => handleNavigation('/products/packaging-systems')}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-100"
            >
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={imgP8}
                  alt="Packaging & Systems" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
                  Packaging & Systems
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Comprehensive packaging solutions including colorants and additives
                </p>
                <div className="flex items-center text-indigo-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <ContactCTA />
    </>
  );
};

export default Glaroform;
