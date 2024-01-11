'use client';
import { useSectionInView } from '@/Hooks/Hook';
import Heading from './Heading';
import { FaPaperPlane } from 'react-icons/fa';
import { sendEmail } from './../actions/sendEmail';

const Contact = () => {
  const { ref } = useSectionInView({ section: 'Contact', threshold: 0.5 });

  return (
    <section
      id="contact"
      ref={ref}
      className="w-[min(100%, 38rem)] mb-12 sm:mb-28"
    >
      <Heading title="Contact Me" />
      <p className="dark:text-slate-100">
        You Can Directly Send Me Email To:{' '}
        <a
          className="text-sky-700 underline"
          href="mailto:ali8551sbt@gmail.com"
          target="_blank"
        >
          ali8551sbt@gmail.com
        </a>
      </p>
      <form
        className="flex flex-col gap-2 last:gap-3 mt-2"
        action={async formData => {
          await sendEmail(formData);
          //   if (error) console.log(error);
        }}
      >
        <input
          type="text"
          className="border border-slate-700 rounded-lg p-3"
          placeholder="Name"
          name="name"
          required
        />
        <input
          type="email"
          className="border border-slate-700 rounded-lg p-3"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="border border-slate-700 p-3 rounded-lg "
          rows={7}
          placeholder="Write To Me Here"
          name="content"
          required
        />
        <div className="flex items-center justify-between">
          <button className="group flex hover:bg-slate-700 items-center w-max gap-2 bg-slate-900 text-white px-9 py-2 rounded-full ">
            Send{' '}
            <FaPaperPlane
              size={13}
              className="group-hover:translate-x-[2px] group-hover:-translate-y-[2px] transition-all"
            />
          </button>
          <span className="text-red-600 text-sm font-semibold">
            Please Use Vpn For Send Email :(
          </span>
        </div>
      </form>
    </section>
  );
};
export default Contact;
