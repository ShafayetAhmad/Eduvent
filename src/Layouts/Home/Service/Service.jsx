/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Service = ({ service}) => {
  return (
    <div>
      <div
        key={service.id}
        className="bg-white rounded-lg overflow-hidden shadow-md"
      >
        <img
          src={service.image}
          alt={service.name}
          className="w-full h-40 object-cover"
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{service.name}</h3>
          <p className="text-gray-700 mb-4">{service.description}</p>
          <div className="flex justify-between items-center">
            <span className="text-lg font-bold">{service.price}</span>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full">
              <Link to={`/services/${service.id}`}>Learn More</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
