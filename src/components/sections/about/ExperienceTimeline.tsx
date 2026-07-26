import ExperienceCard from "./ExperienceCard";
import { experiences } from "../../../data/experience";

export default function ExperienceTimeline() {
  return (
    <div className="mt-32">

      <div className="text-center mb-20">

        <p className="uppercase tracking-[0.3em] text-sky-400">
          Experience
        </p>

        <h2 className="mt-3 text-5xl font-bold">
          Career Journey
        </h2>

        <p className="mt-5 text-slate-400">
          My professional growth over the years.
        </p>

      </div>

      <div className="relative max-w-6xl mx-auto">

        <div className="absolute left-1/2 top-0 h-full w-[3px] -translate-x-1/2 bg-gradient-to-b from-sky-500 via-cyan-400 to-sky-500" />

        {experiences.map((item, index) => (
          <ExperienceCard
            key={item.title}
            item={item}
            index={index}
            align={index % 2 === 0 ? "left" : "right"}
          />
        ))}

      </div>

    </div>
  );
}