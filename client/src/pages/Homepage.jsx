import Hero from "../components/Hero"
import HowItWorks from "../components/HowItWorks"
import CallToAction from "../components/CallToAction"
import FoodWasteFacts from "../components/FoodWasteFacts"

const Homepage = () => {
  return (
    <div className="bg-background">
      <Hero />
      <FoodWasteFacts />
      <HowItWorks />
      <CallToAction />
    
    </div>
  )
}           

export default Homepage