import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionIntro from "../../../shared/ui/SectionIntro";
import JobList from "../components/JobList";
import { jobService } from "../services/jobService";
import type { Job } from "../types/job";

const JobsPage = () => {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await jobService.getJobs();
        setJobs(response.data);
      } catch (fetchError) {
        setError(fetchError instanceof Error ? fetchError.message : "Failed to load jobs");
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  return (
    <div className="container py-5">
      <div className="d-flex flex-wrap justify-content-between gap-3 align-items-end">
        <SectionIntro
          kicker="Jobs"
          title="Open Roles"
          subtitle="Browse listings from your Laravel backend and manage job publishing in one place."
        />
        <Link to="/jobs/create" className="btn btn-brand animate-fade-up delay-1 mb-3">
          Add New Job
        </Link>
      </div>

      <JobList jobs={jobs} loading={loading} error={error} />
    </div>
  );
};

export default JobsPage;
