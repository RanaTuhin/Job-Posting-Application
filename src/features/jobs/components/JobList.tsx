import type { Job } from "../types/job";
import JobCard from "./JobCard";

interface Props {
  jobs: Job[];
  loading?: boolean;
  error?: string | null;
}

const JobList = ({ jobs, loading = false, error = null }: Props) => {
  if (loading) {
    return <div className="panel-card">Loading job listings...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (jobs.length === 0) {
    return <div className="panel-card">No jobs available. Create the first post.</div>;
  }

  return (
    <div className="job-grid">
      {jobs.map((job, index) => (
        <div key={job.id} style={{ animationDelay: `${index * 80}ms` }}>
          <JobCard job={job} />
        </div>
      ))}
    </div>
  );
};

export default JobList;
