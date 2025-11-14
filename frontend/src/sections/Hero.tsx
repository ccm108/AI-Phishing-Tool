import { motion } from "framer-motion";
import { Shield, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center bg-[#060817] text-[#00FF00] px-4 pt-20 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('/hacker.png')` }}
    >
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Terminal-style badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-2 border border-[#00FF00] rounded-md font-['Fira_Code'] text-sm"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Shield size={16} />
          <span className="animate-pulse">SYSTEM ONLINE</span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-bold font-['Fira_Code'] leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Protect Your Inbox
        </motion.h1>

        {/* Typewriter subtitle */}
        <motion.div
          className="text-xl md:text-3xl font-['Fira_Code'] h-12 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <motion.span
            className="border-r-2 border-[#00FF00] pr-2 overflow-hidden whitespace-nowrap"
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{
              duration: 3,
              ease: "linear",
              delay: 0.8,
            }}
          >
            with AI-Powered Phishing Detection
          </motion.span>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-base md:text-lg text-[#00FF00]/80 font-['Fira_Code'] max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          &gt;_ Advanced machine learning algorithms scan emails in real-time to
          detect phishing attempts, malicious links, and suspicious patterns.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <a
            href="#scan"
            className="inline-block px-8 py-4 bg-transparent border-2 border-[#00FF00] text-[#00FF00] font-['Fira_Code'] font-bold rounded-md hover:bg-[#00FF00] hover:text-[#060817] transition-all duration-300 shadow-[0_0_20px_rgba(0,255,0,0.3)] hover:shadow-[0_0_30px_rgba(0,255,0,0.6)]"
          >
            TRY IT NOW &gt;_
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 2.5 },
            y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" },
          }}
        >
          <ChevronDown className="text-[#00FF00] animate-pulse" size={32} />
        </motion.div>
      </div>

      {/* Terminal grid background effect */}
      <div
        className="fixed inset-0 -z-10 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(#00FF00 1px, transparent 1px),
            linear-gradient(90deg, #00FF00 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </section>
  );
};

export default Hero;
