import rightImg from "images/about-hero-right.png";
import React, { FC } from "react";
import SectionFounder from "./SectionFounder";
import SectionStatistic from "./SectionStatistic";
import { Helmet } from "react-helmet";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import BgGlassmorphism from "components/BgGlassmorphism/BgGlassmorphism";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import SectionHero from "./SectionHero";
import SectionClientSay from "components/SectionClientSay/SectionClientSay";
import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import {SERVICES} from 'data/services'
import IndustryAndGeographicExpertise from "components/IndustryAndGeographicExpertise/IndustryAndGeographicExpertise";


export interface PageAboutProps {
  className?: string;
}

const PageAbout: FC<PageAboutProps> = ({ className = "" }) => {
  return (
    <div
      className={`nc-PageAbout overflow-hidden relative ${className}`}
      data-nc-id="PageAbout"
    >
      <Helmet>
        <title>About || 3DRealspace Scans</title>
      </Helmet>

      {/* ======== BG GLASS ======== */}
      <BgGlassmorphism />

      <div className="container py-16 lg:py-28 space-y-16 lg:space-y-28">
        <SectionHero
          rightImg={'/assets/about/about-header.jpg'}
          heading="About Us"
          btnText="Get in touch with us"
          subHeading="We specialize in comprehensive 3D scanning services that capture every detail, turning physical spaces into accurate, navigable digital environments. Whether it’s creating virtual walkthroughs, archiving spaces, or aiding in complex project planning, we deliver results that are precise, versatile, and innovative."
        />

        <SectionFounder />
        {/* In the future let's add testimonials for this page */}
        {/* <div className="relative py-16">
          <BackgroundSection />
          <SectionClientSay uniqueClassName="PageAbout_" />
        </div> */}

        <SectionStatistic />

         {/* Services section */}
         <SectionSliderNewCategories
          categories={SERVICES}
          categoryCardType="card4"
          itemPerRow={3}
          heading="Our services"
          subHeading="Discover Our 3D Services That Bring Spaces to Life"
          uniqueClassName="PageHome2_s1"
        />
        
        <IndustryAndGeographicExpertise />
      </div>
    </div>
  );
};

export default PageAbout;
