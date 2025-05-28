import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../utils/constants";

const Login = () => {
  const [emailId, setEmailId] = useState("yousuf@gmail.com");
  const [password, setPassword] = useState("Yousuf@123");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [isLoginForm, setIsLoginForm] = useState(true);
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res.data));
      return navigate("/");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  const handleSignUp = async () => {
    try {
      const res = await axios.post(
        BASE_URL + "/signup",
        { firstName, lastName, emailId, password },
        {
          withCredentials: true,
        }
      );
      dispatch(addUser(res.data.data));
      return navigate("/profile");
    } catch (err) {
      setError(err?.response?.data || "Something went wrong");
    }
  };

  return (
    <div className="flex justify-center my-14">
      <div className="shadow-2xl">
        <fieldset className="fieldset bg-base-300 border-base-300 rounded-box w-sm h-80 border p-4">
          <legend className="fieldset-legend text-3xl text-center">
            {isLoginForm ? "Login" : "SignUp"}
          </legend>
          {!isLoginForm && (
            <>
              {" "}
              <label className="label text-lg mx-5">First Name</label>
              <div className="flex justify-center">
                <input
                  type="text"
                  value={firstName}
                  className="input"
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </div>
              <label className="label text-lg mx-5">Last Name</label>
              <div className="flex justify-center">
                <input
                  type="text"
                  value={lastName}
                  className="input"
                  onChange={(e) => setLastName(e.target.value)}
                />
              </div>
            </>
          )}

          <label className="label text-lg mx-5">Email</label>
          <div className="flex justify-center">
            <input
              type="email"
              value={emailId}
              className="input"
              onChange={(e) => setEmailId(e.target.value)}
            />
          </div>

          <label className="label text-lg mx-5">Password</label>
          <div className="flex justify-center">
            <input
              type="password"
              value={password}
              className="input"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p className="text-red-500 font-bold mx-3">{error}</p>
          <button
            className="btn btn-neutral mt-4 py-7 text-lg rounded-2xl"
            onClick={isLoginForm ? handleLogin : handleSignUp}
          >
            {isLoginForm ? "Login" : "Sign Up"}
          </button>
          <p
            className="cursor-pointer m-auto text-sm py-2"
            onClick={() => setIsLoginForm((value) => !value)}
          >
            {isLoginForm
              ? "New User ? Sign Up Here"
              : "Existing User ? Login Here"}
          </p>
        </fieldset>
      </div>
    </div>
  );
};

export default Login;
