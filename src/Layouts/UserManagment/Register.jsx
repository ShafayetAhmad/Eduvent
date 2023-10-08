import { Link } from "react-router-dom";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import { useState } from "react";

const Register = () => {
  const [userEmail, getUserEmail] = useState(null);
  const [userPassword, getUserPassword] = useState(null);

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const password = form.get("password");
      console.log(name, email, password);
      
  };

  createUserWithEmailAndPassword(auth, userEmail, userPassword)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      // ..
    });

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
                className="input input-bordered"
                required
              />
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