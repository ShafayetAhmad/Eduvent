import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Login = () => {
  const { logIn, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [loginError, setLoginError] = useState(null);

  const handleGoogleSignIn = () => {
    setLoginError(null);
    try {
      googleSignIn();
      console.log("Login successful");
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      setLoginError(
        `Invalid Email/Password. Please Enter Correctly. ${error.message}`
      );
    }
  };

  const handleLogIn = async (e) => {
    e.preventDefault();
    setLoginError(null);

    const form = new FormData(e.currentTarget);
    const userEmail = form.get("email");
    const userPassword = form.get("password");

    try {
      await logIn(userEmail, userPassword);
      // Successful login
      console.log("Login successful");
      navigate(location?.state ? location.state : "/");
    } catch (error) {
      setLoginError(
        `Invalid Email/Password. Please Enter Correctly. ${error.message}`
      );
    }
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
            {loginError && (
              <div className="form-control mb-4">
                <p className="text-lg text-error">{loginError}</p>
              </div>
            )}
            <div className="form-control">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <button className="btn btn-info mx-4 mb-4" onClick={handleGoogleSignIn}>
            Google Sign In
          </button>
          <label className="label mx-8 mb-4">
            <p className="label-text-alt link link-hover text-lg">
              {`Don't have an account?`}
              <Link to={"/register"}>
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
