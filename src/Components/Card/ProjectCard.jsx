import { Link2 } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, i }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={i * 100}
      data-aos-anchor-placement="top-bottom"
    >
      <div className="rounded-2xl h-full bg-gradient-to-br shadow-lg shadow-purple-600/10  flex flex-col justify-between hover:shadow-purple-500/20 overflow-hidden">
        {/* Image Section */}
        <div className="overflow-hidden group">
          <img
            src={project?.thumbnail}
            loading="lazy"
            alt="project"
            className="aspect-video w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>

        {/* Content Section */}
        <div className="space-y-4 p-5">
          <h1 className="text-xl font-bold text-white leading-snug line-clamp-2">
            {project?.title}
          </h1>

          {/* Tech and Link */}
          <div className="flex justify-between items-center">
            <h3 className="text-sm text-gray-300 font-medium">
              Used Technologies:
            </h3>
            <a
              href={project?.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-400 hover:text-purple-300"
            >
              <Link2 className="h-5 w-5" />
            </a>
          </div>

          {/* Technologies List */}
          <div className="flex flex-wrap gap-2">
            {project?.technologies?.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs text-purple-300 border border-purple-500 bg-purple-500/10 px-3 py-1 rounded-full font-medium"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* View Details Button */}
          <div className="pt-2">
            <Link
              to={`/projects/${project?._id}`}
              className="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-medium text-purple-200 transition duration-300 ease-out border border-purple-500 rounded-full shadow-md group hover:scale-105"
            >
              <span className="buttonAnimationColor group-hover:-top-4"></span>
              <span className="relative z-10">View Details</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
