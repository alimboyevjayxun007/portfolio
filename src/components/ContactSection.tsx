import React, { useState, type ChangeEvent, type FormEvent } from 'react';
import emailjs from '@emailjs/browser';
import { CheckCircle, Mail, MapPin, Send, X } from 'lucide-react';
import type { PortfolioContent } from '../data/localizedPortfolio';
import SectionStage from './SectionStage';
import SectionHeading from './SectionHeading';
import SocialLinks from './SocialLinks';
import TiltCard from './TiltCard';

type SubmitStatus = '' | 'success' | 'error';

interface ContactSectionProps {
  content: PortfolioContent['contact'];
}

function getErrorMessage(error: unknown, fallback: string) {
  if (typeof error === 'object' && error !== null) {
    if ('text' in error && typeof error.text === 'string') {
      return error.text;
    }

    if ('message' in error && typeof error.message === 'string') {
      return error.message;
    }
  }

  return fallback;
}

const toneStyles = {
  primary: {
    badge: 'bg-primary-100',
    text: 'text-primary-600',
  },
  green: {
    badge: 'bg-green-100',
    text: 'text-green-600',
  },
  red: {
    badge: 'bg-red-100',
    text: 'text-red-600',
  },
  blue: {
    badge: 'bg-blue-100',
    text: 'text-blue-600',
  },
} as const;

function ContactSection({ content }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('');

  const handleInputChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('');

    try {
      if (!formData.name.trim()) {
        throw new Error(content.form.nameRequired);
      }

      if (!formData.email.trim()) {
        throw new Error(content.form.emailRequired);
      }

      if (!formData.message.trim()) {
        throw new Error(content.form.messageRequired);
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        throw new Error(content.form.emailInvalid);
      }

      await emailjs.send(
        'service_rmr5i9a',
        'template_9i16kck',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_name: 'Jayxun Alimboyev',
          to_email: 'alimboyevjayxun007@gmail.com',
        },
        'AkGG0XWlUK4psm4wH',
      );

      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      window.setTimeout(() => setSubmitStatus(''), 5000);
    } catch (error) {
      console.error('Email send error:', getErrorMessage(error, content.form.genericError));
      setSubmitStatus('error');
      window.setTimeout(() => setSubmitStatus(''), 7000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative overflow-hidden bg-white py-16 sm:py-20">
      <SectionStage variant="light" />
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          icon={<Mail size={16} />}
          eyebrow={content.eyebrow}
          title={
            <>
              {content.titleLead} <span className="gradient-text">{content.titleAccent}</span>
            </>
          }
          description={content.description}
        />

        <div className="grid gap-12 lg:grid-cols-2">
          <div className="space-y-8">
            <div>
              <h3 className="mb-6 text-2xl font-bold text-gray-900">{content.workTitle}</h3>
              <p className="mb-8 leading-relaxed text-gray-600">{content.workDescription}</p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {content.infoItems.map((item, index) => {
                const Icon = item.icon;
                const tone = toneStyles[item.tone];

                return (
                  <TiltCard
                    key={item.title}
                    className="animate-depth-float"
                    style={{ animationDelay: `${index * 0.25}s` }}
                    surfaceClassName="rounded-xl border border-gray-100 bg-gray-50 p-4 shadow-md"
                  >
                    <div className="flex items-center space-x-4">
                      <div className={`depth-layer-2 rounded-xl p-3 ${tone.badge}`}>
                        <Icon className={tone.text} size={24} />
                      </div>
                      <div className="min-w-0 depth-layer-1">
                        <h4 className="font-semibold text-gray-900">{item.title}</h4>
                        {item.href ? (
                          <a
                            href={item.href}
                            target={item.href.startsWith('http') ? '_blank' : undefined}
                            rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                            className={`break-all font-medium transition-colors hover:opacity-80 ${tone.text}`}
                          >
                            {item.value}
                          </a>
                        ) : (
                          <p className="text-gray-600">{item.value}</p>
                        )}
                      </div>
                    </div>
                  </TiltCard>
                );
              })}
            </div>

            <div className="pt-4">
              <h4 className="mb-4 text-lg font-semibold text-gray-900">{content.followLabel}</h4>
              <SocialLinks variant="panel" />
            </div>
          </div>

          <TiltCard surfaceClassName="ambient-panel rounded-3xl border border-gray-100 bg-gradient-to-br from-gray-50 to-blue-50 p-6 shadow-xl sm:p-8">
            <h3 className="depth-layer-2 mb-6 text-2xl font-bold text-gray-900">{content.cardTitle}</h3>

            {submitStatus === 'success' && (
              <div className="depth-layer-1 mb-6 flex items-center space-x-3 rounded-lg border border-green-200 bg-green-50 p-4">
                <CheckCircle className="text-green-600" size={20} />
                <p className="font-medium text-green-800">{content.successMessage}</p>
              </div>
            )}

            {submitStatus === 'error' && (
              <div className="depth-layer-1 mb-6 flex items-center space-x-3 rounded-lg border border-red-200 bg-red-50 p-4">
                <X className="text-red-600" size={20} />
                <div>
                  <p className="font-medium text-red-800">{content.errorTitle}</p>
                  <p className="mt-1 text-sm text-red-700">{content.errorDescription}</p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="depth-layer-1 space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-gray-700">
                  {content.form.nameLabel}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-primary-500"
                  placeholder={content.form.namePlaceholder}
                />
              </div>

              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-gray-700">
                  {content.form.emailLabel}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full rounded-xl border border-gray-300 px-4 py-3 shadow-sm transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-primary-500"
                  placeholder={content.form.emailPlaceholder}
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-gray-700">
                  {content.form.messageLabel}
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full resize-none rounded-xl border border-gray-300 px-4 py-3 shadow-sm transition-all duration-200 focus:border-transparent focus:ring-2 focus:ring-primary-500"
                  placeholder={content.form.messagePlaceholder}
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-primary-600 to-blue-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:from-primary-700 hover:to-blue-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <>
                    <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white" />
                    <span>{content.form.submitting}</span>
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    <span>{content.form.submit}</span>
                  </>
                )}
              </button>
            </form>

            <div className="depth-layer-1 mt-6 border-t border-gray-200 pt-6">
              <p className="text-center text-sm text-gray-500">{content.directLabel}</p>
              <div className="mt-3 flex flex-wrap justify-center gap-3 sm:gap-4">
                <a
                  href="mailto:alimboyevjayxun007@gmail.com"
                  className="text-sm font-medium text-primary-600 hover:text-primary-700"
                >
                  {content.directLinks.email}
                </a>
                <span className="hidden text-gray-300 sm:inline">|</span>
                <a
                  href="https://t.me/AlimboyevJayxun"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-primary-600 hover:text-primary-700"
                >
                  {content.directLinks.telegram}
                </a>
                <span className="hidden text-gray-300 sm:inline">|</span>
                <a
                  href="tel:+998941992604"
                  className="text-sm font-medium text-primary-600 hover:text-primary-700"
                >
                  {content.directLinks.call}
                </a>
              </div>
            </div>

            <div className="depth-layer-2 mt-8 rounded-2xl bg-white p-5 shadow-sm">
              <div className="mb-2 flex items-center space-x-2 text-primary-600">
                <MapPin size={18} />
                <span className="font-semibold">{content.locationTitle}</span>
              </div>
              <p className="text-sm leading-relaxed text-gray-600">{content.locationDescription}</p>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
