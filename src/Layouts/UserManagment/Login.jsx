import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form>
      <div className="mt-20">
        <p className="text-center font-bold text-3xl mb-4">Login</p>
        <div className="hero">
          <div className="card w-full max-w-sm shadow-2xl bg-base-100">
            <form className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="text-lg label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="text-lg label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a
                    href="#"
                    className="label-text-alt text-lg link link-hover"
                  >
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control ">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <label className="label mx-8 mb-4">
              <p className="label-text-alt link link-hover text-lg">
                {`Don't have an account?`}
                <Link to={"/Register"}>
                  <butotn className="btn btn-accent ml-4">Register</butotn>
                </Link>
              </p>
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Login;
