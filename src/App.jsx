import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import MissionVisionValues from "./components/sections/MissionVisionValues";
import HowItWorks from "./components/sections/HowItWorks";
import Benefits from "./components/sections/Benefits";
import Organization from "./components/sections/Organization";
import WhyRPE from "./components/sections/WhyRPE";
import CTA from "./components/sections/CTA";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <MissionVisionValues />
      <HowItWorks />
      <Benefits />
      <WhyRPE />
      <Organization />
      <CTA />
      <Footer />
    </>
  );
}

export default App;