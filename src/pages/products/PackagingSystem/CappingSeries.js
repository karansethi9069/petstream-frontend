import React, { useState , useEffect} from 'react';
import m2 from '../../../assets/images/machine/m2.jpg';
import ContactCTA from '../../../components/home/ContactCTA';
const CappingSeries = () => {
  const [activeTab, setActiveTab] = useState('overview');
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
  const specifications = [
    { label: "Capping Speed", value: "150-500 bottles/minute" },
    { label: "Bottle Size Range", value: "50-2000ml capacity" },
    { label: "Cap Diameter", value: "15-110mm" },
    { label: "Torque Range", value: "0.5-8.0 N·m" },
    { label: "Power Consumption", value: "2.2-5.5 kW" },
    { label: "Machine Dimensions", value: "3000×1500×2000mm" },
    { label: "Weight", value: "1200-2000 kg" },
    { label: "Accuracy", value: "±0.1 N·m" }
  ];

  const cappingTypes = [
    {
      title: "Screw Capping",
      description: "Precise torque control for threaded caps",
      applications: ["Beverage bottles", "Pharmaceutical containers", "Food jars"],
      icon: "🔄"
    },
    {
      title: "Snap Capping",
      description: "Reliable press-fit capping for snap-on caps",
      applications: ["Cosmetic bottles", "Chemical containers", "Sports drinks"],
      icon: "📌"
    },
    {
      title: "Crimp Capping",
      description: "Secure crimping for aluminum caps",
      applications: ["Wine bottles", "Pharmaceutical vials", "Perfume bottles"],
      icon: "🔒"
    },
    {
      title: "ROPP Capping",
      description: "Roll-On Pilfer Proof capping technology",
      applications: ["Spirits", "Liqueurs", "Premium beverages"],
      icon: "🛡️"
    }
  ];

  const features = [
    {
      title: "Versatile Compatibility",
      description: "Handles multiple bottle shapes and cap types with quick changeover system",
      icon: "🔄"
    },
    {
      title: "Reliable Sealing",
      description: "Consistent torque application ensures perfect seal every time",
      icon: "🔐"
    },
    {
      title: "Easy Operation",
      description: "User-friendly interface with automated adjustment capabilities",
      icon: "⚡"
    },
    {
      title: "Quality Control",
      description: "Integrated torque monitoring and rejection system for defective caps",
      icon: "✅"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-green-900 to-green-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">CAPPING SERIES</h1>
              <p className="text-xl mb-8 opacity-90">
                Complete capping solutions for various bottle and container types with 
                precision torque control and versatile compatibility.
              </p>
        
            </div>
            <div className="flex justify-center">
              <img 
                src={m2} 
                alt="Capping Series" 
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
              { id: 'types', label: 'Capping Types' },
              { id: 'specifications', label: 'Specifications' },
              { id: 'features', label: 'Features' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'border-b-2 border-green-600 text-green-600'
                    : 'text-gray-600 hover:text-green-600'
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
                <h2 className="text-3xl font-bold mb-6">Capping Excellence</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The Buchtech Capping Series delivers industry-leading performance in bottle capping 
                  applications. Our comprehensive range of capping machines is designed to handle various 
                  closure types while maintaining consistent quality and high-speed operation.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  From simple screw caps to complex specialty closures, our capping systems provide 
                  the precision and reliability required for modern production environments.
                </p>
                
                <div className="bg-green-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">Production Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-green-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Up to 500 bottles per minute processing speed
                    </li>
                    <li className="flex items-center text-green-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Consistent torque application for perfect sealing
                    </li>
                    <li className="flex items-center text-green-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Reduced product waste and improved quality
                    </li>
                    <li className="flex items-center text-green-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Minimal operator intervention required
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">Quality Assurance</h3>
                  <p className="text-blue-700">
                    Every capping system includes integrated quality control features such as torque 
                    monitoring, cap presence detection, and automatic rejection of defective products.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">System Advantages</h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-3 text-green-800">Precision Control</h4>
                    <p className="text-gray-600">
                      Advanced servo-driven systems ensure consistent torque application with ±0.1 N·m accuracy
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-3 text-green-800">Flexible Configuration</h4>
                    <p className="text-gray-600">
                      Modular design allows for easy customization and integration with existing production lines
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-3 text-green-800">Smart Monitoring</h4>
                    <p className="text-gray-600">
                      Real-time data collection and analysis for continuous process optimization
                    </p>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4">Performance Metrics</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">99.8%</div>
                      <div className="text-sm text-gray-600">Capping Success Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">30%</div>
                      <div className="text-sm text-gray-600">Energy Savings</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'types' && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Capping Technologies</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {cappingTypes.map((type, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-4">{type.icon}</div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">{type.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{type.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-700 mb-2">Applications:</h4>
                      <ul className="text-sm text-gray-600">
                        {type.applications.map((app, appIndex) => (
                          <li key={appIndex} className="flex items-center mb-1">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                            {app}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Capping Process Comparison</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-3 px-4">Capping Type</th>
                        <th className="text-left py-3 px-4">Speed (BPM)</th>
                        <th className="text-left py-3 px-4">Torque Range</th>
                        <th className="text-left py-3 px-4">Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 font-medium">Screw Capping</td>
                        <td className="py-3 px-4">300-500</td>
                        <td className="py-3 px-4">1.0-6.0 N·m</td>
                        <td className="py-3 px-4">Beverages, Food</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 font-medium">Snap Capping</td>
                        <td className="py-3 px-4">400-600</td>
                        <td className="py-3 px-4">Force-based</td>
                        <td className="py-3 px-4">Cosmetics, Sports</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 font-medium">Crimp Capping</td>
                        <td className="py-3 px-4">200-350</td>
                        <td className="py-3 px-4">Pressure-based</td>
                        <td className="py-3 px-4">Wine, Spirits</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">ROPP Capping</td>
                        <td className="py-3 px-4">150-300</td>
                        <td className="py-3 px-4">2.0-8.0 N·m</td>
                        <td className="py-3 px-4">Premium Spirits</td>
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
                  <div className="bg-green-600 text-white px-6 py-4">
                    <h3 className="text-xl font-semibold">Machine Specifications</h3>
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
                    <h3 className="text-xl font-semibold mb-4">Control System Features</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                        PLC-based control system
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                        Touch screen HMI interface
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                        Recipe storage and recall
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                        Real-time torque monitoring
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                        Alarm and fault diagnostics
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                        Data logging and reporting
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Safety Features</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                        Emergency stop buttons
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                        Safety interlocks
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                        Guarding and barriers
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                        Overload protection
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Optional Accessories</h3>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="p-3 bg-gray-50 rounded">
                        <div className="font-medium text-sm">Cap Feeder System</div>
                        <div className="text-xs text-gray-600">Automatic cap feeding</div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <div className="font-medium text-sm">Torque Verification</div>
                        <div className="text-xs text-gray-600">Post-capping torque check</div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <div className="font-medium text-sm">Reject System</div>
                        <div className="text-xs text-gray-600">Automatic defect removal</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Advanced Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-6">Innovation Highlights</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">±0.1</div>
                    <div className="text-gray-700 font-medium">N·m Accuracy</div>
                    <div className="text-sm text-gray-600">Torque precision</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">500</div>
                    <div className="text-gray-700 font-medium">Bottles/Min</div>
                    <div className="text-sm text-gray-600">Maximum speed</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">99.8%</div>
                    <div className="text-gray-700 font-medium">Success Rate</div>
                    <div className="text-sm text-gray-600">Capping reliability</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold mb-4">Process Control</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                      <div>
                        <div className="font-medium">Servo-Driven Precision</div>
                        <div className="text-sm text-gray-600">Exact torque application for every cap</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                      <div>
                        <div className="font-medium">Multi-Stage Capping</div>
                        <div className="text-sm text-gray-600">Pre-capping and final torque stages</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                      <div>
                        <div className="font-medium">Adaptive Control</div>
                        <div className="text-sm text-gray-600">Automatic adjustment for different caps</div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold mb-4">Quality Assurance</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                      <div>
                        <div className="font-medium">Torque Monitoring</div>
                        <div className="text-sm text-gray-600">Real-time torque measurement and logging</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                      <div>
                        <div className="font-medium">Cap Presence Detection</div>
                        <div className="text-sm text-gray-600">Automatic detection of missing caps</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                      <div>
                        <div className="font-medium">Statistical Analysis</div>
                        <div className="text-sm text-gray-600">Process capability monitoring</div>
                      </div>
                    </li>
                  </ul>
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

export default CappingSeries;