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
import { MagicCard } from './magicui/magic-card';
import Html from '../assets/icons/html.svg';
import Css from '../assets/icons/css.svg';
import React from '../assets/icons/react.svg';
import Tailwind from '../assets/icons/tailwind.svg';
import { Translation, useTranslation } from 'react-i18next';
export default function FrontEndCard() {
  const { t } = useTranslation();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const techStack = [
    { src: Html, name: 'HTML' },
    { src: Css, name: 'CSS' },
    { src: React, name: 'React' },
    { src: Tailwind, name: 'Tailwind CSS' },
  ];

  return (
    <Card className="w-full md:w-[30vw]">
      <MagicCard gradientColor={'#D9D9D955'}>
        <CardHeader>
          <CardTitle className="text-center font-semibold text-2xl xl:text-3xl 2xl:text-4xl">
            Front End
          </CardTitle>
          <CardDescription>
            <div className="flex gap-3 justify-center items-center">
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
          {t('about.cards.frontEnd')}
        </CardContent>
      </MagicCard>
    </Card>
  );
}
