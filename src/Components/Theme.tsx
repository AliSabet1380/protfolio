'use client';
import { useEffect, useState } from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';

type ThemeType = 'light' | 'dark';

const Theme = () => {
  const [theme, setTheme] = useState<ThemeType>('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      localStorage.setItem('theme', 'dark');
      setTheme('dark');
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    }
    if (theme === 'dark') {
      localStorage.setItem('theme', 'light');
      setTheme('light');
      document.documentElement.classList.add('light');
      document.documentElement.classList.remove('dark');
    }
  };

  useEffect(() => {
    if (
      localStorage.getItem('theme') &&
      localStorage.getItem('theme') === 'dark'
    )
      setTheme('dark');
    // else if (window.matchMedia('(prefers-color-scheme: dark)').matches)
    //   setTheme('dark');

    // if (theme === 'dark') {
    //   document.documentElement.classList.add('dark');
    //   document.documentElement.classList.remove('light');
    // } else {
    //   document.documentElement.classList.add('light');
    //   document.documentElement.classList.remove('dark');
    // }
  }, [theme]);

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-5 right-5 rounded-full border border-slate-800/30 bg-slate-100 p-2 dark:text-black"
    >
      {theme === 'dark' ? <BsMoon /> : <BsSun />}
    </button>
  );
};
export default Theme;
