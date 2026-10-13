"use client";

import { useState } from "react";
import type { ContactPopupProps } from "../../../types/popup-contact-form";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Button } from "../Button/Button";
import { ArrowRightIcon } from "lucide-react";
import { toast } from "react-toastify";
import { NAVIGATION_MENUS } from "@/constants/navigation";
import { Progress } from "../progress";

// Add validation helper functions
const isValidEmail = (email: string) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

const isValidName = (name: string) => {
  return name.trim().length >= 2;
};

export function ContactPopup({ isOpen, onClose }: ContactPopupProps) {
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

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!isValidName(formData.name)) {
      newErrors.name = "Name must be at least 2 characters long";
    }

    if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!formData.interestedServices) {
      newErrors.interestedServices = "Please select a service";
    }

    if (!formData.launchTimeline) {
      newErrors.launchTimeline = "Please select a timeline";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/getintouch", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

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
      onClose();
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
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const getServices = () => {
    const servicesMenu = NAVIGATION_MENUS.find(
      (menu) => menu.name === "Services"
    );
    return servicesMenu?.subMenu || [];
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 overflow-y-auto"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            style={{
              backgroundImage: "url('/images/form-popup-bg.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="relative w-full max-w-6xl rounded-lg bg-white p-4 shadow-xl my-auto md:p-8"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 bg-primary rounded-full text-white p-1.5"
              aria-label="Close popup"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Tech Stack Icons */}
            <div className="absolute right-0 top-0 -z-10 h-full w-1/3 opacity-20">
              <div className="relative h-full w-full">
                {/* Add your tech stack icons here */}
                <div className="absolute right-12 top-12">
                  <Image
                    src="/placeholder.svg"
                    width={500}
                    height={500}
                    alt=""
                    className="h-12 w-12"
                  />
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-6 max-w-xl">
              <div>
                <h2 className="text-xl font-bold text-blue-600">Wait!</h2>
                <h3 className="text-2xl font-bold text-gray-900 md:text-3xl">
                  Give Your Idea a Chance to Shine
                </h3>
                <p className="text-xl font-bold text-gray-900">
                  Talk to Our Experts!
                </p>
                <p className="mt-2 text-gray-600">
                  Let&apos;s discuss your idea and build great things together!
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`mt-2 w-full rounded-lg border ${
                        errors.name ? "border-red-500" : "border-border"
                      } bg-input px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20`}
                    />
                    {errors.name && (
                      <p className="text-sm text-red-500 mt-1">{errors.name}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Business Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className={`mt-2 w-full rounded-lg border ${
                        errors.email ? "border-red-500" : "border-border"
                      } bg-input px-4 py-2.5 text-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20`}
                    />
                    {errors.email && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
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

                  <div className="space-y-2">
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
                <div className="space-y-2">
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
                <div className="space-y-2">
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
                <div className="space-y-2">
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

                <div className="space-y-2">
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

                <div className="flex flex-col gap-4 pt-4 sm:flex-row">
                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    disabled={loading}
                    rightIcon={<ArrowRightIcon />}
                    className="w-full sm:w-auto"
                  >
                    {loading ? "Sending..." : "Request a Call Back!"}
                  </Button>
                  <button
                    type="button"
                    onClick={onClose}
                    className="text-sm text-gray-600 underline hover:text-gray-800 text-center"
                  >
                    I&apos;d like to keep it to myself!
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
