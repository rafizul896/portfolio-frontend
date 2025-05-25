import { useEffect, useState } from "react";
import axios from "axios";

import { toast } from "react-toastify";
import Loading from "../../Components/Shared/Loading";
import ProjectCard from "../../Components/Card/ProjectCard";
import BlogCard from "../../Components/Card/BlogCard";
import Title from "../../Components/Shared/Title";

const BlogsPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}/blog`)
      .then((res) => {
        setBlogs(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error(err?.message || "Error fetching data:");
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mt-5">
      <Title title={"My Blogs"} />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-12 my-12">
        {blogs?.map((blog, i) => (
          <BlogCard blog={blog} i={i} />
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
