import Title from "../../Components/Shared/Title";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import { Link } from "react-scroll";
import { MdContactEmergency } from "react-icons/md";
import image from "../../assets/Image/rafizul.png";

const About = () => {
  return (
    <div>
      <Title
        title={"About Me"}
        des={"Building Scalable & Interactive Web Solutions"}
      />
      <div className="flex flex-col-reverse md:flex-row justify-center items-center *:flex-1">
        <div className="flex flex-col m-4 md:m-6 space-y-6">
          <div>
            <p
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
              className="text-justify leading-loose"
            >
              I Build & Design Web Interfaces. I am a passionate web developer
              building robust and user-friendly web applications. With a strong
              foundation in JavaScript and a keen eye for UI/UX design, I
              specialize in creating seamless digital experiences that drive
              user engagement and satisfaction.
            </p>
          </div>

          <div className="space-y-4">
            <h4
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-anchor-placement="top-bottom"
              className="text-lg md:text-xl font-bold text-fuchsia-400"
            >
              My Goals:{" "}
            </h4>
            <p
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-anchor-placement="top-bottom"
            >
              My goal is to become a proficient Full-Stack Developer, mastering
              both frontend and backend technologies to design and build
              innovative, scalable, and user-centric digital solutions that
              effectively address real-world challenges
            </p>
          </div>

          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            data-aos-anchor-placement="top-bottom"
            className="flex flex-row gap-2 lg:gap-4"
          >
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="buttonClass group"
            >
              Hire Me
              <span className="buttonAnimationColor"></span>
            </Link>

            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="buttonClass group"
            >
              Contact Now <MdContactEmergency className="text-xl" />
              <span className="buttonAnimationColor"></span>
            </Link>
          </div>
        </div>

        <div className="relative overflow-hidden h-full pointer-events-none">
          <div className="h-full w-full flex justify-center items-center px-4 relative">
            <motion.div
              className="relative lg:w-[80%] mx-auto flex items-center justify-center"
              animate={{ y: [0, -3, 0] }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
              }}
            >
              <div className="relative w-[320px] h-[320px] md:w-[420px] md:h-[420px] overflow-hidden rounded-full">
                <img
                  className="w-full h-full object-contain scale-125 z-10 relative"
                  src={image}
                  alt="RAFIZUL"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
