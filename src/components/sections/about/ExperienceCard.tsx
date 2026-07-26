import { motion } from "framer-motion";

type Experience = {
  year: string;
  title: string;
  company: string;
  location: string;
  description: string;
  technologies: string[];
  icon: React.ReactNode;
};

type Props = {
  item: Experience;
  align: "left" | "right";
  index: number;
};

export default function ExperienceCard({
  item,
  align,
  index,
}: Props) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: align === "left" ? -80 : 80,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.2,
      }}
      viewport={{ once: true }}
      className="relative flex items-center mb-24"
    >
      {/* LEFT */}

      <div className={`w-1/2 ${align === "left" ? "pr-14" : ""}`}>
        {align === "left" && (
          <Card item={item} />
        )}
      </div>

      {/* Timeline Node */}

      <div className="absolute left-1/2 -translate-x-1/2 z-10">
        <div className="w-16 h-16 rounded-full border-4 border-sky-500 bg-slate-950 flex items-center justify-center text-2xl shadow-[0_0_35px_rgba(14,165,233,.45)]">
          {item.icon}
        </div>
      </div>

      {/* RIGHT */}

      <div className={`w-1/2 ${align === "right" ? "pl-14" : ""}`}>
        {align === "right" && (
          <Card item={item} />
        )}
      </div>
    </motion.div>
  );
}

function Card({ item }: { item: Experience }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-sky-400">

      <div className="flex justify-between items-center">
        <span className="rounded-full bg-sky-500/20 px-4 py-1 text-sm text-sky-300">
          {item.year}
        </span>

        <div className="text-3xl text-sky-400">
          {item.icon}
        </div>
      </div>

      <h3 className="mt-6 text-2xl font-bold">
        {item.title}
      </h3>

      <p className="mt-1 text-sky-400">
        {item.company}
      </p>

      <p className="mt-1 text-sm text-slate-500">
        📍 {item.location}
      </p>

      <p className="mt-6 leading-8 text-slate-400">
        {item.description}
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        {item.technologies.map((tech) => (
          <span
            key={tech}
            className="rounded-full border border-slate-700 bg-slate-800 px-4 py-2 text-sm transition hover:border-sky-400"
          >
            {tech}
          </span>
        ))}
      </div>

    </div>
  );
}