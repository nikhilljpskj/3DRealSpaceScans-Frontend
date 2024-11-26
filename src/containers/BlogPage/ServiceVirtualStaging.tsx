import React from "react";
import Badge from "shared/Badge/Badge";
import NcImage from "shared/NcImage/NcImage";
import { Helmet } from "react-helmet";
import BackgroundVideo from "components/BackgroundVideo";
import ServiceFooter from "components/ServiceFooter/ServiceFooter";

const ServiceVirtualStaging = () => {
  const renderHeader = () => {
    return (
      <header className="container rounded-xl">
        <div className="max-w-screen-md mx-auto space-y-5">
          <Badge href="##" color="purple" name="Service" />
          <h1
            className="text-neutral-900 font-semibold text-3xl md:text-4xl md:!leading-[120%] lg:text-4xl dark:text-neutral-100 max-w-4xl"
            title="Virtual Staging Service"
          >
            Virtual Staging
          </h1>
          <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1">
            Transform vacant spaces into beautifully furnished homes with our virtual staging solutions.
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
        <h3>Bring Your Property to Life</h3>
        <p>
          Our virtual staging service utilizes advanced technology to create stunning, realistic representations of your property. By digitally adding furniture and decor, we help potential buyers visualize their future home, significantly enhancing the appeal of vacant spaces.
        </p>

        <h3>Enhance Online Listings</h3>
        <p>
          In today’s digital age, captivating online listings are crucial. Our virtual staging solutions improve the presentation of your property, making it stand out in listings and attracting more potential buyers. With our service, you can transform any space and showcase its full potential with just a few clicks.
        </p>

        <h3>Why Choose Virtual Staging?</h3>
        <h4>Cost-Effective and Efficient</h4>
        <p>
          Traditional staging can be expensive and time-consuming. Our virtual staging offers a cost-effective alternative, allowing you to create beautifully staged spaces without the hassle of physical staging logistics.
        </p>
        
        <ul>
          <li><strong>Instant Transformation:</strong> See your property come alive within days.</li>
          <li><strong>Endless Design Possibilities:</strong> Choose from a wide range of styles and furnishings.</li>
          <li><strong>Remote Accessibility:</strong> Access virtual staging solutions from anywhere, enhancing flexibility and convenience.</li>
        </ul>

        <blockquote>
          <p>
            Imagine potential buyers exploring your property with stunning visuals of beautifully staged interiors. Our virtual staging service makes it possible, creating a memorable first impression that resonates with your audience.
          </p>
        </blockquote>

        <h4>Minimal Disruption</h4>
        <p>
          Unlike physical staging, our virtual staging process requires no physical intervention in your space. We create stunning visuals that require minimal effort on your part while maximizing the property's appeal.
        </p>
      </div>
    );
  };

  return (
    <div className="nc-PageSingle pt-8 lg:pt-16">
      <Helmet>
        <title>Virtual Staging</title>
        <meta name="description" content="Enhance your property's appeal with our virtual staging service, creating stunning visuals that attract potential buyers." />
      </Helmet>
      {renderHeader()}
      {/* <BackgroundVideo videoSrc="/assets/services/virtual-staging.mp4" /> */}
      
      <NcImage
        className="w-full rounded-xl"
        containerClassName="container my-10 sm:my-12 "
        src="/assets/services/virtual-staging-img.jpg"
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
        //   { text: "Digital Twins for Construction & Architecture", route: "/digital-twin" },
        // ]}
      />
      
    </div>
  );
};

export default ServiceVirtualStaging;
