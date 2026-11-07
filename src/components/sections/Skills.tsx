import type { ReactNode } from "react";
import {
  FaCode,
  FaReact,
  FaDatabase,
  FaDocker,
  FaServer,
} from "react-icons/fa";

const skillGroups = [
  {
    title: "Core Backend",
    icon: <FaServer />, 
    skills: ["Java", "Spring", "Spring Boot", "REST APIs", "JPA", "Hibernate"],
  },
  {
    title: "Frontend",
    icon: <FaReact />,
    skills: ["React", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    title: "Data & Integration",
    icon: <FaDatabase />,
    skills: ["MySQL", "Redis", "MongoDB", "SQL", "Selenium", "Git"],
  },
  {
    title: "DevOps & Tools",
    icon: <FaDocker />,
    skills: ["Docker", "Kafka", "CI/CD", "Postman", "Apache Tomcat", "Maven"],
  },
];

const skillIcons: Record<string, ReactNode> = {
  Java: <FaCode />,
  Spring: <FaServer />,
  "Spring Boot": <FaServer />,
  React: <FaReact />,
  Angular: <FaCode />,
  MySQL: <FaDatabase />,
  Redis: <FaDatabase />,
  Docker: <FaDocker />,
  Git: <FaCode />,
  Selenium: <FaCode />,
  Kafka: <FaCode />,
  Postman: <FaCode />,
  "Apache Tomcat": <FaServer />,
  Maven: <FaCode />,
  TypeScript: <FaCode />,
  JavaScript: <FaCode />,
  HTML5: <FaCode />,
  CSS3: <FaCode />,
  SQL: <FaDatabase />,
  MongoDB: <FaDatabase />,
  "REST APIs": <FaServer />,
  JPA: <FaDatabase />,
  Hibernate: <FaDatabase />,
  "CI/CD": <FaDocker />,
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-sky-400 uppercase tracking-[0.3em]">Skills</p>
          <h2 className="mt-4 text-5xl font-bold">Technology Stack</h2>
          <p className="mx-auto mt-5 max-w-2xl text-slate-400 text-lg leading-8">
            Building reliable software with a strong focus on backend systems,
            automation, and modern web applications.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-white/10 bg-slate-900/60 p-7 backdrop-blur-xl"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/10 text-sky-300 text-xl">
                  {group.icon}
                </div>
                <h3 className="text-2xl font-semibold text-sky-300">{group.title}</h3>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-4 py-2 text-sm text-slate-200 transition hover:border-sky-400 hover:text-sky-300"
                  >
                    <span className="text-sky-300">{skillIcons[skill] ?? <FaCode />}</span>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}