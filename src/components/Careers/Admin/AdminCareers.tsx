"use client";

import { useState, useEffect } from "react";
import AdminJobList from "@/components/Careers/Admin/AdminJobList";
import AdminJobForm from "@/components/Careers/Admin/AdminJobForm";

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

export default function AdminCareers() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [editingJob, setEditingJob] = useState<Job | null>(null);

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      const response = await fetch("/api/jobs");
      const data = await response.json();
      setJobs(data);
    } catch (error) {
      console.error("Error fetching jobs:", error);
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8">
      <div className="space-y-6">
        <AdminJobList jobs={jobs} onEdit={setEditingJob} onDelete={fetchJobs} />
      </div>
      <div>
        <AdminJobForm
          editingJob={editingJob}
          onSubmitSuccess={() => {
            fetchJobs();
            setEditingJob(null);
          }}
        />
      </div>
    </div>
  );
}
