import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Layout from '../components/layout/Layout';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import CustomersData from '../data/customers';
import ContactCTA from '../components/home/ContactCTA';
import hero from '../assets/images/abpt.jpg';

const CustomersPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCustomers, setFilteredCustomers] = useState([]);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);
  
  // Sort customers by display order
  const sortedCustomers = [...CustomersData].sort((a, b) => a.displayOrder - b.displayOrder);
  
  useEffect(() => {
    // Set visibility after component mounts for animations
    setIsVisible(true);
    
    // Initialize filtered customers
    setFilteredCustomers(sortedCustomers);
  }, []);
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
  // Handle search
  useEffect(() => {
    const results = sortedCustomers.filter(customer =>
      customer.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      customer.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredCustomers(results);
  }, [searchTerm]);
  
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || isPaused) return;
    
    let lastTime = 0;
    const speed = 0.3; // Pixels per millisecond
    const scrollAnimation = (timestamp) => {
      const elapsed = timestamp - lastTime;
      
      if (elapsed > 16) { // Aim for 60fps
        lastTime = timestamp;
        
        // Move the scroll position from left to right
        scrollContainer.scrollLeft += speed * elapsed;
        
        // Reset to beginning when reaching the end
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
          scrollContainer.scrollTop = 0; // Reset vertical scroll to top
        }
      }
      
      animationRef.current = requestAnimationFrame(scrollAnimation);
    };
    
    // Initial reset to top
    scrollContainer.scrollTop = 0;
    animationRef.current = requestAnimationFrame(scrollAnimation);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, isVisible]);

  return (
    <main>
      {/* Hero Section - Responsive for Mobile and Desktop */}
      <section
        className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white flex items-center justify-center h-40 sm:h-48 md:h-56 lg:h-80 xl:h-96 mt-16 sm:mt-12 md:mt-8 lg:mt-0"
        style={{
          backgroundImage: `url(${hero})`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
        }}
      >
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        
        {/* Hero Content - Add content here if needed */}
        <div className="relative z-10 text-center px-4">
          {/* Add your hero content here if needed */}
        </div>
      </section>

      {/* Secondary Section - Bringing Value, Enhancing trust */}
      <section className="py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-700 mb-4 md:mb-6">
              Bringing Value, Enhancing trust
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed px-4">
              Since the Incorporation of PSI, we have provided solutions to more than 200+ customer at home as well as abroad, we are grateful to our customers.
            </p>
          </motion.div>
        </div>
      </section>
      
      {/* Search & Filter Section - Commented out as in original */}
      {/* <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search customers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full py-3 px-4 pl-12 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
              />
              <svg
                className="absolute left-4 top-3.5 h-5 w-5 text-gray-400"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          
            {filteredCustomers.length > 0 && (
              <div className="text-center mt-4 text-gray-600">
                Showing {filteredCustomers.length} customer{filteredCustomers.length !== 1 ? 's' : ''}
              </div>
            )}
          </div>
        </div>
      </section> */}
      
      {/* Customers Grid Section */}
      <section className="py-8 md:py-10">
        <div className="container mx-auto px-4">
          {filteredCustomers.length > 0 ? (
            <>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                {filteredCustomers.map((customer, index) => (
                  <motion.div
                    key={customer.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                  >
                    <div className="h-32 sm:h-40 md:h-48 bg-gray-50 flex items-center justify-center p-4 md:p-6">
                      <img
                        src={customer.image}
                        alt={customer.title}
                        className="max-h-full max-w-full object-contain transition-all duration-300 hover:scale-105"
                      />
                    </div>
                    <div className="p-4 md:p-6 flex-1 flex flex-col">
                      {/* <h3 className="text-xl font-bold text-gray-800 mb-2 text-center">{customer.title}</h3> */}
                      <a
                        href={`/Customers/${customer.slug}`}
                        className="text-blue-600 font-medium hover:text-blue-800 transition-colors duration-300 inline-flex items-center"
                      >
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Many More Pages Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-center mt-12 md:mt-16 py-8 md:py-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl"
              >
                <div className="max-w-2xl mx-auto px-4 md:px-6">
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
                    And Many More...
                  </h2>
                  <p className="text-base md:text-lg text-gray-600 mb-6">
                    We work with hundreds of satisfied customers across various industries worldwide. 
                    Each partnership represents our commitment to excellence and innovation.
                  </p>
                  
                  {/* Decorative Elements */}
                  <div className="flex justify-center items-center space-x-4 mb-6 md:mb-8">
                    <div className="flex space-x-1 md:space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 md:w-3 md:h-3 bg-blue-400 rounded-full animate-pulse"
                          style={{ animationDelay: `${i * 0.2}s` }}
                        ></div>
                      ))}
                    </div>
                    <span className="text-xl md:text-2xl font-bold text-blue-600">∞</span>
                    <div className="flex space-x-1 md:space-x-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 h-2 md:w-3 md:h-3 bg-indigo-400 rounded-full animate-pulse"
                          style={{ animationDelay: `${(i + 5) * 0.2}s` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-center">
                    <div className="bg-white rounded-lg p-3 md:p-4 shadow-sm">
                      <div className="text-xl md:text-2xl font-bold text-blue-600">200+</div>
                      <div className="text-xs md:text-sm text-gray-600">Global Clients</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 md:p-4 shadow-sm">
                      <div className="text-xl md:text-2xl font-bold text-green-600">28+</div>
                      <div className="text-xs md:text-sm text-gray-600">Countries</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 md:p-4 shadow-sm">
                      <div className="text-xl md:text-2xl font-bold text-purple-600">15+</div>
                      <div className="text-xs md:text-sm text-gray-600">Industries</div>
                    </div>
                    <div className="bg-white rounded-lg p-3 md:p-4 shadow-sm">
                      <div className="text-xl md:text-2xl font-bold text-orange-600">500+</div>
                      <div className="text-xs md:text-sm text-gray-600">Projects</div>
                    </div>
                  </div>
                  
                  <div className="mt-6 md:mt-8">
                    <p className="text-blue-600 font-semibold text-base md:text-lg">
                      Become Our Next Success Story
                    </p>
                  </div>
                </div>
              </motion.div>
            </>
          ) : (
            <div className="text-center py-12 md:py-16">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 md:h-16 md:w-16 mx-auto text-gray-400 mb-4 md:mb-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <h3 className="text-xl md:text-2xl font-bold text-gray-700 mb-2">No customers found</h3>
              <p className="text-gray-500 max-w-md mx-auto px-4">
                We couldn't find any customers matching your search criteria. Please try different keywords.
              </p>
              <button
                onClick={() => setSearchTerm('')}
                className="mt-4 md:mt-6 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 md:px-6 rounded-lg transition-all duration-300"
              >
                Clear Search
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <ContactCTA />
    </main>
  );
};

export default CustomersPage;