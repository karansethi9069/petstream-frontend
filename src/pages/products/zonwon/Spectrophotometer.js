import React, { useState , useEffect} from 'react';
import ContactCTA from '../../../components/home/ContactCTA'; // Import from your existing file
import factoryImage from '../../../assets/images/zonwo-banner.jpg'; // Import from your existing file

// Import product images - you'll need to add these to your assets folder
import spectrophotometerImage from '../../../assets/images/Spectrophotometer.jpg';
import instrumentAdvantages1Image from '../../../assets/images/Instrument-Advantages-1.jpg';
import instrumentAdvantages2Image from '../../../assets/images/Instrument-Advantages-2.jpg';
import dualOpticalImage from '../../../assets/images/Dual-Optical.jpg';
import sceMeasurementImage from '../../../assets/images/SCE-measurement.jpg';
import rotatableTouchImage from '../../../assets/images/Rotatable-touch.jpg';
import transmittanceMeasurementImage from '../../../assets/images/Transmittance-Measurement.jpg';
import differentKindsImage from '../../../assets/images/Different-Kinds.jpg';
import accessoryDrawerImage from '../../../assets/images/Accessory-Drawer.jpg';
import switchableReflectanceImage from '../../../assets/images/Switchable-Reflectance-Apertures.jpg';
import uvTestModesImage from '../../../assets/images/UV-Test-Modes.jpg';

const SpectrophotometerPage = () => {
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
    { parameter: 'Geometry', value: 'Reflectance D/8° and Transmittance D/0°' },
    { parameter: 'Illumination', value: 'UV included / UV excluded' },
    { parameter: 'Screen', value: '7 inches touch screen' },
    { parameter: 'Operating System', value: 'Android' },
    { parameter: 'Wavelength Range', value: 'Full wavelength range' },
    { parameter: 'Memory', value: 'Large storage memory' },
    { parameter: 'Software', value: 'PC software included' },
    { parameter: 'Measurement Modes', value: 'SCI/SCE, SCI+SCE supported' }
  ];

  const features = [
    {
      title: 'Dual Optical Paths',
      description: 'Spectrum analysis technology for accuracy',
      icon: '🔬'
    },
    {
      title: 'Versatile Measurement',
      description: 'Both opaque and transparent materials',
      icon: '📊'
    },
    {
      title: 'Smart Interface',
      description: 'Android OS with touch screen',
      icon: '📱'
    },
    {
      title: 'UV Test Modes',
      description: 'Four modes for fluorescence materials',
      icon: '🌟'
    }
  ];

  const advantages = [
    {
      id: 'dual-geometry',
      title: 'Instrument Advantages',
      description: 'Adopts reflectance D/8° and transmittance D/0° geometry to measure both opaque and transparent materials.',
      images: [instrumentAdvantages1Image, instrumentAdvantages2Image],
      layout: 'double'
    },
    {
      id: 'dual-optical',
      title: 'Dual Optical Paths Spectrum Analysis Technology',
      description: 'This technology can simultaneous access to both measurement and instrument internal environmental reference data to ensure instrument accuracy and long-term stability.',
      image: dualOpticalImage,
      layout: 'single'
    },
    {
      id: 'sci-sce',
      title: 'Compatible with SCI/SCE measurement, Support SCI+SCE Measurement',
      description: 'Instrument adopts D/8 geometry which is highly recommends by CIE (International Commission on Illumination) to meet color measurement of different industries. It supports both SCI (specula component included) and SCE (specular component excluded) mode for better detect of color change. Fast SCI+SCE measurement, test time only need less than 4s.',
      image: sceMeasurementImage,
      layout: 'single'
    },
    {
      id: 'rotatable-screen',
      title: 'Rotatable Touch Screen with Android Operate System',
      description: 'Screen position and direction can be adjusted according to the instrument test methods.',
      image: rotatableTouchImage,
      layout: 'single'
    },
    {
      id: 'transmittance',
      title: 'Open Transmittance Measurement Area, no limit on sample size',
      description: '',
      image: transmittanceMeasurementImage,
      layout: 'single'
    },
    {
      id: 'accessories',
      title: 'Different Kinds of Accessories for simple measurement',
      description: 'It contains 15 kinds of standard and 12 kinds of optional accessories to measure different kinds of materials',
      image: differentKindsImage,
      layout: 'single'
    },
    {
      id: 'drawer',
      title: 'Accessory Drawer to Protect and Store Accessories',
      description: '',
      image: accessoryDrawerImage,
      layout: 'single'
    },
    {
      id: 'apertures',
      title: 'Switchable Reflectance Apertures',
      description: '',
      image: switchableReflectanceImage,
      layout: 'single'
    },
    {
      id: 'uv-modes',
      title: 'Four Kinds of UV Test Modes for Fluorescence Material Measurement',
      description: '',
      image: uvTestModesImage,
      layout: 'single'
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Spectrophotometer</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Smart, simple operation and highly precise spectrophotometer for color analysis
            </p>
          </div>

          {/* Main Product Section */}
          <div className="mb-16">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                {/* Content Side */}
                <div>
                  <h3 className="text-2xl font-bold text-green-500 mb-4">
                    ZonwonCS-820P - for Reflectance and Transmittance
                  </h3>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    ZonwonCS-820P is a smart, simple operation and highly precise spectrophotometer. 
                    It adopts 7 inches touch screen, full wavelength range, Android operating system. 
                    Illumination: reflectance D/8° and transmittance D/0°(UV included / UV excluded), 
                    high accuracy for color measurement, large storage memory, PC software, because of 
                    the above advantages, it is used in the laboratory for color analysis and communication.
                  </p>
                </div>

                {/* Image Side */}
                <div className="flex justify-center items-center">
                  <div className="w-full max-w-md">
                    <img 
                      src={spectrophotometerImage} 
                      alt="Spectrophotometer" 
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Advantages Section */}
          {advantages.map((advantage, index) => (
            <div key={advantage.id} className="mb-12">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden p-8">
                <h3 className="text-2xl font-bold text-green-500 mb-4">{advantage.title}</h3>
                {advantage.description && (
                  <p className="text-gray-700 mb-6">{advantage.description}</p>
                )}
                
                {advantage.layout === 'double' ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {advantage.images.map((img, idx) => (
                      <img 
                        key={idx}
                        src={img} 
                        alt={`${advantage.title} ${idx + 1}`} 
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    ))}
                  </div>
                ) : (
                  <div className="flex justify-center">
                    <img 
                      src={advantage.image} 
                      alt={advantage.title} 
                      className="max-w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}

          {/* Key Features Section */}
          {/* <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg text-center">
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-700 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div> */}

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
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Product Overview</h3>
                <p className="text-gray-700 mb-4">
                  The ZonwonCS-820P spectrophotometer represents the pinnacle of color measurement technology, 
                  combining advanced optical design with user-friendly interface. This instrument is designed 
                  for professionals who demand accuracy and reliability in their color analysis work.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Key Benefits</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>High precision color measurement with D/8° geometry</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Versatile measurement of both opaque and transparent materials</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Android operating system for intuitive operation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Comprehensive accessory set for various applications</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Target Industries</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Plastics and polymer manufacturing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Paint and coating industries</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Textile and fabric production</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Quality control laboratories</span>
                      </li>
                    </ul>
                  </div>
                </div>
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
                      <span className="text-gray-600 text-right max-w-md">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Applications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Material Testing</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Color quality control in production</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Raw material inspection</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Color matching and formulation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Batch consistency verification</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Research & Development</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>New product development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Color standard development</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Competitive product analysis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Fluorescence material studies</span>
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

export default SpectrophotometerPage;