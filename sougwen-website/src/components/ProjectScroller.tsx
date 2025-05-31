// src/components/ProjectScroller.tsx
import React from 'react';
import ProjectCard from './ProjectCard';

const projects = [
  { id: 'proj1', imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b378?w=400&h=300&fit=crop&q=75', caption: 'WORKSHOP', linkUrl: '/workshop' },
  { id: 'proj2', imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=400&h=300&fit=crop&q=75', caption: 'WORK 2', linkUrl: '/work-2' },
  { id: 'proj3', imageUrl: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=400&h=300&fit=crop&q=75', caption: 'WORK 3', linkUrl: '/work-3' },
  { id: 'proj4', imageUrl: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=400&h=300&fit=crop&q=75', caption: 'WORK 4', linkUrl: '/work-4' }, // Added a 4th for mobile scroll testing
];

const ProjectScroller: React.FC = () => {
  return (
    <section className="py-space-l bg-true-white">
      <div className="max-w-[1080px] mx-auto px-space-m sm:px-space-l">
        {/* Mobile: Horizontal scroll snap container */}
        <div className="md:hidden">
          <div
            className="flex overflow-x-auto snap-x snap-mandatory gap-x-space-m pb-4"
          >
            {projects.map((project) => (
              <div key={project.id} className="snap-start flex-shrink-0 w-[80%] sm:w-[70%]">
                {/* Changed sm width to 70% for better visibility of next card on small tablets */}
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop: 3-up grid (displays first 3) */}
        <div className="hidden md:grid md:grid-cols-3 md:gap-x-space-m">
          {projects.slice(0, 3).map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectScroller;
