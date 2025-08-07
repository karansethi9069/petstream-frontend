import React, { useState , useEffect } from 'react';
import m3 from '../../../assets/images/machine/m3.jpg';
import ContactCTA from '../../../components/home/ContactCTA';
const SpecializedCapsSeries = () => {
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

  const specializedTypes = [
    {
      title: "Oil Cap Systems",
      description: "Specialized capping for oil bottles with anti-tamper features and precise sealing",
      features: ["Leak-proof sealing", "Anti-tamper design", "High viscosity compatibility"],
      applications: ["Cooking oils", "Motor oils", "Lubricants", "Essential oils"],
      speed: "250-400 BPM",
      icon: "🛢️"
    },
    {
      title: "Roof Cap Systems", 
      description: "Advanced capping for flat-top and roof-style caps with secure fitting",
      features: ["Flat-top compatibility", "Precise alignment", "Secure press-fit"],
      applications: ["Beverage bottles", "Dairy products", "Health drinks", "Sports nutrition"],
      speed: "300-500 BPM",
      icon: "🏠"
    },
    {
      title: "Sports Cap Systems",
      description: "High-performance capping for pull-push sports caps and active lifestyle containers",
      features: ["Pull-push mechanism", "Flexible design", "Durability testing"],
      applications: ["Sports drinks", "Energy drinks", "Water bottles", "Protein shakes"],
      speed: "200-350 BPM", 
      icon: "⚽"
    }
  ];

  const specifications = [
    { label: "Processing Speed", value: "200-500 bottles/minute" },
    { label: "Cap Size Range", value: "20-120mm diameter" },
    { label: "Bottle Height", value: "80-350mm" },
    { label: "Power Consumption", value: "3.0-7.5 kW" },
    { label: "Air Consumption", value: "0.4-0.8 m³/min" },
    { label: "Machine Dimensions", value: "3500×1800×2200mm" },
    { label: "Weight", value: "1500-2500 kg" },
    { label: "Changeover Time", value: "15-30 minutes" }
  ];

  const advantages = [
    {
      title: "Multi-Format Compatibility",
      description: "Single machine handles multiple cap types with automated changeover systems",
      icon: "🔄",
      benefits: ["Reduced investment cost", "Space efficiency", "Simplified operations"]
    },
    {
      title: "Secure Sealing",
      description: "Advanced sealing technology ensures product integrity and shelf life",
      icon: "🔐",
      benefits: ["Leak prevention", "Product freshness", "Consumer safety"]
    },
    {
      title: "Fast Changeover",
      description: "Quick format changes minimize production downtime and maximize efficiency",
      icon: "⚡",
      benefits: ["Increased productivity", "Flexible production", "Reduced labor"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-purple-900 to-purple-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">SPECIALIZED CAPS SERIES</h1>
              <p className="text-xl mb-8 opacity-90">
                Advanced capping systems for oil bottles, roof caps, and sports bottles with 
                multi-format compatibility and secure sealing technology.
              </p>
        
            </div>
            <div className="flex justify-center">
              <img 
                src={m3} 
                alt="Specialized Caps Series" 
                className="max-w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Tabs */}
      <section className="bg-white shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap border-b">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'types', label: 'Cap Types' },
              { id: 'specifications', label: 'Specifications' },
              { id: 'advantages', label: 'Advantages' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'border-b-2 border-purple-600 text-purple-600'
                    : 'text-gray-600 hover:text-purple-600'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Specialized Capping Solutions</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The Buchtech Specialized Caps Series addresses the unique requirements of specialized 
                  packaging applications. Our systems handle complex cap designs including oil caps with 
                  anti-tamper features, roof-style caps with precise alignment, and sports caps with 
                  pull-push mechanisms.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Each system is engineered to handle the specific challenges of different cap types while 
                  maintaining high-speed operation and consistent quality. The modular design allows for 
                  easy adaptation to new cap formats and quick changeover between products.
                </p>
                
                <div className="bg-purple-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-purple-800">Key Capabilities</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-purple-700">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      Multi-format handling in single machine
                    </li>
                    <li className="flex items-center text-purple-700">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      Quick changeover between cap types
                    </li>
                    <li className="flex items-center text-purple-700">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      Specialized sealing mechanisms
                    </li>
                    <li className="flex items-center text-purple-700">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                      Anti-tamper feature integration
                    </li>
                  </ul>
                </div>

                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-orange-800">Production Flexibility</h3>
                  <p className="text-orange-700">
                    Our specialized capping systems provide unmatched flexibility for manufacturers 
                    dealing with diverse product lines and complex cap requirements.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Technical Innovation</h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-3 text-purple-800">Adaptive Mechanisms</h4>
                    <p className="text-gray-600">
                      Intelligent capping heads automatically adjust to different cap geometries and sealing requirements
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-3 text-purple-800">Quality Assurance</h4>
                    <p className="text-gray-600">
                      Integrated inspection systems verify proper cap placement and sealing integrity
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-3 text-purple-800">Smart Controls</h4>
                    <p className="text-gray-600">
                      Advanced PLC systems manage complex capping sequences and format changes
                    </p>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-purple-100 to-orange-100 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4">Performance Overview</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-600">3</div>
                      <div className="text-sm text-gray-600">Cap Types</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">500</div>
                      <div className="text-sm text-gray-600">Max BPM</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">15min</div>
                      <div className="text-sm text-gray-600">Changeover</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'types' && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Specialized Cap Technologies</h2>
              <div className="space-y-8">
                {specializedTypes.map((type, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                      <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-8">
                        <div className="text-4xl mb-4">{type.icon}</div>
                        <h3 className="text-2xl font-bold mb-2">{type.title}</h3>
                        <p className="opacity-90 mb-4">{type.description}</p>
                        <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full inline-block">
                          <span className="text-sm font-medium">{type.speed}</span>
                        </div>
                      </div>
                      
                      <div className="p-8">
                        <h4 className="text-lg font-semibold mb-4 text-gray-800">Key Features</h4>
                        <ul className="space-y-2">
                          {type.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center">
                              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                              <span className="text-gray-600">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="p-8 bg-gray-50">
                        <h4 className="text-lg font-semibold mb-4 text-gray-800">Applications</h4>
                        <ul className="space-y-2">
                          {type.applications.map((app, appIndex) => (
                            <li key={appIndex} className="flex items-center">
                              <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                              <span className="text-gray-600">{app}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Cap Type Comparison</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-3 px-4">Cap Type</th>
                        <th className="text-left py-3 px-4">Complexity</th>
                        <th className="text-left py-3 px-4">Sealing Method</th>
                        <th className="text-left py-3 px-4">Special Features</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 font-medium">Oil Caps</td>
                        <td className="py-3 px-4">High</td>
                        <td className="py-3 px-4">Threaded + Gasket</td>
                        <td className="py-3 px-4">Anti-tamper, Leak-proof</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 font-medium">Roof Caps</td>
                        <td className="py-3 px-4">Medium</td>
                        <td className="py-3 px-4">Press-fit</td>
                        <td className="py-3 px-4">Flat design, Secure fit</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Sports Caps</td>
                        <td className="py-3 px-4">High</td>
                        <td className="py-3 px-4">Multi-component</td>
                        <td className="py-3 px-4">Pull-push, Ergonomic</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'specifications' && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-purple-600 text-white px-6 py-4">
                    <h3 className="text-xl font-semibold">System Specifications</h3>
                  </div>
                  <div className="p-6">
                    <table className="w-full">
                      <tbody>
                        {specifications.map((spec, index) => (
                          <tr key={index} className="border-b border-gray-100">
                            <td className="py-3 font-medium text-gray-700">{spec.label}</td>
                            <td className="py-3 text-gray-600">{spec.value}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Changeover Features</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                        Tool-free format parts exchange
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                        Automatic height adjustment
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                        Recipe-based parameter recall
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                        Quick-release capping heads
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                        Guided changeover procedure
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Quality Control</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                        Vision system for cap alignment
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                        Torque monitoring for threaded caps
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                        Force measurement for press-fit caps
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                        Leak detection capabilities
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                        Statistical process control
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Integration Options</h3>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="p-3 bg-gray-50 rounded">
                        <div className="font-medium text-sm">Upstream Integration</div>
                        <div className="text-xs text-gray-600">Filling machine synchronization</div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <div className="font-medium text-sm">Downstream Integration</div>
                        <div className="text-xs text-gray-600">Labeling and packaging lines</div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <div className="font-medium text-sm">Data Integration</div>
                        <div className="text-xs text-gray-600">MES/ERP system connectivity</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-purple-50 to-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Performance Metrics by Cap Type</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-2xl mb-2">🛢️</div>
                    <div className="text-lg font-semibold mb-2">Oil Caps</div>
                    <div className="text-3xl font-bold text-orange-600 mb-1">400</div>
                    <div className="text-sm text-gray-600">bottles/min</div>
                    <div className="text-xs text-gray-500 mt-2">Anti-tamper verified</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-2xl mb-2">🏠</div>
                    <div className="text-lg font-semibold mb-2">Roof Caps</div>
                    <div className="text-3xl font-bold text-blue-600 mb-1">500</div>
                    <div className="text-sm text-gray-600">bottles/min</div>
                    <div className="text-xs text-gray-500 mt-2">Precision aligned</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-2xl mb-2">⚽</div>
                    <div className="text-lg font-semibold mb-2">Sports Caps</div>
                    <div className="text-3xl font-bold text-green-600 mb-1">350</div>
                    <div className="text-sm text-gray-600">bottles/min</div>
                    <div className="text-xs text-gray-500 mt-2">Function tested</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'advantages' && (
            <div>
              <h2 className="text-3xl font-bold mb-8">System Advantages</h2>
              <div className="space-y-8">
                {advantages.map((advantage, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                      <div className="p-8">
                        <div className="flex items-center mb-4">
                          <div className="text-3xl mr-4">{advantage.icon}</div>
                          <h3 className="text-2xl font-bold text-gray-800">{advantage.title}</h3>
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">{advantage.description}</p>
                        <div className="space-y-2">
                          {advantage.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-center">
                              <span className="w-2 h-2 bg-purple-600 rounded-full mr-3"></span>
                              <span className="text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-8 flex items-center justify-center">
                        <div className="text-6xl opacity-20">{advantage.icon}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-gradient-to-r from-purple-50 to-orange-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Competitive Advantages</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">85%</div>
                    <div className="text-gray-700 font-medium">Faster Changeover</div>
                    <div className="text-sm text-gray-600">vs. traditional systems</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">3in1</div>
                    <div className="text-gray-700 font-medium">Multi-format</div>
                    <div className="text-sm text-gray-600">Single machine solution</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">99.5%</div>
                    <div className="text-gray-700 font-medium">Success Rate</div>
                    <div className="text-sm text-gray-600">Across all cap types</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">40%</div>
                    <div className="text-gray-700 font-medium">Space Savings</div>
                    <div className="text-sm text-gray-600">Compact design</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6">Customer Success Story</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-purple-800">Multi-Product Beverage Company</h4>
                    <p className="text-gray-700 mb-4">
                      A leading beverage manufacturer needed to handle three different cap types - 
                      standard screw caps, sports caps, and specialty oil caps - on the same production line.
                    </p>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Challenge:</h5>
                      <p className="text-sm text-gray-600 mb-3">
                        Multiple machines required for different cap types, resulting in high capital 
                        costs and complex production scheduling.
                      </p>
                      <h5 className="font-semibold mb-2">Solution:</h5>
                      <p className="text-sm text-gray-600">
                        Single Buchtech Specialized Caps Series machine with quick changeover capability.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-green-800">Results Achieved</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-green-50 rounded">
                        <span className="font-medium">Capital Cost Reduction</span>
                        <span className="text-green-600 font-bold">60%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-blue-50 rounded">
                        <span className="font-medium">Floor Space Savings</span>
                        <span className="text-blue-600 font-bold">45%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-orange-50 rounded">
                        <span className="font-medium">Changeover Time</span>
                        <span className="text-orange-600 font-bold">15 min</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-purple-50 rounded">
                        <span className="font-medium">Overall Efficiency</span>
                        <span className="text-purple-600 font-bold">+32%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

   {/* Call to Action Link */}
          <div className="text-center">
            <p className="text-gray-700 text-lg mb-4">
              Want to explore our range of competence? 
              <button 
                className="text-blue-600 hover:text-blue-800 underline ml-2 font-medium"
                onClick={() => window.open('http://www.buchtech.com/index', '_blank')}
              >
                click here
              </button>
            </p>
          </div>
 
 {/* CTA Section */}

      <ContactCTA />
    </div>
  );
};

export default SpecializedCapsSeries;