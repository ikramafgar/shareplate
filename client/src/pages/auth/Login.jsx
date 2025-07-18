import { FiMail, FiLock } from "react-icons/fi";
import { SiSimplelogin } from "react-icons/si";

const Login = () => {
  return (
    <main className="min-h-screen w-full bg-white flex  justify-center px-4">
      <section className="w-full max-w-md p-8  space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-400 bg-clip-text text-transparent">
            Welcome Back
          </h1>
          <p className="text-sm text-gray-500 mt-1">
            Login to your account and continue where you left off.
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
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

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full flex justify-center items-center gap-3  bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-400  hover:bg-emerald-600 text-white py-3 rounded-lg font-semibold text-sm shadow transition"
          >
            <SiSimplelogin className="text-2xl" /> Login
          </button>
        </form>
        {/* Footer Link */}
        <p className="text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <a
            href="/signup"
            className="text-emerald-600 font-medium hover:underline"
          >
            Sign up
          </a>
        </p>
      </section>
    </main>
  );
};

export default Login;
