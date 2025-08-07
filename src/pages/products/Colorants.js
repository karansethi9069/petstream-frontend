// BuchtechProducts.js - Updated with navigation links
import React, { useState ,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import hero from '../../assets/images/machine/hero.jpg';
import m1 from '../../assets/images/machine/m1.jpg';
import m2 from '../../assets/images/machine/m2.jpg';
import m3 from '../../assets/images/machine/m3.jpg';
import m4 from '../../assets/images/machine/m4.jpg';
import m5 from '../../assets/images/machine/m5.png';
import m6 from '../../assets/images/machine/m6.jpg';
import m7 from '../../assets/images/machine/m7.jpg';

import ContactCTA from '../../components/home/ContactCTA';

import imgP1 from '../../assets/images/Injection-molding-machine.png';
import imgP2 from '../../assets/images/Pet-beverage-filling-line.png';
import imgP3 from '../../assets/images/pet-preforn-mold.png';
import imgP4 from '../../assets/images/PET-material-lab-equipment.jpg';
import imgP5 from '../../assets/integratedplastics/IMH.jpg';
import imgP6 from '../../assets/images/caps-closures-mold.jpg';
import imgP7 from '../../assets/images/Medical-pharma-paxkaging-mold.jpg';
import imgP8 from '../../assets/images/Packaging&Systems.jpg'
const BuchtechProducts = () => {
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
  const [activeCategory, setActiveCategory] = useState('all');
   const navigate = useNavigate(); // ADD THIS LINE

  const handleNavigation = (path) => {
    navigate(path); // CHANGE THIS LINE
  };
  // Product data with navigation routes
  const products = [
    {
      id: 1,
      title: "CAP SORTER SERIES",
      description: "High-efficiency cap sorting systems for automated production lines",
      category: "cap-sorting",
      image: m1,
      features: ["High-speed sorting", "Precision orientation", "Minimal maintenance"],
      route: "/products/cap-sorter"
    },
    {
      id: 2,
      title: "CAPPING SERIES",
      description: "Complete capping solutions for various bottle and container types",
      category: "capping",
      image: m2,
      features: ["Versatile compatibility", "Reliable sealing", "Easy operation"],
      route: "/products/capping"
    },
    {
      id: 3,
      title: "SPECIALIZED CAPS SERIES",
      description: "Specialized capping systems for oil bottles, roof caps, and sports bottles",
      category: "specialized-caps",
      image: m3,
      features: ["Multi-format compatibility", "Secure sealing", "Fast changeover"],
      route: "/products/specialized-caps"
    },
    {
      id: 4,
      title: "SMART CAP SERIES",
      description: "Intelligent capping systems with advanced control and monitoring",
      category: "smart-systems",
      image: m4,
      features: ["Smart controls", "Real-time monitoring", "Data analytics"],
      route: "/products/smart-cap"
    },
    {
      id: 5,
      title: "PREFORM AND BOTTLE SERIES",
      description: "Equipment for preform handling and bottle processing",
      category: "bottle-handling",
      image: m5,
      features: ["Gentle handling", "High throughput", "Quality assurance"],
      route: "/products/preform-bottle"
    },
    {
      id: 6,
      title: "CONVEYING MACHINE SERIES",
      description: "Advanced conveying systems for material transport and production flow",
      category: "conveying",
      image: m6,
      features: ["Smooth transport", "Variable speed", "Modular design"],
      route: "/products/conveying"
    },
    {
      id: 7,
      title: "CHEMICAL SERIES",
      description: "Specialized equipment for chemical industry applications",
      category: "chemical",
      image: m7,
      features: ["Chemical resistance", "Safety compliance", "Precise dosing"],
      route: "/products/chemical"
    }
  ];

  return (
    <>
      {/* Hero Banner Section */}
       <section
  className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white h-64 sm:h-80 md:h-96 lg:h-[73vh] mt-20 sm:mt-0"
  style={{
    backgroundImage: `url(${hero})`,
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Background overlay - only visible on mobile */}
  <div className="absolute inset-0 bg-black bg-opacity-20 sm:bg-opacity-0"></div>
</section>

      {/* Quick Navigation Bar */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 py-4">
            {products.map((product) => (
              <Link
                key={product.id}
                to={product.route}
                className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
              >
                {product.title.split(' ')[0]} {product.title.split(' ')[1]}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Company Information Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">BUCHTECH - Industrial Excellence</h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Buchtech specializes in manufacturing high-quality industrial equipment and automation solutions. 
              Our comprehensive product range includes cap sorting systems, conveying machines, capping equipment, 
              and specialized machinery for various industrial applications. We are committed to providing reliable, 
              efficient, and innovative solutions that enhance productivity and operational excellence.
            </p>
            <p className="text-gray-700 leading-relaxed">
              With years of experience in industrial automation, we deliver cutting-edge technology that meets 
              the demanding requirements of modern manufacturing environments.
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Product Lines</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                <div className="mb-4">
                  {/* Machine Image */}
                  <div className="mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-48 object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-gray-800">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-700 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-center mb-1">
                          <span className="w-2 h-2 bg-green-600 rounded-full mr-2"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Navigation Link Button */}
                <Link 
                  to={product.route}
                  className="inline-block w-full text-center bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded transition-colors duration-300 no-underline"
                >
                  Read More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Company Advantages Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-gray-700">WHY CHOOSE BUCHTECH</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Advantage 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Quality Engineering</h3>
              <p className="text-gray-700">
                Precision-engineered equipment built to the highest industry standards for reliable performance.
              </p>
            </div>
            
            {/* Advantage 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Advanced Technology</h3>
              <p className="text-gray-700">
                Cutting-edge automation technology that enhances productivity and operational efficiency.
              </p>
            </div>
            
            {/* Advantage 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Custom Solutions</h3>
              <p className="text-gray-700">
                Tailored equipment solutions designed to meet specific industrial requirements and applications.
              </p>
            </div>
            
            {/* Advantage 4 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Comprehensive Support</h3>
              <p className="text-gray-700">
                Complete after-sales support including installation, training, maintenance, and technical assistance.
              </p>
            </div>
            
            {/* Advantage 5 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Reliability</h3>
              <p className="text-gray-700">
                Robust equipment designed for continuous operation with minimal downtime and maintenance requirements.
              </p>
            </div>
            
            {/* Advantage 6 */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Industry Expertise</h3>
              <p className="text-gray-700">
                Deep understanding of industrial processes and requirements across multiple manufacturing sectors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Industry Applications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold mb-2">Beverage Industry</h3>
              <p className="text-gray-600 text-sm">Bottle capping, sorting, and conveying solutions</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold mb-2">Food Packaging</h3>
              <p className="text-gray-600 text-sm">Hygienic equipment for food processing lines</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold mb-2">Pharmaceutical</h3>
              <p className="text-gray-600 text-sm">Precision equipment for pharmaceutical packaging</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-lg font-semibold mb-2">Chemical Industry</h3>
              <p className="text-gray-600 text-sm">Chemical-resistant equipment and systems</p>
            </div>
          </div>
        </div>
      </section>
      
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
           {/* <div 
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
           </div> */}
         </div>
     
       </div>
     </section>
      {/* CTA Section */}

      <ContactCTA />
    </>
  );
};

export default BuchtechProducts;