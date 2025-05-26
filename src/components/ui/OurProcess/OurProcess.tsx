import React from "react";
import { ProcessData } from "./OurProcessData";
import Image from "next/image";

const OurProcess = () => {
  return (
    <div className="py-12 lg:pb-20 xl:pb-24">
      <div className="container px-4">
        <div className="flex flex-col justify-center items-center mb-10">
          <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
            OUR&nbsp;
            <span className="text-primary">PROCESS</span>
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
            We have worked with startups as well as established companies in
            diverse sectors of the economy.
          </p>
        </div>
        <div className="flex flex-wrap lg:flex-nowrap justify-center items-center">
          {ProcessData.map((item, index) => (
            <div key={index} className="relative md:mb-0">
              <div
                className={`max-w-[236px] w-full h-[272px] ${item.gradient} flex items-center justify-center border border-dashed`}
                style={{ clipPath: item.shape }}
              >
                <div className="flex flex-col space-y-2 items-center justify-center p-6">
                  <div className="">
                    <Image
                      src={item.icon}
                      width={28}
                      height={28}
                      alt="process-icon"
                      className="w-7 h-7"
                    />
                  </div>
                  <h3 className="font-semibold text-base mb-0 text-center">
                    {item.title}
                  </h3>
                  <p className="text-xs xl:text-sm text-center text-gray-600 leading-tight">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurProcess;
