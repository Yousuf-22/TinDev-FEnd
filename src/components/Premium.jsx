import React from "react";

const Premium = () => {
  return (
    <div className="m-10">
      <h1 className="text-4xl font-bold text-center mb-8">
        Choose Your Membership
      </h1>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-6">
        {/* Silver Membership */}
        <div className="card bg-base-200 shadow-xl w-full lg:w-1/3 p-6 text-center">
          <h2 className="font-bold text-3xl mb-4 text-gray-400">
            Silver Membership
          </h2>
          <ul className="text-lg text-gray-400 mb-6 space-y-2">
            <li>💬 Chat with other people</li>
            <li>🔗 100 connection requests per day</li>
            <li>✔️ Verified blue tick</li>
            <li>⏳ Duration: 3 Months</li>
          </ul>
          <button className="btn btn-primary w-full">Buy Silver</button>
        </div>

        {/* Gold Membership */}
        <div className="card bg-base-200 shadow-xl w-full lg:w-1/3 p-6 text-center">
          <h2 className="font-bold text-3xl mb-4 text-yellow-600">
            Gold Membership
          </h2>
          <ul className="text-lg text-gray-400 mb-6 space-y-2">
            <li>💬 Chat with other people</li>
            <li>🔗 Infinite connection requests per day</li>
            <li>✔️ Verified blue tick</li>
            <li>⏳ Duration: 6 Months</li>
          </ul>
          <button className="btn btn-warning w-full">Buy Gold</button>
        </div>
      </div>
    </div>
  );
};

export default Premium;
