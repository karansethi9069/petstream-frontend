import React, { useState , useEffect } from 'react';
import ContactCTA from '../../../components/home/ContactCTA'; // Import from your existing file
import factoryImage from '../../../assets/images/zonwo-banner.jpg'; // Import from your existing file

// Import product images
import ivs100Image from '../../../assets/images/know_more/zonwon/IVS100-Series.jpg';
import ivs200Image from '../../../assets/images/know_more/zonwon/IVS200-Series.jpg';
import ivs300Image from '../../../assets/images/know_more/zonwon/IVS300-Series.jpg';
import ivs400Image from '../../../assets/images/know_more/zonwon/IVS400-Series.jpg';
import ivs800Image from '../../../assets/images/know_more/zonwon/IVS800-Series.jpg';

const ViscometorPage = () => {
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
    { parameter: 'Temperature Range', value: '5-95°C (Standard), Up to 180°C (High Temp)' },
    { parameter: 'Measurement Types', value: 'Kinematic, Dynamic, Relative, Specific Viscosity' },
    { parameter: 'Standards Compliance', value: 'ISO1628, ASTMD4603, GB/T14190, ISO307' },
    { parameter: 'Positions Available', value: '1, 2, 4, 6 measuring positions' },
    { parameter: 'Display', value: 'LCD screen with running status' },
    { parameter: 'Automation Level', value: 'Manual to Fully Automatic' },
    { parameter: 'Tube Type', value: 'Ubbelohde glass capillary' },
    { parameter: 'Data Management', value: 'FDA & GLP compliant' }
  ];

  const applications = [
    {
      title: 'Polymer Testing',
      description: 'Viscosity measurement for PET, PBT, PA6, PA66, PC materials',
      icon: '🧪'
    },
    {
      title: 'Quality Control',
      description: 'Intrinsic viscosity and molecular weight determination',
      icon: '📊'
    },
    {
      title: 'Research & Development',
      description: 'Material characterization and optimization studies',
      icon: '🔬'
    },
    {
      title: 'Standards Compliance',
      description: 'Testing according to international standards and regulations',
      icon: '📋'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
{/* Hero Banner - Exact same as Lab Equipment page */}
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
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Ubbelohde Viscometer</h1>
          </div>

          {/* IVS100 Series */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Left side - Content */}
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-green-500 mb-4">IVS100 Series</h3>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">Manual Ubbelohde Viscometer</h4>
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-green-500 mb-3">Precision & Constant Temperature Control</h5>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Designed for Ubbelohde viscosity Measurement manually, wildly applied to measure the kinematic viscosity, dynamic viscosity, relative viscosity, specific viscosity, intrinsic viscosity, average molecular weight, etc. Including: Viscometer water bath, cooling system, glass capillary tube, tube holder, Precision thermometer, etc.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-green-500 mb-3">Applicable material</h5>
                  <p className="text-gray-700 text-sm font-semibold mb-2">Applicable material are</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    PET, PBT, PA6, PA66, PC, PVC, PAN, PAM, PVDF, SILICONE, PMMA, PLA, PGA, CA, MCC, etc. Suitable for ISO1628, ASTMD4603, GB/T14190, ISO307, ASTMD789, GB/T12006, HB/T2234, GB/T3401, GB/T12005, GB17514, GB/T28610, Pharmacopoeia, and other international and domestic standards.
                  </p>
                </div>
              </div>

              {/* Right side - Image */}
              <div className="order-1 lg:order-2 flex justify-center items-center">
                <div className="w-full max-w-md">
                  <img 
                    src={ivs100Image} 
                    alt="IVS100 Series Viscometer" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* IVS200 Series */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Left side - Image */}
              <div className="order-1 lg:order-1 flex justify-center items-center">
                <div className="w-full max-w-md">
                  <img 
                    src={ivs200Image} 
                    alt="IVS200 Series Viscometer" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              {/* Right side - Content */}
              <div className="order-2 lg:order-2">
                <h3 className="text-2xl font-bold text-green-500 mb-4">IVS200 Series</h3>
                <div className="mb-6">
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Your most flexible and precise option with Benchtop design 1 head Automatic Viscometer
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    This unique and flexible concept, in combination with the compact design offers flexibility and automation, which helps you to unlock valuable insights into performance and product optimization.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Designed for Ubbelohde viscosity Measurement manually, wildly applied to measure the kinematic viscosity, dynamic viscosity, relative viscosity, specific viscosity, intrinsic viscosity, average molecular weight, etc. Including: Viscometer water bath, cooling system, glass capillary tube, tube holder, Precision thermometer, etc.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-green-500 mb-3">Applicable material</h5>
                  <p className="text-gray-700 text-sm font-semibold mb-2">Applicable material are</p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    PET, PBT, PA6, PA66, PC, PVC, PAN, PAM, PVDF, SILICONE, PMMA, PLA, PGA, CA, MCC, etc. Suitable for ISO1628, ASTMD4603, GB/T14190, ISO307, ASTMD789, GB/T12006, HB/T2234, GB/T3401, GB/T12005, GB17514, GB/T28610, Pharmacopoeia, and other international and domestic standards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* IVS300 Series */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Left side - Content */}
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-green-500 mb-4">IVS300 Series</h3>
                <div className="mb-6">
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Ubbelohde Viscometer IVS300 series comes with screen which display the running status of each measurement unit, precisely 6 units at the same time. It comes with 1, 2, 4, 6 measuring positions & it can obtain intrinsic viscosity through the point method. There is no need to monitor the process after the start in this viscometer, the auto test runs continuously until the test gets completed. It accurately controls the temperature, time & flow rate of the fluid tested. It meets FDA & GLP regulations on experiment data management.
                  </p>
                </div>
                
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-green-500 mb-3">Features</h5>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-0.5">•</span>
                      <span className="text-gray-700 text-sm">Display screen controls 6 units at the same time</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-0.5">•</span>
                      <span className="text-gray-700 text-sm">One point method / single concentration method</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-0.5">•</span>
                      <span className="text-gray-700 text-sm">Composed of Stainless steel material</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-0.5">•</span>
                      <span className="text-gray-700 text-sm">Automatic cleaning instead of manual cleaning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-0.5">•</span>
                      <span className="text-gray-700 text-sm">No need to disassemble ubbelohde viscometer to avoid manmade damage</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-0.5">•</span>
                      <span className="text-gray-700 text-sm">Data statistics function</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-0.5">•</span>
                      <span className="text-gray-700 text-sm">Provision of basic data for controlling quality of the products</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2 mt-0.5">•</span>
                      <span className="text-gray-700 text-sm">Can obtain intrinsic viscosity through one point method</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-green-500 mb-3">Applications –</h5>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Ubbelohde viscometer helps in obtaining kinetic viscosity, Dynamic viscosity, Relative viscosity, Viscosity ratio, DP, intrinsic viscosity & average molecular weight of chemical fluids, petroleum fluids & biological fluids.
                  </p>
                </div>
              </div>

              {/* Right side - Image */}
              <div className="order-1 lg:order-2 flex justify-center items-center">
                <div className="w-full max-w-md">
                  <img 
                    src={ivs300Image} 
                    alt="IVS300 Series Viscometer" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* IVS400 Series */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Left side - Image */}
              <div className="order-1 lg:order-1 flex justify-center items-center">
                <div className="w-full max-w-md">
                  <img 
                    src={ivs400Image} 
                    alt="IVS400 Series Viscometer" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>

              {/* Right side - Content */}
              <div className="order-2 lg:order-2">
                <h3 className="text-2xl font-bold text-green-500 mb-4">IVS400 Series</h3>
                <div className="mb-6">
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    IVS400 is the updated version of IVS300 series. It can wash the tube automatically, easy to operate.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    IVS400 has the function of collecting waste liquid for recycling and re-using.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    IVS400 no need to move the tubes for washing to avoiding the directly contact on person and chemical, meanwhile it can reduce the losses on the tubes.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    IVS400 Series comes with 2 heads, 4 heads, and 6 heads, It also offer flexibility of Retrofitting
                  </p>
                </div>
                
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-green-500 mb-3">ADVANTAGES –</h5>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Ubbelohde viscometer helps in obtaining kinetic viscosity, Dynamic viscosity, Relative viscosity, Viscosity ratio, DP, intrinsic viscosity & average molecular weight of chemical fluids, petroleum fluids & biological fluids.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* IVS800 & IVS800H Series */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
              {/* Left side - Content */}
              <div className="order-2 lg:order-1">
                <h3 className="text-2xl font-bold text-green-500 mb-4">IVS800 & IVS800H Series</h3>
                <div className="mb-6">
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    Automatic ubbelohde viscometer IVS800 is for 5-95 degree C water bath test range.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    But IVS800H is with 180 degree C heated oil design measures viscosity of polymers with high temperature
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    IVS800 series viscometer is compiled in accordance with ISO, ASTM, DIN standards.
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    IVS800 & 800H Series offer automation from cleaning of Capillary tube to testing is done automatically
                  </p>
                </div>
                
                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-green-500 mb-3">Features –</h5>
                  <div className="space-y-2">
                    <p className="text-gray-700 text-sm">1. ALL in one measurement Unit</p>
                    <p className="text-gray-700 text-sm">2. High Temperatures environment</p>
                    <p className="text-gray-700 text-sm">3. Less reagent consumption</p>
                    <p className="text-gray-700 text-sm">4. Automatic cleaning instead of manual</p>
                    <p className="text-gray-700 text-sm">5. Data Statics function</p>
                    <p className="text-gray-700 text-sm">6. Automatic injection</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h5 className="text-lg font-semibold text-green-500 mb-3">Applications -</h5>
                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    The High temperature ubbelohde viscometer has applications in measuring viscosity of high polymers such as UHMPE, PE, PP as it requires higher measuring temperature
                  </p>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    It is also used for viscosity (Kinetic Viscosity, Dynamic Viscosity, Relative Viscosity) testing of high-temperature polymers as well as Petroleum fluids
                  </p>
                </div>
              </div>

              {/* Right side - Image */}
              <div className="order-1 lg:order-2 flex justify-center items-center">
                <div className="w-full max-w-md">
                  <img 
                    src={ivs800Image} 
                    alt="IVS800 Series Viscometer" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* YouTube Video Section */}
          <div className="mb-16">
            <div className="max-w-4xl mx-auto">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-lg">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/pazooRCOLJs?si=NCZRIJZ8oyNxfjsT"
                  title="Viscometer Operation Video" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>

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
                      <span className="text-gray-600 text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'applications' && (
              <div className="prose prose-lg max-w-none">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Applications & Materials</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Measurement Types</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Kinematic viscosity measurement</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Dynamic viscosity analysis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Relative and specific viscosity</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 mr-2 mt-1">•</span>
                        <span>Intrinsic viscosity and molecular weight</span>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Testing Fluids</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Chemical fluids analysis</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Petroleum fluids testing</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>Biological fluids examination</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-2 mt-1">•</span>
                        <span>High-temperature polymers</span>
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

export default ViscometorPage;