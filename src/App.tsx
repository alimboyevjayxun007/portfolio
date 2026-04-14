import React, { useEffect, useMemo, useState } from 'react';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import ExperienceSection from './components/ExperienceSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import Navigation from './components/Navigation';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import {
  defaultLanguage,
  getPortfolioData,
  languageStorageKey,
  sectionIds,
  type Language,
} from './data/localizedPortfolio';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [language, setLanguage] = useState<Language>(() => {
    if (typeof window === 'undefined') {
      return defaultLanguage;
    }

    const savedLanguage = window.localStorage.getItem(languageStorageKey);
    return savedLanguage === 'en' || savedLanguage === 'uz' ? savedLanguage : defaultLanguage;
  });

  const content = useMemo(() => getPortfolioData(language), [language]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      for (const sectionId of sectionIds) {
        const element = document.getElementById(sectionId);

        if (!element) {
          continue;
        }

        const { offsetTop, offsetHeight } = element;
        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.localStorage.setItem(languageStorageKey, language);
    document.documentElement.lang = language;
    document.title = content.metadata.title;

    const descriptionMeta = document.querySelector('meta[name="description"]');
    if (descriptionMeta) {
      descriptionMeta.setAttribute('content', content.metadata.description);
    }
  }, [content.metadata.description, content.metadata.title, language]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen overflow-x-clip bg-white">
      <Navigation
        items={content.navigation}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        language={language}
        languageLabel={content.ui.languageLabel}
        languageNames={content.ui.languageNames}
        menuAriaLabel={content.ui.menuAriaLabel}
        onChangeLanguage={setLanguage}
        onToggleMenu={() => setIsMenuOpen((prev) => !prev)}
        onNavigate={scrollToSection}
      />
      <HeroSection content={content.hero} onNavigate={scrollToSection} />
      <AboutSection content={content.about} />
      <SkillsSection content={content.skills} />
      <ProjectsSection content={content.projects} />
      <ExperienceSection content={content.experience} />
      <ContactSection content={content.contact} />
      <Footer content={content.footer} />
    </div>
  );
}

export default App;
