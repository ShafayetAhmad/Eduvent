import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { toast } from "react-toastify";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut();
  };

  const navLinks = (
    <>
      <li className="text-xl">
        <NavLink to="/">Home</NavLink>
      </li>
      <li className="text-xl">
        <NavLink to="events">Events</NavLink>
      </li>
      <li className="text-xl">
        <NavLink to="/services">Services</NavLink>
      </li>
      <li className="text-xl">
        <NavLink to="/blogs">Blogs</NavLink>
      </li>
      <li className="text-xl">
        <NavLink to="/about-us">About Us</NavLink>
      </li>
      <li className="text-xl">
        <NavLink to="/contact-us">Contact Us</NavLink>
      </li>
    </>
  );

  const userLinks = (
    <>
      {user ? (
        <div className="navbar-end">
          <p className="mr-4">
            Hey, {user.displayName ? user.displayName : "Member"}
          </p>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  src={
                    user.photoURL
                      ? user.photoURL
                      : "https://i.ibb.co/vYJwWBL/user.png "
                  }
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/profile" className="text-xl justify-between">
                  Profile
                </NavLink>
              </li>
              <li>
                <NavLink to="/settings" className="text-xl justify-between">
                  Settings
                </NavLink>
              </li>
              <li>
                <button onClick={handleSignOut}>
                  <NavLink to="/" className="text-xl justify-between">
                    Logout
                  </NavLink>
                </button>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="navbar-end">
          <p className="mr-4">
            Hey, Alien.
            <br /> Please Login ➡️
          </p>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://i.ibb.co/vYJwWBL/user.png " />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/login" className="text-xl justify-between">
                  LogIn
                </NavLink>
              </li>
              <li>
                <NavLink to="/register" className="text-xl justify-between">
                  Register
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 mb-8">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 "
          >
            {navLinks}
          </ul>
        </div>
        <p className="btn btn-ghost normal-case lg:text-5xl text-xl">
          <Link to={"/"}> Eduvent</Link>
        </p>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
      {userLinks}
    </div>
  );
};

export default Navbar;
