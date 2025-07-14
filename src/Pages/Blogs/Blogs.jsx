import { useEffect, useState } from "react";
import Title from "../../Components/Shared/Title";
import { Link } from "react-router-dom";
import axios from "axios";
import BlogCard from "../../Components/Card/BlogCard";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // API call using axios
    axios
      .get(`${import.meta.env.VITE_API_URL}/blog`)
      .then((res) => {
        setBlogs(res.data.data);
      })
      .catch((err) => {
        console.error(err?.message || "Error fetching data:");
      });
  }, []);

  return (
    <div>
      <Title
        title={"Blogs"}
        des={
          "Dive into my latest blog posts where I share insights, tutorials, and experiences on web development, problem-solving, and modern technologies."
        }
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-12 my-12">
        {blogs?.map((blog, i) => (
          <BlogCard blog={blog} key={blog._id} i={i} />
        ))}
      </div>

      <div className="flex justify-center gap-2 lg:gap-4">
        <Link
          to="/blogs"
          smooth={true}
          duration={500}
          className="buttonClass group"
        >
          See All Blogs
          <span className="buttonAnimationColor"></span>
        </Link>
      </div>
    </div>
  );
};

export default Blogs;
