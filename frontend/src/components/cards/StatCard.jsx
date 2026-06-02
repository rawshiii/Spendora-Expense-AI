import { motion } from 'framer-motion';

export default function StatCard({
  title,
  value,
}) {
  return (
    <motion.div
      whileHover={{
        y: -4,
        scale: 1.02,
      }}
      className="
      bg-white
      border
      border-[#E5E7EB]
      rounded-3xl
      p-6
      shadow-sm
      "
    >
      <p className="text-[#6B7280] text-sm">
        {title}
      </p>

      <h2 className="text-4xl font-bold mt-3 text-[#4F6F52]">
        ₹{value}
      </h2>
    </motion.div>
  );
}