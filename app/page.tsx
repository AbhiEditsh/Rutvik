import Skills from "@/components/Skills";
import ProjectsPage from "@/components/Projects";
import Intro from "@/components/Intro";
import Footer from "@/components/Footer";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import "./globals.css";


export default function Home() {
  return (
      <div className="relative mx-auto md:max-w-[70%] lg:max-w-[60%] px-5 pt-10 h-full">
        <div className="scrollable-content h-full">
          <main>
            <Intro />
            <Skills />
            <Experience />
            <Education />
            <ProjectsPage />
            <Footer />
          </main>
        </div>
      </div>
  );
}
