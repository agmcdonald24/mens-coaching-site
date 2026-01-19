import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MyStory from "@/components/MyStory";
import WhoIWorkWith from "@/components/WhoIWorkWith";
import WhatIOffer from "@/components/WhatIOffer";
import WhatChanges from "@/components/WhatChanges";
import MyBackground from "@/components/MyBackground";
import ReadyToStart from "@/components/ReadyToStart";
import SubstackFeed from "@/components/SubstackFeed";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <MyStory />
        <WhoIWorkWith />
        <WhatIOffer />
        <WhatChanges />
        <MyBackground />
        <ReadyToStart />
        <SubstackFeed />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
