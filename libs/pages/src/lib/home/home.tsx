import React from 'react';
import clsx from 'clsx';
import { packages, faqs } from './utils/constants';
import * as styles from './utils/styles';

export const WebbitStudioHomePage: React.FC = () => {
  return (
    <div className={styles.layout.page}>
      {/* Page wrapper */}
      <div className={styles.layout.container}>
        {/* Header / Nav */}
        <header className={styles.header.root}>
          <div className={styles.header.logo.container}>
            <div className={styles.header.logo.icon}>
              <span className={styles.header.logo.iconText}>W</span>
            </div>
            <div className={styles.header.logo.textContainer}>
              <span className={styles.header.logo.title}>Webbit Studio</span>
              <span className={styles.header.logo.subtitle}>
                Websites for modern businesses
              </span>
            </div>
          </div>
          <nav className={styles.header.nav.root}>
            <a href="#packages" className={styles.header.nav.link}>
              Packages
            </a>
            <a href="#process" className={styles.header.nav.link}>
              How it works
            </a>
            <a href="#pricing" className={styles.header.nav.link}>
              Pricing
            </a>
            <a href="#faq" className={styles.header.nav.link}>
              FAQ
            </a>
            <a href="#contact" className={styles.button.primarySmall}>
              Start your project
            </a>
          </nav>
        </header>

        {/* Hero */}
        <section
          aria-labelledby="hero-heading"
          className={styles.layout.grid2Cols}
        >
          <div className={styles.hero.content}>
            <p className={styles.typography.badge}>
              <span className={styles.hero.badge} />
              Serving clients in Israel, India, Europe, US & Canada
            </p>

            <h1 id="hero-heading" className={styles.typography.h1}>
              Websites that make your business look great — delivered fast.
            </h1>

            <p className={styles.combined.bodyWithMaxWidth}>
              Webbit Studio builds landing pages, business websites, hosting
              setups, deployments, and custom admin panels so you can manage
              your content with ease. Designed for small businesses worldwide.
            </p>

            <div className={styles.hero.actions}>
              <a href="#contact" className={styles.button.primary}>
                Start your project
              </a>
              <a href="#packages" className={styles.button.secondary}>
                See packages
              </a>
            </div>

            <p className={styles.hero.trust}>
              Trusted by small businesses and startups worldwide. Most projects
              completed in under 7 days.
            </p>
          </div>

          {/* Hero visual */}
          <div className={styles.hero.visual}>
            <div className={styles.hero.gradient} />
            <div className={styles.card.hero}>
              {/* Browser mock */}
              <div className={styles.hero.browserHeader}>
                <span
                  className={clsx(
                    styles.hero.browserDot,
                    styles.colors.rose500
                  )}
                />
                <span
                  className={clsx(
                    styles.hero.browserDot,
                    styles.colors.amber400
                  )}
                />
                <span
                  className={clsx(
                    styles.hero.browserDot,
                    styles.colors.emerald400
                  )}
                />
                <span className={styles.hero.browserUrl}>webbitstudio.com</span>
              </div>

              <div className={styles.hero.mockContainer}>
                <div className={styles.hero.mockElement} />
                <div className={styles.hero.mockElement2} />
                <div className={styles.hero.mockGrid}>
                  <div className={styles.hero.mockCard} />
                  <div className={styles.hero.mockColumn}>
                    <div className={styles.hero.mockBar1} />
                    <div className={styles.hero.mockBar2} />
                    <div className={styles.hero.mockBar3} />
                  </div>
                  <div className={styles.hero.mockColumn}>
                    <div className={styles.hero.mockBar4} />
                    <div className={styles.hero.mockBar5} />
                    <div className={styles.hero.mockButton} />
                  </div>
                </div>
                <div className={styles.hero.mockCardsGrid}>
                  <div className={styles.card.heroBrowserMock}>
                    <p className={styles.hero.mockCardText}>Landing</p>
                    <p className={styles.hero.mockCardSubtext}>
                      Fast, simple, effective.
                    </p>
                  </div>
                  <div className={styles.card.heroBrowserMock}>
                    <p className={styles.hero.mockCardText}>Pro Site</p>
                    <p className={styles.hero.mockCardSubtext}>
                      Multi-page & hosted.
                    </p>
                  </div>
                  <div className={styles.card.heroBrowserMock}>
                    <p className={styles.hero.mockCardText}>Premium CMS</p>
                    <p className={styles.hero.mockCardSubtext}>
                      Edit content yourself.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Social proof / tech strip */}
        <section className={styles.techStrip.root}>
          <div className={styles.techStrip.container}>
            <p>Built with modern, reliable technology.</p>
            <div className={styles.techStrip.badges}>
              <span className={styles.typography.techBadge}>React</span>
              <span className={styles.typography.techBadge}>TypeScript</span>
              <span className={styles.typography.techBadge}>Tailwind</span>
              <span className={styles.typography.techBadge}>Vite</span>
              <span className={styles.typography.techBadge}>
                Modern hosting
              </span>
            </div>
          </div>
        </section>

        {/* Packages */}
        <section
          id="packages"
          aria-labelledby="packages-heading"
          className={styles.section.default}
        >
          <div className={styles.layout.sectionHeader}>
            <div>
              <h2 id="packages-heading" className={styles.typography.h2}>
                Packages for every stage of your business
              </h2>
              <p className={styles.combined.bodyWithMaxWidth}>
                From simple landing pages to full websites with a self-managed
                admin panel, choose the option that fits your current needs.
              </p>
            </div>
            <p className={styles.typography.bodyExtraSmall}>
              Most projects completed in 3–7 days.
            </p>
          </div>

          <div className={styles.layout.grid3Cols}>
            {packages.map((pkg) => (
              <article key={pkg.name} className={styles.card.package}>
                <div className={styles.packageCard.header}>
                  <h3 className={styles.typography.h3Base}>{pkg.name}</h3>
                  <span className={styles.typography.tagSmall}>
                    {pkg.highlight}
                  </span>
                </div>
                <p className={styles.packageCard.tagline}>{pkg.tagline}</p>
                <p className={styles.packageCard.description}>
                  {pkg.description}
                </p>

                <ul className={styles.list.features}>
                  {pkg.features.map((feature) => (
                    <li key={feature} className={styles.list.featureItem}>
                      <span className={styles.list.bullet} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <div className={styles.packageCard.pricing}>
                  <p className={styles.colors.slate[200]}>
                    <span className={styles.packageCard.priceLabel}>
                      Starting from{' '}
                    </span>
                    <span className={styles.packageCard.priceAmount}>
                      {pkg.startingPrice}
                    </span>
                  </p>
                  <p className={styles.packageCard.priceRange}>
                    Typical range: {pkg.typicalRange}
                  </p>
                  <p className={styles.packageCard.priceNote}>
                    Final quote depends on region &amp; project complexity.
                  </p>
                </div>

                <div className={styles.packageCard.cta}>
                  <a href="#contact" className={styles.button.light}>
                    Get a tailored quote
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section
          id="process"
          aria-labelledby="process-heading"
          className={styles.section.withBorder}
        >
          <div className={styles.combined.sectionIntro}>
            <h2 id="process-heading" className={styles.typography.h2}>
              A simple process from idea to live website
            </h2>
            <p className={styles.combined.bodyWithSpacing}>
              We keep things straightforward so you always know what's next.
              Most projects follow this four-step flow.
            </p>
          </div>

          <div className={styles.layout.grid4Cols}>
            {[
              {
                step: '1',
                title: 'Tell us what you need',
                text: 'Share your business, goals, and what kind of website you’re looking for.',
              },
              {
                step: '2',
                title: 'We design it',
                text: 'We create a clean, modern layout tailored to your brand and audience.',
              },
              {
                step: '3',
                title: 'We build & deploy',
                text: 'We handle development, hosting, and deployment so everything just works.',
              },
              {
                step: '4',
                title: 'You go live — fast',
                text: 'We launch your site, and you start sharing it with your customers.',
              },
            ].map((item) => (
              <div key={item.step} className={styles.card.process}>
                <div className={styles.processStep.header}>
                  <span className={styles.processStep.badge}>{item.step}</span>
                  <h3 className={styles.typography.h3Small}>{item.title}</h3>
                </div>
                <p className={styles.processStep.text}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Webbit Studio */}
        <section
          aria-labelledby="why-heading"
          className={styles.section.default}
        >
          <div className={styles.combined.sectionIntro}>
            <h2 id="why-heading" className={styles.typography.h2}>
              Why Webbit Studio?
            </h2>
            <p className={styles.combined.bodyWithSpacing}>
              We focus on modern technology, clean design, and timelines that
              actually work for busy business owners.
            </p>
          </div>

          <div className={styles.layout.grid3Cols}>
            {[
              {
                title: 'Fast delivery',
                text: 'Most landing pages are finished in 2–4 days. Pro and Premium websites typically ship within a week.',
              },
              {
                title: 'Global-friendly pricing',
                text: 'We serve clients in Israel, India, Europe, the US & Canada, and adjust final quotes based on region and business size.',
              },
              {
                title: 'Modern technology',
                text: 'React, TypeScript, Tailwind, and modern hosting platforms keep your site fast and reliable.',
              },
              {
                title: 'Designed for conversion',
                text: 'Each page is structured to guide visitors toward contacting you or using your service.',
              },
              {
                title: 'Flexible content management',
                text: 'Choose simple one-time build packages, or go Premium and manage your own content through a custom admin panel.',
              },
              {
                title: 'Clear communication',
                text: 'Reach us via email, WhatsApp, or video call. We keep you updated from start to launch.',
              },
            ].map((item) => (
              <div key={item.title} className={styles.card.default}>
                <h3 className={styles.typography.h3Small}>{item.title}</h3>
                <p className={styles.combined.cardTextWithSpacing}>
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section
          id="pricing"
          aria-labelledby="pricing-heading"
          className={styles.section.withBorderLarge}
        >
          <div className={styles.pricing.container}>
            <div>
              <h2 id="pricing-heading" className={styles.typography.h2}>
                Simple, fair, global pricing
              </h2>
              <p className={styles.combined.pricingIntro}>
                We show USD "starting from" prices so expectations are clear,
                then adjust final quotes based on your region and project
                complexity.
              </p>
            </div>
            <div className={styles.pricing.sideNote}>
              <p>Regional pricing available.</p>
              <p>
                Ask for a tailored quote for Israel, India, Europe, US & Canada.
              </p>
            </div>
          </div>

          <div className={styles.pricing.list}>
            <div>
              <h3 className={styles.typography.h3Pricing}>
                Landing Page Package
              </h3>
              <p className={styles.pricing.item}>
                <span className={styles.pricing.label}>Starting from </span>
                <span className={styles.pricing.amount}>$249</span>{' '}
                <span className={styles.typography.bodyExtraSmall}>
                  (typical range: $249–$399)
                </span>
              </p>
              <p className={styles.pricing.note}>
                Final quote depends on region &amp; project complexity.
              </p>
            </div>

            <div>
              <h3 className={styles.typography.h3Pricing}>
                Pro Business Website
              </h3>
              <p className={styles.pricing.item}>
                <span className={styles.pricing.label}>Starting from </span>
                <span className={styles.pricing.amount}>$499</span>{' '}
                <span className={styles.typography.bodyExtraSmall}>
                  (typical range: $499–$899)
                </span>
              </p>
              <p className={styles.pricing.note}>
                Subscription for hosting &amp; domain applies. Regional pricing
                available.
              </p>
            </div>

            <div>
              <h3 className={styles.typography.h3Pricing}>
                Premium Website + Admin Panel (CMS)
              </h3>
              <p className={styles.pricing.item}>
                <span className={styles.pricing.label}>Starting from </span>
                <span className={styles.pricing.amount}>$899</span>{' '}
                <span className={styles.typography.bodyExtraSmall}>
                  (typical range: $899–$1,599)
                </span>
              </p>
              <p className={styles.pricing.note}>
                Subscription for hosting &amp; domain applies. Regional pricing
                available.
              </p>
            </div>
          </div>

          <div className={styles.card.pricing}>
            <h3 className={styles.pricing.regionalBox.title}>
              Regional pricing & fairness
            </h3>
            <p className={styles.pricing.regionalBox.text}>
              Because we work with businesses in markets with very different
              purchasing power, we adjust final quotes by region and business
              size. This keeps our services accessible to early-stage founders
              in India and Israel, while remaining competitive for clients in
              Europe, the US & Canada.
            </p>
            <a href="#contact" className={styles.button.linkSmall}>
              Get your regional quote
            </a>
          </div>
        </section>

        {/* FAQ */}
        <section
          id="faq"
          aria-labelledby="faq-heading"
          className={styles.section.default}
        >
          <div className={styles.combined.sectionIntro}>
            <h2 id="faq-heading" className={styles.typography.h2}>
              Frequently asked questions
            </h2>
            <p className={styles.combined.bodyWithSpacing}>
              If you don't see your question here, you can always reach out
              directly and we'll be happy to help.
            </p>
          </div>

          <div className={styles.list.spacing}>
            {faqs.map((faq) => (
              <details key={faq.question} className={styles.card.faq}>
                <summary className={styles.faq.summary}>
                  <span>{faq.question}</span>
                  <span className={styles.faq.icon}>+</span>
                  <span className={styles.faq.iconOpen}>–</span>
                </summary>
                <p className={styles.faq.answer}>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>

        {/* Contact / CTA */}
        <section
          id="contact"
          aria-labelledby="contact-heading"
          className={styles.section.contact}
        >
          <div className={styles.card.contact}>
            <div className={styles.contact.grid}>
              <div>
                <h2 id="contact-heading" className={styles.typography.h2}>
                  Ready to start your website?
                </h2>
                <p className={styles.contact.intro}>
                  Tell us a bit about your business, your location, and what
                  kind of website you need. We’ll get back with a tailored quote
                  and suggested package.
                </p>
                <ul className={styles.list.contactPoints}>
                  <li>• Landing page, business website, or Premium CMS</li>
                  <li>
                    • Regional pricing for Israel, India, Europe, US & Canada
                  </li>
                  <li>• Most projects completed within 3–7 days</li>
                </ul>
              </div>

              <form className={styles.form.root}>
                <div className={styles.form.grid}>
                  <div className={styles.form.fieldContainer}>
                    <label className={styles.typography.label}>Name</label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className={styles.form.input}
                    />
                  </div>
                  <div className={styles.form.fieldContainer}>
                    <label className={styles.typography.label}>Email</label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className={styles.form.input}
                    />
                  </div>
                </div>

                <div className={styles.form.fieldContainer}>
                  <label className={styles.typography.label}>
                    Country / Region
                  </label>
                  <input
                    type="text"
                    placeholder="Israel, India, Germany, US, Canada..."
                    className={styles.form.input}
                  />
                </div>

                <div className={styles.form.fieldContainer}>
                  <label className={styles.typography.label}>
                    What are you looking for?
                  </label>
                  <select className={styles.form.select} defaultValue="">
                    <option value="" disabled>
                      Select a package
                    </option>
                    <option>Landing Page Package</option>
                    <option>Pro Business Website</option>
                    <option>Premium Website + Admin Panel (CMS)</option>
                    <option>Not sure yet / need help deciding</option>
                  </select>
                </div>

                <div className={styles.form.fieldContainer}>
                  <label className={styles.typography.label}>
                    Project details
                  </label>
                  <textarea
                    placeholder="Tell us about your business, pages you need, and any deadlines or special requirements."
                    rows={4}
                    className={styles.form.textarea}
                  />
                </div>

                <button type="button" className={styles.button.lightLarge}>
                  Submit inquiry
                </button>

                <p className={styles.form.note}>
                  Prefer WhatsApp or a quick call? We can share direct contact
                  details in our reply.
                </p>
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer.root}>
          <div className={styles.footer.container}>
            <p>
              © {new Date().getFullYear()} Webbit Studio. All rights reserved.
            </p>
            <div className={styles.footer.links}>
              <a href="#hero" className={styles.footer.link}>
                Back to top
              </a>
              <span className={styles.footer.separator} />
              <span>webbitstudio.com</span>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
