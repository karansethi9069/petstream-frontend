import React, { useState , useEffect} from 'react';
import m6 from '../../../assets/images/machine/m6.jpg';
import ContactCTA from '../../../components/home/ContactCTA';
const ConveyingMachineSeries = () => {
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
  const conveyorTypes = [
    {
      title: "Belt Conveyors",
      description: "Versatile belt conveying systems for general material transport",
      features: ["Variable speed control", "Modular design", "Easy maintenance", "Low noise operation"],
      applications: ["Bottles and containers", "Packaging materials", "General production", "Assembly lines"],
      speed: "10-120 m/min",
      icon: "📏"
    },
    {
      title: "Chain Conveyors", 
      description: "Heavy-duty chain systems for demanding industrial applications",
      features: ["High load capacity", "Precise positioning", "Robust construction", "Temperature resistant"],
      applications: ["Heavy containers", "Glass bottles", "Metal parts", "Industrial components"],
      speed: "5-60 m/min",
      icon: "⛓️"
    },
    {
      title: "Accumulation Systems",
      description: "Advanced accumulation conveyors for production flow management",
      features: ["Zero pressure accumulation", "Dynamic flow control", "Buffer capacity", "Line balancing"],
      applications: ["Production buffering", "Line integration", "Packaging lines", "Quality control"],
      speed: "Variable control",
      icon: "📦"
    },
    {
      title: "Spiral Conveyors",
      description: "Space-efficient vertical conveying with continuous flow",
      features: ["Vertical transport", "Space optimization", "Continuous flow", "Gentle handling"],
      applications: ["Multi-level transport", "Cooling towers", "Storage systems", "Level changes"],
      speed: "8-50 m/min",
      icon: "🌀"
    }
  ];

  const specifications = [
    { label: "Conveyor Length", value: "1-100 meters" },
    { label: "Belt Width", value: "100-2000mm" },
    { label: "Load Capacity", value: "50-5000 kg/m" },
    { label: "Speed Range", value: "1-120 m/min" },
    { label: "Power Range", value: "0.5-30 kW" },
    { label: "Operating Temperature", value: "-20°C to +80°C" },
    { label: "Noise Level", value: "<65 dB(A)" },
    { label: "Safety Standards", value: "CE, ISO 12100" }
  ];

  const designFeatures = [
    {
      title: "Smooth Transport",
      description: "Engineered for gentle product handling with minimal vibration and impact",
      benefits: ["Product integrity protection", "Reduced damage rates", "Quality preservation", "Smooth acceleration"],
      icon: "🚄"
    },
    {
      title: "Variable Speed",
      description: "Precise speed control for optimal production flow synchronization",
      benefits: ["Production line balancing", "Energy efficiency", "Flexible operation", "Process optimization"],
      icon: "⚡"
    },
    {
      title: "Modular Design",
      description: "Flexible modular construction for easy customization and expansion",
      benefits: ["Easy installation", "Future expansion", "Cost effectiveness", "Maintenance access"],
      icon: "🔧"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-900 to-gray-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">CONVEYING MACHINE SERIES</h1>
              <p className="text-xl mb-8 opacity-90">
                Advanced conveying systems for material transport and production flow 
                with smooth operation, variable speed control, and modular design.
              </p>
           
            </div>
            <div className="flex justify-center">
              <img 
                src={m6} 
                alt="Conveying Machine Series" 
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
              { id: 'conveyor-types', label: 'Conveyor Types' },
              { id: 'design-features', label: 'Design Features' },
              { id: 'specifications', label: 'Specifications' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'border-b-2 border-slate-600 text-slate-600'
                    : 'text-gray-600 hover:text-slate-600'
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
                <h2 className="text-3xl font-bold mb-6">Material Transport Excellence</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The Buchtech Conveying Machine Series provides comprehensive solutions for material 
                  transport throughout manufacturing and packaging facilities. Our conveyor systems 
                  are engineered for reliability, efficiency, and seamless integration with existing 
                  production lines.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  From simple belt conveyors to complex accumulation systems, our conveying solutions 
                  ensure smooth product flow, minimize handling damage, and optimize production 
                  efficiency. Each system features modular design for easy customization and future expansion.
                </p>
                
                <div className="bg-slate-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-slate-800">System Advantages</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-slate-700">
                      <span className="w-2 h-2 bg-slate-600 rounded-full mr-3"></span>
                      Smooth and gentle product transport
                    </li>
                    <li className="flex items-center text-slate-700">
                      <span className="w-2 h-2 bg-slate-600 rounded-full mr-3"></span>
                      Variable speed control for line balancing
                    </li>
                    <li className="flex items-center text-slate-700">
                      <span className="w-2 h-2 bg-slate-600 rounded-full mr-3"></span>
                      Modular design for flexibility
                    </li>
                    <li className="flex items-center text-slate-700">
                      <span className="w-2 h-2 bg-slate-600 rounded-full mr-3"></span>
                      Low maintenance requirements
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-blue-800">Production Integration</h3>
                  <p className="text-blue-700">
                    Our conveying systems seamlessly integrate with filling, capping, labeling, 
                    and packaging equipment to create efficient production workflows.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Engineering Excellence</h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-3 text-slate-800">Precision Engineering</h4>
                    <p className="text-gray-600">
                      High-quality components and precise manufacturing ensure reliable operation and long service life
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-3 text-slate-800">Smart Controls</h4>
                    <p className="text-gray-600">
                      Advanced control systems provide precise speed regulation and integration capabilities
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-3 text-slate-800">Safety Features</h4>
                    <p className="text-gray-600">
                      Comprehensive safety systems including guards, emergency stops, and safety interlocks
                    </p>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-slate-100 to-blue-100 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4">System Performance</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-slate-600">120</div>
                      <div className="text-sm text-gray-600">m/min Max Speed</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-600">5000</div>
                      <div className="text-sm text-gray-600">kg/m Load Capacity</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">99.5%</div>
                      <div className="text-sm text-gray-600">Uptime Reliability</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'conveyor-types' && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Conveyor System Types</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {conveyorTypes.map((type, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="bg-gradient-to-r from-slate-600 to-gray-600 text-white p-6">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl mr-4">{type.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold">{type.title}</h3>
                          <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full inline-block mt-2">
                            <span className="text-sm font-medium">{type.speed}</span>
                          </div>
                        </div>
                      </div>
                      <p className="opacity-90">{type.description}</p>
                    </div>
                    <div className="p-6">
                      <div className="mb-4">
                        <h4 className="font-semibold mb-3 text-gray-800">Key Features:</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {type.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-slate-500 rounded-full mr-2"></span>
                              <span className="text-gray-600 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-gray-800">Applications:</h4>
                        <ul className="space-y-1">
                          {type.applications.map((app, appIndex) => (
                            <li key={appIndex} className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                              <span className="text-gray-600 text-sm">{app}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-gradient-to-r from-slate-50 to-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Conveyor Selection Guide</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-3 px-4">Conveyor Type</th>
                        <th className="text-left py-3 px-4">Load Capacity</th>
                        <th className="text-left py-3 px-4">Speed Range</th>
                        <th className="text-left py-3 px-4">Best For</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 font-medium">Belt Conveyors</td>
                        <td className="py-3 px-4">50-2000 kg/m</td>
                        <td className="py-3 px-4">10-120 m/min</td>
                        <td className="py-3 px-4">General transport</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 font-medium">Chain Conveyors</td>
                        <td className="py-3 px-4">500-5000 kg/m</td>
                        <td className="py-3 px-4">5-60 m/min</td>
                        <td className="py-3 px-4">Heavy duty applications</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 font-medium">Accumulation</td>
                        <td className="py-3 px-4">100-1000 kg/m</td>
                        <td className="py-3 px-4">Variable</td>
                        <td className="py-3 px-4">Production buffering</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Spiral</td>
                        <td className="py-3 px-4">200-800 kg/m</td>
                        <td className="py-3 px-4">8-50 m/min</td>
                        <td className="py-3 px-4">Vertical transport</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6">Custom Configuration Options</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl mb-3">🔧</div>
                    <div className="font-semibold mb-2">Belt Materials</div>
                    <div className="text-sm text-gray-600">PVC, PU, rubber, food-grade options</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl mb-3">📐</div>
                    <div className="font-semibold mb-2">Frame Options</div>
                    <div className="text-sm text-gray-600">Stainless steel, aluminum, carbon steel</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl mb-3">⚙️</div>
                    <div className="font-semibold mb-2">Drive Systems</div>
                    <div className="text-sm text-gray-600">Motor types, gearboxes, controls</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'design-features' && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Advanced Design Features</h2>
              <div className="space-y-8">
                {designFeatures.map((feature, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                      <div className="bg-gradient-to-r from-slate-600 to-gray-600 text-white p-8">
                        <div className="flex items-center mb-4">
                          <div className="text-4xl mr-4">{feature.icon}</div>
                          <h3 className="text-2xl font-bold">{feature.title}</h3>
                        </div>
                        <p className="opacity-90">{feature.description}</p>
                      </div>
                      
                      <div className="p-8 lg:col-span-2">
                        <h4 className="text-lg font-semibold mb-4 text-gray-800">Benefits & Advantages</h4>
                        <div className="grid grid-cols-2 gap-4">
                          {feature.benefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-center">
                              <span className="w-2 h-2 bg-slate-500 rounded-full mr-3"></span>
                              <span className="text-gray-700">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-gradient-to-r from-slate-50 to-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Technical Innovations</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Control Systems</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-slate-600 rounded-full mr-3 mt-2"></span>
                        <div>
                          <div className="font-medium">Variable Frequency Drives</div>
                          <div className="text-sm text-gray-600">Precise speed control and energy efficiency</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-slate-600 rounded-full mr-3 mt-2"></span>
                        <div>
                          <div className="font-medium">PLC Integration</div>
                          <div className="text-sm text-gray-600">Seamless line integration and automation</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-slate-600 rounded-full mr-3 mt-2"></span>
                        <div>
                          <div className="font-medium">HMI Touchscreens</div>
                          <div className="text-sm text-gray-600">User-friendly operation and monitoring</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Safety Features</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                        <div>
                          <div className="font-medium">Emergency Stop Systems</div>
                          <div className="text-sm text-gray-600">Multiple e-stop points along conveyor</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                        <div>
                          <div className="font-medium">Safety Guards</div>
                          <div className="text-sm text-gray-600">Protective barriers and access controls</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                        <div>
                          <div className="font-medium">Motion Sensors</div>
                          <div className="text-sm text-gray-600">Automatic shutdown on personnel detection</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-6">Maintenance Features</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Accessible Components</span>
                        <span className="text-green-600 font-bold">Easy Access</span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Tool-free maintenance panels</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Lubrication Points</span>
                        <span className="text-blue-600 font-bold">Centralized</span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Single-point lubrication systems</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Belt Tracking</span>
                        <span className="text-purple-600 font-bold">Automatic</span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Self-adjusting belt tracking</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-6">Energy Efficiency</h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Energy Savings</span>
                        <span className="text-green-600 font-bold">30%</span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Vs. conventional systems</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Power Factor</span>
                        <span className="text-blue-600 font-bold">0.95</span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">High efficiency motors</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Standby Mode</span>
                        <span className="text-orange-600 font-bold">90%</span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Power reduction capability</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'specifications' && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Technical Specifications</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="bg-slate-600 text-white px-6 py-4">
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
                    <h3 className="text-xl font-semibold mb-4">Drive Options</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-slate-600 rounded-full mr-3"></span>
                        AC induction motors
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-slate-600 rounded-full mr-3"></span>
                        Variable frequency drives
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-slate-600 rounded-full mr-3"></span>
                        Servo motor systems
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-slate-600 rounded-full mr-3"></span>
                        Gear motor combinations
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-slate-600 rounded-full mr-3"></span>
                        Direct drive systems
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Material Options</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Food-grade materials
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Stainless steel construction
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Corrosion-resistant coatings
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        FDA approved components
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Washdown capability
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Control Features</h3>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="p-3 bg-gray-50 rounded">
                        <div className="font-medium text-sm">Line Integration</div>
                        <div className="text-xs text-gray-600">PLC and HMI systems</div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <div className="font-medium text-sm">Remote Monitoring</div>
                        <div className="text-xs text-gray-600">SCADA connectivity</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-slate-50 to-blue-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Performance Standards</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-slate-600 mb-2">99.5%</div>
                    <div className="text-gray-700 font-medium">Reliability</div>
                    <div className="text-sm text-gray-600">System uptime</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">120</div>
                    <div className="text-gray-700 font-medium">m/min</div>
                    <div className="text-sm text-gray-600">Maximum speed</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">30%</div>
                    <div className="text-gray-700 font-medium">Energy Savings</div>
                    <div className="text-sm text-gray-600">Vs. standard systems</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">65dB</div>
                    <div className="text-gray-700 font-medium">Noise Level</div>
                    <div className="text-sm text-gray-600">Maximum operation</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6">Application Guidelines</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-slate-800">Selection Criteria</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-slate-600 rounded-full mr-3 mt-2"></span>
                        <div>
                          <div className="font-medium">Product Weight & Size</div>
                          <div className="text-sm text-gray-600">Determines conveyor type and capacity</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-slate-600 rounded-full mr-3 mt-2"></span>
                        <div>
                          <div className="font-medium">Production Speed</div>
                          <div className="text-sm text-gray-600">Required throughput and line balancing</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-slate-600 rounded-full mr-3 mt-2"></span>
                        <div>
                          <div className="font-medium">Environmental Conditions</div>
                          <div className="text-sm text-gray-600">Temperature, humidity, cleanliness</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-slate-600 rounded-full mr-3 mt-2"></span>
                        <div>
                          <div className="font-medium">Integration Requirements</div>
                          <div className="text-sm text-gray-600">Existing equipment compatibility</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-blue-800">Installation Considerations</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                        <div>
                          <div className="font-medium">Floor Space</div>
                          <div className="text-sm text-gray-600">Available area and layout constraints</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                        <div>
                          <div className="font-medium">Power Requirements</div>
                          <div className="text-sm text-gray-600">Electrical supply and distribution</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                        <div>
                          <div className="font-medium">Safety Compliance</div>
                          <div className="text-sm text-gray-600">Local safety standards and regulations</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></span>
                        <div>
                          <div className="font-medium">Maintenance Access</div>
                          <div className="text-sm text-gray-600">Service points and walkways</div>
                        </div>
                      </li>
                    </ul>
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


export default ConveyingMachineSeries;

