const Login = () => {
  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h3 className="mb-3">Login</h3>

        <input className="form-control mb-3" placeholder="Email" />
        <input
          className="form-control mb-3"
          id="password"
          type="password"
          placeholder="Password"
        />

        <button className="btn btn-primary w-100">Login</button>
      </div>
    </div>
  );
};

export default Login;
