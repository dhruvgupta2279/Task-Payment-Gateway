export function Faq({ faqs }) {
  return (
    <section className="panel faq" id="resources" data-tour="faq">
      <div className="panel__head">
        <p className="kicker">FAQs</p>
        <h2>Everything you wanted to know</h2>
      </div>
      <div className="faq__list">
        {faqs.map((faq) => (
          <details key={faq.question} className="faq__item" open>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

