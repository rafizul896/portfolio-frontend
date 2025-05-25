import { useEffect, useState } from "react";
import Title from "../../Components/Shared/Title";
import { Link } from "react-router-dom";
import Aos from "aos";
import axios from "axios";
import { Link2 } from "lucide-react";
import ProjectCard from "../../Components/Card/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // API call using axios
    axios
      .get(`${import.meta.env.VITE_API_URL}/project`)
      .then((res) => {
        setProjects(res.data.data);
      })
      .catch((err) => {
        console.error(err?.message || "Error fetching data:");
      });
  }, []);

  return (
    <div>
      <Title
        title={"Projects"}
        des={
          "Explore some of the real-world projects I’ve built using modern technologies, showcasing my problem-solving and development skills."
        }
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-12 my-12">
        {projects.slice(0, 3)?.map((project, i) => (
          <ProjectCard project={project} i={i} />
        ))}
      </div>

      <div className="flex justify-center gap-2 lg:gap-4">
        <Link
          to="/projects"
          smooth={true}
          duration={500}
          className="buttonClass group"
        >
          See All Projects
          <span className="buttonAnimationColor"></span>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
