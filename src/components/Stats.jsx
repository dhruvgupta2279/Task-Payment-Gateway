export function StatsBar({ stats }) {
  return (
    <section className="stats" id="features" data-tour="stats">
      {stats.map((item) => (
        <div key={item.label} className="stats__card">
          <p className="stats__value">{item.value}</p>
          <p className="stats__label">{item.label}</p>
        </div>
      ))}
    </section>
  );
}

