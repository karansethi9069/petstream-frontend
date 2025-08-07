import React, { useState ,useEffect } from 'react';

const ServicesPage = () => {
  
  const [activeTab, setActiveTab] = useState('project-design');
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
  // Service data configuration
  const servicesData = {
    'project-design': {
      title: 'Project Design & Delivery Consultancy',
      shortTitle: 'Project Design',
      highlight: {
        title: 'Complete Project Solutions',
        content: 'At PET Stream we offer Project consultancy and delivery of complete projects for greenfield plants as well as the upgradation of old plants, our designated project manager will guide you from scratch to final production project design, machine selection, and Return on Investment with higher profit margin so you can get your running plant without any headache or involvement of extra manpower in case of extension.'
      }
    },
    'refurbishment': {
      title: 'Complete Machine Refurbishment Services & Health Checkup',
      shortTitle: 'Refurbishment',
      highlight: {
        title: 'Refurbishment Excellence',
        content: 'We offer Services for your old HUSKY, SACMI, NETSTAL PET-LINE, and closures machines refurbishment, retrofitting and life cycle upgradation. Our fleet of experienced service engineers spread across India and in Asian continent offer value-adding services.'
      }
    },
    'maintenance': {
      title: 'Annual Maintenance Contract & Plant Audit',
      shortTitle: 'Maintenance',
      highlight: {
        title: 'Maintenance Excellence',
        content: 'You can rely on us for AMC and plant audits to lower your maintenance cost and improve your machine OEE.'
      }
    },
    'relocation': {
      title: 'Machine Relocation, Installation & Dis-Assembly',
      shortTitle: 'Relocation',
      highlight: {
        title: 'Expert Machine Handling',
        content: 'Our Service team\'s expertise enables us to offer your old Machine Installation and machine transfer from one location to another location. For decades we have delivered multiple projects to our clients.'
      }
    },
    'breakdown': {
      title: 'Breakdown Support',
      shortTitle: 'Breakdown Support',
      highlight: {
        title: '24/7 Support Coverage',
        content: 'Our nationwide service team ensure any breakdowns are addressed promptly through remote phone support and onsite visits keeping your production on schedule.'
      }
    },
    'application': {
      title: 'Application Support',
      shortTitle: 'Application Support',
      highlight: {
        title: 'Production Optimization',
        content: 'We are here to troubleshoot and help you through any issues you experience from a production or new tool standpoint. The application support team can also help you to identify inefficiencies, can offer product optimization and process training get the most out of your machinery and maximize your production process.'
      }
    },
    'training': {
      title: 'Training',
      shortTitle: 'Training',
      highlight: {
        title: 'Professional Development',
        content: 'Our expert team will get your operators and shopfloor owners proficient and up to speed on how to best utilize machinery and software to take your manufacturing process to the next level.'
      }
    },
    'spare-parts': {
      title: 'Spare Parts & Consumables',
      shortTitle: 'Spare Parts',
      highlight: {
        title: 'Comprehensive Parts Inventory',
        content: 'We hold stock of consumables and OEM genuine spare parts of our partner companies and also HUSKY, SACMI, KM PET machines spare parts to pre-empt machine wear and tear as well as provide necessary part replacements in the event of unforeseen breakdowns. We also partner with express freight providers for fast shipment, getting you up and running in no time.'
      }
    }
  };

  const tabs = [
    { id: 'project-design', label: 'PROJECT DESIGN & DELIVERY CONSULTANCY', shortLabel: 'PROJECT DESIGN' },
    { id: 'refurbishment', label: 'COMPLETE MACHINE REFURBISHMENT', shortLabel: 'REFURBISHMENT' },
    { id: 'maintenance', label: 'ANNUAL MAINTENANCE CONTRACT', shortLabel: 'MAINTENANCE' },
    { id: 'relocation', label: 'MACHINE RELOCATION', shortLabel: 'RELOCATION' },
    { id: 'breakdown', label: 'BREAKDOWN SUPPORT', shortLabel: 'BREAKDOWN' },
    { id: 'application', label: 'APPLICATION SUPPORT', shortLabel: 'APPLICATION' },
    { id: 'training', label: 'TRAINING', shortLabel: 'TRAINING' },
    { id: 'spare-parts', label: 'SPARE PARTS & CONSUMABLES', shortLabel: 'SPARE PARTS' }
  ];

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const currentService = servicesData[activeTab];

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 pt-16 sm:pt-0">
      {/* Hero Banner Section - Mobile Optimized */}
      <section
        className="relative bg-fixed bg-center bg-cover h-56 sm:h-64 md:h-80 lg:h-96"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200&h=600&fit=crop')` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-3 sm:px-4 pt-4 sm:pt-0">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold text-white mb-2 leading-tight max-w-4xl mt-4 sm:mt-0">
            <span className="block sm:hidden">{currentService.shortTitle}</span>
            <span className="hidden sm:block">{currentService.title}</span>
          </h1>
          <nav className="flex items-center text-white text-xs sm:text-sm opacity-90 mt-2">
            <a href="/" className="hover:text-gray-200 transition-colors">Home</a>
            <span className="mx-2">›</span>
            <span className="truncate max-w-28 sm:max-w-none">
              <span className="block sm:hidden">{currentService.shortTitle}</span>
              <span className="hidden sm:block">{currentService.title}</span>
            </span>
          </nav>
        </div>
      </section>

      {/* Main Container - Mobile Optimized */}
      <div className="max-w-6xl mx-auto mt-2 sm:mt-4 md:mt-8 px-3 sm:px-4 w-full overflow-hidden">
        {/* Tab Navigation */}
        <div className="bg-white rounded-t-lg shadow-lg overflow-hidden">
          {/* Mobile Tab Navigation - Horizontal Scroll with Better UX */}
          <div className="block sm:hidden">
            <div className="flex overflow-x-auto scrollbar-hide bg-gray-50 p-2" style={{scrollbarWidth: 'none', msOverflowStyle: 'none'}}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => handleTabClick(tab.id)}
                  className={`flex-shrink-0 px-4 py-2 mx-1 text-xs font-semibold text-center rounded-full transition-all duration-300 ease-in-out whitespace-nowrap min-w-max ${
                    activeTab === tab.id
                      ? 'text-white bg-blue-600 shadow-md'
                      : 'text-gray-700 bg-white hover:bg-gray-100 hover:text-gray-800 shadow-sm border border-gray-200'
                  }`}
                >
                  {tab.shortLabel}
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Tab Navigation */}
          <div className="hidden sm:flex flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabClick(tab.id)}
                className={`flex-1 min-w-0 px-2 py-3 md:py-4 text-xs md:text-sm font-medium text-center border-b-3 transition-all duration-300 ease-in-out ${
                  activeTab === tab.id
                    ? 'text-blue-600 border-blue-600 bg-white'
                    : 'text-gray-600 border-transparent bg-white hover:bg-gray-50 hover:text-gray-800'
                }`}
              >
                <span className="block leading-tight">
                  {tab.label}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Content Container - Mobile Optimized */}
        <div className="bg-white rounded-b-lg shadow-lg min-h-80 sm:min-h-96 w-full overflow-hidden">
          <div className="p-4 sm:p-4 md:p-6 lg:p-8 xl:p-12 w-full">
            <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-gray-800 mb-6 sm:mb-6 md:mb-8 leading-tight break-words">
              <span className="block sm:hidden">{currentService.shortTitle}</span>
              <span className="hidden sm:block">{currentService.title}</span>
            </h1>
            
            {/* Highlight Box - Mobile Optimized */}
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-5 sm:p-5 md:p-6 lg:p-8 rounded-xl mb-6 sm:mb-6 md:mb-8 shadow-lg w-full overflow-hidden">
              <h3 className="text-lg sm:text-lg md:text-xl font-semibold mb-3 sm:mb-3 md:mb-4 break-words">
                {currentService.highlight.title}
              </h3>
              <p className="text-white/95 leading-relaxed text-sm sm:text-base break-words hyphens-auto">
                {currentService.highlight.content}
              </p>
            </div>

            {/* Service First Approach - Mobile Optimized */}
            <section className="mb-6 sm:mb-6 md:mb-8 w-full">
              <h2 className="text-xl sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-3 md:mb-4 break-words">
                Service First Approach
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 sm:mb-4 md:mb-6 text-base sm:text-base break-words hyphens-auto">
                PET Stream Inc. is committed to servicing our clients throughout the lifecycle of their technology. Our services extend beyond installation into breakdown support, spare parts, preventative maintenance, software applications & more to keep your manufacturing operation running smoothly.
              </p>
            </section>

            {/* Commitment Beyond Installation - Mobile Optimized */}
            <section className="mb-6 sm:mb-6 md:mb-8 w-full">
              <h2 className="text-xl sm:text-xl md:text-2xl font-semibold text-gray-800 mb-3 sm:mb-3 md:mb-4 break-words">
                Commitment Beyond Installation
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 sm:mb-4 md:mb-6 text-base sm:text-base break-words hyphens-auto">
                At PET Stream Inc. the relationship with the client doesn't end with installation of our own machine only. We are committed to making sure your manufacturing operation is on schedule and achieving its potential through our service agreements.
              </p>
              <p className="text-gray-600 leading-relaxed text-base sm:text-base break-words hyphens-auto">
                Our highly skilled team of service engineers provide nationwide & overseas engineering support and technical assistance enabling our manufacturers customers to reduce downtime, maximise production and get the most out of their machines.
              </p>
            </section>
          </div>
        </div>
      </div>

      {/* Bottom spacing - Mobile Optimized */}
      <div className="py-2 sm:py-4 md:py-8"></div>
      
      {/* Contact CTA - Mobile Optimized */}
      <div className="bg-blue-600 text-white text-center py-6 sm:py-8 px-3 sm:px-4">
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-2">Ready to Get Started?</h3>
        <p className="text-sm sm:text-base mb-4 max-w-2xl mx-auto">Contact us today to discuss your project requirements</p>
        <button className="bg-white text-blue-600 px-6 py-2 sm:px-8 sm:py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors text-sm sm:text-base">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default ServicesPage;