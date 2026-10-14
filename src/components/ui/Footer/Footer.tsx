"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();

  // Do not render public site footer on admin dashboard or career admin routes
  if (pathname?.startsWith("/admin") || pathname?.startsWith("/career-admin")) {
    return null;
  }
  const quickLinks = [
    { text: "Contact Us", href: "/contact-us" },
    { text: "Portfolio", href: "/portfolio" },
    { text: "Careers", href: "/careers" },
    { text: "Awards & Events", href: "/awards-and-events" },
    { text: "Privacy Policy", href: "/privacy-policy" },
    { text: "Terms & Conditions", href: "/terms" },
  ];

  const onDemandApps = [
    { text: "Food Delivery", href: "/food-delivery-app-development" },
    { text: "Grocery Delivery", href: "/grocery-app-development" },
    { text: "Beauty Services", href: "/ondemand-beauty-app-development" },
    { text: "Home Services", href: "/ondemand-home-services-app-development" },
    { text: "Handyman Service", href: "/handyman-app-development" },
    { text: "Car Washing Services", href: "/car-washing-app-development" },
    { text: "Taxi Services", href: "/taxi-app-development" },
    { text: "On Demand Services", href: "/on-demand-app-development" },
  ];

  const socialIcons = [
    {
      Icon: FaFacebookF,
      href: "https://www.facebook.com/profile.php?id=61559964659278",
      label: "Facebook",
    },
    { Icon: FaXTwitter, href: "#", label: "Twitter" },
    {
      Icon: FaInstagram,
      href: "https://www.instagram.com/knksoftinfotech",
      label: "Instagram",
    },
    {
      Icon: FaLinkedinIn,
      href: "linkedin.com/company/knk-soft-infotech-pvt-ltd",
      label: "LinkedIn",
    },
    {
      Icon: FaYoutube,
      href: "https://www.youtube.com/channel/UCJ0_vBW32QCUfwmK-wdRTLA",
      label: "YouTube",
    },
  ];

  return (
    <footer className="bg-[#0d0f2c] px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto py-8 sm:py-12 lg:py-16">
        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 lg:gap-12">
          {/* Company Info Section */}
          <div className="lg:col-span-2 space-y-4 sm:space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.svg"
                alt="Company Logo"
                width={150}
                height={50}
                className="h-10 sm:h-12 w-auto brightness-[1.8]"
              />
            </Link>
            <p className="text-white/80 text-sm sm:text-base max-w-md">
              Leading provider of innovative IT solutions, specializing in
              custom software development, cloud services, and digital
              transformation.
            </p>
            {/* Social Icons */}
            <div className="flex flex-wrap gap-3 sm:gap-4">
              {socialIcons.map(({ Icon, href, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-background flex items-center justify-center hover:bg-primary transition-all duration-300"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-white/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services Section */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              Our Services
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {onDemandApps.map((link, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-white/70 hover:text-primary transition-colors duration-300"
                  >
                    {link.text}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="text-lg sm:text-xl font-semibold text-white">
              Contact Us
            </h3>
            <ul className="space-y-4 sm:space-y-6">
              {/* Address */}
              <li className="flex items-start gap-3">
                <div className="rounded-full bg-white/5 p-2 sm:p-2.5">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-white/90 text-sm sm:text-base mb-1">
                    Our Office
                  </h4>
                  <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
                    734/39-B, Block-E,
                    <br />
                    Molarband-Badarpur,
                    <br />
                    New Delhi, INDIA - 110044
                  </p>
                </div>
              </li>

              {/* Phone Numbers */}
              <li className="flex items-start gap-3">
                <div className="rounded-full bg-white/5 p-2 sm:p-2.5">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-white/90 text-sm sm:text-base mb-1">
                    Call Us
                  </h4>
                  <div className="space-y-1">
                    <Link
                      href="tel:+919891578609"
                      className="block text-white/70 text-xs sm:text-sm hover:text-primary transition-colors duration-300"
                    >
                      +91 9891-578-609
                    </Link>
                    <Link
                      href="tel:+916370782646"
                      className="block text-white/70 text-xs sm:text-sm hover:text-primary transition-colors duration-300"
                    >
                      +91 6370-782-646
                    </Link>
                  </div>
                </div>
              </li>

              {/* Email */}
              <li className="flex items-start gap-3">
                <div className="rounded-full bg-white/5 p-2 sm:p-2.5">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium text-white/90 text-sm sm:text-base mb-1">
                    Email Us
                  </h4>
                  <Link
                    href="mailto:info@knksoftinfotech.com"
                    className="block text-white/70 text-xs sm:text-sm hover:text-primary transition-colors duration-300"
                  >
                    info@knksoftinfotech.com
                  </Link>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-white/80 text-center sm:text-left">
              © {new Date().getFullYear()} KNK:SOFT INFOTECH Pvt Ltd. All rights
              reserved
            </p>
            <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4 sm:gap-8">
              <Link
                href="/privacy-policy"
                className="text-xs sm:text-sm text-white/70 hover:text-primary transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-xs sm:text-sm text-white/70 hover:text-primary transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-xs sm:text-sm text-white/70 hover:text-primary transition-colors duration-300"
              >
                Cookies Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
