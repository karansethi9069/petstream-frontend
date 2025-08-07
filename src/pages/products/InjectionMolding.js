import React, { useState ,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContactCTA from '../../components/home/ContactCTA';

// Import your actual images
import img1 from '../../assets/images/Injection-molding-machine.png';
import img2 from '../../assets/images/net-elion-8-42.jpg';
import img3 from '../../assets/images/net-elion-med.jpg';
import img4 from '../../assets/images/net-elios-45-100.jpg';
import img5 from '../../assets/images/Drying-dehumidification-system.jpg';
import img6 from '../../assets/images/caps-closures-mold.jpg';
import img7 from '../../assets/images/netstal-1.jpg';

import imgP1 from '../../assets/images/Injection-molding-machine.png';
import imgP2 from '../../assets/images/Pet-beverage-filling-line.png';
import imgP3 from '../../assets/images/pet-preforn-mold.png';
import imgP4 from '../../assets/images/PET-material-lab-equipment.jpg';
import imgP5 from '../../assets/integratedplastics/IMH.jpg';
import imgP6 from '../../assets/images/caps-closures-mold.jpg';
import imgP7 from '../../assets/images/Medical-pharma-paxkaging-mold.jpg';
import imgP8 from '../../assets/images/Packaging&Systems.jpg';


const InjectionMolding = () => {
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
  const [activeTab, setActiveTab] = useState('pet');
  const navigate = useNavigate();

  const petBenefits = [
    "Clamping force: 3000 kN, 4000 kN, 5000 kN",
    "Up to 144 cavities",
    "Electric clamping unit with 1.9 s lock-to-lock time",
    "Lateral post-mold cooling unit with up to 4 post-cooling stations",
    "Energy-efficient, two-stage injection unit",
    "New PETX screw provides optimal processing of virgin PET, rPET and additives",
    "aXos controller of the latest generation with innovative operating concept",
    "SMART OPERATION for easier, safer and faster commissioning and production",
    "Lowest energy consumption in the market due to recuperation of kinetic energy"
  ];

  const eliosBenefits = [
    "Range of clamping forces 1200 - 10000 kN",
    "Specialised electronic clamping device",
    "High-performance injection units that are electric or hybrid", 
    "Specialised adaptive drive systems",
    "Modular system",
    "Maximum energy effectiveness",
    "Absolute accuracy",
    "Reliability and excellence"
  ];

  const medBenefits = [
    "Range of clamping forces: 800-2800 kN",
    "Electrical clamping apparatus for incredibly quick cycle times",
    "Integral force measurement for maximum shot-to-shot consistency and a stable part weight in an all-electric injection unit",
    "AXOS controller that is freely programmable for maximum flexibility and user-friendliness",
    "Due to the recovery of kinetic energy, there is maximum energy efficiency",
    "Maximum system availability and dependability", 
    "Intelligent Action: dependable integration of handling requirements into the machine controller"
  ];

  const handleNavigation = (path) => {
    navigate(path);
  };

  return (
    <>
      {/* Hero Banner */} 
     
{/* Hero Banner - Mobile Responsive Fix */}
{/* Hero Banner - Mobile Fixed (No CSS) */}
{/* Hero Banner - Mobile Fixed (Opacity only for mobile) */}
<section 
  className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white h-64 sm:h-80 md:h-96 lg:h-screen mt-20 sm:mt-0"
  style={{
    backgroundImage: `url(${img7})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Background overlay - only visible on mobile */}
  <div className="absolute inset-0 bg-black bg-opacity-20 sm:bg-opacity-0"></div>
</section>

      {/* Partner Info */}
      <section className="py-5">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">NETSTAL –</h2>
          <div className="space-y-6 text-lg">
            <p className="text-gray-700 leading-relaxed">
              In the field of Injection moulding machines, NETSTAL is the technology leader with high-performance machines that stand out in the market because of its Benchmarking speed, perfect precision and maximum reliability. Strategic application fields are in the packaging, Caps & Closures, Agriculture, Pharmaceutical, Optical, beverage industry as well as in medical technology.
            </p>
            <p className="text-gray-700 leading-relaxed">
              PSI works hand-in-hand with Netstal, the world-leading manufacturer of high-end injection moulding machines. When you partner with PSI, you're combining our expertise with Netstal's peerless machinery and decades of experience. This combination gives you a valuable competitive edge.
            </p>
            <p className="text-gray-700 leading-relaxed">
              At PSI, we offer you Netstal injection moulding machines exclusively, along with turnkey systems and tools which gives you individually adapted solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Machine Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Machine Categories</h2>
          
          <div className="space-y-10">
            {/* PET-LINE */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col justify-center">
                  <h3 className="text-xl lg:text-2xl font-bold text-blue-800 mb-4">
                    NETSTAL PET-LINE (side-entry)
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    With full compatibility with existing side-entry moulds and after-cooling stations, the first NETSTAL PET system with lateral removal is available. The brand-new PET-LINE also makes an impression thanks to its exceptional output, superb energy efficiency, optimised processing of PET recyclates, and new operating system.
                  </p>
                  <button
                    onClick={() => handleNavigation('/products/injection-molding/pet-line')}
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md w-fit cursor-pointer"
                  >
                    Know More
                  </button>
                </div>
                <div className="lg:col-span-2 relative h-56 lg:h-68">
                  <img 
                    src={img1} 
                    alt="NETSTAL PET-LINE" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* ELION */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="lg:col-span-2 relative h-56 lg:h-68 order-2 lg:order-1">
                  <img 
                    src={img2} 
                    alt="NETSTAL ELION" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col justify-center order-1 lg:order-2">
                  <h3 className="text-xl lg:text-2xl font-bold text-blue-800 mb-4">
                    NETSTAL ELION (800–4200 kN)
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Powerful, fast, and precise injection molding machine designed for high-performance applications across various industries. Built with cutting-edge technology to deliver exceptional results in demanding manufacturing environments.
                  </p>
                  <button
                    onClick={() => handleNavigation('/products/injection-molding/elion')}
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md w-fit cursor-pointer"
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>

            {/* ELION MEDICAL */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col justify-center">
                  <h3 className="text-xl lg:text-2xl font-bold text-blue-800 mb-4">
                    NETSTAL ELION MEDICAL (800–2800 kN)
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    The ELION MED-Kit injection moulding machines are the most widely used core element of complex production lines for pipettes, petri dishes, insulin pens, and all other plastic parts in medical technology.
                  </p>
                  <button
                    onClick={() => handleNavigation('/products/injection-molding/elionMED')}
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md w-fit cursor-pointer"
                  >
                    Know More
                  </button>
                </div>
                <div className="lg:col-span-2 relative h-56 lg:h-68">
                  <img 
                    src={img3} 
                    alt="NETSTAL ELION MEDICAL" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* ELIOS */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                <div className="lg:col-span-2 relative h-56 lg:h-68 order-2 lg:order-1">
                  <img 
                    src={img4} 
                    alt="NETSTAL ELIOS" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col justify-center order-1 lg:order-2">
                  <h3 className="text-xl lg:text-2xl font-bold text-blue-800 mb-4">
                    NETSTAL ELIOS (6500–10000 kN)
                  </h3>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Strong, quick, accurate, energy-saving, and user-focused: The ELIOS Series creates new standards for high-performance injection moulding with its cutting-edge drive technology.
                  </p>
                  <button
                    onClick={() => handleNavigation('/products/injection-molding/elios')}
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md w-fit cursor-pointer"
                  >
                    Know More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
            BENEFITS / WHAT MAKES US DIFFERENT?
          </h2>
          
          {/* Tab Navigation */}
          <div className="flex justify-center mb-10">
            <div className="bg-gray-100 p-1 rounded-lg inline-flex flex-wrap gap-1">
              <button
                onClick={() => setActiveTab('pet')}
                className={`px-5 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'pet'
                    ? 'bg-green-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                For PET Machine
              </button>
              <button
                onClick={() => setActiveTab('elios')}
                className={`px-5 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'elios'
                    ? 'bg-green-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                For ELIOS & ELION Or Non PET Machine
              </button>
              <button
                onClick={() => setActiveTab('med')}
                className={`px-5 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === 'med'
                    ? 'bg-green-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                }`}
              >
                Elion Med Kit
              </button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="max-w-4xl mx-auto">
            {activeTab === 'pet' && (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">
                  Benefits / What Make Us Different ? ( For PET Machine)
                </h3>
                <div className="grid gap-4">
                  {petBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                        <span className="text-white text-sm">○</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'elios' && (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">
                  Benefits / What Make Us Different ? ( For ELIOS & ELION Or Non PET Machine) -
                </h3>
                <div className="grid gap-4">
                  {eliosBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                        <span className="text-white text-sm">○</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'med' && (
              <div className="animate-fade-in">
                <h3 className="text-2xl font-bold text-green-600 mb-6 text-center">
                  Benefits / What Make Us Different ? ( Elion Med Kit ) -
                </h3>
                <div className="grid gap-4">
                  {medBenefits.map((benefit, index) => (
                    <div key={index} className="flex items-start bg-gray-50 p-4 rounded-lg">
                      <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0 mt-1 mr-4">
                        <span className="text-white text-sm">○</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{benefit}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Other Suggested Products Section */}
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
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  Exclusive Applications
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Integrated Plastics- Patented, recyclable plastic container solutions for market-ready products.
                </p>
                <div className="flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
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

export default InjectionMolding;