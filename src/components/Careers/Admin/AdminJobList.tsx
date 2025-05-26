"use client";

import { BsPencil, BsTrash } from "react-icons/bs";
import { useState } from "react";
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

interface Props {
  jobs: Job[];
  onEdit: (job: Job) => void;
  onDelete: () => void;
}

export default function AdminJobList({ jobs, onEdit, onDelete }: Props) {
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this job?")) return;

    setDeletingId(id);
    try {
      const response = await fetch(`/api/jobs/${id}`, { method: "DELETE" });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Failed to delete job");
      }

      toast.success("Job deleted successfully");
      onDelete();
    } catch (error) {
      console.error("Error deleting job:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to delete job"
      );
    } finally {
      setDeletingId(null);
    }
  };

  // Ensure jobs is an array
  const jobsList = Array.isArray(jobs) ? jobs : [];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Job Listings</h2>
        <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded">
          {jobsList.length} Jobs
        </span>
      </div>

      <div className="space-y-4">
        {jobsList.map((job) => (
          <div
            key={job._id}
            className="bg-white border border-gray-200 p-4 rounded-lg hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start">
              <div className="space-y-2">
                <h3 className="text-lg font-semibold text-gray-900">
                  {job.title}
                </h3>
                <div className="space-y-1">
                  <p className="text-gray-600 flex items-center">
                    <span className="mr-2">🏢</span> {job.department}
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <span className="mr-2">📍</span> {job.location}
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <span className="mr-2">⏰</span> {job.type}
                  </p>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => onEdit(job)}
                  className="p-2 text-blue-600 hover:bg-blue-50 rounded-full transition-colors"
                  title="Edit job"
                >
                  <BsPencil className="w-5 h-5" />
                </button>
                <button
                  onClick={() => handleDelete(job._id)}
                  disabled={deletingId === job._id}
                  className={`p-2 text-red-600 rounded-full transition-colors ${
                    deletingId === job._id
                      ? "opacity-70 cursor-not-allowed"
                      : "hover:bg-red-50"
                  }`}
                  title="Delete job"
                >
                  {deletingId === job._id ? (
                    <svg
                      className="animate-spin h-5 w-5"
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
                  ) : (
                    <BsTrash className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        ))}

        {jobsList.length === 0 && (
          <div className="text-center py-8 text-gray-500">
            No jobs posted yet. Add your first job listing!
          </div>
        )}
      </div>
    </div>
  );
}
