import AboutIntro from "./AboutIntro";
import AboutStats from "./AboutStats";
import ExperienceTimeline from "./ExperienceTimeline";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-20 w-72 h-72 rounded-full bg-sky-500/10 blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-20 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto">

        <AboutIntro />

        <AboutStats />

        <ExperienceTimeline />

      </div>
    </section>
  );
}