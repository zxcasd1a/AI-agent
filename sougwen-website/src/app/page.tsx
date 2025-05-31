// src/app/page.tsx
import HeroSplit from '@/components/HeroSplit';
import LeadStatement from '@/components/LeadStatement';
import ThumbnailStrip from '@/components/ThumbnailStrip';
import Quote from '@/components/Quote'; // Import Quote

export default function Home() {
  const hero1ImageUrl = "https://images.unsplash.com/photo-1547082688-9077fe203d09?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  const hero2ImageUrl = "https://images.unsplash.com/photo-1581092000590-19100009f2f7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"; // Placeholder for glove & fibre
  const quote1Text = "When we can start to see that the systems we build are actually us in another form,";

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
      {/* This content scrolls OVER the sticky hero image. */}
      <div className="relative z-20 bg-true-white py-10"> {/* Removed fixed height, content will define its height */}
        <p className="text-center mb-10">This content should scroll OVER the sticky hero image.</p>
        <ThumbnailStrip />
        <Quote className="mt-[40px]"> {/* Apply 40px top margin */}
          {quote1Text}
        </Quote>
      </div>
      <div className="h-[100vh] bg-light-gray/50"> {/* More scrollable content */}
        <p className="text-center py-10">More scrollable content...</p>
      </div>
    </>
  );
}
