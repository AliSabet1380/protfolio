'use client';
import { motion } from 'framer-motion';
import { links } from '@/app/constants';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { useSectionInView } from '@/Hooks/Hook';

const Header = () => {
  const state = useSelector<{ activeSection: string }>(
    state => state.activeSection
  ) as { activeSection: string };
  const { ref } = useSectionInView({ section: 'Home', threshold: 0.85 });

  return (
    <header ref={ref} id="home" className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 -translate-x-1/2 h-[4.5rem] w-full rounded-none border border-sky-900 border-opacity-45 bg-white bg-opacity-75 shadow-lg shadow-black/[0.3 ] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full dark:bg-slate-800 dark:text-white dark:border-white"
        initial={{ y: -100, x: '-50%', opacity: 0 }}
        animate={{ y: 0, x: '-50%', opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.15rem] left-1/2 h-12 -translate-x-1/2 py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex  w-[22rem] felx-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-slate-500 sm:flex-nowrap sm:w-[initial] gap-5 sm:gap-6">
          {links.map(link => (
            <motion.li
              className="h-3/4 flex items-center justify-center relative"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              key={link.hash}
            >
              <Link
                // onClick={() => setActiveSection(link.title)}
                className={`flex items-center w-full justify-center p-3 rounded-full hover:text-slate-900 transition dark:text-white/85 ${
                  state.activeSection === link.title && '!text-black/95'
                }`}
                href={link.hash}
              >
                {link.title}
                {state.activeSection === link.title && (
                  <motion.span
                    layoutId="activeSection"
                    transition={{
                      type: 'spring',
                      stiffness: 380,
                      damping: 30,
                    }}
                    className="bg-slate-200 dark:bg-slate-50 rounded-full absolute inset-0 -z-50"
                  ></motion.span>
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
};
export default Header;
