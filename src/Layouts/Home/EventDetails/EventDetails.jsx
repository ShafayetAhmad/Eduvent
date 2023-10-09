/* eslint-disable react/prop-types */

import { useLoaderData, useParams } from "react-router-dom";

const EventDetails = () => {
  const { id } = useParams();
  const events = useLoaderData();
  console.log(events);
  const event = events[id-1];
  console.log(event);
  return (
    <div className="container mx-auto mt-8">
      <div className="flex">
        <div className="w-1/2">
          <img src={event.image} alt={event.name} className="rounded-lg" />
        </div>
        <div className="w-1/2 pl-8">
          <h2 className="text-3xl font-bold mb-4">{event.name}</h2>
          <p className="text-gray-700">{event.description}</p>
          <p className="text-xl font-bold mt-4">Price: {event.price}</p>
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
            Book Now
          </button>
          <p className="text-gray-700 my-6">{event.details}</p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
