import React, { type ReactNode } from 'react';

interface SectionHeadingProps {
  icon: ReactNode;
  eyebrow: string;
  title: ReactNode;
  description: string;
  centered?: boolean;
}

function SectionHeading({
  icon,
  eyebrow,
  title,
  description,
  centered = true,
}: SectionHeadingProps) {
  return (
    <div className={centered ? 'mb-16 text-center' : 'mb-12'}>
      <div
        className={`animate-depth-float inline-flex items-center rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-800 shadow-md ${
          centered ? 'mb-6' : 'mb-5'
        }`}
      >
        <span className="mr-2">{icon}</span>
        {eyebrow}
      </div>
      <h2 className="mb-6 text-3xl font-bold text-gray-900 sm:text-4xl md:text-5xl">{title}</h2>
      <p
        className={`text-base text-gray-600 sm:text-lg md:text-xl ${
          centered ? 'mx-auto max-w-3xl' : 'max-w-3xl'
        }`}
      >
        {description}
      </p>
    </div>
  );
}

export default SectionHeading;
