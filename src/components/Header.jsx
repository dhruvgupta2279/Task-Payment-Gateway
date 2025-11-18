import { useState } from 'react';
import { Link } from 'react-router-dom';
import { PaymentDropdown } from './PaymentDropdown';
import { BankingDropdown } from './BankingDropdown';

const navItems = [
  { label: 'Payments', href: '#payments', menu: 'payments' },
  { label: 'Banking+', href: '#banking', menu: 'banking' },
  { label: 'Payroll', href: '#payroll' },
  { label: 'Partners', href: '#partners' },
  { label: 'Resources', href: '#resources' },
  { label: 'Pricing', href: '#pricing' },
];

export function Header({ onStartTour }) {
  const [openMenu, setOpenMenu] = useState(null);

  const handleOpen = (menu) => setOpenMenu(menu);
  const handleClose = (menu) => {
    if (openMenu === menu) {
      setOpenMenu(null);
    }
  };

  return (
    <header className="rp-header">
      <div className="rp-header__logo">
        <span className="rp-logo-mark">R</span>
        <span className="rp-logo-text">Razorpay</span>
      </div>
      <nav className="rp-header__nav">
        {navItems.map((item) => {
          if (item.menu === 'payments' || item.menu === 'banking') {
            const isOpen = openMenu === item.menu;
            return (
              <div
                key={item.label}
                className="mega-trigger"
                onMouseEnter={() => handleOpen(item.menu)}
                onMouseLeave={() => handleClose(item.menu)}
              >
                <button
                  className={`rp-link mega-trigger__button ${isOpen ? 'active' : ''}`}
                  aria-haspopup="true"
                  aria-expanded={isOpen}
                  onFocus={() => handleOpen(item.menu)}
                  onBlur={() => handleClose(item.menu)}
                >
                  {item.label}
                </button>
                {isOpen && (item.menu === 'payments' ? <PaymentDropdown /> : <BankingDropdown />)}
              </div>
            );
          }
          return (
            <a key={item.label} href={item.href} className="rp-link">
              {item.label}
            </a>
          );
        })}
      </nav>
      <div className="rp-header__actions">
        <button className="btn ghost" onClick={onStartTour}>Take Product Tour</button>
        <Link to="/login" className="btn ghost" style={{ textDecoration: 'none' }}>Login</Link>
        <Link to="/signup" className="btn primary" style={{ textDecoration: 'none' }}>Sign Up</Link>
      </div>
    </header>
  );
}

