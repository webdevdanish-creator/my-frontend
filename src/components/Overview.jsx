import { motion } from "framer-motion";
import { fadeUp } from "../animations/fadeUp";

const items = [
  { title: "Subscription", desc: "Flexible plans for families" },
  { title: "Upload Story", desc: "Record and upload memories" },
  { title: "Translation & Editing", desc: "Professional refinement" },
  { title: "Archival & Sharing", desc: "Preserve forever" },
];

export default function Overview() {
  return (
    <section className="py-20 bg-[#FFF6EC]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Overview</h2>

        <div className="grid md:grid-cols-4 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              className="bg-white p-6 rounded-xl shadow"
            >
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
