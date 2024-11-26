import React from "react";
import Badge from "shared/Badge/Badge";
import NcImage from "shared/NcImage/NcImage";
import { Helmet } from "react-helmet";
import ServiceFooter from "components/ServiceFooter/ServiceFooter";

type ServiceType = {
  title: string;
  tagline: string;
  intro?: string;
  description: string;
  benefits?: string[];
  keyDetails?: { accuracy: string; captureDetails: string };
  advantages?: { title: string; points: string[] }[];
  applications?: { title: string; points: string[] }[];
  imageSrc?: string;
  bookingRoute?: string;
  serviceLinks?: { label: string; href: string }[];
};

interface ServiceTemplateProps {
  service: ServiceType;
}

const ServiceTemplate: React.FC<ServiceTemplateProps> = ({ service }) => {
  const {
    title,
    tagline,
    intro,
    description,
    benefits = [],
    keyDetails,
    advantages = [],
    applications = [],
    imageSrc = "default-image-path.jpg",
    bookingRoute = "#",
    serviceLinks = [],
  } = service;

  const renderHeader = () => (
    <header className="container rounded-xl">
      <div className="max-w-screen-md mx-auto space-y-5">
        <Badge href="##" color="purple" name="Service" />
        <h1 className="text-neutral-900 font-semibold text-3xl md:text-4xl lg:text-4xl dark:text-neutral-100">
          {title}
        </h1>
        <span className="block text-base text-neutral-500 md:text-lg dark:text-neutral-400 pb-1">
          {tagline}
        </span>
        {intro && <p className="text-neutral-700 dark:text-neutral-300">{intro}</p>}
      </div>
    </header>
  );

  const renderBenefits = () => (
    benefits.length > 0 && (
      <section className="container my-8">
        <h2 className="text-xl font-semibold">Key Benefits</h2>
        <ul className="list-disc ml-5">
          {benefits.map((benefit, index) => (
            <li key={index} className="my-2 text-neutral-700 dark:text-neutral-300">
              {benefit}
            </li>
          ))}
        </ul>
      </section>
    )
  );

  const renderKeyDetails = () => (
    keyDetails && (
      <section className="container my-8">
        <h2 className="text-xl font-semibold">Key Details</h2>
        <div className="space-y-4 text-neutral-700 dark:text-neutral-300">
          <p><strong>Accuracy:</strong> {keyDetails.accuracy}</p>
          <p><strong>Capture Details:</strong> {keyDetails.captureDetails}</p>
        </div>
      </section>
    )
  );

  const renderAdvantagesOrApplications = (
    data: { title: string; points: string[] }[],
    sectionTitle: string
  ) => (
    data.length > 0 && (
      <section className="container my-8">
        <h2 className="text-xl font-semibold">{sectionTitle}</h2>
        {data.map((item, index) => (
          <div key={index} className="my-4">
            <h3 className="text-lg font-medium">{item.title}</h3>
            <ul className="list-disc ml-5">
              {item.points.map((point, i) => (
                <li key={i} className="my-1 text-neutral-700 dark:text-neutral-300">
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>
    )
  );

  return (
    <div className="nc-PageSingle pt-8 lg:pt-16">
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={tagline} />
      </Helmet>
      {renderHeader()}
      <NcImage
        className="w-full rounded-xl"
        containerClassName="container my-10 sm:my-12"
        src={imageSrc}
        alt={title}
      />
      <div className="nc-SingleContent container space-y-10">
        <div
          id="single-entry-content"
          className="prose dark:prose-invert prose-sm !max-w-screen-md sm:prose lg:prose-lg mx-auto dark:prose-dark"
        >
          <p>{description}</p>
        </div>
        {renderBenefits()}
        {renderKeyDetails()}
        {renderAdvantagesOrApplications(advantages, "Advantages")}
        {renderAdvantagesOrApplications(applications, "Applications")}
        <div className="max-w-screen-md mx-auto border-b border-t border-neutral-100 dark:border-neutral-700"></div>
      </div>
      <ServiceFooter
        bookingRoute={bookingRoute}
        bookingText="Book an Appointment"
        // serviceLinks={serviceLinks}
      />
    </div>
  );
};

export default ServiceTemplate;
