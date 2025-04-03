import { HeroHighlight } from '@/components/ui/hero-highlight';
import { AuroraText } from '@/components/magicui/aurora-text';
import { Highlight } from '@/components/ui/hero-highlight';
export default function HeaderSection({ headerRef, aboutRef }) {
  return (
    <>
      <div ref={headerRef}>
        <HeroHighlight ContainerRef={aboutRef} textButton={'See More'}>
          <div className="ml-4 h-full ">
            <h1 className=" flex flex-col ml-2 text-6xl font-bold tracking-tighter sm:text-5xl md:text-7xl lg:text-8xl">
              Full Stack
              <AuroraText>
                <p>Web</p> <p>Developper</p>
              </AuroraText>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  ml-2 font-bold w-[90%] mt-6 md:mt-10 lg:mt-12 mx-auto text-left leading-relaxed hyphens-auto balance max-w-4xl ">
              Full stack developer turning complex ideas into seamless web
              experiences. Merging
              <Highlight>design elegance</Highlight> with
              <Highlight>functional power</Highlight> through deliberate code.
            </h2>
          </div>
        </HeroHighlight>
      </div>
    </>
  );
}
