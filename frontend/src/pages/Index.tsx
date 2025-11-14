import Navbar from "../sections/Navbar";
import Hero from "../sections/Hero";
import Features from "@/sections/Features";
import HowItWorks from "@/sections/HowItWorks";
import TryIt from "@/sections/TryIt";

const Index = () => {
  return (
    <div className="bg-[#060817] min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <TryIt />
    </div>
  );
};

export default Index;
