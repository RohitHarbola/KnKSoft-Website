export interface Job {
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

export interface ApplicationForm {
  fullName: string;
  email: string;
  phone: string;
  experience: string;
  resume: File | null;
  coverLetter: string;
} 