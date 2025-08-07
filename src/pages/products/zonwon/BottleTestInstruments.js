import React, { useState , useEffect } from 'react';
import ContactCTA from '../../../components/home/ContactCTA'; // Import from your existing file
import factoryImage from '../../../assets/images/zonwo-banner.jpg'; // Import from your existing file

// Import product images
import bottleTestImage from '../../../assets/images/Bottle-Test-Instruments.jpg';
import heightScaleImage from '../../../assets/images/Height-scale.jpg';
import verticalityTesterImage from '../../../assets/images/Verticality-tester.png';
import topLoadMeterImage from '../../../assets/images/Top-load-meter.jpg';
import balanceImage from '../../../assets/images/DTY-B5000.jpg';
import sealingTesterImage from '../../../assets/images/Sealing-Performance-Tester.jpg';
import humidityChamberImage from '../../../assets/images/Humidity-Chamber.jpg';
import refrigeratorImage from '../../../assets/images/Refrigerator.jpg';

const BottleTestInstrumentsPage = () => {
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
    { parameter: 'Bottle Size Range', value: 'Mitutoyo 0-300mm' },
    { parameter: 'Height Measurement', value: '0-300mm/0.01mm accuracy' },
    { parameter: 'Temperature Range', value: '0-20°C (Refrigerator)' },
    { parameter: 'Chamber Size', value: '1120*630*1980mm' },
    { parameter: 'Power Consumption', value: '322W/480W (energy saving/defogging)' },
    { parameter: 'Humidity Control', value: 'Constant Temperature & Humidity' },
    { parameter: 'Testing Standards', value: 'ISO, ASTM compliance' },
    { parameter: 'Display Type', value: 'Digital LCD screen' }
  ];

  const applications = [
    {
      title: 'Quality Control',
      description: 'Comprehensive bottle testing for manufacturing standards',
      icon: '🧪'
    },
    {
      title: 'Dimension Testing',
      description: 'Precise measurement of bottle dimensions and verticality',
      icon: '📏'
    },
    {
      title: 'Performance Testing',
      description: 'Top load, sealing performance, and structural integrity',
      icon: '🔬'
    },
    {
      title: 'Environmental Testing',
      description: 'Temperature and humidity controlled testing conditions',
      icon: '🌡️'
    }
  ];

  const instruments = [
    {
      id: 'bottle-size-tester',
      title: 'Bottle Size Tester',
      description: 'Mitutoyo 0-300mm',
      image: bottleTestImage,
      details: 'Precision measurement tool for accurate bottle dimension testing.',
      imagePosition: 'right'
    },
    {
      id: 'height-scale',
      title: 'Height Scale',
      description: 'Height scale 0-300mm/0.01',
      image: heightScaleImage,
      details: 'High-precision height measurement instrument with 0.01mm accuracy.',
      imagePosition: 'left'
    },
    {
      id: 'verticality-tester',
      title: 'Verticality Tester',
      description: 'Ensures proper bottle alignment and verticality',
      image: verticalityTesterImage,
      details: 'Essential for testing bottle straightness and alignment standards.',
      imagePosition: 'right'
    },
    {
      id: 'top-load-meter',
      title: 'Top Load Meter',
      description: 'Measures bottle structural strength under load',
      image: topLoadMeterImage,
      details: 'Tests the structural integrity and load-bearing capacity of bottles.',
      imagePosition: 'left'
    },
    {
      id: 'balance',
      title: 'Balance DTY-B5000',
      description: 'High-precision weighing instrument',
      image: balanceImage,
      details: 'Professional balance for accurate weight measurements in quality control.',
      imagePosition: 'right'
    },
    {
      id: 'sealing-tester',
      title: 'Sealing Performance Tester',
      description: 'Automatic version for comprehensive sealing tests',
      image: sealingTesterImage,
      features: [
        'Simple operation: place samples, press button, automatically finish test',
        'Say goodbye to piercing trouble, especially for crown caps',
        'Vacuum piercing head, easy to operate',
        'No gas leakage from tube connections',
        'Digital display and save measuring data'
      ],
      imagePosition: 'left'
    },
    {
      id: 'humidity-chamber',
      title: 'Humidity Chamber',
      subtitle: 'Constant Temperature & Humidity Chamber',
      description: 'Microprocessor controller with timing function',
      image: humidityChamberImage,
      features: [
        'Polished stainless-steel chamber with semicircular arcs',
        'Even air circulating system',
        'Imported temperature and humidity sensor',
        'Large LCD screen with programmable controller',
        'R134a refrigerant with imported compressor',
        '25mm instruction connection hole for easy testing',
        'Over temperature and difference alarms',
        'Compressor protection and safety systems',
        'Independent temperature-limiting alarm system',
        'RS485 connector for computer connection (optional)'
      ],
      imagePosition: 'right'
    },
    {
      id: 'refrigerator',
      title: 'Refrigerator',
      subtitle: 'Double door 1120 specification',
      description: 'Professional laboratory refrigeration unit',
      image: refrigeratorImage,
      specifications: {
        'Size': '1120*630*1980mm',
        'Power (energy saving/defogging)': '322/480W',
        'Temperature': '0-20°C',
        'Cooling': 'Air Cooled',
        'Defrost': 'Automatic Defrost'
      },
      imagePosition: 'left'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
     

      <section
  className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white h-64 sm:h-80 md:h-96 lg:h-[80vh] mt-20 sm:mt-12"
  style={{
    backgroundImage: `url(${factoryImage})`,
    backgroundSize: 'contain',
    backgroundPosition: 'center',
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
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Bottle Test Instruments</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive testing equipment for quality control and performance evaluation
            </p>
          </div>

          {/* Instruments Grid */}
          {instruments.map((instrument, index) => (
            <div key={instrument.id} className="mb-16">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 ${instrument.imagePosition === 'left' ? 'lg:grid-flow-col-dense' : ''}`}>
                  
                  {/* Content Side */}
                  <div className={`${instrument.imagePosition === 'left' ? 'lg:col-start-2' : ''}`}>
                    <h3 className="text-2xl font-bold text-green-500 mb-4">{instrument.title}</h3>
                    {instrument.subtitle && (
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">{instrument.subtitle}</h4>
                    )}
                    
                    <div className="mb-6">
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        {instrument.description}
                      </p>
                      {instrument.details && (
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">
                          {instrument.details}
                        </p>
                      )}
                    </div>
                    
                    {instrument.features && (
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-green-500 mb-3">
                          {instrument.id === 'sealing-tester' ? 'Advantages:' : 'Features:'}
                        </h5>
                        <ul className="space-y-2">
                          {instrument.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-blue-500 mr-2 mt-0.5">•</span>
                              <span className="text-gray-700 text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {instrument.specifications && (
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-green-500 mb-3">Specifications:</h5>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          {Object.entries(instrument.specifications).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                              <span className="font-medium text-gray-700">{key}:</span>
                              <span className="text-gray-600">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Image Side */}
                  <div className={`flex justify-center items-center ${instrument.imagePosition === 'left' ? 'lg:col-start-1' : ''}`}>
                    <div className="w-full max-w-md">
                      <img 
                        src={instrument.image} 
                        alt={`${instrument.title}`} 
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          {/* Tab Navigation */}
          <div className="mb-12">
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
          </div>

          {/* Tab Content */}
          <div className="mb-16">
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
                      <span className="text-gray-600 text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Applications & Testing Types</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Testing Categories</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Dimensional accuracy testing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Structural integrity evaluation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Sealing performance verification</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Environmental stress testing</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Industry Applications</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Beverage bottle manufacturing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Pharmaceutical packaging</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Food packaging quality control</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Laboratory research and development</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

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

export default BottleTestInstrumentsPage;