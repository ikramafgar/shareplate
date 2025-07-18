import { FiUser, FiMail, FiMessageCircle, FiSend } from "react-icons/fi";

const ContactUs = () => {
  return (
    <main className="w-full min-h-screen bg-white flex items-center justify-center px-4">
      <section className="max-w-xl w-full flex flex-col gap-8 p-6 lg:p-10 bg-white">
        
        {/* Header & Description */}
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl font-semibold text-gray-600 mb-2 leading-tight tracking-tighter">
            We’d love to hear from you. Please fill out the form, and we’ll get back to you as soon as possible.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">

          {/* Name */}
          <div className="group transition">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-1">
              <FiUser className="text-emerald-500" /> Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-3 border border-gray-300 rounded-md text-sm transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 hover:border-gray-400 focus:scale-[1.01]"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Email */}
          <div className="group transition">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-1">
              <FiMail className="text-emerald-500" /> Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 border border-gray-300 rounded-md font-bold italic text-gray-500 text-sm transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 hover:border-gray-400 focus:scale-[1.01]"
              placeholder="john@example.com"
              required
            />
          </div>

          {/* Message */}
          <div className="group transition">
            <label className="flex items-center gap-2 text-sm font-bold text-gray-700 mb-1">
              <FiMessageCircle className="text-emerald-500" /> Message
            </label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md text-sm resize-none transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-emerald-500 focus:border-emerald-500 hover:border-gray-400 focus:scale-[1.01]"
              placeholder="Type your message..."
              required
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-10 py-3 rounded-md font-bold text-xl  hover:from-emerald-600 hover:to-green-600 transition duration-200 focus:outline-none active:scale-[0.98]"
          >
            <FiSend className="text-2xl" /> Send Message
          </button>
        </form>
      </section>
    </main>
  );
};

export default ContactUs;
