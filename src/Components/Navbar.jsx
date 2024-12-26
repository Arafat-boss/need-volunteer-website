import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import logo from '../assets/rb_48263.png'

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);



  
  return (
    <div className=" mx-auto">
      <div className="navbar bg-base-100 shadow-sm container px-4 mx-auto">
        <div className="flex-1 ">
          <Link to="/" className="flex gap-2 items-center">
            <img className="w-auto h-7" src={logo} alt="" />
            <span className="font-bold">
             VOLUNTEER
            </span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="gap-5 menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <NavLink to="/all-post">All volunteer Need posts</NavLink>
            </li>
            {/* //---------------- */}
            <label className="grid cursor-pointer place-items-center">
              <input
                type="checkbox"
                value="dark"
                className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
              />
              <svg
                className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5" />
                <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
              </svg>
              <svg
                className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            </label>

            {!user && (
              <li>
                <Link to="/login">Login</Link>
              </li>
            )}
          </ul>

          {user && (
            <div className="dropdown dropdown-end z-50">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div title={user?.displayName} className="w-10 rounded-full">
                  <img
                    referrerPolicy="no-referrer"
                    alt="User Profile Photo"
                    src={user?.photoURL}
                  />
                </div>
              </div>
            
                
               
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content gap-1 mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <Link to="/add-volunteer" className="justify-between">
                      Add Volunteer need Post
                    </Link>
                  </li>
                  <li>
                    <Link to="/manage-profile">Manage My Posts </Link>
                  </li>
                  <li className="mt-2">
                    <button
                      onClick={signOutUser}
                      className="bg-gray-200 block text-center"
                    >
                      Logout
                    </button>
                  </li>
                </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
