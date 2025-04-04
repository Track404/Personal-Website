'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { MagicCard } from './magicui/magic-card';
import Nodejs from '../assets/icons/nodejs.svg';
import Express from '../assets/icons/express.svg';
import Postgres from '../assets/icons/postgresql.svg';
import Prisma from '../assets/icons/prisma.svg';

import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export default function BackEndCard() {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const techStack = [
    { src: Nodejs, name: 'Node.js' },
    { src: Express, name: 'Express' },
    { src: Prisma, name: 'Prisma' },
    { src: Postgres, name: 'PostgreSQL' },
  ];

  return (
    <Card className="w-full md:w-[30vw]">
      <MagicCard gradientColor={'#D9D9D955'}>
        <CardHeader>
          <CardTitle className="text-center font-semibold text-2xl xl:text-3xl 2xl:text-4xl">
            Back End
          </CardTitle>
          <CardDescription>
            <div className="flex gap-3 justify-center">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <img
                    src={tech.src}
                    alt={tech.name}
                    className="w-12 xl:w-14 2xl:w-18"
                  />
                  {hoveredIndex === index && (
                    <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-gray-800 text-white text-xs py-1 px-2 rounded-lg whitespace-nowrap transition-opacity duration-200">
                      {tech.name}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center text-gray-700 dark:text-gray-300 mt-5 xl:text-lg 2xl:text-xl">
          {t('about.cards.backEnd')}
        </CardContent>
      </MagicCard>
    </Card>
  );
}
