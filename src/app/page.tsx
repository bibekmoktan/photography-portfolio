import { Hero, About, MyServices, AlbumsGrid, TravelStories } from '@/components/sections';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <MyServices />
      <AlbumsGrid limit={6} />
      <TravelStories />
    </>
  );
}
