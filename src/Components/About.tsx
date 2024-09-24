'use client';
import Heading from './Heading';
import { motion } from 'framer-motion';

import { useSectionInView } from '@/Hooks/Hook';

const About = () => {
  const { ref } = useSectionInView({ section: 'About', threshold: 0.5 });

  return (
    <motion.section
      id="about"
      ref={ref}
      className="flex max-w-3xl mt-5 flex-col items-center gap-y-3 leading-8 mb-28 sm:mb-48 text-center scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
    >
      <Heading title="About Me" />
      <p className="dark:text-slate-100">
        My name Is ALi Sabet. Iam a mid-level web developer.i start web devloping
        from 1 year ago. For a dew time, I work at SivanLand as SEO specialist.
        I looking for a web development job as backend or frontend developer.
      </p>
      <p className="dark:text-slate-100">
        Some of my project are in my github and also some of them are deployed
        to vercel as this one. I would like to join real project in your company
        and have some more expirence.
      </p>
    </motion.section>
  );
};
export default About;
