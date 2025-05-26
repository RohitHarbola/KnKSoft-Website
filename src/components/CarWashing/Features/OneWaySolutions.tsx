import Image from "next/image";
const OneWaySolutions = () => {
  const benefitItems = [
    {
      icon: "/car-washing/cwa-icon-b1.png",
      title: "Readymade Car Wash Solutions",
      description:
        "Bring value to your car washing business as you rely on our readymade app & web solutions designed specifically to satisfy the 'car washing needs' of your customers. Build your own branded car washing app within a day to help your customers get highly reliable services asap.",
    },
    {
      icon: "/car-washing/cwa-icon-b2.png",
      title: "Freedom to Customize",
      description:
        "We understand that every business is different, just like yours. That means unique business requirements! With us, you have all the freedom to modify your car washing app as per your business demands to maximize customer satisfaction and service requests.",
    },

    {
      icon: "/car-washing/cwa-icon-b3.png",
      title: "24x7 Customer Support",
      description:
        "Facing issues while building your on-demand car washing app development solutions? Don't worry! Our dedicated team is always there to support you, offer relevant solutions, and help you continue building your app without any hassle. We are happy to help you, always!",
    },
  ];

  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-primary/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
            One Stop Solution for Your&nbsp;
            <span className="text-primary mt-2 block">
              Car Washing Services Business
            </span>
          </h2>
          <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
            Bring value to your car washing business with our readymade app &
            web solutions designed specifically to satisfy the car washing needs
            of your customers.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefitItems.map((item, index) => (
            <div
              key={index}
              className="relative bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-4 flex justify-center">
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={64}
                  height={64}
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center mb-4">
                {item.title}
              </h3>

              <p className="mt-2 text-base text-gray-600 text-center font-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OneWaySolutions;
