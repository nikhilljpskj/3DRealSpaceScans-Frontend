import React from "react";
import Badge from "shared/Badge/Badge";
import NcImage from "shared/NcImage/NcImage";
import { Helmet } from "react-helmet";
import BackgroundVideo from "components/BackgroundVideo";
import ServiceFooter from "components/ServiceFooter/ServiceFooter";


const ServiceDigitalTwin = () => {
  const renderHeader = () => {
    return (
      <header className="container rounded-xl">
        <div className="max-w-screen-md mx-auto space-y-5">
          <Badge href="##" color="purple" name="Service" />
          <h1
            className="text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-4xl dark:text-neutral-100 max-w-4xl"
            title="Digital Twins for Construction & Architecture"
          >
            Digital Twins for Construction & Architecture
          </h1>
          <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1">
            Capture every detail of your building or site with a digital twin for remote viewing, progress tracking, and much more.
          </span>
        </div>
      </header>
    );
  };

  const renderContent = () => {
    return (
      <div
        id="single-entry-content"
        className="prose dark:prose-invert prose-sm !max-w-screen-md sm:prose lg:prose-lg mx-auto dark:prose-dark"
      >
        <h3>Virtually Walk Through Your Building or Facility</h3>
        <p>
          Digital twins provide a powerful way to capture and replicate real-world spaces in a virtual environment. Our digital twin services allow users to walk through construction sites, facilities, and architectural spaces from anywhere, providing a versatile tool for monitoring, collaboration, and management.
        </p>

        <h3>Comprehensive and Real-Time Access</h3>
        <p>
          With just a web browser, stakeholders can assess project progress, remotely survey spaces, and explore facilities in real time. A digital twin offers endless applications, from construction tracking to virtual tourism, making it a valuable asset for modern architecture and construction.
        </p>

        <h3>Why Choose Digital Twins?</h3>
        <h4>Track Progress and Enhance Collaboration</h4>
        <p>Digital twins enable continuous progress tracking, letting construction and facility management teams monitor sites at any stage. This ensures timely updates, reduces travel, and streamlines communication across teams and stakeholders.</p>
        
        <ul>
          <li><strong>Progress Tracking:</strong> Monitor every phase of construction with ease.</li>
          <li><strong>Remote Assessment:</strong> Conduct remote surveys and facility inspections from anywhere.</li>
          <li><strong>Training and Familiarization:</strong> Use digital twins for site familiarization and staff training without needing to physically visit the location.</li>
        </ul>

        <blockquote>
          <p>
            Imagine walking through a construction site virtually, observing every detail, and identifying potential issues—all without disrupting the ongoing work. With a digital twin, stakeholders can access up-to-date visual data and make informed decisions at any stage of the project.
          </p>
        </blockquote>

        <h4>Minimal Disruption, Maximum Detail</h4>
        <p>
          Our scanning process is efficient and designed to minimize impact on your daily activities. By simply walking through the facility, our team can capture a complete, high-resolution digital twin. Scanning can also be scheduled during off-hours, ensuring your operations continue smoothly.
        </p>
      </div>
    );
  };

  return (
    <div className="nc-PageSingle pt-8 lg:pt-16">
      <Helmet>
        <title>Digital Twins for Construction & Architecture</title>
        <meta name="description" content="Explore the benefits of Digital Twins in construction and architecture with real-time progress tracking, remote assessment, and virtual site walkthroughs." />
      </Helmet>
      {renderHeader()}
      {/* <BackgroundVideo videoSrc="/assets/services/digital-twin.mp4" /> */}

      <NcImage
        className="w-full rounded-xl"
        containerClassName="container my-10 sm:my-12"
        src="/assets/services/digital-twin-img.jpg"
        alt="Digital Twin for Construction & Architecture"
      />
      <div className="nc-SingleContent container space-y-10">
        {renderContent()}
        <div className="max-w-screen-md mx-auto border-b border-t border-neutral-100 dark:border-neutral-700"></div>
      </div>

      <ServiceFooter
        bookingRoute="/booking"
        bookingText="Book an Appointment"
        // serviceLinks={[
        //   { text: "3D Virtual Tours for Real Estate", route: "/3d-virtual-tours" },
        //   { text: "Virtual Staging", route: "/virtual-staging" },
        // ]}
      />

    </div>
  );
};

export default ServiceDigitalTwin;
