import React from "react";

const EventCard = ({ event }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:scale-105 transition-transform ">
    <div className="relative">
      <img src={event.image} alt={event.title} className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform-gpu hover:scale-105" />
      <div className="absolute inset-0 bg-black bg-opacity-50 hover:bg-opacity-0 transition-opacity duration-300 ease-in-out"></div>
    </div>
    <div className="px-4 py-3">
      <p className="text-gray-600 text-sm sm:text-base xl:text-sm">{event.date} | {event.time}</p>
      <h3 className="text-lg font-medium text-gray-800 mt-2 mb-4 sm:text-xl xl:text-lg">{event.title}</h3>
      <p className="text-gray-600 mb-4 sm:text-base xl:text-sm">{event.description}</p>
      <a href={event.link} className="inline-block px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md transition-colors duration-300 ease-in-out text-sm sm:text-base xl:text-sm">View Details</a>
    </div>
  </div>
  

  );
};

export default EventCard;
