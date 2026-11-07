const projectItems = [
  {
    title: "Ophthalmology EMR",
    summary:
      "Digital patient records, appointment tracking, diagnosis workflows, and clinical documentation for eye care practices.",
    tags: ["EMR", "Patient Records", "Clinical Workflow"],
  },
  {
    title: "Dental EMR",
    summary:
      "Integrated dental practice management covering patient history, treatment plans, billing, and operational workflows.",
    tags: ["Dental Practice", "Billing", "Operations"],
  },
  {
    title: "Pharmacy Management System",
    summary:
      "Prescription handling, inventory tracking, sales processing, and pharmacy operations built for dependable daily use.",
    tags: ["Pharmacy", "Inventory", "Prescriptions"],
  },
  {
    title: "Optical Supply Chain Management",
    summary:
      "Stock visibility, order management, vendor coordination, and distribution tracking for optical products and equipment.",
    tags: ["Supply Chain", "Inventory", "Distribution"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-sky-400 uppercase tracking-[0.3em]">
            Projects
          </p>
         
          <p className="mx-auto mt-5 max-w-2xl text-slate-400 text-lg leading-8">
            Healthcare systems and digital platforms designed to improve workflows,
            data accuracy, and operational efficiency.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {projectItems.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-white/10 bg-slate-900/60 p-7 shadow-lg shadow-sky-500/5 backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:border-sky-400/60"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-500/15 text-xl text-sky-300">
                ✦
              </div>

              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>

              <p className="mt-4 text-slate-400 leading-7">{project.summary}</p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs font-medium text-slate-300"
                  >
                    {tag}
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