export function Testimonials({ testimonials }) {
  return (
    <section className="panel testimonials" id="partners" data-tour="testimonials">
      <div className="panel__head">
        <p className="kicker">Loved by disruptors</p>
        <h2>Brands that trust Razorpay POS</h2>
      </div>
      <div className="grid grid--2">
        {testimonials.map((item) => (
          <article key={item.author} className="card testimonial">
            <p className="quote">“{item.quote}”</p>
            <div className="author">
              <p>{item.author}</p>
              <span>{item.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

