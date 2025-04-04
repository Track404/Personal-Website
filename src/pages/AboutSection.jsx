import { AuroraText } from '@/components/magicui/aurora-text';
import FrontEndCard from '@/components/FrontEndCard';
import BackEndCard from '@/components/BackEndCard';
import VersionControlCard from '@/components/VersionControlCard';
import { useTranslation } from 'react-i18next';
export default function AboutSection({ aboutRef }) {
  const { t } = useTranslation();
  return (
    <>
      <div
        ref={aboutRef}
        className="relative p-2 min-h-screen border-b-2  shadow-[0_-5px_15px_rgba(0,0,0,0.08),0_5px_15px_rgba(0,0,0,0.08)] "
      >
        <h1 className="ml-2 pt-20 text-5xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          <AuroraText>
            <p className="pb-10">{t('about.pageName')}</p>
          </AuroraText>
        </h1>
        <div className="flex flex-col gap-4 text-gray-800 text-md md:text-xl lg:text-2xl xl:text-3xl mb-5 xl:mb-10 font-semibold p-4 leading-relaxed tracking-tight">
          <div>{t('about.description.part1')}</div>
          <div>{t('about.description.part2')}</div>
        </div>

        <div className="flex flex-col gap-3 md:flex-row justify-around pb-4 xl:h-[40vh]">
          <FrontEndCard />
          <BackEndCard />
          <VersionControlCard />
        </div>
      </div>
    </>
  );
}
