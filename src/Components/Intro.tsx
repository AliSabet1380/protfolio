'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { MdOutlineMail } from 'react-icons/md';
import { HiDownload } from 'react-icons/hi';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

const Intro = () => {
  return (
    <section id="home" className="max-w-[50rem] text-center mb-28rem sm:mb-0">
      <div className="flex flex-col gap-3 items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, type: 'tween' }}
          >
            <Image
              src={'/Profile.jpg'}
              alt="Profile Image"
              width={500}
              height={500}
              className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: 'spring',
              duration: 0.7,
              stiffness: 125,
              delay: 0.1,
            }}
            className="text-2xl absolute bottom-0 right-0"
          >
            👋
          </motion.span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hi. Iam Ali. A Junior{' '}
          <span className="font-semibold text-xl text-sky-600">
            {' '}
            Full-Stack{' '}
          </span>
          Web Developer. Ready To Join Projects. My Focus Is On
          <span className="italic font-semibold text-neutral-600">
            {' '}
            NEXT.JS & REACT.JS & EXPRESS.JS{' '}
          </span>
        </motion.h2>
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-6"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <Link
            className="flex items-center gap-2 bg-zinc-800 p-3 rounded-full text-white  hover:bg-opacity-90 hover:shadow-md transition border border-white/20"
            href={'#contact'}
          >
            Contact Me <MdOutlineMail size={18} />
          </Link>
          <a
            href={'/CV.pdf'}
            className="bg-white p-3 rounded-full text-black flex items-center cursor-pointer gap-2 hover:shadow-md hover:bg-slate-50 transition border border-zinc-800/20"
            download
          >
            My Resome <HiDownload />
          </a>
          <a
            href="https://linkedin.com/in/ali-sabet-79629a249"
            target="_blank"
            className="bg-white/85 cursor-pointer text-blue-700  rounded-full p-3 hover:shadow-md hover:bg-slate-50 transition border border-zinc-800/20"
          >
            <BsLinkedin size={22} />
          </a>
          <a
            href="https://github.com/AliSabet1380"
            target="_blank"
            className="bg-white/85 cursor-pointer text-zinc-900  rounded-full p-3 hover:shadow-md hover:bg-slate-50  transition border border-zinc-800/20"
          >
            <BsGithub size={22} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
export default Intro;
