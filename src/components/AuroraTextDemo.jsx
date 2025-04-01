import { AuroraText } from './magicui/aurora-text';

export function AuroraTextDemo() {
  return (
    <h1 className=" flex flex-col ml-2 text-6xl font-bold tracking-tighter sm:text-5xl md:text-7xl lg:text-8xl">
      Full Stack{' '}
      <AuroraText>
        <p>Web</p> <p>Developper</p>
      </AuroraText>
    </h1>
  );
}
