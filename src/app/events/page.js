"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const EventCard = ({ image, title, date }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl">
    <img src={image} alt={title} className="w-full h-48 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <div className="flex justify-between items-center">
        <p className="text-gray-600">{date}</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
          Read More
        </button>
      </div>
    </div>
  </div>
);

const EventsPage = () => {
  const [selectedMonth, setSelectedMonth] = useState("all");

  const months = [
    "All",
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const events = [
    {
      id: 1,
      title: "Event 1",
      date: "03 March 2024",
      image: "/images/abc.jpg",
    },
    {
      id: 2,
      title: "Event 2",
      date: "15 April 2024",
      image: "/images/abc.jpg",
    },
    {
      id: 3,
      title: "Event 3",
      date: "22 May 2024",
      image: "/images/abc.jpg",
    },
  ];

  const filteredEvents =
    selectedMonth === "all"
      ? events
      : events.filter((event) => {
          const eventMonth = new Date(event.date).toLocaleString("default", {
            month: "long",
          });
          return eventMonth === selectedMonth;
        });

  return (
    <div className="min-h-screen bg-transparent p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Events Page</h1>
          <div className="flex space-x-4">
            <button
              className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
              onClick={() => setSelectedMonth("all")}
            >
              All
            </button>
            <div className="relative">
              <select
                className="appearance-none bg-gray-200 rounded px-4 py-2 pr-8 hover:bg-gray-300 transition"
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(e.target.value)}
              >
                {months.map((month) => (
                  <option key={month} value={month}>
                    {month}
                  </option>
                ))}
              </select>
              <ChevronDown
                className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none"
                size={20}
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} {...event} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
