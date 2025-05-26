import { Link2 } from "lucide-react";

const ProjectCard = ({ project, i }) => {
  return (
    <div>
      <a
        href={`/projects/${project?._id}`}
        data-aos="fade-up"
        data-aos-delay={i * 100}
        data-aos-anchor-placement="top-bottom"
        key={project?._id}
        className="rounded-2xl h-full cursor-pointer shadow-xl shadow-purple-400/10 transition-all flex flex-col justify-between duration-300 hover:shadow-xl overflow-hidden"
      >
        <div>
          {/* Image with Hover Effect */}
          <div className="overflow-hidden group">
            <img
              src={project?.thumbnail}
              loading="lazy"
              alt="project image"
              className="aspect-video w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="space-y-3 p-4">
            <h1 className="text-xl font-semibold text-white leading-snug">
              {project?.title}
            </h1>
            <div className="space-y-5">
              <div className="flex justify-between items-center">
                <h3 className="text-sm lg:text-base font-medium text-gray-200">
                  Used Technologies:
                </h3>
                <a
                  href={project?.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cursor-pointer"
                >
                  <Link2 className="h-5" />
                </a>
              </div>
              <div className="flex flex-wrap gap-1 md:gap-3">
                {project?.technologies?.map((tech, i) => (
                  <p
                    key={i}
                    className="border text-purple-400 text-xs font-medium px-3 py-1 rounded-full"
                  >
                    {tech}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
