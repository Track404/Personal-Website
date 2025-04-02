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
        <HeroHighlight ContainerRef={aboutRef}>
          <div className="ml-4 h-full ">
            <AuroraTextDemo />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  ml-2 font-bold w-[90%] mt-6 md:mt-10 lg:mt-12 mx-auto text-left leading-relaxed hyphens-auto balance max-w-4xl ">
              Full stack developer turning complex ideas into seamless web
              experiences. Merging
              <Highlight>design elegance</Highlight> with
              <Highlight>functional power</Highlight> through deliberate code.
            </h2>
          </div>
        </HeroHighlight>
        <div
          ref={aboutRef}
          className="relative p-2  md:h-screen shadow-[0_-5px_15px_rgba(0,0,0,0.08),0_5px_15px_rgba(0,0,0,0.08)] z-[99]"
        >
          <h1 className="ml-2 pt-20 text-5xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            <AuroraText>
              <p className="pb-10">About</p>
            </AuroraText>
          </h1>
          <div className="flex flex-col gap-2 text-sm md:text-lg mb-5  font-semibold p-2">
            <div>
              JavaScript developer based in France, specializing in React and
              Node.js. At 24, I've recently completed my web development
              training and am ready to create dynamic, responsive applications
              that deliver exceptional user experiences.
            </div>
            <div>
              I bring fresh perspective and modern development practices to
              every project. Currently seeking opportunities to apply my skills
              professionally while continuing to grow as a developer.
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-around">
            <FrontEndCard />
            <BackEndCard />
            <MagicCardDemo />
          </div>
        </div>

        <div ref={projectsRef} className="h-screen   ">
          <AppleCardsCarouselDemo contactRef={contactRef} />
        </div>
        <div
          ref={contactRef}
          className="relative h-screen shadow-[0_-5px_15px_rgba(0,0,0,0.08),0_5px_15px_rgba(0,0,0,0.08)] z-[99]"
        >
          <h1 className="  ml-2  pt-20 text-5xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            <AuroraText>
              <p className="pb-2">Contact</p>
            </AuroraText>
          </h1>
        </div>
      </div>
    </>
  );
}

export default MainPage;
