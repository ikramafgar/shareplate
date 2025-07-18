import {
  FaFileAlt,
  FaUser,
  FaLock,
  FaShieldAlt,
  FaBan,
  FaSyncAlt,
  FaEnvelope,
} from "react-icons/fa";
import tosImg from "../assets/terms.svg"; // use same image as About page

const terms = [
  {
    title: "Introduction",
    icon: <FaFileAlt className="text-emerald-500 text-2xl" />,
    content:
      "Shareplate is a platform that promotes community-based food sharing to reduce waste. By using our services, you agree to the following terms and conditions.",
  },
  {
    title: "User Responsibilities",
    icon: <FaUser className="text-green-600 text-2xl" />,
    content: [
      "Only share food that is fresh and safe.",
      "Respect others and communicate honestly.",
      "Avoid misuse, misinformation, or illegal content.",
    ],
  },
  {
    title: "Privacy & Data",
    icon: <FaShieldAlt className="text-yellow-500 text-2xl" />,
    content:
      "We value your privacy. Personal data is collected only for improving the platform experience. Please review our Privacy Policy for more details.",
  },
  {
    title: "Prohibited Activities",
    icon: <FaBan className="text-red-400 text-2xl" />,
    content: [
      "Sharing expired or unsafe food.",
      "Spamming, impersonating, or harassing users.",
      "Attempting to breach platform security.",
    ],
  },
  {
    title: "Account Suspension",
    icon: <FaLock className="text-emerald-400 text-2xl" />,
    content:
      "We may suspend or remove accounts that violate our guidelines, put others at risk, or misuse the platform.",
  },
  {
    title: "Limitation of Liability",
    icon: <FaShieldAlt className="text-green-500 text-2xl" />,
    content:
      "Shareplate is not responsible for the quality or consequences of shared food. Users are advised to exercise judgment and follow food safety practices.",
  },
  {
    title: "Updates to Terms",
    icon: <FaSyncAlt className="text-blue-500 text-2xl" />,
    content:
      "These terms may be updated occasionally. Continued use of the platform implies agreement with the latest version.",
  },
  {
    title: "Contact",
    icon: <FaEnvelope className="text-emerald-600 text-2xl" />,
    content: (
      <>
        For any inquiries, contact us at{" "}
        <a
          href="mailto:support@shareplate.org"
          className="text-emerald-600 underline hover:text-emerald-700 transition"
        >
          support@shareplate.org
        </a>
        .
      </>
    ),
  },
];

const TermsOfService = () => {
  return (
    <main className="w-full min-h-[90vh] bg-white flex flex-col items-center">
      {/* Hero Section (same layout as About) */}
      <section className="w-full flex flex-col md:flex-row items-center px-4 md:px-12 lg:px-16 py-12">
        <div className="flex-1 flex flex-col items-start">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            <span className="text-gray-700">Terms of</span> Service
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Please read these terms carefully before using Shareplate. By continuing, you acknowledge and accept these conditions.
          </p>
          <div className="flex gap-4 mt-2">
            <span className="inline-flex items-center gap-2 text-green-700 font-bold"><FaFileAlt /> Legal</span>
            <span className="inline-flex items-center gap-2 text-emerald-500 font-bold"><FaShieldAlt /> Privacy</span>
            <span className="inline-flex items-center gap-2 text-red-400 font-bold"><FaBan /> Security</span>
          </div>
        </div>
        <div className="hidden md:flex flex-1 items-center justify-center">
          <img src={tosImg} alt="Terms" className="w-[300px] h-auto object-contain" />
        </div>
      </section>

      {/* Terms Content in Card Format */}
      <section className="w-full max-w-5xl px-4 md:px-8 space-y-8 py-6">
        {terms.map((term, index) => (
          <div
            key={index}
            className="bg-emerald-50 rounded-2xl shadow border border-emerald-100 p-6 md:p-8 transition hover:shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              {term.icon}
              <h2 className="text-xl font-bold text-gray-800">{term.title}</h2>
            </div>
            {Array.isArray(term.content) ? (
              <ul className="list-disc pl-6 text-gray-700 text-sm space-y-2">
                {term.content.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700 text-sm leading-relaxed">
                {term.content}
              </p>
            )}
          </div>
        ))}
      </section>

      {/* Section Divider */}
      <div className="w-full max-w-5xl h-10 flex items-center justify-center">
        <div className="w-2/3 h-0.5 bg-gradient-to-r from-emerald-200 via-green-100 to-amber-100 rounded-full my-8" />
      </div>

      {/* Quote Section */}
      <section className="w-full max-w-4xl bg-gradient-to-br from-emerald-100 via-white to-green-50 rounded-2xl shadow p-8 mb-12 flex flex-col items-center">
        <blockquote className="italic text-lg md:text-2xl text-center text-gray-700 max-w-2xl mb-4">
          “Using Shareplate means being part of a responsible, kind, and trusted community.”
        </blockquote>
        <div className="text-emerald-700 font-bold">— Shareplate Team</div>
      </section>

      {/* Footer CTA */}
      <footer className="text-center pb-16 space-y-4">
        <p className="text-sm text-gray-500">
          By using Shareplate, you agree to these terms.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="/signup"
            className="px-6 py-2 bg-emerald-500 text-white text-sm font-medium rounded-full hover:bg-emerald-600 transition"
          >
            Accept & Continue
          </a>
          <a
            href="/"
            className="text-sm text-gray-500 underline hover:text-emerald-600 transition"
          >
            Back to Home
          </a>
        </div>
      </footer>
    </main>
  );
};

export default TermsOfService;
