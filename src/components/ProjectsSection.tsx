import React from 'react';
import { Briefcase, CheckCircle, Server } from 'lucide-react';
import type { PortfolioContent } from '../data/localizedPortfolio';
import SectionStage from './SectionStage';
import SectionHeading from './SectionHeading';
import TiltCard from './TiltCard';

interface ProjectsSectionProps {
  content: PortfolioContent['projects'];
}

function ProjectsSection({ content }: ProjectsSectionProps) {
  return (
    <section id="projects" className="relative overflow-hidden bg-white py-16 sm:py-20">
      <SectionStage variant="light" />
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

        <div className="space-y-8 sm:space-y-10">
          {content.cards.map((project, index) => (
            <TiltCard
              key={project.name}
              className="animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
              surfaceClassName="ambient-panel rounded-3xl border border-primary-100 bg-gradient-to-r from-white via-primary-50 to-blue-50 p-5 shadow-lg sm:p-8"
            >
              <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
                <div className="max-w-3xl">
                  <div className="depth-layer-1 mb-3 flex flex-wrap gap-3">
                    <span className="rounded-full bg-white px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-700 shadow-sm sm:text-xs">
                      {project.eyebrow}
                    </span>
                    <span className="rounded-full border border-primary-100 bg-primary-100 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-primary-800 sm:text-xs">
                      {project.deliveryType}
                    </span>
                  </div>

                  <h3 className="depth-layer-3 mb-2 text-2xl font-bold text-gray-900 sm:text-3xl">{project.name}</h3>
                  <p className="depth-layer-2 mb-4 text-base font-semibold text-primary-600 sm:text-lg">{project.role}</p>
                  <p className="depth-layer-1 leading-relaxed text-gray-700">{project.summary}</p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:max-w-md">
                  <div className="depth-layer-2 rounded-2xl bg-white p-4 shadow-sm sm:p-5">
                    <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
                      {content.labels.deliveryLens}
                    </p>
                    <p className="font-semibold text-gray-900">{project.deliveryType}</p>
                  </div>
                  <div className="depth-layer-1 rounded-2xl bg-white p-4 shadow-sm sm:p-5">
                    <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-gray-500">
                      {content.labels.role}
                    </p>
                    <p className="font-semibold text-gray-900">{project.role}</p>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 lg:grid-cols-[1.25fr_0.75fr]">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="depth-layer-1 rounded-2xl bg-white p-5 shadow-sm sm:p-6">
                    <h4 className="mb-4 flex items-center text-lg font-semibold text-gray-900">
                      <Server size={20} className="mr-2 text-primary-600" />
                      {content.labels.programScope}
                    </h4>
                    <div className="space-y-3">
                      {project.programScope.map((item) => (
                        <div key={item} className="flex items-start space-x-3">
                          <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary-500" />
                          <p className="text-gray-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="depth-layer-2 rounded-2xl bg-white p-5 shadow-sm sm:p-6">
                    <h4 className="mb-4 flex items-center text-lg font-semibold text-gray-900">
                      <Briefcase size={20} className="mr-2 text-primary-600" />
                      {content.labels.contribution}
                    </h4>
                    <div className="space-y-3">
                      {project.responsibilities.map((item) => (
                        <div key={item} className="flex items-start space-x-3">
                          <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary-500" />
                          <p className="text-gray-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="depth-layer-3 rounded-2xl bg-white p-5 shadow-sm sm:p-6">
                    <h4 className="mb-4 flex items-center text-lg font-semibold text-gray-900">
                      <CheckCircle size={20} className="mr-2 text-green-500" />
                      {content.labels.impact}
                    </h4>
                    <div className="space-y-3">
                      {project.impact.map((item) => (
                        <div key={item} className="flex items-start space-x-3">
                          <div className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-green-500" />
                          <p className="text-gray-700">{item}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="depth-layer-1 rounded-2xl bg-white p-5 shadow-sm sm:p-6">
                    <h4 className="mb-4 text-lg font-semibold text-gray-900">{content.labels.stack}</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.stack.map((item) => (
                        <span key={item} className="tech-badge">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.note && (
                    <div className="depth-layer-2 rounded-2xl border border-amber-200 bg-amber-50 p-5 shadow-sm sm:p-6">
                      <p className="mb-2 text-sm font-medium uppercase tracking-[0.18em] text-amber-700">
                        {content.labels.scopeNote}
                      </p>
                      <p className="text-amber-900">{project.note}</p>
                    </div>
                  )}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
