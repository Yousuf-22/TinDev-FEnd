import axios from "axios";
import React, { useEffect } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addConnections } from "../utils/connectionSlice";

const Connections = () => {
  const dispatch = useDispatch();
  const connections = useSelector((store) => store.connections);

  const fetchConnection = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
    } catch (err) {}
  };

  useEffect(() => {
    fetchConnection();
  }, []);

  if (!connections) return null;

  if (connections.length === 0)
    return (
      <h1 className="text-xl text-center mt-10">Connections Not Found !</h1>
    );

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Connections</h1>

      <div className="grid gap-6">
        {connections.map((connection, index) => {
          const { firstName, lastName, photoUrl, age, gender, about } =
            connection;
          return (
            <div
              key={index}
              className="flex items-center gap-6 bg-base-300 shadow-lg rounded-2xl p-6 hover:shadow-xl transition duration-300"
            >
              <img
                src={photoUrl || "https://via.placeholder.com/80"}
                alt="Profile"
                className="w-20 h-20 rounded-full object-cover border border-gray-300"
              />

              <div className="flex-1">
                <h2 className="text-xl font-semibold text-white">
                  {firstName} {lastName}
                </h2>
                {age && gender && (
                  <p className="text-sm text-white mb-1">
                    {age}, {gender}
                  </p>
                )}
                <p className="text-white">
                  {about || "No description provided."}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Connections;
