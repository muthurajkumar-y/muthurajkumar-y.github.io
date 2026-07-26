import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaMobile,
  FaWhatsapp,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 px-6 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-20 left-10 w-80 h-80 rounded-full bg-sky-500/10 blur-3xl -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-indigo-500/10 blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="uppercase tracking-[0.3em] text-sky-400">
            Contact
          </p>

          <h2 className="mt-3 text-5xl font-bold">
            Let's Work Together
          </h2>

          <p className="mt-5 text-slate-400 max-w-2xl mx-auto">
            Have a project, opportunity, or just want to connect?
            I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 mt-20">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <ContactInfo
              icon={<FaEnvelope />}
              title="Email"
              value="muthurajkumar.y@email.com"
            />

            <ContactInfo
              icon={<FaMobile />}
              title="Mobile"
              value="+919629297279"
            />

            <ContactInfo
              icon={<FaWhatsapp />}
              title="WhatsApp"
              value="@muthurajkumar_y"
            />

            <ContactInfo
              icon={<FaMapMarkerAlt />}
              title="Location"
              value="Bengaluru, India"
            />

            
              
          </motion.div>

          {/* Right Side */}
          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl border border-white/10 bg-slate-900/70 backdrop-blur-xl p-8 space-y-6"
          >
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-xl bg-slate-800 p-4 outline-none border border-slate-700 focus:border-sky-400"
            />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full rounded-xl bg-slate-800 p-4 outline-none border border-slate-700 focus:border-sky-400"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full rounded-xl bg-slate-800 p-4 outline-none border border-slate-700 focus:border-sky-400"
            />

            <textarea
              rows={6}
              placeholder="Your Message"
              className="w-full rounded-xl bg-slate-800 p-4 outline-none border border-slate-700 focus:border-sky-400 resize-none"
            />

            <button
              type="submit"
              className="w-full rounded-xl bg-sky-500 py-4 font-semibold transition hover:bg-sky-600"
            >
              Send Message
            </button>
          </motion.form>

        </div>

      </div>
    </section>
  );
}

type ContactInfoProps = {
  icon: React.ReactNode;
  title: string;
  value: string;
};

function ContactInfo({
  icon,
  title,
  value,
}: ContactInfoProps) {
  return (
    <div className="flex items-center gap-5 rounded-2xl border border-white/10 bg-slate-900/60 p-5 backdrop-blur-xl">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky-500/20 text-sky-400 text-xl">
        {icon}
      </div>

      <div>
        <h4 className="font-semibold">{title}</h4>
        <p className="text-slate-400">{value}</p>
      </div>
    </div>
  );
}