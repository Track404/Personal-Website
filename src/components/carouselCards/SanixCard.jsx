'use client';

import { useTranslation } from 'react-i18next';
import { Safari } from '@/components/magicui/safari';

import ScreenShot from '../../assets/screenshot/screenshotSanix.png';
import ScreenShotMobile from '../../assets/screenshot/screenshotSanixMobile.png';
export default function SanixCard() {
  const { t } = useTranslation();

  const features = t('projects.sanix.card.sanix.features', {
    returnObjects: true,
  });
  const technologies = t('projects.sanix.card.sanix.technologies', {
    returnObjects: true,
  });

  return (
    <div className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-lg">
        {t('projects.sanix.card.sanix.description')}
      </p>

      <h2 className="text-2xl font-bold mt-6 text-neutral-700 dark:text-neutral-200">
        {t('projects.sanix.card.sanix.featuresTitle')}
      </h2>
      <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400">
        {features.map((feature, index) => (
          <li key={index} dangerouslySetInnerHTML={{ __html: feature }} />
        ))}
      </ul>

      <h2 className="text-2xl font-bold mt-6 text-neutral-700 dark:text-neutral-200">
        {t('projects.sanix.card.sanix.demoTitle')}
      </h2>

      <a
        href="https://shoppingcartsanix.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 mb-6 px-8 py-4 text-white text-xl font-semibold rounded-xl shadow 
           bg-gradient-to-r from-[#FF0080] via-[#7928CA] to-[#0070F3]
           transform transition-transform duration-300 ease-in-out
           hover:scale-105 active:scale-95"
      >
        {t('projects.sanix.card.sanix.liveDemo')}
      </a>

      <p>
        🔗{' '}
        <a
          href="https://github.com/Track404/shopping-cart"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block pl-1 bg-gradient-to-r from-[#FF0080] via-[#7928CA] to-[#0070F3] 
             bg-clip-text text-transparent font-semibold hover:underline 
             transform transition-transform duration-300 ease-in-out 
             hover:scale-105 active:scale-95"
        >
          {t('projects.sanix.card.sanix.frontendRepo')}
        </a>
      </p>

      <Safari imageSrc={ScreenShot} className="w-full h-full mt-5 mb-5" />

      <img
        src={ScreenShotMobile}
        className="mx-auto w-1/2  h-full mt-5 mb-5 rounded-xl shadow-md"
        alt="mobile"
      />

      <h2 className="text-2xl font-bold mt-6 text-neutral-700 dark:text-neutral-200">
        {t('projects.sanix.card.sanix.technologiesTitle')}
      </h2>
      <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400">
        {technologies.map((tech, index) => (
          <li key={index}>{tech}</li>
        ))}
      </ul>
    </div>
  );
}
