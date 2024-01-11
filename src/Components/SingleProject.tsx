'use client';
import Image, { StaticImageData } from 'next/image';
import { MutableRefObject, useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion';

type Props = {
  title: string;
  description: string;
  imageUrl: StaticImageData;
  tags: readonly string[];
};

const SingleProject = ({ imageUrl, description, tags, title }: Props) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['0 1', '1.33 1'],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const opacityProgress = useTransform(scaleProgress, [0, 1], [0.1, 1]);

  return (
    <motion.div
      ref={sectionRef}
      style={{ scale: scaleProgress, opacity: opacityProgress }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className=" bg-gray-100 max-w-3xl border rounded-md border-black/15 overflow-hidden sm:pr-8 relative sm:h-80   hover:bg-slate-200 transition">
        <div className="pt-4 pb-7 px-5  sm:pl-10 sm:pr-2 sm:pt-10 max-w-[50%]  flex flex-col h-full group-odd:ml-[24rem]">
          <h3 className="text-2xl font-medium ">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-900 ">{description}</p>
          <ul className="flex flex-wrap gap-2 mt-4 sm:mt-auto items-center">
            {tags.map(tag => (
              <li
                className="bg-zinc-800 py-1 px-3 text-sm uppercase tracking-wider text-white rounded-full "
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="project image"
          className="absolute bottom-0 -right-40 w-8/12 rounded-t-lg shadow-2xl group-odd:right-[initial] group-odd:-left-40 group-hover:-translate-x-3 group-hover:translate-y-3 group-hover:-rotate-3 group-hover:scale-110 group-odd:group-hover:translate-x-2 group-odd:group-hover:-translate-y-2 group-odd:group-hover:rotate-2  transition"
        />
      </section>
    </motion.div>
  );
};
export default SingleProject;
