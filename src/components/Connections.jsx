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
      const res = await axios(BASE_URL + "/user/connections", {
        withCredentials: true,
      });
      dispatch(addConnections(res.data.data));
      console.log(res.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchConnection();
  }, []);

  if (!connections) return;

  if (connections.length === 0) return <h1 className="text-xl">Connections</h1>;

  return (
    <div className="text-center my-10">
      <h1 className="text-2xl font-bold">Connections</h1>

      {connections.map((connection) => {
        const { firstName, lastName, photoUrl, age, gender, about } =
          connection;
        return (
          <div className="flex p-4 m-4 rounded-lg bg-base-300 w-1/2 mx-auto">
            <div>
              <img src={photoUrl} className="w-20 h-20 rounded-full" alt="PhotoURl" />
            </div>
            <div className="text-left mx-6">
              <h2 className="font-bold text-lg">{firstName + " " + lastName}</h2>
              {age && gender && <p>{age + ", " + gender}</p>}
              <p>{about}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Connections;
