"use client";

import { useState, useEffect } from "react";
import AdminJobList from "@/components/Careers/Admin/AdminJobList";
import AdminJobForm from "@/components/Careers/Admin/AdminJobForm";
import JobApplicationsModal from "@/components/Careers/Admin/JobApplicationsModal";
import { Job } from "@/lib/careers/types";
import { Plus, ArrowLeft, Briefcase, Sparkles } from "lucide-react";

export default function CareerAdmin() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [editingJob, setEditingJob] = useState<Job | null>(null);
  const [showJobForm, setShowJobForm] = useState(false);
  const [selectedJobForApplications, setSelectedJobForApplications] = useState<Job | null>(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch("/api/jobs");
      const data = await response.json();
      setJobs(Array.isArray(data) ? data : []);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  const handleAddNewJob = () => {
    setSelectedJobForApplications(null);
    setEditingJob(null);
    setShowJobForm(true);
  };

  const handleEditJob = (job: Job) => {
    setSelectedJobForApplications(null);
    setEditingJob(job);
    setShowJobForm(true);
  };

  const handleFormSuccess = () => {
    fetchJobs();
    setEditingJob(null);
    setShowJobForm(false);
  };

  const handleViewApplications = (job: Job) => {
    setSelectedJobForApplications(job);
  };

  return (
    <div className="space-y-6">
      {/* Top Header with Add New Jobs button */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-gray-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 rounded-xl bg-blue-100 text-blue-600">
              <Briefcase className="w-5 h-5" />
            </span>
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
              Career Management
            </h1>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            {showJobForm
              ? editingJob
                ? "Update and modify the selected job vacancy details"
                : "Create and publish a new job opening to the public careers portal"
              : "View all current openings, manage postings, and download candidate resumes"}
          </p>
        </div>

        <div>
          {showJobForm ? (
            <button
              type="button"
              onClick={() => {
                setShowJobForm(false);
                setEditingJob(null);
              }}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-gray-50 text-gray-700 text-sm font-semibold rounded-xl border border-gray-300 shadow-xs hover:border-blue-300 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Job Listings</span>
            </button>
          ) : (
            <button
              type="button"
              onClick={handleAddNewJob}
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl shadow-md shadow-blue-500/20 hover:shadow-lg transition-all cursor-pointer"
            >
              <Plus className="w-4 h-4" />
              <span>Add New Jobs</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Content: Form or Job Listings (Job listings displayed first) */}
      {showJobForm ? (
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="flex items-center justify-between bg-blue-50/70 border border-blue-100 p-4 rounded-xl">
            <div className="flex items-center gap-2 text-sm text-blue-800 font-medium">
              <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
              <span>
                {editingJob
                  ? `Editing: "${editingJob.title}"`
                  : "Fill in the details below to publish a new job posting."}
              </span>
            </div>
            <button
              type="button"
              onClick={() => {
                setShowJobForm(false);
                setEditingJob(null);
              }}
              className="text-xs text-blue-600 hover:text-blue-800 font-semibold underline cursor-pointer"
            >
              Cancel
            </button>
          </div>

          <AdminJobForm
            editingJob={editingJob}
            onSubmitSuccess={handleFormSuccess}
          />
        </div>
      ) : (
        <div className="space-y-6">
          <AdminJobList
            jobs={jobs}
            onEdit={handleEditJob}
            onDelete={fetchJobs}
            onViewApplications={handleViewApplications}
          />
        </div>
      )}

      {/* Applied Resumes Modal: Opens over JobListings to fetch and display all applicants */}
      <JobApplicationsModal
        job={selectedJobForApplications}
        isOpen={Boolean(selectedJobForApplications)}
        onClose={() => setSelectedJobForApplications(null)}
      />
    </div>
  );
}
