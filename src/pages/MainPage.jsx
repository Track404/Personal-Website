import Navbar from '@/components/Navbar';

import { useRef } from 'react';

import { ContactSection } from '@/components/ContactSection';
import HeaderSection from '../pages/HeaderSection';
import AboutSection from '../pages/AboutSection';
import ProjectsSection from '../pages/ProjectsSection';
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
        <ProjectsSection projectsRef={projectsRef} contactRef={contactRef} />

        <ContactSection aboutRef={aboutRef} />
      </div>
    </>
  );
}

export default MainPage;
