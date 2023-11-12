import Image from 'next/image';
import { Inter } from 'next/font/google';
import JobFilter from '../components/JobFilter';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col md:flex-row items-center justify-between p-24 ${inter.className}`}
    >
      <JobFilter />
    </main>
  );
}