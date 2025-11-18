const bankingSections = [
  {
    title: 'Business Banking Plus',
    items: [
      { title: 'RazorpayX', description: 'Business banking supercharged for disruptors' },
      { title: 'Current Account', description: 'Supercharged for businesses' },
      { title: 'Lending Tech Stack', description: 'Fully compliant, 10-second disbursals' },
      { title: 'Source to Pay', description: 'Integrated accounts payable automation', badge: 'NEW' },
      { title: 'Escrow+ Account', description: 'Escrow account for digital-first businesses', badge: 'NEW' },
      { title: 'Corporate Cards', description: 'Streamline your business expenses', badge: 'NEW' },
      { title: 'Payouts', description: '24x7 instant & automated payouts' },
      { title: 'Forex/FDI Transfers', description: 'Expert-led service to bring foreign currency', badge: 'NEW' },
      { title: 'Payout Links', description: 'Send money without recipient account details' },
      { title: 'Bank Account Verification', description: 'Verify bank account, UPI ID or IFSC', badge: 'NEW' },
      { title: 'View Live Demo', description: 'See RazorpayX in action, no signup required!' },
      { title: 'Tax Payments', description: 'Pay your business taxes in under 30 seconds' },
    ],
  },
  {
    title: 'Digital Lending',
    items: [{ title: 'Razorpay Capital', description: 'Get money for your business needs' }],
  },
  {
    title: 'Start Your Business',
    items: [{ title: 'Company Registration', description: 'Simplify your business incorporation journey' }],
  },
];

export function BankingDropdown() {
  return (
    <div className="mega-menu" role="menu">
      <div className="mega-menu__grid mega-menu__grid--banking">
        {bankingSections.map((section) => (
          <div key={section.title} className="mega-menu__section">
            <p className="mega-menu__heading">{section.title}</p>
            {section.items.map((item) => (
              <div key={item.title} className="mega-menu__item">
                <div className="mega-menu__icon" aria-hidden />
                <div>
                  <div className="mega-menu__title">
                    <span>{item.title}</span>
                    {item.badge && <span className="badge">{item.badge}</span>}
                  </div>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
      <p className="mega-menu__foot">
        Business Banking+ is operated under RZPX Limited where the banking services are provided by scheduled commercial
        banks.
      </p>
    </div>
  );
}

