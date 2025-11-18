export function Solutions({ solutions }) {
  return (
    <section className="panel secondary" id="solutions" data-tour="solutions">
      <div className="panel__head">
        <p className="kicker">Solutions</p>
        <h2>Choose the stack that fits your flow</h2>
      </div>
      <div className="grid grid--3">
        {solutions.map((solution) => (
          <article key={solution.title} className="card solution">
            <div className="solution__badge">
              {solution.badges.map((badge) => (
                <span key={badge}>{badge}</span>
              ))}
            </div>
            <h3>{solution.title}</h3>
            <p>{solution.description}</p>
            <button className="btn text">Explore</button>
          </article>
        ))}
      </div>
    </section>
  );
}

