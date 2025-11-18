const footerColumns = [
  {
    title: 'Accept Payments',
    links: [
      'Payment Aggregator',
      'Payment Gateway',
      'Payment Pages',
      'Payment Links',
      'Razorpay POS',
      'QR Codes',
      'Subscriptions',
      'Smart Collect',
      'Optimizer',
      'Instant Settlements',
    ],
  },
  {
    title: 'Banking Plus',
    links: [
      'RazorpayX',
      'Source to pay',
      'Current Accounts',
      'Payouts',
      'Payout Links',
      'Corporate Credit Card',
    ],
  },
  {
    title: 'Company',
    links: [
      'About Us',
      'Careers',
      'Terms of Use',
      'Privacy Policy',
      'Grievance Redressal',
      'Partners',
      'White Papers',
      'Corporate Information',
    ],
  },
  {
    title: 'Developers',
    links: ['Docs', 'Integrations', 'API Reference'],
  },
  {
    title: 'Resources',
    links: [
      'Blog',
      'Learn',
      'Customer Stories',
      'Events',
      'Chargeback Guide',
      'Settlement Guide',
    ],
  },
  {
    title: 'Help & Support',
    links: ['Support', 'Knowledge base'],
  },
];

const socialLinks = [
  { label: 'Facebook', abbr: 'f' },
  { label: 'X', abbr: 'x' },
  { label: 'Instagram', abbr: 'ig' },
  { label: 'YouTube', abbr: 'yt' },
  { label: 'LinkedIn', abbr: 'in' },
];

export function Footer({ onStartTour }) {
  return (
    <footer className="footer" id="pricing" data-tour="footer">
      <div className="footer__grid">
        <div className="footer__intro">
          <div className="rp-header__logo rp-header__logo--footer">
            <span className="rp-logo-mark">R</span>
            <span className="rp-logo-text">Razorpay</span>
          </div>
          <p>
            Razorpay is the only payments solution in India that allows businesses to accept, process
            and disburse payments with its product suite. Accept credit cards, debit cards, UPI, and every
            popular wallet including JioMoney, Mobikwik, Airtel Money, FreeCharge, Ola Money and PayZapp.
          </p>
          <p>
            RazorpayX supercharges business banking—manage market places, automate transfers, collect
            recurring payments, share invoices, and avail working capital loans from a single platform.
          </p>
          <p className="footer__disclaimer">
            Disclaimer: Razorpay powered current accounts and cards are provided by trusted RBI
            licensed partner banks. Razorpay itself is not a bank and does not hold or claim a
            banking license.
          </p>
          <div className="footer__badges">
            <span>PCI DSS CERTIFIED</span>
            <span>ISO/IEC 27001:2013</span>
            <span>AICPA SOC</span>
          </div>
        </div>
        <div className="footer__columns">
          {footerColumns.map((column) => (
            <div key={column.title} className="footer__column">
              <p className="footer__heading">{column.title}</p>
              <ul>
                {column.links.map((link) => (
                  <li key={link}>
                    <a href="#!">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="footer__meta">
        <div>
          <p className="footer__heading">Regd. Office Address</p>
          <p>
            Razorpay Software Limited, 1st Floor, SJR Cyber, 22 Laskar Hosur Road, Adugodi, Bengaluru
            560030, Karnataka, India. CIN: U72200KA2013PLC097389
          </p>
        </div>
        <div className="footer__social">
          {socialLinks.map((social) => (
            <button key={social.label} className="footer__social-btn" aria-label={social.label}>
              {social.abbr}
            </button>
          ))}
        </div>
      </div>
      <div className="footer__actions footer__actions--cta">
        <button className="btn primary">Talk to Sales</button>
        <button className="btn outline">Book a Demo</button>
        <button className="btn ghost" onClick={onStartTour}>
          Take Product Tour
        </button>
      </div>
    </footer>
  );
}

