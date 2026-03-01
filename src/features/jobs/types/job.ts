export interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "internship";
  salary_min?: number | null;
  salary_max?: number | null;
  description: string;
  application_deadline?: string | null;
  created_at?: string;
  updated_at?: string;
}

export interface JobPayload {
  title: string;
  company: string;
  location: string;
  type: Job["type"];
  salary_min?: number | null;
  salary_max?: number | null;
  description: string;
  application_deadline?: string | null;
}
