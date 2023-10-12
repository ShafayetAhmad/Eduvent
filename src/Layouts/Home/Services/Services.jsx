// ServiceSection.js

import { useLoaderData } from "react-router-dom";
import Service from "../Service/Service";

const ServiceSection = () => {
  const servicesData = useLoaderData();

  return (
    <section className="services-section py-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 bg-blue-300 py-4 rounded-full">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <Service service={service} key={service.key}></Service>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
