import React, { useState ,useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moldImg from '../../assets/images/gdxl.jpeg';
import moldDesignImg from '../../assets/images/gdxl2.jpeg';
import blowMoldsImg from '../../assets/images/gdxl1-2.jpeg';
import closureMoldsImg from '../../assets/images/gdxl3.jpeg';
import hotRunnerImg from '../../assets/images/gdxl4.jpeg';
import ContactCTA from '../../components/home/ContactCTA';

import imgP1 from '../../assets/images/Injection-molding-machine.png';
import imgP2 from '../../assets/images/Pet-beverage-filling-line.png';
import imgP3 from '../../assets/images/pet-preforn-mold.png';
import imgP4 from '../../assets/images/PET-material-lab-equipment.jpg';
import imgP5 from '../../assets/integratedplastics/IMH.jpg';
import imgP6 from '../../assets/images/caps-closures-mold.jpg';
import imgP7 from '../../assets/images/Medical-pharma-paxkaging-mold.jpg';
import imgP8 from '../../assets/images/Packaging&Systems.jpg';

import imgaa from '../../assets/images/aa.jpg';
import imgbb from '../../assets/images/bb.jpg';
import imgcc from '../../assets/images/cc.jpg';
import imgdd from '../../assets/images/dd.jpg';

const PetPreformMold = () => {
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

  const [activeTab, setActiveTab] = useState('features');
  const [activeInfoTab, setActiveInfoTab] = useState('company');
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      {/* Hero Banner */}
      {/* <section
        className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white"
        style={{
          backgroundImage: `url(${moldImg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '60vh',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-4">GDXL Precise Machinery</h1>
            <p className="text-xl">Advanced PET Mold Solutions</p>
          </div>
        </div>
      </section> */}
<section
  className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white h-64 sm:h-80 md:h-96 lg:h-[80vh] mt-20 sm:mt-12"
  style={{
    backgroundImage: `url(${window.innerWidth < 768 ? moldDesignImg : moldImg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Background overlay - only visible on mobile */}
  <div className="absolute inset-0 bg-black bg-opacity-20 sm:bg-opacity-0"></div>
</section>

      {/* Company Introduction */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">GDXL Precise Machinery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  GDXL Precise Machinery Co. Ltd (GDXL) is a high-tech enterprise providing molding equipment and services to the PET plastics industry. We design, manufacture, research and develop professional PET molds, including blow molds, preform injection molds and cap compression and injection molds.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Trust, Precision, Compatibility for Short cycle time and long life is the key of our leading growth.
                </p>
              </div>
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  When it comes to GDXL, PET Stream Inc. is the leading Business Partner for South Asia – India, Bangladesh, Nepal & Sri Lanka, also we are making our footprint in the continent of Africa for few of our leading Customers we are responsible for world wide.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  We with our Partner GDXL offer Satisfied prefabrication under Customer's exact demands in Liquid Container Package.
                </p>
              </div>
            </div>
            
            {/* Core Products Section - Left Right Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              
              {/* LEFT SIDE - Our Offering */}
              <div>
                <h4 className="text-xl font-bold text-blue-700 mb-6 text-center">Our Offering</h4>
                
                <div className="space-y-6">
                  {/* Preform Molds */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                    <div className="p-4">
                      <img 
                        src={moldDesignImg} 
                        alt="Preform Molds" 
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <h5 className="text-xl font-bold text-blue-600 mb-4">Preform Molds</h5>
                      <div className="text-gray-700 text-sm leading-relaxed">
                        <p className="mb-2"><strong>Applied To:</strong></p>
                        <p className="mb-1">32, 48, 56, 60, 72, 96, 128 and 144 cavities</p>
                        <p className="mb-1">Neck finishes: φ28mm (1716、1810 and 1881), 26/22、29/25、30/25 and φ38mm etc.</p>
                        <p>Compatible with: Netstal, Husky, Sacmi, SIPA, HUAYAN & Krauss Maffei</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Blow Molds */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                    <div className="p-4">
                      <img 
                        src={blowMoldsImg} 
                        alt="Blow Molds" 
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <h5 className="text-xl font-bold text-blue-600 mb-4">Blow Molds</h5>
                      <div className="text-gray-700 text-sm leading-relaxed">
                        <p className="mb-2"><strong>Applied To:</strong></p>
                        <p className="mb-1">PET containers for beverage industry (water, CSD, HR, Aseptic bottles)</p>
                        <p className="mb-1">Various containers for edible oil, condiment, cosmetic, pharmaceutical</p>
                        <p>Compatible with: SIDEL, KRONES, KHS, TECH-LONGM, NEWAMSTAR, SIPA, ASB, AOKI</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Closure Molds */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                    <div className="p-4">
                      <img 
                        src={closureMoldsImg} 
                        alt="Closure Molds" 
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <h5 className="text-xl font-bold text-blue-600 mb-4">Closure Molds</h5>
                      <div className="text-gray-700 text-sm leading-relaxed">
                        <p className="mb-2"><strong>Applied To:</strong></p>
                        <p className="mb-1">High-precision cap and closure manufacturing</p>
                        <p className="mb-1">Various thread specifications and sizes</p>
                        <p>Compatible with major injection molding machines</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hot Runner System */}
                  <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                    <div className="p-4">
                      <img 
                        src={hotRunnerImg} 
                        alt="Hot Runner System" 
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <h5 className="text-xl font-bold text-blue-600 mb-4">Hot Runner System</h5>
                      <div className="text-gray-700 text-sm leading-relaxed">
                        <p className="mb-2"><strong>Applied To:</strong></p>
                        <p className="mb-1">Preform injection machines and closure injection machines</p>
                        <p className="mb-1">Compatible with: Husky, Netstal, KM and SIPA</p>
                        <p>Capacity: Up to 144 cavities for preforms, 96 cavities for closures</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* RIGHT SIDE - Our Expertise */}
              <div>
                <h4 className="text-xl font-bold text-blue-700 mb-6 text-center">Our Expertise</h4>
                
                <div className="space-y-6">
                  {/* R&D Capabilities */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-4">
                      <img 
                        src={imgaa} 
                        alt="R&D Capabilities" 
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <h5 className="text-lg font-bold text-blue-600 mb-4">R&D Capabilities</h5>
                      <div className="text-gray-700 text-sm leading-relaxed">
                        <p className="mb-2"><strong>Applied To:</strong></p>
                        <p className="mb-1">Over 40 R&D engineers and 30 application engineers</p>
                        <p className="mb-1">Annual development: 2,000 bottle R&D studies, 500 preform R&D studies</p>
                        <p>PLM management platform for enhanced production efficiency</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Engineering Services */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-4">
                      <img 
                        src={imgbb} 
                        alt="Engineering Services" 
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <h5 className="text-lg font-bold text-blue-600 mb-4">Engineering Services</h5>
                      <div className="text-gray-700 text-sm leading-relaxed">
                        <p className="mb-2"><strong>Applied To:</strong></p>
                        <p className="mb-1">Complete PET container life cycle consultation</p>
                        <p className="mb-1">Technical training programs and mold maintenance systems</p>
                        <p>Quality control with 60+ high-precision inspection instruments</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Quality Assurance */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-4">
                      <img 
                        src={imgcc} 
                        alt="Quality Assurance" 
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <h5 className="text-lg font-bold text-blue-600 mb-4">Quality Assurance</h5>
                      <div className="text-gray-700 text-sm leading-relaxed">
                        <p className="mb-2"><strong>Applied To:</strong></p>
                        <p className="mb-1">ISO 9001:2015 certified quality management system</p>
                        <p className="mb-1">Advanced metallurgical analysis and material testing</p>
                        <p>Dimensional accuracy verification with CMM technology</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Global Support */}
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <div className="p-4">
                      <img 
                        src={imgdd} 
                        alt="Global Support" 
                        className="w-full h-48 object-cover rounded-lg mb-4"
                      />
                      <h5 className="text-lg font-bold text-blue-600 mb-4">Global Support</h5>
                      <div className="text-gray-700 text-sm leading-relaxed">
                        <p className="mb-2"><strong>Applied To:</strong></p>
                        <p className="mb-1">24/7 technical support and remote diagnostics</p>
                        <p className="mb-1">On-site installation and commissioning services</p>
                        <p>Comprehensive spare parts inventory management</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>



            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="250" 
                    src="https://www.youtube.com/embed/Kacv0wWB81w?si=s9SkC-N1ZMiKiD-s" 
                  title="Newamstar Ultra-Clean Blowing-Filling-Capping Combiblock #Packaging #ProductionLine #Combiblock" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full rounded-t-2xl"
                ></iframe>
              </div>
          
            </div>



            {/* What Makes Us Different Section */}
            <div className="mb-8 mt-10">
              <h3 className="text-2xl font-semibold mb-6 text-blue-800">WHAT MAKES US DIFFERENT?</h3>
              
              {/* Info Tabs */}
              <div className="flex flex-wrap border-b border-gray-200 mb-6">
                <button 
                  className={`py-3 px-6 font-medium ${activeInfoTab === 'company' 
                    ? 'border-b-2 border-green-500 text-green-600' 
                    : 'text-gray-600 hover:text-green-500'}`}
                  onClick={() => setActiveInfoTab('company')}
                >
                  GDXL Precise Machinery Company Limited
                </button>
                <button 
                  className={`py-3 px-6 font-medium ${activeInfoTab === 'preform' 
                    ? 'border-b-2 border-green-500 text-green-600' 
                    : 'text-gray-600 hover:text-green-500'}`}
                  onClick={() => setActiveInfoTab('preform')}
                >
                  GDXL Preform Mold
                </button>
              </div>
              
              {/* Company Tab */}
              {activeInfoTab === 'company' && (
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">High-tech enterprise of molding equipment & service to the PET plastic industry</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">GDXL was Founded in 1993 with its own R&D, developing more than 2000 projects every year</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">More than 60,000 cavities of GDXL molds are applied to global market</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Devoted, trustworthy, respected partner for our customers</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">One of the best PET mold suppliers in the world</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Higher efficiency and longer life time is the key feature of GDXL mold</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Offer lowest cycle time with NETSTAL machine on any preform size and weight</span>
                    </li>
                  </ul>
                </div>
              )}
              
              {/* Preform Tab */}
              {activeInfoTab === 'preform' && (
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h5 className="font-semibold text-gray-800 mb-4">
                    Our Customers Include World's Renowned Preform Convertor And Beverage Producer.
                    GDXL Preform Molds Offer Preform Of-
                  </h5>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">No crystallinity or scratches</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Minimal eccentricity</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">High surface quality</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">High stability</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Low Acetaldehyde (AA) level</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Maximum energy effectiveness</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Constant weight</span>
                    </li>
                    <li className="flex items-start">
                      <div className="text-green-500 mr-3 mt-1">➤</div>
                      <span className="text-gray-700">Seamless parting lines</span>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Expertise Section */}
            <div className="mb-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <div className="text-blue-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Advanced Design</h4>
                  <p className="text-gray-600">
                    State-of-the-art mold design utilizing the latest CAD/CAM technologies for optimal performance.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <div className="text-blue-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Precision Manufacturing</h4>
                  <p className="text-gray-600">
                    High-precision machining and rigorous quality control for exceptional mold quality.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm text-center">
                  <div className="text-blue-600 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-3">Superior Performance</h4>
                  <p className="text-gray-600">
                    Optimized cooling and material distribution for fast cycles and consistent preforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-10 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10">
            <span className="text-sm font-bold text-blue-600 uppercase tracking-wide mb-3 block">
              Explore Our Portfolio
            </span>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-900 via-blue-700 to-indigo-600 bg-clip-text text-transparent mb-6">
              Featured Products
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Discover our comprehensive portfolio of industry-leading solutions engineered for 
              <span className="text-blue-700 font-semibold"> excellence, innovation, and reliability</span>
            </p>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* Injection Molding Machine */}
            <div 
              onClick={() => handleNavigation('/products/injection-molding')}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-200"
            >
              <div className="absolute top-3 right-3 z-10">
                <div className="bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Featured
                </div>
              </div>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={imgP4}
                  alt="Lab Equipment" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Lab Equipment
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  State-of-the-art laboratory testing and analysis equipment for quality assurance
                </p>
                <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white px-4 py-2 rounded-lg font-semibold text-sm text-center">
                  Explore Details
                </div>
              </div>
            </div>

            {/* Integrated Plastics */}
            <div 
              onClick={() => handleNavigation('/products/integrated-plastics')}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-200"
            >
              <div className="absolute top-3 right-3 z-10">
                <div className="bg-teal-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Exclusive
                </div>
              </div>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={imgP5}
                  alt="Integrated Plastics" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Integrated Plastics
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Comprehensive plastic solutions with integrated manufacturing processes
                </p>
                <div className="bg-gradient-to-r from-teal-600 to-teal-700 text-white px-4 py-2 rounded-lg font-semibold text-sm text-center">
                  Explore Details
                </div>
              </div>
            </div>

            {/* Caps & Closures Mold */}
            <div 
              onClick={() => handleNavigation('/products/caps-mold')}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-200"
            >
              <div className="absolute top-3 right-3 z-10">
                <div className="bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Precision
                </div>
              </div>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={imgP6}
                  alt="Caps & Closures Mold" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Caps & Closures Mold
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Specialized molds for high-quality caps and closures with precise threading
                </p>
                <div className="bg-gradient-to-r from-red-600 to-red-700 text-white px-4 py-2 rounded-lg font-semibold text-sm text-center">
                  Explore Details
                </div>
              </div>
            </div>

            {/* Medical Pharma Packaging Mold */}
            <div 
              onClick={() => handleNavigation('/products/medical-packaging')}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-200"
            >
              <div className="absolute top-3 right-3 z-10">
                <div className="bg-indigo-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Medical
                </div>
              </div>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={imgP7}
                  alt="Medical Pharma Packaging Mold" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Medical Pharma Packaging
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Specialized molds for pharmaceutical and medical packaging applications
                </p>
                <div className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-4 py-2 rounded-lg font-semibold text-sm text-center">
                  Explore Details
                </div>
              </div>
            </div>

            {/* Packaging & Systems */}
            <div 
              onClick={() => handleNavigation('/products/packaging-systems')}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-200"
            >
              <div className="absolute top-3 right-3 z-10">
                <div className="bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-bold">
                  Complete
                </div>
              </div>
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={imgP8}
                  alt="Packaging & Systems" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  Packaging & Systems
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Comprehensive packaging solutions including colorants, additives and complete systems
                </p>
                <div className="bg-gradient-to-r from-pink-600 to-pink-700 text-white px-4 py-2 rounded-lg font-semibold text-sm text-center">
                  Explore Details
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

export default PetPreformMold;
            