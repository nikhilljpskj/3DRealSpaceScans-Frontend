import React from 'react';
import NcImage from "shared/NcImage/NcImage"; // Import the NcImage component
import { Link } from 'react-router-dom';

const ScanToPlanPage: React.FC = () => {
  return (
    <div className="scan-to-plan-page space-y-16 p-8 lg:p-16 bg-gray-50 dark:bg-gray-900 text-neutral-900 dark:text-neutral-100">
      {/* Hero Section */}
      <header className="hero-section text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-semibold">
          Scan to Plan - 2D CAD Drawing from As-Built Conditions
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
          Automate the creation of precise 2D CAD drawings from 3D scans with unmatched efficiency and accuracy.
        </p>
      </header>

      {/* Hero Image */}
      <NcImage
        className="w-full rounded-xl"
        containerClassName="container my-8 sm:my-10" // Reduced margins for better spacing
        src="/assets/services/STP.jpg" // Replace with your image path
        alt="Scan to Plan Service"
        style={{ objectFit: 'cover', height: 'auto' }} // Ensure the image scales properly
      />

      {/* Intro Section */}
      <section className="intro-section space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Transform 3D Scans into Accurate 2D CAD Drawings</h2>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          Experience the seamless process of converting 3D scan data into 2D CAD drawings. Whether for floorplans, elevations, or detailed site layouts, our Scan-to-Plan service simplifies your design and planning workflows while delivering exceptional results.
        </p>
      </section>

      {/* Process Section */}
      <section className="process-section flex flex-col lg:flex-row items-center lg:space-x-8 space-y-8 lg:space-y-0">
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">How Does Scan-to-Plan Work?</h2>
          <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
            Our experienced team captures 3D scan data with millimeter precision. We then process the data, aligning individual scans, trimming unnecessary details, and generating high-quality 2D CAD drawings that are ready for immediate use.
          </p>
        </div>
        <NcImage
          className="w-full rounded-xl"
          containerClassName="lg:w-1/2"
          src="/assets/services/STP2.jpg" // Replace with your image path
          alt="Scan to Plan Process"
          style={{ objectFit: 'cover', height: '300px' }} // Adjusted height for visual consistency
        />
      </section>

      {/* Applications Section */}
      <section className="applications-section space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Applications of Scan-to-Plan</h2>
        <ul className="list-disc pl-5 space-y-2 text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          <li>Pre-construction planning and design</li>
          <li>Renovation and remodeling projects</li>
          <li>Facility management and as-built documentation</li>
          <li>Topography mapping and site layout preparation</li>
          <li>Accurate building sections and elevation views</li>
        </ul>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section space-y-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">Why Choose Scan-to-Plan?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-semibold">Accuracy</h3>
            <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
              Our scans offer precision up to 1mm, ensuring reliable data for all your design and construction needs.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-semibold">Efficiency</h3>
            <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
              Reduce time spent on manual measurements with quick and comprehensive 3D scanning.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-semibold">Cost-Effectiveness</h3>
            <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
              Lower expenses related to design changes and rework by starting with precise CAD drawings.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg md:text-xl font-semibold">Collaboration</h3>
            <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
              Enable architects, engineers, and project managers to work cohesively with accurate as-built plans.
            </p>
          </div>
        </div>
      </section>

      {/* What Can Be Scanned Section */}
      <section className="what-can-be-scanned-section flex flex-col lg:flex-row items-center lg:space-x-8 space-y-8 lg:space-y-0">
        <NcImage
          className="rounded-lg shadow-md max-w-sm mx-auto"
          containerClassName="lg:w-1/2"
          src="/assets/services/STP1.jpg" // Replace with your image path
          alt="Scan-to-Plan Applications"
          style={{ objectFit: 'cover', height: 'auto' }}
        />
        <div className="lg:w-1/2 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">What Can Be Scanned?</h2>
          <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
            Our technology captures data from various structures, including office buildings, industrial facilities, and residential spaces. These scans are ideal for planning, construction, and renovation.
          </p>
        </div>
      </section>

      {/* Conclusion Section */}
      <section className="conclusion-section text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Start Your Scan-to-Plan Journey Today</h2>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          Contact us to learn how our Scan-to-Plan service can revolutionize your project with accurate and efficient CAD drawings.
        </p>
        <div className="mt-6">
          <Link to="/booking" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ScanToPlanPage;
