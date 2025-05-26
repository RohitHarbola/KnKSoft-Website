"use client";

import { memo, useCallback, useMemo } from "react";
import Image from "next/image";
import { useState } from "react";
import { TABS, SERVICES, type Service } from "./constants";

interface TabButtonProps {
  tab: (typeof TABS)[number];
  isActive: boolean;
  onClick: () => void;
}

const TabButton = memo(({ tab, isActive, onClick }: TabButtonProps) => (
  <button
    onClick={onClick}
    onMouseEnter={onClick}
    className={`text-left text-white font-semibold py-3 px-4 hover:opacity-90 transition-all duration-300 ${
      isActive
        ? "border-l-4 border-white bg-white/10 rounded-md"
        : "border-l-4 border-transparent"
    }`}
  >
    {tab.title}
    <span className="text-base font-light text-white block">App</span>
  </button>
));

interface ServiceItemProps {
  service: Service;
  isActive: boolean;
  onClick: () => void;
}

const ServiceItem = memo(({ service, isActive, onClick }: ServiceItemProps) => (
  <li
    onMouseEnter={onClick}
    className={`flex items-center space-x-2 py-3 px-4 rounded-md cursor-pointer transition-all duration-300 ${
      isActive ? "bg-orange-100 text-red-500" : "hover:bg-gray-100"
    }`}
  >
    <service.icon className="text-3xl" />
    <span className="text-base lg:text-lg">{service.title}</span>
  </li>
));

const Services = () => {
  const [activeTab, setActiveTab] = useState(1);
  const [activeService, setActiveService] = useState(SERVICES[0].id);

  const filteredServices = useMemo(
    () => SERVICES.filter((service) => service.tab === activeTab),
    [activeTab]
  );

  const activeImage = useMemo(
    () => SERVICES.find((service) => service.id === activeService)?.image,
    [activeService]
  );

  const handleTabChange = useCallback((tabId: number) => {
    setActiveTab(tabId);
    const firstServiceOfTab = SERVICES.find((service) => service.tab === tabId);
    if (firstServiceOfTab) {
      setActiveService(firstServiceOfTab.id);
    }
  }, []);

  return (
    <div className="bg-primary/5 py-10">
      <div>
        <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
          Streamline Your Handyman Services&nbsp;
          <span className="text-primary mt-2 block">
            With Our All-in-One App
          </span>
        </h2>
        <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
          Manage bookings, track jobs, and grow your handyman business with our
          comprehensive mobile solution.
        </p>
      </div>
      <div className="grid grid-cols-[60%_40%] justify-between lg:flex-row w-full max-w-7xl mx-auto p-5 py-10 space-y-8 lg:space-y-0 lg:space-x-4">
        <div className="grid grid-cols-[30%_70%] bg-white shadow-sm border border-gray-100 rounded-2xl overflow-hidden">
          <div className="flex lg:flex-col justify-between py-16 lg:py-20 bg-gradient-to-b from-orange-500 to-red-500 p-5 rounded-md">
            {TABS.map((tab) => (
              <TabButton
                key={tab.id}
                tab={tab}
                isActive={activeTab === tab.id}
                onClick={() => handleTabChange(tab.id)}
              />
            ))}
          </div>

          <div className="flex-1 p-5">
            <h3 className="text-xl font-semibold mb-4 text-red-500">
              {TABS.find((tab) => tab.id === activeTab)?.title} Features
            </h3>
            <ul className="space-y-2">
              {filteredServices.map((service) => (
                <ServiceItem
                  key={service.id}
                  service={service}
                  isActive={activeService === service.id}
                  onClick={() => setActiveService(service.id)}
                />
              ))}
            </ul>
          </div>
        </div>

        {activeImage && (
          <div className="hidden lg:flex justify-center items-center rounded-md p-4">
            <div className="relative w-full h-[400px] lg:h-[500px] mx-auto">
              <Image
                fill
                src={activeImage}
                alt="Service Feature"
                className="object-contain rounded-md transition-all duration-300 w-full h-full"
                priority={true}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

TabButton.displayName = "TabButton";
ServiceItem.displayName = "ServiceItem";

export default memo(Services);
