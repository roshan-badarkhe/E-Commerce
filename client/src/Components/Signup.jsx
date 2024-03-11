import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { adduser } from "../Redux/actions";
import { useState } from "react";
// import axios from "axios"

const Signup = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(adduser(formData));
    setFormData({
      fname: "",
      lname: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      {JSON.stringify(formData)}
      <div className="bg-gray-200 min-h-screen flex flex-col">
        <div className="container max-w-md mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-gray-100  px-6 py-8 rounded-lg shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Sign up</h1>
            <form onSubmit={handleSubmit}>
              <div className="flex gap-1">
                <input
                  value={formData.fname}
                  onChange={handleChange}
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="fname"
                  placeholder="First Name"
                />

                <input
                  value={formData.lname}
                  onChange={handleChange}
                  type="text"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="lname"
                  placeholder="Last Name"
                />
              </div>

              <input
                value={formData.email}
                onChange={handleChange}
                type="email"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="email"
                placeholder="Email"
              />

              <input
                value={formData.password}
                onChange={handleChange}
                type="password"
                className="block border border-gray-200 w-full p-3 rounded mb-4"
                name="password"
                placeholder="Password"
              />
              <input
                type="password"
                className="block border border-grey-light w-full p-3 rounded mb-4"
                name="confirm_password"
                placeholder="Confirm Password"
              />

              <button
                type="submit"
                className="w-full text-center py-3 rounded bg-green-400 text-white hover:bg-green-900 focus:outline-none my-1"
              >
                Create Account
              </button>
            </form>
            <div className="text-center text-sm text-gray-900 mt-4">
              By signing up, you agree to the
              <a
                className="no-underline border-b border-gray-900 text-gray-900"
                href="#"
              >
                Terms of Service
              </a>
              {"  "}
              and{" "}
              <a
                className="no-underline border-b border-gray-900 text-gray-900"
                href="#"
              >
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="text-grey-900 mt-6">
            Already have an account?
            <Link
              to="/login"
              className="no-underline border-b border-blue text-blue-600"
            >
              Log in
            </Link>
            .
          </div>
        </div>
      </div>

      {/* {user.map((el) => {
        return <>{JSON.stringify(el)}</>;
      })} */}
    </>
  );
};

export default Signup;
