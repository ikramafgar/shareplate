import { FiArrowLeftCircle } from "react-icons/fi";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <main className="w-full min-h-screen flex items-center justify-center px-6 py-12 bg-white">
      <div className="max-w-xl text-center">
        <h1 className="text-[120px] md:text-[150px] font-extrabold bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-400 bg-clip-text text-transparent leading-none">
          404
        </h1>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Oops! Page not found
        </h2>
        <p className="text-gray-600 text-base md:text-lg mb-8">
          The page you're looking for doesn’t exist or has been moved. But don't
          worry, we’ll guide you home.
        </p>

        {/* Go Home Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-6 py-3 rounded-full font-semibold text-base shadow-md hover:from-emerald-600 hover:to-green-600 transition duration-200"
        >
          <FiArrowLeftCircle className="text-xl" /> Go Back Home
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
