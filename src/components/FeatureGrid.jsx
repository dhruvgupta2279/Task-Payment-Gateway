export function FeatureGrid({ features }) {
  return (
    <section className="panel panel--feature" data-tour="features">
      <div className="panel__head">
        <p className="kicker">Why Razorpay</p>
        <h2>The POS stack that powers bold retail teams</h2>
        <p className="description">
          Unified payments, automated reconciliation, and lightning-fast settlements—built
          for stores that refuse to slow down.
        </p>
      </div>
      <div className="grid grid--3">
        {features.map((feature) => (
          <article key={feature.title} className="card feature">
            <div className="feature__icon" aria-hidden>
              <span>{feature.icon}</span>
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

