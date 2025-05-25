import { Typewriter } from "react-simple-typewriter";

const TypingAnimation = () => {
  return (
    <h1 className="text-2xl md:text-3xl lg:text-5xl font-medium">
      <p className="font-semibold">
        <Typewriter
          words={["Front End Developer","MERN Stack Developer", "Full Stack Developer"]}
          loop={0}
          typeSpeed={150}
          deleteSpeed={100}
          delaySpeed={1200}
        />
      </p>
    </h1>
  );
};

export default TypingAnimation;
