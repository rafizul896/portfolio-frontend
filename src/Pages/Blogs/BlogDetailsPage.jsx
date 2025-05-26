import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../Components/Shared/Loading";
import axios from "axios";
import { IoCaretBackOutline } from "react-icons/io5";
import {
  FacebookShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  LinkedinIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";

const BlogDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}/blog/${id}`)
      .then((res) => {
        setBlog(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err?.message || "Error fetching data:");
        setIsLoading(false);
      });
  }, [id]);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div name="home" className="my-6">
      <button
        onClick={() => navigate(-1)}
        className="buttonClass cursor-pointer group"
      >
        <IoCaretBackOutline /> Back
        <span className="buttonAnimationColor"></span>
      </button>

      <div className="mt-6">
        <img
          src={blog.thumbnail}
          alt={blog.title}
          className="w-full h-80 object-cover rounded-xl mb-8 shadow-md"
        />
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {blog?.tags?.map((tag, index) => (
          <span
            key={index}
            className="border text-purple-400 text-xs font-medium px-3 py-1 rounded-full"
          >
            # {tag}
          </span>
        ))}
      </div>

      {/* Title */}
      <h1 className="text-3xl font-bold text-white mb-3">{blog.title}</h1>

      {/* Author and Date */}
      <div className="text-sm text-gray-100 mb-6">
        <span>By {blog.author}</span> ·{" "}
        <span>Published on {formatDate(blog.createdAt)}</span>
      </div>

      {/* Content */}
      <div className="text-lg text-gray-300 leading-relaxed mb-6">
        {blog.content}
      </div>

      {/* Share Section */}
      <div className="mt-10">
        <h2 className="text-xl font-semibold text-white mb-3">
          Share this blog:
        </h2>
        <div className="flex gap-4 items-center">
          <FacebookShareButton url={window.location.href} quote={blog.title}>
            <FacebookIcon size={40} round />
          </FacebookShareButton>

          <LinkedinShareButton url={window.location.href} title={blog.title}>
            <LinkedinIcon size={40} round />
          </LinkedinShareButton>

          <WhatsappShareButton url={window.location.href} title={blog.title}>
            <WhatsappIcon size={40} round />
          </WhatsappShareButton>

          <EmailShareButton
            url={window.location.href}
            subject={blog.title}
            body={`Check out this blog: ${blog.title}`}
          >
            <EmailIcon size={40} round />
          </EmailShareButton>
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsPage;
