import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Title from "../../Components/Shared/Title";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Skill() {
  const containerRef = useRef(null);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/skill?category=${"technical"}`)
      .then((res) => {
        setSkills(res.data.data);
      })
      .catch((err) => {
        console.error(err?.message || "Error fetching data:");
      });
  }, []);

  useEffect(() => {
    gsap.to(containerRef.current, {
      x: "-100%",
      duration: 18,
      ease: "linear",
      repeat: -1,
    });
  }, []);

  return (
    <div>
      <Title
        title={"Technical Skills"}
        des={
          "Highlighting my proficiency in frontend technologies, backend frameworks, databases, and development tools."
        }
      />

      <div className="overflow-hidden relative">
        <div
          ref={containerRef}
          className="flex gap-6 lg:gap-12 items-center justify-start mt-12 py-12"
        >
          {skills?.map((skill, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={(index + 1) * 200}
              data-aos-anchor-placement="top-bottom"
              className="px-8 py-6 cursor-pointer border-2 rounded-2xl bg-purple-950/5 border-purple-800/30 shadow-xl hover:shadow-purple-700/10 hover:scale-105 duration-500 group"
            >
              <div className="w-24 h-24 mx-auto relative">
                <img
                  className="w-full h-full object-cover p-4 lg:p-6"
                  src={skill.icon}
                  alt={skill?.name}
                />
                <div className="absolute inset-0 bg-purple-700/40 -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"></div>
              </div>
              <h2 className="text-lg md:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-tr from-purple-400 to-purple-500 text-center">
                {skill?.name}
              </h2>
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-2 lg:gap-4">
        <Link
          to="/skills"
          smooth={true}
          duration={500}
          className="buttonClass group"
        >
          See All Skills
          <span className="buttonAnimationColor"></span>
        </Link>
      </div>
    </div>
  );
}
