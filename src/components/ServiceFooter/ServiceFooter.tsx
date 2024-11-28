import React from "react";
import { Link } from "react-router-dom";

interface ServiceFooterProps {
  bookingRoute: string;
  bookingText: string;
  // serviceLinks: { text: string; route: string }[];
}

const ServiceFooter: React.FC<ServiceFooterProps> = ({
  bookingRoute,
  bookingText,
  // serviceLinks,
}) => {
  return (
    <div className="container mx-auto my-10 sm:my-12 px-5 lg:px-10">
      <div className="flex flex-col items-center justify-between gap-6 md:gap-10 p-8 rounded-xl">
        
        {/* Booking Section */}
        <div className="flex-1 text-center space-y-3">
          <h3 className="text-xl font-semibold text-neutral-900 dark:text-neutral-100">
            Ready to Get Started?
          </h3>
          <p className="text-neutral-600 dark:text-neutral-300">
            Schedule a consultation with our team to bring your vision to life.
          </p>
          <Link
            to={bookingRoute}
            className="inline-block mt-3 px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors duration-200"
          >
            {bookingText}
          </Link>
        </div>

        {/* Other Services Section */}
        {/* <div className="flex-1 text-center md:text-left space-y-3 md:space-y-0">
          <h4 className="text-lg font-semibold text-neutral-900 dark:text-neutral-100">
            Explore Our Other Services
          </h4>
          <div className="flex justify-center md:justify-start gap-6">
            {serviceLinks.map((service, index) => (
              <Link
                key={index}
                to={service.route}
                className="text-purple-600 hover:text-purple-700 dark:text-purple-400 dark:hover:text-purple-500 font-medium transition-colors duration-200"
              >
                {service.text}
              </Link>
            ))}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default ServiceFooter;
