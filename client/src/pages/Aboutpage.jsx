import {
  FaLeaf,
  FaHandHoldingHeart,
  FaRegSmile,
  FaGlobe,
  FaHandsHelping,
  FaRecycle,
} from "react-icons/fa";
import ikramImg from "../assets/ikram.jpg";
import atifImg from "../assets/IMG_0308.jpg";
import about from "../assets/about5.png";
import abid from "../assets/abid.jpg";

const team = [
  { name: "Ikram Afgar", role: "Founder & CEO", img: ikramImg },
  { name: "Supraat Ostaz", role: "Operations Lead", img: atifImg },
  { name: "Laparrro", role: "Tech Lead", img: abid },
  { name: "Bakhti Rahman", role: "Community Manager", img: ikramImg },
];

const values = [
  {
    icon: <FaHandsHelping className="text-emerald-500 text-2xl" />,
    label: "Collaboration",
  },
  {
    icon: <FaRecycle className="text-green-500 text-2xl" />,
    label: "Sustainability",
  },
  { icon: <FaGlobe className="text-amber-500 text-2xl" />, label: "Community" },
  {
    icon: <FaRegSmile className="text-yellow-500 text-2xl" />,
    label: "Compassion",
  },
];

const Aboutpage = () => {
  return (
    <main className="w-full min-h-[90vh] bg-white flex flex-col items-center">
      {/* Hero/About Section */}
      <section className="w-full  flex flex-col md:flex-row items-center   px-4 md:px-12 lg:px-16">
        <div className="flex-1 flex flex-col items-start">
          <h1 className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-400 bg-clip-text text-transparent mb-4">
            {" "}
            <span className="text-gray-700">About</span> Shareplate
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6 ">
            <span className="text-emerald-600 font-semibold">Shareplate</span>{" "}
            connects communities to reduce food waste and spread kindness—one
            plate at a time. Together, we rescue meals, restore hope, and build
            a more compassionate future.
          </p>
          <div className="flex gap-4 mt-2">
            <span className="inline-flex items-center gap-2 text-green-700 font-bold">
              <FaHandHoldingHeart /> Kindness
            </span>
            <span className="inline-flex items-center gap-2 text-emerald-500 font-bold">
              <FaLeaf /> Sustainability
            </span>
            <span className="inline-flex items-center gap-2 text-yellow-500 font-bold">
              <FaRegSmile /> Impact
            </span>
          </div>
        </div>
        <div className=" hidden md:flex flex-1 items-center justify-center mr-5 sm-hidden">
          <img
            src={about}
            alt="Shareplate"
            className=" w-200 h-100  object-contain "
          />
        </div>
      </section>

      {/* Our Values Row */}
      <section className="w-full max-w-5xl flex flex-wrap items-center justify-center gap-8 py-6 px-4 md:px-8 bg-emerald-50 rounded-2xl mb-8">
        {values.map((val) => (
          <div key={val.label} className="flex flex-col items-center">
            {val.icon}
            <span className="mt-2 text-emerald-900 font-semibold text-sm md:text-base">
              {val.label}
            </span>
          </div>
        ))}
      </section>

      {/* Mission & Vision Section */}
      <section className="w-full max-w-5xl flex flex-col md:flex-row gap-8 py-8 px-4 md:px-8 bg-white">
        <div className="flex-1 bg-emerald-50 rounded-2xl shadow p-8 flex flex-col items-center border border-emerald-100">
          <h2 className="text-2xl font-bold text-emerald-700 mb-2">
            Our Mission
          </h2>
          <p className="text-gray-700 text-center">
            To connect donors, volunteers, and recipients, making it easy to
            share surplus food and reduce hunger in our communities.
          </p>
        </div>
        <div className="flex-1 bg-green-50 rounded-2xl shadow p-8 flex flex-col items-center border border-green-100">
          <h2 className="text-2xl font-bold text-green-700 mb-2">Our Vision</h2>
          <p className="text-gray-700 text-center">
            A world where no food goes to waste and every plate brings hope to
            someone in need.
          </p>
        </div>
      </section>

      {/* Section Divider */}
      <div className="w-full max-w-5xl h-10 flex items-center justify-center">
        <div className="w-2/3 h-0.5 bg-gradient-to-r from-emerald-200 via-green-100 to-amber-100 rounded-full my-8" />
      </div>

      {/* Why Shareplate / Testimonial Section */}
      <section className="w-full max-w-4xl bg-gradient-to-br from-emerald-100 via-white to-green-50 rounded-2xl shadow p-8 mb-12 flex flex-col items-center">
        <blockquote className="italic text-lg md:text-2xl text-center text-gray-700 max-w-2xl mb-4">
          “Shareplate helped us feed hundreds in our community. It’s more than a
          platform—it’s a movement of kindness and hope.”
        </blockquote>
        <div className="text-emerald-700 font-bold">— Community Volunteer</div>
      </section>

      {/* Section Divider */}
      <div className="w-full max-w-5xl h-10 flex items-center justify-center">
        <div className="w-2/3 h-0.5 bg-gradient-to-r from-emerald-200 via-green-100 to-amber-100 rounded-full my-8" />
      </div>

      {/* Team Section */}
      <section className="w-full max-w-5xl py-12 px-4 md:px-8">
        <h2 className="text-3xl font-extrabold text-center mb-10 bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
          Meet the Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="flex flex-col items-center bg-white rounded-2xl shadow p-6 border border-emerald-50 hover:shadow-xl hover:scale-105 transition-transform duration-200"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-20 h-20 rounded-full object-cover mb-4 border-4 border-emerald-100"
              />
              <div className="text-lg font-bold text-green-700">
                {member.name}
              </div>
              <div className="text-emerald-500 text-sm font-medium">
                {member.role}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Aboutpage;
