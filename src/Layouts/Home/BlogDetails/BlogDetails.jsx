/* eslint-disable react/prop-types */

import { useLoaderData, useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();
  const blogs = useLoaderData();
  const blog = blogs[id-1];
  console.log(blog);
  return (
    <div className="container mx-auto mt-8">
      <div className="flex lg:flex-row md:flex-row flex-col">
        <div className="w-1/2">
          <img src={blog.image} alt={blog.title} className="rounded-lg w-10/12 pl-8" />
        </div>
        <div className="w-1/2 pl-8">
          <div className="font-bold mb-2  text-6xl">{blog.title}</div>
          <p className="text-gray-700 text-4xl pt-8">
            {blog.author} | {blog.date}
          </p>
        </div>
      </div>
      <div>
        <div className=" pl-8 pt-8">
          <p className="text-gray-700 text-xl">{blog.content}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
