import React from "react";

const IndustryAndGeographicExpertise = () => {
  return (
    <div className="">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Industry and Geographic Expertise
        </h2>
        <p className="text-lg text-gray-600 mb-6">
          With a proven track record across diverse industries, we understand the unique needs and challenges of sectors such as Real Estate, Construction, Hospitality, and Retail. Our services extend throughout California, Nevada, and Oregon, ensuring our advanced scanning technology is accessible where it’s needed most.
        </p>
        
        <div className="">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Service Regions
          </h3>
          <div className="flex space-x-6">
            <div className="bg-gray-200 px-4 py-2 rounded-md shadow-md text-center">
              <span className="text-lg text-gray-700">California</span>
            </div>
            <div className="bg-gray-200 px-4 py-2 rounded-md shadow-md text-center">
              <span className="text-lg text-gray-700">Nevada</span>
            </div>
            <div className="bg-gray-200 px-4 py-2 rounded-md shadow-md text-center">
              <span className="text-lg text-gray-700">Oregon</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustryAndGeographicExpertise;
