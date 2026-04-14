import React from 'react';
import { Code } from 'lucide-react';
import type { PortfolioContent } from '../data/localizedPortfolio';
import SectionStage from './SectionStage';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';

interface SkillsSectionProps {
  content: PortfolioContent['skills'];
}

function SkillsSection({ content }: SkillsSectionProps) {
  return (
    <section id="skills" className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 py-16 sm:py-20">
      <SectionStage variant="light" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          icon={<Code size={16} />}
          eyebrow={content.eyebrow}
          title={
            <>
              {content.titleLead} <span className="gradient-text">{content.titleAccent}</span>
            </>
          }
          description={content.description}
        />

        <div className="mb-16 grid gap-6 md:grid-cols-2">
          {content.groups.map((group, index) => {
            const Icon = group.icon;

            return (
              <TiltCard
                key={group.title}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
                surfaceClassName="ambient-panel card-hover rounded-2xl border border-gray-100 bg-white p-5 shadow-lg sm:p-6"
              >
                <div className="mb-5 flex items-start space-x-4">
                  <div className="depth-layer-2 rounded-xl bg-primary-50 p-3 text-primary-600">
                    <Icon size={28} />
                  </div>
                  <div className="depth-layer-1">
                    <h3 className="mb-2 text-lg font-bold text-gray-900 sm:text-xl">{group.title}</h3>
                    <p className="leading-relaxed text-gray-600">{group.summary}</p>
                  </div>
                </div>

                <div className="depth-layer-1 flex flex-wrap gap-3">
                  {group.skills.map((skill) => (
                    <span key={skill} className="tech-badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </TiltCard>
            );
          })}
        </div>

        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {content.focusAreas.map((area, index) => {
            const Icon = area.icon;

            return (
              <TiltCard
                key={area.title}
                className="animate-depth-float"
                style={{ animationDelay: `${index * 0.35}s` }}
                surfaceClassName="ambient-panel card-hover rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-lg sm:p-8"
              >
                <div className="depth-layer-3 mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-500 to-blue-500 shadow-lg sm:h-20 sm:w-20">
                  <Icon className="text-white" size={32} />
                </div>
                <h3 className="depth-layer-2 mb-4 text-lg font-bold text-gray-900 sm:text-xl">{area.title}</h3>
                <p className="depth-layer-1 leading-relaxed text-gray-600">{area.description}</p>
              </TiltCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
