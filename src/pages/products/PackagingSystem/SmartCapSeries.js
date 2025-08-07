import React, { useState , useEffect } from 'react';
import m4 from '../../../assets/images/machine/m4.jpg';
import ContactCTA from '../../../components/home/ContactCTA';
const SmartCapSeries = () => {
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

  const smartFeatures = [
    {
      title: "Smart Controls",
      description: "AI-powered control systems with predictive maintenance and optimization",
      icon: "🧠",
      capabilities: [
        "Predictive maintenance alerts",
        "Automatic parameter optimization",
        "Machine learning integration",
        "Remote diagnostics"
      ]
    },
    {
      title: "Real-time Monitoring",
      description: "Comprehensive monitoring system with instant alerts and analytics",
      icon: "📊",
      capabilities: [
        "Live production metrics",
        "Quality trend analysis",
        "Performance dashboards",
        "Instant fault notifications"
      ]
    },
    {
      title: "Data Analytics",
      description: "Advanced analytics platform for production optimization and insights",
      icon: "📈",
      capabilities: [
        "Production efficiency analysis",
        "Quality correlation studies", 
        "Predictive quality control",
        "OEE optimization"
      ]
    },
    {
      title: "IoT Integration",
      description: "Industry 4.0 ready with cloud connectivity and remote management",
      icon: "🌐",
      capabilities: [
        "Cloud-based monitoring",
        "Remote parameter adjustment",
        "Mobile app control",
        "Enterprise system integration"
      ]
    }
  ];

  const specifications = [
    { label: "Processing Speed", value: "300-600 bottles/minute" },
    { label: "Cap Size Range", value: "15-150mm diameter" },
    { label: "Control System", value: "Advanced PLC + HMI" },
    { label: "Connectivity", value: "Ethernet, WiFi, 4G/5G" },
    { label: "Data Storage", value: "Local + Cloud backup" },
    { label: "Power Consumption", value: "5.5-12 kW" },
    { label: "Machine Dimensions", value: "4000×2000×2500mm" },
    { label: "Operating System", value: "Linux-based embedded" }
  ];

  const analyticsFeatures = [
    {
      category: "Production Analytics",
      features: [
        "Real-time OEE calculation",
        "Throughput optimization",
        "Downtime root cause analysis",
        "Energy consumption tracking"
      ]
    },
    {
      category: "Quality Analytics", 
      features: [
        "Statistical process control",
        "Quality trend prediction",
        "Defect pattern recognition",
        "Correlation analysis"
      ]
    },
    {
      category: "Maintenance Analytics",
      features: [
        "Predictive maintenance scheduling",
        "Component wear analysis",
        "Maintenance cost optimization",
        "Spare parts forecasting"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-900 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">SMART CAP SERIES</h1>
              <p className="text-xl mb-8 opacity-90">
                Intelligent capping systems with advanced control, real-time monitoring, 
                and AI-powered analytics for Industry 4.0 manufacturing.
              </p>
           
            </div>
            <div className="flex justify-center">
              <img 
                src={m4} 
                alt="Smart Cap Series" 
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
              { id: 'smart-features', label: 'Smart Features' },
              { id: 'analytics', label: 'Analytics' },
              { id: 'specifications', label: 'Specifications' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-4 font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'border-b-2 border-indigo-600 text-indigo-600'
                    : 'text-gray-600 hover:text-indigo-600'
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
                <h2 className="text-3xl font-bold mb-6">Intelligent Manufacturing</h2>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The Buchtech Smart Cap Series represents the future of intelligent manufacturing. 
                  These advanced capping systems integrate artificial intelligence, IoT connectivity, 
                  and predictive analytics to deliver unprecedented levels of efficiency and quality control.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Built for Industry 4.0 environments, our smart capping systems provide real-time 
                  insights, autonomous optimization, and seamless integration with enterprise systems 
                  to maximize productivity and minimize operational costs.
                </p>
                
                <div className="bg-indigo-50 p-6 rounded-lg mb-6">
                  <h3 className="text-xl font-semibold mb-4 text-indigo-800">Industry 4.0 Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center text-indigo-700">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                      Autonomous quality optimization
                    </li>
                    <li className="flex items-center text-indigo-700">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                      Predictive maintenance scheduling
                    </li>
                    <li className="flex items-center text-indigo-700">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                      Real-time production analytics
                    </li>
                    <li className="flex items-center text-indigo-700">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                      Remote monitoring and control
                    </li>
                  </ul>
                </div>

                <div className="bg-cyan-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 text-cyan-800">Smart Manufacturing</h3>
                  <p className="text-cyan-700">
                    Our smart systems learn from production data to continuously optimize performance, 
                    predict maintenance needs, and ensure consistent quality output.
                  </p>
                </div>
              </div>
              
              <div>
                <h3 className="text-2xl font-bold mb-6">Technology Integration</h3>
                <div className="space-y-6">
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-3 text-indigo-800">AI-Powered Control</h4>
                    <p className="text-gray-600">
                      Machine learning algorithms optimize capping parameters in real-time based on production data
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-3 text-indigo-800">Cloud Connectivity</h4>
                    <p className="text-gray-600">
                      Secure cloud integration enables remote monitoring, data analytics, and software updates
                    </p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-semibold mb-3 text-indigo-800">Digital Twin</h4>
                    <p className="text-gray-600">
                      Virtual machine model enables simulation, optimization, and predictive analysis
                    </p>
                  </div>
                </div>

                <div className="mt-8 bg-gradient-to-r from-indigo-100 to-cyan-100 p-6 rounded-lg">
                  <h4 className="text-lg font-semibold mb-4">Smart Performance Metrics</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-600">95%</div>
                      <div className="text-sm text-gray-600">OEE Improvement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-600">60%</div>
                      <div className="text-sm text-gray-600">Maintenance Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">24/7</div>
                      <div className="text-sm text-gray-600">Remote Monitoring</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'smart-features' && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Smart System Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {smartFeatures.map((feature, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white p-6">
                      <div className="flex items-center mb-4">
                        <div className="text-3xl mr-4">{feature.icon}</div>
                        <h3 className="text-xl font-bold">{feature.title}</h3>
                      </div>
                      <p className="opacity-90">{feature.description}</p>
                    </div>
                    <div className="p-6">
                      <h4 className="font-semibold mb-4 text-gray-800">Key Capabilities:</h4>
                      <ul className="space-y-2">
                        {feature.capabilities.map((capability, capIndex) => (
                          <li key={capIndex} className="flex items-center">
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                            <span className="text-gray-600">{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Smart System Architecture</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-3xl mb-3">🏭</div>
                    <div className="font-semibold mb-2">Edge Computing</div>
                    <div className="text-sm text-gray-600">Local processing for real-time control</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-3xl mb-3">☁️</div>
                    <div className="font-semibold mb-2">Cloud Platform</div>
                    <div className="text-sm text-gray-600">Advanced analytics and storage</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-3xl mb-3">📱</div>
                    <div className="font-semibold mb-2">Mobile Interface</div>
                    <div className="text-sm text-gray-600">Remote monitoring and control</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-3xl mb-3">🔗</div>
                    <div className="font-semibold mb-2">ERP Integration</div>
                    <div className="text-sm text-gray-600">Enterprise system connectivity</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6">Predictive Maintenance</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-indigo-800">Proactive Monitoring</h4>
                    <p className="text-gray-700 mb-4">
                      Advanced sensors and AI algorithms continuously monitor machine health, 
                      predicting maintenance needs before failures occur.
                    </p>
                    <ul className="space-y-2">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Vibration analysis and trending
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Temperature monitoring
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Wear pattern recognition
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                        Performance degradation alerts
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4 text-cyan-800">Maintenance Benefits</h4>
                    <div className="space-y-4">
                      <div className="bg-cyan-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Unplanned Downtime</span>
                          <span className="text-cyan-600 font-bold">-70%</span>
                        </div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Maintenance Costs</span>
                          <span className="text-green-600 font-bold">-45%</span>
                        </div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="flex justify-between items-center">
                          <span className="font-medium">Equipment Lifespan</span>
                          <span className="text-blue-600 font-bold">+30%</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'analytics' && (
            <div>
              <h2 className="text-3xl font-bold mb-8">Advanced Analytics Platform</h2>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                {analyticsFeatures.map((category, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-6">
                      <h3 className="text-xl font-bold mb-2">{category.category}</h3>
                    </div>
                    <div className="p-6">
                      <ul className="space-y-3">
                        {category.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center">
                            <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                            <span className="text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-8 rounded-lg mb-8">
                <h3 className="text-2xl font-bold mb-6">Real-time Dashboard</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-green-600 mb-2">98.5%</div>
                    <div className="text-gray-700 font-medium">Overall Equipment Effectiveness</div>
                    <div className="text-sm text-gray-500 mt-1">↑ 5.2% vs last month</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">547</div>
                    <div className="text-gray-700 font-medium">Bottles per Minute</div>
                    <div className="text-sm text-gray-500 mt-1">Real-time throughput</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-purple-600 mb-2">99.8%</div>
                    <div className="text-gray-700 font-medium">Quality Rate</div>
                    <div className="text-sm text-gray-500 mt-1">Last 24 hours</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">12</div>
                    <div className="text-gray-700 font-medium">Days to Maintenance</div>
                    <div className="text-sm text-gray-500 mt-1">Predicted schedule</div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold mb-4">Data Collection</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3 mt-2"></span>
                      <div>
                        <div className="font-medium">Production Metrics</div>
                        <div className="text-sm text-gray-600">Speed, throughput, efficiency</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3 mt-2"></span>
                      <div>
                        <div className="font-medium">Quality Parameters</div>
                        <div className="text-sm text-gray-600">Torque, alignment, sealing force</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3 mt-2"></span>
                      <div>
                        <div className="font-medium">Machine Health</div>
                        <div className="text-sm text-gray-600">Vibration, temperature, wear</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3 mt-2"></span>
                      <div>
                        <div className="font-medium">Environmental Data</div>
                        <div className="text-sm text-gray-600">Temperature, humidity, pressure</div>
                      </div>
                    </li>
                  </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h4 className="text-xl font-semibold mb-4">Analytics Capabilities</h4>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                      <div>
                        <div className="font-medium">Trend Analysis</div>
                        <div className="text-sm text-gray-600">Historical patterns and forecasting</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                      <div>
                        <div className="font-medium">Correlation Studies</div>
                        <div className="text-sm text-gray-600">Parameter relationships and optimization</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                      <div>
                        <div className="font-medium">Anomaly Detection</div>
                        <div className="text-sm text-gray-600">Automatic fault identification</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <span className="w-2 h-2 bg-purple-600 rounded-full mr-3 mt-2"></span>
                      <div>
                        <div className="font-medium">Optimization Algorithms</div>
                        <div className="text-sm text-gray-600">AI-driven performance enhancement</div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-6">Business Intelligence Integration</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl mb-3">📊</div>
                    <div className="font-semibold mb-2">Executive Dashboards</div>
                    <div className="text-sm text-gray-600">KPI tracking and strategic insights</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl mb-3">📈</div>
                    <div className="font-semibold mb-2">Custom Reports</div>
                    <div className="text-sm text-gray-600">Automated reporting and analysis</div>
                  </div>
                  <div className="text-center p-6 bg-gray-50 rounded-lg">
                    <div className="text-3xl mb-3">🔄</div>
                    <div className="font-semibold mb-2">API Integration</div>
                    <div className="text-sm text-gray-600">Seamless data exchange</div>
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
                  <div className="bg-indigo-600 text-white px-6 py-4">
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
                    <h3 className="text-xl font-semibold mb-4">Smart Technologies</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                        Machine learning algorithms
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                        Computer vision systems
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                        Edge computing processors
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                        IoT sensor networks
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-indigo-600 rounded-full mr-3"></span>
                        Secure cloud connectivity
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Software Features</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></span>
                        Real-time operating system
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></span>
                        Web-based interface
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></span>
                        Mobile app compatibility
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></span>
                        OPC-UA communication
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-cyan-600 rounded-full mr-3"></span>
                        RESTful API support
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h3 className="text-xl font-semibold mb-4">Security Features</h3>
                    <ul className="space-y-3">
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                        End-to-end encryption
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                        Multi-factor authentication
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                        Role-based access control
                      </li>
                      <li className="flex items-center">
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                        Secure VPN connectivity
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gradient-to-r from-indigo-50 to-cyan-50 p-8 rounded-lg">
                <h3 className="text-2xl font-bold mb-6">Digital Architecture</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-2xl font-bold text-indigo-600 mb-2">1ms</div>
                    <div className="text-gray-700 font-medium">Response Time</div>
                    <div className="text-sm text-gray-600">Real-time control</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-2xl font-bold text-cyan-600 mb-2">99.9%</div>
                    <div className="text-gray-700 font-medium">Uptime</div>
                    <div className="text-sm text-gray-600">System availability</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-2xl font-bold text-green-600 mb-2">AES-256</div>
                    <div className="text-gray-700 font-medium">Encryption</div>
                    <div className="text-sm text-gray-600">Data security</div>
                  </div>
                  <div className="bg-white p-6 rounded-lg text-center">
                    <div className="text-2xl font-bold text-purple-600 mb-2">10TB</div>
                    <div className="text-gray-700 font-medium">Storage</div>
                    <div className="text-sm text-gray-600">Data capacity</div>
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

export default SmartCapSeries;