import React, { useState , useEffect } from 'react';
import ContactCTA from '../../../components/home/ContactCTA'; // Import from your existing file
import factoryImage from '../../../assets/images/zonwo-banner.jpg'; // Import from your existing file

// Import product images
import polymerDissolverImage from '../../../assets/images/polymer-dissolver.jpg';
import pipetteMachineImage from '../../../assets/images/PipetteMachine.jpg';
import constantWaterBathImage from '../../../assets/images/Constant-water-bath.jpg';
import densityMeterImage from '../../../assets/images/Density-meter.jpg';
import standardChipsImage from '../../../assets/images/standard-chips.jpg';
import balanceImage from '../../../assets/images/Balance--2.jpg';
import chemicalWeighingBalanceImage from '../../../assets/images/Chemical-weighing-balance.jpg';
import moistureMeterImage from '../../../assets/images/Moisture-meter.jpg';
import muffleFurnaceImage from '../../../assets/images/Muffle-furnace.jpg';
import ovenImage from '../../../assets/images/Oven.jpg';
import grinderMachineImage from '../../../assets/images/Grinder-machine.jpg';
import nitrogenTankImage from '../../../assets/images/Nitrogen-tank.jpg';

const SamplePreparationPage = () => {
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
    { parameter: 'Polymer Dissolver Range', value: 'RT-150℃ with ±0.01℃ accuracy' },
    { parameter: 'Pipette Precision', value: '1/1000 (1‰) ml' },
    { parameter: 'Pipetting Range', value: '1.000-100.000 ml' },
    { parameter: 'Balance Capacity', value: '220g with 1mg readability' },
    { parameter: 'Muffle Furnace Range', value: 'RT-1000°C' },
    { parameter: 'Grinder Speed', value: '25000 rpm with 30-200 mesh' },
    { parameter: 'Nitrogen Tank Volume', value: '10L with 50mm caliber' },
    { parameter: 'Power Supply', value: '220V 50Hz standard' }
  ];

  const applications = [
    {
      title: 'Sample Dissolving',
      description: 'Polymer dissolution and sample preparation',
      icon: '🧪'
    },
    {
      title: 'Chemical Transfer',
      description: 'Precise liquid handling and pipetting',
      icon: '💧'
    },
    {
      title: 'Weight Analysis',
      description: 'High-precision weighing and measurement',
      icon: '⚖️'
    },
    {
      title: 'Heating & Drying',
      description: 'Sample heating, drying, and thermal processing',
      icon: '🔥'
    }
  ];

  const equipment = [
    {
      id: 'polymer-dissolver',
      title: 'Polymer Dissolver P12',
      description: 'Wide range of sample dissolver solutions for various applications',
      image: polymerDissolverImage,
      details: 'Available in P12, P16, P18, P24 models',
      application: 'Sample dissolving',
      specifications: {
        'Type': 'Polymer dissolving machine',
        'Measuring range': 'RT-150℃',
        'Temp Accuracy': '±0.01℃',
        'Working voltage': '220V 50Hz',
        'Sample bottle capacity': '75 ml',
        'Temperature fluctuation and uniformity': '±0.01℃'
      },
      imagePosition: 'right'
    },
    {
      id: 'pipette-machine',
      title: 'Pipette Machine',
      description: 'High-precision chemical transfer equipment',
      image: pipetteMachineImage,
      application: 'Chemical transfer',
      specifications: {
        'Precision': '1/1000 (1‰) ml',
        'Pipetting range': '1.000-100.000 ml',
        'Syringe volume': '25ml',
        'Power': '220v/4A'
      },
      imagePosition: 'left'
    },
    {
      id: 'constant-water-bath',
      title: 'Constant Water Bath T25',
      description: 'Precise temperature control for solvent preparation',
      image: constantWaterBathImage,
      application: 'Solvent Preparation',
      specifications: {
        'Power Supply': '220V 50HZ',
        'Controller size': '300*265*160MM',
        'Thermostatic size': '200*220*220MM'
      },
      imagePosition: 'right'
    },
    {
      id: 'water-filling',
      title: 'Water Filling',
      description: 'Density measurement and water filling system',
      image: densityMeterImage,
      specifications: {
        'Range': 'P0-10'
      },
      imagePosition: 'left'
    },
    {
      id: 'pet-standard-chips',
      title: 'PET Standard Chips',
      description: 'High-quality reference material for calibration',
      image: standardChipsImage,
      details: '300g bottle grade chips',
      application: 'IV tester Calibration',
      imagePosition: 'right'
    },
    {
      id: 'balance',
      title: 'Balance',
      description: 'High-precision analytical balance',
      image: balanceImage,
      application: 'Sample Preparation',
      specifications: {
        'Maximum scale value': '220g',
        'Readability': '1 mg',
        'Repeatability deviation': '0.1 mg',
        'Linear error': '±0.0002g'
      },
      imagePosition: 'left'
    },
    {
      id: 'chemical-weighing-balance',
      title: 'Chemical Weighing Balance',
      description: 'Specialized balance for chemical sample preparation',
      image: chemicalWeighingBalanceImage,
      application: 'Sample preparation',
      applicableProducts: 'Juices, tea drinks, functional drinks, milk drinks, etc.',
      specifications: {
        'Balance': '0-100g, 10mg precision'
      },
      imagePosition: 'right'
    },
    {
      id: 'moisture-meter',
      title: 'Moisture Meter',
      description: 'Weight method moisture content testing',
      image: moistureMeterImage,
      application: 'Moisture content tester',
      details: 'Weight method to test the moisture content of PET sample.',
      imagePosition: 'left'
    },
    {
      id: 'muffle-furnace',
      title: 'Muffle Furnace A6',
      description: 'Programmable ashing furnace for laboratory applications',
      image: muffleFurnaceImage,
      application: 'Lab Application',
      specifications: {
        'Type': 'Programmable Ashing Furnace',
        'Measuring Temp': 'RT-1000 Degree'
      },
      imagePosition: 'right'
    },
    {
      id: 'oven',
      title: 'Oven',
      description: 'Multi-purpose heating equipment',
      image: ovenImage,
      application: 'Sample Heating, Solvent heating, Polymer drying',
      imagePosition: 'left'
    },
    {
      id: 'grinder-machine',
      title: 'Grinder Machine',
      description: 'High-speed grinding and processing equipment',
      image: grinderMachineImage,
      model: 'DFY-800C',
      specifications: {
        'Power': '220v',
        'Mesh': '30-200 mesh',
        'Speed': '25000 rpm',
        'Volume': '30-800gram',
        'Working time': '1-3 minutes per time',
        'Weight': '11kg',
        'Size': '23*23*39 cm'
      },
      imagePosition: 'right'
    },
    {
      id: 'nitrogen-tank',
      title: 'Nitrogen Tank',
      description: 'Cryogenic storage tank for laboratory use',
      image: nitrogenTankImage,
      specifications: {
        'Model number': 'YDS-10',
        'Volume (L)': '10',
        'Caliber (mm)': '50',
        'Outer diameter (mm)': '296',
        'Height (mm)': '54'
      },
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Sample Preparation Equipment</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive laboratory equipment for sample preparation, dissolving, weighing, and analysis
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
                      {item.model && (
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">
                          <strong>Model:</strong> {item.model}
                        </p>
                      )}
                      {item.applicableProducts && (
                        <p className="text-gray-700 text-sm leading-relaxed mb-4">
                          <strong>Applicable Products:</strong> {item.applicableProducts}
                        </p>
                      )}
                    </div>
                    
                    {item.specifications && (
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-green-500 mb-3">Specifications:</h5>
                        <div className="bg-gray-50 p-4 rounded-lg space-y-2">
                          {Object.entries(item.specifications).map(([key, value]) => (
                            <div key={key} className="flex justify-between items-center py-1 border-b border-gray-200 last:border-b-0">
                              <span className="font-medium text-gray-700 text-sm">{key}:</span>
                              <span className="text-gray-600 text-sm text-right">{value}</span>
                            </div>
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

          {/* Key Features Section */}
          {/* <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Equipment Categories</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-3">🌡️</div>
                <h4 className="font-semibold text-gray-900 mb-2">Temperature Control</h4>
                <p className="text-gray-700 text-sm">Water baths, ovens, and furnaces for precise heating</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-3">⚗️</div>
                <h4 className="font-semibold text-gray-900 mb-2">Sample Processing</h4>
                <p className="text-gray-700 text-sm">Dissolvers, grinders, and preparation equipment</p>
              </div>
              
              <div className="bg-gradient-to-br from-green-50 to-red-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-3">⚖️</div>
                <h4 className="font-semibold text-gray-900 mb-2">Precision Weighing</h4>
                <p className="text-gray-700 text-sm">Analytical balances and weighing systems</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-lg text-center">
                <div className="text-3xl mb-3">🔬</div>
                <h4 className="font-semibold text-gray-900 mb-2">Lab Support</h4>
                <p className="text-gray-700 text-sm">Standards, tanks, and auxiliary equipment</p>
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
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Applications & Laboratory Uses</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Sample Preparation</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Polymer dissolving and solution preparation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Chemical weighing and measuring</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Sample grinding and processing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Moisture content analysis</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Laboratory Operations</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Temperature-controlled reactions</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Precision liquid handling</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Sample drying and heating</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Calibration and standards</span>
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

export default SamplePreparationPage;