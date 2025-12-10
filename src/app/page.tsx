import { Header } from '@/components/common/header';
import { Footer } from '@/components/common/footer';
import { About } from '@/components/sections/about';
import { Academics } from '@/components/sections/academics';
import { Experience } from '@/components/sections/experience';
import { Projects } from '@/components/sections/projects';
import { Recognition } from '@/components/sections/recognition';
import { Gallery } from '@/components/sections/gallery';
import { Contact } from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <About />
        <Experience />
        <Academics />
        <Projects />
        <Recognition />
        <Gallery />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
