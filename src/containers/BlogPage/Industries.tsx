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
      title: "Power Plant 3D Scanning",
      description: "Our 3D scanning solutions offer precise mapping and visualization of power plants, enabling maintenance teams to detect potential issues, improve safety protocols, and plan refurbishments with unmatched accuracy.",
      imagePath: "/assets/industries/power-plant.jpg",
    },
    {
      title: "Factory 3D Scanning",
      description: "We assist factories in optimizing layouts and streamlining operations by providing comprehensive 3D scans that reveal detailed spatial data and enable efficient space management and machinery placements.",
      imagePath: "/assets/industries/factory.jpg",
    },
    {
      title: "Ships & Boats",
      description: "Our maritime 3D scanning services ensure accurate assessments of ship hulls and structural components, facilitating effective maintenance, retrofitting, and certification processes.",
      imagePath: "/assets/industries/ships.jpg",
    },
    {
      title: "Hospitals",
      description: "Enhance healthcare infrastructure with our 3D scanning technology, providing a clear understanding of space utilization and supporting renovations without disrupting vital services.",
      imagePath: "/assets/industries/hospitals.jpg",
    },
    {
      title: "Cell Towers",
      description: "Our 3D inspections help telecommunications companies ensure structural integrity and accurate equipment placement on cell towers, contributing to better network performance and reduced downtime.",
      imagePath: "/assets/industries/cell-towers.jpg",
    },
    {
      title: "Aerospace",
      description: "We support the aerospace industry with precision 3D scans for design validation, component inspection, and assembly checks, ensuring top-notch performance and compliance with strict standards.",
      imagePath: "/assets/industries/aerospace.jpg",
    },
    {
      title: "Floor Flatness",
      description: "Our floor flatness scanning services deliver reliable data for construction projects, ensuring floors meet quality and safety standards, which is crucial for high-load environments.",
      imagePath: "/assets/industries/floor-flatness.jpg",
    },
    {
      title: "Wind Turbines",
      description: "We provide 3D scanning of wind turbines to help assess wear and tear, optimize maintenance schedules, and enhance the lifespan of these critical energy assets.",
      imagePath: "/assets/industries/wind-turbines.jpg",
    },
    {
      title: "3D Inspections",
      description: "Our comprehensive 3D inspections cater to a variety of industries, offering precise, data-rich analyses for quality control, defect detection, and performance assessments.",
      imagePath: "/assets/industries/3d-inspections.jpg",
    },
    {
      title: "Staircases",
      description: "From construction to renovation, our 3D scanning solutions ensure staircases are built or updated with precision and compliance with safety standards.",
      imagePath: "/assets/industries/staircases.jpg",
    },
    {
      title: "Roads and Bridges",
      description: "Our advanced 3D scanning services provide detailed mapping and structural assessments of roads and bridges, assisting in maintenance planning, safety checks, and engineering projects.",
      imagePath: "/assets/industries/roads-bridges.jpg",
    },
    {
      title: "Tanks & Vessels",
      description: "We help industries maintain tanks and vessels by offering internal and external 3D scans that highlight corrosion, structural issues, and help plan for efficient maintenance.",
      imagePath: "/assets/industries/tanks-vessels.jpg",
    },
    {
      title: "Theaters & Concert Halls",
      description: "Our 3D scanning services for theaters and concert halls provide comprehensive space analysis for renovation planning, acoustical modeling, and optimal audience seating arrangements.",
      imagePath: "/assets/industries/theaters.jpg",
    },
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
