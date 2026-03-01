import type { Job } from "../types/job";

interface Props {
  job: Job;
}

const formatSalary = (min?: number | null, max?: number | null) => {
  if (!min && !max) return "Salary not disclosed";
  if (min && max) return `$${min.toLocaleString()} - $${max.toLocaleString()}`;
  if (min) return `From $${min.toLocaleString()}`;
  return `Up to $${max?.toLocaleString()}`;
};

const JobCard = ({ job }: Props) => {
  return (
    <article className="job-card animate-fade-up">
      <div className="d-flex justify-content-between align-items-start gap-3 flex-wrap">
        <div>
          <h3 className="h5 mb-1">{job.title}</h3>
          <p className="mb-1 text-secondary fw-semibold">{job.company}</p>
          <p className="mb-0 text-secondary">{job.location}</p>
        </div>
        <span className="badge rounded-pill text-bg-light border text-uppercase">
          {job.type}
        </span>
      </div>

      <div className="job-meta mt-3">
        <span>{formatSalary(job.salary_min, job.salary_max)}</span>
        {job.application_deadline && (
          <span>Apply by {new Date(job.application_deadline).toLocaleDateString()}</span>
        )}
      </div>

      <p className="mb-0 mt-3 text-secondary">{job.description}</p>
    </article>
  );
};

export default JobCard;
