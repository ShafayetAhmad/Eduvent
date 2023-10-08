/* eslint-disable react/prop-types */

const ServiceDetail = ({ service }) => {
  return (
    <div className="container mx-auto mt-8">
      <div className="flex">
        <div className="w-1/2">
          <img src={service.image} alt={service.name} className="rounded-lg" />
        </div>
        <div className="w-1/2 pl-8">
          <h2 className="text-3xl font-bold mb-4">{service.name}</h2>
          <p className="text-gray-700">{service.description}</p>
          <p className="text-xl font-bold mt-4">Price: ${service.price}</p>
          {/* Add any other details here */}
          <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetail;
