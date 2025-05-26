import Image from 'next/image';

export const GrowBusiness = () => {
    const services = [
        {
            title: "Restaurant",
            image: "https://www.valueappz.com/img/ifood/webp/sp7.webp",
        },
        {
            title: "Grocery",
            image: "https://www.valueappz.com/img/ifood/webp/sp8.webp",
        },
        {
            title: "Meat, Poultry and Seafood",
            image: "https://www.valueappz.com/img/ifood/webp/sp2.webp",
        },
        {
            title: "Snacking",
            image: "https://www.valueappz.com/img/ifood/webp/sp4.webp",
        },
        {
            title: "Bakery",
            image: "https://www.valueappz.com/img/ifood/webp/sp3.webp",
        },
        {
            title: "Cafe",
            image: "https://www.valueappz.com/img/ifood/webp/sp8.webp",
        },
    ];

    return (
        <section className="py-10 bg-primary/5">
            <div className="max-w-7xl mx-auto mb-2 md:mb-8 lg:mb-12">
                <h2 className="text-3xl font-bold text-center tracking-tight sm:text-4xl lg:text-5xl mb-4">
                    Start, Scale and Grow your&nbsp;
                    <span className="text-primary block mt-2">Food Business With Knksoftech</span>
                </h2>
                <p className="mt-2 max-w-3xl mx-auto text-base font-thin lg:text-lg text-foreground text-center mb-8">
                    Whether you own a small bakery or a 5-star restaurant, our food delivery applications are designed for all kinds of businesses in the food industry.
                </p>
            </div>
            <div className="max-w-6xl mx-auto px-4 py-12">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="relative">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    width={500}
                                    height={300}
                                    className='object-cover h-auto w-full'
                                />
                            </div>
                            <div className="p-2">
                                <h3 className="text-xl font-semibold text-slate-800">
                                    {service.title}
                                </h3>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <button className="bg-[#ff5733] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#ff4520] transition-colors duration-300">
                        Book a Free Demo
                    </button>
                </div>
            </div>

        </section>

    );
};
