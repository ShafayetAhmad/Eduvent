/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Event = ({ event }) => {
  return (
    <div>
      <div
        key={event.id}
        className="bg-white rounded-lg overflow-hidden shadow-md hover:bg-gray-200"
      >
        <img
          src={event.image}
          alt={event.name}
          className="w-full h-40 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{event.name}</h3>
          <p className="text-gray-700 mb-4">{event.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">{event.price}</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
              <Link to={`/events/${event.id}`}>Learn More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
