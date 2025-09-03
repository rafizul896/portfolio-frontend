import { Radio } from "lucide-react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project, i }) => {
  return (
    <div
      data-aos="fade-up"
      data-aos-delay={i * 100}
      data-aos-anchor-placement="top-bottom"
      className="max-h-[550px]"
    >
      <div className="relative rounded-2xl h-full bg-gradient-to-br shadow-lg shadow-purple-600/10 flex flex-col hover:shadow-purple-500/20 overflow-hidden border border-purple-500/20 backdrop-blur-sm transition-all duration-300 hover:border-purple-400/40 group">
        {/* Image Section with Auto-Scroll Effect */}
        <div className="relative overflow-hidden h-52">
          <div className="relative w-full h-full overflow-hidden">
            <img
              src={project?.thumbnail}
              loading="lazy"
              alt="project"
              className="w-full h-auto object-cover object-top min-h-full transition-transform duration-[3000ms] ease-linear group-hover:-translate-y-1/2"
              style={{
                minHeight: "400px", // Ensures image is tall enough to scroll
                width: "100%",
              }}
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        </div>

        <div className="flex-1 space-y-3 p-4">
          <div className="relative">
            <h2 className="text-xl font-semibold text-white leading-snug">
              {project?.title}
            </h2>
            <div className="absolute -left-2 top-0 w-1 h-full bg-gradient-to-b from-purple-400 to-purple-600 rounded-full opacity-60" />
          </div>

          <div className="space-y-2">
            <h3 className="text-gray-300 font-medium flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-purple-400 rounded-full" />
              Technologies Used
            </h3>

            <div className="grid grid-cols-3 gap-1.5">
              {project?.technologies?.slice(0, 5)?.map(
                (
                  tech,
                  idx // Limit to 6 technologies
                ) => (
                  <span
                    key={idx}
                    className="text-xs text-purple-300 border border-purple-500/50 bg-purpl-500/10 px-2 py-1 rounded-md font-medium text-center backdrop-blur-sm hover:bg-purple-500/20 hover:border-purple-400/60 transition-all duration-200 truncate"
                  >
                    {tech}
                  </span>
                )
              )}
              {project?.technologies?.length > 6 && (
                <span className="text-xs text-gray-400 px-2 py-1 text-start">
                  +{project.technologies.length - 6}
                </span>
              )}
            </div>
          </div>

          <div className="flex items-center justify-between pt-2">
            <div className="pt-2">
              <Link
                to={`/projects/${project?._id}`}
                className="relative inline-flex items-center justify-center px-5 py-2 overflow-hidden font-medium text-purple-200 transition duration-300 ease-out border border-purple-500 rounded-full shadow-md group hover:scale-105"
              >
                <span className="buttonAnimationColor group-hover:-top-4"></span>
                <span className="relative z-10">View Details</span>
              </Link>
            </div>

            <a
              href={project?.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className=" flex items-center justify-center w-8 h-8 bg-purple-500/80 backdrop-blur-sm text-white rounded-full hover:bg-purple-400/90 transition-colors duration-200 shadow-lg"
            >
              <Radio className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-purple-400/10 to-transparent rounded-bl-full" />
      </div>
    </div>
  );
};

export default ProjectCard;
