import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

// Import actual images
import intelligentLogisticsImg from '../../assets/images/n-logistic.jpg';
import intelligentWarehouseImage from '../../assets/images/Intelligent-Warehouse.jpg';
import rgvImage from '../../assets/images/RGV.jpg';
import agvImage from '../../assets/images/AGV.jpg';
import wmsImage from '../../assets/images/wms.jpg';
import ContactCTA from '../../components/home/ContactCTA';

const IntelligentLogistics = () => {
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
  
  const products = [
    {
      id: 'intelligent-warehouse',
      title: 'Intelligent Warehouse',
      description: 'Automated warehouse system can complete the automatic access of unit goods under the control of the computer system. Using the collaboration of automated storage devices and computer management systems, it can also realize the rationalization of high-level storeroom placement, thereby reducing errors, accelerating the access rhythm of goods, and improving work efficiency; it improves space utilization, reduces inventory, and saves land investment costs; it reduces labor intensity, improves workers\' working environment, and reduces labor costs; it realizes overall system optimization, and improves enterprise production efficiency and modern management level. At the same time, it improves customer satisfaction and enables fast and reliable traceability of food safety.',
      image: intelligentWarehouseImage,
      systemComponents: [
        'Transfer and storage of goods – high shelves and pallets, containers',
        'Inbound and outbound operation equipment – stackers, shuttles, RGVs, AGVs, etc.',
        'Inbound and outbound distribution system – roller, chain conveyor, dispenser, lifter, etc.',
        'WCS control system – including computer-controlled inbound and outbound equipment, distribution systems, and all electronic control devices for various inspection and insurance agencies',
        'WMS warehouse management system – warehouse account management, data analysis, reasonable management of the location, equipment operation and inventory status display, etc.'
      ],
      features: []
    },
    {
      id: 'rgv',
      title: 'RGV (Rail Guided Vehicle)',
      description: 'RGV is the main conveying equipment of automatic stereoscopic warehouse. Coupled with rack, pallet conveyor, and inbound and outbound platforms, RGV can realize the horizontal conveying for empty or loaded pallets. Powered via slide wire and positioned by bar code or laser, RGV can move on pre-defined rails in order to connect various logistics nodes. With features such as high speed, flexibility, simplicity and easy maintenance, RGV can replace the complex and inflexible conveyor system in some logistics solutions.',
      image: rgvImage,
      features: []
    },
    {
      id: 'agv',
      title: 'AGV (Automated Guided Vehicle)',
      description: 'AGV is used exclusively for material transition. Equipped with automatic guidance system, AGV can move on the pre-defined routes and convey materials from staring point to destination automatically without manual guiding. Compared with RGV, AGV adopts magnetic stripe, laser or bar code in its automatic guidance system. Without rails on the ground, we can ensure ground level and logistics smoothness.',
      image: agvImage,
      agvTypes: [
        'Pallet Handling AGV',
        'Shelf Handling AGV',
        'Unmanned Forklift AGV'
      ],
      features: []
    },
    {
      id: 'wms',
      title: 'WMS (Warehouse Management System)',
      description: 'WMS, short for Warehouse Management System, has functions such as inbound operation, outbound operation, goods transfer, inventory transfer and virtual warehouse management. Through integrated management systems such as integrated batch management, material correspondence, inventory counting, quality inspection management, virtual warehouse management, and real-time inventory management, it effectively controls and tracks the entire process of logistics and cost management of warehouse operations, achieving a complete enterprise warehouse information management. The system can perform inventory operations independently and can be used in conjunction with other systems\' documents and vouchers to provide more complete and comprehensive business process and financial management information.',
      image: wmsImage,
      features: []
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
                    Intelligent Logistics
                  </span>
                </h1>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <img 
                  src={intelligentLogisticsImg} 
                  alt="Newamstar Intelligent Logistics" 
                  className="relative rounded-2xl shadow-2xl w-full h-auto transform group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-8">
            {products.map((product, index) => (
              <div 
                key={product.id}
                className={`bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl flex flex-col ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <h4 className="text-3xl font-bold mb-4 text-gray-800">{product.title}</h4>
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    {product.description}
                  </p>
                  

                </div>
                
                <div className="lg:w-1/2 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-10"></div>
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-80 lg:h-96 object-contain bg-gray-50 transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Videos Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold mb-6">See Our Solutions in Action</h3>
            <p className="text-lg text-blue-100 max-w-3xl mx-auto">
              Watch our intelligent logistics systems working in real warehouse environments
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="250" 
                  src="https://www.youtube.com/embed/HCDu26y4dmc?si=LPxYDFxpqG-bhvzB" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full rounded-t-2xl"
                ></iframe>
              </div>
              <div className="p-4">
                <h4 className="text-gray-800 font-semibold mb-2">Intelligent Warehouse Systems</h4>
                <p className="text-gray-600 text-sm">Automated storage and retrieval solutions</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="250" 
                  src="https://www.youtube.com/embed/r4j8ca6s4e8?si=NxDfeWxwjqNDvJ5l" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full rounded-t-2xl"
                ></iframe>
              </div>
              <div className="p-4">
                <h4 className="text-gray-800 font-semibold mb-2">AGV & RGV Technology</h4>
                <p className="text-gray-600 text-sm">Automated guided vehicle systems</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="250" 
                  src="https://www.youtube.com/embed/HlAhmLUkKEs?si=XVj3d2vmcHLdbVvV" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full rounded-t-2xl"
                ></iframe>
              </div>
              <div className="p-4">
                <h4 className="text-gray-800 font-semibold mb-2">WMS Integration</h4>
                <p className="text-gray-600 text-sm">Warehouse management system solutions</p>
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

export default IntelligentLogistics;