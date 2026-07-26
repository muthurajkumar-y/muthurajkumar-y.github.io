import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaCode,
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

export default function AboutStats() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
    >
      {stats.map((item) => (
        <motion.div
          key={item.label}
          whileHover={{
            y: -10,
            scale: 1.03,
          }}
          className="rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl p-8 text-center"
        >
          <div className="text-4xl text-sky-400 flex justify-center mb-5">
            {item.icon}
          </div>

          <h3 className="text-4xl font-bold">
            {item.value}
          </h3>

          <p className="mt-3 text-slate-400">
            {item.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
}