import { useState, type FormEvent } from "react";
import SectionIntro from "../../../shared/ui/SectionIntro";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setMessage(
      `Demo login captured for ${email}. Connect this form to Laravel /api/login and store token in localStorage.`,
    );
    setPassword("");
  };

  return (
    <div className="container py-5">
      <SectionIntro
        kicker="Authentication"
        title="Welcome Back"
        subtitle="Clean login page with subtle animation and structure ready for real API auth integration."
      />

      <div className="row justify-content-center mt-1">
        <div className="col-md-8 col-lg-5">
          <form className="panel-card animate-fade-up delay-1" onSubmit={handleSubmit}>
            {message && <div className="alert alert-info">{message}</div>}

            <div className="mb-3">
              <label className="form-label fw-semibold">Email</label>
              <input
                className="form-control form-control-lg"
                placeholder="you@example.com"
                type="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">Password</label>
              <input
                className="form-control form-control-lg"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                required
              />
            </div>

            <button className="btn btn-brand w-100" type="submit">
              Sign In
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
