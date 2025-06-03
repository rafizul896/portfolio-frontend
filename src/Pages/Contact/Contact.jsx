import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";
import Title from "../../Components/Shared/Title";
import Form from "./Form";
import { FaLocationPin } from "react-icons/fa6";

const Contact = () => {
  return (
    <div>
      <Title title={"Contact Me"} />
      <div
        data-aos="fade-up"
        data-aos-anchor-placement="top-bottom"
        className=" p-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-start shadow-purple-400/10 rounded-xl shadow-2xl"
      >
        <div data-aos="fade-up" data-aos-anchor-placement="top-bottom">
          <h2 className="text-xl md:text-2xl font-semibold text-fuchsia-400 mb-4">
            Let's Contact With Me
          </h2>

          <div className="space-y-4 lg:space-y-6">
            {/* Location */}
            <div className="flex items-center gap-3 p-3 rounded-lg shadow-sm">
              <FaLocationPin className="text-fuchsia-400 text-xl" />
              <p className="text-xs lg:text-sm">Mymensingh, Bangladesh</p>
            </div>

            {/* Email */}
            <div className="flex items-center gap-3 p-3 rounded-lg shadow-sm">
              <FaEnvelope className="text-fuchsia-400 text-xl" />
              <p className="text-xs lg:text-sm">rafizulislam899@gmail.com</p>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-3 p-3 rounded-lg shadow-sm">
              <FaPhone className="text-fuchsia-400 text-xl" />
              <p className="text-xs lg:text-sm">
                +880 18922 14506
              </p>
            </div>

            <div className="flex items-center gap-3 p-3 rounded-lg shadow-sm">
              <FaWhatsapp className="text-fuchsia-400 text-xl" />
              <a
                href="https://wa.me/+8801892214506"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs lg:text-sm"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
          className="rounded-xl shadow-md"
        >
          <h3 className="text-xl md:text-2xl font-semibold text-fuchsia-400 mb-4">
            Let's Message me
          </h3>
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Contact;
