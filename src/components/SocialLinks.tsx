import React from 'react';
import { socialLinks } from '../data/localizedPortfolio';

type SocialLinksVariant = 'hero' | 'panel' | 'footer';

interface SocialLinksProps {
  variant?: SocialLinksVariant;
}

const wrapperClasses: Record<SocialLinksVariant, string> = {
  hero: 'flex flex-wrap justify-center gap-3 sm:gap-4 lg:justify-start',
  panel: 'flex flex-wrap gap-3 sm:gap-4',
  footer: 'flex flex-wrap justify-center gap-4 sm:gap-6',
};

const linkClasses: Record<SocialLinksVariant, string> = {
  hero:
    'group rounded-xl border border-gray-100 bg-white p-3 shadow-lg transition-all duration-300 hover:shadow-xl sm:p-4 md:hover:-translate-y-2 md:hover:scale-110 md:hover:rotate-3',
  panel:
    'rounded-xl border border-gray-100 bg-white p-3 shadow-sm transition-all duration-200 hover:shadow-md md:hover:-translate-y-1',
  footer:
    'rounded-lg p-2 text-gray-400 transition-colors duration-200 hover:bg-gray-800 hover:text-white',
};

const iconClasses: Record<SocialLinksVariant, Record<string, string>> = {
  hero: {
    GitHub: 'text-gray-700 group-hover:text-gray-900',
    LinkedIn: 'text-blue-600 group-hover:text-blue-700',
    Telegram: 'text-blue-500 group-hover:text-blue-600',
    Instagram: 'text-pink-600 group-hover:text-pink-700',
    Email: 'text-red-600 group-hover:text-red-700',
  },
  panel: {
    GitHub: 'text-gray-700',
    LinkedIn: 'text-blue-600',
    Telegram: 'text-blue-500',
    Instagram: 'text-pink-600',
    Email: 'text-red-600',
  },
  footer: {
    GitHub: 'text-current',
    LinkedIn: 'text-current',
    Telegram: 'text-current',
    Instagram: 'text-current',
    Email: 'text-current',
  },
};

function SocialLinks({ variant = 'hero' }: SocialLinksProps) {
  return (
    <div className={wrapperClasses[variant]}>
      {socialLinks.map((link) => {
        const Icon = link.icon;

        return (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith('http') ? '_blank' : undefined}
            rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            aria-label={link.label}
            className={linkClasses[variant]}
          >
            <Icon size={variant === 'hero' ? 22 : 24} className={iconClasses[variant][link.label]} />
          </a>
        );
      })}
    </div>
  );
}

export default SocialLinks;
