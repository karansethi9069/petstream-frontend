import React, { useState , useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// Import sample images - you'll need to replace these with actual Corvaglia images
import img1 from '../../assets/images/corva-1.jpg'; // Replace with actual image
import img2 from '../../assets/images/corva-2.jpg'; // Replace with actual image
import img3 from '../../assets/images/corva-3.jpg'; // Replace with actual image
import img4 from '../../assets/images/corva-4.jpg'; // Replace with actual image
import imgHero from '../../assets/images/cap-banner.jpg'; // Replace with actual hero image
import ContactCTA from '../../components/home/ContactCTA';

import imgP1 from '../../assets/images/Injection-molding-machine.png';
import imgP2 from '../../assets/images/Pet-beverage-filling-line.png';
import imgP3 from '../../assets/images/pet-preforn-mold.png';
import imgP4 from '../../assets/images/PET-material-lab-equipment.jpg';
import imgP5 from '../../assets/integratedplastics/IMH.jpg';
import imgP6 from '../../assets/images/caps-closures-mold.jpg';
import imgP7 from '../../assets/images/Medical-pharma-paxkaging-mold.jpg';
import imgP8 from '../../assets/images/Packaging&Systems.jpg'
const Corvaglia = () => {
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
  const [activeTab, setActiveTab] = useState('caps'); // 'caps', 'solutions', or 'special'
   const navigate = useNavigate(); // ADD THIS LINE

  const handleNavigation = (path) => {
    navigate(path); // CHANGE THIS LINE
  };
  return (
    <>
      {/* Hero Banner Section with Background Image */}
<section
  className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white h-64 sm:h-80 md:h-96 lg:h-[76vh] mt-20 sm:mt-12"
  style={{
    backgroundImage: `url(${imgHero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Background overlay - only visible on mobile */}
  <div className="absolute inset-0 bg-black bg-opacity-20 sm:bg-opacity-0"></div>
</section>

      {/* Partner Information Section */}
      <section className="py-14">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">corvaglia -</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Over 20% of all PET bottles filled with soft drinks all over the world are fitted with corvaglia closures. Several of our PET caps have been tested by international beverage manufacturers and approved for their specific use in a range of different areas.
            </p>
            <p className="text-gray-700 mb-4 leading-relaxed">
              This led not only to the creation of a corvaglia partner network spanning over 15 countries worldwide, but also to customers putting their trust in us.
            </p>
            <p className="text-gray-700 leading-relaxed">
              As an exclusive partner of corvaglia for Indian Market, we offer innovative closure solutions that meet the highest industry standards.
            </p>
          </div>
        </div>
      </section>

      {/* Exclusive Partner Section */}
      <section className="py-10 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-8 text-center">We as an exclusive partner of Corvaglia for Indian Market offer molds for –</h2>
          
          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {/* Carbonated */}
            <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <div className="relative h-96">
                {/* Background Image - Always Visible */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-6 shadow-xl transition-all duration-500 group-hover:scale-105">
                    <img 
                      src={img1} 
                      alt="Carbonated Caps" 
                      className="w-48 h-48 object-contain transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-8 font-bold rounded-lg shadow-md transition-all duration-500 group-hover:scale-105 text-lg">
                    CARBONATED
                  </div>
                </div>
                
                {/* Light Green Translucent Overlay - Appears on Hover */}
                <div className="absolute inset-0 bg-green-500/30 backdrop-blur-[2px] text-gray-800 flex flex-col items-center justify-center p-8 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="text-center bg-white/70 backdrop-blur-md rounded-2xl p-8 border border-green-200 shadow-xl">
                    <h3 className="text-2xl font-bold mb-4 text-green-800">CARBONATED</h3>
                    <p className="leading-relaxed text-gray-700 text-base">
                      Our CSD caps are designed for carbonization of up to 9 g/l – and still lightweight and ergonomic
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Non-Carbonated */}
            <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <div className="relative h-96">
                {/* Background Image - Always Visible */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-6 shadow-xl transition-all duration-500 group-hover:scale-105">
                    <img 
                      src={img2} 
                      alt="Non-Carbonated Caps" 
                      className="w-48 h-48 object-contain transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-8 font-bold rounded-lg shadow-md transition-all duration-500 group-hover:scale-105 text-lg">
                    NONCARBONATED
                  </div>
                </div>
                
                {/* Light Green Translucent Overlay - Appears on Hover */}
                <div className="absolute inset-0 bg-green-500/30 backdrop-blur-[2px] text-gray-800 flex flex-col items-center justify-center p-8 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="text-center bg-white/70 backdrop-blur-md rounded-2xl p-8 border border-green-200 shadow-xl">
                    <h3 className="text-2xl font-bold mb-4 text-green-800">NONCARBONATED</h3>
                    <p className="leading-relaxed text-gray-700 text-base">
                      Our caps ensure that your still water stays clean and pure
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Sensitive */}
            <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <div className="relative h-96">
                {/* Background Image - Always Visible */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-6 shadow-xl transition-all duration-500 group-hover:scale-105">
                    <img 
                      src={img3} 
                      alt="Sensitive Caps" 
                      className="w-48 h-48 object-contain transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-8 font-bold rounded-lg shadow-md transition-all duration-500 group-hover:scale-105 text-lg">
                    SENSITIVE
                  </div>
                </div>
                
                {/* Light Green Translucent Overlay - Appears on Hover */}
                <div className="absolute inset-0 bg-green-500/30 backdrop-blur-[2px] text-gray-800 flex flex-col items-center justify-center p-8 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="text-center bg-white/70 backdrop-blur-md rounded-2xl p-8 border border-green-200 shadow-xl">
                    <h3 className="text-2xl font-bold mb-4 text-green-800">SENSITIVE</h3>
                    <p className="leading-relaxed text-gray-700 text-base">
                      Sensitive drinks such as juice or tea require special bottling processes and specially designed corvaglia caps
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Isotonic */}
            <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <div className="relative h-96">
                {/* Background Image - Always Visible */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-6 shadow-xl transition-all duration-500 group-hover:scale-105">
                    <img 
                      src={img4} 
                      alt="Isotonic Caps" 
                      className="w-48 h-48 object-contain transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-8 font-bold rounded-lg shadow-md transition-all duration-500 group-hover:scale-105 text-lg">
                    ISOTONIC
                  </div>
                </div>
                
                {/* Light Green Translucent Overlay - Appears on Hover */}
                <div className="absolute inset-0 bg-green-500/30 backdrop-blur-[2px] text-gray-800 flex flex-col items-center justify-center p-8 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="text-center bg-white/70 backdrop-blur-md rounded-2xl p-8 border border-green-200 shadow-xl">
                    <h3 className="text-2xl font-bold mb-4 text-green-800">ISOTONIC</h3>
                    <p className="leading-relaxed text-gray-700 text-base">
                      Sport and energy drinks usually need to be opened with one hand – no problem for our sport caps
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Dairy or Edible Oil */}
            <div className="group relative bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer">
              <div className="relative h-96">
                {/* Background Image - Always Visible */}
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
                  <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 mb-6 shadow-xl transition-all duration-500 group-hover:scale-105">
                    <img 
                      src={img1} 
                      alt="Dairy or Edible Oil Caps" 
                      className="w-48 h-48 object-contain transition-all duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-8 font-bold rounded-lg shadow-md transition-all duration-500 group-hover:scale-105 text-lg">
                    DAIRY OR EDIBLE OIL
                  </div>
                </div>
                
                {/* Light Green Translucent Overlay - Appears on Hover */}
                <div className="absolute inset-0 bg-green-500/30 backdrop-blur-[2px] text-gray-800 flex flex-col items-center justify-center p-8 opacity-0 transition-all duration-500 group-hover:opacity-100">
                  <div className="text-center bg-white/70 backdrop-blur-md rounded-2xl p-8 border border-green-200 shadow-xl">
                    <h3 className="text-2xl font-bold mb-4 text-green-800">DAIRY OR EDIBLE OIL</h3>
                    <p className="leading-relaxed text-gray-700 text-base">
                      Caps for special contents: Our bottle caps for dairy products, edible oils, and other fillings
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action Link */}
          <div className="text-center">
            <p className="text-gray-700 text-lg mb-4">
              Want to explore our range of competence? 
              <button 
                className="text-blue-600 hover:text-blue-800 underline ml-2 font-medium"
                onClick={() => window.open('https://www.corvaglia.com/', '_blank')}
              >
                click here
              </button>
            </p>
          </div>
        </div>
      </section>
      
      {/* Integrated Benefits Section with Tabs */}
    
    
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
      {/* <div 
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
      </div> */}

      {/* Packaging Mold */}
      <div 
        onClick={() => handleNavigation('/products/packaging-mold')}
        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-100"
      >
        <div className="relative h-56 overflow-hidden">
          <img 
            src={imgP7}
            alt="Packaging Mold" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">
            Packaging Mold
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Advanced packaging mold solutions for superior product protection
          </p>
          <div className="flex items-center text-teal-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
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
            {/* CTA Section */}

      <ContactCTA />
    </>
  );
};

export default Corvaglia;