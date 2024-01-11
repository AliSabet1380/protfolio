import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { useDispatch } from 'react-redux';
import { activeSectionActions as action } from '@/redux/sectionSlice';
import { useRouter } from 'next/navigation';

export const useSectionInView = function ({
  section,
  threshold = 0.5,
}: {
  section: string;
  threshold: number;
}) {
  const router = useRouter();
  const dispatch = useDispatch();

  const { ref, inView } = useInView({
    /* Optional options */
    threshold: threshold,
  });

  useEffect(() => {
    if (inView) dispatch(action.setActiveSection(section));
    // new URL(`#${section}`);
    // router.replace(`#${section.toLowerCase()}`);
  }, [inView, dispatch, section, router]);

  return { ref, inView };
};
