import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [passwordError, setPasswordError] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const userEmail = form.get("email");
    const userPassword = form.get("password");

    // Password validation
    if (userPassword.length < 6) {
      setPasswordError("Password must be at least 6 characters long");
      return;
    }

    if (!/[A-Z]/.test(userPassword)) {
      setPasswordError("Password must contain at least one capital letter");
      return;
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(userPassword)) {
      setPasswordError("Password must contain at least one special character");
      return;
    }

    setPasswordError("");

    createUser(userEmail, userPassword)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        navigate("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div className="mt-10">
      <p className="text-center font-bold text-3xl mb-4">Register</p>
      <div className="hero">
        <div className="card w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="text-lg label-text">Full Name</span>
              </label>
              <input
                type="text"
                placeholder="Full Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
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
                className={`input input-bordered ${
                  passwordError ? "input-error" : ""
                }`}
                required
              />
              {passwordError && (
                <p className="text-xs text-error">{passwordError}</p>
              )}
            </div>
            <div className="form-control ">
              <button className="btn btn-primary mt-4">Register</button>
            </div>
          </form>
          <label className="label mx-8 mb-4">
            <p className="label-text-alt link link-hover text-lg">
              {`Already have an account?`}
              <Link to={"/login"}>
                <button className="btn btn-accent ml-4">Login</button>
              </Link>
            </p>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Register;
