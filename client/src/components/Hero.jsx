import { motion as Motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="min-h-[70vh] w-full flex flex-col md:flex-row items-center justify-center px-4 md:px-12 lg:px-16 py-12 bg-white gap-10">
      <div className="flex-1 flex flex-col justify-center items-center md:items-start text-center md:text-left">
        <h1 className="text-6xl sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-tight mb-6 bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-400 bg-clip-text text-transparent">
          Shareplate
          <span className="block text-4xl sm:text-3xl md:text-5xl font-bold text-gray-600 mt-2">
            Fill Bellies, Not Bins. 
          </span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-12 leading-relaxed tracking-tight max-w-2xl">
          <span className="text-emerald-600 font-semibold">Be the change</span>{" "}
          in a world where food goes to waste while others go hungry.{" "}
          <span className="text-emerald-600 font-semibold">Together</span>, we
          can rescue meals, restore hope, and build a more compassionate
          future—one plate at a time.
        </p>

        <Motion.button
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-10 py-4 rounded-full font-bold text-xl hover:from-emerald-600 hover:to-green-600 transition duration-200"
        >
          Get Started <FaArrowRight className="text-2xl" />
        </Motion.button>
      </div> 

      <div className="flex-1 flex items-center justify-center w-full md:w-auto mt-10 md:mt-0">
        <img
          src="/Hero.webp"
          alt="SharePlate Hero"
          className="w-full max-w-md md:max-w-xl object-cover"
        />
      </div>
    </section>
  );
};

export default Hero;
