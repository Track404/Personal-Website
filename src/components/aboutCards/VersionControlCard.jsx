'use client';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { MagicCard } from '../magicui/magic-card';
import Git from '../../assets/icons/git.svg';
import Github from '../../assets/icons/github.svg';
import { useTranslation } from 'react-i18next';
export default function VersionControlCard() {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const techStack = [
    { src: Git, name: 'Git' },
    { src: Github, name: 'Github' },
  ];

  return (
    <Card className="w-full md:w-[30vw]">
      <MagicCard gradientColor={'#D9D9D955'}>
        <CardHeader>
          <CardTitle className="text-center font-semibold text-2xl xl:text-3xl 2xl:text-4xl">
            Version Control
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
          {t('about.cards.versionControl')}
        </CardContent>
      </MagicCard>
    </Card>
  );
}
