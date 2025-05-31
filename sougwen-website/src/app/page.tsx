// src/app/page.tsx
import HeroSplit from '@/components/HeroSplit';
import LeadStatement from '@/components/LeadStatement';
import ThumbnailStrip from '@/components/ThumbnailStrip';
import Quote from '@/components/Quote';
import HeadingStack from '@/components/HeadingStack';
import FramedArtwork from '@/components/FramedArtwork';
import MosaicGallery from '@/components/MosaicGallery';
import NarrativeParagraph, { NarrativeLink } from '@/components/NarrativeParagraph';
import QAPair from '@/components/QAPair';
import ProjectScroller from '@/components/ProjectScroller';
import FooterLinks from '@/components/FooterLinks'; // Import FooterLinks

export default function Home() {
  const hero1ImageUrl = "https://images.unsplash.com/photo-1547082688-9077fe203d09?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const hero2ImageUrl = "https://images.unsplash.com/photo-1581092000590-19100009f2f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Placeholder for glove & fibre
  const quote1Text = "When we can start to see that the systems we build are actually us in another form,";
  const artwork1Src = "https://images.unsplash.com/photo-1506744038136-46273834b378?w=800&h=800&fit=crop&q=75"; // Placeholder
  const artwork2Src = "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&h=800&fit=crop&q=75"; // Placeholder
  const quote2Text = "There is meaning in the data, but it’s not the meaning we are given; it’s the meaning we make.";

  return (
    <> {/* Using Fragment as Layout already provides a main tag and structure */}
      <HeroSplit
        imageUrl={hero1ImageUrl}
        altText="Stage portrait - figure in profile with dark studio lights"
        objectPosition="60% center"
        showScrollCue={true}
        height="75vh" // Explicitly pass default or desired height
        className="z-10" // Ensure first hero is above potential earlier sticky elements
      />
      <LeadStatement />
      <HeroSplit
        imageUrl={hero2ImageUrl}
        altText="Macro shot of a hand in a knitted glove with swirling teal light trails"
        isSticky={true}
        height="100vh" // Example: Make it full viewport height for sticky effect
        className="z-0" // To allow content to scroll over it
      />

      {/* This content scrolls OVER the sticky hero image. It needs its own padding now. */}
      <div className="relative z-20 bg-true-white"> {/* Removed py-10, HeadingStack has its own py-space-l */}
        <div className="py-10"> {/* Wrapper for existing content to maintain its padding */}
          <p className="text-center mb-10">This content should scroll OVER the sticky hero image.</p>
          <ThumbnailStrip />
          <Quote className="mt-[40px]">
            {quote1Text}
          </Quote>
        </div>

        <HeadingStack
          line1="DRAWING"
          line2="PERFORMANCE"
          showDiagram={true}
          className="relative z-10 mb-[-32px]" // Pulls up the next HeadingStack. Adjust value as needed.
        />
        {/* The second HeadingStack is part of the same conceptual block, so it's within the same z-20 div */}
        <HeadingStack
          line1="× PRACTICE ×"
          line2="INTELLIGENCE"
          showDiagram={false} // No diagram for this one itself
          className="relative z-0 pt-[64px] custom-practice-intelligence-layout" // pt to push content down. z-0 to be below first.
        />
      </div>

      {/* Twin Stacked-Frame Artworks Section */}
      <section className="py-space-l bg-true-white">
        <div className="max-w-[1080px] mx-auto px-space-m sm:px-space-l">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-m md:gap-space-l">
            <FramedArtwork
              src={artwork1Src}
              alt="Abstract Artwork 1"
            />
            <FramedArtwork
              src={artwork2Src}
              alt="Abstract Artwork 2"
            />
          </div>
        </div>
      </section>

      {/* Second Quote Block */}
      <Quote className="mt-space-m"> {/* mt-space-m is 24px */}
        {quote2Text}
      </Quote>

      <MosaicGallery />

      <NarrativeParagraph className="mt-space-l"> {/* Add some top margin if desired */}
        This is a narrative paragraph discussing the intersection of art and technology.
        It aims to provide context and insights into the creative process. You can learn more
        about specific <NarrativeLink href="/projects">projects</NarrativeLink> or delve into
        the <NarrativeLink href="/research">research</NarrativeLink> that underpins these explorations.
        The journey often involves questioning the nature of creativity itself, as explored in
        various <NarrativeLink href="/articles">articles and talks</NarrativeLink>.
      </NarrativeParagraph>

      <QAPair />

      <ProjectScroller />

      <FooterLinks />

      <div className="h-[50vh] bg-light-gray/50"> {/* Reduced height for testing */}
        <p className="text-center py-10">Space for Micro-footer and scroll-top button...</p>
      </div>
    </>
  );
}
