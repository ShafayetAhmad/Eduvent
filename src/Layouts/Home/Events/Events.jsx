import { useEffect, useState } from "react";
import Event from "../Event/Event";

const EventSection = () => {
  const [eventsData, setEventsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/events.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setEventsData(data);
      } catch (error) {
        console.error("Error fetching events:", error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="events-section py-4 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Our Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event) => (
            <Event event={event} key={event.key}></Event>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSection;
