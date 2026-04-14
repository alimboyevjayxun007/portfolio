import React from 'react';
import { Menu, X } from 'lucide-react';
import type { Language, NavItem } from '../data/localizedPortfolio';
import LanguageToggle from './LanguageToggle';

interface NavigationProps {
  items: NavItem[];
  activeSection: string;
  isMenuOpen: boolean;
  language: Language;
  languageLabel: string;
  languageNames: Record<Language, string>;
  menuAriaLabel: string;
  onChangeLanguage: (language: Language) => void;
  onToggleMenu: () => void;
  onNavigate: (sectionId: string) => void;
}

function Navigation({
  items,
  activeSection,
  isMenuOpen,
  language,
  languageLabel,
  languageNames,
  menuAriaLabel,
  onChangeLanguage,
  onToggleMenu,
  onNavigate,
}: NavigationProps) {
  return (
    <nav className="fixed top-0 z-50 w-full overflow-hidden border-b border-gray-100 bg-white/95 shadow-lg backdrop-blur-md">
      <div className="nav-sheen" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-3 py-3 sm:py-4">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="max-w-[48vw] truncate text-left text-base font-bold gradient-text sm:max-w-none sm:text-2xl"
          >
            Jayxun Alimboyev
          </button>

          <div className="hidden items-center gap-3 md:flex">
            <div className="flex md:space-x-2 lg:space-x-4">
              {items.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNavigate(item.id)}
                  className={`rounded-lg px-3 py-2 text-sm font-medium transition-all duration-300 lg:px-4 ${
                    activeSection === item.id
                      ? 'bg-primary-50 font-semibold text-primary-600 shadow-sm'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-primary-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
            <LanguageToggle
              language={language}
              onChange={onChangeLanguage}
              label={languageLabel}
              names={languageNames}
            />
          </div>

          <div className="flex shrink-0 items-center gap-2 md:hidden">
            <LanguageToggle
              language={language}
              onChange={onChangeLanguage}
              label={languageLabel}
              names={languageNames}
            />
            <button
              type="button"
              className="rounded-lg p-2 transition-colors hover:bg-gray-100"
              onClick={onToggleMenu}
              aria-label={menuAriaLabel}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="border-t border-gray-100 bg-white shadow-lg md:hidden">
          <div className="space-y-2 px-4 py-3">
            {items.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                className={`block w-full rounded-lg px-4 py-3 text-left font-medium transition-all duration-200 ${
                  activeSection === item.id
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-gray-600 hover:bg-primary-50 hover:text-primary-600'
                }`}
              >
                {item.label}
              </button>
            ))}
            <div className="pt-2">
              <LanguageToggle
                language={language}
                onChange={onChangeLanguage}
                label={languageLabel}
                names={languageNames}
                compact
              />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navigation;
