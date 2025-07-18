import { motion as Motion } from 'framer-motion';

const steps = [
  {
    title: 'Donate Food',
    desc: 'Share surplus food by posting details on our platform.'
  },
  {
    title: 'Pickup & Delivery',
    desc: 'Volunteers pick up and deliver food to those in need.'
  },
  {
    title: 'Spread Smiles',
    desc: 'Help reduce food wastage and make a difference.'
  },
  {
    title: 'Track Donations',
    desc: 'Monitor the status of your donations and see their impact.'
  },
  
];

// ✅ Reusable step card component  
const StepCard = ({ index, title, desc }) => (
  <Motion.div
    initial={{ opacity: 0, y: 40, scale: 0.95 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    transition={{ duration: 0.7, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="flex flex-col items-center bg-white rounded-2xl shadow-xl p-4 w-52 h-64 border-2 border-emerald-100 relative z-10"
   
  >
    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-gradient-to-br from-amber-300 via-green-200 to-emerald-200 mb-4 shadow-lg border-4 border-white">
      <span className="text-3xl font-extrabold text-emerald-500 drop-shadow-lg">
        {`0${index + 1}`}
      </span>
    </div>
    <h3 className="text-xl font-semibold mb-2 text-emerald-700 text-center tracking-tight leading-snug">
      {title}
    </h3>
    <p className="text-base text-gray-600 text-center leading-normal font-medium">
      {desc}
    </p>
    <div className="absolute inset-0 pointer-events-none rounded-2xl opacity-10 bg-gradient-to-br from-amber-200 via-green-100 to-emerald-100"></div>
  </Motion.div>
);

const HowItWorks = () => {
  return (
    <section className="relative min-h-[70vh] w-full flex flex-col items-center justify-center px-4 py-20 bg-white overflow-hidden">
      {/* Decorative background shape */}
      <div className="absolute -top-32 -right-32 w-[400px] h-[400px] bg-gradient-to-br from-amber-200 via-green-200 to-emerald-100 rounded-full blur-3xl opacity-40 z-0"></div>

      <div className="w-full max-w-6xl flex flex-col items-center z-10">
        <h2 className="text-5xl md:text-7xl font-extrabold text-center tracking-tight leading-tight mb-6 bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-400 bg-clip-text text-transparent relative">
          How It Works
          <span className="block text-2xl md:text-4xl font-bold text-gray-700 mt-2">
            Complete Flow to Make a Difference
          </span>
        </h2>

        <p className="text-lg md:text-xl text-gray-700 text-center mb-12 leading-relaxed tracking-tight max-w-2xl">
          <span className="text-emerald-600 font-semibold">Get involved</span> and help us fight food waste, one meal at a time.<br className="hidden md:block" />
          <span className="text-emerald-600 font-semibold">Your actions</span> can bring smiles and hope to many.
        </p>

        <div className="w-full flex flex-wrap items-center justify-center gap-8 relative">
          {steps.map((step, idx) => (
            <StepCard key={step.title} index={idx} {...step} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
