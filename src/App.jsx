import { useMemo, useCallback, useRef, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import 'driver.js/dist/driver.css';
import { driver } from 'driver.js';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsBar } from './components/Stats';
import { FeatureGrid } from './components/FeatureGrid';
import { Solutions } from './components/Solutions';
import { Testimonials } from './components/Testimonials';
import { Faq } from './components/Faq';
import { Footer } from './components/Footer';
import { SupportWidget } from './components/SupportWidget';
import { LogoMarquee } from './components/LogoMarquee';
import { Login } from './pages/Login';
import { Signup } from './pages/Signup';

const fallbackData = {
  hero: {
    kicker: 'MoneySaver Export Account',
    headline: 'Easy In-Store Payments for India’s boldest disruptors',
    subtext:
      'Grow with Razorpay POS — accept UPI, cards, and wallets with a unified view of every transaction.',
    ctas: [
      { label: 'Sign Up Now', href: '#signup', variant: 'primary' },
      { label: 'Know More', href: '#features', variant: 'secondary' },
    ],
    logos: ['₹', '₤', '€', '$', '¥', 'A$', '₣'],
  },
  stats: [
    { label: 'Transactions processed', value: '10M+/month' },
    { label: 'Merchant NPS', value: '72' },
    { label: 'Avg. settlement time', value: '< 24 hrs' },
  ],
  features: [
    {
      title: 'Unified Payments',
      description:
        'Accept every payment mode—UPI, cards, wallets, BNPL, and EMI with a single tap.',
      icon: '⚡',
    },
    {
      title: 'Realtime Dashboard',
      description:
        'Stay on top of store performance with live settlement tracking and smart alerts.',
      icon: '📊',
    },
    {
      title: 'Smart Hardware',
      description:
        'Razorpay POS terminals built for speed, with thermal printing, 4G + WiFi, and an all-day battery.',
      icon: '🖥️',
    },
  ],
  solutions: [
    {
      title: 'Razorpay POS',
      description: 'Purpose-built for retail chains to unify in-store and online collections.',
      badges: ['New', 'Fastest Settlements'],
    },
    {
      title: 'Razorpay Payments Suite',
      description: 'Create, reconcile, and automate payments with subscription-ready APIs.',
      badges: ['API First', 'ISO 27001'],
    },
    {
      title: 'Checkouts & Links',
      description: 'Spin up checkout links and QR codes in seconds—no developer time needed.',
      badges: ['No-Code', 'UPI Auto'],
    },
  ],
  testimonials: [
    {
      quote:
        'Razorpay POS gave us a single view of every WOW! Momo store, cutting manual reconciliation time by 80%.',
      author: 'Sagar Daryani',
      role: 'Co-founder, WOW! Momo',
    },
    {
      quote:
        'Daily settlements and dispute automation helped us focus on customer experience, not payment ops.',
      author: 'Pallav Jain',
      role: 'Head of Growth, The State Plate',
    },
  ],
  faqs: [
    {
      question: 'How quickly can I onboard?',
      answer: 'Most merchants go live within 48 hours when documents are in place.',
    },
    {
      question: 'Do you support multi-store setups?',
      answer:
        'Yes, Razorpay POS allows central control with store-level dashboards, limits, and alerts.',
    },
    {
      question: 'Can I integrate with my ERP?',
      answer:
        'We support plug-and-play integrations and webhook-based workflows for custom ERPs.',
    },
  ],
};

function App() {
  const landing = fallbackData;
  const driverRef = useRef(null);
  
  const tourSteps = useMemo(
    () => [
      {
        element: '[data-tour="hero"]',
        popover: {
          title: 'Unified Hero',
          description:
            'Introduce Razorpay POS with a strong value prop, multi-currency ticker, and dual CTAs.',
        },
      },
      {
        element: '[data-tour="stats"]',
        popover: {
          title: 'Proof Points',
          description:
            'Highlight transaction volume, merchant satisfaction, and settlement timelines.',
        },
      },
      {
        element: '[data-tour="clients"]',
        popover: {
          title: 'Trusted Brands',
          description: 'A continuously scrolling marquee of enterprise merchants boosts trust.',
        },
      },
      {
        element: '[data-tour="features"]',
        popover: {
          title: 'Capability Grid',
          description: 'Surface the three pillars retailers care about in one glance.',
        },
      },
      {
        element: '[data-tour="solutions"]',
        popover: {
          title: 'Solutions Catalog',
          description: 'Let merchants pick the stack that fits—POS, APIs, or no-code flows.',
        },
      },
      {
        element: '[data-tour="testimonials"]',
        popover: {
          title: 'Social Proof',
          description: 'Quotes from bold brands reinforce trust in Razorpay POS.',
        },
      },
      {
        element: '[data-tour="faq"]',
        popover: {
          title: 'Rapid Answers',
          description: 'Common onboarding, integration, and multi-store questions addressed here.',
        },
      },
      {
        element: '[data-tour="footer"]',
        popover: {
          title: 'Enterprise Footer',
          description:
            'Deep links, compliance badges, and contact info mirror Razorpay.com\'s production footer.',
        },
      },
    ],
    [],
  );

  useEffect(() => {
    return () => {
      if (driverRef.current) {
        driverRef.current.destroy();
      }
    };
  }, []);

  const startTour = useCallback(() => {
    console.log('Tour button clicked!');
    console.log('Driver function available:', typeof driver);
    
    if (driverRef.current) {
      driverRef.current.destroy();
      driverRef.current = null;
    }

    setTimeout(() => {
      console.log('Starting tour check...');
      
      const elementChecks = tourSteps.map(step => {
        const element = document.querySelector(step.element);
        console.log(`Checking element ${step.element}:`, element ? 'Found' : 'NOT FOUND');
        return { step: step.element, found: !!element };
      });
      
      const missingElements = elementChecks
        .filter(check => !check.found)
        .map(check => check.step);
      
      if (missingElements.length > 0) {
        console.warn('Driver.js: Some elements not found:', missingElements);
        alert(`Tour cannot start. Missing elements: ${missingElements.join(', ')}`);
        return;
      }
      
      console.log('All elements found, initializing driver...');
      
      try {
        if (typeof driver !== 'function') {
          console.error('Driver is not a function:', driver);
          alert('Driver.js is not loaded correctly. Please check the console.');
          return;
        }
        
        driverRef.current = driver({
          showProgress: true,
          allowClose: true,
          overlayColor: 'rgba(15, 23, 42, 0.75)',
          steps: tourSteps,
        });
        
        console.log('Driver instance created:', driverRef.current);
        
        if (driverRef.current && typeof driverRef.current.drive === 'function') {
          driverRef.current.drive();
          console.log('Tour started!');
        } else {
          console.error('Drive method not available on driver instance');
          alert('Driver.js drive method not available. Check console for details.');
        }
      } catch (error) {
        console.error('Driver.js error:', error);
        alert(`Error starting tour: ${error.message}`);
      }
    }, 100);
  }, [tourSteps]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <div className="app">
            <Header onStartTour={startTour} />
            <main>
              <Hero hero={landing.hero} />
              <StatsBar stats={landing.stats} />
              <LogoMarquee />
              <FeatureGrid features={landing.features} />
              <Solutions solutions={landing.solutions} />
              <Testimonials testimonials={landing.testimonials} />
              <Faq faqs={landing.faqs} />
            </main>
            <Footer onStartTour={startTour} />
            <SupportWidget />
          </div>
        }
      />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default App;
