'use client';
import { Carousel, Card } from '@/components/ui/apple-cards-carousel';
import { AuroraText } from '@/components/magicui/aurora-text';
import { HeroHighlight } from '@/components/ui/hero-highlight';
import Waldo from '../assets/waldo.jpg';
import Galaxia from '../assets/social.svg';
import theHive from '../assets/thehive2.svg';
import Sanix from '../assets/sanix.svg';
import { useTranslation } from 'react-i18next';
import { Safari } from '@/components/magicui/safari';
import Iphone15Pro from '@/components/magicui/iphone-15-pro';
import GalaxiaCard from '@/components/carouselCards/GalaxiaCard';
import TheHiveCard from '@/components/carouselCards/TheHiveCard';
export default function ProjectsSection({ projectsRef, contactRef }) {
  const { t } = useTranslation();
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));
  return (
    <>
      <div ref={projectsRef} className="h-screen  ">
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

const DummyContent = () => {
  return (
    <>
      <div className=" bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
        <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg">
          A modern social media platform designed to showcase my web development
          skills.
        </p>

        <h2 className="text-2xl font-bold mt-6 text-neutral-700 dark:text-neutral-200">
          YO
        </h2>
        <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400">
          <li>✅ User authentication (JWT & GitHub OAuth2)</li>
          <li>✅ Create and edit posts</li>
          <li>✅ Like and comment on posts</li>
          <li>✅ Follow/unfollow users</li>
          <li>✅ Secure REST API for data management</li>
          <li>✅ Responsive design with TailwindCSS</li>
        </ul>

        <h2 className="text-2xl font-bold mt-6 text-neutral-700 dark:text-neutral-200">
          Demo
        </h2>

        <a
          href="https://galaxiasocial.netlify.app/login"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 mb-6 px-8 py-4 text-white text-xl font-semibold rounded-xl shadow 
             bg-gradient-to-r from-[#FF0080] via-[#7928CA] to-[#0070F3]
             transform transition-transform duration-300 ease-in-out
             hover:scale-105 active:scale-95"
        >
          🚀 Live Demo
        </a>

        <p>
          🔗{' '}
          <a
            href="https://github.com/Track404/Galaxia-social-media"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block pl-1 bg-gradient-to-r from-[#FF0080] via-[#7928CA] to-[#0070F3] 
               bg-clip-text text-transparent font-semibold hover:underline 
               transform transition-transform duration-300 ease-in-out 
               hover:scale-105 active:scale-95"
          >
            FrontEnd Repo
          </a>
        </p>

        <p>
          🔗{' '}
          <a
            href="https://github.com/Track404/Galaxia-social-media-backend"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block pl-1  bg-gradient-to-r from-[#FF0080] via-[#7928CA] to-[#0070F3] 
               bg-clip-text text-transparent font-semibold hover:underline 
               transform transition-transform duration-300 ease-in-out 
               hover:scale-105 active:scale-95"
          >
            Backend Repo
          </a>
        </p>

        <Safari
          imageSrc="/src/assets/screenshot.png"
          className="w-full h-full mt-5 mb-5"
        />
        <Iphone15Pro
          src="/src/assets/screenshotMobile.png"
          className="mx-auto w-1/2  h-full mt-5 mb-5 "
        />
        <h2 className="text-2xl font-bold mt-6 text-neutral-700 dark:text-neutral-200">
          Technologies
        </h2>
        <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400">
          <li>🛠 Frontend: React, TailwindCSS</li>
          <li>🚀 Backend: Node.js, Express.js</li>
          <li>🛢 Database: PostgreSQL</li>
          <li>🔐 Authentication: JWT, OAuth2 (GitHub)</li>
          <li>📡 API Type: REST API</li>
        </ul>
      </div>
    </>
  );
};

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
    name: 'wheresWaldo',
    category: "Where's Waldo",
    title: 'Browser Game',
    src: Waldo,
    content: <DummyContent />,
  },

  {
    name: 'sanix',
    category: 'Sanix',
    title: 'Shopping Site',
    src: Sanix,
    content: <DummyContent />,
    bgColor: 'bg-blue-300',
  },
];
