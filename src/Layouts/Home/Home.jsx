import Blogs from "./Blogs/Blogs";
import EventSection from "./Events/Events";
import ServiceSection from "./Services/Services";
import Slider from "./Slider/Slider";
import Testimonials from "./Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Slider></Slider>
      <ServiceSection></ServiceSection>
      <Blogs></Blogs>
      <EventSection></EventSection>
      <Testimonials></Testimonials>
    </>
  );
};

export default Home;
