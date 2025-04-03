import { HeroHighlight } from '@/components/ui/hero-highlight';
import Navbar from '@/components/Navbar';
import { AuroraTextDemo } from '@/components/AuroraTextDemo';
import { Highlight } from '@/components/ui/hero-highlight';
import { useRef } from 'react';
import { AuroraText } from '@/components/magicui/aurora-text';
import { AppleCardsCarouselDemo } from '@/components/demoCarousel';
import { MagicCardDemo } from '@/components/demoCard';
import FrontEndCard from '@/components/FrontEndCard';
import BackEndCard from '@/components/BackEndCard';
import VersionControlCard from '@/components/VersionControlCard';
import { ContactSection } from '@/components/ContactSection';
import HeaderSection from '../pages/HeaderSection';
function MainPage() {
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to handle scrolling

  return (
    <>
      <div className="relative">
        <Navbar
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <HeaderSection aboutRef={aboutRef} />
        <div
          ref={aboutRef}
          className="relative p-2 min-h-screen  shadow-[0_-5px_15px_rgba(0,0,0,0.08),0_5px_15px_rgba(0,0,0,0.08)] z-[99]"
        >
          <h1 className="ml-2 pt-20 text-5xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            <AuroraText>
              <p className="pb-10">About</p>
            </AuroraText>
          </h1>
          <div className="flex flex-col gap-4 text-gray-800 text-md md:text-xl lg:text-2xl xl:text-3xl mb-5 xl:mb-10 font-semibold p-4 leading-relaxed tracking-tight">
            <div>
              JavaScript developer based in France, specializing in React and
              Node.js. At 24, I've recently completed my web development
              training and am ready to create dynamic, responsive applications
              that deliver exceptional user experiences.
            </div>
            <div>
              I bring a fresh perspective and modern development practices to
              every project. Currently seeking opportunities to apply my skills
              professionally while continuing to grow as a developer.
            </div>
          </div>

          <div className="flex flex-col gap-3 md:flex-row justify-around pb-4 xl:h-[40vh]">
            <FrontEndCard />
            <BackEndCard />
            <VersionControlCard />
          </div>
        </div>

        <div ref={projectsRef} className="h-screen  ">
          <AppleCardsCarouselDemo contactRef={contactRef} />
        </div>
        <ContactSection aboutRef={aboutRef} />
      </div>
    </>
  );
}

export default MainPage;
