"use client";

import { useState, useEffect } from "react";
import {
  X,
  Download,
  Mail,
  Phone,
  Briefcase,
  Calendar,
  FileText,
  Search,
  Loader2,
  Plus,
  RefreshCw,
  Users,
  CheckCircle2,
  Building,
  MapPin,
  Clock,
  Filter,
} from "lucide-react";
import { toast } from "react-hot-toast";

export interface JobApplication {
  _id: string;
  jobId: string;
  jobTitle: string;
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  coverLetter?: string;
  resumeFileName?: string;
  resumeUrl: string;
  createdAt: string;
}

interface Job {
  _id: string;
  title: string;
  department: string;
  location: string;
  type: string;
}

interface JobApplicationsModalProps {
  job: Job | null;
  isOpen?: boolean;
  onClose: () => void;
}

export default function JobApplicationsModal({
  job,
  isOpen = true,
  onClose,
}: JobApplicationsModalProps) {
  const [allApplications, setAllApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [creatingSample, setCreatingSample] = useState(false);
  const [activeTab, setActiveTab] = useState<"this-job" | "all">("this-job");

  useEffect(() => {
    if (isOpen) {
      fetchAllApplications();
    }
  }, [isOpen, job]);

  const fetchAllApplications = async () => {
    setLoading(true);
    try {
      // Fetch all applications from the database
      const response = await fetch("/api/jobs/applications?all=true");
      if (response.ok) {
        const data = await response.json();
        const list = Array.isArray(data) ? data : [];
        setAllApplications(list);

        // If no applicants for this specific job, automatically show all candidates
        if (job) {
          const currentJobMatches = list.filter(
            (app) =>
              app.jobId === job._id ||
              String(app.jobId).trim() === String(job._id).trim() ||
              (app.jobTitle &&
                job.title &&
                app.jobTitle.trim().toLowerCase() === job.title.trim().toLowerCase())
          );
          if (currentJobMatches.length === 0 && list.length > 0) {
            setActiveTab("all");
          }
        }
      } else {
        toast.error("Failed to load applicants");
        setAllApplications([]);
      }
    } catch (error) {
      console.error("Error fetching applications:", error);
      toast.error("Error loading candidate applications");
      setAllApplications([]);
    } finally {
      setLoading(false);
    }
  };

  const handleCreateSampleApplicant = async () => {
    if (!job) return;
    setCreatingSample(true);
    try {
      const sampleNames = [
        "Aarav Sharma",
        "Priya Verma",
        "Rohan Mehta",
        "Neha Gupta",
        "Vikram Patel",
        "Ananya Iyer",
      ];
      const randomName = sampleNames[Math.floor(Math.random() * sampleNames.length)];
      const cleanName = randomName.toLowerCase().replace(/\s+/g, ".");

      const sampleData = {
        jobId: job._id,
        jobTitle: job.title,
        fullName: randomName,
        email: `${cleanName}@example.com`,
        phone: "+91 98765 43210",
        experience: "3+ years relevant software experience",
        coverLetter: `Hello KNK Soft Hiring Team,\n\nI am applying for the ${job.title} role in the ${job.department} department. I have strong hands-on experience and would love to contribute to your team.`,
        resumeFileName: `${randomName.replace(/\s+/g, "_")}_Resume.txt`,
        resumeMimeType: "text/plain",
        resumeBase64: Buffer.from(
          `CANDIDATE CURRICULUM VITAE\n-------------------------\nCandidate Name: ${randomName}\nRole Applied: ${job.title}\nContact Email: ${cleanName}@example.com\nPhone: +91 98765 43210\nLocation: ${job.location}\n\nProfessional Summary:\nDedicated and skilled professional with strong expertise in full-lifecycle software delivery. Experienced in modern frameworks, cloud deployments, and agile workflows.\n\nEducation:\nBachelor of Technology in Computer Science & Engineering\n\nKey Highlights:\n- Built robust production services with high scalability\n- Collaborated across cross-functional engineering teams\n- Automated test coverage and CI/CD pipelines\n`
        ).toString("base64"),
      };

      const response = await fetch("/api/jobs/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(sampleData),
      });

      if (response.ok) {
        toast.success(`Sample resume for ${randomName} added!`);
        fetchAllApplications();
      } else {
        toast.error("Failed to create sample application");
      }
    } catch (error) {
      console.error("Error creating sample:", error);
      toast.error("Failed to add sample candidate");
    } finally {
      setCreatingSample(false);
    }
  };

  if (!isOpen || !job) return null;

  // Filter applications by active tab
  const tabFiltered =
    activeTab === "this-job"
      ? allApplications.filter(
          (app) =>
            app.jobId === job._id ||
            String(app.jobId).trim() === String(job._id).trim() ||
            (app.jobTitle &&
              job.title &&
              app.jobTitle.trim().toLowerCase() === job.title.trim().toLowerCase())
        )
      : allApplications;

  // Further filter by search term
  const filtered = tabFiltered.filter((app) => {
    const q = searchTerm.toLowerCase();
    return (
      app.fullName.toLowerCase().includes(q) ||
      app.email.toLowerCase().includes(q) ||
      app.phone.toLowerCase().includes(q) ||
      (app.jobTitle && app.jobTitle.toLowerCase().includes(q))
    );
  });

  const formatDate = (dateStr?: string) => {
    if (!dateStr) return "Recent";
    try {
      return new Date(dateStr).toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      });
    } catch {
      return dateStr;
    }
  };

  const currentJobCount = allApplications.filter(
    (app) =>
      app.jobId === job._id ||
      String(app.jobId).trim() === String(job._id).trim() ||
      (app.jobTitle &&
        job.title &&
        app.jobTitle.trim().toLowerCase() === job.title.trim().toLowerCase())
  ).length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-xs animate-fadeIn">
      <div className="relative w-full max-w-4xl max-h-[90vh] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
        {/* Header Banner */}
        <div className="flex items-start justify-between p-4 sm:p-6 bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white">
          <div className="space-y-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30 text-xs font-semibold flex items-center gap-1">
                <Users className="w-3.5 h-3.5" />
                Applied Resumes &amp; Candidates
              </span>
              <span className="text-xs text-slate-300 font-medium">
                {job.department} &bull; {job.location} &bull; {job.type}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-2">
              <span>{job.title}</span>
            </h2>
            <p className="text-xs sm:text-sm text-slate-300">
              Review applicant details, manage candidate applications, and download attached resumes.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
            title="Close modal"
          >
            <X className="w-5 h-5" />
            <span className="sr-only">Close modal</span>
          </button>
        </div>

        {/* Toolbar & Filter Tabs */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 p-4 bg-gray-50 border-b border-gray-200">
          <div className="flex items-center gap-1.5 p-1 bg-white border border-gray-200 rounded-xl shadow-2xs">
            <button
              type="button"
              onClick={() => setActiveTab("this-job")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "this-job"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50/50"
              }`}
            >
              This Job ({currentJobCount})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("all")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                activeTab === "all"
                  ? "bg-blue-600 text-white shadow-xs"
                  : "text-gray-600 hover:text-blue-600 hover:bg-blue-50/50"
              }`}
            >
              All Candidates ({allApplications.length})
            </button>
          </div>

          <div className="flex items-center gap-2 flex-1 sm:max-w-md">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search by name, email, role, phone..."
                className="w-full pl-9 pr-4 py-1.5 bg-white border border-gray-300 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button
              type="button"
              onClick={fetchAllApplications}
              disabled={loading}
              className="p-2 text-gray-600 hover:text-blue-600 bg-white border border-gray-300 rounded-xl hover:bg-blue-50 transition-colors shadow-2xs"
              title="Refresh candidate list"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin text-blue-600" : ""}`} />
            </button>
            <button
              type="button"
              onClick={handleCreateSampleApplicant}
              disabled={creatingSample}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white rounded-xl shadow-xs transition-colors disabled:opacity-50 shrink-0"
              title="Add a sample applicant"
            >
              {creatingSample ? (
                <Loader2 className="w-3.5 h-3.5 animate-spin" />
              ) : (
                <Plus className="w-3.5 h-3.5" />
              )}
              <span className="hidden sm:inline">Add Test Applicant</span>
            </button>
          </div>
        </div>

        {/* Modal List Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-4">
          {loading ? (
            <div className="py-12 flex flex-col items-center justify-center gap-3 text-gray-500">
              <Loader2 className="w-8 h-8 animate-spin text-blue-600" />
              <p className="text-sm font-medium">Fetching candidate applications from MongoDB...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-12 text-center text-gray-500 space-y-3">
              <div className="w-14 h-14 mx-auto rounded-full bg-blue-50 flex items-center justify-center text-blue-500">
                <FileText className="w-7 h-7" />
              </div>
              <p className="font-semibold text-gray-800 text-base">
                {searchTerm
                  ? "No applicants match your search."
                  : activeTab === "this-job"
                  ? `No candidates have applied for "${job.title}" yet.`
                  : "No candidate applications found in database."}
              </p>
              <p className="text-xs text-gray-500 max-w-md mx-auto">
                {activeTab === "this-job" && allApplications.length > 0 ? (
                  <span>
                    There are {allApplications.length} candidate(s) who applied for other roles.{" "}
                    <button
                      type="button"
                      onClick={() => setActiveTab("all")}
                      className="text-blue-600 hover:underline font-semibold"
                    >
                      Click here to view all candidates
                    </button>
                    .
                  </span>
                ) : (
                  "Applications submitted through the public /careers page appear here automatically. You can also click 'Add Test Applicant' to simulate a candidate submission."
                )}
              </p>
            </div>
          ) : (
            filtered.map((app) => (
              <div
                key={app._id}
                className="bg-white border border-gray-200 hover:border-blue-300 rounded-xl p-4 sm:p-5 shadow-2xs hover:shadow-md transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                  {/* Candidate Information */}
                  <div className="flex items-start gap-3.5 flex-1 min-w-0">
                    <div className="w-11 h-11 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center text-sm shadow-sm shrink-0">
                      {app.fullName.charAt(0).toUpperCase()}
                    </div>
                    <div className="space-y-1 flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2">
                        <h4 className="font-bold text-gray-900 text-base break-words">
                          {app.fullName}
                        </h4>
                        <span className="text-[10px] font-semibold bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-blue-600" />
                          Applied
                        </span>
                        <span className="text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200 px-2 py-0.5 rounded-full truncate max-w-[200px]">
                          Role: {app.jobTitle || job.title}
                        </span>
                      </div>

                      <div className="flex flex-wrap items-center gap-y-1 gap-x-3 text-xs text-gray-600">
                        <a
                          href={`mailto:${app.email}`}
                          className="flex items-center gap-1 hover:text-blue-600 transition-colors font-medium"
                        >
                          <Mail className="w-3.5 h-3.5 text-gray-400" />
                          <span>{app.email}</span>
                        </a>
                        {app.phone && (
                          <a
                            href={`tel:${app.phone}`}
                            className="flex items-center gap-1 hover:text-blue-600 transition-colors"
                          >
                            <Phone className="w-3.5 h-3.5 text-gray-400" />
                            <span>{app.phone}</span>
                          </a>
                        )}
                        <span className="flex items-center gap-1 text-gray-500">
                          <Calendar className="w-3.5 h-3.5 text-gray-400" />
                          <span>Applied on {formatDate(app.createdAt)}</span>
                        </span>
                      </div>

                      {app.experience && (
                        <p className="text-xs text-gray-700 font-medium pt-1">
                          <span className="text-gray-400">Experience:</span> {app.experience}
                        </p>
                      )}

                      {app.coverLetter && (
                        <div className="mt-2 p-2.5 rounded-lg bg-gray-50 border border-gray-100 text-xs text-gray-600 italic">
                          &quot;{app.coverLetter}&quot;
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions: Download Resume in Blue */}
                  <div className="sm:self-center shrink-0 pt-2 sm:pt-0">
                    <a
                      href={app.resumeUrl}
                      download={app.resumeFileName}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 active:bg-blue-800 rounded-xl shadow-xs hover:shadow-md transition-all cursor-pointer"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download Resume</span>
                    </a>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Modal Footer */}
        <div className="flex items-center justify-between p-4 bg-gray-50 border-t border-gray-200 text-xs text-gray-500">
          <span>
            Showing <strong className="text-gray-800">{filtered.length}</strong> of{" "}
            <strong className="text-gray-800">
              {activeTab === "this-job" ? currentJobCount : allApplications.length}
            </strong>{" "}
            applicants ({activeTab === "this-job" ? `for ${job.title}` : "All Jobs"})
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 bg-white border border-gray-300 rounded-xl text-gray-700 font-medium hover:bg-gray-100 transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export { JobApplicationsModal as JobApplicationsScreen, JobApplicationsModal as JobApplicationsView };
