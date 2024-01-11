'use client';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { coursesData } from '@/app/constants';
import { useSectionInView } from '@/Hooks/Hook';
import Heading from './Heading';

const Courses = () => {
  const { ref, inView } = useSectionInView({
    section: 'Courses',
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className=" group mb-28 sm:mb-48 scroll-mt-48"
      id="courses"
    >
      <Heading title="Courses" />
      <VerticalTimeline lineColor="">
        {coursesData.map(course => {
          return (
            <VerticalTimelineElement
              textClassName="vertical-timeline-element--work"
              className="vertical-timeline-element--work"
              visible={inView}
              date={course.date}
              contentStyle={{
                background: '#f3f4f6',
                boxShadow: 'none',
                border: '1px solid rgba(0,0,0,0.05)',
                textAlign: 'left',
                borderRadius: '10px',
                padding: '1.3rem 2rem',
              }}
              contentArrowStyle={{
                borderRight: '7px solid  rgb(100,100,100)',
              }}
              key={course.title}
              icon={course.icon}
              iconStyle={{
                border: '3px solid rgb(0, 100, 255)',
                background: '#f3f4f5',
                fontSize: '1.5rem',
              }}
            >
              <h2 className="!text-xl !font-semibold">{course.title}</h2>
              <span className="!font-light">{course.duration}</span>
              <p className="!text-sm !text-slate-700">{course.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </section>
  );
};
export default Courses;
