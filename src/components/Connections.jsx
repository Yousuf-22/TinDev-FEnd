import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";
import { Link } from "react-router-dom";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);

  const fetchConnection = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (err) {
      console.error("Failed to fetch connections:", err);
    }
  };

  useEffect(() => {
    fetchConnection();
  }, []);

  if (!connections) return null;

  if (connections.length === 0)
    return (
      <h1 className="text-xl text-center mt-10 text-white">
        No Connections Found!
      </h1>
    );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center text-white mb-10">
        Your Connections
      </h1>

      <div className="grid gap-6">
        {connections.map((connection, index) => {
          const { _id, firstName, lastName, photoUrl, age, gender, about } =
            connection;

          return (
            <div
              key={index}
              className="flex flex-col sm:flex-row items-center gap-6 bg-base-300 shadow-md hover:shadow-xl transition duration-300 rounded-2xl p-6"
            >
              <img
                src={photoUrl || "https://via.placeholder.com/80"}
                alt="Profile"
                className="w-24 h-24 rounded-full object-cover border-2 border-white"
              />

              <div className="flex-1 w-full flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-center sm:text-left">
                <div>
                  <h2 className="text-xl font-semibold text-white">
                    {firstName} {lastName}
                  </h2>

                  {age && gender && (
                    <p className="text-sm text-gray-300 mb-1">
                      {age} years old • {gender}
                    </p>
                  )}

                  <p className="text-gray-200">
                    {about || "No description provided."}
                  </p>
                </div>

                <Link to={"/chat/" + _id}>
                  <button className="btn btn-primary sm:self-end">Chat</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Connections;
