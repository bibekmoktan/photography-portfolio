'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/container';
import type { SiteSettings } from '@/types/site-settings';
import { SOCIAL_ICON_PATHS } from '@/lib/social-links';

export function ContactForm({
  siteSettings,
  serviceOptions,
}: {
  siteSettings: SiteSettings;
  serviceOptions: string[];
}) {
  const [submitted, setSubmitted] = useState(false);
  const options = [...serviceOptions, 'Other'];

  return (
    <section className="bg-white">
      <Container className="py-16 md:py-24">
        <div className="grid gap-12 border-t border-gray-200 pt-16 md:grid-cols-[3fr_1px_2fr]">
          <div>
            {submitted ? (
              <div className="flex flex-col gap-2 rounded-md border border-gray-200 bg-gray-50 p-8">
                <h2 className="font-serif text-2xl text-gray-900">Thanks for reaching out</h2>
                <p className="text-sm leading-relaxed text-gray-600">
                  Your message has been received.
                  {siteSettings.responseTimeNote ? ` ${siteSettings.responseTimeNote}` : ''}
                </p>
              </div>
            ) : (
              <form
                onSubmit={(event) => {
                  event.preventDefault();
                  setSubmitted(true);
                }}
                className="flex flex-col gap-6"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-900">
                      Full Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="rounded-md border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-900">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="rounded-md border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-sm font-medium text-gray-900">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="rounded-md border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <label htmlFor="service" className="text-sm font-medium text-gray-900">
                      Type of Service
                    </label>
                    <select
                      id="service"
                      name="service"
                      defaultValue={options[0]}
                      className="rounded-md border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                    >
                      {options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-900">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="rounded-md border border-gray-300 px-4 py-2.5 text-sm text-gray-900 focus:border-gray-900 focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-fit rounded-md bg-gray-900 px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-700"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="hidden w-px self-stretch bg-gray-200 md:block" />

          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-sm font-semibold text-gray-900">Prefer to reach out directly?</h3>
              {siteSettings.email && (
                <a
                  href={`mailto:${siteSettings.email}`}
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  {siteSettings.email}
                </a>
              )}
              {siteSettings.phone && (
                <a
                  href={`tel:${siteSettings.phone}`}
                  className="text-sm text-gray-600 hover:text-gray-900"
                >
                  {siteSettings.phone}
                </a>
              )}
            </div>

            {siteSettings.basedInLabel && (
              <div className="flex flex-col gap-2 border-t border-gray-200 pt-6">
                <h3 className="text-sm font-semibold text-gray-900">Based In</h3>
                <p className="text-sm text-gray-600">{siteSettings.basedInLabel}</p>
              </div>
            )}

            {siteSettings.socialLinks.length > 0 && (
              <div className="flex flex-col gap-3 border-t border-gray-200 pt-6">
                <h3 className="text-sm font-semibold text-gray-900">Social Media Links</h3>
                <div className="flex gap-2">
                  {siteSettings.socialLinks.map((social) => (
                    <a
                      key={social.platform}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.platform}
                      className="flex h-9 w-9 items-center justify-center rounded-md border border-gray-300 text-gray-900 transition-colors hover:bg-gray-50"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-4 w-4"
                      >
                        <path d={SOCIAL_ICON_PATHS[social.platform]} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
