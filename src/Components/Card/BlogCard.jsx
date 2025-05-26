import { Link } from "react-router-dom";

const BlogCard = ({ blog, i }) => {
  const extractText = (htmlString) => {
    if (typeof window !== "undefined") {
      const parser = new DOMParser();
      const doc = parser.parseFromString(htmlString, "text/html");
      return doc.body.textContent || "";
    }
    return "";
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={i * 100}
      data-aos-anchor-placement="top-bottom"
      className="rounded-2xl h-full shadow-xl shadow-purple-400/10 transition-all duration-300 hover:shadow-xl overflow-hidden"
    >
      <div className="overflow-hidden group">
        <img
          src={blog?.thumbnail}
          loading="lazy"
          alt="project image"
          className="aspect-video w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
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
        <h2 className="text-xl font-semibold text-white leading-snug">
          {blog?.title}
        </h2>

        {/* Author and Date */}
        <div className="text-sm text-gray-200 flex gap-2">
          <span>{blog?.author}</span>
          <span>·</span>
          <span>
            {new Date(blog?.createdAt).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>

        {/* Description Preview */}

        <p className="text-gray-200 text-sm">
          {extractText(blog?.content).length > 100
            ? extractText(blog?.content).slice(0, 100) + "..."
            : extractText(blog?.content)}
        </p>

        {/* Read More Button */}
        <div className="pt-3">
          <Link
            to={`/blogs/${blog?._id}`}
            className="buttonClass group rounded-full w-[120px]"
          >
            Read More
            <span className="buttonAnimationColor group-hover:-top-4"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
