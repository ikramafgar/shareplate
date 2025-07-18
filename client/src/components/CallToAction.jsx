import { motion as Motion } from "framer-motion";
import { FaRegLightbulb, FaArrowRight } from "react-icons/fa";

const CallToAction = () => {
  return (
    <section className="relative overflow-hidden py-20 bg-white dark:bg-gray-900">
      {/* Decorative background shape */}
      <div className="absolute top-0 left-0 w-full h-full">
        <svg
          className="absolute opacity-10 w-[1000px] -top-20 -left-40 rotate-12 text-emerald-200"
          fill="currentColor"
          viewBox="0 0 200 200"
        >
          <path d="M43.6,-74.1C56.3,-65.6,65.8,-56.1,70.5,-44.4C75.1,-32.7,74.9,-18.8,77.2,-4.2C79.5,10.3,84.3,24.6,78.2,34.9C72.1,45.2,55,51.6,40.6,56.9C26.3,62.2,13.2,66.5,-1.6,68.8C-16.4,71.1,-32.9,71.3,-43.5,63.8C-54.2,56.3,-58.9,41,-65.7,26.5C-72.5,12,-81.3,-2.6,-79.1,-16.8C-77,-31,-64.1,-44.8,-49.7,-54.9C-35.3,-65,-19.6,-71.4,-3,-68.1C13.6,-64.8,27.1,-51.7,43.6,-74.1Z" />
        </svg>
      </div>

      <div className="relative container mx-auto px-6 lg:px-16 flex flex-col-reverse lg:flex-row items-center gap-16 z-10">
        {/* Left Content */}
        <Motion.div
          initial={{ x: -40, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 text-center lg:text-left"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-emerald-600 dark:text-emerald-300 leading-tight mb-4">
            Be the Change. <br /> Feed the Hope.
          </h2>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Join our mission to end food waste and hunger. Whether you're a
            donor or volunteer, your actions create real impact.
          </p>
          <Motion.button
        
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-10 py-4 rounded-full font-bold text-xl hover:from-emerald-600 hover:to-green-600 transition duration-200"
          >
            Get Involved <FaArrowRight className="text-2xl" />
          </Motion.button>
        </Motion.div>

        {/* Right Icon Section */}
        <Motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <div className="relative bg-emerald-100 dark:bg-emerald-900 p-12 rounded-full shadow-xl">
            <FaRegLightbulb className="text-7xl text-yellow-400  animate-pulse" />
            <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-yellow-300 blur-lg opacity-50" />
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default CallToAction;








// const CallToAction = () => {
//   return (
//     <section className="relative overflow-hidden py-16 sm:py-20 md:py-24 bg-white dark:bg-gray-900">
//       {/* Decorative SVG Shape */}
//       <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
//         <svg
//           className="absolute opacity-10 w-[800px] sm:w-[1000px] -top-24 -left-32 rotate-12 text-emerald-200"
//           fill="currentColor"
//           viewBox="0 0 200 200"
//         >
//           <path d="M43.6,-74.1C56.3,-65.6,65.8,-56.1,70.5,-44.4C75.1,-32.7,74.9,-18.8,77.2,-4.2C79.5,10.3,84.3,24.6,78.2,34.9C72.1,45.2,55,51.6,40.6,56.9C26.3,62.2,13.2,66.5,-1.6,68.8C-16.4,71.1,-32.9,71.3,-43.5,63.8C-54.2,56.3,-58.9,41,-65.7,26.5C-72.5,12,-81.3,-2.6,-79.1,-16.8C-77,-31,-64.1,-44.8,-49.7,-54.9C-35.3,-65,-19.6,-71.4,-3,-68.1C13.6,-64.8,27.1,-51.7,43.6,-74.1Z" />
//         </svg>
//       </div>

//       <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex flex-col lg:flex-row items-center gap-12 z-10">
//         {/* Left Content */}
//         <Motion.div
//           initial={{ x: -40, opacity: 0 }}
//           whileInView={{ x: 0, opacity: 1 }}
//           transition={{ duration: 0.6 }}
//           viewport={{ once: true }}
//           className="w-full lg:w-1/2 text-center lg:text-left"
//         >
//           <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-emerald-600 dark:text-emerald-300 leading-tight mb-4">
//             Be the Change. <br className="hidden sm:block" />
//             Feed the Hope.
//           </h2>

//           <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 mb-6 max-w-lg mx-auto lg:mx-0">
//             Join our mission to end food waste and hunger. Whether you're a
//             donor or volunteer, your actions create real impact.
//           </p>

//           <Motion.button
//             whileHover={{ scale: 1.07 }}
//             whileTap={{ scale: 0.97 }}
//             onClick={() => (window.location.href = "/login")}
//             className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-bold text-base sm:text-xl hover:from-emerald-600 hover:to-green-600 transition duration-200"
//           >
//             Get Involved <FaArrowRight className="text-lg sm:text-2xl" />
//           </Motion.button>
//         </Motion.div>

//         {/* Right Icon Section */}
//         <Motion.div
//           initial={{ scale: 0.9, opacity: 0 }}
//           whileInView={{ scale: 1, opacity: 1 }}
//           transition={{ duration: 0.7 }}
//           viewport={{ once: true }}
//           className="w-full lg:w-1/2 flex justify-center"
//         >
//           <div className="relative bg-emerald-100 dark:bg-emerald-900 p-8 sm:p-12 rounded-full shadow-xl max-w-[250px] sm:max-w-[300px]">
//             <FaRegLightbulb className="text-5xl sm:text-7xl text-yellow-400 animate-pulse" />
//             <div className="absolute -top-5 -right-5 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-yellow-300 blur-lg opacity-50" />
//           </div>
//         </Motion.div>
//       </div>
//     </section>
//   );
// };

// export default CallToAction;
