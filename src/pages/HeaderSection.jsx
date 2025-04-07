import { HeroHighlight } from '@/components/ui/hero-highlight';
import { AuroraText } from '@/components/magicui/aurora-text';
import { Highlight } from '@/components/ui/hero-highlight';
import { useTranslation, Trans } from 'react-i18next';
export default function HeaderSection({ headerRef, aboutRef }) {
  const { t } = useTranslation();
  return (
    <>
      <div ref={headerRef}>
        <HeroHighlight ContainerRef={aboutRef} textButton={t('header.seeMore')}>
          <div className="ml-4  h-full mt-20 mb-20 ">
            <h1 className=" flex flex-col ml-2 text-6xl font-bold tracking-tighter sm:text-5xl md:text-7xl lg:text-8xl">
              Full Stack
              <AuroraText>
                <p>Web</p> <p> {t('header.dev')}</p>
              </AuroraText>
            </h1>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl  ml-2 font-bold w-[90%] mt-6 md:mt-10 lg:mt-12 mx-auto text-left   max-w-4xl ">
              <Trans i18nKey="header.part">
                Full stack developer turning complex ideas into seamless web
                experiences. Merging<Highlight>design elegance</Highlight> with{' '}
                <Highlight>functional power</Highlight> through deliberate code.
              </Trans>
            </h2>
          </div>
        </HeroHighlight>
      </div>
    </>
  );
}
