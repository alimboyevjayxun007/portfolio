import React from 'react';
import { MapPin, Target } from 'lucide-react';
import type { PortfolioContent } from '../data/localizedPortfolio';
import SectionStage from './SectionStage';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';

const toneStyles = {
  primary: {
    card: 'from-primary-50 to-blue-50 border-primary-100',
    icon: 'bg-primary-500',
    accent: 'text-primary-600',
  },
  green: {
    card: 'from-green-50 to-emerald-50 border-green-100',
    icon: 'bg-green-500',
    accent: 'text-green-600',
  },
  blue: {
    card: 'from-blue-50 to-indigo-50 border-blue-100',
    icon: 'bg-blue-500',
    accent: 'text-blue-600',
  },
  violet: {
    card: 'from-violet-50 to-fuchsia-50 border-violet-100',
    icon: 'bg-violet-500',
    accent: 'text-violet-600',
  },
} as const;

interface AboutSectionProps {
  content: PortfolioContent['about'];
}

function AboutSection({ content }: AboutSectionProps) {
  return (
    <section id="about" className="relative overflow-hidden bg-white py-16 sm:py-20">
      <SectionStage variant="soft" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          icon={<Target size={16} />}
          eyebrow={content.eyebrow}
          title={
            <>
              {content.titleLead} <span className="gradient-text">{content.titleAccent}</span>
            </>
          }
          description={content.description}
        />

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-6 animate-slide-up sm:space-y-8">
            {content.highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              const tone = toneStyles[highlight.tone];

              return (
                <TiltCard
                  key={highlight.title}
                  className="animate-depth-float"
                  style={{ animationDelay: `${index * 0.6}s` }}
                  surfaceClassName={`rounded-xl border bg-gradient-to-r p-5 shadow-xl sm:p-6 ${tone.card}`}
                >
                  <div className="flex items-start space-x-4">
                    <div className={`depth-layer-2 flex-shrink-0 rounded-xl p-3 text-white shadow-lg ${tone.icon}`}>
                      <Icon size={24} />
                    </div>
                    <div className="min-w-0 depth-layer-1">
                      <p className="mb-1 text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
                        {highlight.eyebrow}
                      </p>
                      <h3 className="mb-2 text-lg font-semibold text-gray-900 sm:text-xl">
                        {highlight.title}
                      </h3>
                      <p className={`font-medium ${tone.accent}`}>{highlight.description}</p>
                    </div>
                  </div>
                </TiltCard>
              );
            })}
          </div>

          <TiltCard
            className="animate-depth-float"
            style={{ animationDelay: '1.2s' }}
            surfaceClassName="ambient-panel rounded-3xl border border-primary-100 bg-gradient-to-br from-primary-50 via-white to-blue-50 p-6 shadow-xl sm:p-8"
          >
            <div className="mb-6 flex items-center space-x-3">
              <div className="depth-layer-2 rounded-lg bg-primary-500 p-2">
                <Target className="text-white" size={20} />
              </div>
              <h3 className="depth-layer-1 text-xl font-bold text-gray-900 sm:text-2xl">
                {content.panelTitle}
              </h3>
            </div>

            <div className="space-y-6">
              {content.mission.map((paragraph) => (
                <p key={paragraph} className="depth-layer-1 leading-relaxed text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="depth-layer-2 mt-8 flex items-center space-x-2 rounded-xl bg-white p-4 text-primary-600 shadow-sm">
              <MapPin size={20} />
              <span className="font-semibold">{content.location}</span>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
