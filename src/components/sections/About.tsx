import { motion } from "framer-motion";
  import { experiences } from "../../data/experience";
import {
  FaCode,
  FaLaptopCode,
  FaDatabase,
  FaBug,
} from "react-icons/fa";

const stats = [
  {
    icon: <FaLaptopCode />,
    value: "2+",
    label: "Years Experience",
  },
  {
    icon: <FaCode />,
    value: "20+",
    label: "Projects",
  },
  {
    icon: <FaDatabase />,
    value: "15+",
    label: "Technologies",
  },
  {
    icon: <FaBug />,
    value: "1000+",
    label: "Test Cases",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sky-400 uppercase tracking-widest">
            About Me
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Building Reliable Software
          </h2>

          <div className="w-24 h-1 bg-sky-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-semibold mb-8">
              Who am I?
            </h3>

            <p className="text-slate-400 leading-8 text-lg">
              I'm a Software Engineer passionate about building
              reliable applications and improving software quality
              through automation.
            </p>

            <p className="mt-6 text-slate-400 leading-8 text-lg">
              My primary expertise is in Java, Selenium,
              MySQL, REST APIs, and modern web development.
              I enjoy solving complex problems, learning new
              technologies, and contributing to clean,
              maintainable software.
            </p>

            <p className="mt-6 text-slate-400 leading-8 text-lg">
              Currently I'm expanding my skills in React,
              Spring Boot, Docker, and cloud-native
              development while building real-world projects.
            </p>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((item) => (
              <motion.div
                key={item.label}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-lg p-8 text-center shadow-lg"
              >
                <div className="text-4xl text-sky-400 mb-5 flex justify-center">
                  {item.icon}
                </div>

                <h3 className="text-4xl font-bold">
                  {item.value}
                </h3>

                <p className="text-slate-400 mt-3">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>

        </div>

      </div>
    
      <div className="mt-32">

  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="text-center mb-20"
  >
    <p className="text-sky-400 uppercase tracking-[0.3em]">
      Experience
    </p>

    <h2 className="text-5xl font-bold mt-3">
      Career Journey
    </h2>

    <p className="text-slate-400 mt-5">
      My professional growth over the years.
    </p>
  </motion.div>

  <div className="relative max-w-6xl mx-auto">

    {/* Timeline Line */}
    <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-gradient-to-b from-sky-500 via-cyan-400 to-sky-500"></div>

    {experiences.map((item, index) => (

      <motion.div
        key={item.title}
        initial={{
          opacity: 0,
          x: index % 2 === 0 ? -80 : 80,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{ once: true }}
        transition={{
          duration: .7,
        }}
        className="relative flex items-center mb-24"
      >

        {/* LEFT */}

        <div
          className={`w-1/2 ${
            index % 2 === 0
              ? "pr-14"
              : ""
          }`}
        >

          {index % 2 === 0 && (

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-xl p-8 hover:scale-[1.02] transition">

              <div className="flex justify-between items-center">

                <span className="px-4 py-1 rounded-full bg-sky-500/20 text-sky-300 text-sm">
                  {item.year}
                </span>

                <div className="text-sky-400 text-3xl">
                  {item.icon}
                </div>

              </div>

              <h3 className="text-2xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="text-sky-400 mt-1">
                {item.company}
              </p>

              <p className="text-slate-500 text-sm mt-1">
                📍 {item.location}
              </p>

              <p className="text-slate-400 mt-6 leading-8">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-8">

                {item.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm hover:border-sky-400 transition"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

          )}

        </div>

        {/* Timeline Node */}

        <div className="absolute left-1/2 -translate-x-1/2">

          <div className="w-16 h-16 rounded-full bg-slate-950 border-4 border-sky-500 flex items-center justify-center text-2xl shadow-[0_0_35px_rgba(14,165,233,.45)]">
            {item.icon}
          </div>

        </div>

        {/* RIGHT */}

        <div
          className={`w-1/2 ${
            index % 2 !== 0
              ? "pl-14"
              : ""
          }`}
        >

          {index % 2 !== 0 && (

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-xl p-8 hover:scale-[1.02] transition">

              <div className="flex justify-between items-center">

                <span className="px-4 py-1 rounded-full bg-sky-500/20 text-sky-300 text-sm">
                  {item.year}
                </span>

                <div className="text-sky-400 text-3xl">
                  {item.icon}
                </div>

              </div>

              <h3 className="text-2xl font-bold mt-6">
                {item.title}
              </h3>

              <p className="text-sky-400 mt-1">
                {item.company}
              </p>

              <p className="text-slate-500 text-sm mt-1">
                📍 {item.location}
              </p>

              <p className="text-slate-400 mt-6 leading-8">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-3 mt-8">

                {item.technologies.map((tech) => (

                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full bg-slate-800 border border-slate-700 text-sm hover:border-sky-400 transition"
                  >
                    {tech}
                  </span>

                ))}

              </div>

            </div>

          )}

        </div>

      </motion.div>

    ))}

  </div>

</div>
    </section>
    
  );
  
}