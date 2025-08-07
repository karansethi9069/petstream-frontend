import React, { useState , useEffect} from 'react';
import m5 from '../../../assets/images/machine/m5.png';
import ContactCTA from '../../../components/home/ContactCTA';
const PreformBottleSeries = () => {
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
  const systemTypes = [
    {
      title: "Preform Handling Systems",
      description: "Gentle and efficient handling of PET preforms with precision orientation",
      features: ["Gentle handling mechanisms", "Precise orientation control", "High-speed processing", "Quality inspection"],
      applications: ["Beverage bottles", "Water bottles", "Food containers", "Pharmaceutical bottles"],
      capacity: "2000-8000 preforms/hour",
      icon: "🧪"
    },
    {
      title: "Bottle Processing Systems", 
      description: "Complete bottle handling solutions for various container formats",
      features: ["Multi-format compatibility", "Gentle transport", "Quality control", "Contamination prevention"],
      applications: ["Glass bottles", "Plastic bottles", "Specialty containers", "Laboratory bottles"],
      capacity: "1500-6000 bottles/hour",
      icon: "🍼"
    },
    {
      title: "Integrated Handling Lines",
      description: "Complete preform-to-bottle processing with integrated quality assurance",
      features: ["End-to-end automation", "Quality tracking", "Reject handling", "Production monitoring"],
      applications: ["Complete bottling lines", "High-volume production", "Quality-critical processes"],
      capacity: "3000-12000 units/hour",
      icon: "🏭"
    }
  ];

  const specifications = [
    { label: "Processing Capacity", value: "1500-12000 units/hour" },
    { label: "Container Size Range", value: "50ml-5L capacity" },
    { label: "Preform Weight", value: "8-65 grams" },
    { label: "Handling Accuracy", value: "±0.5mm positioning" },
    { label: "Power Consumption", value: "4.0-15 kW" },
    { label: "Machine Dimensions", value: "6000×2500×2800mm" },
    { label: "Weight", value: "3000-8000 kg" },
    { label: "Operating Temperature", value: "5-40°C" }
  ];

  const qualityFeatures = [
    {
      title: "Vision Inspection",
      description: "Advanced camera systems for defect detection and quality verification",
      capabilities: ["Crack detection", "Dimension verification", "Color consistency", "Surface inspection"],
      icon: "👁️"
    },
    {
      title: "Gentle Handling",
      description: "Specialized mechanisms to prevent damage during transport and processing",
      capabilities: ["Soft gripping", "Controlled acceleration", "Vibration dampening", "Drop prevention"],
      icon: "🤲"
    },
    {
      title: "Contamination Control",
      description: "Clean room compatible design with contamination prevention features",
      capabilities: ["HEPA filtration", "Clean surfaces", "Sealed enclosures", "Sterile handling"],
      icon: "🛡️"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-teal-900 to-cyan-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">PREFORM & BOTTLE SERIES</h1>
              <p className="text-xl mb-8 opacity-90">
                Advanced equipment for preform handling and bottle processing with 
                gentle handling mechanisms and comprehensive quality assurance.
              </p>
       
            </div>
            <div className="flex justify-center">
              <img 
                src={m5} 
                alt="Preform and Bottle Series" 
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
              { id: 'systems', label: 'System Types' },
              { id: 'quality', label: 'Quality Features' },
              { id: 'specifications', label: 'Specifications' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'border-b-2 border-teal-600 text-teal-600'
                    : 'text-gray-600 hover:text-teal-600'
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
                <h2 className="text-3xl font-bold mb-6">Precision Handling Excellence</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The Buchtech Preform and Bottle Series provides comprehensive solutions for handling 
                  delicate containers throughout the production process. Our systems are engineered to 
                  maintain product integrity while maximizing throughput and operational efficiency.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  From PET preforms to finished bottles, our handling systems ensure gentle transport, 
                  precise positioning, and thorough quality control. Each system incorporates advanced 
                  vision inspection and contamination control features essential for modern packaging operations.
                </p>
                
                <div className="bg-teal-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-teal-800">Core Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-teal-700">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                      Zero damage handling for delicate containers
                    </li>
                    <li className="flex items-center text-teal-700">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                      Integrated quality inspection systems
                    </li>
                    <li className="flex items-center text-teal-700">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                      High-speed processing capabilities
                    </li>
                    <li className="flex items-center text-teal-700">
                      <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                      Clean room compatible design
                    </li>
                  </ul>
                </div>

                <div className="bg-emerald-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-emerald-800">Industry Applications</h3>
                  <p className="text-emerald-700">
                    Ideal for beverage, pharmaceutical, and food packaging industries requiring 
                    sterile handling and quality assurance.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Technology Highlights</h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-3 text-teal-800">Advanced Vision Systems</h4>
                    <p className="text-gray-600">
                      Multi-camera inspection systems detect defects, verify dimensions, and ensure quality standards
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-3 text-teal-800">Servo-Driven Precision</h4>
                    <p className="text-gray-600">
                      High-precision servo motors ensure accurate positioning and gentle handling movements
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-3 text-teal-800">Modular Architecture</h4>
                    <p className="text-gray-600">
                      Flexible system design allows for easy customization and future expansion
                    </p>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-teal-100 to-emerald-100 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4">Performance Metrics</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-teal-600">99.9%</div>
                      <div className="text-sm text-gray-600">Handling Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-emerald-600">12K</div>
                      <div className="text-sm text-gray-600">Units/Hour</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-600">0.1%</div>
                      <div className="text-sm text-gray-600">Damage Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'systems' && (
            <div>
              <h2 className="text-3xl font-bold mb-8">System Configurations</h2>
              <div className="space-y-8">
                {systemTypes.map((system, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
                      <div className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white p-8 lg:col-span-1">
                        <div className="text-4xl mb-4">{system.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{system.title}</h3>
                        <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full inline-block">
                          <span className="text-sm font-medium">{system.capacity}</span>
                        </div>
                      </div>
                      
                      <div className="p-8 lg:col-span-2">
                        <p className="text-gray-700 mb-6 leading-relaxed">{system.description}</p>
                        <h4 className="text-lg font-semibold mb-4 text-gray-800">Key Features</h4>
                        <div className="grid grid-cols-2 gap-3">
                          {system.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center">
                              <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                              <span className="text-gray-600 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div className="p-8 bg-gray-50 lg:col-span-1">
                        <h4 className="text-lg font-semibold mb-4 text-gray-800">Applications</h4>
                        <ul className="space-y-2">
                          {system.applications.map((app, appIndex) => (
                            <li key={appIndex} className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full mr-3"></span>
                              <span className="text-gray-600 text-sm">{app}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">System Comparison</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-3 px-4">System Type</th>
                        <th className="text-left py-3 px-4">Capacity</th>
                        <th className="text-left py-3 px-4">Primary Function</th>
                        <th className="text-left py-3 px-4">Best Application</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 font-medium">Preform Handling</td>
                        <td className="py-3 px-4">2000-8000/hr</td>
                        <td className="py-3 px-4">Orientation & Transport</td>
                        <td className="py-3 px-4">PET Bottle Production</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 font-medium">Bottle Processing</td>
                        <td className="py-3 px-4">1500-6000/hr</td>
                        <td className="py-3 px-4">Quality & Transport</td>
                        <td className="py-3 px-4">Multi-format Lines</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Integrated Lines</td>
                        <td className="py-3 px-4">3000-12000/hr</td>
                        <td className="py-3 px-4">Complete Processing</td>
                        <td className="py-3 px-4">High-volume Production</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'quality' && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Quality Assurance Features</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {qualityFeatures.map((feature, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-gradient-to-r from-teal-500 to-emerald-500 text-white p-6 text-center">
                      <div className="text-4xl mb-2">{feature.icon}</div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-4 leading-relaxed">{feature.description}</p>
                      <h4 className="font-semibold mb-3 text-gray-800">Capabilities:</h4>
                      <ul className="space-y-2">
                        {feature.capabilities.map((capability, capIndex) => (
                          <li key={capIndex} className="flex items-center">
                            <span className="w-2 h-2 bg-teal-500 rounded-full mr-3"></span>
                            <span className="text-gray-600">{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-6">Quality Control Process</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">1</div>
                      <div>
                        <h4 className="font-semibold mb-1">Initial Inspection</h4>
                        <p className="text-gray-600 text-sm">Container integrity and dimension verification</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">2</div>
                      <div>
                        <h4 className="font-semibold mb-1">Handling Monitoring</h4>
                        <p className="text-gray-600 text-sm">Real-time force and position monitoring</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">3</div>
                      <div>
                        <h4 className="font-semibold mb-1">Final Verification</h4>
                        <p className="text-gray-600 text-sm">Quality confirmation before line exit</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-teal-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">4</div>
                      <div>
                        <h4 className="font-semibold mb-1">Reject Handling</h4>
                        <p className="text-gray-600 text-sm">Automatic removal of defective units</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-6">Quality Standards</h3>
                  <div className="space-y-4">
                    <div className="bg-green-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Damage Prevention</span>
                        <span className="text-green-600 font-bold">99.9%</span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Zero-damage handling rate</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Position Accuracy</span>
                        <span className="text-blue-600 font-bold">±0.5mm</span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Positioning precision</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Defect Detection</span>
                        <span className="text-purple-600 font-bold">99.8%</span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Quality inspection accuracy</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Contamination Control</span>
                        <span className="text-orange-600 font-bold">ISO 14644</span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Clean room compliance</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-teal-50 to-emerald-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Customer Success Story</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-teal-800">Premium Water Bottling Plant</h4>
                    <p className="text-gray-700 mb-4">
                      A leading premium water brand required zero-contamination handling for their 
                      high-end glass bottles with strict quality requirements.
                    </p>
                    <div className="bg-white p-4 rounded-lg">
                      <h5 className="font-semibold mb-2">Challenge:</h5>
                      <p className="text-sm text-gray-600 mb-3">
                        Previous systems caused 2.3% breakage rate and contamination issues 
                        affecting product quality and customer satisfaction.
                      </p>
                      <h5 className="font-semibold mb-2">Buchtech Solution:</h5>
                      <p className="text-sm text-gray-600">
                        Integrated gentle handling system with vision inspection and 
                        clean room compatibility.
                      </p>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-emerald-800">Achieved Results</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between p-3 bg-white rounded">
                        <span className="font-medium">Breakage Reduction</span>
                        <span className="text-emerald-600 font-bold">95%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white rounded">
                        <span className="font-medium">Quality Improvement</span>
                        <span className="text-teal-600 font-bold">99.8%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white rounded">
                        <span className="font-medium">Throughput Increase</span>
                        <span className="text-blue-600 font-bold">40%</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white rounded">
                        <span className="font-medium">ROI Achievement</span>
                        <span className="text-purple-600 font-bold">18 months</span>
                      </div>
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
                  <div className="bg-teal-600 text-white px-6 py-4">
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
                    <h3 className="text-xl font-semibold mb-4">Handling Mechanisms</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                        Pneumatic soft grippers
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                        Servo-driven positioning
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                        Vibration isolation systems
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                        Force-controlled movements
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-teal-600 rounded-full mr-3"></span>
                        Anti-static measures
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Inspection Systems</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                        High-resolution cameras
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                        LED lighting systems
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                        AI-powered defect detection
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                        Dimension measurement
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-emerald-600 rounded-full mr-3"></span>
                        Surface quality analysis
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Environmental Controls</h3>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="p-3 bg-gray-50 rounded">
                        <div className="font-medium text-sm">Clean Room Ready</div>
                        <div className="text-xs text-gray-600">ISO 14644 compliant design</div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <div className="font-medium text-sm">Temperature Control</div>
                        <div className="text-xs text-gray-600">Precision climate management</div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <div className="font-medium text-sm">Static Control</div>
                        <div className="text-xs text-gray-600">Anti-static systems</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-teal-50 to-cyan-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Performance Benchmarks</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-cyan-600 mb-2">12000</div>
                    <div className="text-gray-700 font-medium">Units/Hour</div>
                    <div className="text-sm text-gray-600">Maximum capacity</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">99.8%</div>
                    <div className="text-gray-700 font-medium">Quality Rate</div>
                    <div className="text-sm text-gray-600">Inspection accuracy</div>
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


export default PreformBottleSeries;
