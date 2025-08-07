import React, { useState , useEffect} from 'react';
import m7 from '../../../assets/images/machine/m7.jpg';
import ContactCTA from '../../../components/home/ContactCTA';
const ChemicalSeries = () => {
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
  const chemicalSystems = [
    {
      title: "Chemical Filling Systems",
      description: "Precision filling equipment designed for corrosive and hazardous chemicals",
      features: ["Chemical-resistant materials", "Explosion-proof design", "Precision dosing", "Vapor recovery"],
      applications: ["Industrial chemicals", "Cleaning agents", "Pharmaceuticals", "Laboratory chemicals"],
      capacity: "50-5000ml per cycle",
      icon: "🧪"
    },
    {
      title: "Corrosive Handling Equipment", 
      description: "Specialized machinery for handling corrosive substances safely",
      features: ["Corrosion-resistant coatings", "Sealed systems", "Emergency containment", "Material compatibility"],
      applications: ["Acids and bases", "Solvents", "Caustic solutions", "Process chemicals"],
      capacity: "1-1000L containers",
      icon: "⚗️"
    },
    {
      title: "Safety & Containment Systems",
      description: "Advanced safety systems for chemical processing and handling",
      features: ["Leak detection", "Automatic shutdown", "Emergency venting", "Spill containment"],
      applications: ["Chemical plants", "Laboratories", "Manufacturing", "Storage facilities"],
      capacity: "Complete facility coverage",
      icon: "🛡️"
    },
    {
      title: "Precision Dosing Systems",
      description: "High-accuracy chemical dosing and mixing equipment",
      features: ["Micro-dosing capability", "Multi-component mixing", "Real-time monitoring", "Recipe management"],
      applications: ["Paint formulation", "Adhesive production", "Chemical synthesis", "Quality control"],
      capacity: "0.1ml to 50L doses",
      icon: "💧"
    }
  ];

  const specifications = [
    { label: "Operating Pressure", value: "Vacuum to 10 bar" },
    { label: "Temperature Range", value: "-20°C to +200°C" },
    { label: "Chemical Compatibility", value: "pH 0-14" },
    { label: "Filling Accuracy", value: "±0.1% to ±1%" },
    { label: "Material Construction", value: "316L SS, PTFE, PEEK" },
    { label: "Explosion Rating", value: "ATEX Zone 1 & 2" },
    { label: "Containment Level", value: "IP65/IP67" },
    { label: "Safety Standards", value: "CE, OSHA, NFPA" }
  ];

  const safetyFeatures = [
    {
      title: "Chemical Resistance",
      description: "Advanced materials and coatings designed to withstand aggressive chemicals",
      measures: ["PTFE and PEEK components", "316L stainless steel construction", "Chemical compatibility testing", "Corrosion monitoring"],
      icon: "🛡️"
    },
    {
      title: "Safety Compliance",
      description: "Comprehensive safety systems meeting international standards",
      measures: ["ATEX explosion protection", "Emergency shutdown systems", "Leak detection sensors", "Safety interlocks"],
      icon: "✅"
    },
    {
      title: "Precise Dosing",
      description: "High-accuracy dosing systems for consistent chemical processing",
      measures: ["Servo-driven pumps", "Mass flow controllers", "Real-time monitoring", "Closed-loop control"],
      icon: "🎯"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-red-900 to-orange-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">CHEMICAL SERIES</h1>
              <p className="text-xl mb-8 opacity-90">
                Specialized equipment for chemical industry applications with 
                chemical resistance, safety compliance, and precise dosing capabilities.
              </p>
       
            </div>
            <div className="flex justify-center">
              <img 
                src={m7} 
                alt="Chemical Series" 
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
              { id: 'chemical-systems', label: 'Chemical Systems' },
              { id: 'safety-features', label: 'Safety Features' },
              { id: 'specifications', label: 'Specifications' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'border-b-2 border-red-600 text-red-600'
                    : 'text-gray-600 hover:text-red-600'
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
                <h2 className="text-3xl font-bold mb-6">Chemical Industry Excellence</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The Buchtech Chemical Series provides specialized equipment solutions for the demanding 
                  requirements of chemical processing and handling. Our systems are engineered to handle 
                  corrosive, hazardous, and reactive chemicals while maintaining the highest safety standards.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  From precision filling systems to complete chemical handling lines, our equipment 
                  incorporates advanced materials, explosion-proof designs, and comprehensive safety 
                  features essential for chemical industry applications.
                </p>
                
                <div className="bg-red-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-red-800">Critical Advantages</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-red-700">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      Chemical-resistant materials and construction
                    </li>
                    <li className="flex items-center text-red-700">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      ATEX explosion protection compliance
                    </li>
                    <li className="flex items-center text-red-700">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      Precision dosing with ±0.1% accuracy
                    </li>
                    <li className="flex items-center text-red-700">
                      <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                      Comprehensive containment systems
                    </li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-yellow-800">Safety First</h3>
                  <p className="text-yellow-700">
                    Every system incorporates multiple safety layers including leak detection, 
                    emergency shutdown, and spill containment to protect personnel and environment.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Industry Applications</h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-3 text-red-800">Chemical Manufacturing</h4>
                    <p className="text-gray-600">
                      Complete processing lines for industrial chemical production with full safety compliance
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-3 text-red-800">Pharmaceutical Production</h4>
                    <p className="text-gray-600">
                      Precision equipment for pharmaceutical and fine chemical manufacturing
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-3 text-red-800">Laboratory Systems</h4>
                    <p className="text-gray-600">
                      Specialized equipment for research and analytical laboratories
                    </p>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-red-100 to-orange-100 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4">Safety Performance</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-red-600">0</div>
                      <div className="text-sm text-gray-600">Safety Incidents</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">100%</div>
                      <div className="text-sm text-gray-600">Compliance Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-yellow-600">24/7</div>
                      <div className="text-sm text-gray-600">Monitoring</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'chemical-systems' && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Chemical Processing Systems</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {chemicalSystems.map((system, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-6">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl mr-4">{system.icon}</div>
                        <div>
                          <h3 className="text-xl font-bold">{system.title}</h3>
                          <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full inline-block mt-2">
                            <span className="text-sm font-medium">{system.capacity}</span>
                          </div>
                        </div>
                      </div>
                      <p className="opacity-90">{system.description}</p>
                    </div>
                    <div className="p-6">
                      <div className="mb-4">
                        <h4 className="font-semibold mb-3 text-gray-800">Key Features:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {system.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center">
                              <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                              <span className="text-gray-600 text-sm">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-3 text-gray-800">Applications:</h4>
                        <ul className="space-y-1">
                          {system.applications.map((app, appIndex) => (
                            <li key={appIndex} className="flex items-center">
                              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></span>
                              <span className="text-gray-600 text-sm">{app}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">System Capabilities Comparison</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b-2 border-gray-200">
                        <th className="text-left py-3 px-4">System Type</th>
                        <th className="text-left py-3 px-4">Accuracy</th>
                        <th className="text-left py-3 px-4">Chemical Range</th>
                        <th className="text-left py-3 px-4">Safety Level</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 font-medium">Chemical Filling</td>
                        <td className="py-3 px-4">±0.5%</td>
                        <td className="py-3 px-4">pH 0-14</td>
                        <td className="py-3 px-4">ATEX Zone 2</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 font-medium">Corrosive Handling</td>
                        <td className="py-3 px-4">±1.0%</td>
                        <td className="py-3 px-4">Acids/Bases</td>
                        <td className="py-3 px-4">ATEX Zone 1</td>
                      </tr>
                      <tr className="border-b border-gray-100">
                        <td className="py-3 px-4 font-medium">Safety Systems</td>
                        <td className="py-3 px-4">Detection</td>
                        <td className="py-3 px-4">Universal</td>
                        <td className="py-3 px-4">SIL 2/3</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 font-medium">Precision Dosing</td>
                        <td className="py-3 px-4">±0.1%</td>
                        <td className="py-3 px-4">Multi-component</td>
                        <td className="py-3 px-4">ATEX Zone 2</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6">Chemical Compatibility Matrix</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="text-center p-6 bg-green-50 rounded-lg">
                    <div className="text-3xl mb-3">✅</div>
                    <div className="font-semibold mb-2">Acids</div>
                    <div className="text-sm text-gray-600">HCl, H2SO4, HNO3, organic acids</div>
                  </div>
                  <div className="text-center p-6 bg-blue-50 rounded-lg">
                    <div className="text-3xl mb-3">✅</div>
                    <div className="font-semibold mb-2">Bases</div>
                    <div className="text-sm text-gray-600">NaOH, KOH, NH4OH, caustics</div>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-lg">
                    <div className="text-3xl mb-3">✅</div>
                    <div className="font-semibold mb-2">Solvents</div>
                    <div className="text-sm text-gray-600">Alcohols, ketones, aromatics</div>
                  </div>
                  <div className="text-center p-6 bg-orange-50 rounded-lg">
                    <div className="text-3xl mb-3">✅</div>
                    <div className="font-semibold mb-2">Oxidizers</div>
                    <div className="text-sm text-gray-600">H2O2, chlorine compounds</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'safety-features' && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Comprehensive Safety Systems</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {safetyFeatures.map((feature, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-gradient-to-r from-red-500 to-orange-500 text-white p-6 text-center">
                      <div className="text-4xl mb-2">{feature.icon}</div>
                      <h3 className="text-xl font-bold">{feature.title}</h3>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-700 mb-4 leading-relaxed">{feature.description}</p>
                      <h4 className="font-semibold mb-3 text-gray-800">Safety Measures:</h4>
                      <ul className="space-y-2">
                        {feature.measures.map((measure, measureIndex) => (
                          <li key={measureIndex} className="flex items-center">
                            <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                            <span className="text-gray-600">{measure}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-6">Safety Protocols</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">1</div>
                      <div>
                        <h4 className="font-semibold mb-1">Hazard Assessment</h4>
                        <p className="text-gray-600 text-sm">Comprehensive chemical hazard analysis and risk evaluation</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">2</div>
                      <div>
                        <h4 className="font-semibold mb-1">System Design</h4>
                        <p className="text-gray-600 text-sm">Safety-by-design approach with multiple protection layers</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">3</div>
                      <div>
                        <h4 className="font-semibold mb-1">Installation & Commissioning</h4>
                        <p className="text-gray-600 text-sm">Certified installation with safety system validation</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4 mt-1">4</div>
                      <div>
                        <h4 className="font-semibold mb-1">Training & Maintenance</h4>
                        <p className="text-gray-600 text-sm">Comprehensive operator training and preventive maintenance</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-8 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold mb-6">Emergency Response</h3>
                  <div className="space-y-4">
                    <div className="bg-red-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Leak Detection Response</span>
                        <span className="text-red-600 font-bold">&lt;2 sec</span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Automatic system shutdown</div>
                    </div>
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Emergency Venting</span>
                        <span className="text-orange-600 font-bold">Instant</span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Pressure relief systems</div>
                    </div>
                    <div className="bg-yellow-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Spill Containment</span>
                        <span className="text-yellow-600 font-bold">110%</span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Volume containment capacity</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <span className="font-medium">Fire Suppression</span>
                        <span className="text-blue-600 font-bold">Automatic</span>
                      </div>
                      <div className="text-xs text-gray-600 mt-1">Integrated suppression systems</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-red-50 to-yellow-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-6">Safety Certifications & Standards</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-red-600 mb-1">ATEX</div>
                    <div className="text-sm text-gray-600">Explosion Protection</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-orange-600 mb-1">SIL 3</div>
                    <div className="text-sm text-gray-600">Safety Integrity</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-yellow-600 mb-1">NFPA</div>
                    <div className="text-sm text-gray-600">Fire Protection</div>
                  </div>
                  <div className="text-center p-4 bg-white rounded-lg">
                    <div className="text-2xl font-bold text-green-600 mb-1">OSHA</div>
                    <div className="text-sm text-gray-600">Occupational Safety</div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6">Risk Assessment & Mitigation</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-red-800">Identified Risks</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                        <div>
                          <div className="font-medium">Chemical Exposure</div>
                          <div className="text-sm text-gray-600">Vapor, liquid, or solid contact</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                        <div>
                          <div className="font-medium">Fire & Explosion</div>
                          <div className="text-sm text-gray-600">Flammable or reactive chemicals</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                        <div>
                          <div className="font-medium">Equipment Failure</div>
                          <div className="text-sm text-gray-600">Mechanical or electrical malfunction</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                        <div>
                          <div className="font-medium">Environmental Release</div>
                          <div className="text-sm text-gray-600">Uncontrolled chemical discharge</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-green-800">Mitigation Strategies</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                        <div>
                          <div className="font-medium">Containment Systems</div>
                          <div className="text-sm text-gray-600">Primary and secondary containment</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                        <div>
                          <div className="font-medium">Detection & Monitoring</div>
                          <div className="text-sm text-gray-600">Continuous gas and liquid monitoring</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                        <div>
                          <div className="font-medium">Automated Response</div>
                          <div className="text-sm text-gray-600">Emergency shutdown and isolation</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-3 mt-2"></span>
                        <div>
                          <div className="font-medium">Personnel Protection</div>
                          <div className="text-sm text-gray-600">PPE requirements and training</div>
                        </div>
                      </li>
                    </ul>
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
                  <div className="bg-red-600 text-white px-6 py-4">
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
                    <h3 className="text-xl font-semibold mb-4">Material Construction</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                        316L stainless steel wetted parts
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                        PTFE/PEEK seals and gaskets
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                        Hastelloy for extreme chemicals
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                        Chemical-resistant coatings
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                        Electropolished surfaces
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Safety Systems</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
                        Explosion-proof electrical equipment
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
                        Emergency shutdown systems
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
                        Gas detection sensors
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
                        Fire suppression integration
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-yellow-600 rounded-full mr-3"></span>
                        Pressure relief valves
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Control Features</h3>
                    <div className="grid grid-cols-1 gap-3">
                      <div className="p-3 bg-gray-50 rounded">
                        <div className="font-medium text-sm">Process Control</div>
                        <div className="text-xs text-gray-600">SIL-rated safety systems</div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <div className="font-medium text-sm">Data Logging</div>
                        <div className="text-xs text-gray-600">Complete batch records</div>
                      </div>
                      <div className="p-3 bg-gray-50 rounded">
                        <div className="font-medium text-sm">Remote Monitoring</div>
                        <div className="text-xs text-gray-600">24/7 system surveillance</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Performance Standards</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">±0.1%</div>
                    <div className="text-gray-700 font-medium">Dosing Accuracy</div>
                    <div className="text-sm text-gray-600">Precision filling</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">pH 0-14</div>
                    <div className="text-gray-700 font-medium">Chemical Range</div>
                    <div className="text-sm text-gray-600">Full compatibility</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-yellow-600 mb-2">Zone 1</div>
                    <div className="text-gray-700 font-medium">ATEX Rating</div>
                    <div className="text-sm text-gray-600">Explosion protection</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">SIL 3</div>
                    <div className="text-gray-700 font-medium">Safety Level</div>
                    <div className="text-sm text-gray-600">Functional safety</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6">Regulatory Compliance</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-red-800">International Standards</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                        <div>
                          <div className="font-medium">IEC 61508/61511</div>
                          <div className="text-sm text-gray-600">Functional safety standards</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                        <div>
                          <div className="font-medium">ATEX 2014/34/EU</div>
                          <div className="text-sm text-gray-600">Explosion protection directive</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                        <div>
                          <div className="font-medium">ISO 12100</div>
                          <div className="text-sm text-gray-600">Machinery safety standard</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3 mt-2"></span>
                        <div>
                          <div className="font-medium">NFPA 69/70</div>
                          <div className="text-sm text-gray-600">Fire and electrical codes</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-orange-800">Industry Requirements</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></span>
                        <div>
                          <div className="font-medium">FDA 21 CFR Part 11</div>
                          <div className="text-sm text-gray-600">Electronic records compliance</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></span>
                        <div>
                          <div className="font-medium">GMP Guidelines</div>
                          <div className="text-sm text-gray-600">Good manufacturing practices</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></span>
                        <div>
                          <div className="font-medium">OSHA 1910.119</div>
                          <div className="text-sm text-gray-600">Process safety management</div>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <span className="w-2 h-2 bg-orange-600 rounded-full mr-3 mt-2"></span>
                        <div>
                          <div className="font-medium">EPA Regulations</div>
                          <div className="text-sm text-gray-600">Environmental protection</div>
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

export default ChemicalSeries;