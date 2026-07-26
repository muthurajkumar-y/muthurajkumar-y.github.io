import { motion } from "framer-motion";
import {
  FaArrowUp,
  FaEnvelope,
  FaGithub,
  FaHeart,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  return (
    <footer className="relative border-t border-white/10 bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold">
            Thanks for visiting!
          </h2>

          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            I'm always interested in building quality software,
            learning new technologies, and collaborating on exciting
            projects.
          </p>

          <div className="flex justify-center gap-6 mt-10 text-2xl">

            <a
              href="mailto:muthurajkumar.y.com"
              aria-label="Email"
              className="transition hover:text-sky-400"
            >
              <FaEnvelope />
            </a>

            <a
              href="https://github.com/muthurajkumar-y"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="transition hover:text-sky-400"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/muthurajkumary"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="transition hover:text-sky-400"
            >
              <FaLinkedin />
            </a>

          </div>

          <button
            onClick={scrollToTop}
            className="mt-12 inline-flex h-14 w-14 items-center justify-center rounded-full bg-sky-500 text-white transition hover:scale-110 hover:bg-sky-600"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </button>

          <div className="mt-12 border-t border-white/10 pt-8">
            <p className="text-sm text-slate-500 flex justify-center items-center gap-2 flex-wrap">
              © {new Date().getFullYear()} Muthurajkumar.
              Built with React, TypeScript & Tailwind CSS
              <FaHeart className="text-red-500" />
            </p>
          </div>

        </motion.div>

      </div>
    </footer>
  );
}