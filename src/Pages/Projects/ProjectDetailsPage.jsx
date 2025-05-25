import axios from "axios";
import { useEffect, useState } from "react";
import { IoCaretBackOutline } from "react-icons/io5";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../Components/Shared/Loading";

const ProjectDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`${import.meta.env.VITE_API_URL}/project/${id}`)
      .then((res) => {
        setProject(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err?.message || "Error fetching data:");
        setIsLoading(false);
      });
  }, [id]);

  const {
    thumbnail,
    title,
    technologies,
    description,
    liveUrl,
    githubRepoUrl,
    challenges,
    improvements,
    features,
  } = project;

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="my-6">
      <div>
        <button
          onClick={() => navigate(-1)}
          className="buttonClass cursor-pointer group"
        >
          <IoCaretBackOutline /> Back
          <span className="buttonAnimationColor"></span>
        </button>
      </div>

      <div
        key={id}
        className="p-6 mt-6 rounded-lg shadow-2xl bg-purple-800/5 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-12"
      >
        {/* Left section: Title and Image */}
        <div className="space-y-4 md:col-span-2 lg:col-span-3">
          <div>
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold pb-4 lg:pb-8 text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to-purple-700">
              {title}
            </h1>
            <div className="rounded-lg overflow-hidden">
              <img src={thumbnail} alt="Project thumbnail" />
            </div>
          </div>
        </div>

        {/* Right section: Description, Stack, Features, Links */}
        <div className="lg:col-span-2 space-y-6 p-2 lg:p-4">
          <div className="space-y-2">
            <p className="text-purple-400 font-bold text-xl lg:text-2xl">
              Overview:
            </p>
            <p className="text-xs lg:text-base">{description}</p>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg lg:text-xl font-bold text-purple-400">
              Used Technologies:
            </h3>
            <div className="flex flex-wrap gap-2">
              {technologies?.map((tech, index) => (
                <p
                  key={index}
                  className="px-2 py-1 rounded-lg border border-white/10 text-xs text-white/80 backdrop-blur-sm"
                >
                  {tech}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg lg:text-xl font-bold text-purple-400">
              Key Features:
            </h3>
            <ul className="text-xs lg:text-base list-disc list-inside">
              {features?.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <p className="font-bold text-purple-400">Challenges:</p>
            <ul className="text-xs lg:text-base list-disc list-inside">
              {challenges?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-2">
            <p className="font-bold text-purple-400">Improvements:</p>
            <ul className="text-xs lg:text-base list-disc list-inside">
              {improvements?.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="flex flex-wrap gap-2">
            <a
              href={githubRepoUrl?.frontend}
              target="_blank"
              className="buttonClass group"
            >
              Frontend Repo <span className="buttonAnimationColor"></span>
            </a>
            <a
              href={githubRepoUrl?.backend}
              target="_blank"
              className="buttonClass group"
            >
              Backend Repo <span className="buttonAnimationColor"></span>
            </a>
            <a href={liveUrl} target="_blank" className="buttonClass group">
              Live Demo <span className="buttonAnimationColor"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailsPage;
