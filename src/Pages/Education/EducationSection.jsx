import Title from "../../Components/Shared/Title";

const educationData = [
  {
    id: 1,
    institute: "Brahmanbaria Polytechnic Institute (BBPI)",
    degree: "Diploma in Computer Science and Technology",
    session: "2022 - 2023",
    grade: "On Going",
    description:
      "I am currently pursuing a Diploma in Computer Science and Technology at Brahmanbaria Polytechnic Institute. This program is enhancing my foundational knowledge in software development, networking, and system design through both theoretical and hands-on training.",
    logo: "https://i.ibb.co/LzcgJGz0/bbpi.jpg",
  },
  {
    id: 2,
    institute: "Phulpur Pilot High School",
    degree: "SSC(X), Science",
    session: "2019 - 2020",
    grade: "4.78 GPA",
    description:
      "I successfully completed my Secondary School Certificate (SSC) from Phulpur Pilot High School with a strong academic performance in the Science group, laying the groundwork for my future studies in technology.",
    logo: "https://i.ibb.co/ycxJmK1T/pilot-school.jpg",
  },
];

const EducationSection = () => {
  return (
    <div className="py-16 text-white">
      <Title
        title={"Education"}
        des={
          "I am currently pursuing my academic journey, gaining both theoretical knowledge and practical experience. Here's an overview of my ongoing education and learning path."
        }
      />

      <div className="mt-10 space-y-8 relative">
        {educationData.map((edu, index) => (
          <div
            key={edu.id}
            className="border border-purple-600 rounded-xl p-6 md:p-8 shadow-md relative"
          >
            <div className="flex items-start gap-4">
              <img
                src={edu.logo}
                alt={edu.institute}
                className="w-12 h-12 object-cover rounded-full border-2 border-white"
              />
              <div>
                <h3 className="text-lg md:text-xl font-bold">
                  {edu.institute}
                </h3>
                <p className="text-sm text-purple-300 font-medium">
                  {edu.degree}
                </p>
                <p className="text-sm text-gray-300">Session : {edu.session}</p>
                <p className="mt-2 text-sm">
                  <span className="font-semibold">Grade:</span> {edu.grade}
                </p>
                <p className="text-sm mt-2 text-gray-300">{edu.description}</p>
              </div>
            </div>

            {/* Timeline dots and line */}
            <div className="absolute left-[-20px] top-6 w-3 h-3 bg-purple-500 rounded-full"></div>
            {index !== educationData.length - 1 && (
              <div className="absolute left-[-14px] top-10 h-full w-px bg-purple-500"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
