import Navbar from "./Navbar";
import { motion } from "framer-motion";
const Header = () => {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img.png')" }}
      id="Header"
    >
      <Navbar></Navbar>

      {/* ..........Hero-Section.......... */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        transition={{ duration: 1.5 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false }}
        className="container text-center mx-auto px-6 py-4 md:px-20 lg:px-32 text-white"
      >
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
          Explore homes that fit your dreams
        </h2>
        <div className="space-x-6 mt-16">
          <a
            href="#Projects"
            className="border border-white px-8 p-3 rounded hover:bg-blue-500 hover:border-blue-500"
          >
            Projects
          </a>
          <a
            href="#Contact"
            className="border border-blue-500 bg-blue-500 px-8 p-3 rounded hover:bg-transparent hover:border-white"
          >
            Contact Us
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Header;
