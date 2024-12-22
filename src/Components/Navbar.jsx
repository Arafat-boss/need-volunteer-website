import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  return (
    // <div>
    //   <div className="navbar bg-base-100">
    //     <div className="navbar-start">
    //       <div className="dropdown">
    //         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
    //           <svg
    //             xmlns="http://www.w3.org/2000/svg"
    //             className="h-5 w-5"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             stroke="currentColor"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M4 6h16M4 12h8m-8 6h16"
    //             />
    //           </svg>
    //         </div>
    //         <ul
    //           tabIndex={0}
    //           className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
    //         >
    //           <li>
    //             <a>Item 1</a>
    //           </li>
    //           <li>
    //             <a>Parent</a>
    //             <ul className="p-2">
    //               <li>
    //                 <a>Submenu 1</a>
    //               </li>
    //               <li>
    //                 <a>Submenu 2</a>
    //               </li>
    //             </ul>
    //           </li>
    //           <li>
    //             <a>Item 3</a>
    //           </li>
    //         </ul>
    //       </div>
    //       <a className="btn btn-ghost text-xl">daisyUI</a>
    //     </div>
    //     <div className="navbar-center hidden lg:flex">
    //       <ul className="gap-4 menu menu-horizontal px-1">
    //         <li>
    //           <NavLink to='/'>Home</NavLink>
    //         </li>

    //         <li>
    //           <NavLink to='/all-volunteer'>All volunteer Need posts</NavLink>
    //         </li>
    //       </ul>
    //     </div>
    //     <div className="navbar-end">
    //       <Link to='/login' className="btn">Login</Link>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="navbar bg-base-100 shadow-sm container px-4 mx-auto">
        <div className="flex-1 ">
          <Link to="/" className="flex gap-2 items-center">
            <img className="w-auto h-7" src={""} alt="" />
            <span className="font-bold">X</span>
          </Link>
        </div>
        <div className="flex-none">
          <ul className="gap-5 menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <NavLink to="/all-volunteer">All volunteer Need posts</NavLink>
            </li>
            <li className="dropdown dropdown-end z-50">
              <Link>My Profile</Link>
              <ul  tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <Link to="/add-volunteer" className="justify-between">
                  Add Volunteer need Post
                  </Link>
                </li>
                <li>
                  <Link to="/">Manage My Posts </Link>
                </li>
                <li>
                  <Link to="/all-post">All volunteer need posts page</Link>
                </li>
                <li>
                  <Link to="/bid-requests">Bid Requests</Link>
                </li>
              </ul>
            </li>

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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
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
