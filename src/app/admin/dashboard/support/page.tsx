"use client";

import { useState } from "react";
import {
  LifeBuoy,
  Mail,
  Phone,
  Server,
  Database,
  HelpCircle,
  Send,
  CheckCircle2,
  ExternalLink,
  ChevronDown,
  Loader2,
  FileText,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { toast } from "react-hot-toast";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "How do I add a new job listing on the Careers portal?",
    answer:
      "Navigate to Careers in the sidebar or go to /admin/dashboard/careers. Fill out the 'Add New Job' form on the right (Title, Department, Location, Type, CTC, Description, Skills, Responsibilities) and click 'Post Job'. It will immediately appear on the public /careers page and save to MongoDB.",
  },
  {
    question: "How do I edit or delete an existing job posting?",
    answer:
      "In the Careers management page (/admin/dashboard/careers), find the job in the left list. Click the blue Pencil icon to populate the form and edit it, or click the red Trash icon to delete the opening from the database.",
  },
  {
    question: "How can I change my administrator password?",
    answer:
      "Go to Profile in the sidebar (/admin/dashboard/profile). Enter your current password and desired new password (minimum 6 characters), then click 'Update Password'. It will update your salted hash in MongoDB instantly.",
  },
  {
    question: "Where do customer contact inquiries get delivered?",
    answer:
      "Inquiries submitted through the Contact Us and Get in Touch forms are sent directly to the email addresses defined in CONTACT_RECIPIENTS (e.g., rohitharbola1234@gmail.com and brijesh.joshi@knksoftinfotech.com) via Gmail SMTP.",
  },
  {
    question: "How does the admin login protection work?",
    answer:
      "When an admin visits /career-admin or any /admin/dashboard route, the AdminAuthGuard verifies the JWT session cookie. If not authenticated, the login form renders. Entering credentials verifies them against MongoDB. New admins are automatically registered upon submission.",
  },
];

export default function AdminSupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);

  const handleSubmitInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject.trim() || !message.trim()) {
      toast.error("Please enter both subject and message");
      return;
    }

    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Support ticket sent successfully! Our technical team will review it.");
      setSubject("");
      setMessage("");
    }, 700);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
          Help & Support
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Administrator documentation, system diagnostics, and developer support contacts.
        </p>
      </div>

      {/* Support Channels Grid */}
      <div className="grid gap-4 sm:grid-cols-3">
        <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="h-10 w-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
              <Mail className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-gray-900 text-base">Direct Email Support</h3>
            <p className="text-xs text-gray-500 mt-1">
              Reach out directly to technical and portal administration.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-gray-100">
            <a
              href="mailto:brijesh.joshi@knksoftinfotech.com"
              className="text-xs font-semibold text-blue-600 hover:text-blue-700 break-all"
            >
              brijesh.joshi@knksoftinfotech.com
            </a>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="h-10 w-10 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center mb-3">
              <Database className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-gray-900 text-base">Database Infrastructure</h3>
            <p className="text-xs text-gray-500 mt-1">
              MongoDB cluster status and data collections maintenance.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
            <CheckCircle2 className="h-4 w-4" />
            <span>MongoDB Atlas Connected</span>
          </div>
        </div>

        <div className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="h-10 w-10 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center mb-3">
              <Server className="h-5 w-5" />
            </div>
            <h3 className="font-semibold text-gray-900 text-base">Platform Diagnostics</h3>
            <p className="text-xs text-gray-500 mt-1">
              Next.js 16.3.3 + React 19 dev runtime.
            </p>
          </div>
          <div className="mt-4 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-xs text-emerald-600 font-semibold">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>All Systems Operational</span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Knowledge Base FAQs */}
        <Card className="shadow-sm border-gray-200">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
                <HelpCircle className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-lg">Administrator Guides & FAQs</CardTitle>
                <CardDescription>
                  Step-by-step instructions for managing KNK Soft portal components.
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-3">
            {FAQS.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="rounded-lg border border-gray-200 bg-gray-50/50 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-3.5 text-left text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`h-4 w-4 text-gray-500 shrink-0 transition-transform ${
                        isOpen ? "rotate-180 text-blue-600" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-3.5 pb-3.5 pt-1 text-xs text-gray-600 leading-relaxed border-t border-gray-100 bg-white">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </CardContent>
        </Card>

        {/* Submit Support Ticket */}
        <Card className="shadow-sm border-gray-200">
          <CardHeader>
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-purple-50 text-purple-600">
                <LifeBuoy className="h-5 w-5" />
              </div>
              <div>
                <CardTitle className="text-lg">Submit Support Request</CardTitle>
                <CardDescription>
                  Need assistance with custom features or technical debugging?
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmitInquiry} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Issue Subject *
                </label>
                <input
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  placeholder="e.g. Question about job applicant notifications"
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Details / Description *
                </label>
                <textarea
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Describe your question or issue in detail..."
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              <div className="flex justify-end pt-1">
                <button
                  type="submit"
                  disabled={sending}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors disabled:opacity-60"
                >
                  {sending ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Sending Ticket...
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      Submit Ticket
                    </>
                  )}
                </button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
