import React, { useState , useEffect } from 'react';
import ContactCTA from '../../../components/home/ContactCTA'; // Import from your existing file
import factoryImage from '../../../assets/images/zonwo-banner.jpg'; // Import from your existing file

// Import product images
import balanceImage from '../../../assets/images/balance.jpg';
import preformTestImage from '../../../assets/images/Preform-Test.jpg';
import ay100Image from '../../../assets/images/AY-100.jpg';
import verticalityTesterImage from '../../../assets/images/Verticality-Tester.jpg';
import wallThicknessImage from '../../../assets/images/Wall-thickness.jpg';
import insideDiameterImage from '../../../assets/images/Inside-Diameter.jpg';
import lightBoxImage from '../../../assets/images/Humidity-Chamber.jpg'; // Using humidity chamber image as placeholder
import stressTestImage from '../../../assets/images/Stress-test.jpg';

const PreformTestPage = () => {
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
    { parameter: 'Balance Application', value: 'Preform weight calculation' },
    { parameter: 'Profile Projector Type', value: 'One button AY-100' },
    { parameter: 'Light Box Configuration', value: 'D65, TL84, F, UV four light sources' },
    { parameter: 'Light Box Weight', value: '28Kg' },
    { parameter: 'Viewing Field', value: '200 x 200 mm' },
    { parameter: 'Overall Size', value: '300 x 335 x 330 mm' },
    { parameter: 'Main Voltage', value: '220 V AC' },
    { parameter: 'Light Source', value: 'LED (White and Sodium light)' }
  ];

  const applications = [
    {
      title: 'Weight Analysis',
      description: 'Precise preform weight calculation and measurement',
      icon: '⚖️'
    },
    {
      title: 'Dimension Testing',
      description: 'Profile projection and dimensional analysis',
      icon: '📐'
    },
    {
      title: 'Quality Control',
      description: 'Wall thickness and diameter testing',
      icon: '🔍'
    },
    {
      title: 'Stress Analysis',
      description: 'Internal strain distribution evaluation',
      icon: '🔬'
    }
  ];

  const equipment = [
    {
      id: 'balance',
      title: 'Balance',
      description: 'Preform weight calculation',
      image: balanceImage,
      application: 'Preform weight calculation',
      imagePosition: 'right'
    },
    {
      id: 'profile-projector',
      title: 'Profile Projector',
      description: 'Dimensional measurement and analysis',
      image: preformTestImage,
      details: 'Professional profile projection system for precise measurements.',
      imagePosition: 'left'
    },
    {
      id: 'ay-100',
      title: 'One Button Profile Projector AY-100',
      description: 'Advanced one-button operation system',
      image: ay100Image,
      details: 'Simplified operation with advanced measurement capabilities.',
      imagePosition: 'right'
    },
    {
      id: 'verticality-tester',
      title: 'Verticality Tester',
      description: 'Preform alignment and verticality testing',
      image: verticalityTesterImage,
      details: 'Ensures proper preform alignment and straightness.',
      imagePosition: 'left'
    },
    {
      id: 'wall-thickness',
      title: 'Wall Thickness Tester (Preform)',
      description: 'Precise wall thickness measurement',
      image: wallThicknessImage,
      details: 'High-precision measurement of preform wall thickness.',
      imagePosition: 'right'
    },
    {
      id: 'inside-diameter',
      title: 'Inside Diameter of Neck Finish Tester',
      description: 'Neck finish dimensional testing',
      image: insideDiameterImage,
      details: 'Accurate measurement of neck finish internal dimensions.',
      imagePosition: 'left'
    },
    {
      id: 'light-box',
      title: 'Light Box T60',
      description: 'Color evaluation under different light sources',
      image: lightBoxImage,
      configuration: 'D65, TL84, F, UV four light sources',
      weight: '28Kg',
      advantages: [
        'Displays the usage time and total time of each light source',
        'Automatic light source switching, with metamerism function',
        'No warm-up and no flicker for fast and reliable color evaluation',
        'Low energy consumption, no heat generation',
        'Small size, easy to use, low price'
      ],
      lightSources: [
        { name: 'D65 Standard Artificial Daylight', temp: '6500K', power: '18W' },
        { name: 'TL84 European, Japanese, Chinese store light source', temp: '4000K', power: '18W' },
        { name: 'F family hotel lights, colorimetric reference light source', temp: '2700K', power: '40W' },
        { name: 'UV light source (Ultra-Violet)', wavelength: '365nm', power: '18W' }
      ],
      imagePosition: 'right'
    },
    {
      id: 'stress-test',
      title: 'Stress Test (Polariscope Strain Viewer)',
      subtitle: 'Preform Polariscope',
      description: 'Internal strain analysis using polarization interference',
      image: stressTestImage,
      principle: 'Polarization interference',
      specifications: {
        'Viewing field': '200 x 200 mm',
        'Overall size': '300 x 335 x 330 mm',
        'Main voltage': '220 V AC',
        'Measuring space height': '234.5 mm',
        'Light source': 'LED (White and Sodium light)',
        'Gross Weight': '10KG',
        'Packed in 1 carton': '45 x 45 x 32cm'
      },
      applications: [
        'Designed to observe and analyze the distribution of internal strain in transparent plastic preforms',
        'Widely used in quality control of various plastic rough processing products and finished bottles'
      ],
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Preform Test Equipment</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive testing solutions for PET preform quality control and analysis
            </p>
          </div>

          {/* Equipment Grid */}
          {equipment.map((item, index) => (
            <div key={item.id} className="mb-16">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 p-8 ${item.imagePosition === 'left' ? 'lg:grid-flow-col-dense' : ''}`}>
                  
                  {/* Content Side */}
                  <div className={`${item.imagePosition === 'left' ? 'lg:col-start-2' : ''}`}>
                    <h3 className="text-2xl font-bold text-green-500 mb-4">{item.title}</h3>
                    {item.subtitle && (
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">{item.subtitle}</h4>
                    )}
                    
                    <div className="mb-6">
                      <p className="text-gray-700 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>
                      {item.details && (
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">
                          {item.details}
                        </p>
                      )}
                      {item.application && (
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">
                          <strong>Application:</strong> {item.application}
                        </p>
                      )}
                      {item.principle && (
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">
                          <strong>Principle:</strong> {item.principle}
                        </p>
                      )}
                      {item.configuration && (
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">
                          <strong>Configuration:</strong> {item.configuration}<br/>
                          <strong>Weight:</strong> {item.weight}
                        </p>
                      )}
                    </div>
                    
                    {item.advantages && (
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-green-500 mb-3">Advantages:</h5>
                        <ul className="space-y-2">
                          {item.advantages.map((advantage, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-blue-500 mr-2 mt-0.5">•</span>
                              <span className="text-gray-700 text-sm">{advantage}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {item.lightSources && (
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-green-500 mb-3">Light Source Description:</h5>
                        <div className="space-y-3">
                          {item.lightSources.map((source, idx) => (
                            <div key={idx} className="bg-gray-50 p-3 rounded-lg">
                              <p className="text-gray-700 text-sm font-medium">{source.name}</p>
                              {source.temp && <p className="text-gray-600 text-sm">Color temperature: {source.temp}</p>}
                              {source.wavelength && <p className="text-gray-600 text-sm">Wavelength: {source.wavelength}</p>}
                              <p className="text-gray-600 text-sm">Power: {source.power}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.specifications && (
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-green-500 mb-3">Specifications:</h5>
                        <div className="bg-gray-50 p-4 rounded-lg">
                          {Object.entries(item.specifications).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-center py-2 border-b border-gray-200 last:border-b-0">
                              <span className="font-medium text-gray-700">{key}:</span>
                              <span className="text-gray-600">{value}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.applications && (
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-green-500 mb-3">Application Area:</h5>
                        <div className="space-y-2">
                          {item.applications.map((app, idx) => (
                            <p key={idx} className="text-gray-700 text-sm leading-relaxed">{app}</p>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Image Side */}
                  <div className={`flex justify-center items-center ${item.imagePosition === 'left' ? 'lg:col-start-1' : ''}`}>
                    <div className="w-full max-w-md">
                      <img 
                        src={item.image} 
                        alt={`${item.title}`} 
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Applications & Testing Methods</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Testing Categories</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Weight measurement and calculation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Dimensional profile analysis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Wall thickness evaluation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Internal stress distribution</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Quality Control</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>PET preform manufacturing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Bottle production quality assurance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Research and development testing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Material strain analysis</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Contact Text */}
          <div className="text-center mb-8">
            <p className="text-gray-700 text-sm">
              Contact with us through our representative or submit a business inquiry online.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <ContactCTA />
    </div>
  );
};

export default PreformTestPage;