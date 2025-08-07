import React, { useState , useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ContactCTA from '../../components/home/ContactCTA';
import img1 from '../../assets/images/n-cobin.jpg';
import img2 from '../../assets/images/n-bowler.jpg';
import img3 from '../../assets/images/n-filling.jpg';
import img4 from '../../assets/images/n-secndory.jpg';
import img5 from '../../assets/images/n-logistic.jpg';
import img6 from '../../assets/images/n-pretreatmet.jpg';
import img7 from '../../assets/images/newamstar.jpg';

import imgP1 from '../../assets/images/Injection-molding-machine.png';
import imgP2 from '../../assets/images/Pet-beverage-filling-line.png';
import imgP3 from '../../assets/images/pet-preforn-mold.png';
import imgP4 from '../../assets/images/PET-material-lab-equipment.jpg';
import imgP5 from '../../assets/integratedplastics/IMH.jpg';
import imgP6 from '../../assets/images/caps-closures-mold.jpg';
import imgP7 from '../../assets/images/Medical-pharma-paxkaging-mold.jpg';
import imgP8 from '../../assets/images/Packaging&Systems.jpg';

const BeverageFilling = () => {
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
  const [activeTab, setActiveTab] = useState('main');
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  }; 
  
  return (
    <>
     {/* Hero Banner Section */}
<section
  className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white h-64 sm:h-80 md:h-96 lg:h-[80vh] mt-20 sm:mt-12"
  style={{
    backgroundImage: `url(${img7})`,
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
            <h2 className="text-3xl font-bold uppercase mb-6">Newamstar –</h2>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Newamstar is a company focusing on integrated solutions for smart factories of liquid products. We as the sales and Service partner of Newamstar for Indian market committed to providing comprehensive services for smart factories with production and storage integrated solutions.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Since its founding, Newamstar, under the concept of "Driving development through innovation and winning the market with quality", has been providing global customers in the five fields of beverages, dairy, liquors, condiments and daily chemicals with complete sets of intelligent equipment and comprehensive solutions for water treatment, pre-distribution, blowing, filling, secondary packaging, handling robots, intelligent stereo warehouses, etc. We also provide users with planning, designing and implementation of smart factory integration projects. From product recipe, three-dimensional bottle design to factory overall planning, and from key equipment R&D, software platform customization & development to full life cycle service of engineering projects, we are serving the customer like Coke, Nestle, Pepsico, Dali, C'estbon, Ganten, COFCO, Nice and other famous brands.
            </p>
          </div>
        </div>
      </section>

      {/* We with our Partner offer Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold mb-12">We with our Partner offer –</h2>

          {/* Combiblock Section */}
          <div className="flex flex-col md:flex-row items-stretch mb-16 bg-white p-8 rounded-lg shadow-md">
            <div className="md:w-2/3 md:pr-12 mb-8 md:mb-0 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-blue-800 mb-6">Combiblock</h3>
              <ul className="mb-8 space-y-3">
                {['Starbloc','Bottled Water Combiblock','Big-Container Combiblock','Aseptic Combiblock','Ultra-clean Combiblock','CSD Combiblock','Hot-fill Combiblock','Non-beverage Combiblock'].map(item => (
                  <li key={item} className="flex items-start">
                   <div className="text-green-600 mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/products/combiblock"
                className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 self-start"
              >
                Know More
              </Link>
            </div>
            <div className="md:w-1/3 md:pl-8 flex items-center">
              <img
                src={img1}
                alt="Combiblock System"
                className="w-full h-auto rounded shadow"
              />
            </div>
          </div>

          {/* Blowing System */}
          <div className="flex flex-col md:flex-row items-stretch mb-16 bg-white p-8 rounded-lg shadow-md">
          <div className="md:w-2/3 md:pr-12 mb-8 md:mb-0 flex flex-col justify-center">
              <img
                src={img2}
                alt="Blowing System"
                className="w-full h-auto rounded shadow"
              />
            </div>
            <div className="md:w-2/3 order-1 md:order-2 md:pr-12 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-blue-800 mb-6">Blowing System</h3>
              <ul className="mb-8 space-y-3">
                {['Bottle Blower','Big-container Blower','Gallon Blower'].map(item => (
                  <li key={item} className="flex items-start">
                    <div className="text-green-600 mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/products/blowing-system"
                className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 self-start"
              >
                Know More
              </Link>
            </div>
          </div>

          {/* Filling System */}
          <div className="flex flex-col md:flex-row items-stretch mb-16 bg-white p-8 rounded-lg shadow-md">
            <div className="md:w-2/3 md:pr-12 mb-8 md:mb-0 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-blue-800 mb-6">Filling System</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  ['Aseptic Filling','Ultra-clean Filling','Hot Filling','Water Filling','Gallon-Water Filling'],
                  ['CSD Filling','Liquor Filling','Condiment Filling','Edible Oil Filling','Daily Chemical Product Filling']
                ].map((col, i) => (
                  <ul key={i} className="space-y-3">
                    {col.map(item => (
                      <li key={item} className="flex items-start">
                        <div className="text-green-600 mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
              <Link
                to="/products/filling-system"
                className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 self-start"
              >
                Know More
              </Link>
            </div>
            <div className="md:w-1/3 md:pl-8 flex items-center">
              <img
                src={img3}
                alt="Filling System"
                className="w-full h-auto rounded shadow"
              />
            </div>
          </div>

          {/* Secondary Packaging System */}
          <div className="flex flex-col md:flex-row items-stretch mb-16 bg-white p-8 rounded-lg shadow-md">
            <div className="md:w-2/3 md:pr-12 mb-8 md:mb-0 flex flex-col justify-center">
              <img
                src={img4}
                alt="Secondary Packaging System"
                className="w-full h-auto rounded shadow"
              />
            </div>
            <div className="md:w-2/3 order-1 md:order-2 md:pr-12 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-blue-800 mb-6">Secondary Packaging System</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {[
                  ['Conveyor System','Bottle Warmer','Bottle Tilting System','Shower Cooling Tunnel','Labeler','Film Wrapper'],
                  ['Carton Wrapper','Starpack','Sorting Robot','Robot Encaser','Robot Palletizer','Mechanical Palletizer']
                ].map((col, i) => (
                  <ul key={i} className="space-y-3">
                    {col.map(item => (
                      <li key={item} className="flex items-start">
                        <div className="text-green-600 mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
              <Link
                to="/products/secondary-packaging-system"
                className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 self-start"
              >
                Know More
              </Link>
            </div>
          </div>

          {/* Intelligent Logistics */}
          <div className="flex flex-col md:flex-row items-stretch mb-16 bg-white p-8 rounded-lg shadow-md">
            <div className="md:w-2/3 md:pr-12 mb-8 md:mb-0 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-blue-800 mb-6">Intelligent Logistics</h3>
              <ul className="mb-8 space-y-3">
                {['Intelligent Warehouse','RGV (Rail Guided Vehicle)','AGV (Automated Guided Vehicle)','WMS (Warehouse Management System)'].map(item => (
                  <li key={item} className="flex items-start">
                  <div className="text-green-600 mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/products/intelligent-logistics"
                className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 self-start"
              >
                Know More
              </Link>
            </div>
            <div className="md:w-1/3 md:pl-8 flex items-center">
              <img
                src={img5}
                alt="Intelligent Logistics"
                className="w-full h-auto rounded shadow"
              />
            </div>
          </div>

          {/* Pretreatment System */}
          <div className="flex flex-col md:flex-row items-stretch mb-16 bg-white p-8 rounded-lg shadow-md">
           <div className="md:w-2/3 md:pr-12 mb-8 md:mb-0 flex flex-col justify-center">
              <img
                src={img6}
                alt="Pretreatment System"
                className="w-full h-auto rounded shadow"
              />
            </div>
            <div className="md:w-2/3 order-1 md:order-2 md:pr-12 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-blue-800 mb-6">Pretreatment System</h3>
              <ul className="mb-8 space-y-3">
                {['Water Treatment System','Processing System','UHT System','CIP System','COP/SOP System','Disinfectant Blending System','Carbon Mixer'].map(item => (
                  <li key={item} className="flex items-start">
                 <div className="text-green-600 mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/products/pretreatment-system"
                className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-4 rounded transition-colors duration-300 self-start"
              >
                Know More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different Section with Tabs */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-gray-700 uppercase">WHAT MAKES US DIFFERENT?</h2>

          {/* Tabs */}
          <div className="flex flex-wrap mb-8">
            <button
              className={`py-3 px-6 font-medium ${
                activeTab === 'main'
                  ? 'border border-green-500 text-green-600 bg-white'
                  : 'text-gray-600 hover:text-green-500'
              }`}
              onClick={() => setActiveTab('main')}
            >
              Jiansu Newamstar Packaging Machinery Company, limited
            </button>
          </div>

          <div className="border-t border-gray-200 mb-8" />

          {/* Main Benefits */}
          {activeTab === 'main' && (
            <ul className="space-y-6">
              {[
                'Newamstar is devoted in providing customized production and storage integrated turn-key solution and all kinds of beverage product packaging solution for global customers.',
                'Leading supplier in liquid packaging industry in the world.',
                'Wide Service Network and spare part Supply.',
                'Approved by Major Beverage Industry Leaders.',
                'Best price to performance machine offering',
                'Offer short delivery of Machines & Complete solutions',
                '32+ years of expertise in liquid filling line system',
                'Technology leader in Aseptic filling line',
                'Secondary line equipment can be developed and customized as per customer need',
                'Newamstar offers lowest cost of machine maintenance'
              ].map((text, i) => (
                <li key={i} className="flex items-start">
                 <div className="text-green-600 mr-4 mt-1 flex-shrink-0">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                  <span className="text-gray-700 leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          )}
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

export default BeverageFilling;