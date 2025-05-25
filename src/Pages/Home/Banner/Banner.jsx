import { LuLinkedin, LuFacebook, LuGithub } from "react-icons/lu";
import { MdFileDownload } from "react-icons/md";
import { Link } from "react-router-dom";
import { VscGithubProject } from "react-icons/vsc";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import TypingAnimation from "./TypingText";
import Lottie from "react-lottie";
// import nameLogo from "../../../assets/logo/AA.png";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import tech from "../../../assets/Image/tech.json";

const Banner = () => {
  useEffect(() => {
    Aos.init({ once: true, offset: 200, duration: 1500 });
  }, []);

  const socialLinks = [
    {
      icon: <LuLinkedin />,
      label: "Linkedin",
      link: "https://www.linkedin.com/in/rafizulislam/",
    },
    {
      icon: <LuGithub />,
      label: "Github",
      link: "https://github.com/rafizul896",
    },
    {
      icon: <LuFacebook />,
      label: "Facebook",
      link: "https://www.facebook.com/rafizulislam.rafiz.3/",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:mx-12 items-center min-h-[550px] mt-8 lg:mt-0 text-white relative">
      {/* Left Content */}
      <div className="flex justify-start items-center relative z-10">
        <div className="space-y-4 md:space-y-6 lg:space-y-8">
          <div className="text-left space-y-4 md:space-y-6 lg:space-y-8">
            <h1
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-2xl md:text-3xl lg:text-4xl font-semibold"
            >
              Hello, I`m Rafizul
            </h1>

            <h2 className="h-[35px] md:h-[46px] lg:h-[58px] text-purple-400 font-extrabold">
              <TypingAnimation />
            </h2>

            <p
              data-aos="fade-up"
              data-aos-delay="1000"
              className="leading-relaxed max-w-md"
            >
              A Simple Full Stack Web Developer who loves to build applications,
              learn new stuff, and play with code.
            </p>
          </div>

          {/* Social Icons */}
          <ul
            data-aos="fade-up"
            data-aos-delay="1200"
            className="flex flex-row gap-6 items-center"
          >
            {socialLinks.map(({ link, icon, label }, i) => (
              <motion.li
                key={i}
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: i * 0.2,
                }}
                className="cursor-pointer transition"
              >
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="text-xl text-white inline-block p-2 rounded-xl border border-white/50"
                >
                  {icon}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Buttons */}
          <div
            data-aos="fade-up"
            data-aos-delay="1000"
            className="flex flex-row flex-wrap gap-4 md:gap-6 items-center my-4"
          >
            <a
              href="https://drive.google.com/uc?export=download&id=1SwVjOnHxuKzkdoezaVhDzHOJOUtrA5YO"
              target="_blank"
              rel="noopener noreferrer"
              className="buttonClass group"
              download
            >
              Resume <MdFileDownload className="text-xl" />
              <span className="buttonAnimationColor group-hover:-top-4"></span>
            </a>

            <Link
              to="/projects"
              smooth={true}
              duration={500}
              className="buttonClass group"
            >
              Projects <VscGithubProject className="text-xl" />
              <span className="buttonAnimationColor group-hover:-top-4"></span>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Image and Animations */}
      <div className="flex justify-center items-center h-full w-full relative my-6">
        <div
          data-aos="fade-up"
          data-aos-delay="1200"
          data-aos-anchor-placement="top-bottom"
          className="relative z-10 flex justify-center items-center"
        >
          <Lottie
            options={{ animationData: tech, autoplay: true, loop: true }}
          ></Lottie>
        </div>
      </div>
    </div>
  );
};

export default Banner;
