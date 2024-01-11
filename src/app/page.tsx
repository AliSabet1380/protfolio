import About from '@/Components/About';
import Contact from '@/Components/Contact';
import Courses from '@/Components/Courses';
import Intro from '@/Components/Intro';
import Projects from '@/Components/Projects';
import SectionDivider from '@/Components/SectionDivider';
import Skills from '@/Components/Skills';

export default function Home() {
  return (
    <main className="flex items-center flex-col p-3 ">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Courses />
      <Contact />
    </main>
  );
}
