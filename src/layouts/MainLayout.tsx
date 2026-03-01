import { Link, NavLink, Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="app-shell">
      <div className="bg-orb bg-orb-one" aria-hidden="true" />
      <div className="bg-orb bg-orb-two" aria-hidden="true" />

      <header className="site-header sticky-top">
        <div className="container">
          <nav className="navbar navbar-expand-lg py-3">
            <Link className="navbar-brand brand-mark" to="/dashboard">
              JobCraft
            </Link>
            <div className="navbar-nav ms-auto align-items-lg-center gap-lg-2">
              <NavLink to="/dashboard" className="nav-link nav-pill">
                Dashboard
              </NavLink>
              <NavLink to="/jobs" className="nav-link nav-pill">
                Jobs
              </NavLink>
              <NavLink to="/login" className="btn btn-brand btn-sm ms-lg-2">
                Login
              </NavLink>
            </div>
          </nav>
        </div>
      </header>

      <main className="app-main">
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
