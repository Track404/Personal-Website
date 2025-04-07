'use client';
import { Carousel, Card } from '@/components/ui/apple-cards-carousel';
import { AuroraText } from '@/components/magicui/aurora-text';
import { HeroHighlight } from '@/components/ui/hero-highlight';
import Waldo from '../assets/waldo.jpg';
import Galaxia from '../assets/social.svg';
import theHive from '../assets/thehive2.svg';
import Sanix from '../assets/sanix.svg';
import { useTranslation } from 'react-i18next';
import GalaxiaCard from '@/components/carouselCards/GalaxiaCard';
import TheHiveCard from '@/components/carouselCards/TheHiveCard';
import WheresWaldoCard from '@/components/carouselCards/WaldoCard';
import SanixCard from '@/components/carouselCards/SanixCard';
export default function ProjectsSection({ projectsRef, contactRef }) {
  const { t } = useTranslation();
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  return (
    <>
      <div ref={projectsRef} className="h-full  ">
        <HeroHighlight
          className="w-full"
          ContainerRef={contactRef}
          textButton={t('projects.contactMe')}
        >
          <div className="w-full h-full py-25">
            <h1 className="  ml-8 mt-10  text-5xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              <AuroraText>
                <p className="pb-2">{t('projects.pageName')}</p>
              </AuroraText>
            </h1>
            <Carousel items={cards} />
          </div>
        </HeroHighlight>
      </div>
    </>
  );
}

const data = [
  {
    name: 'galaxiaSocial',
    category: 'Galaxia Social',
    title: 'Social Media Platform',
    src: Galaxia,
    content: <GalaxiaCard />,
    bgColor: 'bg-emerald-300',
  },
  {
    name: 'theHive',
    category: 'The Hive',
    title: 'Messaging app',
    src: theHive,
    content: <TheHiveCard />,
    bgColor: 'bg-amber-300',
  },
  {
    name: 'waldo',
    category: "Where's Waldo",
    title: 'Browser Game',
    src: Waldo,
    content: <WheresWaldoCard />,
  },

  {
    name: 'sanix',
    category: 'Sanix',
    title: 'Shopping Site',
    src: Sanix,
    content: <SanixCard />,
    bgColor: 'bg-blue-300',
  },
];
