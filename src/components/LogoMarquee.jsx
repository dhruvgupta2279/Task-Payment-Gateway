const logos = [
  { name: 'Bazaar', accent: '#5a8bd6' },
  { name: 'Nykaa', accent: '#ff2674' },
  { name: 'Zerodha', accent: '#2879ff' },
  { name: 'Goibibo', accent: '#fc6200' },
  { name: 'cure.fit', accent: '#111111' },
  { name: 'ClearTax', accent: '#0097f5' },
  { name: 'bookmyshow', accent: '#d0021b' },
  { name: 'BMW', accent: '#0a0a0a' },
  { name: 'Ather', accent: '#0d0e0f' },
  { name: 'Apollo', accent: '#f7931e' },
];

export function LogoMarquee() {
  return (
    <section className="logo-marquee" aria-label="Trusted by bold brands" data-tour="clients">
      <div className="logo-marquee__fade logo-marquee__fade--left" aria-hidden />
      <div className="logo-marquee__fade logo-marquee__fade--right" aria-hidden />
      <div className="logo-marquee__track">
        {[...Array(2)].map((_, idx) => (
          <div className="logo-marquee__group" key={idx}>
            {logos.map((logo) => (
              <span
                key={`${logo.name}-${idx}`}
                className="logo-marquee__logo"
                style={{ color: logo.accent }}
              >
                {logo.name}
              </span>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}

