import React, { useEffect } from 'react';
import aboutImage from '../assets/images/abpt.jpg';
import aboutImg from '../assets/images/project-update.jpg';
import ContactCTA from '../components/home/ContactCTA';
import leader from '../assets/team-new/ravi_bansal.jpg';

const AboutUsPage = () => {
  // Multiple approaches to ensure scroll to top
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

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Banner */}
      <section
        className="relative py-24 md:py-32 bg-gray-900 text-white"
        style={{
          backgroundImage: `linear-gradient(rgba(73, 72, 72, 0.7), rgba(34, 32, 32, 0.7)), url(${aboutImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Learn about our journey, our mission, and the team behind PET Stream Incorporation.
          </p>
        </div>
      </section>

      {/* SECTION 1A: COMPANY MISSION & VALUES */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-indigo-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-block">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Cultivating trust, Creating value
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-4"></div>
            </div>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Your reliable partner for first-class equipment and service need.
            </p>
          </div>
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 flex flex-col items-center order-1 lg:order-1">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-white p-6 rounded-2xl shadow-xl">
                  <img 
                    src={leader} 
                    alt="Ravi Bansal - Leadership Team" 
                    className="rounded-xl w-64 h-80 object-cover mb-6 shadow-lg"
                  />
                  <div className="text-center">
                    <h4 className="text-2xl font-bold text-gray-800 mb-2">Ravi Bansal</h4>
                    <p className="text-blue-600 font-semibold text-lg">Chief Executive Officer</p>
                    <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-3"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 order-2 lg:order-2 space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
                <h3 className="text-3xl font-bold text-gray-800 mb-6 flex items-center">
                  <div className="w-2 h-8 bg-gradient-to-b from-blue-500 to-indigo-500 rounded-full mr-4"></div>
                  Our role in the plastic industry
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      At PET Stream, we offer world's leading capital equipment and tool solutions of the highest quality for maximum manufacturing efficiency and lowest cost of ownership. We operate in a customer-centric and value-adding manner.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-indigo-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      We offer equipment with highest precision and maximum value addition supported by prompt service network.
                    </p>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-3 h-3 bg-blue-500 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      PSI stands for leading Project delivery, Sales and Service, and Project consultancy provider in field of Plastic engineering. We focus on delivering exceptional value through our comprehensive solutions.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white relative">
        {/* Decorative Elements */}
        <div className=""></div>
        
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300"></div>
                <div className="relative">
                  <img 
                    src={aboutImg} 
                    alt="PET Stream Team" 
                    className="rounded-2xl w-full h-auto shadow-2xl transform group-hover:scale-105 transition duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 order-2 lg:order-1">
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl font-bold mb-6 text-gray-900 leading-tight">
                    Our <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Story</span>
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mb-8"></div>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border-l-4 border-blue-500">
                    <p className="text-gray-800 leading-relaxed text-lg font-medium">
                      PET Stream Inc. is a leading project delivery company of technologically advanced machines & tools for Plastics Industry.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-6 border-l-4 border-indigo-500">
                    <p className="text-gray-800 leading-relaxed text-lg">
                      We have supplied machines and tools for various leading and critical applications not only in Indian continent but also in other countries of South Asia, South East Asia, African Continent and West Asia.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-6 border-l-4 border-purple-500">
                    <p className="text-gray-800 leading-relaxed text-lg">
                      Our capabilities include Machine Refurbishment, Hot Runner on-site refurbishment, Annual maintenance contracts, Plant Audits, Breakdown services, Project consultation, and New Product development.
                    </p>
                  </div>
                  
                  <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-xl p-6 border-l-4 border-green-500">
                    <p className="text-gray-800 leading-relaxed text-lg font-medium">
                      Through our dedication to excellence and customer satisfaction, we have established ourselves as a trusted partner for many leading manufacturing companies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactCTA />
    </div>
  );
};

export default AboutUsPage;
