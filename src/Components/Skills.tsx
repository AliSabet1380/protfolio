'use client';
import { useSectionInView } from '@/Hooks/Hook';
import Heading from './Heading';
import { skillsData } from '@/app/constants';
import { motion } from 'framer-motion';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate(index: number) {
    return {
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * index,
      },
    };
  },
};

const Skills = () => {
  const { ref } = useSectionInView({ section: 'Skills', threshold: 0.2 });

  return (
    <section ref={ref} id="skills" className="mb-28 sm:mb-48 scroll-mt-48">
      <Heading title="Skills" />
      <ul className="flex gap-3 max-w-3xl flex-wrap items-center">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView={'animate'}
            viewport={{ once: true }}
            className="border border-slate-700  text-slate-700 dark:border-slate-100 dark:text-slate-100  rounded-xl p-2 capitalize"
            key={skill}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
export default Skills;
