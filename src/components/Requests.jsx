import axios from "axios";
import React, { useEffect, useState } from "react";
import { BASE_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addRequest, removeRequest } from "../utils/requestSlice";

const Requests = () => {
  const dispatch = useDispatch();
  const requests = useSelector((store) => store.requests);

  const reviewRequest = async (status, _id) => {
    try {
      const res = await axios.post(
        BASE_URL + "/request/review/" + status + "/" + _id,
        {},
        {
          withCredentials: true,
        }
      );
      dispatch(removeRequest(_id));
    } catch (err) {}
  };

  const fetchRequest = async () => {
    try {
      const res = await axios.get(BASE_URL + "/user/requests/received", {
        withCredentials: true,
      });

      dispatch(addRequest(res.data.data));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchRequest();
  }, []);

  if (!requests) return null;

  if (requests.length === 0)
    return (
      <h1 className="text-center text-white mt-10 text-xl">No Request Found</h1>
    );

  return (
    <div className="text-center my-10">
      <h1 className="font-bold text-white text-3xl mb-8">
        Connection Requests
      </h1>

      {requests.map((request) => {
        const user = request.fromUserId;
        if (!user) return null;

        const { _id, firstName, lastName, about, photoUrl } = user;

        return (
          <div
            key={_id}
            className="flex justify-between items-center m-4 p-4 rounded-lg bg-base-300 w-11/12 md:w-2/5  mx-auto shadow-md"
          >
            <div>
              <img
                alt="photo"
                src={photoUrl || "https://via.placeholder.com/80"}
                className="w-20 h-20 rounded-full object-cover border"
              />
            </div>
            <div className="text-left mx-4 text-white">
              <h2 className="font-bold text-xl">
                {firstName + " " + lastName}
              </h2>
              <p>{about || "No description provided."}</p>
            </div>
            <div>
              <button
                className="btn btn-primary mx-2 my-2"
                onClick={() => reviewRequest("accepted", request._id)}
              >
                Accept{" "}
              </button>
              <button
                className="btn btn-secondary"
                onClick={() => reviewRequest("rejected", request._id)}
              >
                Reject
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Requests;
