"use client";

import dynamic from "next/dynamic";
import { Suspense } from "react";
import Loader from "../ui/Loader";

// Dynamically import components
const AboutUs = dynamic(() => import("./AboutUs"));
const BenefitsAndPerks = dynamic(() => import("./BenefitsAndPerks"));
const CurrentOpenings = dynamic(() => import("./CurrentOpenings"));

const Careers = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <AboutUs />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <CurrentOpenings />
      </Suspense>
      <Suspense fallback={<Loader />}>
        <BenefitsAndPerks />
      </Suspense>
    </>
  );
};

export default Careers;
