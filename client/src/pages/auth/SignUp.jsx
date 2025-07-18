import { FiUser, FiMail, FiLock } from "react-icons/fi";
const SignUp = () => {
  return (
    <main className="min-h-screen w-full bg-white flex  justify-center px-4">
      <section className="w-full max-w-md p-8  space-y-8">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-400 bg-clip-text text-transparent">
            Create Account
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Join the movement. Share and reduce food waste.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          {/* Name */}
          <div className="relative">
            <FiUser className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-500" />
            <input
              type="text"
              placeholder="Full Name"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-400 focus:outline-none"
            />
          </div>

          {/* Email */}
          <div className="relative">
            <FiMail className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-500" />
            <input
              type="email"
              placeholder="Email Address"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-400 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div className="relative">
            <FiLock className="absolute left-3 top-1/2 -translate-y-1/2 text-emerald-500" />
            <input
              type="password"
              placeholder="Password"
              required
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-400 focus:outline-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-400  hover:bg-emerald-600 text-white py-3 rounded-lg font-semibold text-sm shadow transition"
          >
            Sign Up
          </button>
        </form>

        {/* Footer Link */}
        <p className="text-center text-sm text-gray-500">
          Already have an account?{" "}
          <a
            href="/login"
            className="text-emerald-600 font-medium hover:underline"
          >
            Log in
          </a>
        </p>
      </section>
    </main>
  );
};

export default SignUp;
