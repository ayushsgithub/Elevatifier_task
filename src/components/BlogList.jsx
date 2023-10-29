import PropTypes from "prop-types";
import { ArrowUpRightIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

const BlogList = ({ posts }) => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  return (
    <div>
      <div className="mb-2 md:w-full p-2 px-10 flex flex-col md:flex-row justify-end md:space-x-3 space-y-2 md:space-y-0 mx-auto">
        <input
          className="border border-red-400 outline-none px-2"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          value={search}
          placeholder="Search..."
          type="text"
        />
        <select
          className="px-2 border border-red-400 outline-none"
          name="Category"
          id="category"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        >
          <option value="">--Choose an option--</option>
          {posts.map((post) => (
            <option key={post.id} value={post?.attributes.category}>
              {post?.attributes.category}
            </option>
          ))}
        </select>
      </div>
      <hr className="border-[#F7AB0A] mb-10" />

      <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
        {/* Search and Filter is happening over here */}
        {posts
          .filter((post) => {
            if (
              (post?.attributes.headline
                .toLowerCase()
                .includes(search.toLowerCase()) ||
                search === "") && // Include this condition to check if search is empty
              (category === "" || post?.attributes.category === category) // Filter by selected category
            ) {
              return post;
            } else {
              return false;
            }
          })
          .map((post) => (
            <div key={post.id} className="flex flex-col cursor-pointer group">
              <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200">
                {post.attributes?.newsIcon && (
                  <img
                    className="object-cover w-56 h-56 origin-center mx-auto lg:object-center"
                    src={post?.attributes?.newsIcon}
                    alt={post?.attributes?.category}
                  />
                )}

                <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                  <div>
                    <p className="font-bold">
                      {post?.attributes?.headline}
                      <span>: {post?.attributes?.newsSource}</span>
                    </p>

                    <p className="font-bold">
                      {new Date(post?.attributes?.createdAt).toLocaleDateString(
                        "en-US",
                        {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        }
                      )}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 flex-1">
                <p className="underline text-lg font-bold">
                  {post?.attributes?.hashtags}
                </p>
                <p className="text-gray-500 line-clamp-2">
                  {post?.attributes?.category}
                </p>
              </div>

              <a
                href={post?.attributes?.newsIcon}
                className="mt-5 font-bold flex items-center group-hover:underline"
              >
                Read Post
                <ArrowUpRightIcon className="ml-2 h-4 w-4" />
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

BlogList.propTypes = {
  posts: PropTypes.array.isRequired,
};

export default BlogList;
