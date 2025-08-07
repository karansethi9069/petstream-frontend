import React, { useState , useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

// Import images
import pretreatmentImg from '../../assets/images/n-pretreatmet.jpg';
import waterTreatmentImg from '../../assets/images/water-treatment-plant.jpg';
import processingSystemImg from '../../assets/images/Processing-System.png';
import extractionSystemImg from '../../assets/images/Extraction-System.png';
import sugarDissolvingImg from '../../assets/images/Sugar-Dissolving-System.png';
import homogenousImg from '../../assets/images/homegrnous.png';
import uhtSystemImg from '../../assets/images/UHT.jpg';
import cipSystemImg from '../../assets/images/CIP-System.jpg';
import copSystemImg from '../../assets/images/COP-SOP.jpg';
import disinfectantSystemImg from '../../assets/images/Disinfectant-Blending-System.jpg';
import carbonMixerImg from '../../assets/images/carbon-mixer.png';
import ContactCTA from '../../components/home/ContactCTA';

const PretreatmentSystem = () => {
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
  const [activeTab, setActiveTab] = useState('extraction-system');

  const products = [
    {
      id: 'water-treatment',
      title: 'Water Treatment System',
      description: 'It is suitable for such water treatment equipment as pure water, mineral water, and beverage process water. It is mainly composed of the following equipment: Pre-treatment System (multi-medium filter, active carbon filter, ion exchanger, Millipore filter), membrane separation System (Ultrafilter, nanometer filter, RO System), electrodialysis device, sterilization System (UV device, ozone device) and so on.',
      image: waterTreatmentImg,
      productScope: [
        'RO series',
        'Filter series',
        'Membrane and filter core',
        'Ozone/ultraviolet sterilization system'
      ],
      appliedScope: [
        'Pure drink water, mineral water, mineralized water, spring water',
        'Water for food and beverage production'
      ]
    },
    {
      id: 'processing-system',
      title: 'Processing System',
      description: 'Blending system refers to the equipment combination that the various raw and auxiliary materials and process water are extracted or dissolved by various process units according to the pre-determined process parameters, and then mixed and fixed to obtain semi-finished products; its main modules include hot water unit, saccharose filter sterilizing unit, juice/tea powder reconstitution unit, auxiliary material dissolving unit, tea extracting and filtering unit, powdered milk reconstitution mixing unit, blending constant volume unit, CIP cleaning unit, pipe unit, electrical control and central control units.\n\nThe product quality of the blending system is mainly determined by the rigorous design, perfect automatic control system and considerable experience in engineering installation. With its engineering design and installation experience of more than 2,000 large-scale projects, Newamstar has a professional design team and engineering installation team to provide you with professional and high-quality services.',
      image: processingSystemImg,
      subSystems: [
        {
          id: 'extraction-system',
          title: 'Extraction System',
          description: 'Tea extraction refers to the operation of extracting effective ingredients from tea leaves by soaking in hot water. The purpose of this operation is to efficiently extract the effective ingredients of the plants to maintain the unique color, aroma, and taste of the tea liquor as much as possible and prevent the excessive dissolution of non-effective ingredients in the precipitated liquid of beverage.\n\nThe method of fractional extraction will be adopted, in which the first extraction will be performed by low temperature to protect the aroma component of the original solution and to dissolve the small molecule heat sensitive component; the secondary extraction uses high temperature to extract the macromolecular effective taste components in tea. At the same time, however, non-polyphenolic macromolecule compounds also dissolve together, which may cause beverage turbidity and sedimentation, which can be solved by controlling extractive parameters.\n\nAfter the extraction, the clarification of the tea juice is carried out to remove impurities, gums, and non-polyphenol macromolecular compounds in the tea juice, so as to avoid turbidity and sedimentation during the shelf life of the product. Clarification methods include low-temperature sedimentation (high-speed centrifuge) and membrane separation (ultrafiltration), or a combination of the two methods.',
          image: extractionSystemImg
        },
        {
          id: 'sugar-dissolving-system',
          title: 'Sugar Dissolving System',
          description: 'Sugar is one of the main components that make up a fruit juice beverage. The process that sucrose is dissolved in water to make a single syrup is called sugar dissolving operation.\n\nSugar dissolving system include the following units:\n\nSugar powder delivery, sugar powder dissolution, syrup sterilization, syrup filtration and cooling, syrup storage and other units. In special cases, the syrup needs to be degassed. A typical thermal melting process shall be done at 85°C for 10 min, and then gradual cooling process will be done to drop the temperature to the operating temperature (below 40°C).',
          image: sugarDissolvingImg
        },
        {
          id: 'homogeneous-degassing-system',
          title: 'Homogeneous Degassing System',
          description: 'For cloudy juice, it is necessary to break down the fibers and granules by high-pressure homogenization to distribute them evenly and finely so as to improve the physical properties and the mouthfeel of beverage products. A plunger pump is generally used as the homogenizer. The liquid product flows at a very high speed through the narrow gap between the valve seat and the valve core. Under the triple action of the shearing effect, the impact produced by high-velocity jetting, and the cavitation effect caused by the instantaneous pressure drop, the material can be ultra-finely pulverized to form a liquid-solid dispersion.\n\nThe homogenization pressure of the juice can be 25-40 MPa, matching the use of the homogenizer of the domestic first-class brand. Degassing is to avoid oxidation, but it will remove volatile aromas at the same time. The solution to this problem is to add an aroma recovery device. Therefore, the two operations of homogenization and degassing should be carried out after proper heating. They are often used in series with UHT, that is, after the UHT preheating section.',
          image: homogenousImg
        }
      ]
    },
    {
      id: 'uht-system',
      title: 'UHT System',
      description: 'The blended material, prior to be filled, needs to be sterilized with the most common process, thermal sterilization. According to different product characteristics, the subsequent matching of the filling process and the shelf life, ultra-high temperature treated (UHT) can be selected, usually heating to 130 °C for more than a few seconds.\n\nHeat exchanger may be in the form of a plate, a tube, a bellows, or the like. For products with pulp particles or high viscosity, tubular exchangers must be used to prevent clogging. At the same time, the tubular heat exchanger also has a more powerful pressure bearing capacity.\n\nFor cloudy beverage or milk based juice, we recommend tubular UHT; for a clear juice, plate UHT can be used.',
      image: uhtSystemImg
    },
    {
      id: 'cip-system',
      title: 'CIP System',
      description: 'CIP system is to automatically clean all surfaces that come in contact with the product. The objects to be cleaned include the inner walls of tank, pipe, hydraulic cylinder, and other liquid passages.\n\nIt is usually composed of cleaning liquid storage tanks, acid-base adding device, heater, cleaning pump, return pump, pipelines, steam valve group, etc.\n\nAccording to the different cleaning objects, it can be divided into single-channel, double-channel, and multi-channel. For automatic CIP, the concentrated acid and alkali adding, metering and the temperature of the cleaning solution are all automatically controlled. The cleaning program is also performed automatically after the parameter setting.',
      image: cipSystemImg
    },
    {
      id: 'cop-sop-system',
      title: 'COP/SOP System',
      description: 'The automatic COP/SOP system can perform foam cleaning and disinfectant spraying on the surface of equipment with detergents and disinfectants. This system is suitable for cleaning and disinfecting chemicals including alkaline foams, acid-based foams, disinfectant foams, and peroxyacids, and has been effectively used in food processing companies of beverages, beer, or milk.',
      image: copSystemImg
    },
    {
      id: 'disinfectant-system',
      title: 'Disinfectant Blending System',
      description: 'Disinfectant blending system adopts the method of adding disinfectant original solution to the water to sterilize the inner and outer surfaces of the packaging materials used for the production line, such as bottles and caps.',
      image: disinfectantSystemImg
    },
    {
      id: 'carbon-mixer',
      title: 'Carbon Mixer',
      description: 'Carbonating mixer is the equipment to mix sugar syrup, water and carbon dioxide. The product water is degassed and mixed with the syrup in a fixed proportion, cooled to the process temperature through a plate heat exchanger, and then fully mixed with carbon dioxide to complete carbonation.',
      image: carbonMixerImg
    }
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="relative py-24 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20"></div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-400/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                    Pretreatment Systems
                  </span>
                </h1>
                {/* <p className="text-xl text-blue-100 leading-relaxed">
                  Advanced processing solutions for water treatment, product preparation, and cleaning
                </p> */}
                {/* <div className="pt-4">
                  <Link 
                    to="/contact"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Request a Quote
                    <ChevronRight size={18} />
                  </Link>
                </div> */}
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <img 
                  src={pretreatmentImg} 
                  alt="Newamstar Pretreatment Systems" 
                  className="relative rounded-2xl shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">Comprehensive Pretreatment Solutions</h2>
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              Newamstar's Pretreatment Systems form the critical foundation of beverage and liquid product manufacturing. From water purification to ingredient preparation and system cleaning, our solutions ensure product quality, consistency, and safety. Engineered with the latest technology and designed for reliability, our pretreatment systems integrate seamlessly with your production processes to create a complete, efficient manufacturing environment.
            </p>
          </div>
        </div>
      </section> */}

      {/* Products Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-800">Our Pretreatment System Product Line</h3>
          </div> */}

          <div className="grid gap-8">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className={`bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <h4 className="text-2xl font-bold mb-4 text-blue-700">{product.title}</h4>
                  <div className="text-gray-700 mb-6 leading-relaxed whitespace-pre-line">
                    {product.description}
                  </div>
                  
                  {product.productScope && (
                    <>
                      <h5 className="font-semibold text-green-600 mb-2">Product's scope:</h5>
                      <ul className="space-y-2 mb-6">
                        {product.productScope.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="text-green-500 mr-3 mt-1">➤</div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                  
                  {product.appliedScope && (
                    <>
                      <h5 className="font-semibold text-green-600 mb-2">Applied scope:</h5>
                      <ul className="space-y-2 mb-6">
                        {product.appliedScope.map((item, idx) => (
                          <li key={idx} className="flex items-start">
                            <div className="text-green-500 mr-3 mt-1">➤</div>
                            <span className="text-gray-700">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
                
                <div className="lg:w-1/2 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent z-10"></div>
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-80 lg:h-full object-cover bg-gray-50 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processing System Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            {/* Processing System Content */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <img 
                  src={processingSystemImg}
                  alt="Processing System"
                  className="w-full h-auto rounded-lg shadow-md"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-orange-500">Processing System</h3>
                <div className="text-gray-700 space-y-4">
                  <p>
                    Blending system refers to the equipment combination that the various raw and auxiliary materials and process water are extracted or dissolved by various process units according to the pre-determined process parameters, and then mixed and fixed to obtain semi-finished products; its main modules include hot water unit, saccharose filter sterilizing unit, juice/tea powder reconstitution unit, auxiliary material dissolving unit, tea extracting and filtering unit, powdered milk reconstitution mixing unit, blending constant volume unit, CIP cleaning unit, pipe unit, electrical control and central control units.
                  </p>
                  <p>
                    The product quality of the blending system is mainly determined by the rigorous design, perfect automatic control system and considerable experience in engineering installation. With its engineering design and installation experience of more than 2,000 large-scale projects, Newamstar has a professional design team and engineering installation team to provide you with professional and high-quality services.
                  </p>
                </div>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="mt-12 border-t border-b border-gray-200">
              <div className="flex flex-wrap">
                <button
                  className={`py-4 px-6 text-center ${
                    activeTab === 'extraction-system'
                      ? 'text-orange-500 border-b-2 border-orange-500'
                      : 'text-gray-600 hover:text-orange-500'
                  } transition-colors duration-300`}
                  onClick={() => setActiveTab('extraction-system')}
                >
                  Extraction System
                </button>
                <button
                  className={`py-4 px-6 text-center ${
                    activeTab === 'sugar-dissolving-system'
                      ? 'text-orange-500 border-b-2 border-orange-500'
                      : 'text-gray-600 hover:text-orange-500'
                  } transition-colors duration-300`}
                  onClick={() => setActiveTab('sugar-dissolving-system')}
                >
                  Sugar Dissolving System
                </button>
                <button
                  className={`py-4 px-6 text-center ${
                    activeTab === 'homogeneous-degassing-system'
                      ? 'text-orange-500 border-b-2 border-orange-500'
                      : 'text-gray-600 hover:text-orange-500'
                  } transition-colors duration-300`}
                  onClick={() => setActiveTab('homogeneous-degassing-system')}
                >
                  Homogeneous Degassing System
                </button>
              </div>
            </div>

            {/* Tab Content */}
            <div className="mt-8">
              {/* Extraction System Content */}
              {activeTab === 'extraction-system' && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img 
                      src={extractionSystemImg}
                      alt="Extraction System"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-orange-500">Extraction System</h3>
                    <div className="text-gray-700 space-y-4">
                      <p>
                        Tea extraction refers to the operation of extracting effective ingredients from tea leaves by soaking in hot water. The purpose of this operation is to efficiently extract the effective ingredients of the plants to maintain the unique color, aroma, and taste of the tea liquor as much as possible and prevent the excessive dissolution of non-effective ingredients in the precipitated liquid of beverage.
                      </p>
                      <p>
                        The method of fractional extraction will be adopted, in which the first extraction will be performed by low temperature to protect the aroma component of the original solution and to dissolve the small molecule heat sensitive component; the secondary extraction uses high temperature to extract the macromolecular effective taste components in tea. At the same time, however, non-polyphenolic macromolecule compounds also dissolve together, which may cause beverage turbidity and sedimentation, which can be solved by controlling extractive parameters.
                      </p>
                      <p>
                        After the extraction, the clarification of the tea juice is carried out to remove impurities, gums, and non-polyphenol macromolecular compounds in the tea juice, so as to avoid turbidity and sedimentation during the shelf life of the product. Clarification methods include low-temperature sedimentation (high-speed centrifuge) and membrane separation (ultrafiltration), or a combination of the two methods.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Sugar Dissolving System Content */}
              {activeTab === 'sugar-dissolving-system' && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img 
                      src={sugarDissolvingImg}
                      alt="Sugar Dissolving System"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-orange-500">Sugar Dissolving System</h3>
                    <div className="text-gray-700 space-y-4">
                      <p>
                        Sugar is one of the main components that make up a fruit juice beverage. The process that sucrose is dissolved in water to make a single syrup is called sugar dissolving operation.
                      </p>
                      <p>
                        <strong>Sugar dissolving system include the following units:</strong>
                      </p>
                      <p>
                        Sugar powder delivery, sugar powder dissolution, syrup sterilization, syrup filtration and cooling, syrup storage and other units. In special cases, the syrup needs to be degassed. A typical thermal melting process shall be done at 85°C for 10 min, and then gradual cooling process will be done to drop the temperature to the operating temperature (below 40°C).
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Homogeneous Degassing System Content */}
              {activeTab === 'homogeneous-degassing-system' && (
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img 
                      src={homogenousImg}
                      alt="Homogeneous Degassing System"
                      className="w-full h-auto rounded-lg shadow-md"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-orange-500">Homogeneous Degassing System</h3>
                    <div className="text-gray-700 space-y-4">
                      <p>
                        For cloudy juice, it is necessary to break down the fibers and granules by high-pressure homogenization to distribute them evenly and finely so as to improve the physical properties and the mouthfeel of beverage products. A plunger pump is generally used as the homogenizer. The liquid product flows at a very high speed through the narrow gap between the valve seat and the valve core. Under the triple action of the shearing effect, the impact produced by high-velocity jetting, and the cavitation effect caused by the instantaneous pressure drop, the material can be ultra-finely pulverized to form a liquid-solid dispersion.
                      </p>
                      <p>
                        The homogenization pressure of the juice can be 25-40 MPa, matching the use of the homogenizer of the domestic first-class brand. Degassing is to avoid oxidation, but it will remove volatile aromas at the same time. The solution to this problem is to add an aroma recovery device. Therefore, the two operations of homogenization and degassing should be carried out after proper heating. They are often used in series with UHT, that is, after the UHT preheating section.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6">See Our Systems in Action</h3>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Watch our pretreatment systems working in real production environments
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="250" 
                  src="https://www.youtube.com/embed/XlOQ8WoUxlI?si=CpF-4Wt62dnE0zjn" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full rounded-t-2xl"
                ></iframe>
              </div>
              <div className="p-4">
                <h4 className="text-gray-800 font-semibold mb-2">Water Treatment Systems</h4>
                <p className="text-gray-600 text-sm">Advanced purification solutions</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="250" 
                  src="https://www.youtube.com/embed/QthThRVKxxs?si=T1MpZNN62iqOJbWe" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full rounded-t-2xl"
                ></iframe>
              </div>
              <div className="p-4">
                <h4 className="text-gray-800 font-semibold mb-2">Processing Systems</h4>
                <p className="text-gray-600 text-sm">Efficient blending and preparation</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="250" 
                  src="https://www.youtube.com/embed/Uz8mOGatVTw?si=DCMDgV0KZSJq96sZ" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full rounded-t-2xl"
                ></iframe>
              </div>
              <div className="p-4">
                <h4 className="text-gray-800 font-semibold mb-2">CIP/COP Systems</h4>
                <p className="text-gray-600 text-sm">Automated cleaning solutions</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <ContactCTA />
    </>
  );
};

export default PretreatmentSystem;