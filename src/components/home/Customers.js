import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import CustomersData from '../../data/customers';

const Customers = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = useRef(null);
  const animationRef = useRef(null);
  
  const featuredCustomers = CustomersData
    .filter(customer => customer.isFeatured)
    .sort((a, b) => a.displayOrder - b.displayOrder)
    .map(customer => ({
        ...customer,
        slug: 'about/customers'
    }));

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer || isPaused) return;
    
    let lastTime = 0;
    const speed = 0.15; // Reduced speed for slower movement

    const scrollAnimation = (timestamp) => {
      const elapsed = timestamp - lastTime;
      if (elapsed > 16) {
        lastTime = timestamp;
        scrollContainer.scrollLeft += speed * elapsed;
        if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
          scrollContainer.scrollLeft = 0;
        }
      }
      animationRef.current = requestAnimationFrame(scrollAnimation);
    };
    
    animationRef.current = requestAnimationFrame(scrollAnimation);
    
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isPaused, isVisible]);

  return (
    <section className="py-10 bg-transparent">
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800">Our Customers</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-6"></div>
        </motion.div>

        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.5, duration: 1.2 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-xl font-medium text-gray-700">
              PET Stream Incorporation is proud to serve a diverse range of customers across various industries. We're committed to delivering exceptional value and building lasting relationships.
            </h3>
          </div>
        </motion.div>

        {/* Mobile and Small Screens */}
        <div className="md:hidden relative mx-auto">
          <div className="overflow-hidden">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-auto scrollbar-hide py-6"
              style={{ 
                scrollbarWidth: 'none', 
                msOverflowStyle: 'none',
                WebkitOverflowScrolling: 'touch'
              }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* First set */}
              <div className="flex space-x-1 pr-4">
                {featuredCustomers.map((customer, index) => (
                  <motion.div 
                    key={customer.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex-shrink-0 w-36 group"
                  >
                    <Link to={`/${customer.slug}`} className="block">
                      <div className="h-28 bg-transparent rounded-lg flex items-center justify-center p-2 transition-all duration-300">
                        <img 
                          src={customer.image} 
                          alt={customer.title}
                          className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110 filter grayscale-0"
                          style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain'
                          }}
                        />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
              {/* Duplicate set */}
              <div className="flex space-x-1 pr-4">
                {featuredCustomers.map((customer, index) => (
                  <motion.div 
                    key={`dup-${customer.id}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="flex-shrink-0 w-36 group"
                  >
                    <Link to={`/${customer.slug}`} className="block">
                      <div className="h-28 bg-transparent rounded-lg flex items-center justify-center p-2 transition-all duration-300">
                        <img 
                          src={customer.image} 
                          alt={customer.title}
                          className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110 filter grayscale-0"
                          style={{
                            maxWidth: '100%',
                            maxHeight: '100%',
                            objectFit: 'contain'
                          }}
                        />
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Desktop */}
        <div className="hidden md:block relative overflow-hidden">
          <div 
            ref={scrollContainerRef}
            className="flex py-6 overflow-hidden"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {/* First set */}
            <div className="flex space-x-2 pr-8">
              {featuredCustomers.map((customer, index) => (
                <motion.div 
                  key={customer.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex-shrink-0 group"
                >
                  <Link to={`/${customer.slug}`} className="block">
                    <div className="h-36 w-52 bg-transparent rounded-lg flex items-center justify-center p-3 transition-all duration-300">
                      <img 
                        src={customer.image} 
                        alt={customer.title}
                        className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110 filter grayscale-0"
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Duplicate set */}
            <div className="flex space-x-2 pr-8">
              {featuredCustomers.map((customer, index) => (
                <motion.div 
                  key={`dup-${customer.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="flex-shrink-0 group"
                >
                  <Link to={`/${customer.slug}`} className="block">
                    <div className="h-36 w-52 bg-transparent rounded-lg flex items-center justify-center p-3 transition-all duration-300">
                      <img 
                        src={customer.image} 
                        alt={customer.title}
                        className="w-full h-full object-contain transition-all duration-300 group-hover:scale-110 filter grayscale-0"
                        style={{
                          maxWidth: '100%',
                          maxHeight: '100%',
                          objectFit: 'contain'
                        }}
                      />
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          <Link
            to="/about/customers" 
            className="inline-block bg-gray-800 hover:bg-gray-900 text-white px-6 py-3 rounded-lg transition-colors duration-300 font-semibold"
          >
            <span className="relative z-10">View All Customers</span>
            <span className="absolute bottom-0 left-0 w-full h-0 bg-blue-800 transition-all duration-300 group-hover:h-full -z-0">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Customers;