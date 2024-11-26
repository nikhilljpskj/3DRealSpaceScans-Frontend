import React from "react";
import Badge from "shared/Badge/Badge";
import NcImage from "shared/NcImage/NcImage";
import { Helmet } from "react-helmet";
import ServiceFooter from "components/ServiceFooter/ServiceFooter";

const Service3DVirtualTour = () => {
  const renderHeader = () => {
    return (
      
      <header className="container rounded-xl">
        <div className="max-w-screen-md mx-auto space-y-5">
          <Badge href="##" color="purple" name="Service" />
          <h1
            className=" text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-4xl dark:text-neutral-100 max-w-4xl "
            title="Quiet ingenuity: 120,000 lunches and counting"
          >
            3D Virtual Tours for Real Estate
          </h1>
          <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1">
          Enable a comprehensive view of every property.

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
        <h3>Showcase Properties Like Never Before</h3>
        <p>
        Our immersive 3D virtual tours revolutionize the way properties are viewed, providing buyers with a lifelike, interactive experience. With 3D virtual tours, potential buyers can explore every detail of a property, regardless of their location, enabling real estate agents to reach a wider audience and accelerate the sales process.


        </p>

        <h3>Comprehensive Viewing Experience</h3>

        <p>
        Every corner, room, and feature of a property is captured in stunning detail, allowing prospective buyers to get a true sense of the space and layout. 63% of buyers are more likely to buy a home if it has a virtual tour, underscoring the importance of an immersive viewing option.


        </p>
        <h3>Why Choose 3D Virtual Tours?</h3>
        <h4>Engage Buyers Anytime, Anywhere</h4>
        <p>3D tours provide a 24/7 open house experience that buyers can access at their convenience. This means no more scheduling conflicts or travel expenses; interested buyers can explore properties in detail from the comfort of their own homes.</p>
        <ul>
          <li><strong>Boost Engagement</strong>: Properties with virtual tours attract more views and longer visit times.</li>
          <li><strong>Accelerate Sales</strong>: Reduce time on market with immersive experiences that allow buyers to confidently explore properties.</li>
          <li><strong>Save Time</strong>: With 3D virtual tours, buyers can quickly shortlist their favorite homes, saving time for both clients and agents.</li>
        </ul>

        <blockquote>
          <p>
          Imagine an agent listing a luxury home. Instead of limiting viewings to local buyers, 3D virtual tours make it possible for international clients to explore every aspect of the property. They can navigate each room, zoom in on details, and get a feel for the home—all without ever stepping inside. This level of accessibility and engagement can be a game-changer, especially for properties that need to reach a global audience.


          </p>
        </blockquote>
       
      </div>
    );
  };

  return (
    <div className="nc-PageSingle pt-8 lg:pt-16 ">
      <Helmet>
        <title>3D Virtual Tours for Real Estate</title>
        <meta name="description" content="Explore properties with immersive 3D virtual tours that provide a comprehensive, interactive experience. Engage buyers anytime, anywhere." />
      </Helmet>
      {renderHeader()}
      <NcImage
        className="w-full rounded-xl"
        containerClassName="container my-10 sm:my-12 "
        src="/assets/services/services-3d-virtual-tours.jpg"
      />

      <div className="nc-SingleContent container space-y-10">
        {renderContent()}
        <div className="max-w-screen-md mx-auto border-b border-t border-neutral-100 dark:border-neutral-700"></div>
      </div>
      <ServiceFooter
        bookingRoute="/booking"
        bookingText="Book an Appointment"
        // serviceLinks={[
        //   { text: "Digital Twins for Construction & Architecture", route: "/digital-twin" },
        //   { text: "Virtual Staging", route: "/virtual-staging" },
        // ]}
      />
    </div>
  );
};

export default Service3DVirtualTour;
