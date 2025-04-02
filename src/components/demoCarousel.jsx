'use client';
import { Carousel, Card } from '@/components/ui/apple-cards-carousel';
import { AuroraText } from './magicui/aurora-text';
import { HeroHighlight } from './ui/hero-highlight';
import Waldo from '../assets/waldo.jpg';
import Galaxia from '../assets/social.svg';
import theHive from '../assets/thehive2.svg';
import Sanix from '../assets/sanix.svg';
export function AppleCardsCarouselDemo({ contactRef }) {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <HeroHighlight className="w-full" ContainerRef={contactRef}>
      <div className="w-full h-full py-25">
        <h1 className="  ml-8 mt-10  text-5xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          <AuroraText>
            <p className="pb-2">Projects</p>
          </AuroraText>
        </h1>
        <Carousel items={cards} />
      </div>
    </HeroHighlight>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={'dummy-content' + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{' '}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <img
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height="500"
              width="500"
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: 'Galaxia Social',
    title: 'Social Media Platform',
    src: Galaxia,
    content: <DummyContent />,
    bgColor: 'bg-emerald-300',
  },
  {
    category: 'The Hive',
    title: 'Messaging app',
    src: theHive,
    content: <DummyContent />,
    bgColor: 'bg-amber-300',
  },
  {
    category: "Where's Waldo",
    title: 'Browser Game',
    src: Waldo,
    content: <DummyContent />,
  },

  {
    category: 'Sanix',
    title: 'Shopping Site',
    src: Sanix,
    content: <DummyContent />,
    bgColor: 'bg-blue-300',
  },
];
