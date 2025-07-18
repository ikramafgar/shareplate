import { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

const FoodSafetyGuide = () => {
  const [activeTab, setActiveTab] = useState('storage');

  const safetyGuides = {
    storage: {
      title: "Proper Food Storage",
      icon: "🧊",
      items: [
        {
          icon: "🥩",
          title: "Store Meat Safely",
          content: "Keep raw meat on the bottom shelf of your fridge to avoid dripping. Use sealed containers to prevent cross-contamination.",
          tip: "Meat should be stored at 40°F (4°C) or below"
        },
        {
          icon: "❄️",
          title: "Freeze Wisely",
          content: "Label frozen foods with the date. Blanch vegetables before freezing. Most meats stay safe for 4–12 months.",
          tip: "Freeze at 0°F (-18°C) or lower"
        },
        {
          icon: "🧺",
          title: "Pantry Protection",
          content: "Use airtight containers. Store dry goods in cool, dark places. Keep flour/grains in fridge if storing long-term.",
          tip: "Ideal pantry temperature: 50-70°F (10-21°C)"
        },
        {
          icon: "🥚",
          title: "Egg Storage",
          content: "Store eggs in their original carton on a shelf rather than the door. They can be kept refrigerated for 3-5 weeks.",
          tip: "Don't wash eggs before storage"
        }
      ]
    },
    handling: {
      title: "Safe Food Handling",
      icon: "✋",
      items: [
        {
          icon: "🧼",
          title: "Clean Surfaces Often",
          content: "Always sanitize countertops before and after cooking. Use different cutting boards for meat and produce.",
          tip: "Use 1 tbsp bleach per gallon of water for sanitizing"
        },
        {
          icon: "✋",
          title: "Wash Hands Right",
          content: "Scrub hands for 20 seconds with warm soapy water before prepping food and after handling raw ingredients.",
          tip: "Sing 'Happy Birthday' twice while washing"
        },
        {
          icon: "❌",
          title: "No Room Temp Thawing",
          content: "Use the fridge (24 hrs per 2kg), cold water bath (change every 30 min), or microwave (cook immediately).",
          tip: "Never refreeze thawed food without cooking first"
        },
        {
          icon: "🔪",
          title: "Knife Safety",
          content: "Keep knives sharp (dull knives slip more). Cut away from your body. Store knives properly, not loose in drawers.",
          tip: "Use a damp cloth under cutting board to prevent slipping"
        }
      ]
    },
    temperatures: {
      title: "Cooking Temperatures",
      icon: "🌡️",
      items: [
        {
          icon: "🍗",
          title: "Poultry - 165°F (74°C)",
          content: "Ensure internal temperature hits 165°F. Check thickest parts of the meat — not near the bone.",
          tip: "Let rest 3 minutes before carving"
        },
        {
          icon: "🥩",
          title: "Ground Meats - 160°F (71°C)",
          content: "Color can mislead — always use a food thermometer to check ground beef, pork, or lamb.",
          tip: "Insert thermometer sideways into patties"
        },
        {
          icon: "🍲",
          title: "Leftovers - Reheat to 165°F",
          content: "Bring soups to a rolling boil. Never leave food unrefrigerated for over 2 hours (1 hour if above 90°F/32°C).",
          tip: "Stir foods when microwaving for even heating"
        },
        {
          icon: "🐟",
          title: "Fish - 145°F (63°C)",
          content: "Fish should flake easily with a fork. For raw fish dishes, freeze first to kill parasites (-4°F/-20°C for 7 days).",
          tip: "Shrimp and lobster turn red when properly cooked"
        }
      ]
    },
    prevention: {
      title: "Illness Prevention",
      icon: "🛡️",
      items: [
        {
          icon: "🚫",
          title: "Avoid Cross-Contamination",
          content: "Use separate utensils for raw and cooked foods. Never reuse marinades unless boiled. Keep raw foods separate in grocery bags.",
          tip: "Color-code cutting boards (red for meat, green for produce)"
        },
        {
          icon: "🕒",
          title: "Two-Hour Rule",
          content: "Refrigerate perishables within 2 hours of cooking. Discard any food left out longer than 2 hours (1 hour in hot weather).",
          tip: "Divide large portions into shallow containers for faster cooling"
        },
        {
          icon: "🤢",
          title: "Food Poisoning Signs",
          content: "Nausea, vomiting, diarrhea, fever. Symptoms may appear 1 hour to 28 days after eating contaminated food.",
          tip: "High-risk groups: elderly, pregnant, young children, immunocompromised"
        },
        {
          icon: "🧽",
          title: "Sponge Safety",
          content: "Microwave damp sponges for 1 minute daily or run through dishwasher. Replace every 2 weeks.",
          tip: "Use paper towels for cleaning up raw meat juices"
        }
      ]
    }
  };

  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-emerald-100 text-emerald-700 px-5 py-1.5 rounded-full text-sm font-semibold tracking-wide mb-3">
            Kitchen Safety Essentials
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight">
            Food Safety <span className="bg-gradient-to-r from-emerald-500 via-green-400 to-emerald-400 bg-clip-text text-transparent">Guidelines</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Protect your health with smart, science-backed food safety practices recommended by FDA and WHO.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-14">
          {Object.keys(safetyGuides).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-3 rounded-xl font-medium text-sm flex items-center gap-2 transition-all duration-300 shadow-sm
              ${activeTab === tab
                ? 'bg-gradient-to-r from-emerald-500 to-green-500 text-white shadow-lg ring-2 ring-emerald-300'
                : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:ring-1 hover:ring-emerald-200'}`}
            >
              <span className="text-lg">{safetyGuides[tab].icon}</span>
              {safetyGuides[tab].title}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-3xl border border-gray-200 shadow-xl overflow-hidden">
          <AnimatePresence mode="wait">
            <Motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="p-6 sm:p-10"
            >
              <div className="flex items-center mb-8">
                <span className="text-3xl mr-3">{safetyGuides[activeTab].icon}</span>
                <h3 className="text-2xl sm:text-3xl font-bold text-gray-800">
                  {safetyGuides[activeTab].title}
                </h3>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                {safetyGuides[activeTab].items.map((item, idx) => (
                  <Motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-gray-50 border border-gray-200 hover:border-emerald-400 hover:shadow-md transition-all duration-300 rounded-2xl p-6"
                  >
                    <div className="flex gap-4 items-start">
                      <div className="text-2xl p-2 bg-white border border-gray-200 rounded-lg shadow-sm">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800 mb-1">{item.title}</h4>
                        <p className="text-gray-600 text-sm mb-3">{item.content}</p>
                        {item.tip && (
                          <div className="bg-emerald-50 border border-emerald-200 rounded-lg px-3 py-2">
                            <p className="text-sm text-emerald-700 font-medium">
                              <span className="font-bold">Pro Tip:</span> {item.tip}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </Motion.div>
                ))}
              </div>
            </Motion.div>
          </AnimatePresence>
        </div>

        {/* Resources Section */}
        <div className="mt-20 rounded-3xl border border-emerald-100 bg-gradient-to-r from-emerald-50 to-white p-8 sm:p-10 text-center shadow-inner">
          <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-3">
            Want to Learn More?
          </h3>
          <p className="text-gray-600 mb-6">
            Visit trusted health organizations for more in-depth food safety knowledge:
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://www.fda.gov/food"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white border border-gray-200 hover:border-emerald-300 text-gray-800 font-medium rounded-xl transition hover:shadow"
            >
              FDA Food Safety
            </a>
            <a
              href="https://www.who.int/news-room/fact-sheets/detail/food-safety"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white border border-gray-200 hover:border-emerald-300 text-gray-800 font-medium rounded-xl transition hover:shadow"
            >
              WHO Food Safety
            </a>
            <a
              href="https://www.foodsafety.gov"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 bg-white border border-gray-200 hover:border-emerald-300 text-gray-800 font-medium rounded-xl transition hover:shadow"
            >
              Foodsafety.gov
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodSafetyGuide;
