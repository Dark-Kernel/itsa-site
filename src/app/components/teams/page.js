"use client";
import React, { useState, useEffect } from "react";

const MemberCard = ({ name, post, imageUrl }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 w-full max-w-xs lg:max-w-sm">
    <div className="p-4 lg:p-6">
      <img
        src={imageUrl || "/api/placeholder/150/150"}
        alt={name}
        className="w-32 h-32 lg:w-40 lg:h-40 mx-auto rounded-full object-cover border-4 border-blue-500"
      />
      <h3 className="mt-4 lg:mt-6 text-xl lg:text-2xl font-semibold text-white text-center">
        {name}
      </h3>
      <p className="text-blue-400 text-center lg:text-lg">{post}</p>
    </div>
    <div className="bg-blue-500 p-2 lg:p-3">
      <div className="flex justify-center space-x-2 lg:space-x-4">
        {["github", "linkedin", "twitter"].map((social) => (
          <span
            key={social}
            className="text-white hover:text-gray-200 cursor-pointer lg:text-xl"
          >
            <i className={`fab fa-${social}`}></i>
          </span>
        ))}
      </div>
    </div>
  </div>
);

const TeamSection = ({ title, leader, members }) => {
  return (
    <div className="mb-12 lg:mb-16">
      <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6 lg:mb-8 text-center">
        {title}
      </h2>
      {leader && (
        <div className="mb-6 lg:mb-8 flex justify-center">
          <MemberCard {...leader} />
        </div>
      )}
      <div className="flex flex-wrap justify-center gap-6 lg:gap-8">
        {members.map((member, index) => (
          <div key={index} className="flex justify-center">
            <MemberCard {...member} />
          </div>
        ))}
      </div>
    </div>
  );
};

const TeamGrid = ({ teams }) => {
  return (
    <div className="min-h-screen bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl lg:text-5xl font-extrabold text-white text-center mb-12 lg:mb-16">ITSA Team 2024-25</h1>
        <h2 className="text-4xl lg:text-5xl font-extrabold text-white text-center mb-12 lg:mb-16">Meet our Team</h2>
        {teams.map((team, index) => (
          <TeamSection key={index} {...team} />
        ))}
      </div>
    </div>
  );
};

const App = () => {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/team-data.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch team data");
        }
        return response.json();
      })
      .then((data) => {
        setTeams(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="text-white text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center">Error: {error}</div>;
  }

  return <TeamGrid teams={teams} />;
};

export default App;