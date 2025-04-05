'use client';

import { useTranslation } from 'react-i18next';
import { Safari } from '@/components/magicui/safari';
import Iphone15Pro from '@/components/magicui/iphone-15-pro';

export default function TheHiveCard() {
  const { t } = useTranslation();

  const features = t('projects.theHive.card.hive.features', {
    returnObjects: true,
  });
  const technologies = t('projects.theHive.card.hive.technologies', {
    returnObjects: true,
  });

  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg">
        {t('projects.theHive.card.hive.description')}
      </p>

      <h2 className="text-2xl font-bold mt-6 text-neutral-700 dark:text-neutral-200">
        {t('projects.theHive.card.hive.featuresTitle')}
      </h2>
      <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400">
        {features.map((feature, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: feature }} />
        ))}
      </ul>

      <h2 className="text-2xl font-bold mt-6 text-neutral-700 dark:text-neutral-200">
        {t('projects.theHive.card.hive.demoTitle')}
      </h2>

      <a
        href="https://thehive404.netlify.app"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 mb-6 px-8 py-4 text-white text-xl font-semibold rounded-xl shadow 
           bg-gradient-to-r from-[#FF0080] via-[#7928CA] to-[#0070F3]
           transform transition-transform duration-300 ease-in-out
           hover:scale-105 active:scale-95"
      >
        {t('projects.theHive.card.hive.liveDemo')}
      </a>

      <p>
        🔗{' '}
        <a
          href="https://github.com/Track404/Messaging-app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block pl-1 bg-gradient-to-r from-[#FF0080] via-[#7928CA] to-[#0070F3] 
             bg-clip-text text-transparent font-semibold hover:underline 
             transform transition-transform duration-300 ease-in-out 
             hover:scale-105 active:scale-95"
        >
          {t('projects.theHive.card.hive.frontendRepo')}
        </a>
      </p>

      <p>
        🔗{' '}
        <a
          href="https://github.com/Track404/Messaging-app-backend"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block pl-1 bg-gradient-to-r from-[#FF0080] via-[#7928CA] to-[#0070F3] 
             bg-clip-text text-transparent font-semibold hover:underline 
             transform transition-transform duration-300 ease-in-out 
             hover:scale-105 active:scale-95"
        >
          {t('projects.theHive.card.hive.backendRepo')}
        </a>
      </p>

      <Safari
        imageSrc="/src/assets/thehive-desktop.png"
        className="w-full h-full mt-5 mb-5"
      />
      <Iphone15Pro
        src="/src/assets/thehive-mobile.png"
        className="mx-auto w-1/2 h-full mt-5 mb-5"
      />

      <h2 className="text-2xl font-bold mt-6 text-neutral-700 dark:text-neutral-200">
        {t('projects.theHive.card.hive.technologiesTitle')}
      </h2>
      <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400">
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}
