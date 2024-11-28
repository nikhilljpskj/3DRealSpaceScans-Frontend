import React from "react";
import NcImage from "shared/NcImage/NcImage"; 
import { Link } from 'react-router-dom';

const FacilityManagementPage: React.FC = () => {
  return (
    <div className="facility-management-page space-y-16 p-8 lg:p-16 bg-gray-50 dark:bg-gray-900 text-neutral-900 dark:text-neutral-100">

      {/* Hero Section */}
      <header className="hero-section text-center space-y-6">
        <h1 className="text-3xl md:text-5xl font-extrabold text-neutral-800 dark:text-neutral-200">
          Facility Management 3D Laser Scanning
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
          Accurate and comprehensive as-built spatial data for smarter facility management.
        </p>
      </header>

      {/* Hero Image */}
      <NcImage
        className="w-full rounded-lg shadow-md max-w-3xl mx-auto"
        containerClassName="container mx-auto my-10"
        src="/assets/services/FM3D.jpg"
        alt="Facility Management 3D Laser Scanning Hero"
      />

      {/* Unlock Efficiency Section */}
      <section className="intro-section grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold text-neutral-800 dark:text-neutral-200">
            Unlock Operational Efficiency with 3D Laser Scanning
          </h2>
          <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 mt-4">
            3D laser scanning revolutionizes facility management by capturing detailed and
            precise spatial data. Enhance efficiency, reduce costs, and implement proactive
            maintenance protocols to manage your facilities seamlessly.
          </p>
          <ul className="mt-6 list-disc pl-5 space-y-2 text-base md:text-lg text-neutral-700 dark:text-neutral-300">
            <li>Comprehensive BIM and 3D modeling for better facility planning.</li>
            <li>Virtual walkthroughs and 2D CAD drawings for accurate insights.</li>
            <li>Improved maintenance schedules and safety compliance.</li>
          </ul>
        </div>
        <NcImage
          className="rounded-lg shadow-md max-w-sm mx-auto"
          src="/assets/services/FM3D3.jpg"
          alt="Operational Efficiency with 3D Scanning"
        />
      </section>

      {/* Why Choose Us Section */}
      <section className="benefits-section space-y-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-neutral-800 dark:text-neutral-200">
          Why Choose 3DRealspace Scans for Facility Management?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <ul className="list-disc pl-5 space-y-3 text-base md:text-lg text-neutral-700 dark:text-neutral-300">
              <li>
                <strong>Unmatched Precision:</strong> Capture millions of data points with
                accuracy down to 1mm.
              </li>
              <li>
                <strong>Experienced Team:</strong> Professional CAD modelers ensure quality
                deliverables tailored to your needs.
              </li>
              <li>
                <strong>Strategic Insights:</strong> Enhance facility operations and reduce
                costs with detailed spatial data.
              </li>
              <li>
                <strong>Fast Turnaround:</strong> Quick and efficient project delivery
                without compromising on quality.
              </li>
            </ul>
          </div>
          <NcImage
            className="rounded-lg shadow-md max-w-sm mx-auto"
            src="/assets/services/FM3D2.jpg"
            alt="Why Choose Us for Facility Scanning"
          />
        </div>
      </section>

      {/* BIM for Facility Management Section */}
      <section className="bim-section space-y-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-neutral-800 dark:text-neutral-200">
          The Advantages of BIM for Facility Management
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
              Building Information Modeling (BIM) integrates 3D scanning data into
              powerful, data-rich models. These models assist facility managers in making
              informed decisions about asset management, renovation planning, and
              operational efficiency.
            </p>
            <ul className="mt-6 list-disc pl-5 space-y-2 text-base md:text-lg text-neutral-700 dark:text-neutral-300">
              <li>Assess building structure, systems, and layout with precision.</li>
              <li>Streamline maintenance scheduling for better efficiency.</li>
              <li>Simulate design changes to reduce costly errors and risks.</li>
              <li>
                Centralized repository for enhanced collaboration and planning.
              </li>
            </ul>
          </div>
          <NcImage
            className="rounded-lg shadow-md max-w-sm mx-auto"
            src="/assets/services/FM3D1.jpg"
            alt="BIM Benefits for Facility Management"
          />
        </div>
      </section>

      {/* Digital Twins Section */}
      <section className="digital-twins-section space-y-8 bg-neutral-100 dark:bg-neutral-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-semibold text-center text-neutral-800 dark:text-neutral-200">
          Advanced Facility Management Using Digital Twins
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
              A digital twin replicates your physical assets, providing real-time data for
              superior facility management. Enhance predictive maintenance, optimize
              resources, and lower operational costs with this cutting-edge technology.
            </p>
            <ul className="mt-6 list-disc pl-5 space-y-2 text-base md:text-lg text-neutral-700 dark:text-neutral-300">
              <li>Monitor facility performance in real-time.</li>
              <li>
                Identify inefficiencies and implement proactive solutions.
              </li>
              <li>Simulate scenarios to plan for future upgrades.</li>
              <li>Ensure sustainable and energy-efficient operations.</li>
            </ul>
          </div>
          <NcImage
            className="rounded-lg shadow-md max-w-sm mx-auto"
            src="/assets/services/FM3D4.jpg"
            alt="Digital Twins for Facility Management"
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section text-center space-y-6 bg-neutral-100 dark:bg-neutral-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-800 dark:text-neutral-200">
          Ready to Elevate Your Facility Management?
        </h2>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          Contact us today for a consultation and experience the accuracy and
          efficiency of 3D laser scanning for your project.
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

export default FacilityManagementPage;
