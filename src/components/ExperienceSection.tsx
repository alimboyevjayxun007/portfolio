import React from 'react';
import { Briefcase, Calendar, CheckCircle } from 'lucide-react';
import type { PortfolioContent } from '../data/localizedPortfolio';
import SectionStage from './SectionStage';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';

interface ExperienceSectionProps {
  content: PortfolioContent['experience'];
}

function ExperienceSection({ content }: ExperienceSectionProps) {
  return (
    <section id="experience" className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-blue-50 py-16 sm:py-20">
      <SectionStage variant="soft" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          icon={<Briefcase size={16} />}
          eyebrow={content.eyebrow}
          title={
            <>
              {content.titleLead} <span className="gradient-text">{content.titleAccent}</span>
            </>
          }
          description={content.description}
        />

        <div className="space-y-6 sm:space-y-8">
          {content.items.map((item, index) => (
            <TiltCard
              key={item.title}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.15}s` }}
              surfaceClassName="ambient-panel rounded-2xl border border-primary-100 bg-white p-5 shadow-lg sm:p-8"
            >
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="depth-layer-2">
                  <h3 className="mb-2 text-xl font-bold text-gray-900 sm:text-2xl">{item.title}</h3>
                  <p className="text-base font-semibold text-primary-600 sm:text-lg">{item.organization}</p>
                </div>
                <div className="depth-layer-1 flex items-center space-x-2 rounded-lg bg-primary-50 px-4 py-2 text-sm text-gray-600 sm:text-base">
                  <Calendar size={18} />
                  <span className="font-medium">{item.period}</span>
                </div>
              </div>

              <p className="depth-layer-1 mb-6 leading-relaxed text-gray-700">{item.description}</p>

              <div>
                <h4 className="depth-layer-2 mb-4 flex items-center text-lg font-semibold text-gray-900">
                  <CheckCircle size={20} className="mr-2 text-green-500" />
                  {content.keyPointsLabel}
                </h4>
                <div className="grid gap-3 md:grid-cols-2">
                  {item.achievements.map((achievement) => (
                    <div key={achievement} className="depth-layer-1 flex items-start space-x-3 rounded-lg bg-gray-50 p-4">
                      <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary-500" />
                      <p className="text-gray-700">{achievement}</p>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
