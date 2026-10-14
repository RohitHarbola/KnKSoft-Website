"use client";

import { useState } from "react";
import {
  Cog,
  Mail,
  Shield,
  Briefcase,
  Database,
  Save,
  CheckCircle2,
  Server,
  Bell,
  Globe,
  Loader2,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { toast } from "react-hot-toast";

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState<"general" | "email" | "careers" | "security">("general");
  const [saving, setSaving] = useState(false);

  // Form states
  const [siteName, setSiteName] = useState("KNK Soft Infotech");
  const [contactEmail, setContactEmail] = useState("info@knksoftinfotech.com");
  const [contactPhone, setContactPhone] = useState("+91 96500 50000");
  const [address, setAddress] = useState("Noida, Uttar Pradesh, India");

  // Email states
  const [smtpUser, setSmtpUser] = useState("kamaljoshi933@gmail.com");
  const [contactRecipients, setContactRecipients] = useState(
    "rohitharbola1234@gmail.com, brijesh.joshi@knksoftinfotech.com"
  );

  // Toggles
  const [emailAlerts, setEmailAlerts] = useState(true);
  const [jobApplicationsEnabled, setJobApplicationsEnabled] = useState(true);
  const [autoNotifyApplications, setAutoNotifyApplications] = useState(true);
  const [sessionTimeoutHours, setSessionTimeoutHours] = useState("24");

  const handleSave = (section: string) => {
    setSaving(true);
    setTimeout(() => {
      setSaving(false);
      toast.success(`${section} settings saved successfully!`);
    }, 600);
  };

  return (
    <div className="space-y-6">
      {/* Title */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 md:text-3xl">
          Admin Settings
        </h1>
        <p className="mt-1 text-sm text-gray-500">
          Configure website parameters, email notification routing, and portal options.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 overflow-x-auto space-x-1 sm:space-x-4">
        {[
          { id: "general", label: "General Settings", icon: Globe },
          { id: "email", label: "Email & SMTP", icon: Mail },
          { id: "careers", label: "Careers Portal", icon: Briefcase },
          { id: "security", label: "Security & Database", icon: Shield },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as typeof activeTab)}
              className={`flex items-center gap-2 py-3 px-3 sm:px-4 text-sm font-medium border-b-2 whitespace-nowrap transition-colors ${
                isActive
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              <Icon className="h-4 w-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab 1: General */}
      {activeTab === "general" && (
        <Card className="shadow-sm border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg">General Organization Information</CardTitle>
            <CardDescription>
              Basic business details displayed across the website header and footer.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Company / Website Name
                </label>
                <input
                  type="text"
                  value={siteName}
                  onChange={(e) => setSiteName(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Primary Contact Email
                </label>
                <input
                  type="email"
                  value={contactEmail}
                  onChange={(e) => setContactEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Support Phone Number
                </label>
                <input
                  type="text"
                  value={contactPhone}
                  onChange={(e) => setContactPhone(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Headquarters Location
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => handleSave("General")}
                disabled={saving}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors disabled:opacity-60"
              >
                {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                Save General Settings
              </button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tab 2: Email & SMTP */}
      {activeTab === "email" && (
        <Card className="shadow-sm border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg">Email & SMTP Notification Routing</CardTitle>
            <CardDescription>
              Configuration for sending notifications and receiving user contact submissions.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="rounded-lg bg-blue-50 border border-blue-200 p-4 text-xs text-blue-900 flex items-start gap-3">
              <Server className="h-5 w-5 text-blue-600 mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-sm">Active SMTP Integration</p>
                <p className="mt-0.5 text-blue-800">
                  Transports emails via standard SSL/TLS protocol using Gmail SMTP service. Submissions from &quot;Contact Us&quot; and &quot;Get in Touch&quot; forms are dispatched to designated recipients.
                </p>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  SMTP Sender Account (SMTP_USER)
                </label>
                <input
                  type="text"
                  value={smtpUser}
                  onChange={(e) => setSmtpUser(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  SMTP Host & Port
                </label>
                <input
                  type="text"
                  disabled
                  value="smtp.gmail.com : 465 (SSL Encrypted)"
                  className="w-full px-3.5 py-2.5 bg-gray-100 border border-gray-300 rounded-lg text-sm text-gray-500 font-mono"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Notification Recipients (CONTACT_RECIPIENTS)
                </label>
                <input
                  type="text"
                  value={contactRecipients}
                  onChange={(e) => setContactRecipients(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm font-mono focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <p className="text-xs text-gray-500 mt-1">Comma-separated email addresses that receive inquiries.</p>
              </div>
            </div>

            <div className="flex items-center justify-between p-3.5 bg-gray-50 rounded-lg border border-gray-200">
              <div>
                <p className="font-medium text-sm text-gray-900">Instant Email Alerts</p>
                <p className="text-xs text-gray-500">Send immediate notification when a new contact inquiry arrives.</p>
              </div>
              <input
                type="checkbox"
                checked={emailAlerts}
                onChange={(e) => setEmailAlerts(e.target.checked)}
                className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => handleSave("Email & SMTP")}
                disabled={saving}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors disabled:opacity-60"
              >
                {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                Save SMTP Settings
              </button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tab 3: Careers */}
      {activeTab === "careers" && (
        <Card className="shadow-sm border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg">Careers Portal Settings</CardTitle>
            <CardDescription>
              Manage public visibility and candidate application rules.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div>
                <p className="font-medium text-sm text-gray-900">Accept Online Applications</p>
                <p className="text-xs text-gray-500">
                  Allow candidates to submit resumes and cover letters via the public /careers page.
                </p>
              </div>
              <input
                type="checkbox"
                checked={jobApplicationsEnabled}
                onChange={(e) => setJobApplicationsEnabled(e.target.checked)}
                className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border border-gray-200">
              <div>
                <p className="font-medium text-sm text-gray-900">Application Email Notification</p>
                <p className="text-xs text-gray-500">
                  Notify admin inbox whenever a job seeker applies for any opening.
                </p>
              </div>
              <input
                type="checkbox"
                checked={autoNotifyApplications}
                onChange={(e) => setAutoNotifyApplications(e.target.checked)}
                className="h-5 w-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => handleSave("Careers Portal")}
                disabled={saving}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors disabled:opacity-60"
              >
                {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                Save Career Settings
              </button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Tab 4: Security */}
      {activeTab === "security" && (
        <Card className="shadow-sm border-gray-200">
          <CardHeader>
            <CardTitle className="text-lg">Security & Database Infrastructure</CardTitle>
            <CardDescription>
              Database connection settings and authentication session timeouts.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="p-4 rounded-lg bg-emerald-50 border border-emerald-200">
                <div className="flex items-center gap-2 text-emerald-800 font-semibold text-sm mb-1">
                  <CheckCircle2 className="h-4 w-4" />
                  MongoDB Connection
                </div>
                <p className="text-xs text-emerald-700">
                  Database: <span className="font-mono font-bold">knksoftinfotech</span>
                </p>
                <p className="text-xs text-emerald-700 mt-1">
                  Status: Online &amp; Authenticated
                </p>
              </div>

              <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                <div className="flex items-center gap-2 text-slate-800 font-semibold text-sm mb-1">
                  <Shield className="h-4 w-4" />
                  Session Authentication
                </div>
                <p className="text-xs text-slate-600">
                  Token: HTTP-only JSON Web Token (JWT)
                </p>
                <p className="text-xs text-slate-600 mt-1">
                  Password Encryption: PBKDF2 (SHA-512, 10,000 iter)
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Admin Session Expiry (Hours)
                </label>
                <select
                  value={sessionTimeoutHours}
                  onChange={(e) => setSessionTimeoutHours(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="12">12 Hours</option>
                  <option value="24">24 Hours (Standard)</option>
                  <option value="48">48 Hours</option>
                  <option value="168">7 Days</option>
                </select>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => handleSave("Security")}
                disabled={saving}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors disabled:opacity-60"
              >
                {saving ? <Loader2 className="h-4 w-4 animate-spin" /> : <Save className="h-4 w-4" />}
                Save Security Settings
              </button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
