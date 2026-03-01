import { useState, type FormEvent } from "react";
import type { JobPayload } from "../types/job";

interface Props {
  onSubmit: (payload: JobPayload) => Promise<void>;
}

const initialState: JobPayload = {
  title: "",
  company: "",
  location: "",
  type: "full-time",
  salary_min: null,
  salary_max: null,
  description: "",
  application_deadline: null,
};

const JobForm = ({ onSubmit }: Props) => {
  const [formData, setFormData] = useState<JobPayload>(initialState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const updateField = <K extends keyof JobPayload>(key: K, value: JobPayload[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await onSubmit(formData);
      setFormData(initialState);
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : "Failed to create job");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="panel-card animate-fade-up delay-1">
      <h2 className="h4 mb-3">Post a new opportunity</h2>
      <p className="text-secondary mb-4">
        Use clear role titles and concise requirements for better applicant quality.
      </p>

      {submitError && <div className="alert alert-danger">{submitError}</div>}

      <div className="row g-3">
        <div className="col-12">
          <label className="form-label fw-semibold">Job title</label>
          <input
            className="form-control"
            value={formData.title}
            onChange={(event) => updateField("title", event.target.value)}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-semibold">Company</label>
          <input
            className="form-control"
            value={formData.company}
            onChange={(event) => updateField("company", event.target.value)}
            required
          />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-semibold">Location</label>
          <input
            className="form-control"
            value={formData.location}
            onChange={(event) => updateField("location", event.target.value)}
            required
          />
        </div>

        <div className="col-md-4">
          <label className="form-label fw-semibold">Type</label>
          <select
            className="form-select"
            value={formData.type}
            onChange={(event) =>
              updateField("type", event.target.value as JobPayload["type"])
            }
          >
            <option value="full-time">Full-time</option>
            <option value="part-time">Part-time</option>
            <option value="contract">Contract</option>
            <option value="internship">Internship</option>
          </select>
        </div>

        <div className="col-md-4">
          <label className="form-label fw-semibold">Min salary</label>
          <input
            className="form-control"
            type="number"
            min={0}
            value={formData.salary_min ?? ""}
            onChange={(event) =>
              updateField("salary_min", event.target.value ? Number(event.target.value) : null)
            }
          />
        </div>

        <div className="col-md-4">
          <label className="form-label fw-semibold">Max salary</label>
          <input
            className="form-control"
            type="number"
            min={0}
            value={formData.salary_max ?? ""}
            onChange={(event) =>
              updateField("salary_max", event.target.value ? Number(event.target.value) : null)
            }
          />
        </div>

        <div className="col-md-6">
          <label className="form-label fw-semibold">Application deadline</label>
          <input
            className="form-control"
            type="date"
            value={formData.application_deadline ?? ""}
            onChange={(event) =>
              updateField("application_deadline", event.target.value || null)
            }
          />
        </div>

        <div className="col-12">
          <label className="form-label fw-semibold">Description</label>
          <textarea
            className="form-control"
            rows={5}
            value={formData.description}
            onChange={(event) => updateField("description", event.target.value)}
            required
          />
        </div>
      </div>

      <div className="mt-4 d-flex justify-content-end">
        <button className="btn btn-brand" type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Publishing..." : "Publish Job"}
        </button>
      </div>
    </form>
  );
};

export default JobForm;
