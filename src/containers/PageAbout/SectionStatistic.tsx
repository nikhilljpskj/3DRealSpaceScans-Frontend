import React, { FC } from "react";
import Heading from "components/Heading/Heading";

export interface Statistic {
  id: string;
  heading: string;
  subHeading: string;
}

const FOUNDER_DEMO: Statistic[] = [
  {
    id: "1",
    heading: "Innovation",
    subHeading:
      "We are committed to staying ahead of the curve, integrating the latest advancements in technology for the best possible results.",
  },
  {
    id: "2",
    heading: "Quality",
    subHeading: "Every scan and project is completed with attention to detail and a dedication to excellence.",
  },
  {
    id: "3",
    heading: "Collaboration",
    subHeading:
      "We work closely with our clients, transforming their goals into digital realities.",
  },
];

export interface SectionStatisticProps {
  className?: string;
}

const SectionStatistic: FC<SectionStatisticProps> = ({ className = "" }) => {
  return (
    <div className={`nc-SectionStatistic relative ${className}`}>
      <Heading
        desc=" We’re passionate about turning ideas into reality. Guided by our core values, we strive to deliver innovative, precise, and impactful solutions tailored to each client’s unique vision.

"
      >
        Core values
      </Heading>
      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8">
  {FOUNDER_DEMO.map((item) => (
    <div
      key={item.id}
      className="p-6 bg-gradient-to-r from-purple-500 via-indigo-500 to-purple-500 rounded-2xl shadow-lg dark:shadow-none transform transition-transform hover:scale-105 dark:bg-gradient-to-r dark:from-purple-600 dark:via-indigo-600 dark:to-purple-600"
    >
      <h3 className="text-2xl font-semibold leading-none text-white md:text-3xl">
        {item.heading}
      </h3>
      <span className="block text-sm text-indigo-200 mt-3 sm:text-base">
        {item.subHeading}
      </span>
    </div>
  ))}
</div>
    </div>
  );
};

export default SectionStatistic;
