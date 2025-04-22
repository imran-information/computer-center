import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
const Navbar = () => {
  return (
    <div className="shadow-sm">
      <div className="navbar bg-base-100  max-w-7xl w-full mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-blue-600 px-3 py-1 rounded"
                      : "text-gray-700 hover:text-blue-600"
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/courses"
                  className={({ isActive }) =>
                    isActive
                      ? "text-white bg-blue-600 px-3 py-1 rounded"
                      : "text-gray-700 hover:text-blue-600"
                  }
                >
                  Courses
                </NavLink>
              </li>
            </ul>
          </div>
          <div className="flex items-center justify-center gap-2">
            <img
              className="size-10 border rounded-full border-gray-500 p-0.5"
              src={logo}
              alt=""
            />
            <p className="text-xl font-bold">CBC Training</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-blue-600 px-3 py-1 rounded"
                    : "text-gray-700 hover:text-blue-600"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/courses"
                className={({ isActive }) =>
                  isActive
                    ? "text-white bg-blue-600 px-3 py-1 rounded"
                    : "text-gray-700 hover:text-blue-600"
                }
              >
                Courses
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="flex justify-center space-x-3 p-2">
            <Link
              to="/register"
              className="text-white font-semibold px-3 py-1 bg-purple-400 rounded-lg transition duration-300"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="text-white font-semibold px-3 py-1 bg-purple-400  rounded-lg transition duration-300"
            >
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
