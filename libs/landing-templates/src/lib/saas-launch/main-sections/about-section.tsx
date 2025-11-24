export const DefaultAboutSection = () => {
  return (
    <div className="py-20">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-[clamp(32px,5vw,56px)] mb-6 font-bold">
            About Us
          </h2>
          <p className="text-xl text-[var(--text-muted)] mb-8 leading-relaxed">
            We're on a mission to empower creators and businesses with tools
            that make building amazing products effortless. Our platform
            combines cutting-edge technology with intuitive design to help you
            bring your vision to life.
          </p>
          <p className="text-lg text-[var(--text-muted)] leading-relaxed">
            Founded by a team of passionate developers and designers, we believe
            that great software should be accessible to everyone. Join us in
            shaping the future of digital innovation.
          </p>
        </div>
      </div>
    </div>
  );
};
