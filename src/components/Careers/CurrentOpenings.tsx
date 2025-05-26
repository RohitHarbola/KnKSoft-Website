"use client";

import { motion } from "framer-motion";
import { useState, FormEvent, useEffect, useRef } from "react";
import {
  BsBriefcase,
  BsGeoAlt,
  BsClock,
  BsCurrencyDollar,
  BsEnvelope,
  BsBookmark,
} from "react-icons/bs";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "react-hot-toast";

interface Job {
  _id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string[];
  responsibilities: string[];
  skills: string[];
  experience: string;
  education: string;
  ctc: string;
  email: string;
  createdAt: string;
  updatedAt: string;
}

interface ApplicationForm {
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  resume: File | null;
  coverLetter: string;
  jobId: string;
}

export default function CurrentOpenings() {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("All");
  const [selectedJob, setSelectedJob] = useState<Job | null>(null);
  const [viewingJobDetails, setViewingJobDetails] = useState<Job | null>(null);
  const [applicationForm, setApplicationForm] = useState<ApplicationForm>({
    fullName: "",
    email: "",
    phone: "",
    experience: "",
    resume: null,
    coverLetter: "",
    jobId: "",
  });
  const [jobs, setJobs] = useState<Job[]>([]);
  const [departments, setDepartments] = useState<string[]>(["All"]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  useEffect(() => {
    if (jobs.length > 0) {
      // Extract unique departments from jobs
      const uniqueDepartments = [
        "All",
        ...Array.from(new Set(jobs.map((job) => job.department))),
      ];
      setDepartments(uniqueDepartments);
    }
  }, [jobs]);

  useEffect(() => {
    if (selectedJob) {
      setApplicationForm((prev) => ({
        ...prev,
        jobId: selectedJob._id,
      }));
    }
  }, [selectedJob]);

  const fetchJobs = async () => {
    try {
      const response = await fetch("/api/jobs");
      if (!response.ok) throw new Error("Failed to fetch jobs");
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
      toast.error("Failed to load job listings");
      setJobs([]);
    }
  };

  const handleApplicationSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Here you would typically send the application to your API
      // For now, we'll just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1500));

      toast.success("Application submitted successfully!");
      setSelectedJob(null);
      setApplicationForm({
        fullName: "",
        email: "",
        phone: "",
        experience: "",
        resume: null,
        coverLetter: "",
        jobId: "",
      });

      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (error) {
      console.error("Error submitting application:", error);
      toast.error("Failed to submit application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const filteredJobs = jobs.filter((job) => {
    const matchesDepartment =
      selectedDepartment === "All" || job.department === selectedDepartment;
    const matchesSearch =
      searchTerm === "" ||
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.department.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesDepartment && matchesSearch;
  });

  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="title">Current Openings</h2>
          <p className="sub-title mx-auto">
            Join our team of passionate professionals and help build the future
            of technology
          </p>
        </motion.div>

        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search for jobs, locations, departments..."
              className="w-full px-4 py-3 pl-10 border border-border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <svg
                className="h-5 w-5 text-muted-foreground"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
        </div>

        <Tabs
          defaultValue="All"
          onValueChange={(value) => setSelectedDepartment(value)}
        >
          <TabsList className="flex space-x-2 bg-white shadow-lg mb-8 overflow-x-auto w-full">
            {departments.map((dept) => (
              <TabsTrigger
                key={dept}
                value={dept}
                className="flex-1 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
              >
                {dept}
              </TabsTrigger>
            ))}
          </TabsList>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, idx) => (
                <motion.div
                  key={`${job._id}-${idx}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-card border border-border rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="p-6">
                    <h3 className="text-2xl text-foreground font-bold mb-2">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center">
                        <BsBriefcase className="mr-2" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <BsGeoAlt className="mr-2" />
                        {job.location || "Remote"}
                      </div>
                      <div className="flex items-center">
                        <BsClock className="mr-2" />
                        {job.type}
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-2 text-foreground">
                          Responsibilities:
                        </h4>
                        <ul className="list-disc pl-5 text-muted-foreground">
                          {job.responsibilities.slice(0, 3).map((resp, idx) => (
                            <li key={`${job._id}-resp-${idx}`}>{resp}</li>
                          ))}
                          {job.responsibilities.length > 3 && (
                            <li
                              className="text-primary cursor-pointer"
                              onClick={() => setViewingJobDetails(job)}
                            >
                              + {job.responsibilities.length - 3} more
                            </li>
                          )}
                        </ul>
                      </div>

                      <div className="flex flex-wrap justify-between items-center gap-4">
                        <div>
                          <div className="flex items-center text-foreground mb-1">
                            <BsBookmark className="mr-2 text-accent" />
                            Experience: {job.experience}
                          </div>
                          <div className="flex items-center text-muted-foreground">
                            <BsCurrencyDollar className="mr-2 text-accent" />
                            {job.ctc}
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => setViewingJobDetails(job)}
                            className="text-blue-600 border border-blue-600 hover:bg-blue-50 font-semibold py-2 px-4 rounded-lg transition duration-300"
                          >
                            View Details
                          </button>
                          <button
                            onClick={() => setSelectedJob(job)}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
                          >
                            Apply Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <div className="col-span-2 text-center py-12">
                <div className="text-muted-foreground text-5xl mb-4">🔍</div>
                <h3 className="text-xl font-semibold mb-2">No jobs found</h3>
                <p className="text-muted-foreground">
                  {searchTerm
                    ? `No jobs match your search for "${searchTerm}"`
                    : "No jobs available in this department at the moment"}
                </p>
              </div>
            )}
          </div>
        </Tabs>
      </div>

      {/* Job Details Modal */}
      {viewingJobDetails && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold">{viewingJobDetails.title}</h3>
              <button
                onClick={() => setViewingJobDetails(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <div className="flex flex-wrap gap-4 text-gray-600 mb-6">
              <div className="flex items-center">
                <BsBriefcase className="mr-2" />
                {viewingJobDetails.department}
              </div>
              <div className="flex items-center">
                <BsGeoAlt className="mr-2" />
                {viewingJobDetails.location || "Remote"}
              </div>
              <div className="flex items-center">
                <BsClock className="mr-2" />
                {viewingJobDetails.type}
              </div>
              <div className="flex items-center">
                <BsCurrencyDollar className="mr-2" />
                {viewingJobDetails.ctc}
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold mb-2">Job Description</h4>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  {viewingJobDetails.description.map((desc, idx) => (
                    <li key={`desc-${idx}`}>{desc}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">Responsibilities</h4>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  {viewingJobDetails.responsibilities.map((resp, idx) => (
                    <li key={`resp-${idx}`}>{resp}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-2">Required Skills</h4>
                <ul className="list-disc pl-5 text-gray-600 space-y-1">
                  {viewingJobDetails.skills.map((skill, idx) => (
                    <li key={`skill-${idx}`}>{skill}</li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Experience Required
                  </h4>
                  <p className="text-gray-600">
                    {viewingJobDetails.experience}
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2">Education</h4>
                  <p className="text-gray-600">{viewingJobDetails.education}</p>
                </div>
              </div>

              <div className="flex justify-between items-center pt-4 border-t">
                <div className="flex items-center text-gray-600">
                  <BsEnvelope className="mr-2" />
                  Contact: {viewingJobDetails.email}
                </div>
                <button
                  onClick={() => {
                    setSelectedJob(viewingJobDetails);
                    setViewingJobDetails(null);
                  }}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
                >
                  Apply Now
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Application Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6"
          >
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold">
                  Apply for {selectedJob.title}
                </h3>
                <p className="text-gray-600">
                  {selectedJob.department} • {selectedJob.location || "Remote"}
                </p>
              </div>
              <button
                onClick={() => setSelectedJob(null)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleApplicationSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    value={applicationForm.fullName}
                    onChange={(e) =>
                      setApplicationForm({
                        ...applicationForm,
                        fullName: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    value={applicationForm.email}
                    onChange={(e) =>
                      setApplicationForm({
                        ...applicationForm,
                        email: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    value={applicationForm.phone}
                    onChange={(e) =>
                      setApplicationForm({
                        ...applicationForm,
                        phone: e.target.value,
                      })
                    }
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Years of Experience *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                    value={applicationForm.experience}
                    onChange={(e) =>
                      setApplicationForm({
                        ...applicationForm,
                        experience: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Resume *
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center">
                  <input
                    type="file"
                    ref={fileInputRef}
                    required
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                    onChange={(e) =>
                      setApplicationForm({
                        ...applicationForm,
                        resume: e.target.files?.[0] || null,
                      })
                    }
                  />
                  {applicationForm.resume ? (
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">
                        {applicationForm.resume.name}
                      </span>
                      <button
                        type="button"
                        onClick={() => {
                          setApplicationForm({
                            ...applicationForm,
                            resume: null,
                          });
                          if (fileInputRef.current)
                            fileInputRef.current.value = "";
                        }}
                        className="text-red-500 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <div
                      onClick={() => fileInputRef.current?.click()}
                      className="cursor-pointer py-8"
                    >
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="mt-1 text-sm text-gray-500">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-gray-500">
                        PDF, DOC, DOCX up to 10MB
                      </p>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Cover Letter
                </label>
                <textarea
                  className="w-full px-4 py-2 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
                  rows={4}
                  placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                  value={applicationForm.coverLetter}
                  onChange={(e) =>
                    setApplicationForm({
                      ...applicationForm,
                      coverLetter: e.target.value,
                    })
                  }
                />
              </div>

              <div className="flex justify-end gap-4">
                <button
                  type="button"
                  onClick={() => setSelectedJob(null)}
                  className="px-4 py-2 border rounded-lg hover:bg-gray-50"
                  disabled={isSubmitting}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className={`px-6 py-2 bg-blue-600 text-white rounded-lg transition-colors ${
                    isSubmitting
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:bg-blue-700"
                  }`}
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Submitting...
                    </span>
                  ) : (
                    "Submit Application"
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </section>
  );
}
