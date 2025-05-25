import { useEffect, useState } from "react";
import Title from "../../Components/Shared/Title";
import axios from "axios";
import Loading from "../../Components/Shared/Loading";

export default function SkillPage() {
  const [skills, setSkills] = useState([]);
  const [isLoading, setIsloading] = useState(false);

  useEffect(() => {
    setIsloading(true);
    axios
      .get(`${import.meta.env.VITE_API_URL}/skill`)
      .then((res) => {
        setSkills(res.data.data);
        setIsloading(false);
      })
      .catch((err) => {
        setIsloading(false);
        console.error(err?.message || "Error fetching data:");
      });
  }, []);

  const technicalSkills = skills.filter(
    (skill) => skill.category === "technical"
  );
  const softSkills = skills.filter((skill) => skill.category === "soft");

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="mt-5">
      <Title title={"My Skills"} />

      {/* Technical Skills Section */}
      <div>
        <h1 className="text-xl mb-5">Technical Skills</h1>
        <div className="flex flex-wrap gap-6 items-center">
          {technicalSkills.map((skill) => (
            <div
              key={skill._id}
              className="flex items-center gap-2 px-6 py-3 cursor-pointer border-2 rounded-2xl bg-purple-950/5 border-purple-800/30 shadow-xl hover:shadow-purple-700/10 hover:scale-105 duration-500 group"
            >
              <div className="w-8 h-8 mx-auto relative">
                <img
                  className="w-full h-full rounded-full object-cover"
                  src={skill.icon}
                  alt={skill?.name}
                />
                <div className="absolute inset-0 bg-purple-700/40 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"></div>
              </div>
              <h2 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-tr from-purple-400 to-purple-500 text-center">
                {skill?.name}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills Section */}
      <div className="mt-12">
        <h1 className="text-xl mb-5">Soft Skills</h1>
        <div className="flex flex-wrap gap-6 items-center">
          {softSkills.map((skill) => (
            <div
              key={skill._id}
              className="flex items-center gap-2 px-6 py-3 cursor-pointer border-2 rounded-2xl bg-purple-950/5 border-purple-800/30 shadow-xl hover:shadow-purple-700/10 hover:scale-105 duration-500 group"
            >
              <h2 className="text-lg font-medium text-transparent bg-clip-text bg-gradient-to-tr from-purple-400 to-purple-500 text-center">
                {skill?.name}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
