import { ToastContainer } from "react-toastify";
import About from "../AboutMe/About";
import Contact from "../Contact/Contact";
import Projects from "../Projects/Projects";
import Skill from "../Skills/Skill";
import Banner from "./Banner/Banner";
import Blogs from "../Blogs/Blogs";
import EducationSection from "../Education/EducationSection";

const Home = () => {
  return (
    <main className="space-y-9 md:space-y-12">
      <section id="home" data-section="home">
        <Banner />
      </section>
      <section data-section="about">
        <About />
      </section>
      <section data-section="skills">
        <Skill />
      </section>
      <section data-section="projects">
        <Projects />
      </section>
      <section data-section="projects">
        <Blogs />
      </section>
      <section data-section="education">
        <EducationSection />
      </section>
      <section name="contact">
        <Contact />
      </section>
      <ToastContainer autoClose={2000} position="bottom-center" />
    </main>
  );
};

export default Home;
