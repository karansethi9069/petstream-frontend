const productsData = [
    {
      id: 1,
      title: "PET Bottle Blowing Machines",
      slug: "pet-bottle-blowing-machines",
      description: "High-performance bottle blowing machines for the beverage and packaging industry.",
      features: [
        "Fully automatic operation",
        "Energy-efficient design",
        "Multiple bottle size capability",
        "Advanced control systems",
        "Quick mold changeover"
      ],
      specifications: "Production capacity: 6,000-24,000 bottles per hour\nBottle sizes: 200ml to 2.5L\nPower consumption: 30-75 kW",
      industryId: 1,
      images: [
        {
          url: "/images/products/bottle-blowing-1.jpg",
          isPrimary: true,
          displayOrder: 1
        },
        {
          url: "/images/products/bottle-blowing-2.jpg",
          isPrimary: false,
          displayOrder: 2
        }
      ],
      isFeatured: true,
      displayOrder: 1
    },
    {
      id: 2,
      title: "Injection Molding Systems",
      slug: "injection-molding-systems",
      description: "Precision injection molding equipment for plastic product manufacturing.",
      features: [
        "High-precision components",
        "Servo-hydraulic technology",
        "Customizable injection profiles",
        "Automated part removal",
        "Industry 4.0 compatibility"
      ],
      specifications: "Clamping force: 50-1000 tons\nInjection capacity: 30-5000g\nControl system: Advanced PLC with touchscreen interface",
      industryId: 3,
      images: [
        {
          url: "/images/products/injection-molding-1.jpg",
          isPrimary: true,
          displayOrder: 1
        },
        {
          url: "/images/products/injection-molding-2.jpg",
          isPrimary: false,
          displayOrder: 2
        }
      ],
      isFeatured: true,
      displayOrder: 2
    },
    {
      id: 3,
      title: "Hot Runner Systems",
      slug: "hot-runner-systems",
      description: "Advanced hot runner systems for plastic injection molds.",
      features: [
        "Uniform temperature distribution",
        "Minimal pressure drop",
        "Leak-proof design",
        "Easy maintenance access",
        "Compatible with various resins"
      ],
      specifications: "Nozzle types: Thermal gate, valve gate\nTemperature range: 150-400°C\nPower requirements: 230V/400V, 16-32A",
      industryId: 3,
      images: [
        {
          url: "/images/products/hot-runner-1.jpg",
          isPrimary: true,
          displayOrder: 1
        },
        {
          url: "/images/products/hot-runner-2.jpg",
          isPrimary: false,
          displayOrder: 2
        }
      ],
      isFeatured: true,
      displayOrder: 3
    },
    {
      id: 4,
      title: "Medical Device Assembly Lines",
      slug: "medical-device-assembly",
      description: "Clean-room compatible assembly systems for medical device manufacturing.",
      features: [
        "ISO 13485 compliant",
        "Clean room compatible (Class 7-8)",
        "Validation documentation",
        "Vision inspection systems",
        "Full traceability"
      ],
      specifications: "Production capacity: Up to 120 parts per minute\nCleanliness class: ISO 14644-1 compatible\nControl system: 21 CFR Part 11 compliant",
      industryId: 4,
      images: [
        {
          url: "/images/products/medical-assembly-1.jpg",
          isPrimary: true,
          displayOrder: 1
        },
        {
          url: "/images/products/medical-assembly-2.jpg",
          isPrimary: false,
          displayOrder: 2
        }
      ],
      isFeatured: false,
      displayOrder: 4
    },
    {
      id: 5,
      title: "Packaging Automation Systems",
      slug: "packaging-automation",
      description: "End-to-end automation solutions for the packaging industry.",
      features: [
        "Modular design",
        "Quick format changeover",
        "Remote monitoring capability",
        "Energy efficiency features",
        "Integrated quality control"
      ],
      specifications: "Speed: Up to 150 packages per minute\nPackage types: Bottles, cans, pouches, cartons\nIntegration: OPC-UA, MQTT protocols",
      industryId: 2,
      images: [
        {
          url: "/images/products/packaging-automation-1.jpg",
          isPrimary: true,
          displayOrder: 1
        },
        {
          url: "/images/products/packaging-automation-2.jpg",
          isPrimary: false,
          displayOrder: 2
        }
      ],
      isFeatured: true,
      displayOrder: 5
    }
  ];
  
  export default productsData;
  