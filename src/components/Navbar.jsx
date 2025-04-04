import { AuroraText } from './magicui/aurora-text';
import { Highlight } from './ui/hero-highlight';
import { useTranslation } from 'react-i18next';
function Navbar({ headerRef, aboutRef, projectsRef, contactRef }) {
  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  const { i18n } = useTranslation();

  return (
    <>
      <nav className="flex  justify-between items-center border-b-1  p-2 w-full  h-20 bg-white shadow-md   fixed top-0 left-0 z-[9999] ">
        <h1
          onClick={() => scrollToSection(headerRef)}
          className="text-xl font-bold ml-2 tracking-tighter md:text-2xl lg:text-3xl"
        >
          Clement
          <AuroraText>Zambon</AuroraText>
        </h1>
        <select
          value={i18n.language}
          onChange={(e) => i18n.changeLanguage(e.target.value)}
        >
          <option value="en">English</option>
          <option value="fr">Français</option>
        </select>

        <div className="flex gap-2 mr-3 md:gap-4 md:mr-5 md:text-lg font-bold tracking-tighter  lg:text-2xl">
          <Highlight>
            <div onClick={() => scrollToSection(projectsRef)}>Projects</div>
          </Highlight>
          <Highlight>
            <div onClick={() => scrollToSection(contactRef)}>Contact</div>
          </Highlight>
          <Highlight>
            <div onClick={() => scrollToSection(aboutRef)}>About</div>
          </Highlight>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
