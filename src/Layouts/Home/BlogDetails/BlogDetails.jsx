/* eslint-disable react/prop-types */

import { useLoaderData, useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const blogs = useLoaderData();
  const blog = blogs[id];
  console.log(blog);
  return (
    <div className="container mx-auto mt-8">
      <div className="flex">
        <div className="w-1/2">
          <img src={blog.image} alt={blog.title} className="rounded-lg" />
        </div>
        <div className="w-1/2 pl-8">
          <h2 className="text-3xl font-bold mb-4">{blog.title}</h2>
          <p className="text-gray-700">{blog.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
