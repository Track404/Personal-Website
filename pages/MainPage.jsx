import Navbar from '@/components/Navbar';

import { useRef } from 'react';
import { AuroraText } from '@/components/magicui/aurora-text';
import { AppleCardsCarouselDemo } from '@/components/demoCarousel';

import FrontEndCard from '@/components/FrontEndCard';
import BackEndCard from '@/components/BackEndCard';
import VersionControlCard from '@/components/VersionControlCard';
import { ContactSection } from '@/components/ContactSection';
import HeaderSection from '../pages/HeaderSection';
import AboutSection from '../pages/AboutSection';
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
        <AboutSection aboutRef={aboutRef} />

        <div ref={projectsRef} className="h-screen  ">
          <AppleCardsCarouselDemo contactRef={contactRef} />
        </div>
        <ContactSection aboutRef={aboutRef} />
      </div>
    </>
  );
}

export default MainPage;
