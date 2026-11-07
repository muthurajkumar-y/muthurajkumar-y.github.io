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
            web applications using Java and modern technologies for healthcare
            platforms, including ophthalmology EMR, dental EMR, pharmacy, and
            optical supply chain management systems.
          </p>

        </motion.div>

      </div>
    </>
  );
}