import { Link } from "react-router-dom";
import SectionIntro from "../shared/ui/SectionIntro";

const DashboardPage = () => {
  return (
    <div className="container py-5">
      <SectionIntro
        kicker="Talent Platform"
        title="Build and publish jobs faster"
        subtitle="A production-style React frontend with modular folders, reusable components, and Laravel API-ready services."
      />

      <div className="row g-4 mt-1">
        <div className="col-lg-8">
          <article className="panel-card animate-fade-up delay-1">
            <h3 className="h4 mb-3">Quick Actions</h3>
            <div className="d-flex flex-wrap gap-2">
              <Link className="btn btn-brand" to="/jobs">
                Browse Jobs
              </Link>
              <Link className="btn btn-outline-brand" to="/jobs/create">
                Create Job Post
              </Link>
              <Link className="btn btn-ghost" to="/login">
                Login Form
              </Link>
            </div>
          </article>
        </div>

        <div className="col-lg-4">
          <aside className="panel-card animate-fade-up delay-2">
            <h3 className="h5 mb-3">Industry Folder Structure</h3>
            <ul className="list-unstyled mb-0 small text-secondary">
              <li className="mb-2">`app/` routing and app bootstrap</li>
              <li className="mb-2">`features/` domain-based modules</li>
              <li className="mb-2">`shared/` reusable api/types/ui/styles</li>
              <li>`layouts/` top-level page shells</li>
            </ul>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
