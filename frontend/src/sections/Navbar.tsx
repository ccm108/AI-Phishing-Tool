import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#features", label: "Features" },
    { href: "#instructions", label: "How It Works" },
    { href: "#scan", label: "Try It" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-[#060817] z-50 border-b border-[#00FF00]/20">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Animated Title */}
          <motion.h1
            className="text-xl md:text-2xl font-bold text-[#00FF00] font-['Fira_Code'] border-r-2 border-[#00FF00] pr-2 overflow-hidden whitespace-nowrap"
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ duration: 2, ease: "linear" }}
          >
            AI Phishing Detector
          </motion.h1>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-[#00FF00] hover:text-[#00CC00] transition-colors duration-300 font-['Fira_Code'] relative group"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#00FF00] group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-[#00FF00] hover:text-[#00CC00] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden mt-4 pt-4 border-t border-[#00FF00]/20"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-[#00FF00] hover:text-[#00CC00] transition-colors duration-300 font-['Fira_Code'] text-center py-2"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Navbar;
