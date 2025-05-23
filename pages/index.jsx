import Academic from '@/components/Academic';
import Form from '@/components/Form';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import ProjectCard from '@/components/ProjectCard';
import ServiceCard from '@/components/ServiceCard';
import Skills from '@/components/Skills';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/context/ThemeContext';

export default function Home() {
  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col">
        <h1 className="text-3xl font-bold underline text-red-500 animate-pulse">
          Hello world!
        </h1>
        <Navbar />
        <main className="flex-grow">
          <Header />
          <Academic />
          <Skills />
          <ServiceCard />
          <ProjectCard />
          <Form />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}