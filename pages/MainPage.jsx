import { HeroHighlight } from '@/components/ui/hero-highlight';
import Navbar from '@/components/Navbar';
import { AuroraTextDemo } from '@/components/AuroraTextDemo';
import { Highlight } from '@/components/ui/hero-highlight';
import { useRef } from 'react';
import { AuroraText } from '@/components/magicui/aurora-text';
import { AppleCardsCarouselDemo } from '@/components/demoCarousel';
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
          className="relative h-screen shadow-[0_-5px_15px_rgba(0,0,0,0.08),0_5px_15px_rgba(0,0,0,0.08)] z-[99]"
        >
          <h1 className="ml-2 pt-20 text-5xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            <AuroraText>
              <p className="pb-2">About</p>
            </AuroraText>
          </h1>
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
