import Image from 'next/image';
import { IoIosArrowDroprightCircle } from "react-icons/io";
export default function SilentFeatures() {
  const features = [
    {
      title: "Booking Management",
      description: "Users can seamlessly enjoy your services by booking time slots according to their availability."
    },
    {
      title: "Staff Management",
      description: "Staff members can update their availability status, track the scheduled appointments and a lot more."
    },
    {
      title: "Dynamic Automated Invoicing",
      description: "Our solution is integrated with powerful automated invoicing features, which is handy for routine operations."
    },
    {
      title: "Customer Management",
      description: "Handle your customers easily via admin dashboard, send them exclusive offers, quotes, etc."
    },
    {
      title: "Review",
      description: "Let users share their feedback and experience with your brand, via in-built review and rating system."
    },
    {
      title: "Help & Support",
      description: "Quickly receive and resolve your customers queries, via in-app chat support."
    }
  ];

  return (
    <section className="py-10">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-7xl mx-auto mb-2 md:mb-8 lg:mb-12">
          <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
            Salient Features of &nbsp;
            <span className="text-primary block mt-2">Our Home Services Marketplace</span>
          </h2>

        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left side - Phone Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative w-[300px] md:w-[400px] lg:w-[500px] mx-auto">
              <Image
                src="https://www.valueappz.com/img/home-services/fthom.png" // Make sure to add your phone mockup image
                alt="Home Services App Interface"
                width={400}
                height={800}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right side - Features List */}
          <div className="w-full lg:w-1/2 space-y-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-4">
                <div className="text-[#FF5733]">
                  <IoIosArrowDroprightCircle size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#2D3748] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="bg-[#FF5733] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#E64A2E] transition-colors">
            Book a Free Demo
          </button>
        </div>
      </div>
    </section>

  );
}
