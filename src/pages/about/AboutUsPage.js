
import React from 'react';

const AboutUsPage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Main content area with proper padding and scrolling */}
      <main className="flex-1">
        {/* Hero Banner */}
        <section className="relative">
          <img 
            src="/api/placeholder/1200/300" 
            alt="About Us Banner" 
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-4xl font-bold text-white">About Us</h1>
          </div>
        </section>
        
        {/* Core Values Section */}
        <section className="bg-blue-800 text-white py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {/* Innovative Solutions */}
              <div className="flex flex-col items-center text-center px-4 border-r border-blue-700">
                <div className="mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                    <path d="M8 2 L12 6 L16 2"></path>
                    <path d="M8 22 L12 18 L16 22"></path>
                    <path d="M2 8 L6 12 L2 16"></path>
                    <path d="M22 8 L18 12 L22 16"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Innovative Solutions</h3>
              </div>
              
              {/* Smart */}
              <div className="flex flex-col items-center text-center px-4 border-r border-blue-700">
                <div className="mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                    <circle cx="8" cy="10" r="1"></circle>
                    <line x1="10" y1="8" x2="14" y2="12"></line>
                    <circle cx="14" cy="8" r="1"></circle>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Smart</h3>
              </div>
              
              {/* Trust */}
              <div className="flex flex-col items-center text-center px-4 border-r border-blue-700">
                <div className="mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 8L10 12L14 8"></path>
                    <path d="M8 14H16C18.2091 14 20 12.2091 20 10C20 7.79086 18.2091 6 16 6H8C5.79086 6 4 7.79086 4 10C4 12.2091 5.79086 14 8 14Z"></path>
                    <path d="M18 14V16C18 18.2091 16.2091 20 14 20H10C7.79086 20 6 18.2091 6 16V14"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Trust</h3>
              </div>
              
              {/* Win (assuming from the partial text in image) */}
              <div className="flex flex-col items-center text-center px-4">
                <div className="mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-20 w-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3H14z"></path>
                    <path d="M7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold mb-2">Win</h3>
              </div>
            </div>
          </div>
        </section>
        
        {/* About Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Cultivating trust, Creating value</h2>
              <p className="text-gray-600 text-center mb-12">We provide complete process for PET bottles equipment and service need.</p>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Our role in the plastic industry</h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                At PET Stream, we offer world-leading capital equipment and solutions of the highest quality for maximum manufacturing efficiencies and lowest 
                cost of operation. We depend on customer service and sustainability to deliver. In doing so, we focus on customers' need, machine and technological 
                future. This makes us the best supplier for higher production efficiency, availability.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                We offer equipment and high-end solutions and maintain a skilled expertise to provide service needed.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                PET Stream Inc. is an international supplier of technologically advanced machines for the PET plastic industry. We have supplied and exported
                machines to Germany and to international end-user facilities. Our founder of the company have previously worked with Krones AG where he was
                exposed to SACMI and has registered office in Delhi, as partner PET has been successful in the plastic sector for bottle, and various other industry in which
                plastic is used. We have been selling, installing, commissioning many of PET equipment's in the food, beverage and non food sector from the past
                years. We have established warehouses for spare parts of our equipment, intermediate spare parts of crucial equipment & consumables used in Plastics,
                molding and liquid filling machines.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                With over 300 service technicians located across the country, we are well setup to service the domestic locations whenever customers are in need. From
                regular maintenance service, our team ensures maximum lifespan for your equipment, from all types of Blow mold to different types of Filling machines, we have machines
                to produce cutting assemblies across the length and breadth.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                We are not bound by bureaucratic rules and procedures, we rely upon systems to allow us ensure that our customers and always be in control of our
                policies and decisions.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AboutUsPage;