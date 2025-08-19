import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import TagManager from 'react-gtm-module'; // ✅ import GTM

// Placeholder for actual image imports
import zonwoBanner from '../../assets/images/zonwo-banner.jpg';
import viscometer from '../../assets/images/Ubbelohde-Viscometer.jpg';
import bottleTester from '../../assets/images/bottle-tester.jpg';
import preformTester from '../../assets/images/performer-tester.jpg';
import gasChromatograph from '../../assets/images/Gas-Chromatograph.jpg';
import samplePreparation from '../../assets/images/Constant-water-bath.jpg';
import spectrophotometer from '../../assets/images/Spectrophotometer.jpg';

import ContactCTA from '../../components/home/ContactCTA';

import imgP1 from '../../assets/images/Injection-molding-machine.png';
import imgP2 from '../../assets/images/Pet-beverage-filling-line.png';
import imgP3 from '../../assets/images/pet-preforn-mold.png';
import imgP4 from '../../assets/images/PET-material-lab-equipment.jpg';
import imgP5 from '../../assets/integratedplastics/IMH.jpg';
import imgP6 from '../../assets/images/caps-closures-mold.jpg';
import imgP7 from '../../assets/images/Medical-pharma-paxkaging-mold.jpg';
import imgP8 from '../../assets/images/Packaging&Systems.jpg';

const LabEquipment = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Initialize Google Tag Manager
    const tagManagerArgs = {
      gtmId: 'AW-16797076856',
    };
    TagManager.initialize(tagManagerArgs);

    // ✅ Scroll to top when page loads
    window.scrollTo(0, 0);
    setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, 100);
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }, []);

  // State for tab selection
  const [activeTab, setActiveTab] = useState('features');
  const [activeInfoTab, setActiveInfoTab] = useState('company');

    const navigate = useNavigate(); // ADD THIS LINE
    
  const handleNavigation = (path) => {
    navigate(path); // CHANGE THIS LINE
  };
  return (
    <>
      {/* Hero Banner Section */}
      {/* Hero Banner */}
<section
  className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white h-64 sm:h-80 md:h-96 lg:h-[80vh] mt-20 sm:mt-12"
  style={{
    backgroundImage: `url(${zonwoBanner})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Background overlay - only visible on mobile */}
  <div className="absolute inset-0 bg-black bg-opacity-20 sm:bg-opacity-0"></div>
</section>


      {/* Company Introduction */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">ZONWON - Laboratory Testing Excellence</h2>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We introduce the world's leading technology for Laboratory testing equipment for Polymer Material and Liquid testing. 
              From Zonwon we offer IV Tester and AA Analyser of high-standard designed in Germany, our range of IV testers starts from 
              Manual, Semi-automatic, and fully automatic - apart from Testing equipment we also offer other Laboratory peripherals 
              for sample preparation, testing and cleaning.
            </p>

            <h3 className="text-2xl font-semibold mb-6 text-blue-800">Equipment Category</h3>
            
            {/* Ubbelohde Viscometer */}
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="md:w-1/2">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full">
                  <h4 className="text-xl font-bold text-blue-700 mb-4">Ubbelohde Viscometer</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">IVS100 Series</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">IVS200 Series</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">IVS300 Series</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">IVS400 Series</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">IVS800 Series</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">IVS800H Series</span>
                    </li>
                  </ul>
                  <Link 
                    to="/products/zonwon/ubbelohde-viscometer"
                    className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded transition-colors duration-300"
                  >
                    Know More
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={viscometer} 
                  alt="Ubbelohde Viscometer" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
            
            {/* Bottle Test Instruments */}
            <div className="flex flex-col md:flex-row-reverse gap-8 mb-12">
              <div className="md:w-1/2">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full">
                  <h4 className="text-xl font-bold text-blue-700 mb-4">Bottle Test Instruments</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Bottle Size Tester</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Height Scale</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Verticality Tester</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Top Load Meter</span>
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Balance DTY-B5000</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Sealing Performance Tester</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Humidity Chamber</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Refrigerator</span>
                      </li>
                    </ul>
                  </div>
                  <Link 
                    to="/products/zonwon/bottle-testing-instruments"
                    className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded transition-colors duration-300"
                  >
                    Know More
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={bottleTester} 
                  alt="Bottle Test Instruments" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
            
            {/* Preform Test Instruments */}
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="md:w-1/2">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full">
                  <h4 className="text-xl font-bold text-blue-700 mb-4">Preform Test Instruments</h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Balance</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Profile Projector</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">One button profile projector AY-100</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Verticality tester</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Wall thickness tester (Preform)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Inside Diameter of neck finish Tester</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Light Box T60</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Stress test (Polariscope Strain Viewer)</span>
                    </li>
                  </ul>
                  <Link 
                    to="/products/zonwon/preform-testing-instruments"
                    className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded transition-colors duration-300"
                  >
                    Know More
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={preformTester} 
                  alt="Preform Test Instruments" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
            
            {/* GC112N Gas Chromatograph */}
            <div className="flex flex-col md:flex-row-reverse gap-8 mb-12">
              <div className="md:w-1/2">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full">
                  <h4 className="text-xl font-bold text-blue-700 mb-4">GC112N Gas Chromatograph</h4>
                  <p className="text-gray-700 mb-6">
                    GC112N Gas chromatograph is one of widely used analytical instruments. 
                    It has become an ideal analytical instrument for separation or analysis in various fields.
                  </p>
                  <Link 
                    to="/products/zonwon/gc112n-gas-chromatograph"
                    className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded transition-colors duration-300"
                  >
                    Know More
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={gasChromatograph} 
                  alt="GC112N Gas Chromatograph" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
            {/* Sample Preparation Equipment */}
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="md:w-1/2">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full">
                  <h4 className="text-xl font-bold text-blue-700 mb-4">Sample Preparation Equipment</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Polymer dissolver</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Pipe Machine</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Constant water bath T25</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Density Meter</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">PET standard chips</span>
                      </li>
                    </ul>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Balance</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Moisture meter</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Oven</span>
                      </li>
                      <li className="flex items-start">
                        <div className="text-green-500 mr-3 mt-1">➤</div>
                        <span className="text-gray-700">Testing necessary accessories</span>
                      </li>
                    </ul>
                  </div>
                  <Link 
                    to="/products/zonwon/sample-preparation-instruments"
                    className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded transition-colors duration-300"
                  >
                    Know More
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={samplePreparation} 
                  alt="Sample Preparation Equipment" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>
            
            {/* Spectrophotometer */}
            <div className="flex flex-col md:flex-row-reverse gap-8 mb-12">
              <div className="md:w-1/2">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md h-full">
                  <h4 className="text-xl font-bold text-blue-700 mb-4">Spectrophotometer</h4>
                  <p className="text-gray-700 mb-6">
                    ZonwonCS-820P is a smart, simple operation and highly precise spectrophotometer. 
                    It adopts 7 inches touch screen, full wavelength range, Android operating system.
                    Illumination: reflectance D/8° and transmittance D/0°(UV included / UV excluded), 
                    high accuracy for color measurement, large storage memory, PC software.
                  </p>
                  <Link 
                    to="/products/zonwon/spectrophotometer"
                    className="inline-block bg-green-600 hover:bg-orange-700 text-white font-medium py-2 px-6 rounded transition-colors duration-300"
                  >
                    Know More
                  </Link>
                </div>
              </div>
              <div className="md:w-1/2">
                <img 
                  src={spectrophotometer} 
                  alt="Spectrophotometer" 
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
            </div>

            {/* YouTube Video Section */}
            <div className="my-16">
              <h3 className="text-2xl font-semibold mb-8 text-blue-800 text-center">ZONWON Product Overview</h3>
              <div className="flex justify-center px-4">
                <div className="w-full max-w-4xl">
                  <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src="https://www.youtube.com/embed/vXDebe_YpCA?si=DgpSxBl2F-76JAA9" 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      allowFullScreen
                      className="absolute top-0 left-0 w-full h-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {/* What Makes Us Different Section with Tabs */}
            <div className="mb-12">
              <h3 className="text-2xl font-semibold mb-6 text-blue-800">WHAT MAKES US DIFFERENT?</h3>
              
              {/* Tabs */}
              <div className="flex flex-wrap border-b border-gray-200 mb-8">
                <button 
                  className={`py-3 px-6 font-medium ${activeInfoTab === 'company' 
                    ? 'border-b-2 border-green-500 text-green-600' 
                    : 'text-gray-600 hover:text-green-500'}`}
                  onClick={() => setActiveInfoTab('company')}
                >
                 Zonwon Lab Equipment
                </button>
                {/* <button 
                  className={`py-3 px-6 font-medium ${activeInfoTab === 'preform' 
                    ? 'border-b-2 border-green-500 text-green-600' 
                    : 'text-gray-600 hover:text-green-500'}`}
                  onClick={() => setActiveInfoTab('preform')}
                >
                  Laboratory Equipment
                </button> */}
              </div>
              
              {/* Company Tab */}
              {activeInfoTab === 'company' && (
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h5 className="font-semibold text-gray-800 mb-4">Benefits /Customer Prefer Zonwon Because Of:</h5>
                <ul className="space-y-3">
                <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Zonwon offer precision, reliability and Longer Life</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Offer wide range of IV tester and AA analyser</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Zonwon equipment are Manual, Semi-Automatic, and Fully automatic</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Trouble free and easy to operate</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Approved by all the global PET industry User</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Cost effective and Service free</span>
                  </li>
                  <li className="flex items-start">
                    <div className="text-green-500 mr-3 mt-1">➤</div>
                    <span className="text-gray-700">Ensure consistency and higher performnce</span>
                  </li>
              
                </ul>
              </div>
              )}
              
              {/* Equipment Tab */}
              {/* {activeInfoTab === 'preform' && (
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-gray-800 mb-4">Our laboratory equipment offers significant advantages:</h5>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">High precision and accuracy in testing results</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Easy operation with intuitive interfaces</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Low maintenance requirements</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Robust construction for long service life</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Comprehensive data analysis capabilities</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Compliance with international testing standards</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Complete documentation for quality control</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Seamless integration with laboratory information systems</span>
                    </li>
                  </ul>
                </div>
              )} */}
            </div>
            
            {/* Product Features Section with Tabs */}
            
  
          </div>
        </div>
      </section>
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
      {/* <div 
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
      </div> */}

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
       {/* REPLACED: Call to Action with Existing ContactCTA Component */}
      <ContactCTA />
    </>
  );
};

export default LabEquipment;
