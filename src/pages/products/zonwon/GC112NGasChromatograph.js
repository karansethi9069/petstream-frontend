import React, { useState , useEffect } from 'react';
import ContactCTA from '../../../components/home/ContactCTA'; // Import from your existing file
import factoryImage from '../../../assets/images/zonwo-banner.jpg'; // Import from your existing file

// Import product images
import gasChromatographImage from '../../../assets/images/Gas-Chromatograph.jpg';

const GasChromatographPage = () => {
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
    { parameter: 'Control System', value: 'Standard PC control software with built-in workstation' },
    { parameter: 'Display', value: '7-inch color touch screen' },
    { parameter: 'Hardware System', value: 'Multi-core, 32-bit embedded hardware' },
    { parameter: 'Memory Function', value: '20 groups of sample test mode memory' },
    { parameter: 'Communication', value: 'RS232 port and LAN network port' },
    { parameter: 'External Events', value: '8 external event extension interfaces' },
    { parameter: 'Safety Features', value: 'Gas shortage alarm and heating control protection' },
    { parameter: 'Amplifier Type', value: 'Logarithmic amplifier with no cut-off value' }
  ];

  const applications = [
    {
      title: 'Chemical Analysis',
      description: 'Separation and analysis of chemical compounds',
      icon: '🧪'
    },
    {
      title: 'Quality Control',
      description: 'Analytical testing for manufacturing processes',
      icon: '📊'
    },
    {
      title: 'Research & Development',
      description: 'Advanced analytical research applications',
      icon: '🔬'
    },
    {
      title: 'Environmental Testing',
      description: 'Environmental sample analysis and monitoring',
      icon: '🌍'
    }
  ];

  const technicalFeatures = [
    'Standard PC control software, built-in chromatographic workstation, achieve PC side reverse control and touch screen synchronous bidirectional control.',
    '7-inch color touch screen, carrier/hydrogen/air channel flow (pressure) digital display.',
    'Gas shortage alarm protection function; Heating control protection function (when opening the door of the column box, the motor of the column box fan and the heating system will shut down automatically).',
    'Split flow/split ratio can be automatically controlled to save carrier gas.',
    'Configure automatic sampler installation and positioning interface to match automatic sampler of various specifications.',
    'The multi-core, 32-bit embedded hardware system ensures the reliable operation of the instrument.',
    'One-button start function, with 20 groups of sample test mode memory function.',
    'Using logarithmic amplifier, detection signal no cut-off value, good peak shape, extensible synchronous external trigger function, can be started by external signals (automatic sampler, thermal analyzer, etc.) at the same time the host and workstation.',
    'It has perfect system self-check function and fault automatic identification function.',
    'With 8 external event extension function interface, can be selected with various function control valves, and according to their own set time sequence work.',
    'RS232 communication port and LAN network port, and the configuration of data acquisition card.'
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">GC112N Gas Chromatograph</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced analytical instrument for separation and analysis across various fields
            </p>
          </div>

          {/* Main Product Section */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Left side - Content */}
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-green-500 mb-4">GC112N Gas Chromatograph</h3>
                
                <div className="mb-6">
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    GC112N Gas chromatograph is one of widely used analytical instruments. It has become an ideal analytical instrument for separation or analysis in various fields.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-green-500 mb-3">Technical Features</h5>
                  <div className="max-h-96 overflow-y-auto pr-2 space-y-3">
                    {technicalFeatures.map((feature, index) => (
                      <div key={index} className="flex items-start">
                        <span className="text-blue-500 mr-3 mt-1 flex-shrink-0">•</span>
                        <p className="text-gray-700 text-sm leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right side - Image */}
              <div className="order-1 lg:order-2 flex justify-center items-center">
                <div className="w-full max-w-md">
                  <img 
                    src={gasChromatographImage} 
                    alt="GC112N Gas Chromatograph" 
                    className="w-full h-auto rounded-lg shadow-md"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          {/* <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Key Advantages</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">🖥️</div>
                <h4 className="font-semibold text-gray-900 mb-2">Advanced Control</h4>
                <p className="text-gray-700 text-sm">PC control software with 7-inch color touch screen for intuitive operation</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">🛡️</div>
                <h4 className="font-semibold text-gray-900 mb-2">Safety Protection</h4>
                <p className="text-gray-700 text-sm">Gas shortage alarm and automatic heating control protection systems</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-red-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">⚡</div>
                <h4 className="font-semibold text-gray-900 mb-2">One-Button Start</h4>
                <p className="text-gray-700 text-sm">Simple operation with 20 groups of sample test mode memory</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">🔧</div>
                <h4 className="font-semibold text-gray-900 mb-2">Automatic Control</h4>
                <p className="text-gray-700 text-sm">Split flow/split ratio automatically controlled to save carrier gas</p>
              </div>
              
              <div className="bg-gradient-to-br from-yellow-50 to-green-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">🔍</div>
                <h4 className="font-semibold text-gray-900 mb-2">Self-Diagnostics</h4>
                <p className="text-gray-700 text-sm">Perfect system self-check and fault automatic identification</p>
              </div>
              
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-lg">
                <div className="text-3xl mb-3">🌐</div>
                <h4 className="font-semibold text-gray-900 mb-2">Connectivity</h4>
                <p className="text-gray-700 text-sm">RS232 and LAN network ports with data acquisition capabilities</p>
              </div>
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
                      <span className="text-gray-600 text-right max-w-md">{spec.value}</span>
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
                    <h4 className="text-xl font-semibold mb-4">Analytical Applications</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Chemical compound separation and identification</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Purity analysis and quality control</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Trace component detection</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Quantitative and qualitative analysis</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Industry Sectors</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Pharmaceutical and biotechnology</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Petrochemical and energy</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Food and beverage testing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Environmental monitoring</span>
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

export default GasChromatographPage;