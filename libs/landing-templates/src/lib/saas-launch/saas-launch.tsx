import { useEffect, useRef } from 'react';

export interface SaasLaunchProps {
  // Brand/Company
  productName?: string;
  tagline?: string;
  companyName?: string;
  logoLetter?: string;

  // Hero Section
  launchBadgeText?: string;
  heroTitle?: string;
  heroDescription?: string;
  primaryCtaText?: string;
  secondaryCtaText?: string;
  primaryCtaHref?: string;
  secondaryCtaHref?: string;

  // Features
  features?: Array<{
    icon: string;
    title: string;
    description: string;
  }>;

  // Stats
  stats?: Array<{
    number: string;
    label: string;
  }>;

  // Final CTA
  finalCtaTitle?: string;
  finalCtaDescription?: string;
  finalCtaButton?: string;
  finalCtaHref?: string;

  // Colors (CSS variables)
  colors?: {
    primary?: string;
    primaryDark?: string;
    secondary?: string;
    background?: string;
    surface?: string;
    text?: string;
    textMuted?: string;
    accent?: string;
  };
}

export function SaasLaunch({
  productName = 'Product',
  tagline = 'Your Tagline',
  companyName = 'Company',
  logoLetter = 'C',
  launchBadgeText = 'Coming Soon',
  heroTitle = 'Build Something Amazing',
  heroDescription = 'Transform your ideas into reality with our powerful platform.',
  primaryCtaText = 'Get Started',
  secondaryCtaText = 'Learn More',
  primaryCtaHref = '#',
  secondaryCtaHref = '#',
  features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Built for speed and performance from the ground up.',
    },
    {
      icon: '🔒',
      title: 'Secure by Default',
      description: 'Enterprise-grade security built into every layer.',
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Stunning interfaces that users love to interact with.',
    },
  ],
  stats = [
    { number: '10K+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '24/7', label: 'Support' },
    { number: '50+', label: 'Countries' },
  ],
  finalCtaTitle = 'Ready to get started?',
  finalCtaDescription = 'Join thousands of users already using our platform.',
  finalCtaButton = 'Start Free Trial',
  finalCtaHref = '#',
  colors = {},
}: SaasLaunchProps) {
  const revealRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const revealOnScroll = () => {
      revealRefs.current.forEach((element) => {
        if (element) {
          const elementTop = element.getBoundingClientRect().top;
          const elementVisible = 150;

          if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('reveal-active');
          }
        }
      });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    return () => window.removeEventListener('scroll', revealOnScroll);
  }, []);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  const colorStyles = {
    '--primary': colors.primary || '#0066FF',
    '--primary-dark': colors.primaryDark || '#0052CC',
    '--secondary': colors.secondary || '#00FFAA',
    '--background': colors.background || '#0A0E1A',
    '--surface': colors.surface || '#141925',
    '--text': colors.text || '#E8EAED',
    '--text-muted': colors.textMuted || '#9CA3AF',
    '--accent': colors.accent || '#FF3366',
  } as React.CSSProperties;

  return (
    <div
      className="relative min-h-screen bg-[var(--background)] text-[var(--text)] overflow-x-hidden font-sans"
      style={colorStyles}
    >
      {/* Animated gradient background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 animate-gradient-shift">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(0,102,255,0.15)_0%,transparent_50%),radial-gradient(circle_at_80%_80%,rgba(0,255,170,0.1)_0%,transparent_50%)]" />
      </div>

      {/* Header */}
      <header className="py-6 relative z-[100] animate-slide-down">
        <div className="container max-w-6xl mx-auto px-6">
          <nav className="flex justify-between items-center">
            <a
              href="/"
              className="flex items-center gap-2 text-2xl font-bold text-[var(--text)] no-underline"
            >
              <div className="w-8 h-8 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-lg flex items-center justify-center font-mono text-lg">
                {logoLetter}
              </div>
              <span>{companyName}</span>
            </a>
            <ul className="hidden md:flex gap-8 list-none">
              <li>
                <a
                  href="#features"
                  className="text-[var(--text-muted)] no-underline font-normal transition-colors duration-300 text-[15px] hover:text-[var(--text)]"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-[var(--text-muted)] no-underline font-normal transition-colors duration-300 text-[15px] hover:text-[var(--text)]"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-[var(--text-muted)] no-underline font-normal transition-colors duration-300 text-[15px] hover:text-[var(--text)]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-[120px] pb-20 text-center animate-fade-in-up-1">
          <div className="container max-w-6xl mx-auto px-6">
            <div className="inline-block px-4 py-2 bg-[var(--surface)] border border-white/10 rounded-3xl text-sm text-[var(--secondary)] font-semibold mb-6 animate-fade-in-up-2">
              <span role="img" aria-label="rocket">
                🚀
              </span>{' '}
              {launchBadgeText}
            </div>
            <h1 className="text-[clamp(40px,6vw,72px)] font-bold leading-[1.1] mb-6 bg-gradient-to-br from-[var(--text)] to-[var(--text-muted)] bg-clip-text text-transparent animate-fade-in-up-3">
              {heroTitle}
            </h1>
            <p className="text-xl text-[var(--text-muted)] max-w-[600px] mx-auto mb-10 leading-relaxed animate-fade-in-up-4">
              {heroDescription}
            </p>
            <div className="flex gap-4 justify-center flex-wrap animate-fade-in-up-5">
              <a
                href={primaryCtaHref}
                className="px-8 py-3.5 rounded-xl text-base font-semibold no-underline transition-all duration-300 inline-flex items-center gap-2 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white shadow-[0_4px_24px_rgba(0,102,255,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_32px_rgba(0,102,255,0.4)]"
              >
                {primaryCtaText}
              </a>
              <a
                href={secondaryCtaHref}
                className="px-8 py-3.5 rounded-xl text-base font-semibold no-underline transition-all duration-300 inline-flex items-center gap-2 bg-[var(--surface)] text-[var(--text)] border border-white/10 hover:bg-white/5 hover:border-white/20"
              >
                {secondaryCtaText}
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20" id="features">
          <div className="container max-w-6xl mx-auto px-6">
            <div
              ref={addToRefs}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 opacity-0 translate-y-[30px] transition-all duration-[800ms] ease-out reveal"
            >
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-[var(--surface)] p-10 rounded-2xl border border-white/5 transition-all duration-300 hover:border-[rgba(0,102,255,0.3)] hover:-translate-y-1 hover:shadow-[0_12px_40px_rgba(0,0,0,0.3)]"
                >
                  <div className="w-14 h-14 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-xl flex items-center justify-center text-[28px] mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-[22px] mb-3 text-[var(--text)]">
                    {feature.title}
                  </h3>
                  <p className="text-[var(--text-muted)] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section
          ref={addToRefs}
          className="py-20 bg-[var(--surface)] border-t border-b border-white/5 opacity-0 translate-y-[30px] transition-all duration-[800ms] ease-out reveal"
        >
          <div className="container max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-5xl font-bold text-[var(--secondary)] mb-2 font-mono">
                    {stat.number}
                  </div>
                  <div className="text-[var(--text-muted)] text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA Section */}
        <section
          ref={addToRefs}
          className="py-[120px] text-center opacity-0 translate-y-[30px] transition-all duration-[800ms] ease-out reveal"
        >
          <div className="container max-w-6xl mx-auto px-6">
            <h2 className="text-[clamp(32px,5vw,56px)] mb-6 bg-gradient-to-br from-[var(--text)] to-[var(--text-muted)] bg-clip-text text-transparent">
              {finalCtaTitle}
            </h2>
            <p className="text-xl text-[var(--text-muted)] mb-10 max-w-[500px] mx-auto">
              {finalCtaDescription}
            </p>
            <a
              href={finalCtaHref}
              className="px-8 py-3.5 rounded-xl text-base font-semibold no-underline transition-all duration-300 inline-flex items-center gap-2 bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white shadow-[0_4px_24px_rgba(0,102,255,0.3)] hover:-translate-y-0.5 hover:shadow-[0_6px_32px_rgba(0,102,255,0.4)]"
            >
              {finalCtaButton}
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-white/5">
        <div className="container max-w-6xl mx-auto px-6">
          <div className="flex justify-between items-center flex-wrap gap-6">
            <div className="text-[var(--text-muted)] text-sm">
              © {new Date().getFullYear()} {companyName}. All rights reserved.
            </div>
            <ul className="flex flex-col md:flex-row gap-8 md:gap-8 list-none">
              <li>
                <a
                  href="/privacy"
                  className="text-[var(--text-muted)] no-underline text-sm transition-colors duration-300 hover:text-[var(--text)]"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="/terms"
                  className="text-[var(--text-muted)] no-underline text-sm transition-colors duration-300 hover:text-[var(--text)]"
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-[var(--text-muted)] no-underline text-sm transition-colors duration-300 hover:text-[var(--text)]"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>

      <style>{`
        @keyframes gradientShift {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.1); }
        }

        .animate-gradient-shift {
          animation: gradientShift 15s ease infinite;
        }

        @keyframes slideDown {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .animate-slide-down {
          animation: slideDown 0.8s ease;
        }

        @keyframes fadeInUp {
          from { transform: translateY(30px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }

        .animate-fade-in-up-1 { animation: fadeInUp 1s ease 0.2s backwards; }
        .animate-fade-in-up-2 { animation: fadeInUp 1s ease 0.4s backwards; }
        .animate-fade-in-up-3 { animation: fadeInUp 1s ease 0.6s backwards; }
        .animate-fade-in-up-4 { animation: fadeInUp 1s ease 0.8s backwards; }
        .animate-fade-in-up-5 { animation: fadeInUp 1s ease 1s backwards; }

        .reveal.reveal-active {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </div>
  );
}

export default SaasLaunch;
