import React, { useState , useEffect} from 'react';
import ContactCTA from '../../components/home/ContactCTA';
import { Link, useNavigate } from 'react-router-dom';
// Import images (using placeholders - you'll need to replace with actual images)
import imhBottleBanner from '../../assets/integratedplastics/Home-IP-IMH.jpg';
import imhPreforms from '../../assets/integratedplastics/hero.jpg';
import manufacturingPlatform from '../../assets/integratedplastics/IMH.jpg';
import sustainableBottles from '../../assets/integratedplastics/Home-IP-IMH.jpg';
import recyclingProcess from '../../assets/integratedplastics/Home-IP-IMH.jpg';
import productionLine from '../../assets/integratedplastics/Home-IP-IMH.jpg';

// Product images for the suggestion section
import imgPP1 from '../../assets/integratedplastics/Milk-IMH-IP-500pxW.jpg';
import imgPP2 from '../../assets/integratedplastics/Juice-IMH-IP-500pxW.jpg';
import imgPP3 from '../../assets/integratedplastics/Silgan-IMH-IP-500pxT.jpg';
import imgPP4 from '../../assets/integratedplastics/Soy-Tall-IMH-IP-500pxW.jpg';
import imgPP6 from '../../assets/integratedplastics/IMH-FAMILY-LABELS-2000x1500.jpg';
import imgPP7 from '../../assets/integratedplastics/OLD-OIL-2000x1200.jpg';
import imgPP8 from '../../assets/integratedplastics/OLD-HOME-2000x1200.jpg';


import imgP1 from '../../assets/images/Injection-molding-machine.png';
import imgP2 from '../../assets/images/Pet-beverage-filling-line.png';
import imgP3 from '../../assets/images/pet-preforn-mold.png';
import imgP4 from '../../assets/images/PET-material-lab-equipment.jpg';
import imgP5 from '../../assets/integratedplastics/IMH.jpg';
import imgP6 from '../../assets/images/caps-closures-mold.jpg';
import imgP7 from '../../assets/images/Medical-pharma-paxkaging-mold.jpg';
import imgP8 from '../../assets/images/Packaging&Systems.jpg';

const IntegratedPlastics = () => {
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

  const [activeTab, setActiveTab] = useState('technology');
  const [activeInfoTab, setActiveInfoTab] = useState('company');
   const navigate = useNavigate(); // ADD THIS LINE
  const handleNavigation = (path) => {
    navigate(path); // CHANGE THIS LINE
  };
  return (
    <>
      {/* Hero Banner */}
      <section
        className="relative bg-gradient-to-r from-green-900 to-blue-700 text-white h-[80vh] mt-12"
        style={{
          backgroundImage: ` url(${imhBottleBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      
      </section>

      {/* Company Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">
             IMH™ technology is not <span className="text-green-700">one size fits all.</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                  Integrated Plastics are global innovators in sustainable packaging technology.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                 Delivering the world's first environmentally responsible Integrally Moulded Handle (IMH™) bottle solution.
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed text-lg">
                 At Integrated Plastics we are committed to improving the environmental sustainability of plastic bottle blowing technology by exploiting the superior characteristics of PET and rPET and offering a truly circular  packaging alternative through innovation and design.
                </p>
              </div>
              <div>
                <img 
                  src={imhPreforms} 
                  alt="Sustainable IMH Bottles" 
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>


            {/* Technology Tabs */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
              <div className="flex flex-wrap border-b">
                <button
                  className={`px-6 py-4 font-medium transition-colors duration-300 ${
                    activeTab === 'technology' 
                      ? 'bg-green-600 text-white' 
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                  onClick={() => setActiveTab('technology')}
                >
                  IMH™ Technology
                </button>
                <button
                  className={`px-6 py-4 font-medium transition-colors duration-300 ${
                    activeTab === 'manufacturing' 
                      ? 'bg-green-600 text-white' 
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                  onClick={() => setActiveTab('manufacturing')}
                >
                  Manufacturing Process
                </button>
                <button
                  className={`px-6 py-4 font-medium transition-colors duration-300 ${
                    activeTab === 'applications' 
                      ? 'bg-green-600 text-white' 
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                  onClick={() => setActiveTab('applications')}
                >
                  Applications
                </button>
                <button
                  className={`px-6 py-4 font-medium transition-colors duration-300 ${
                    activeTab === 'sustainability' 
                      ? 'bg-green-600 text-white' 
                      : 'text-gray-600 hover:text-green-600'
                  }`}
                  onClick={() => setActiveTab('sustainability')}
                >
                  Sustainability
                </button>
              </div>

              <div className="p-8">
                {activeTab === 'technology' && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-2xl font-bold mb-6 text-gray-800">Revolutionary Handle Integration</h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Our patented technology produces the handle during the preform stage using exclusively PET and rPET materials, unlike conventional technologies that add handles later.
                      </p>
                      <ul className="space-y-3 mb-6">
                        <li className="flex items-start">
                          <div className="text-green-600 mr-3 mt-1">✓</div>
                          <span className="text-gray-700">Handle molded with preform in single process</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-600 mr-3 mt-1">✓</div>
                          <span className="text-gray-700">No secondary handle insertion required</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-600 mr-3 mt-1">✓</div>
                          <span className="text-gray-700">Single-source PET material throughout</span>
                        </li>
                        <li className="flex items-start">
                          <div className="text-green-600 mr-3 mt-1">✓</div>
                          <span className="text-gray-700">Compatible with conventional preform injection molding machines</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <img 
                        src={manufacturingPlatform} 
                        alt="IMH Preforms" 
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                )}

                {activeTab === 'manufacturing' && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <img 
                        src={imgPP1} 
                        alt="Manufacturing Platform" 
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold mb-6 text-gray-800">Advanced Manufacturing Platforms</h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        We've established partnerships with leading machine manufacturers including Korean ISBM manufacturer SDB Corp, with production on high-speed rotary platforms.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <div className="text-green-600 mr-3 mt-1">•</div>
                            <span className="text-gray-700">4-cavity rotary systems</span>
                          </li>
                          <li className="flex items-start">
                            <div className="text-green-600 mr-3 mt-1">•</div>
                            <span className="text-gray-700">8-cavity high-speed platforms</span>
                          </li>
                          <li className="flex items-start">
                            <div className="text-green-600 mr-3 mt-1">•</div>
                            <span className="text-gray-700">16-cavity mold capabilities</span>
                          </li>
                        </ul>
                        <ul className="space-y-3">
                          <li className="flex items-start">
                            <div className="text-green-600 mr-3 mt-1">•</div>
                            <span className="text-gray-700">Global tooling partnerships</span>
                          </li>
                          <li className="flex items-start">
                            <div className="text-green-600 mr-3 mt-1">•</div>
                            <span className="text-gray-700">Licensing & technology transfer</span>
                          </li>
                          <li className="flex items-start">
                            <div className="text-green-600 mr-3 mt-1">•</div>
                            <span className="text-gray-700">Quality certification systems</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'applications' && (
                  <div>
                    <h4 className="text-2xl font-bold mb-6 text-gray-800">Diverse Industry Applications</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-blue-50 p-6 rounded-lg">
                        <h5 className="text-lg font-bold text-blue-800 mb-3">Beverage Industry</h5>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Fruit cordial concentrates</li>
                          <li>• Soft drinks and juices</li>
                          <li>• Long-life beverages</li>
                          <li>• Over 100 million bottles distributed in Australia</li>
                        </ul>
                      </div>
                      <div className="bg-green-50 p-6 rounded-lg">
                        <h5 className="text-lg font-bold text-green-800 mb-3">Food Applications</h5>
                        <ul className="space-y-2 text-gray-700">
                          <li>• Edible oils</li>
                          <li>• Dairy products</li>
                          <li>• Fresh juice packaging</li>
                          <li>• Products weighing over 5kg</li>
                        </ul>
                      </div>
                      <div className="bg-purple-50 p-6 rounded-lg">
                        <h5 className="text-lg font-bold text-purple-800 mb-3">Volume Options</h5>
                        <ul className="space-y-2 text-gray-700">
                          <li>• 1L bottles</li>
                          <li>• 2L containers</li>
                          <li>• Oil • 1.8 - 5 ltr</li>
                          <li>• Custom sizes available</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'sustainability' && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-2xl font-bold mb-6 text-gray-800">Circular Economy Leadership</h4>
                      <p className="text-gray-700 mb-4 leading-relaxed">
                        Our IMH™ technology enables companies to participate in the Circular Economy and reduce their carbon footprint through 100% recyclable packaging solutions.
                      </p>
                      <div className="space-y-4 mb-6">
                        <div className="flex items-center">
                          <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                            <span className="text-sm">1</span>
                          </div>
                          <span className="text-gray-700">Single-source PET material eliminates contamination</span>
                        </div>
                        <div className="flex items-center">
                          <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                            <span className="text-sm">2</span>
                          </div>
                          <span className="text-gray-700">No handle separation required before recycling</span>
                        </div>
                        <div className="flex items-center">
                          <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                            <span className="text-sm">3</span>
                          </div>
                          <span className="text-gray-700">15%+ material savings vs. inserted handle alternatives</span>
                        </div>
                        <div className="flex items-center">
                          <div className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center mr-4">
                            <span className="text-sm">4</span>
                          </div>
                          <span className="text-gray-700">Supports bottle-to-bottle recycling streams</span>
                        </div>
                      </div>
                    </div>
                    <div>
                      <img 
                        src={recyclingProcess} 
                        alt="Recycling Process" 
                        className="w-full h-auto rounded-lg shadow-md"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

         
          </div>
        </div>
      </section>

   

      {/* Other Products Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-green-50">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <div className="inline-block">
              <span className="text-sm font-semibold text-green-600 uppercase tracking-wider mb-2 block">
                Explore Our Solutions
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                IMH™ Product Portfolio
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-green-600 to-blue-600 mx-auto mb-6"></div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive range of sustainable PET packaging solutions designed for the circular economy
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {/* 1L IMH Bottles */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div className="relative h-64 overflow-hidden bg-gray-50">
                <img 
                  src={imgPP1}
                  alt="Dairy 2 ltr IMH Bottles" 
                  className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-700"
                  style={{ objectFit: 'contain', padding: '20px' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
                  Dairy • 2 ltr
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Optically clear, custom handle. Increased line efficiency, on-premise manufacturing platform, and blow fill.
                </p>
              </div>
            </div>

            {/* 2L IMH Bottles */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div className="relative h-64 overflow-hidden bg-gray-50">
                <img 
                  src={imgPP2}
                  alt="Juice 2 ltr IMH Bottles" 
                  className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-700"
                  style={{ objectFit: 'contain', padding: '20px' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  Juice • 2 ltr
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                 Optically clear. Potential for all kinds of fill.
                </p>
              </div>
            </div>

            {/* 4L IMH Bottles */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div className="relative h-64 overflow-hidden bg-gray-50">
                <img 
                  src={imgPP3}
                  alt="Oil 1.8-5 ltr IMH Bottles" 
                  className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-700"
                  style={{ objectFit: 'contain', padding: '20px' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                  Oil • 1.8 - 5 ltr
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                 Domestic and commercial cooking oil applications.
                </p>
              </div>
            </div>

            {/* IMH Preform Molds */}
            <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100">
              <div className="relative h-64 overflow-hidden bg-gray-50">
                <img 
                  src={imgPP4}
                  alt="Soy Sauce 1.8-2 ltr IMH Bottles" 
                  className="w-full h-full object-contain object-center group-hover:scale-105 transition-transform duration-700"
                  style={{ objectFit: 'contain', padding: '20px' }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                  Soy Sauce • 1.8 - 2 ltr
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                 Single source material bottle. Improved line speed and reduced waste.
                 View our bottle range
                </p>
              </div>
            </div>

        
          </div>

       
        </div>
      </section>
         {/* Bottle Comparison Section */}
    <section className="py-20 bg-white text-black">
  <div className="container mx-auto px-6 max-w-7xl">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
        Not all bottles are made equal
      </h2>
      <p className="text-xl text-gray-700 mb-8">
        Handle bottle comparison
      </p>
    </div>
    
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* PET IMH Bottles */}
      <div className="rounded-lg overflow-hidden"> 
        <div className="h-64 flex items-center justify-center p-6">
          <div className="flex space-x-4">
            <img src={imgPP6} alt="PET IMH Bottle 1" className="h-40 w-auto object-contain" />
         
          </div>
        </div>
        <div className="p-6 bg-white">
          <h3 className="text-2xl font-bold text-black mb-2">PET IMH® bottles</h3>
          <p className="text-yellow-600 font-semibold mb-4">Gold Standard</p>
          
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-green-600 font-semibold">Food Grade Recyclable:</span>
              <span className="text-black ml-2">100%</span>
            </div>
            <div>
              <span className="text-green-600 font-semibold">Clarity:</span>
              <span className="text-black ml-2">Excellent</span>
            </div>
            <div>
              <span className="text-green-600 font-semibold">Impact/Stress Crack Resistance:</span>
              <span className="text-black ml-2">Excellent</span>
            </div>
            <div>
              <span className="text-green-600 font-semibold">Precise Neck:</span>
              <span className="text-black ml-2">✓</span>
            </div>
            <div>
              <span className="text-green-600 font-semibold italic">Thermo Sealed caps NOT required</span>
            </div>
            <div>
              <span className="text-green-600 font-semibold">Shelf life:</span>
              <span className="text-black ml-2">Excellent</span>
            </div>
            <div>
              <span className="text-green-600 font-semibold italic">PET has 50x more oxygen barrier than HDPE</span>
            </div>
            <div>
              <span className="text-green-600 font-semibold">Weight:</span>
              <span className="text-black ml-2">Light</span>
            </div>
            <div>
              <span className="text-green-600 font-semibold">Production:</span>
              <span className="text-black ml-2">Higher Production</span>
            </div>
            <div>
              <span className="text-green-600 font-semibold italic">Up to 48 Cavity Rigid Injection Mold</span>
            </div>
            <div>
              <span className="text-green-600 font-semibold italic">12 on Cavity Rotary Blow</span>
            </div>
            <div>
              <span className="text-green-600 font-semibold">Economic Performance:</span>
            </div>
            <div>
              <span className="text-green-600 font-semibold italic">Excellent & rPET Compatability</span>
            </div>
            <div>
              <span className="text-green-600 font-semibold">Circular Economy Suitable:</span>
            </div>
            <div>
              <span className="text-green-600 font-semibold">YES</span>
            </div>
          </div>
        </div>
      </div>

      {/* Insert Handle Bottles */}
      <div className="rounded-lg overflow-hidden">
        <div className="h-64 flex items-center justify-center p-6">
          <div className="flex space-x-4">
            <img src={imgPP7} alt="Insert Handle Bottle 1" className="h-40 w-auto object-contain" />
          </div>
        </div>
        <div className="p-6 bg-white">
          <h3 className="text-2xl font-bold text-black mb-2">Insert handle bottles</h3>
          <p className="text-gray-600 font-semibold mb-4">Standard</p>
          
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-yellow-600 font-semibold">Food Grade Recyclable:</span>
              <span className="text-black ml-2">NO - Handle to waste</span>
            </div>
            <div>
              <span className="text-yellow-600 font-semibold">Clarity:</span>
              <span className="text-black ml-2">Excellent</span>
            </div>
            <div>
              <span className="text-yellow-600 font-semibold">Impact/Stress Crack Resistance:</span>
              <span className="text-black ml-2">Excellent</span>
            </div>
            <div>
              <span className="text-yellow-600 font-semibold">Precise Neck:</span>
              <span className="text-black ml-2">NO</span>
            </div>
            <div>
              <span className="text-yellow-600 font-semibold italic">Thermo Sealed caps required</span>
            </div>
            <div>
              <span className="text-yellow-600 font-semibold">Shelf life:</span>
              <span className="text-black ml-2">Excellent</span>
            </div>
            <div>
              <span className="text-yellow-600 font-semibold italic">PET has 50x more oxygen barrier than HDPE</span>
            </div>
            <div>
              <span className="text-yellow-600 font-semibold">Weight:</span>
              <span className="text-black ml-2">Heavy</span>
            </div>
            <div>
              <span className="text-yellow-600 font-semibold">Production:</span>
              <span className="text-black ml-2">Slow Production throughput</span>
            </div>
            <div>
              <span className="text-yellow-600 font-semibold italic">Restricted by handle insertion process during post blowing operation</span>
            </div>
            <div>
              <span className="text-yellow-600 font-semibold">Economic Performance:</span>
              <span className="text-black ml-2">Moderate</span>
            </div>
            <div>
              <span className="text-yellow-600 font-semibold italic">Less economical in rPET</span>
            </div>
            <div>
              <span className="text-yellow-600 font-semibold">Circular Economy Suitable:</span>
            </div>
            <div>
              <span className="text-yellow-600 font-semibold">NO</span>
            </div>
          </div>
        </div>
      </div>

      {/* HDPE Bottles */}
      <div className="rounded-lg overflow-hidden">
        <div className="h-64 flex items-center justify-center p-6">
          <div className="flex space-x-4">
            <img src={imgPP8} alt="HDPE Bottle 1" className="h-40 w-auto object-contain" />
          </div>
        </div>
        <div className="p-6 bg-white">
          <h3 className="text-2xl font-bold text-black mb-2">HDPE bottles</h3>
          <p className="text-red-600 font-semibold mb-4">Sub-standard</p>
          
          <div className="space-y-3 text-sm">
            <div>
              <span className="text-red-600 font-semibold">Food Grade Recyclable:</span>
              <span className="text-black ml-2">NOT POSSIBLE</span>
            </div>
            <div>
              <span className="text-red-600 font-semibold">Clarity:</span>
              <span className="text-black ml-2">Poor Clarity - Waxy Feel</span>
            </div>
            <div>
              <span className="text-red-600 font-semibold">Impact/Stress Crack Resistance:</span>
              <span className="text-black ml-2">Good</span>
            </div>
            <div>
              <span className="text-red-600 font-semibold">Precise Neck:</span>
              <span className="text-black ml-2">NOT POSSIBLE</span>
            </div>
            <div>
              <span className="text-red-600 font-semibold italic">Due to extrusion process precise neck not possible</span>
            </div>
            <div>
              <span className="text-red-600 font-semibold">Shelf life:</span>
              <span className="text-black ml-2">Poor</span>
            </div>
            <div>
              <span className="text-red-600 font-semibold italic">Sub-standard barrier property and not suitable for higher shelf life product</span>
            </div>
            <div>
              <span className="text-red-600 font-semibold">Weight:</span>
              <span className="text-black ml-2">Light</span>
            </div>
            <div>
              <span className="text-red-600 font-semibold">Production:</span>
              <span className="text-black ml-2">Slow production throughput in extrusion process (4/6 extrusion head limitation)</span>
            </div>
            <div>
              <span className="text-red-600 font-semibold">Economic Performance:</span>
              <span className="text-black ml-2">Moderate</span>
            </div>
            <div>
              <span className="text-red-600 font-semibold italic">Poor product viability and sourcing difficulty in rHDPE</span>
            </div>
            <div>
              <span className="text-red-600 font-semibold">Circular Economy Suitable:</span>
            </div>
            <div>
              <span className="text-red-600 font-semibold">NO</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    {/* Call to Action Link */}
          {/* <div className="text-center">
            <p className="text-gray-700 text-lg mb-4">
              Want to explore our range of competence? 
              <button 
                className="text-blue-600 hover:text-blue-800 underline ml-2 font-medium"
                onClick={() => window.open('https://www.integratedplastics.com.au/bottle-designs/', '_blank')}
              >
                click here
              </button>
            </p>
            
          </div> */}
     <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
  <div className="container mx-auto px-6 max-w-7xl">
    {/* Header */}
    <div className="text-center mb-16">
      <div className="inline-block">
        <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider mb-2 block">
          Explore More
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Other Suggested Products
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-green-600 mx-auto mb-6"></div>
      </div>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
        Discover our comprehensive range of cutting-edge industrial solutions designed to optimize your production efficiency and enhance manufacturing capabilities
      </p>
    </div>
    
    {/* Products Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {/* Injection Molding Machine */}
          <div 
            onClick={() => handleNavigation('/products/injection-molding')}
             className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-100"
           >
             <div className="relative h-56 overflow-hidden">
                 <img 
                 src={imgP1}
                 alt="Injection Molding Machine" 
                 className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
     
             </div>
             <div className="p-6">
               <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                Injection Molding Machine
               </h3>
               <p className="text-gray-600 leading-relaxed mb-4">
                 High-performance injection molding machines with cutting-edge technology
               </p>
               <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                 <span>Learn More</span>
                 <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                 </svg>
               </div>
             </div>
           </div>
      {/* Beverage Filling Line */}
      <div 
        onClick={() => handleNavigation('/products/beverage-filling')}
        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-100"
      >
        <div className="relative h-56 overflow-hidden">
          <img 
            src={imgP2}
            alt="Beverage Filling Line" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
            Beverage Filling Line
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Complete automated beverage production solutions with high-speed filling capabilities
          </p>
          <div className="flex items-center text-blue-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
            <span>Learn More</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* PET Preform Molds */}
      <div 
        onClick={() => handleNavigation('/products/pet-preform')}
        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-100"
      >
        <div className="relative h-56 overflow-hidden">
          <img 
            src={imgP3}
            alt="PET Preform Molds" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors duration-300">
            PET Preform Molds
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            High-precision molds for PET preform production with exceptional durability
          </p>
          <div className="flex items-center text-green-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
            <span>Learn More</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Lab Equipment */}
      <div 
        onClick={() => handleNavigation('/products/lab-equipment')}
        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-100"
      >
        <div className="relative h-56 overflow-hidden">
          <img 
            src={imgP4}
            alt="Lab Equipment" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
            Lab Equipment
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Advanced laboratory testing and analysis equipment for quality control
          </p>
          <div className="flex items-center text-purple-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
            <span>Learn More</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Exclusive Applications */}
      {/* <div 
        onClick={() => handleNavigation('/products/integrated-plastics')}
        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-100"
      >
        <div className="relative h-56 overflow-hidden">
          <img 
            src={imgP5}
            alt="Exclusive Applications" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-600 transition-colors duration-300">
            Exclusive Applications
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Integrated Plastics- Patented, recyclable plastic container solutions for market-ready products.
          </p>
          <div className="flex items-center text-orange-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
            <span>Learn More</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div> */}

      {/* Caps & Closures Mold */}
      <div 
        onClick={() => handleNavigation('/products/caps-mold')}
        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-100"
      >
        <div className="relative h-56 overflow-hidden">
          <img 
            src={imgP6}
            alt="Caps & Closures Mold" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
            Caps & Closures Mold
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Specialized molds for high-quality caps and closures with precise threading
          </p>
          <div className="flex items-center text-red-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
            <span>Learn More</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Packaging Mold */}
      <div 
        onClick={() => handleNavigation('/products/packaging-mold')}
        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-100"
      >
        <div className="relative h-56 overflow-hidden">
          <img 
            src={imgP7}
            alt="Packaging Mold" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-teal-600 transition-colors duration-300">
            Packaging Mold
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Advanced packaging mold solutions for superior product protection
          </p>
          <div className="flex items-center text-teal-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
            <span>Learn More</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>

      {/* Packaging & Systems */}
      <div 
        onClick={() => handleNavigation('/products/packaging-systems')}
        className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer overflow-hidden border border-gray-100"
      >
        <div className="relative h-56 overflow-hidden">
          <img 
            src={imgP8}
            alt="Packaging & Systems" 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors duration-300">
            Packaging & Systems
          </h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Comprehensive packaging solutions including colorants and additives
          </p>
          <div className="flex items-center text-indigo-600 font-semibold group-hover:translate-x-2 transition-transform duration-300">
            <span>Learn More</span>
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
      <ContactCTA />
    </>
  );
};

export default IntegratedPlastics;