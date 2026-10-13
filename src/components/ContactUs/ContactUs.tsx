"use client";

import { useState } from "react";
import { toast } from "react-hot-toast";
import { Loader2, Phone, Clock, Mail, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { NAVIGATION_MENUS } from "@/constants/navigation";
import { Progress } from "@/components/ui/progress";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import Image from "next/image";
import { usePathname } from "next/navigation";
/**
 * ContactSection Component
 * Renders a contact form with company information and handles form submissions
 * @returns JSX.Element
 */

export default function ContactSection() {
  const pathname = usePathname();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    companyName: "",
    interestedServices: "",
    launchTimeline: "",
    budget: 5000,
    aboutProject: "",
    sourceUrl: "",
  });

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formDataWithSource = {
        ...formData,
        sourceUrl: pathname || "/", // Default to '/' if pathname is null
      };
      console.log("Submitting form data:", formDataWithSource);
      const response = await fetch("/api/getintouch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formDataWithSource),
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        throw new Error("Failed to submit");
      }

      toast.success("Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        companyName: "",
        interestedServices: "",
        launchTimeline: "",
        budget: 5000,
        aboutProject: "",
        sourceUrl: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const getServices = () => {
    const servicesMenu = NAVIGATION_MENUS.find(
      (menu) => menu.name === "Services"
    );
    return servicesMenu?.subMenu || [];
  };

  return (
    <section>
      <div className="relative h-[30vh] sm:h-[40vh] lg:h-[50vh] flex items-center justify-center overflow-hidden">
        <Image
          src="https://st2.depositphotos.com/1019970/11309/i/450/depositphotos_113094540-stock-photo-contact-us-banner.jpg"
          alt="Contact Us"
          width={1920}
          height={1080}
          priority
          className="absolute w-full h-full inset-0 z-0 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 z-10"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Column */}
          <div className="space-y-8 max-w-xl">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Get in Touch with
                <span className="text-primary block text-4xl sm:text-5xl md:text-6xl font-extrabold">
                  Our
                  <br />
                  Experts
                </span>
              </h2>
              <p className="text-muted-foreground font-inter font-normal max-w-lg">
                Have questions about your hearing health? Our expert
                audiologists are here to help. Contact us today to schedule a
                consultation or learn more about our services.
              </p>
            </div>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-secondary p-3">
                  <MapPin className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm lg:text-base xl:text-lg text-foreground">
                    Visit Us
                  </h3>
                  <p className="text-muted-foreground text-xs sm:text-sm">
                    734/39-B, Block-E,
                    <br />
                    <span className="text-muted-foreground text-xs sm:text-sm">
                      Molarband-Badarpur,
                    </span>
                    <br />
                    <span className="text-muted-foreground text-xs sm:text-sm">
                      New Delhi, INDIA - 110044
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-secondary p-3">
                  <Phone className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm lg:text-base xl:text-lg text-foreground">
                    Call Us
                  </h3>
                  <Link
                    href="tel:+919891578609"
                    className="block text-muted-foreground text-xs sm:text-sm hover:text-primary transition-colors duration-300"
                  >
                    +91 9891-578-609
                  </Link>
                  <Link
                    href="tel:+916370782646"
                    className="block text-muted-foreground text-xs sm:text-sm hover:text-primary transition-colors duration-300"
                  >
                    +91 6370-782-646
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-secondary p-3">
                  <Mail className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm lg:text-base xl:text-lg text-foreground">
                    Email Us
                  </h3>
                  <Link
                    href="mailto:info@knksoftinfotech.com"
                    className="text-muted-foreground hover:text-primary hover:underline transition-colors font-inter font-normal"
                  >
                    info@knksoftinfotech.com
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-lg bg-secondary p-3">
                  <Clock className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm lg:text-base xl:text-lg text-foreground">
                    Working Hours
                  </h3>
                  <p className="text-muted-foreground text-sm font-inter font-normal">
                    Mon - Fri: 9:00 AM - 7:00 PM
                  </p>
                  <p className="text-muted-foreground text-sm font-inter font-normal">
                    Saturday: Closed
                  </p>
                  <p className="text-muted-foreground text-sm font-inter font-normal">
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border bg-card p-6 shadow-lg md:p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="text-sm font-medium text-foreground">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-border bg-input px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">
                    Business Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-border bg-input px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">
                    Phone Number *
                  </label>
                  <input
                    type="text"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-border bg-input px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground">
                    Company (or project) Name *
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    required
                    value={formData.companyName}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-border bg-input px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="grid gap-6">
                <div>
                  <label className="text-sm font-medium text-foreground">
                    What service(s) are you interested in? *
                  </label>
                  <select
                    name="interestedServices"
                    required
                    value={formData.interestedServices}
                    onChange={handleChange}
                    className="mt-2 w-full rounded-lg border border-border bg-input px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  >
                    <option value="">Select a service</option>
                    <option value="POS">POS</option>
                    {getServices().map((service) => (
                      <option key={service.href} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">
                  When do you want to launch a solution? *
                </label>
                <select
                  name="launchTimeline"
                  required
                  value={formData.launchTimeline}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-lg border border-border bg-input px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                >
                  <option value="">Select timeline</option>
                  <option value="immediately">Immediately</option>
                  <option value="1-3months">1-3 months</option>
                  <option value="3-6months">3-6 months</option>
                  <option value="6+months">6+ months</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">
                  Budget *
                </label>
                <div className="mt-2 space-y-2">
                  <Progress
                    value={(formData.budget / 50000) * 100}
                    className="h-2"
                  />
                  <input
                    type="range"
                    name="budget"
                    min="5000"
                    max="50000"
                    step="1000"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full bg-input"
                  />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${formData.budget.toLocaleString()}</span>
                    <span>$50,000</span>
                  </div>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-foreground">
                  About Project
                </label>
                <textarea
                  name="aboutProject"
                  value={formData.aboutProject}
                  onChange={handleChange}
                  rows={4}
                  className="mt-2 w-full rounded-lg border border-border bg-input px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button
                disabled={loading}
                variant={"primary"}
                size={"lg"}
                rightIcon={<Send className="h-5 w-5" />}
                className="w-full"
              >
                {loading ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Sending...
                  </span>
                ) : (
                  "Send Message"
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
