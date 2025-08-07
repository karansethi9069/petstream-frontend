import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import ContactCTA from '../../components/home/ContactCTA';
// Import hero image (keeping this one as it's a banner)
import heroImg from '../../assets/images/how-banner.jpg';

const HowWeWork = () => {

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

  // Creative animated icon components
  const AnalyseIcon = () => (
    <div className="relative w-40 h-40 group cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-2xl transform rotate-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg"></div>
      <div className="absolute inset-2 bg-white rounded-xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
        <div className="relative">
          <svg className="w-16 h-16 text-blue-600 animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce">
            <span className="text-xs font-bold">📊</span>
          </div>
        </div>
      </div>
    </div>
  );

  const AdviseIcon = () => (
    <div className="relative w-40 h-40 group cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 via-green-500 to-emerald-600 rounded-full transform group-hover:scale-110 transition-transform duration-300 shadow-lg"></div>
      <div className="absolute inset-3 bg-white rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
        <div className="relative">
          <svg className="w-16 h-16 text-green-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <div className="absolute inset-0 border-4 border-green-300 rounded-full animate-ping opacity-75"></div>
          <div className="absolute -top-3 -right-3 text-2xl animate-spin">💡</div>
        </div>
      </div>
    </div>
  );

  const ImplementIcon = () => (
    <div className="relative w-40 h-40 group cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-400 via-red-500 to-pink-600 rounded-3xl transform -rotate-6 group-hover:-rotate-12 transition-transform duration-300 shadow-lg"></div>
      <div className="absolute inset-2 bg-white rounded-2xl flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
        <div className="relative">
          <svg className="w-16 h-16 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div className="absolute inset-0 border-2 border-orange-300 rounded-full animate-spin opacity-50"></div>
          <div className="absolute -bottom-2 -left-2 text-xl animate-bounce">⚙️</div>
        </div>
      </div>
    </div>
  );

  const SupportIcon = () => (
    <div className="relative w-40 h-40 group cursor-pointer">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 via-indigo-500 to-purple-600 rounded-full transform group-hover:scale-110 transition-transform duration-300 shadow-lg"></div>
      <div className="absolute inset-3 bg-white rounded-full flex items-center justify-center">
        <div className="relative">
          <svg className="w-16 h-16 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          <div className="absolute inset-0 animate-pulse">
            <div className="w-4 h-4 bg-red-400 rounded-full absolute -top-1 -right-1 animate-ping"></div>
            <div className="w-4 h-4 bg-red-400 rounded-full absolute -bottom-1 -left-1 animate-ping delay-75"></div>
          </div>
          <div className="absolute -top-4 -right-4 text-xl animate-bounce delay-150">🛠️</div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      {/* Hero Banner Section with Parallax Effect */}
      <section
        className="relative bg-fixed bg-center bg-cover h-80 md:h-96 overflow-hidden"
        style={{ backgroundImage: `url(${heroImg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-blue-900/40 to-black/60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center transform hover:scale-105 transition-transform duration-300">
            <h1 className="text-white text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
              Beverage Filling
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-green-400 mx-auto rounded-full"></div>
          </div>
        </div>
        {/* Floating particles effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="w-2 h-2 bg-white/20 rounded-full absolute top-1/4 left-1/4 animate-float"></div>
          <div className="w-3 h-3 bg-blue-400/30 rounded-full absolute top-1/2 right-1/4 animate-float-delayed"></div>
          <div className="w-1 h-1 bg-green-400/40 rounded-full absolute bottom-1/3 left-1/3 animate-float-slow"></div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          {/* Header Section with Animation */}
          <div className="text-center mb-16">
            <div className="relative inline-block">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
                Your application, Our Competence
              </h2>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-full"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mt-8 leading-relaxed">
              Your reliable partner for first-class equipment and service need.
            </p>
          </div>

          {/* Intro Paragraph with Better Typography */}
          <div className="mb-16 text-center">
            <div className="bg-white p-8 rounded-2xl shadow-lg max-w-5xl mx-auto border border-gray-100">
              <p className="text-gray-700 text-lg leading-relaxed">
                We're in the <span className="font-semibold text-blue-600">solutions business</span>. Experience tells us that by working with you and 
                understanding your business, we can put the best systems, processes and partnerships in 
                place to respond to your <span className="font-semibold text-green-600">unique challenges</span>.
              </p>
            </div>
          </div>

          {/* Four Steps Grid with Enhanced Design */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Step 1: Analyse */}
            <div className="group">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="p-8 flex flex-col md:flex-row items-center">
                  <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold mr-3">01</span>
                      <h3 className="text-3xl font-bold text-gray-800">Analyse</h3>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                    We analyse your project in depth so we truly understand your vision.
                    </p>
                    {/* <div className="mt-4 flex space-x-2">
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Data Review</span>
                      <span className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm">Assessment</span>
                    </div> */}
                  </div>
                  <div className="md:w-1/3 flex justify-center">
                    <AnalyseIcon />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2: Advise */}
            <div className="group">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="p-8 flex flex-col md:flex-row items-center">
                  <div className="md:w-1/3 flex justify-center mb-6 md:mb-0 order-2 md:order-1">
                    <AdviseIcon />
                  </div>
                  <div className="md:w-2/3 md:pl-8 order-1 md:order-2">
                    <div className="flex items-center mb-4">
                      <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-semibold mr-3">02</span>
                      <h3 className="text-3xl font-bold text-gray-800">Advise</h3>
                    </div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                    PET Stream scopes and scrutinises your project then recommends the equipment, partners and processes that will get the job done. Our engineers live and breathe product design and development.
                    </p>
                    {/* <div className="mt-4 flex space-x-2">
                      <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm">Consultation</span>
                      <span className="px-3 py-1 bg-green-50 text-green-600 rounded-full text-sm">Strategy</span>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3: Implement */}
            <div className="group">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="p-8 flex flex-col md:flex-row items-start">
                  <div className="md:w-2/3 mb-6 md:mb-0 md:pr-8">
                    <div className="flex items-center mb-4">
                      <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-semibold mr-3">03</span>
                      <h3 className="text-3xl font-bold text-gray-800">Implement</h3>
                    </div>
                    <p className="text-gray-600 text-lg mb-4">Down to business, down to the last detail:</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {[
                        'Project management',
                        'Scope documentation',
                        'Material & logistics',
                        'Timeline management',
                        'Change management',
                        'Step by step logging',
                        'Installation & commissioning',
                        'Documentation'
                      ].map((item, index) => (
                        <div key={item} className="flex items-center group-hover:translate-x-1 transition-transform duration-300" style={{animationDelay: `${index * 100}ms`}}>
                          <div className="w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-sm text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="md:w-1/3 flex justify-center">
                    <ImplementIcon />
                  </div>
                </div>
              </div>
            </div>

            {/* Step 4: Support */}
            <div className="group">
              <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100">
                <div className="p-8 flex flex-col md:flex-row items-start">
                  <div className="md:w-1/3 flex justify-center mb-6 md:mb-0 order-2 md:order-1">
                    <SupportIcon />
                  </div>
                  <div className="md:w-2/3 md:pl-8 order-1 md:order-2">
                    <div className="flex items-center mb-4">
                      <span className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold mr-3">04</span>
                      <h3 className="text-3xl font-bold text-gray-800">Support</h3>
                    </div>
                    <p className="text-gray-600 text-lg mb-4">
                      You're never alone. PET Stream is a true partner, supporting your business with 
                      factory-certified, European-trained technicians.
                    </p>
                    <div className="space-y-3">
                      {[
                        'Predictive / Scheduled maintenance Programs',
                        'Emergency Maintenance',
                        'Process Training'
                      ].map((item, index) => (
                        <div key={item} className="flex items-center group-hover:translate-x-1 transition-transform duration-300" style={{animationDelay: `${index * 100}ms`}}>
                          <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-indigo-400 rounded-full mr-3 flex-shrink-0"></div>
                          <span className="text-gray-600">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Information Sections */}
          <div className="space-y-8 mb-16">
            {/* Maintenance Section */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-10 rounded-3xl shadow-lg border border-blue-100">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center transform rotate-3 hover:rotate-6 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-800">Maintenance and Support</h3>
                  <p className="text-gray-700 text-lg leading-relaxed mb-4">
                    PET Stream uses predictive maintenance to minimise costs and lost revenue by 
                    identifying potential issues before they occur. Our Service Program provides 
                    fixed prices for predictive and emergency maintenance options.
                  </p>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    We're readily available when machinery is down. <span className="font-semibold text-blue-600">Time is money</span> and we don't believe in 
                    wasting either.
                  </p>
                </div>
              </div>
            </div>

            {/* Training Section */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-10 rounded-3xl shadow-lg border border-green-100">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center transform -rotate-3 hover:-rotate-6 transition-transform duration-300">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-3xl font-bold mb-4 text-gray-800">Training Excellence</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    PET Stream provides a structured training program delivered by our certified 
                    European-trained technicians. Learn from skilled professionals with years of 
                    practical experience in the <span className="font-semibold text-green-600">art of moulding</span>.
                  </p>
                </div>
              </div>
            </div>
          </div>


        </div>
      </section>
            {/* CTA Section */}
            <ContactCTA />

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-5deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-float-delayed { animation: float-delayed 4s ease-in-out infinite; }
        .animate-float-slow { animation: float-slow 6s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 1s ease-out; }
      `}</style>
    </>
  );
};

export default HowWeWork;
