import { motion as Motion } from "framer-motion";

const facts = [
  {
    heading: "Global Crisis",
    text: `Around **1.3 billion tons of food** is wasted globally each year — nearly one-third of all food produced. This staggering waste could feed up to **2 billion people**, yet hunger remains a daily reality for millions.`,
    accent: "blue",
    image: "../src/assets/global-crises.svg",
  },
  {
    heading: "Environmental Impact",
    text: `Food waste is responsible for about **8–10% of global greenhouse gas emissions**. If it were a country, it would be the **third-largest emitter** after the U.S. and China.`,
    accent: "green",
    image: "../src/assets/environment.svg",
  },
  {
    heading: "Pakistan's Reality",
    text: `In Pakistan, nearly **36 million tons of food** go to waste annually — almost **40% of all production**. This occurs while **over 20% of the population** faces food insecurity.`,
    accent: "amber",
    image: "../src/assets/pakistan.svg",
  },
  {
    heading: "Household Waste",
    text: `An estimated **60–65%** of Pakistan's food waste happens at home due to overbuying, poor storage, and cultural habits around excess. **Smarter consumption starts in our kitchens.**`,
    accent: "purple",
    image: "../src/assets/kitchen-waste.svg",
  },
  {
    heading: "Economic Loss",
    text: `Globally, food waste costs the world about **$1 trillion USD every year**. In Pakistan, it translates to massive financial losses for farmers, households, and the economy.`,
    accent: "emerald",
    image: "../src/assets/expensis.svg",
  },
  {
    heading: "Social Injustice",
    text: `Food waste isn't just an environmental issue — it's a **moral dilemma**. While some throw away edible food, others suffer. This imbalance demands urgent attention.`,
    accent: "red",
    image: "../src/assets/injustice.svg",
  },
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const getColor = (accent) => {
  const map = {
    blue: "text-blue-600",
    green: "text-green-600",
    amber: "text-amber-600",
    purple: "text-purple-600",
    emerald: "text-emerald-600",
    red: "text-red-600",
  };
  return map[accent] || "text-emerald-600";
};

const FoodWasteFacts = () => {
  return (
    <section className="bg-white px-6 md:px-20 py-20">
      <div className="max-w-6xl mx-auto">
        <Motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-400 bg-clip-text text-transparent leading-tight mb-4">
            Rethinking Food Waste
            {/* <br className="hidden md:block" /> */}
          </h2>
          <span className="text-4xl md:text-5xl font-extrabold text-gray-700">
            A Global and Local Emergency
          </span>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto tracking-tighter">
            The stark reality of food waste and its far-reaching consequences
          </p>
        </Motion.div>

        <div className="space-y-28">
          {facts.map(({ heading, text, accent, image }, index) => {
            const isEven = index % 2 === 0;
            const accentColor = getColor(accent);

            return (
              <Motion.article
                key={index}
                className={`flex flex-col md:flex-row ${
                  isEven ? "md:flex-row" : "md:flex-row-reverse"
                } gap-10 items-center`}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={fadeIn}
              >
                {/* Text */}
                <div className="md:w-1/2">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 border-l-4 pl-4 border-emerald-300 hover:border-b-4 pb-2 hover:border-emerald-300">
                    {heading}
                  </h3>
                  <p className="text-gray-700 text-base md:text-lg leading-relaxed">
                    {text.split("**").map((part, i) =>
                      i % 2 === 0 ? (
                        part
                      ) : (
                        <strong
                          key={i}
                          className={`${accentColor} font-semibold`}
                        >
                          {part}
                        </strong>
                      )
                    )}
                  </p>
                </div>

                {/* Image */}
                <div className="md:w-1/2">
                  <img
                    src={image}
                    alt={heading}
                    className="w-full max-w-sm mx-auto rounded-xl"
                  />
                </div>
              </Motion.article>
            );
          })}
        </div>

        <Motion.div
          className="mt-28 pt-12 border-t border-gray-100 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Combating food waste isn't just about saving food — it's about
            saving lives, protecting the planet, and restoring balance.
            <br />
            <span className="font-semibold text-emerald-600">
              The solution begins with awareness and collective action.
            </span>
          </p>
        </Motion.div>
      </div>
    </section>
  );
};

export default FoodWasteFacts;
