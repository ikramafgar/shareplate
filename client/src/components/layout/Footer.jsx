import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-emerald-50 text-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-5">
            <div className="group">
              <a
                href="/"
                className="inline-block p-1 -m-1 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-end">
                  <svg
                    className="w-8 h-8 mr-2 text-emerald-500 group-hover:rotate-12 transition-transform"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeWidth="2"
                      strokeLinecap="round"
                      d="M12 22V12M8 8V2M16 8V2M18 12H6C4 12 3 14 4 15L6 19C7 20 8 22 12 22"
                    />
                  </svg>

                  <div>
                    <h1 className="text-3xl font-extrabold text-gray-800 leading-none">
                      <span className="text-emerald-600">Share</span>
                      <span className="text-gray-500">plate</span>
                    </h1>
                    <div className="flex items-center mt-1">
                      <div className="h-[2px] w-4 bg-lime-400 mr-2" />
                      <p className="text-xs font-medium text-gray-400 tracking-widest">
                        Zero Waste Network
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              Reducing food waste through community sharing initiatives across
              Pakistan.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-600 hover:text-emerald-500 transition"
              >
                <FaFacebookF size={18} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-emerald-500 transition"
              >
                <FaTwitter size={18} />
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-emerald-500 transition"
              >
                <FaInstagram size={18} />
              </a>
            </div>
          </div>

          {/* Links Column */}
          <div className="space-y-5">
            <h4 className="text-gray-900 font-semibold uppercase text-sm tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", href: "/" },
                { label: "About Us", href: "/about" },
                { label: "Our Impact", href: "/impact" },
                { label: "Get Involved", href: "/login" },
              ].map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-gray-700 hover:text-emerald-500 text-sm transition"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div className="space-y-5">
            <h4 className="text-gray-900 font-semibold uppercase text-sm tracking-wider">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-emerald-500 text-sm transition"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/food-safety-guide"
                  className="text-gray-700 hover:text-emerald-500 text-sm transition"
                >
                  Food Safety Guide
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-emerald-500 text-sm transition"
                >
                  Volunteer
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-700 hover:text-emerald-500 text-sm transition"
                >
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="space-y-5">
            <h4 className="text-gray-900 font-semibold uppercase text-sm tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-gray-700 text-sm">
              <li>info@shareplate.org</li>
              <li>+92 300 000 0000</li>
              <li>Peshawar, Pakistan</li>
            </ul>
            <div className="pt-2">
              <button className=" bg-gradient-to-r from-emerald-500 to-green-500 text-white px-8 py-3 rounded-full font-bold text-lg hover:from-emerald-600 hover:to-green-600 transition duration-200">
                Donate Now
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-300 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} Shareplate. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="/privacy-policy"
              className="text-gray-600 hover:text-emerald-500 text-sm transition"
            >
              Privacy Policy
            </a>
            <a
              href="/terms-of-service"
              className="text-gray-600 hover:text-emerald-500 text-sm transition"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
