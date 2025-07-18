import {
  FaShieldAlt,
  FaUserSecret,
  FaDatabase,
  FaLock,
  FaSyncAlt,
  FaEnvelopeOpenText,
} from "react-icons/fa";
import privacyImg from "../assets/privacy.svg"; // Use same image as About page

const sections = [
  {
    id: "01",
    title: "Your Privacy Matters",
    icon: <FaShieldAlt className="text-emerald-500 text-2xl" />,
    content:
      "We respect your privacy and are committed to protecting your personal information. This policy outlines how Shareplate handles your data.",
  },
  {
    id: "02",
    title: "Data We Collect",
    icon: <FaDatabase className="text-emerald-500 text-2xl" />,
    content: [
      "Account details like name and email.",
      "Food sharing history and location (if enabled).",
      "Browser info for improving your experience.",
    ],
  },
  {
    id: "03",
    title: "How We Use It",
    icon: <FaUserSecret className="text-emerald-500 text-2xl" />,
    content: [
      "To personalize your food-sharing experience.",
      "To send updates and respond to queries.",
      "To improve platform features securely.",
    ],
  },
  {
    id: "04",
    title: "Security Measures",
    icon: <FaLock className="text-emerald-500 text-2xl" />,
    content:
      "We use secure servers, data encryption, and strict access control to keep your information safe.",
  },
  {
    id: "05",
    title: "Policy Updates",
    icon: <FaSyncAlt className="text-emerald-500 text-2xl" />,
    content:
      "We'll notify you of any changes to our privacy policy through in-app messages or email. Continued use implies consent.",
  },
  {
    id: "06",
    title: "Contact Us",
    icon: <FaEnvelopeOpenText className="text-emerald-500 text-2xl" />,
    content: (
      <>
        Have questions? Email us at{" "}
        <a
          href="mailto:privacy@shareplate.org"
          className="text-emerald-600 underline font-medium"
        >
          privacy@shareplate.org
        </a>
        .
      </>
    ),
  },
];

const PrivacyPolicy = () => {
  return (
    <main className="w-full min-h-[90vh] bg-white flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full flex flex-col md:flex-row items-center px-4 md:px-12 lg:px-16 py-12">
        <div className="flex-1 flex flex-col items-start">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            <span className="text-gray-700">Privacy</span> Policy
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            We believe your data should be treated with care and respect. Here’s how we handle your information.
          </p>
          <div className="flex gap-4 mt-2">
            <span className="inline-flex items-center gap-2 text-emerald-600 font-bold"><FaShieldAlt /> Trust</span>
            <span className="inline-flex items-center gap-2 text-green-600 font-bold"><FaUserSecret /> Transparency</span>
            <span className="inline-flex items-center gap-2 text-yellow-500 font-bold"><FaLock /> Security</span>
          </div>
        </div>
        <div className="hidden md:flex flex-1 items-center justify-center">
          <img src={privacyImg} alt="Privacy" className="w-[300px] h-auto object-contain" />
        </div>
      </section>

      {/* Privacy Sections as Cards */}
      <section className="w-full max-w-5xl px-4 md:px-8 space-y-8 py-6">
        {sections.map((section, index) => (
          <div
            key={index}
            className="bg-emerald-50 rounded-2xl shadow border border-emerald-100 p-6 md:p-8 transition hover:shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              {section.icon}
              <h2 className="text-xl font-bold text-gray-800">{section.title}</h2>
            </div>
            {Array.isArray(section.content) ? (
              <ul className="list-disc pl-6 text-gray-700 text-sm space-y-2">
                {section.content.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700 text-sm leading-relaxed">{section.content}</p>
            )}
          </div>
        ))}
      </section>

      {/* Section Divider */}
      <div className="w-full max-w-5xl h-10 flex items-center justify-center">
        <div className="w-2/3 h-0.5 bg-gradient-to-r from-emerald-200 via-green-100 to-amber-100 rounded-full my-8" />
      </div>

      {/* Testimonial Block */}
      <section className="w-full max-w-4xl bg-gradient-to-br from-emerald-100 via-white to-green-50 rounded-2xl shadow p-8 mb-12 flex flex-col items-center">
        <blockquote className="italic text-lg md:text-2xl text-center text-gray-700 max-w-2xl mb-4">
          “At Shareplate, your privacy is not just a policy — it’s a promise.”
        </blockquote>
        <div className="text-emerald-700 font-bold">— Shareplate Team</div>
      </section>

      {/* CTA Footer */}
      <footer className="text-center pb-16 space-y-4">
        <p className="text-sm text-gray-500">
          By using Shareplate, you agree to this Privacy Policy.
        </p>
        <a
          href="/"
          className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold px-6 py-3 rounded-full transition-all shadow"
        >
          Back to Home
        </a>
      </footer>
    </main>
  );
};

export default PrivacyPolicy;
