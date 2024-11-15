import React from "react";

const BlogCard = ({ img, headlines, description }) => {
  return (
    <div className="w-full lg:w-72 overflow-hidden rounded-lg bg-white shadow-md hover:shadow-xl transition-all duration-300">
      <div className="overflow-hidden">
        <img
          className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
          src={img || "/api/placeholder/400/300"}
          alt={headlines || "Blog post"}
        />
      </div>
      <div className="p-4 space-y-3">
        <h2 className="text-lg font-semibold line-clamp-2 text-gray-800">
          {headlines}
        </h2>
        <p className="text-sm text-gray-600 line-clamp-3">
          {description}
        </p>
        <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 text-sm font-medium">
          Read More
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
