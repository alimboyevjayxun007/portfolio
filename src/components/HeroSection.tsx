import React from 'react';
import { Briefcase, ChevronDown, Mail, Star } from 'lucide-react';
import type { PortfolioContent } from '../data/localizedPortfolio';
import HeroScene from './HeroScene';
import SocialLinks from './SocialLinks';
import TiltCard from './TiltCard';

interface HeroSectionProps {
  content: PortfolioContent['hero'];
  onNavigate: (sectionId: string) => void;
}

function HeroSection({ content, onNavigate }: HeroSectionProps) {
  const floatingHighlights = content.highlights.slice(0, 3);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-primary-50 via-white to-blue-50 pt-20"
    >
      <HeroScene />

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="order-2 text-center animate-fade-in lg:order-1 lg:text-left">
            <div className="mb-8 flex justify-center lg:justify-start">
              <div className="relative w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[420px]">
                <div className="pointer-events-none absolute -left-10 top-8 hidden md:block">
                  <div className="depth-chip depth-layer-3">{floatingHighlights[0]}</div>
                </div>
                <div className="pointer-events-none absolute -right-12 top-1/2 hidden -translate-y-1/2 lg:block">
                  <div className="depth-chip depth-layer-2" style={{ animationDelay: '-2s' }}>
                    {floatingHighlights[1]}
                  </div>
                </div>
                <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 xl:block">
                  <div className="depth-chip depth-layer-1" style={{ animationDelay: '-4s' }}>
                    {floatingHighlights[2]}
                  </div>
                </div>

                <TiltCard
                  className="animate-depth-float"
                  surfaceClassName="ambient-panel depth-outline rounded-3xl border border-gray-200 bg-white p-2 shadow-2xl"
                >
                  <img
                    src="/image.png"
                    alt={content.imageAlt}
                    className="depth-layer-3 block h-auto w-full rounded-2xl"
                  />
                </TiltCard>
              </div>
            </div>
          </div>

          <div className="order-1 text-center animate-slide-up lg:order-2 lg:text-left">
            <div className="mb-6">
              <div className="mb-4 inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-xs font-medium text-primary-800 shadow-md sm:text-sm">
                <Star size={16} className="mr-2" />
                {content.availabilityBadge}
              </div>
              <h1 className="mb-4 text-4xl font-bold leading-tight text-gray-900 sm:text-5xl md:text-6xl">
                <span className="gradient-text">Jayxun Alimboyev</span>
              </h1>
            </div>

            <p className="mb-2 text-base font-medium text-gray-500 sm:text-lg md:text-xl">
              {content.subtitle}
            </p>

            <p className="mb-6 text-2xl font-bold text-gray-700 sm:mb-8 md:text-3xl">
              {content.role}
            </p>

            <p className="mb-8 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
              {content.summary}
            </p>

            <div className="mb-10 flex flex-wrap justify-center gap-3 lg:justify-start">
              {content.highlights.map((item) => (
                <span
                  key={item}
                  className="depth-chip !rounded-full !px-3 !py-2 !text-[11px] !tracking-[0.14em] sm:!px-4 sm:!text-sm"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
              <button
                type="button"
                onClick={() => onNavigate('projects')}
                className="flex w-full items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-primary-600 to-blue-600 px-6 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:from-primary-700 hover:to-blue-700 hover:shadow-xl sm:w-auto sm:px-8 md:hover:-translate-y-2 md:hover:scale-[1.03]"
              >
                <Briefcase size={20} />
                <span>{content.primaryCta}</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate('contact')}
                className="flex w-full items-center justify-center space-x-2 rounded-xl border-2 border-primary-600 px-6 py-4 font-semibold text-primary-600 shadow-lg transition-all duration-300 hover:bg-primary-600 hover:text-white hover:shadow-xl sm:w-auto sm:px-8 md:hover:-translate-y-2 md:hover:scale-[1.03]"
              >
                <Mail size={20} />
                <span>{content.secondaryCta}</span>
              </button>
            </div>

            <SocialLinks variant="hero" />
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() => onNavigate('about')}
        aria-label={content.scrollHintAriaLabel}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 transform animate-bounce text-primary-600 sm:block"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}

export default HeroSection;
