'use client';
import { delay, motion } from 'framer-motion';

const SectionDivider = () => {
  return (
    <motion.div
      className="bg-zinc-300 my-24 h-16 w-1 rounded-full hidden sm:block"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.125 }}
    ></motion.div>
  );
};
export default SectionDivider;
