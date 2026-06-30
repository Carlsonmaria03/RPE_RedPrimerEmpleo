import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import MissionVisionValues from "./components/sections/MissionVisionValues";
import HowItWorks from "./components/sections/HowItWorks";
//import Footer from "./components/layout/Footer";
import Benefits from "./components/sections/Benefits";
import Organization from "./components/sections/Organization";
import WhyRPE from "./components/sections/WhyRPE";

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
      {/*<Footer />*/}
    </>
  );
}

export default App;