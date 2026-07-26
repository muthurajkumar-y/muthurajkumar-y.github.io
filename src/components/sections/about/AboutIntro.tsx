import { motion } from "framer-motion";

export default function AboutIntro() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .6 }}
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

      <div className="mt-20">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h3 className="text-3xl font-semibold">
            Who am I?
          </h3>

          <p className="mt-8 text-lg text-slate-400 leading-8">
            I'm a Software Engineer passionate about building reliable applications,
            improving software quality through automation, and creating scalable
            web applications using Java and modern technologies.
          </p>

        </motion.div>

      </div>
    </>
  );
}