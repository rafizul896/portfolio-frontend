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
        <div className="flex flex-wrap gap-4 items-center">
          {technicalSkills.map((skill) => (
            <div
              key={skill._id}
              className="relative flex items-center gap-3 px-5 py-4 cursor-pointer border rounded-xl bg-purple-950/5 border-purple-800/20 shadow-lg hover:shadow-purple-700/20 hover:border-purple-600/40 hover:-translate-y-1 transition-all duration-300 group overflow-hidden"
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-800/0 via-purple-700/5 to-purple-800/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="w-10 h-10 relative flex-shrink-0 z-10">
                <img
                  className="w-full h-full rounded-lg object-cover shadow-sm"
                  src={skill.icon}
                  alt={skill?.name}
                />
                <div className="absolute inset-0 bg-purple-600/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>
              </div>
              
              <h2 className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-400 group-hover:from-purple-300 group-hover:via-purple-400 group-hover:to-purple-300 transition-all duration-300 z-10">
                {skill?.name}
              </h2>
              
              {/* Subtle corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>

      {/* Soft Skills Section */}
      <div className="mt-12">
        <h1 className="text-xl mb-5">Soft Skills</h1>
        <div className="flex flex-wrap gap-4 items-center">
          {softSkills.map((skill) => (
            <div
              key={skill._id}
              className="relative flex items-center justify-center px-6 py-4 cursor-pointer border rounded-xl bg-purple-950/5 border-purple-800/20 shadow-lg hover:shadow-purple-700/20 hover:border-purple-600/40 hover:-translate-y-1 transition-all duration-300 group overflow-hidden min-w-fit"
            >
              {/* Animated background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-800/0 via-purple-700/5 to-purple-800/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <h2 className="text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-purple-500 to-purple-400 group-hover:from-purple-300 group-hover:via-purple-400 group-hover:to-purple-300 transition-all duration-300 z-10 text-center">
                {skill?.name}
              </h2>
              
              {/* Subtle corner accent */}
              <div className="absolute top-0 right-0 w-8 h-8 bg-gradient-to-bl from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
