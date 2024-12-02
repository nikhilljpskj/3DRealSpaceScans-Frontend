import React from "react";
import Badge from "shared/Badge/Badge";
import { Helmet } from "react-helmet";
import NcImage from "shared/NcImage/NcImage";

const IndustriesWeServe = () => {
  const renderHeader = () => {
    return (
      <header className="container rounded-xl mb-10">
        <div className="max-w-screen-lg mx-auto space-y-5">
          <Badge href="##" color="green" name="Industries" />
          <h1 className="text-neutral-900 font-semibold text-3xl md:text-4xl lg:text-5xl dark:text-neutral-100" title="Industries We Serve">
            Industries We Serve
          </h1>
          <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1">
            Discover how our 3D scanning and inspection services enhance operational efficiency across various industries.
          </span>
        </div>
      </header>
    );
  };

  const industryData = [
      {
        "title": "Residential Real Estate 3D Scanning",
        "description": "Transform the way properties are showcased with 3DRealSpace Scans. Our immersive, dimensionally accurate 3D models offer prospective buyers 24/7 access to open houses right from their devices. Showcase every detail of your listings in stunning clarity, making properties irresistible and boosting ready-to-buy interest.",
        "imagePath": "/assets/industries/residential-real-estate.jpg"
      },
      {
        "title": "Commercial Real Estate 3D Scanning",
        "description": "Optimize your commercial real estate strategy with interactive 3D digital twins from 3DRealSpace Scans. Streamline facility management, enhance capital planning, and reduce vacancies with data-driven property insights. Whether you're showcasing office spaces or retail complexes, our solutions bring your portfolio to life online.",
        "imagePath": "/assets/industries/commercial-real-estate.jpg"
      },
      {
        "title": "Architectural, Engineering, and Construction Scans",
        "description": "3DRealSpace Scans revolutionizes AEC workflows by integrating precise digital twins into every phase of your project. Detect potential issues early, enhance team collaboration, and streamline project timelines. Let our solutions minimize risk while maximizing efficiency for your design and construction needs.",
        "imagePath": "/assets/industries/aec.jpg"
      },
      {
        "title": "Insurance and Restoration 3D Scanning",
        "description": "Simplify claims with 3DRealSpace Scans. Our accurate and transparent 3D documentation provides insurers with detailed, reliable property assessments. Whether it’s pre-claim evidence or post-damage restoration, we help you cut costs, save time, and close cases faster than ever before.",
        "imagePath": "/assets/industries/insurance-restoration.jpg"
      },
      {
        "title": "Facilities Management 3D Scanning",
        "description": "Reimagine facilities management with 3DRealSpace Scans. Our comprehensive digital twins provide actionable insights, helping you optimize operations, manage maintenance remotely, and improve overall efficiency. Access your facilities anytime, anywhere, from any device.",
        "imagePath": "/assets/industries/facilities-management.jpg"
      },
      {
        "title": "Travel and Hospitality 3D Scanning",
        "description": "Elevate guest experiences and increase bookings with 3DRealSpace Scans. Our immersive digital tours and AI-enhanced insights enable seamless marketing and operational improvements for hotels, resorts, and vacation rentals. Let potential guests explore your spaces like never before.",
        "imagePath": "/assets/industries/travel-hospitality.jpg"
      },
      {
        "title": "Manufacturing 3D Scanning",
        "description": "Enhance manufacturing efficiency with 3DRealSpace Scans. Our 3D solutions support seamless site operations, improve training processes, and accelerate facility planning. Gain a competitive edge with accurate visualizations of your factory floors and workflows.",
        "imagePath": "/assets/industries/manufacturing.jpg"
      },
      {
        "title": "Government and Public Sector 3D Scanning",
        "description": "3DRealSpace Scans provides government agencies with the tools to create detailed, photorealistic, and dimensionally accurate 3D models. From urban planning to disaster management, our solutions ensure compliance and provide unparalleled insights for critical infrastructure projects.",
        "imagePath": "/assets/industries/public-sector.jpg"
      }
  ];
  

  const renderIndustryCard = (title="", description="", imagePath="") => (
    <div className="bg-white dark:bg-neutral-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
      <NcImage className="w-full rounded-t-lg" src={imagePath} />
      <div className="p-5 space-y-3">
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">{title}</h3>
        <p className="text-neutral-700 dark:text-neutral-300">{description}</p>
      </div>
    </div>
  );

  return (
    <div className="nc-PageSingle pt-8 lg:pt-16">
      <Helmet>
        <title>Industries We Serve</title>
        <meta name="description" content="Learn how our 3D scanning services benefit a range of industries from power plants to hospitals and more." />
      </Helmet>
      {renderHeader()}
      
      <section className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {industryData.map((industry, index) => (
          <div key={index}>
            {renderIndustryCard(industry.title, industry.description, industry.imagePath)}
          </div>
        ))}
      </section>
    </div>
  );
};

export default IndustriesWeServe;
