import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SectionIntro from "../../../shared/ui/SectionIntro";
import JobForm from "../components/JobForm";
import { jobService } from "../services/jobService";
import type { JobPayload } from "../types/job";

const CreateJobPage = () => {
  const navigate = useNavigate();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  const handleCreateJob = async (payload: JobPayload) => {
    await jobService.createJob(payload);
    setSuccessMessage("Job created successfully.");

    setTimeout(() => {
      navigate("/jobs");
    }, 900);
  };

  return (
    <div className="container py-5">
      <div className="d-flex flex-wrap justify-content-between gap-3 align-items-end">
        <SectionIntro
          kicker="Create"
          title="Publish a Job"
          subtitle="Structured, validated form with API-ready payload for Laravel POST /api/jobs."
        />
        <Link to="/jobs" className="btn btn-outline-brand animate-fade-up delay-1 mb-3">
          Back to Jobs
        </Link>
      </div>

      {successMessage && <div className="alert alert-success">{successMessage}</div>}
      <JobForm onSubmit={handleCreateJob} />
    </div>
  );
};

export default CreateJobPage;
