import { useEffect, useState } from "react";
import Title from "../../Components/Shared/Title";
import Aos from "aos";
import axios from "axios";
import { Link2 } from "lucide-react";
import { toast } from "react-toastify";
import Loading from "../../Components/Shared/Loading";
import ProjectCard from "../../Components/Card/ProjectCard";

const ProjectsPage = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}/project`)
      .then((res) => {
        setProjects(res.data.data);
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
      <Title title={"My Projects"} />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-12 my-12">
        {projects?.map((project, i) => (
          <ProjectCard project={project} i={i} />
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
