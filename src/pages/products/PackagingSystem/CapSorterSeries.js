import React, { useState , useEffect } from 'react';
import m1 from '../../../assets/images/machine/m1.jpg';
import ContactCTA from '../../../components/home/ContactCTA';
const CapSorterSeries = () => {
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
    { label: "Sorting Speed", value: "200-600 caps/minute" },
    { label: "Cap Size Range", value: "15-100mm diameter" },
    { label: "Power Consumption", value: "1.5-3.0 kW" },
    { label: "Air Consumption", value: "0.3-0.6 m³/min" },
    { label: "Accuracy Rate", value: "≥99.5%" },
    { label: "Machine Dimensions", value: "2500×1200×1800mm" },
    { label: "Weight", value: "800-1200 kg" },
    { label: "Material", value: "304 Stainless Steel" }
  ];

  const features = [
    {
      title: "High-Speed Sorting",
      description: "Advanced mechanical design ensures rapid and accurate cap orientation",
      icon: "⚡"
    },
    {
      title: "Precision Orientation",
      description: "Patented sorting mechanism guarantees consistent cap positioning",
      icon: "🎯"
    },
    {
      title: "Minimal Maintenance",
      description: "Robust construction with easy-access components for reduced downtime",
      icon: "🔧"
    },
    {
      title: "Flexible Design",
      description: "Adaptable to various cap types and sizes with quick changeover",
      icon: "🔄"
    }
  ];

  const applications = [
    "Beverage Industry - Water, Juice, Soft Drinks, Liquor",
    "Food Industry - Sauces, Condiments, Dairy Products, Oil",
    "Pharmaceutical - Medicine Bottles, Supplements",
    "Cosmetics - Shampoo, Lotion, Perfume Bottles",
    "Chemical Industry - Detergents, Cleaning Products"
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-900 to-blue-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">CAP SORTER SERIES</h1>
              <p className="text-xl mb-8 opacity-90">
                High-efficiency cap sorting systems designed for automated production lines with 
                precision orientation and minimal maintenance requirements.
              </p>
         
            </div>
            <div className="flex justify-center">
              <img 
                src={m1} 
                alt="Cap Sorter Series" 
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
              { id: 'specifications', label: 'Specifications' },
              { id: 'features', label: 'Features' },
              { id: 'applications', label: 'Applications' }
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
                <h2 className="text-3xl font-bold mb-6">Product Overview</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The Buchtech Cap Sorter Series represents the pinnacle of automated cap handling technology. 
                  Engineered for high-volume production environments, these systems ensure consistent cap 
                  orientation while maintaining exceptional speed and reliability.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Our cap sorters utilize advanced mechanical sorting principles combined with precision 
                  engineering to handle a wide variety of cap types, from simple screw caps to complex 
                  sports caps and specialized closures.
                </p>
                <div className="bg-green-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-green-800">Key Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-green-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Increased production efficiency by up to 40%
                    </li>
                    <li className="flex items-center text-green-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Reduced labor costs and human error
                    </li>
                    <li className="flex items-center text-green-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Consistent product quality and presentation
                    </li>
                    <li className="flex items-center text-green-700">
                      <span className="w-2 h-2 bg-green-600 rounded-full mr-3"></span>
                      Easy integration with existing production lines
                    </li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-6">Technical Advantages</h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-3 text-blue-800">Advanced Sorting Technology</h4>
                    <p className="text-gray-600">
                      Proprietary sorting mechanism ensures 99.5%+ accuracy rate with minimal cap damage
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-3 text-blue-800">Modular Design</h4>
                    <p className="text-gray-600">
                      Scalable system allows for easy expansion and customization based on production needs
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-3 text-blue-800">Smart Controls</h4>
                    <p className="text-gray-600">
                      Intuitive touch-screen interface with real-time monitoring and diagnostic capabilities
                    </p>
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
                  <div className="bg-green-600 text-white px-6 py-4">
                    <h3 className="text-xl font-semibold">Performance Specifications</h3>
                  </div>
                  <div className="p-6">
                    <table className="w-full">
                      <tbody className="space-y-2">
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
                    <h3 className="text-xl font-semibold mb-4">Optional Features</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Remote monitoring system
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Automatic lubrication system
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Cap damage detection
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Multi-size changeover kit
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        Data logging capabilities
                      </li>
                    </ul>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Compliance Standards</h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-gray-50 rounded">
                        <div className="font-semibold text-green-600">CE</div>
                        <div className="text-xs text-gray-600">European Conformity</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded">
                        <div className="font-semibold text-green-600">ISO 9001</div>
                        <div className="text-xs text-gray-600">Quality Management</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded">
                        <div className="font-semibold text-green-600">GMP</div>
                        <div className="text-xs text-gray-600">Good Manufacturing</div>
                      </div>
                      <div className="text-center p-3 bg-gray-50 rounded">
                        <div className="font-semibold text-green-600">FDA</div>
                        <div className="text-xs text-gray-600">Food Safety</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'features' && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Key Features & Benefits</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-4xl mb-4">{feature.icon}</div>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-12 bg-gradient-to-r from-blue-50 to-green-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Performance Advantages</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">99.5%</div>
                    <div className="text-gray-700">Sorting Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">600</div>
                    <div className="text-gray-700">Caps per Minute</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
                    <div className="text-gray-700">Continuous Operation</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'applications' && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Industry Applications</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Suitable Industries</h3>
                  <div className="space-y-4">
                    {applications.map((application, index) => (
                      <div key={index} className="flex items-start bg-white p-4 rounded-lg shadow-sm">
                        <span className="w-2 h-2 bg-green-600 rounded-full mr-4 mt-2"></span>
                        <span className="text-gray-700">{application}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Compatible Cap Types</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <div className="text-2xl mb-2">🔄</div>
                      <div className="font-medium">Screw Caps</div>
                      <div className="text-sm text-gray-600">Standard threaded caps</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <div className="text-2xl mb-2">⚡</div>
                      <div className="font-medium">Sports Caps</div>
                      <div className="text-sm text-gray-600">Pull-push type caps</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <div className="text-2xl mb-2">🎯</div>
                      <div className="font-medium">Flip-Top Caps</div>
                      <div className="text-sm text-gray-600">Hinged closure caps</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg shadow-sm text-center">
                      <div className="text-2xl mb-2">🔒</div>
                      <div className="font-medium">Pump Caps</div>
                      <div className="text-sm text-gray-600">Dispenser type caps</div>
                    </div>
                  </div>
                  
                  <div className="mt-8 bg-blue-50 p-6 rounded-lg">
                    <h4 className="text-lg font-semibold mb-4 text-blue-800">Case Study</h4>
                    <p className="text-blue-700 mb-4">
                      <strong>Beverage Company Implementation:</strong>
                    </p>
                    <p className="text-blue-600 text-sm leading-relaxed">
                      A major beverage manufacturer increased their production efficiency by 35% after 
                      implementing our Cap Sorter Series. The system handles 3 different cap sizes 
                      with automatic changeover, reducing setup time from 30 minutes to 3 minutes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>	 
 {/* CTA Section */}

      <ContactCTA />
    </div>
  );
};

export default CapSorterSeries;
