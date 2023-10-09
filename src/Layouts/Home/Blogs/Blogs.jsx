/* eslint-disable react/prop-types */

import { useEffect, useState } from "react";
import BlogPost from "../BlogPost/BlogPost";

const Blogs = () => {
  const [blogsData, setBlogsData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/blogs.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setBlogsData(data);
      } catch (error) {
        console.error("Error fetching events:", error.message);
      }
    };

    fetchData();
  }, []);

  // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-8"></div>
  return (
    <div>
      <section className="events-section py-4 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8 bg-green-300 py-4 rounded-full">
            Latest Blogs
          </h2>

          <div className="">
            {blogsData.map((blog) => (
              <BlogPost blog={blog} key={blog.id}></BlogPost>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blogs;
