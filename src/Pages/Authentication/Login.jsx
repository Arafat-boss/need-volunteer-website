// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useContext } from "react";
// import { AuthContext } from "../../Provider/AuthProvider";
// import toast from "react-hot-toast";
// import axios from "axios";

// const Login = () => {
//   const navigate = useNavigate();
//   const location = useLocation()
//   const { loginUser, googleProvider } = useContext(AuthContext);

//   const handelLogin = (e) => {
//     e.preventDefault();
//     const from = e.target;
//     const email = from.email.value;
//     const password = from.password.value;
//     const user = { email, password };
//     console.log(user);

//     const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
//     if (!passwordRegex.test(password)) {
//       toast.error("Password must be at least 6 characters, include one Uppercase letter, Lowercase letter and one number.")
//       return;
//     }
//     if (password.length < 6) {
//       toast.error("Password should be 6 characters or longer");
//       return;
//     }

//     //firebase Auth
//     loginUser(email, password)
//       .then((res) => {
//         console.log(res.user.email);
//         const user = {email: res.email}
//         axios.post( `${import.meta.env.VITE_API_URL}/jwt`, user, {withCredentials: true})
//         .then(res =>{
//           navigate(location?.state ? location.state : "/");
//           console.log(res.data);
//         })
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   };
//   //google auth
//   const handelGoogle = () =>{
//     googleProvider()
//       .then((res) => {
//         navigate(location?.state ? location.state : "/");
//         // console.log(res.user);
//       })
//       .catch((err) => console.log(err.message));
//   }

//   return (
//     <div>
//       <form onSubmit={handelLogin} className="mt-10 rounded-lg border-none max-w-xl mx-auto border-2 p-24 bg-gradient-to-r from-teal-200 to-purple-300 text-white shadow-xl">
//       <h1 className="text-3xl font-bold text-center text-purple-500 mx-auto">
//         Login now!
//       </h1>
//         <div className="relative z-0 w-full mb-5 group">
//           <input
//             type="email"
//             name="email"
//             id="floating_email"
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//             placeholder=" "
//             required
//           />
//           <label
//             for="floating_email"
//             className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Email address
//           </label>
//         </div>
//         <div className="relative z-0 w-full mb-5 group">
//           <input
//             type="password"
//             name="password"
//             id="floating_password"
//             className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
//             placeholder=" "
//             required
//           />
//           <label
//             for="floating_password"
//             className="peer-focus:font-medium absolute text-sm text-black dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
//           >
//             Password
//           </label>
//         </div>

//         <div className="lg:flex mb:flex">
//           <button
//             type="submit"
//             className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800
//             mr-4 mt-2
//             "
//           >
//             Log in
//           </button>
//           <button
//             onClick={handelGoogle}
//             type="submit"
//             className="mt-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//           >
//             Google
//           </button>
//         </div>
//         <p className="text-sm mt-4 text-black">
//           You have no account no problem!{" "}
//           <Link to="/register">
//             <span className="text-blue-600 underline font-bold">
//               Register Now
//             </span>
//           </Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Login;

import { Link, useLocation, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import toast from "react-hot-toast";
import axios from "axios";
import { FaGoogle } from "react-icons/fa6";
import Img from "../../assets/Img.jpg";
import bgImg from "../../assets/authentication.png";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { loginUser, googleProvider } = useContext(AuthContext);

  const handelLogin = (e) => {
    e.preventDefault();
    const from = e.target;
    const email = from.email.value;
    const password = from.password.value;

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 characters, include one Uppercase letter, Lowercase letter and one number."
      );
      return;
    }

    loginUser(email, password)
      .then((res) => {
        const user = { email: res.user.email };
        axios
          .post(`${import.meta.env.VITE_API_URL}/jwt`, user, {
            withCredentials: true,
          })
          .then((res) => {
            navigate(location?.state ? location.state : "/");
          });
      })
      .catch((error) => {
        toast.error("Login failed. Please check your credentials.");
        console.error(error.message);
      });
  };

  const handelGoogle = () => {
    googleProvider()
      .then((res) => {
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error("Google Sign-In failed.");
        console.error(err.message);
      });
  };

  return (
    <div
      className="flex min-h-screen items-center justify-center"
      style={{
        backgroundImage: `url(${bgImg})`,
      }}
    >
      <div
        className="grid grid-cols-1 lg:grid-cols-2 bg-white shadow-lg rounded-lg overflow-hidden w-4/5"
        style={{
          backgroundImage: `url(${bgImg})`,
        }}
      >
        {/* Left Section */}
        <div className="p-8 lg:p-12">
          <h2 className="text-3xl font-bold text-gray-800">
            Get started today!
          </h2>
          <p className="mt-4 text-gray-600">
            Enjoy the benefits! Join our highly engaged network -- 13 million
            volunteers and 130,000 nonprofits -- and take advantage of the
            world's most powerful volunteer recruiting services, engagement
            tools, and best-in-class educational resources.
          </p>
          <form onSubmit={handelLogin} className="mt-8 space-y-6">
            <div className="relative">
              <input
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter email"
                required
              />
            </div>
            <div className="relative">
              <input
                type="password"
                name="password"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                placeholder="Enter password"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition"
            >
              Sign in
            </button>
          </form>

          <button
            onClick={handelGoogle}
            className="w-full mt-4 py-2 bg-orange-400 text-white font-semibold rounded-lg hover:bg-red-600 transition flex items-center justify-center space-x-2"
          >
            <span className="text-lg">
              <FaGoogle></FaGoogle>
            </span>
            <span>Sign in with Google</span>
          </button>

          <p className="mt-4 text-sm text-gray-600">
            No account?{" "}
            <Link to="/register" className="text-blue-500 underline">
              Sign up
            </Link>
          </p>
        </div>

        {/* Right Section */}
        <div className="hidden lg:block">
          <img src={Img} alt="Welcome" className="object-cover w-full h-full" />
        </div>
      </div>
    </div>
  );
};

export default Login;
