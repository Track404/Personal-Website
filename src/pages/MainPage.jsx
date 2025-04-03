import Navbar from '@/components/Navbar';

import { useRef } from 'react';

import { ContactSection } from '../pages/ContactSection';
import HeaderSection from '../pages/HeaderSection';
import AboutSection from '../pages/AboutSection';
import ProjectsSection from '../pages/ProjectsSection';
function MainPage() {
  const headerRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Function to handle scrolling

  return (
    <>
      <div className="relative">
        <Navbar
          headerRef={headerRef}
          aboutRef={aboutRef}
          projectsRef={projectsRef}
          contactRef={contactRef}
        />
        <HeaderSection headerRef={headerRef} aboutRef={aboutRef} />
        <AboutSection aboutRef={aboutRef} />
        <ProjectsSection projectsRef={projectsRef} contactRef={contactRef} />

        <ContactSection contactRef={contactRef} />
      </div>
    </>
  );
}

export default MainPage;
