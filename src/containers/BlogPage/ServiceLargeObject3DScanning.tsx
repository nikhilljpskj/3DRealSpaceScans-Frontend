import React from 'react';
import NcImage from "shared/NcImage/NcImage"; // Import the NcImage component
import { Link } from 'react-router-dom';

const LargeObject3DScanningPage: React.FC = () => {
  return (
    <div className="large-object-3d-scanning-page space-y-16 p-8 lg:p-16 bg-gray-50 dark:bg-gray-900 text-neutral-900 dark:text-neutral-100">
      <header className="hero-section text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-semibold">Large Object 3D Scanning</h1>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
          Precision 3D Scanning for Machines, Vehicles, Sculptures, and More
        </p>
      </header>

      {/* Image placeholder section */}
      <NcImage
        className="w-full rounded-xl"
        containerClassName="container my-10 sm:my-12"
        src="/assets/services/LO3D.jpg" // Replace with your image path
        alt="Large Object 3D Scanning"
      />

      <section className="intro-section space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Unlock the Power of Large Object 3D Scanning</h2>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          Whether it's machinery, vehicles, or large sculptures, 3D scanning provides an accurate, digital representation of your object. With our advanced scanning technology, we can scan large objects on-site, capturing all the details and ensuring precision down to the millimeter.
        </p>
      </section>

      <section className="benefits-section space-y-4 lg:flex lg:space-x-12">
        <div className="lg:w-2/3">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Benefits of Large Object 3D Scanning</h2>
          <ul className="list-disc pl-5 space-y-2 text-base md:text-lg text-neutral-700 dark:text-neutral-300">
            <li><strong>Accurate Representations:</strong> Get precise 3D models of large objects for further analysis, modeling, or fabrication.</li>
            <li><strong>Reverse Engineering:</strong> Re-create or modify legacy parts, molds, or components with digital models.</li>
            <li><strong>Streamlined Workflow:</strong> Save time and reduce errors by capturing detailed measurements quickly, making the design or restoration process more efficient.</li>
          </ul>
         
        </div>
        <div className="lg:w-1/3 mt-6 lg:mt-0">
          <NcImage
            className="w-full rounded-xl object-cover"
            src="/assets/services/LO3D1.jpg" // Replace with your image path
            alt="3D Scanning Benefits"
          />
        </div>
      </section>

      <section className="3d-scanning-in-action space-y-4 lg:flex lg:space-x-12">
        <div className="lg:w-1/3 mt-6 lg:mt-0">
          <NcImage
            className="w-full rounded-xl object-cover"
            src="/assets/services/LO3D3.jpg" // Replace with your image path
            alt="3D Scanning Benefits"
          />
        </div>
        <div className="lg:w-2/3">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">How 3D Scanning Works for Large Objects</h2>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          Our tripod-mounted 3D scanners are designed to capture large objects with high precision where they stand. Whether it's a car, an airplane, or even a large sculpture, our scanners gather millions of data points, providing a true-to-life digital representation for design, analysis, and more.
        </p>
        </div>
      </section>

      <section className="types-of-objects-section space-y-4">
  <h2 className="text-2xl md:text-3xl font-semibold">What Types of Large Objects Can Be Scanned?</h2>
  <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
    <div className="flex flex-col items-center relative">
      <NcImage
        className="w-full lg:h-58 xl:h-64 rounded-lg object-cover"
        src="/assets/services/AIRCRAFT.jpg"
        alt="Entire Aircraft"
      />
      <p className="text-base text-neutral-700 dark:text-neutral-300 mt-2">Entire Aircraft</p>
    </div>
    <div className="flex flex-col items-center relative">
      <NcImage
        className="w-full lg:h-58 xl:h-64 rounded-lg object-cover"
        src="/assets/services/TREE.jpg"
        alt="Trees"
      />
      <p className="text-base text-neutral-700 dark:text-neutral-300 mt-2">Trees</p>
    </div>
    <div className="flex flex-col items-center relative">
      <NcImage
        className="w-full lg:h-58 xl:h-64 rounded-lg object-cover"
        src="/assets/services/WIND.jpg"
        alt="Wind Turbines"
      />
      <p className="text-base text-neutral-700 dark:text-neutral-300 mt-2">Wind Turbines</p>
    </div>
    <div className="flex flex-col items-center relative">
      <NcImage
        className="w-full lg:h-58 xl:h-64 rounded-lg object-cover"
        src="/assets/services/CARS.jpg"
        alt="Cars and Trucks"
      />
      <p className="text-base text-neutral-700 dark:text-neutral-300 mt-2">Cars and Trucks</p>
    </div>
    <div className="flex flex-col items-center relative">
      <NcImage
        className="w-full lg:h-58 xl:h-64 rounded-lg object-cover"
        src="/assets/services/Helicopters.jpg"
        alt="Helicopters"
      />
      <p className="text-base text-neutral-700 dark:text-neutral-300 mt-2">Helicopters</p>
    </div>
    <div className="flex flex-col items-center relative">
      <NcImage
        className="w-full lg:h-58 xl:h-64 rounded-lg object-cover"
        src="/assets/services/boat-hull.jpg"
        alt="Boat Hulls"
      />
      <p className="text-base text-neutral-700 dark:text-neutral-300 mt-2">Boat Hulls</p>
    </div>
    <div className="flex flex-col items-center relative">
      <NcImage
        className="w-full lg:h-58 xl:h-64 rounded-lg object-cover"
        src="/assets/services/tanks-vessels.jpg"
        alt="Tanks & Vessels"
      />
      <p className="text-base text-neutral-700 dark:text-neutral-300 mt-2">Tanks & Vessels</p>
    </div>
    <div className="flex flex-col items-center relative">
      <NcImage
        className="w-full lg:h-58 xl:h-64 rounded-lg object-cover"
        src="/assets/services/staircase.jpg"
        alt="Staircases"
      />
      <p className="text-base text-neutral-700 dark:text-neutral-300 mt-2">Staircases</p>
    </div>
    <div className="flex flex-col items-center relative">
      <NcImage
        className="w-full lg:h-58 xl:h-64 rounded-lg object-cover"
        src="/assets/services/LO3D2.jpg"
        alt="Statues"
      />
      <p className="text-base text-neutral-700 dark:text-neutral-300 mt-2">Statues</p>
    </div>
  </div>
</section>


      <section className="accuracy-section space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">How Accurate Are the Scans?</h2>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          Our 3D scanners offer up to 1mm accuracy, which is ideal for reverse engineering, art restoration, and precise manufacturing tasks. Depending on the size and complexity of the object, we can adjust the scanning method to meet your exact requirements.
        </p>
      </section>

      <section className="applications-section space-y-4 lg:flex lg:space-x-12">
        <div className="lg:w-2/3 mt-6 lg:mt-0">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Applications of Large Object 3D Scanning</h2>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300 mb-4">
          Our 3D scanning services are ideal for a wide range of industries, including:
        </p>

        <ul className="list-disc pl-5 space-y-2 text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          <li>Aircrafts and Aviation Components</li>
          <li>Automotive Industry</li>
          <li>Architecture and Construction</li>
          <li>Cultural Heritage and Art Restoration</li>
          <li>Heavy Machinery</li>
          <li>Marine Industry</li>
        </ul>
        </div>

        <div className="lg:w-1/3 mt-6 lg:mt-0">
          <NcImage
            className="w-full rounded-xl object-cover"
            src="/assets/services/LO3D4.jpg" // Replace with your image path
            alt="3D Scanning Benefits"
          />
        </div>
      </section>

      {/* Contact Us and Get a Quote Button Section */}

      <section className="cta-section text-center space-y-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6">
          Ready to Transform Your Project?
        </h2>
        <p className="text-lg text-neutral-700 dark:text-neutral-300 mb-6">
          Contact us today for a consultation and get a quote tailored to your project needs.
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

export default LargeObject3DScanningPage;
