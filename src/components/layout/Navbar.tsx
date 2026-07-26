import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });

    setMobileOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-xl">

          <div className="flex items-center justify-between px-6 py-4">

            <motion.h1
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold cursor-pointer"
              onClick={() => scrollTo("home")}
            >
              <span className="text-white">Personal Portfolio</span>
              
            </motion.h1>

            {/* Desktop Menu */}

            <nav className="hidden md:flex gap-8">

              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className={`transition ${
                    active === item.id
                      ? "text-sky-400"
                      : "text-slate-300 hover:text-sky-400"
                  }`}
                >
                  {item.label}
                </button>
              ))}

            </nav>

            {/* Mobile */}

            <button
              className="md:hidden text-3xl"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <HiX /> : <HiMenu />}
            </button>

          </div>

        </div>

        {/* Mobile Menu */}

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-3 rounded-2xl border border-white/10 bg-slate-900/80 backdrop-blur-xl md:hidden"
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className="block w-full px-6 py-4 text-left hover:bg-slate-800"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}

      </div>
    </header>
  );
}