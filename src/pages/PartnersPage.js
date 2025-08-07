import React from 'react';
// import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
// import { FaLightbulb, FaTools, FaFire, FaCalendarCheck, FaSearchPlus, FaWrench, FaRocket } from 'react-icons/fa';
import servicesData from '../data/services';
import companyData from '../data/company';
import partnerData from '../data/partners';

const PartnerPage = () => {
  // Map icon names to components
  // const getIcon = (iconName) => {
  //   switch(iconName) {
  //     case 'FaLightbulb':
  //       return <FaLightbulb className="text-4xl text-primary-500" />;
  //     case 'FaTools':
  //       return <FaTools className="text-4xl text-primary-500" />;
  //     case 'FaFire':
  //       return <FaFire className="text-4xl text-primary-500" />;
  //     case 'FaCalendarCheck':
  //       return <FaCalendarCheck className="text-4xl text-primary-500" />;
  //     case 'FaSearchPlus':
  //       return <FaSearchPlus className="text-4xl text-primary-500" />;
  //     case 'FaWrench':
  //       return <FaWrench className="text-4xl text-primary-500" />;
  //     case 'FaRocket':
  //       return <FaRocket className="text-4xl text-primary-500" />;
  //     default:
  //       return <FaLightbulb className="text-4xl text-primary-500" />;
  //   }
  // };
  
  return (
    <>
      {/* <Helmet>
        <title>{companyData.name} - Our Services</title>
        <meta name="description" content="Explore our comprehensive range of services including project consultancy, machinery refurbishment, maintenance, and more." />
      </Helmet> */}
      
      {/* Hero Banner */}
      <section
        className="relative py-24 md:py-32 bg-gray-900 text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(/images/services-banner.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Comprehensive solutions for the beverage, packaging, healthcare, and plastics industries.
          </p>
        </div>
      </section>
      
      {/* Services Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Offer</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our capabilities extend beyond a Sales & Service Partner. We provide comprehensive solutions 
              tailored to your specific needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service) => (
              <div key={service.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:-translate-y-2">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    {/* {getIcon(service.icon)} */}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {service.shortDescription}
                  </p>
                  <Link 
                    to={`/services/${service.slug}`} 
                    className="text-primary-600 font-medium hover:text-primary-700 inline-flex items-center"
                  >
                    Learn More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We bring decades of industry experience and a commitment to excellence to every project.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-4">Expert Knowledge</h3>
              <p className="text-gray-600 mb-4">
                Our team has more than two decades of experience in the Indian manufacturing sector, 
                providing deep insights and expertise that ensure optimal solutions for your business.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Industry-specific knowledge</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Technical proficiency</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Continuous professional development</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-4">Comprehensive Solutions</h3>
              <p className="text-gray-600 mb-4">
                We offer end-to-end services from consultation and planning to implementation and ongoing support, 
                ensuring all your needs are met with a single partner.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>One-stop solution provider</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Customized service packages</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Long-term partnership approach</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-4">Quality Commitment</h3>
              <p className="text-gray-600 mb-4">
                We represent world-class manufacturers and maintain rigorous quality standards in all 
                our services, ensuring you receive the best equipment and support.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Premium global partners</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Rigorous quality control</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>International standards compliance</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <h3 className="text-xl font-bold mb-4">Customer-Centric Approach</h3>
              <p className="text-gray-600 mb-4">
                We prioritize your needs and focus on delivering solutions that help you achieve higher 
                profit margins and operational efficiency.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Personalized service</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Responsive support</span>
                </li>
                <li className="flex items-start">
                  <svg className="h-5 w-5 text-primary-500 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Results-oriented solutions</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section 
        className="py-20 bg-primary-700 text-white"
        style={{
          backgroundImage: 'linear-gradient(rgba(43, 108, 176, 0.9), rgba(43, 108, 176, 0.9)), url(/images/cta-bg.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Operations?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how our services can help you achieve greater efficiency 
            and profitability in your manufacturing processes.
          </p>
          <Link 
            to="/contact" 
            className="btn bg-white text-primary-700 hover:bg-gray-100 text-lg px-8 py-3"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
};

export default PartnerPage;