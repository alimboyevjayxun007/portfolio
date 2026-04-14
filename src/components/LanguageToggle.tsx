import React from 'react';
import type { Language } from '../data/localizedPortfolio';

interface LanguageToggleProps {
  language: Language;
  onChange: (language: Language) => void;
  label: string;
  names: Record<Language, string>;
  compact?: boolean;
}

function LanguageToggle({
  language,
  onChange,
  label,
  names,
  compact = false,
}: LanguageToggleProps) {
  return (
    <div
      className={`flex items-center rounded-full border border-gray-200 bg-white/90 p-1 shadow-sm ${
        compact ? 'w-full justify-center' : 'shrink-0'
      }`}
      aria-label={label}
    >
      <div className="flex items-center rounded-full bg-gray-100 p-1">
        {(['uz', 'en'] as Language[]).map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-full px-3 py-1.5 text-xs font-semibold transition-all duration-200 sm:px-4 ${
              language === option
                ? 'bg-primary-600 text-white shadow-sm'
                : 'text-gray-600 hover:text-primary-600'
            }`}
          >
            {names[option]}
          </button>
        ))}
      </div>
    </div>
  );
}

export default LanguageToggle;
