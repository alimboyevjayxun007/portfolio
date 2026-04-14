import React from 'react';
import type { PortfolioContent } from '../data/localizedPortfolio';
import SocialLinks from './SocialLinks';

interface FooterProps {
  content: PortfolioContent['footer'];
}

function Footer({ content }: FooterProps) {
  return (
    <footer className="relative overflow-hidden bg-gray-900 py-12 text-white">
      <div className="footer-stage" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-4 text-2xl font-bold gradient-text">Jayxun Alimboyev</div>
          <p className="mx-auto mb-6 max-w-3xl text-sm text-gray-400 sm:text-base">{content.tagline}</p>
          <div className="mb-8">
            <SocialLinks variant="footer" />
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Jayxun Alimboyev. {content.rights}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
