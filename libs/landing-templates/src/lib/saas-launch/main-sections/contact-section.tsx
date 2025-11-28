import { useState } from 'react';

export const DefaultContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - no backend implementation yet
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="py-20 bg-[var(--surface)]">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[clamp(32px,5vw,56px)] mb-6 font-bold">
            Get In Touch
          </h2>
          <p className="text-xl text-[var(--text-muted)] max-w-2xl mx-auto">
            Have a question or want to work together? We'd love to hear from
            you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">
                Contact Information
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center flex-shrink-0">
                    <span className="text-xl" role="img" aria-label="location">
                      📍
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Address</h4>
                    <p className="text-[var(--text-muted)]">
                      123 Tech Street, Suite 100
                      <br />
                      San Francisco, CA 94105
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center flex-shrink-0">
                    <span className="text-xl" role="img" aria-label="email">
                      📧
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Email</h4>
                    <a
                      href="mailto:hello@company.com"
                      className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors"
                    >
                      hello@company.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center flex-shrink-0">
                    <span className="text-xl" role="img" aria-label="phone">
                      📞
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Phone</h4>
                    <a
                      href="tel:+14155551234"
                      className="text-[var(--text-muted)] hover:text-[var(--primary)] transition-colors"
                    >
                      +1 (415) 555-1234
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] flex items-center justify-center flex-shrink-0">
                    <span
                      className="text-xl"
                      role="img"
                      aria-label="social media"
                    >
                      🌐
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Social Media</h4>
                    <div className="flex gap-3 mt-2">
                      <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-[var(--background)] flex items-center justify-center hover:bg-[var(--primary)] transition-colors"
                        aria-label="Twitter"
                      >
                        𝕏
                      </a>
                      <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-[var(--background)] flex items-center justify-center hover:bg-[var(--primary)] transition-colors"
                        aria-label="LinkedIn"
                      >
                        in
                      </a>
                      <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-lg bg-[var(--background)] flex items-center justify-center hover:bg-[var(--primary)] transition-colors"
                        aria-label="GitHub"
                      >
                        <span role="img" aria-label="github">
                          ⚡
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[var(--background)] p-8 rounded-2xl border border-white/5">
            <h3 className="text-2xl font-semibold mb-6">Send us a message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--surface)] border border-white/10 focus:border-[var(--primary)] focus:outline-none transition-colors text-[var(--text)]"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-[var(--surface)] border border-white/10 focus:border-[var(--primary)] focus:outline-none transition-colors text-[var(--text)]"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-[var(--surface)] border border-white/10 focus:border-[var(--primary)] focus:outline-none transition-colors text-[var(--text)] resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full px-8 py-3.5 rounded-xl text-base font-semibold bg-gradient-to-br from-[var(--primary)] to-[var(--primary-dark)] text-white shadow-[0_4px_24px_rgba(0,102,255,0.3)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_6px_32px_rgba(0,102,255,0.4)]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
