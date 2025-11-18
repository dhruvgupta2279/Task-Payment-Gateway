export function Hero({ hero }) {
  return (
    <section className="hero" id="signup" data-tour="hero">
      <p className="hero__kicker">{hero.kicker}</p>
      <h1 className="hero__title">{hero.headline}</h1>
      <p className="hero__subtitle">{hero.subtext}</p>
      <div className="hero__cta">
        {hero.ctas.map((cta) => (
          <a
            key={cta.label}
            href={cta.href}
            className={`btn ${cta.variant === 'secondary' ? 'ghost' : 'primary'}`}
          >
            {cta.label}
          </a>
        ))}
      </div>
      <div className="hero__badge-strip">
        {hero.logos.map((symbol) => (
          <span key={symbol}>{symbol}</span>
        ))}
      </div>
    </section>
  );
}

