import React from 'react';

interface SectionStageProps {
  variant?: 'light' | 'soft' | 'dark';
}

function SectionStage({ variant = 'light' }: SectionStageProps) {
  return (
    <div className={`section-stage section-stage-${variant}`}>
      <div className="section-stage-grid" />
      <div className="section-stage-ring section-stage-ring-a" />
      <div className="section-stage-ring section-stage-ring-b" />
      <div className="section-stage-column section-stage-column-a" />
      <div className="section-stage-column section-stage-column-b" />
      <div className="section-stage-node section-stage-node-a" />
      <div className="section-stage-node section-stage-node-b" />
      <div className="section-stage-node section-stage-node-c" />
    </div>
  );
}

export default SectionStage;
