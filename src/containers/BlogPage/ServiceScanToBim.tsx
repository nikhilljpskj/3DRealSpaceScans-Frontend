import React from "react";
import NcImage from "shared/NcImage/NcImage"; // Import the NcImage component
import { Link } from 'react-router-dom';

const ScanToBIMPage: React.FC = () => {
  return (
    <div className="scan-to-bim-page space-y-16 p-8 lg:p-16 bg-gray-50 dark:bg-gray-900 text-neutral-900 dark:text-neutral-100">
      {/* Hero Section */}
      <header className="hero-section text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-semibold">Scan to BIM Services</h1>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
          Transform spaces into accurate 3D models that save time, minimize design clashes, and improve quality.
        </p>
      </header>

      {/* Image Section */}
      <NcImage
        className="w-full max-w-4xl mx-auto rounded-xl"
        containerClassName="container my-10 sm:my-12"
        src="/assets/services/BIM.jpg" // Replace with your image path
        alt="Scan to BIM process illustration"
      />

      {/* Introduction Section */}
      <section className="intro-section grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            What is Scan to BIM?
          </h2>
          <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
            Scan to BIM is a process of capturing existing conditions of structures using advanced 3D laser scanning technology and transforming this data into detailed Building Information Models (BIM). These models are invaluable for architects, engineers, and contractors during various stages of a project lifecycle.
          </p>
        </div>
        <div>
          <NcImage
            className="rounded-lg w-full max-w-sm mx-auto"
            src="/assets/services/BIM1.jpg"
            alt="What is Scan to BIM"
          />
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works-section space-y-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          How Does Scan to BIM Work?
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
            The Scan to BIM process begins with capturing the structure using a 3D laser scanner. This device collects millions of data points (point clouds) in a short span of time. These data points are then processed and converted into an accurate, as-built 3D model using tools like Autodesk Revit or other CAD formats.
          </p>
          <NcImage
            className="rounded-lg w-full max-w-sm mx-auto"
            src="/assets/services/BIM2.jpg"
            alt="How it works"
          />
        </div>
        <ul className="list-disc pl-5 space-y-2 text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          <li>Define the scope and area for scanning.</li>
          <li>Deploy 3D laser scanners to capture the site.</li>
          <li>Convert point cloud data into 3D BIM models.</li>
          <li>Deliver precise models tailored to your requirements.</li>
        </ul>
      </section>

      {/* Applications Section */}
      <section className="applications-section grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <NcImage
            className="rounded-lg w-full max-w-sm mx-auto"
            src="/assets/services/BIM3.jpg"
            alt="Applications of Scan to BIM"
          />
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Applications of Scan to BIM
          </h2>
          <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
            Scan to BIM services have a wide range of applications across industries:
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>Estimating project costs and timelines.</li>
            <li>Designing around existing structures.</li>
            <li>Ensuring accurate engineering coordination.</li>
            <li>Monitoring construction progress and verifying as-built conditions.</li>
            <li>Streamlining facility management.</li>
          </ul>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section space-y-8">
        <h2 className="text-2xl md:text-3xl font-semibold text-center">
          Key Features of Scan to BIM
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="feature-card p-6 bg-white dark:bg-neutral-800 shadow rounded-lg">
            <h3 className="text-xl font-semibold">High Accuracy</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              Capture every detail with precision up to 1/8" over 100 ft.
            </p>
          </div>
          <div className="feature-card p-6 bg-white dark:bg-neutral-800 shadow rounded-lg">
            <h3 className="text-xl font-semibold">Fast Data Collection</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              Reduce time spent on manual measurements with rapid laser scanning.
            </p>
          </div>
          <div className="feature-card p-6 bg-white dark:bg-neutral-800 shadow rounded-lg">
            <h3 className="text-xl font-semibold">Versatile Applications</h3>
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              Models can be used for design, construction, and facility management.
            </p>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section className="sustainability-section grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            Sustainability with Scan to BIM
          </h2>
          <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
            Scan to BIM supports green building initiatives by accurately tracking material specifications and ensuring compliance with sustainability standards. It also minimizes material wastage and promotes efficient resource use.
          </p>
        </div>
        <div>
          <NcImage
            className="rounded-lg w-full max-w-sm mx-auto"
            src="/assets/services/BIM4.jpg"
            alt="Sustainability in Scan to BIM"
          />
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="cta-section text-center space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">
          Ready to Transform Your Project?
        </h2>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          Contact us today to learn how our Scan to BIM services can save time, improve accuracy, and streamline your workflows.
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

export default ScanToBIMPage;
