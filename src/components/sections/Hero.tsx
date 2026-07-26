import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import AnimatedBackground from "../common/AnimatedBackground";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaArrowDown,
} from "react-icons/fa";

import profile from "../../assets/images/profile.jpeg";

export default function Hero() {
  return (
    <section  id="home" className="relative min-h-screen flex items-center overflow-hidden">
        <AnimatedBackground />

  <div className="max-w-7xl mx-auto px-6 w-full">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Section */}
          <div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-sky-400 text-xl font-medium"
            >
              Hello 👋 I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-6xl lg:text-7xl font-extrabold mt-3 leading-tight"
            >
              Muthurajkumar
              
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-3xl text-slate-300 font-semibold h-12"
            >
              <TypeAnimation
                sequence={[
                  "Software Engineer",
                  2000,
                  "QA Engineer",
                  2000,
                  "Java Developer",
                  2000,                                
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mt-8 max-w-xl text-slate-400 text-lg leading-8"
            >
              Software Engineer with experience in QA Automation,
              Java, MySQL and modern web technologies. Currently
              learning React and Spring Boot while building scalable,
              user-focused applications.
            </motion.p>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-5">


<button className="rounded-xl border border-slate-700 bg-slate-900/40 px-8 py-3 font-semibold backdrop-blur-md transition-all duration-300 hover:border-sky-400 hover:-translate-y-1">
  Download Resume ↓
</button>

            </div>

            {/* Skills */}
            <div className="mt-10 flex flex-wrap gap-3">
              {[
                "Java",
                "React",
                "Spring Boot",
                "MySQL",
                "Selenium",
                "Git",
              ].map((skill) => (
                <span
                  key={skill}
                 className="rounded-full border border-slate-700 bg-slate-900/40 px-5 py-2 text-slate-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-sky-400 hover:text-sky-300 hover:shadow-lg hover:shadow-sky-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Social Icons */}
            <div className="mt-10 flex gap-6 text-2xl">

              <a
                href="https://github.com/muthurajkumar-y"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-400 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://linkedin.com/in/muthurajkumary"
                target="_blank"
                rel="noreferrer"
                className="hover:text-sky-400 transition"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:muthurajkumar.y@gmail.com"
                className="hover:text-sky-400 transition"
              >
                <FaEnvelope />
              </a>

            </div>

          </div>

          {/* Right Section */}
          <motion.div
            className="flex justify-center"
            animate={{ y: [0, -12, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-sky-500 blur-3xl opacity-30"></div>

              {/* Profile Image */}
              <img
  src={profile}
  alt="Muthurajkumar"
  className="relative h-80 w-80 rounded-full border-4 border-sky-400 object-cover transition-transform duration-500 hover:scale-105 lg:h-96 lg:w-96 shadow-[0_0_60px_rgba(14,165,233,0.45)]"
/>

            </div>
          </motion.div>

        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-slate-400"
        >
          <FaArrowDown className="mx-auto text-xl" />
          <p className="text-sm mt-2">Scroll Down</p>
        </motion.div>

      </div>
      </div>
    </section>
  );
}