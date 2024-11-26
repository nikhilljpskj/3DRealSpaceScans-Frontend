import SectionSliderNewCategories from "components/SectionSliderNewCategories/SectionSliderNewCategories";
import React, { useEffect } from "react";
import SectionSubscribe2 from "components/SectionSubscribe2/SectionSubscribe2";
import SectionOurFeatures from "components/SectionOurFeatures/SectionOurFeatures";
import SectionHowItWork from "components/SectionHowItWork/SectionHowItWork";
import BackgroundSection from "components/BackgroundSection/BackgroundSection";
import { TaxonomyType } from "data/types";
import SectionGridAuthorBox from "components/SectionGridAuthorBox/SectionGridAuthorBox";
import SectionHero2 from "components/SectionHero2/SectionHero2";
//
import logo1 from "images/logos/nomal/1.png";
import logo1Dark from "images/logos/dark/1.png";
//
import logo2 from "images/logos/nomal/2.png";
import logo2Dark from "images/logos/dark/2.png";
//
import logo3 from "images/logos/nomal/3.png";
import logo3Dark from "images/logos/dark/3.png";
//
import logo4 from "images/logos/nomal/4.png";
import logo4Dark from "images/logos/dark/4.png";
//
import logo5 from "images/logos/nomal/5.png";
import logo5Dark from "images/logos/dark/5.png";
//
import HIW1img from "images/HIW2-1.png";
import HIW2img from "images/HIW2-2.png";
import HIW3img from "images/HIW2-3.png";
import HIW1imgDark from "images/HIW2-1-dark.png";
import HIW2imgDark from "images/HIW2-2-dark.png";
import HIW3imgDark from "images/HIW2-3-dark.png";
import rightImgPng from "images/our-features-2.png";
import IndustryAndGeographicExpertise from "components/IndustryAndGeographicExpertise/IndustryAndGeographicExpertise"
import SectionGridFeatureProperty from "./SectionGridFeatureProperty";
import SectionDowloadApp from "./SectionDowloadApp";
import FAQSection from "components/FAQSection/FAQSection";
import {SERVICES} from 'data/services';
import {Helmet} from 'react-helmet';

function PageHome2() {
  // CUSTOM THEME STYLE
  useEffect(() => {
    const $body = document.querySelector("body");
    if (!$body) return;
    $body.classList.add("theme-cyan-blueGrey");
    return () => {
      $body.classList.remove("theme-cyan-blueGrey");
    };
  }, []);

  return (
    <div className="nc-PageHome2 relative overflow-hidden">
      {/* GLASSMOPHIN */}
      {/* <BgGlassmorphism /> */}

      <div className="container relative space-y-24 mb-24 lg:space-y-28 lg:mb-28">
        <SectionHero2 className="" />

        {/* SECTION 1 logos of popular clients */}
        <div className="ncSectionLogos grid grid-cols-3 lg:grid-cols-5 gap-5 sm:gap-16">
          <div className="flex items-end justify-center">
            <img className="block dark:hidden" src={logo1} alt="logo1" />
            <img className="hidden dark:block" src={logo1Dark} alt="logo1" />
          </div>
          <div className="flex items-end justify-center">
            <img className="block dark:hidden" src={logo4} alt="logo4" />
            <img className="hidden dark:block" src={logo4Dark} alt="logo4" />
          </div>
          <div className="flex items-end justify-center">
            <img className="block dark:hidden" src={logo2} alt="logo2" />
            <img className="hidden dark:block" src={logo2Dark} alt="logo2" />
          </div>
          <div className="flex items-end justify-center">
            <img className="block dark:hidden" src={logo3} alt="logo3" />
            <img className="hidden dark:block" src={logo3Dark} alt="logo3" />
          </div>

          <div className="flex items-end justify-center">
            <img className="block dark:hidden" src={logo5} alt="logo5" />
            <img className="hidden dark:block" src={logo5Dark} alt="logo5" />
          </div>
        </div>

        {/* SECTION */}
        <SectionHowItWork
          data={[
            {
              id: 1,
              img: HIW1img,
              imgDark: HIW1imgDark,
              title: "Select Your Service",
              desc: "Choose from our range of 3D solutions: Virtual Tours, Digital Twins, or Virtual Staging. Each service is tailored to meet unique project needs.",
            },
            {
              id: 2,
              img: HIW2img,
              imgDark: HIW2imgDark,
              title: "Customize Your Project",
              desc: "Provide project details, including property type, area size, and any special requirements. This helps us tailor our services to your vision.",
            },
            {
              id: 3,
              img: HIW3img,
              imgDark: HIW3imgDark,
              title: "Schedule & Confirm",
              desc: "Pick a convenient date for a site visit or virtual consultation. After booking, receive a confirmation and instructions to complete your reservation.",
            },
          ]}
        />


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
        <FAQSection />
        <Helmet>
        <title>Home</title>
      </Helmet>
      </div>
    </div>
  );
}

export default PageHome2;
