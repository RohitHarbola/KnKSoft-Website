"use client";

import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import { motion } from "framer-motion";
import { BsPlus, BsTrash, BsPencil, BsX } from "react-icons/bs";

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
  editingJob: Job | null;
  onSubmitSuccess: () => void;
}

export default function AdminJobForm({ editingJob, onSubmitSuccess }: Props) {
  const [formData, setFormData] = useState<Partial<Job>>({
    title: "",
    department: "",
    location: "",
    type: "",
    description: [""],
    responsibilities: [""],
    skills: [""],
    experience: "",
    education: "",
    ctc: "",
    email: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [departments, setDepartments] = useState<string[]>([
    "Development",
    "Design",
    "Marketing",
    "Sales",
    "HR",
    "Finance",
    "Operations",
    "Customer Support",
  ]);
  const [locations, setLocations] = useState<string[]>([
    "Remote",
    "New York, NY",
    "San Francisco, CA",
    "London, UK",
    "Berlin, Germany",
    "Tokyo, Japan",
    "Sydney, Australia",
  ]);
  const [showDepartmentModal, setShowDepartmentModal] = useState(false);
  const [showLocationModal, setShowLocationModal] = useState(false);
  const [newDepartment, setNewDepartment] = useState("");
  const [newLocation, setNewLocation] = useState("");
  const [editingDepartment, setEditingDepartment] = useState<{
    index: number;
    value: string;
  } | null>(null);
  const [editingLocation, setEditingLocation] = useState<{
    index: number;
    value: string;
  } | null>(null);

  useEffect(() => {
    if (editingJob) {
      // Ensure all array fields are initialized properly
      const safeEditingJob = {
        ...editingJob,
        description: Array.isArray(editingJob.description)
          ? editingJob.description
          : [""],
        responsibilities: Array.isArray(editingJob.responsibilities)
          ? editingJob.responsibilities
          : [""],
        skills: Array.isArray(editingJob.skills) ? editingJob.skills : [""],
      };
      setFormData(safeEditingJob);
    }
  }, [editingJob]);

  // Load departments and locations from localStorage if available
  useEffect(() => {
    const savedDepartments = localStorage.getItem("jobDepartments");
    const savedLocations = localStorage.getItem("jobLocations");

    if (savedDepartments) {
      try {
        const parsedDepartments = JSON.parse(savedDepartments);
        if (Array.isArray(parsedDepartments) && parsedDepartments.length > 0) {
          setDepartments(parsedDepartments);
        }
      } catch (error) {
        console.error("Error parsing saved departments:", error);
      }
    }

    if (savedLocations) {
      try {
        const parsedLocations = JSON.parse(savedLocations);
        if (Array.isArray(parsedLocations) && parsedLocations.length > 0) {
          setLocations(parsedLocations);
        }
      } catch (error) {
        console.error("Error parsing saved locations:", error);
      }
    }
  }, []);

  const handleArrayInput = (field: keyof Job, index: number, value: string) => {
    setFormData((prev) => {
      const currentField = prev[field as keyof Partial<Job>];
      // Ensure currentField is a string[] before calling map
      if (Array.isArray(currentField)) {
        return {
          ...prev,
          [field]: currentField.map((item, i) => (i === index ? value : item)),
        };
      }
      return prev; // Return unchanged if the field is not an array
    });
  };

  const addArrayItem = (field: keyof Job) => {
    setFormData((prev) => {
      const currentField = prev[field as keyof Partial<Job>];
      // Ensure currentField is a string[] before adding an item
      if (Array.isArray(currentField)) {
        return {
          ...prev,
          [field]: [...currentField, ""],
        };
      }
      return prev;
    });
  };

  const removeArrayItem = (field: keyof Job, index: number) => {
    setFormData((prev) => {
      const currentField = prev[field as keyof Partial<Job>];
      // Ensure currentField is a string[] before filtering
      if (Array.isArray(currentField)) {
        return {
          ...prev,
          [field]: currentField.filter((_, i) => i !== index),
        };
      }
      return prev;
    });
  };

  const addDepartment = () => {
    if (!newDepartment.trim()) return;

    const updatedDepartments = [...departments, newDepartment.trim()];
    setDepartments(updatedDepartments);
    setNewDepartment("");

    // Save to localStorage
    localStorage.setItem("jobDepartments", JSON.stringify(updatedDepartments));
    toast.success("Department added successfully");
  };

  const updateDepartment = () => {
    if (!editingDepartment || !editingDepartment.value.trim()) return;

    const updatedDepartments = [...departments];
    updatedDepartments[editingDepartment.index] =
      editingDepartment.value.trim();
    setDepartments(updatedDepartments);
    setEditingDepartment(null);

    // Save to localStorage
    localStorage.setItem("jobDepartments", JSON.stringify(updatedDepartments));
    toast.success("Department updated successfully");
  };

  const removeDepartment = (index: number) => {
    const updatedDepartments = departments.filter((_, i) => i !== index);
    setDepartments(updatedDepartments);

    // Save to localStorage
    localStorage.setItem("jobDepartments", JSON.stringify(updatedDepartments));
    toast.success("Department removed successfully");
  };

  const addLocation = () => {
    if (!newLocation.trim()) return;

    const updatedLocations = [...locations, newLocation.trim()];
    setLocations(updatedLocations);
    setNewLocation("");

    // Save to localStorage
    localStorage.setItem("jobLocations", JSON.stringify(updatedLocations));
    toast.success("Location added successfully");
  };

  const updateLocation = () => {
    if (!editingLocation || !editingLocation.value.trim()) return;

    const updatedLocations = [...locations];
    updatedLocations[editingLocation.index] = editingLocation.value.trim();
    setLocations(updatedLocations);
    setEditingLocation(null);

    // Save to localStorage
    localStorage.setItem("jobLocations", JSON.stringify(updatedLocations));
    toast.success("Location updated successfully");
  };

  const removeLocation = (index: number) => {
    const updatedLocations = locations.filter((_, i) => i !== index);
    setLocations(updatedLocations);

    // Save to localStorage
    localStorage.setItem("jobLocations", JSON.stringify(updatedLocations));
    toast.success("Location removed successfully");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Validate required fields
      if (!formData.title || !formData.department || !formData.type) {
        throw new Error("Please fill in all required fields");
      }

      const url = editingJob ? `/api/jobs/${editingJob._id}` : "/api/jobs";

      const method = editingJob ? "PUT" : "POST";

      // Clean up empty array items
      const cleanedFormData = {
        ...formData,
        description: formData.description?.filter(
          (item) => item.trim() !== ""
        ) || [""],
        responsibilities: formData.responsibilities?.filter(
          (item) => item.trim() !== ""
        ) || [""],
        skills: formData.skills?.filter((item) => item.trim() !== "") || [""],
      };

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(cleanedFormData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to save job");
      }

      toast.success(
        editingJob ? "Job updated successfully" : "Job created successfully"
      );

      // Reset form only if it's a new job
      if (!editingJob) {
        setFormData({
          title: "",
          department: "",
          location: "",
          type: "",
          description: [""],
          responsibilities: [""],
          skills: [""],
          experience: "",
          education: "",
          ctc: "",
          email: "",
        });
      }

      onSubmitSuccess();
    } catch (error) {
      console.error("Error saving job:", error);
      toast.error(
        error instanceof Error ? error.message : "Failed to save job"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-lg shadow-lg p-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {editingJob ? "Edit Job Listing" : "Add New Job"}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Basic Information */}
          <div className="space-y-4 md:col-span-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Job Title *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                placeholder="e.g. Senior Software Engineer"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Department *
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowDepartmentModal(true)}
                    className="text-xs text-blue-600 hover:text-blue-800"
                  >
                    Manage Departments
                  </button>
                </div>
                <select
                  value={formData.department}
                  onChange={(e) =>
                    setFormData({ ...formData, department: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Department</option>
                  {departments.map((dept, index) => (
                    <option key={`dept-${index}`} value={dept}>
                      {dept}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Job Type *
                </label>
                <select
                  value={formData.type}
                  onChange={(e) =>
                    setFormData({ ...formData, type: e.target.value })
                  }
                  className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  required
                >
                  <option value="">Select Type</option>
                  <option value="Full-time">Full-time</option>
                  <option value="Part-time">Part-time</option>
                  <option value="Contract">Contract</option>
                  <option value="Internship">Internship</option>
                  <option value="Freelance">Freelance</option>
                  <option value="Temporary">Temporary</option>
                </select>
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-sm font-medium text-gray-700">
                  Location *
                </label>
                <button
                  type="button"
                  onClick={() => setShowLocationModal(true)}
                  className="text-xs text-blue-600 hover:text-blue-800"
                >
                  Manage Locations
                </button>
              </div>
              <select
                value={formData.location}
                onChange={(e) =>
                  setFormData({ ...formData, location: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
              >
                <option value="">Select Location</option>
                {locations.map((loc, index) => (
                  <option key={`loc-${index}`} value={loc}>
                    {loc}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Array Fields */}
          {["description", "responsibilities", "skills"].map((field) => (
            <div key={field} className="space-y-2 md:col-span-2">
              <label className="block text-sm font-medium text-gray-700 mb-1 capitalize">
                {field} *
              </label>
              {((formData[field as keyof Job] as string[]) || []).map(
                (item, index) => (
                  <div key={index} className="flex gap-2">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) =>
                        handleArrayInput(
                          field as keyof Job,
                          index,
                          e.target.value
                        )
                      }
                      className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                      placeholder={`Add ${field.slice(0, -1)}`}
                    />
                    <button
                      type="button"
                      onClick={() => removeArrayItem(field as keyof Job, index)}
                      className="px-3 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                    >
                      <BsTrash />
                    </button>
                  </div>
                )
              )}
              <button
                type="button"
                onClick={() => addArrayItem(field as keyof Job)}
                className="flex items-center text-blue-600 hover:text-blue-800 text-sm font-medium"
              >
                <BsPlus className="mr-1" size={18} /> Add {field.slice(0, -1)}
              </button>
            </div>
          ))}

          {/* Additional Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:col-span-2">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Experience Required *
              </label>
              <input
                type="text"
                value={formData.experience}
                onChange={(e) =>
                  setFormData({ ...formData, experience: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                placeholder="e.g. 3+ years"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Education *
              </label>
              <input
                type="text"
                value={formData.education}
                onChange={(e) =>
                  setFormData({ ...formData, education: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                placeholder="e.g. Bachelor's in Computer Science"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                CTC/Salary Range *
              </label>
              <input
                type="text"
                value={formData.ctc}
                onChange={(e) =>
                  setFormData({ ...formData, ctc: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                placeholder="e.g. $80,000 - $100,000"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Contact Email *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                placeholder="e.g. careers@company.com"
              />
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <button
            type="button"
            onClick={() =>
              setFormData({
                title: "",
                department: "",
                location: "",
                type: "",
                description: [""],
                responsibilities: [""],
                skills: [""],
                experience: "",
                education: "",
                ctc: "",
                email: "",
              })
            }
            className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Clear Form
          </button>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`px-6 py-2 bg-blue-600 text-white rounded-lg transition-colors ${
              isSubmitting
                ? "opacity-70 cursor-not-allowed"
                : "hover:bg-blue-700"
            }`}
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
                {editingJob ? "Updating..." : "Creating..."}
              </span>
            ) : editingJob ? (
              "Update Job"
            ) : (
              "Post Job"
            )}
          </button>
        </div>
      </form>

      {/* Department Management Modal */}
      {showDepartmentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl max-w-md w-full p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Manage Departments</h3>
              <button
                onClick={() => setShowDepartmentModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <BsX size={24} />
              </button>
            </div>

            <div className="mb-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newDepartment}
                  onChange={(e) => setNewDepartment(e.target.value)}
                  placeholder="Add new department"
                  className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={addDepartment}
                  disabled={!newDepartment.trim()}
                  className={`px-4 py-2 bg-blue-600 text-white rounded-lg ${
                    !newDepartment.trim()
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-blue-700"
                  }`}
                >
                  Add
                </button>
              </div>
            </div>

            <div className="max-h-60 overflow-y-auto">
              {departments.length > 0 ? (
                <ul className="space-y-2">
                  {departments.map((dept, index) => (
                    <li
                      key={`dept-list-${index}`}
                      className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                    >
                      {editingDepartment &&
                      editingDepartment.index === index ? (
                        <div className="flex-1 flex gap-2">
                          <input
                            type="text"
                            value={editingDepartment.value}
                            onChange={(e) =>
                              setEditingDepartment({
                                ...editingDepartment,
                                value: e.target.value,
                              })
                            }
                            className="flex-1 px-3 py-1 border rounded-lg"
                            autoFocus
                          />
                          <button
                            type="button"
                            onClick={updateDepartment}
                            className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700"
                          >
                            Save
                          </button>
                          <button
                            type="button"
                            onClick={() => setEditingDepartment(null)}
                            className="px-3 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <>
                          <span>{dept}</span>
                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={() =>
                                setEditingDepartment({ index, value: dept })
                              }
                              className="text-blue-600 hover:text-blue-800"
                            >
                              <BsPencil />
                            </button>
                            <button
                              type="button"
                              onClick={() => removeDepartment(index)}
                              className="text-red-600 hover:text-red-800"
                            >
                              <BsTrash />
                            </button>
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center text-gray-500 py-4">
                  No departments added yet
                </p>
              )}
            </div>

            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setShowDepartmentModal(false)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Location Management Modal */}
      {showLocationModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-xl max-w-md w-full p-6"
          >
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Manage Locations</h3>
              <button
                onClick={() => setShowLocationModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <BsX size={24} />
              </button>
            </div>

            <div className="mb-4">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newLocation}
                  onChange={(e) => setNewLocation(e.target.value)}
                  placeholder="Add new location"
                  className="flex-1 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="button"
                  onClick={addLocation}
                  disabled={!newLocation.trim()}
                  className={`px-4 py-2 bg-blue-600 text-white rounded-lg ${
                    !newLocation.trim()
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-blue-700"
                  }`}
                >
                  Add
                </button>
              </div>
            </div>

            <div className="max-h-60 overflow-y-auto">
              {locations.length > 0 ? (
                <ul className="space-y-2">
                  {locations.map((loc, index) => (
                    <li
                      key={`loc-list-${index}`}
                      className="flex items-center justify-between p-2 bg-gray-50 rounded-lg"
                    >
                      {editingLocation && editingLocation.index === index ? (
                        <div className="flex-1 flex gap-2">
                          <input
                            type="text"
                            value={editingLocation.value}
                            onChange={(e) =>
                              setEditingLocation({
                                ...editingLocation,
                                value: e.target.value,
                              })
                            }
                            className="flex-1 px-3 py-1 border rounded-lg"
                            autoFocus
                          />
                          <button
                            type="button"
                            onClick={updateLocation}
                            className="px-3 py-1 bg-green-600 text-white rounded-lg hover:bg-green-700"
                          >
                            Save
                          </button>
                          <button
                            type="button"
                            onClick={() => setEditingLocation(null)}
                            className="px-3 py-1 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
                          >
                            Cancel
                          </button>
                        </div>
                      ) : (
                        <>
                          <span>{loc}</span>
                          <div className="flex gap-2">
                            <button
                              type="button"
                              onClick={() =>
                                setEditingLocation({ index, value: loc })
                              }
                              className="text-blue-600 hover:text-blue-800"
                            >
                              <BsPencil />
                            </button>
                            <button
                              type="button"
                              onClick={() => removeLocation(index)}
                              className="text-red-600 hover:text-red-800"
                            >
                              <BsTrash />
                            </button>
                          </div>
                        </>
                      )}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-center text-gray-500 py-4">
                  No locations added yet
                </p>
              )}
            </div>

            <div className="mt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setShowLocationModal(false)}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}
