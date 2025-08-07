import React, { useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

// Import actual images
import secondaryPackagingImg from '../../assets/images/n-secndory.jpg';
import conveyorSystemImage from '../../assets/images/conveyour.jpg';
import bottleWarmerImage from '../../assets/images/bottle-warmer.jpg';
import bottleTiltingImage from '../../assets/images/bottle-tilting.jpg';
import showerCoolingTunnelImage from '../../assets/images/shower-colling-tunel.jpg';
import labelerImage from '../../assets/images/labler.jpg';
import filmWrapperImage from '../../assets/images/film-wrapper.jpg';
import cartonWrapperImage from '../../assets/images/cartoon-wrapper.jpg';
import starpackImage from '../../assets/images/starpack.jpg';
import sortingRobotImage from '../../assets/images/shorting-robot.jpg';
import robotEncaserImage from '../../assets/images/Robot-Encaser.jpg';
import robotPalletizerImage from '../../assets/images/robot-petlizer.jpg';
import mechanicalPalletizerImage from '../../assets/images/Mechanical-Palletizer.jpg';
import ContactCTA from '../../components/home/ContactCTA';

const SecondaryPackagingSystem = () => {
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
      id: 'conveyor-system',
      title: 'Conveyor System',
      description: 'The efficiency of the production line has a great relationship with the configuration of the conveyor line. When configuring the conveyor line, it must be taken into consideration that the short-term shutdown of the downstream equipment (such as replacing tags, etc.) will not affect the operation of the upstream equipment. At the same time, it should be able to well connect the equipment in the upstream and downstream sections so that the entire production line can achieve high operating efficiency. Modular design has been used for the conveyor belt structure, which is compact, low-noise, and convenient in installation and maintenance. It is easy to replace the components. It is flexible to combine each part together according to different capabilities, bottle types. The electrical control design is advanced and reasonable. The control method can be designed according to the customer\'s floor plan requirements, and the required electrical control elements can be selected to further improve the smoothness of the delivery.',
      image: conveyorSystemImage,
      features: []
    },
    {
      id: 'bottle-warmer',
      title: 'Bottle Warmer',
      description: 'Low-temperature filling is used for carbonated beverages (usually at 4-10 °C), but the room temperature in summer is much higher. In such environment, the moisture in the air can easily condense into dew on the outer surface of the bottle body. This brings inconvenience to follow-up packaging and operations such as labeling. In particular, if the carton is used for packaging, the dew can easily wet the paperboard, which can be damaged seriously. Therefore, a bottle warmer must be installed after the filling machine to heat the bottle to room temperature. The bottle warmer is a tunnel type spray equipment. It heats the bottle through heat exchange of circulating hot water and has three temperature zones (more warm zones can also be designed). After section heating, the temperature of the beverage center reaches room temperature. Dynamic transition is adopted at the import and export of the bottle warmer in order to reduce the squeeze on the inverted bottle sterilization machine and manual intervention.',
      image: bottleWarmerImage,
      features: []
    },
    {
      id: 'bottle-tilting-system',
      title: 'Bottle Tilting System',
      description: 'Inverted bottle sterilization machine is a special matching device developed and researched according to the process characteristics of the high-temperature filling production line. The device will roll the product after filling and capping, use the high temperature of the product, and perform secondary sterilization of the cap in a certain period of time to ensure the quality of the product. During the conveying process, the product is guided by two mutually perpendicular chain plates, which implements automatically such operations as bottle inversion, time-delay sterilization, and automatic erection. The whole process is stable and reliable.',
      image: bottleTiltingImage,
      features: []
    },
    {
      id: 'shower-cooling-tunnel',
      title: 'Shower Cooling Tunnel',
      description: 'Spraying sterilization machine adopts five-stage treatment of hot water spray sterilization and gradual cooling. The equipment is equipped with an automatic chlorine feed pump, and the amount of chlorine can be adjusted according to the amount of water supply. The hot water is generated by the steam heating device, and the used water flows into the rack sink and is reused by the spray pump. If the temperature of the hot water does not reach the set temperature, it is properly warmed by the heating device. If the temperature of the hot water exceeds the set temperature, the water is sent to a cooling tower outside the workshop by a circulation pump to be cooled and then recycled. Dynamic transition is adopted at the import and export of the bottle warmer in order to reduce the squeeze on the inverted bottle sterilization machine and manual intervention.',
      image: showerCoolingTunnelImage,
      features: []
    },
    {
      id: 'labeler',
      title: 'Labeler',
      description: 'Newamstar labeler adopts modular design, which can meet customized requirements for various bottle types, different labeling forms or combined labeling forms. The rotary bottle tray of the labeler adopts servo positioning mode, which can realize accurate positioning for different bottle types by visual positioning, sensor positioning, and bottle bottom slot positioning. Labeling machine can be adapted to different labeling station modules – hot melt glue labeling station, self-adhesive labeling station and pre-coated glue labeling station.',
      image: labelerImage,
      techParameters: [
        'Capacity: 1200-60000BPH',
        'Precision: ±1.5mm',
        'Bottle diameter: φ45-250mm',
        'Bottle height: 150-480mm',
        'Bottle shape: Round or square bottle',
        'Label height: Max 170mm'
      ],
      optionalModules: [
        'Visual positioning module',
        'Online inspection module',
        'Label absence',
        'Trademark position',
        'Filling level'
      ],
      features: []
    },
    {
      id: 'film-wrapper',
      title: 'Film Wrapper',
      description: 'It is widely used in the combination packaging of beverage, food, pharmaceutical and chemical products. No matter whether it is square, round, or flat, it can be packaged and has excellent visual effects. It is the preferred matching equipment for beer and beverage filling production lines. This machine adopts multi-axis servo motor synchronous control technology, film cooling technology, film tension control technology and bottle pressure-free control technology. The control system can automatically detect the status of bottles, cardboard, and films. Artificially caused changes in the local position of the machine do not affect the machine\'s synchronous operation. The machine can monitor the amount of film storage detected by the counting pulse, and automatically alarm when the amount of storage is insufficient; constant temperature control can be realized for the temperature of the heat shrinkage channel; film transportation and cutting are also realized under a special control system.',
      image: filmWrapperImage,
      features: []
    },
    {
      id: 'carton-wrapper',
      title: 'Carton Wrapper',
      description: 'Carton wrapping machine is widely used for the packaging of PET bottles and can be used as an alternative to the case packing machine and its accessory equipment to increase production capacity while saving production costs. The automatic control system has strong system expansion capabilities, networking capabilities, and good openness. The combination of servo control and photoelectric sensor enables the machine to be controlled effectively and improves work efficiency. Adjustment indicators and scales are installed at key adjustment points to facilitate customers\' adjustments to the packaging of different products.',
      image: cartonWrapperImage,
      features: []
    },
    {
      id: 'starpack',
      title: 'Starpack',
      description: 'Starpack is a multi-functional packer that meets requirements of diversified packaging formats. It can realize one-piece cardboard wrapping with film or film only packing. It consists of frame body, cardboard storage and continuous feed unit, cardboard forming unit, film forming unit and heating tunnel.',
      image: starpackImage,
      features: []
    },
    {
      id: 'sorting-robot',
      title: 'Sorting Robot',
      description: 'With the rich experience accumulated in the field of bottled liquid packaging and advanced automated control technology, Newamstar can provide customers with automatic, high-speed, energy-saving sorting robots. Using video recognition, robot can perform the finishing of shaped bottles. All operating parameters and working status can be conveniently set and displayed through the touch screen. A video recognition system is used to accurately identify the direction of the bottle. Unique design of bottle output guide saves the robot\'s steering time, making the robot bottle release faster and more efficient.',
      image: sortingRobotImage,
      features: []
    },
    {
      id: 'robot-encaser',
      title: 'Robot Encaser',
      description: 'In order to create a highly efficient and flexible production workflow for the post-packaging work, Newamstar has designed the best robot solutions for customers.',
      image: robotEncaserImage,
      features: []
    },
    {
      id: 'robot-palletizer',
      title: 'Robot Palletizer',
      description: 'It is used in the industries of beer food and beverage, the chemical, etc., to stack various types of bottles and bags. With a small occupied area, easy adjustment and large production capacity, it is particularly suitable for space-constrained layout plans and is suitable for a variety of fascia boards and boxes. The change of production line only needs to modify the software program. Press one button to change the type of stacking and it is easy to change products. Flexible handling and handling can simultaneously ensure the operation of multiple production lines.',
      image: robotPalletizerImage,
      features: []
    },
    {
      id: 'mechanical-palletizer',
      title: 'Mechanical Palletizer',
      description: 'It is used in the industries of beer food and beverage, the chemical, etc., to stack various types of bottles and bags. With easy adjustment and large production capacity, it is suitable for a variety of fascia boards and boxes. The change of production line only needs to modify the software program. Press one button to change the type of stacking and it is easy to change products. It is suitable for palletizing the packages of carbon and heat shrink film.',
      image: mechanicalPalletizerImage,
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
                    Secondary Packaging Systems
                  </span>
                </h1>
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-3xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <img 
                  src={secondaryPackagingImg} 
                  alt="Newamstar Secondary Packaging" 
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
                  
                  {product.techParameters && (
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-800 mb-2">Tech Parameters:</h5>
                      <ul className="space-y-1">
                        {product.techParameters.map((param, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{param}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {product.optionalModules && (
                    <div className="mb-4">
                      <h5 className="font-semibold text-gray-800 mb-2">Optional Modules:</h5>
                      <ul className="space-y-1">
                        {product.optionalModules.map((module, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-600 text-sm">{module}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                
                <div className="lg:w-1/2 relative overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent z-10"></div>
                  <img 
                    src={product.image} 
                    alt={product.title}
                    className="w-full h-64 lg:h-full object-cover transition-transform duration-500 group-hover:scale-110"
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
              Watch our secondary packaging systems working in real production environments
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="250" 
                  src="https://www.youtube.com/embed/fVzEAeCAvoQ?si=VrjFQwHN3doDWwqQ" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full rounded-t-2xl"
                ></iframe>
              </div>
              <div className="p-4">
                <h4 className="text-gray-800 font-semibold mb-2">Secondary Packaging Technology</h4>
                <p className="text-gray-600 text-sm">Advanced packaging automation systems</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="250" 
                  src="https://www.youtube.com/embed/0NVsB_PbYKg?si=bIw3Ey2L0mQLY40j" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full rounded-t-2xl"
                ></iframe>
              </div>
              <div className="p-4">
                <h4 className="text-gray-800 font-semibold mb-2">Robotic Packaging Solutions</h4>
                <p className="text-gray-600 text-sm">Automated robotic packaging systems</p>
              </div>
            </div>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="aspect-video">
                <iframe 
                  width="100%" 
                  height="250" 
                  src="https://www.youtube.com/embed/yMik5nmhTLM?si=6driCsI2V-B5VglE" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="w-full h-full rounded-t-2xl"
                ></iframe>
              </div>
              <div className="p-4">
                <h4 className="text-gray-800 font-semibold mb-2">End-of-Line Solutions</h4>
                <p className="text-gray-600 text-sm">Complete packaging line integration</p>
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

export default SecondaryPackagingSystem;