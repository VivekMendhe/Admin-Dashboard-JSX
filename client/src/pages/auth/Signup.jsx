import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Signup = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData);

    const response = await fetch("http://localhost:3033/api/signup", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      await response.json();

      toast.success("Signup Successfully!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "dark",
      });

      navigate("/signin");
    } else {
      toast.error("🦄 Wow so easy!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        theme: "dark",
      });
    }
  };

  useEffect(() => {
    setFormData({
      email: "",
      password: "",
    });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center my-10 justify-center border border-slate-400 shadow-lg rounded px-10 pt-6 pb-8 w-[500px]">
        <h1 className="text-3xl font-bold text-blue-500 mb-4">
          Create an Account!
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4 w-[400px]">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              name="email"
              onChange={handleChange}
              className="focus:outline-none rounded w-full py-2 px-3 leading-tight outline-none"
              id="email"
              type="text"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-300 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              name="password"
              onChange={handleChange}
              className=" focus:outline-none rounded w-full py-2 px-3 leading-tight "
              id="password"
              type="password"
              placeholder="********"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Sign Up
            </button>
            <Link
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              to="/signin"
            >
              Already have an account?
            </Link>
          </div>
        </form>
        {/* <p className="text-gray-300 text-xs mt-4">
          Don't have an account?{" "}
          <a className="text-blue-500 hover:text-blue-800" href="#">
            Sign in here.
          </a>
        </p> */}
      </div>
    </div>
  );
};

export default Signup;
