import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projects } from "./portfolioData";
import { motion } from "framer-motion";
import { Button } from "../Button/Button";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function FeaturedProject() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    className: "center",
    centerMode: true,
    centerPadding: "0px",
    adaptiveHeight: true,
    cssEase: "cubic-bezier(0.87, 0.03, 0.41, 0.9)",
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: true,
          speed: 600,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          arrows: false,
          speed: 400,
        },
      },
    ],
  };

  return (
    <section
      className="relative container px-4 py-10"
      aria-label="Featured Projects"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-2xl lg:text-4xl font-bold mb-4 lg:mb-8 tracking-tight">
          Featured Projects
        </h2>
      </motion.div>

      <Slider {...settings}>
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="outline-none focus:outline-none"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className="rounded-2xl p-4 md:p-6 mx-2 shadow-lg transition-all hover:shadow-xl"
              style={{
                backgroundColor: project.bgColor || "#FFF8E7",
              }}
            >
              <div className="flex flex-col md:flex-row justify-between gap-4">
                {/* Left Content Section */}
                <div className="flex flex-col justify-between space-y-4">
                  {/* Logo and Title */}
                  <div className="flex flex-col space-y-2">
                    <Image
                      src={project.logo || project.image}
                      alt={`${project.title} logo`}
                      width={60}
                      height={60}
                      className="rounded-xl transition-transform hover:scale-105"
                      priority
                    />
                    <h3 className="text-base md:text-lg font-bold">
                      {project.subtitle}
                    </h3>
                    <Button
                      variant="outline"
                      size="sm"
                      rightIcon={<ArrowRightIcon />}
                      className="bg-transparent border border-gray-900"
                    >
                      View Case Study
                    </Button>
                  </div>

                  {/* Store Links */}
                  <div className="flex items-center gap-4">
                    {project.appLinks.appStore && (
                      <Link
                        href={project.appLinks.appStore}
                        className="transition-transform hover:scale-110"
                        aria-label={`Download ${project.title} on App Store`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/images/appstore.svg"
                          alt="App Store"
                          width={30}
                          height={30}
                          priority
                        />
                      </Link>
                    )}
                    {project.appLinks.playStore && (
                      <Link
                        href={project.appLinks.playStore}
                        className="transition-transform hover:scale-110"
                        aria-label={`Download ${project.title} on Play Store`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src="/images/playstore.svg"
                          alt="Play Store"
                          width={30}
                          height={30}
                          priority
                        />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Right Image Section */}
                <div className="flex justify-center items-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={500}
                    height={400}
                    className="w-full h-auto max-w-[130px] md:max-w-[150px] transition-transform hover:scale-105"
                    priority
                  />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </Slider>
    </section>
  );
}
