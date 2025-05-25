import { useEffect, useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import Aos from "aos";
import "aos/dist/aos.css";
import { X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation(); // get current path

  useEffect(() => {
    Aos.init({
      once: false,
      delay: 300,
      duration: 1500,
    });
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Blogs", path: "/blogs" },
  ];

  return (
    <div className="h-[76px]">
      <div className="w-full fixed left-0 z-50 duration-700 top-0">
        <nav className="my-4 rounded-2xl backdrop-blur-xl duration-300 max-w-7xl w-11/12 mx-auto">
          <div className="flex items-center justify-between py-2 px-6 rounded-[14px] bg-gradient-to-r from-[#1f1f2e]/80 via-[#2b1b36]/80 to-[#1f1f2e]/80 shadow-md shadow-purple-800/20 backdrop-blur-md relative">
            {/* Gradient background and motion elements (unchanged) */}
            {/* Mobile Menu */}
            <div className={`absolute left-0 w-full z-50 bg-gradient-to-r from-[#1f1f2e] via-[#2b1b36] to-[#1f1f2e] backdrop-blur-2xl text-white rounded-xl duration-500 ${open ? "top-0" : "-top-96"}`}>
              <ul className="flex flex-col p-6 space-y-4 relative">
                <div className="absolute top-4 right-4 text-xl transition z-10">
                  <button
                    onClick={() => setOpen(false)}
                    className="btn btn-sm cursor-pointer"
                  >
                    <X />
                  </button>
                </div>
                {links.map((item) => (
                  <li key={item.path} data-aos="fade-up" className="text-center">
                    <Link
                      to={item.path}
                      onClick={() => setOpen(false)}
                      className={`text-base px-4 py-2 rounded-md transition-all ${
                        location.pathname === item.path
                          ? "bg-fuchsia-700/40 text-white font-semibold"
                          : "hover:bg-fuchsia-700/20"
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logo */}
            <div>
              <Link to="/">
                <p className="text-lg font-medium cursor-pointer">RAFIZUL</p>
              </Link>
            </div>

            {/* Desktop Links */}
            <div>
              <ul className="hidden lg:flex items-center gap-4 hover:gap-6 duration-300 text-sm">
                {links.map(({ name, path }) => (
                  <li key={path} className="relative group">
                    <Link
                      to={path}
                      className={`py-3 px-4 cursor-pointer ${
                        location.pathname === path
                          ? "border-b-2 border-fuchsia-500 text-white font-semibold"
                          : "hover:border-b border-fuchsia-700/20"
                      }`}
                      onClick={() => setOpen(false)}
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resume + Toggle */}
            <div className="flex items-center gap-3">
              <a
                href="https://drive.google.com/file/d/1SwVjOnHxuKzkdoezaVhDzHOJOUtrA5YO/view"
                target="_blank"
                rel="noopener noreferrer"
                className="buttonClass bg-purple-500 group"
              >
                Resume
                <span className="buttonAnimationColor group-hover:-top-4 "></span>
              </a>
              <button onClick={() => setOpen(true)} className="text-xl lg:hidden">
                <RiMenu2Fill />
              </button>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
