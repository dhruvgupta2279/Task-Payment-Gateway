const paymentSections = [
  {
    title: 'Accept Payments Online',
    items: [
      { title: 'Payment Aggregator', description: 'Accepting payments made easy for businesses' },
      { title: 'Payment Gateway', description: 'Payments on your website & app' },
      { title: 'Payment Links', description: 'Create & send links to collect money' },
      { title: 'Payment Pages', description: 'Get paid with personalized page' },
      { title: 'QR Codes', description: 'Multi-feature QR for your business' },
      { title: 'UPI Payments', description: 'Discover the complete UPI stack', badge: 'NEW' },
    ],
  },
  {
    title: 'All-In-One Payments',
    items: [
      { title: 'Magic Checkout', description: 'Improve conversions & reduce RTOs', badge: 'NEW' },
      { title: 'Subscriptions', description: 'Collect recurring payments' },
      { title: 'Instant Settlement', description: 'Customer payments settled faster' },
      { title: 'Optimizer', description: 'Manage multiple payment gateways' },
    ],
  },
  {
    title: 'Accept Payments Offline',
    items: [{ title: 'Razorpay POS', description: 'Accept payments in-store' }],
  },
  {
    title: 'Accept International Payments',
    items: [
      { title: 'International Payments', description: 'Accept payments from across the globe' },
      {
        title: 'International Bank Transfers',
        description: 'Accept USD, GBP, EUR payments in your account',
      },
    ],
  },
  {
    title: 'Built for Global Businesses',
    items: [
      {
        title: 'Omnichannel Payments',
        description: 'One payment platform for all channels',
        badge: 'NEW',
      },
      {
        title: 'Accept Payments from India',
        description: 'Seamless INR collections via UPI & cards',
        badge: 'NEW',
      },
    ],
  },
];

export function PaymentDropdown() {
  return (
    <div className="mega-menu" role="menu">
      <div className="mega-menu__grid">
        {paymentSections.map((section) => (
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
        Payment aggregation services are provided by Razorpay Software Limited (formerly known as
        Razorpay Software Private Limited), an RBI Authorised Online Payment Aggregator.
      </p>
    </div>
  );
}

