import React from 'react';

function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="hero-grid-plane absolute left-1/2 top-[54%] h-[55vh] w-[140vw] -translate-x-1/2" />
      <div className="scene-orb scene-orb-primary absolute left-[4%] top-[12%] h-24 w-24 sm:h-32 sm:w-32 lg:h-44 lg:w-44" />
      <div className="scene-orb scene-orb-secondary absolute right-[8%] top-[14%] h-28 w-28 sm:h-36 sm:w-36 lg:h-52 lg:w-52" />
      <div className="scene-orb scene-orb-tertiary absolute left-[12%] bottom-[10%] h-20 w-20 sm:h-28 sm:w-28 lg:h-36 lg:w-36" />
      <div className="hero-light-beam absolute left-[10%] top-[18%] h-40 w-40 rounded-full sm:h-56 sm:w-56 lg:h-80 lg:w-80" />
      <div className="hero-light-beam hero-light-beam-delayed absolute bottom-[6%] right-[12%] h-36 w-36 rounded-full sm:h-52 sm:w-52 lg:h-72 lg:w-72" />
      <div className="hero-wireframe hero-wireframe-left absolute left-[8%] top-[22%] hidden h-28 w-28 rounded-3xl md:block" />
      <div className="hero-wireframe hero-wireframe-right absolute bottom-[18%] right-[16%] hidden h-24 w-24 rounded-3xl lg:block" />
    </div>
  );
}

export default HeroScene;
