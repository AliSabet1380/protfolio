import React from 'react';

import { SiNextdotjs } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import mernAuthImg from '../../../public/MERN-Auth.png';
import adminPanleImg from '../../../public/admin-panel.png';
import todoImg from '../../../public/todo.png';

export const links = [
  {
    title: 'Home',
    hash: '#home',
  },
  {
    title: 'About',
    hash: '#about',
  },
  {
    title: 'Projects',
    hash: '#projects',
  },
  {
    title: 'Skills',
    hash: '#skills',
  },
  {
    title: 'Courses',
    hash: '#courses',
  },
  {
    title: 'Contact',
    hash: '#contact',
  },
] as const;

export const coursesData = [
  {
    title: 'Next.js',
    duration: '32h',
    description:
      'I study Next.js by my self from Youtube and also some courses. also i have some greate project that developed in next 14 and next 13 and also next 12 (Page Routing).',
    icon: React.createElement(SiNextdotjs),
    date: '2023',
  },
  {
    title: 'React.js',
    duration: '74h',
    description:
      'I pass two greate course for React.js from udemy with instructor jonas schmettman and maximilian and also lots of parctical projects.',
    icon: React.createElement(FaReact),
    date: '2023',
  },
  {
    title: 'Express.js',
    duration: '45h',
    description:
      'I pass some greate course for express.js and node.js to have greate knowldge about how backend with javascript core work and O also develope some practical project in express.js.',
    icon: React.createElement(SiExpress),
    date: '2023',
  },
] as const;

export const projectsData = [
  {
    title: 'Todo List',
    description:
      'This todo list can help people to create todo for them self and have access to them by thire email any where.',
    tags: ['React', 'Next.js', 'SupaBase', 'Tailwind'],
    imageUrl: todoImg,
  },
  {
    title: 'Admin Dashboard',
    description:
      'This Admin Dashboard is Usefull for manage user and products and... for real and big projects.',
    tags: ['React.js', 'MongoDB', 'Next.js', 'Tailwind', 'Redux'],
    imageUrl: adminPanleImg,
  },
  {
    title: 'MERN Auth',
    description:
      'I create a mern-stack authentication that is usefull for all kind of projects that need authentication.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express.js', 'Tailwind'],
    imageUrl: mernAuthImg,
  },
] as const;

export const skillsData = [
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'Node.js',
  'Git',
  'Tailwind',
  'MongoDB',
  'Redux',
  'Express.js',
  'React Query',
  'Framer Motion',
] as const;
