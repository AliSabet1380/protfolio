'use client';
import { Inter } from 'next/font/google';
import Header from '@/Components/Header';
import './globals.css';
import { Provider } from 'react-redux';
import { store } from './../redux/store';
import Footer from '@/Components/Footer';
import Theme from '@/Components/Theme';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gray-50 text-gray-950  pt-28 sm:pt-36 dark:bg-slate-800 dark:text-indigo-700  dark:opacity-90`}
      >
        <Provider store={store}>
          <div className="relative">
            <div className="bg-[#fbe2e3] -z-10 absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
            <div className="bg-[#dbd7fb] -z-10 absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
            <Header />
            {children}
            <Theme />
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
