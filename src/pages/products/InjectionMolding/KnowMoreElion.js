// Updated NetstatPetLine.js - Elion Style
import React, { useState , useEffect } from 'react';
import ContactCTA from '../../../components/home/ContactCTA'; // Import from your existing file
import factoryImage from '../../../assets/images/know_more/elion.webp'; // Import from your existing file
import petLineImage from '../../../assets/images/know_more/img2.png'; // Import from your existing file


const NetstatPetLine = () => {
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
  const [activeTab, setActiveTab] = useState('overview');

  const specifications = [
    { parameter: 'Clamping Force', value: '1200 - 6000 kN' },
    { parameter: 'Shot Weight', value: '28 - 2800 g' },
    { parameter: 'Injection Pressure', value: 'up to 2400 bar' },
    { parameter: 'Injection Speed', value: 'up to 500 mm/s' },
    { parameter: 'Screw Diameter', value: '22 - 70 mm' },
    { parameter: 'Dry Cycle Time', value: '< 2.5 s' },
    { parameter: 'Energy Consumption', value: 'up to 40% reduction' },
    { parameter: 'Platen Sizes', value: '13.5" & 24" available' }
  ];

  const applications = [
    {
      title: 'PET Preforms',
      description: 'High-precision preform production for beverage bottles',
      icon: '🍶'
    },
    {
      title: 'Caps & Closures',
      description: 'Superior quality bottle caps and closure systems',
      icon: '🧢'
    },
    {
      title: 'Food Packaging',
      description: 'Safe and reliable food-grade packaging solutions',
      icon: '📦'
    },
    {
      title: 'Medical Containers',
      description: 'Sterile containers for pharmaceutical applications',
      icon: '💊'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
<section
  className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white h-64 sm:h-80 md:h-96 lg:h-[75vh] mt-20 sm:mt-0"
  style={{
    backgroundImage: `url(${factoryImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'right',
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* Background overlay - only visible on mobile */}
  <div className="absolute inset-0 bg-black bg-opacity-20 sm:bg-opacity-0"></div>
</section>

      {/* Main Content */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Title Section */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 uppercase tracking-wide">
              THE HIGH-PRECISION, HIGH-SPEED AND HIGH-PERFORMANCE INJECTION MOLDING MACHINE
            </h2>
            <p className="text-base text-gray-700 leading-relaxed max-w-5xl">
              <span className="text-red-600 font-semibold">Fast, precise, reliable, user friendly and operationally efficient.</span> These are the prime attributes of our Elion series. <span className="text-blue-600 font-semibold">Superlative performance and optimal energy efficiency.</span> Thanks to a consistent modular design and a variety of equipment options, the Elion can be optimally adapted to meet your needs.
            </p>
          </div>

          {/* Highlights Section */}
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left side - Machine Image */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative">
                  <img 
                    src={petLineImage} 
                    alt="NETSTAL PET-LINE Machine" 
                    className="w-full max-w-sm h-auto rounded-full"
                  />
                </div>
              </div>

              {/* Right side - Highlights */}
              <div>
                <h3 className="text-2xl font-bold text-blue-600 mb-8">Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4">
                  {/* Left Column */}
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 text-lg mt-0.5">•</span>
                      <span className="text-gray-700 text-sm leading-tight">Clamping force range 800 - 4200 kN</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 text-lg mt-0.5">•</span>
                      <span className="text-gray-700 text-sm leading-tight">Exceptional electric clamping unit</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 text-lg mt-0.5">•</span>
                      <span className="text-gray-700 text-sm leading-tight">Electric or hybrid high-performance injection unit</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 text-lg mt-0.5">•</span>
                      <span className="text-gray-700 text-sm leading-tight">Dedicated adaptive drive units</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 text-lg mt-0.5">•</span>
                      <span className="text-gray-700 text-sm leading-tight">Modular system</span>
                    </div>
                  </div>
                  
                  {/* Right Column */}
                  <div className="space-y-3">
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 text-lg mt-0.5">•</span>
                      <span className="text-gray-700 text-sm leading-tight">Superlative performance potential</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 text-lg mt-0.5">•</span>
                      <span className="text-gray-700 text-sm leading-tight">Optimal energy efficiency</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 text-lg mt-0.5">•</span>
                      <span className="text-gray-700 text-sm leading-tight">Absolute precision</span>
                    </div>
                    <div className="flex items-start space-x-2">
                      <span className="text-red-500 text-lg mt-0.5">•</span>
                      <span className="text-gray-700 text-sm leading-tight">Swiss quality and reliability</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* YouTube Video Section */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/aDhacTRNTFE?si=AzXLQAism5PSky3o"
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

          {/* Tab Navigation */}
          {/* <div className="mb-12">
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                {['overview', 'specifications', 'applications'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors duration-200 ${
                      activeTab === tab
                        ? 'border-green-500 text-green-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </nav>
            </div>
          </div> */}

          {/* Tab Content */}
          {/* <div className="mb-16">
            {activeTab === 'overview' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {applications.map((app, index) => (
                  <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                    <div className="text-4xl mb-4">{app.icon}</div>
                    <h4 className="text-xl font-bold text-gray-900 mb-3">{app.title}</h4>
                    <p className="text-gray-600">{app.description}</p>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="px-6 py-4 bg-gray-50 border-b">
                  <h3 className="text-xl font-bold text-gray-900">Technical Specifications</h3>
                </div>
                <div className="divide-y divide-gray-200">
                  {specifications.map((spec, index) => (
                    <div key={index} className="px-6 py-4 flex justify-between items-center hover:bg-gray-50">
                      <span className="font-medium text-gray-900">{spec.parameter}</span>
                      <span className="text-gray-600">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Applications & Industries</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Primary Applications</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>PET preform production for beverage industry</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Caps and closures manufacturing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Food packaging containers</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Medical and pharmaceutical packaging</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Key Industries</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Beverage & Bottling</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Food & Agriculture</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Pharmaceutical & Medical</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Consumer Packaging</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div> */}

          {/* Contact Text */}
          {/* <div className="text-center mb-8">
            <p className="text-gray-700 text-sm">
              Contact with us through our representative or submit a business inquiry online.
            </p>
          </div> */}
        </div>
      </section>

      {/* Call to Action */}
      <ContactCTA />
    </div>
  );
};

export default NetstatPetLine;