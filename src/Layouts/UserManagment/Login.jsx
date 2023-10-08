import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { logIn } = useContext(AuthContext);

  const handleLogIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const userEmail = form.get("email");
    const userPassword = form.get("password");
    console.log(userEmail, userPassword);
    logIn(userEmail, userPassword);
  };

  return (
    <div className="mt-20">
      <p className="text-center font-bold text-3xl mb-4">Login</p>
      <div className="hero">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleLogIn}>
            <div className="form-control">
              <label className="label">
                <span className="text-lg label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
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
                name="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt text-lg link link-hover">
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
                <button className="btn btn-accent ml-4">Register</button>
              </Link>
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Login;
