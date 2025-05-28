import React, { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";

const EditProfile = ({ user }) => {
  const [formData, setFormData] = useState({
    firstName: user.firstName || "",
    lastName: user.lastName || "",
    age: user.age || "",
    gender: user.gender || "",
    about: user.about || "",
    photoUrl: user.photoUrl || "",
  });

  const [error, setError] = useState("");
  const [showToast, setShowToast] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const saveProfile = async () => {
    setError("");
    try {
      const res = await axios.patch("/api/profile/edit", formData, {
        withCredentials: true,
        headers: { "Content-Type": "application/json" },
      });
      dispatch(addUser(res.data.data));
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    } catch (err) {
      setError(err.response?.data || err.message);
    }
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row justify-center items-start gap-10 my-10 mx-6">
        <div className="w-full max-w-md bg-base-200 rounded-2xl shadow-xl p-8">
          <h2 className="text-3xl font-bold text-center mb-6">Edit Profile</h2>

          {error && (
            <div className="text-red-500 text-sm text-center mb-4">{error}</div>
          )}

          <form className="space-y-5">
            {/* First Name */}
            <div>
              <label className="block text-base font-medium mb-1">
                First Name
              </label>
              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block text-base font-medium mb-1">
                Last Name
              </label>
              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="block text-base font-medium mb-1">
                Photo URL
              </label>
              <input
                type="text"
                name="photoUrl"
                value={formData.photoUrl}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>

            {/* Age */}
            <div>
              <label className="block text-base font-medium mb-1">Age</label>
              <input
                type="number"
                name="age"
                value={formData.age}
                onChange={handleChange}
                className="input input-bordered w-full"
              />
            </div>

            {/* Gender (Dropdown) */}
            <div>
              <label className="block text-base font-medium mb-1">Gender</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="select select-bordered w-full"
              >
                <option value="" disabled>
                  Select gender
                </option>
                <option value="male">male</option>
                <option value="female">female</option>
              </select>
            </div>

            {/* About (Textarea) */}
            <div>
              <label className="block text-base font-medium mb-1">About</label>
              <textarea
                name="about"
                value={formData.about}
                onChange={handleChange}
                className="textarea textarea-bordered w-full"
                rows={4}
              ></textarea>
            </div>

            <button
              type="button"
              onClick={saveProfile}
              className="btn btn-neutral w-full text-lg mt-4"
            >
              Save Profile
            </button>
          </form>
        </div>

        <div className="w-full max-w-sm">
          <UserCard user={formData} />
        </div>
      </div>

      {showToast && (
        <div className="toast toast-top toast-center">
          <div className="alert alert-success">
            <span>Profile saved successfully.</span>
          </div>
        </div>
      )}
    </>
  );
};

export default EditProfile;
