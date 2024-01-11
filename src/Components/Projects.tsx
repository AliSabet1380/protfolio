'use client';
import Heading from './Heading';
import { projectsData } from '@/app/constants';
import SingleProject from './SingleProject';
import { useSectionInView } from '@/Hooks/Hook';

const Projects = () => {
  const { ref } = useSectionInView({ section: 'Projects', threshold: 0.5 });

  return (
    <section ref={ref} className="scroll-mt-28 mb-28 sm:mb-48" id="projects">
      <Heading title="My Projects" />
      <div>
        {projectsData.map(project => (
          <SingleProject
            key={project.title}
            title={project.title}
            imageUrl={project.imageUrl}
            tags={project.tags}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
};
export default Projects;
