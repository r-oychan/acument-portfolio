import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import "@/styles/portfolio.css";

export const Route = createFileRoute("/portfolio/mobility")({
  component: MobilityCaseStudy,
});

function MobilityCaseStudy() {
  useEffect(() => {
    const link1 = document.createElement("link");
    link1.rel = "preconnect";
    link1.href = "https://fonts.googleapis.com";
    document.head.appendChild(link1);

    const link2 = document.createElement("link");
    link2.rel = "preconnect";
    link2.href = "https://fonts.gstatic.com";
    link2.crossOrigin = "anonymous";
    document.head.appendChild(link2);

    const link3 = document.createElement("link");
    link3.href =
      "https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap";
    link3.rel = "stylesheet";
    document.head.appendChild(link3);

    return () => {
      document.head.removeChild(link1);
      document.head.removeChild(link2);
      document.head.removeChild(link3);
    };
  }, []);

  return (
    <div className="portfolio-page">
      <div className="page">
        <div className="page-header">
          <span className="page-header__logo">Your Company</span>
          <span className="page-header__title">Case Study</span>
        </div>

        <div className="case-title-section">
          <div className="case-number">Case Study 02</div>
          <div className="case-client">Leading Hong Kong Mobility Platform</div>
          <div className="case-project-title">
            Building the Payment Backbone for Urban Transportation
          </div>
        </div>

        <div className="case-meta">
          <div className="case-meta__item">
            <span className="case-meta__label">Industry</span>
            <span className="case-meta__value">Transportation & Mobility</span>
          </div>
          <div className="case-meta__item">
            <span className="case-meta__label">Engagement</span>
            <span className="case-meta__value">Prior Team Work</span>
          </div>
          <div className="case-meta__item">
            <span className="case-meta__label">Focus Areas</span>
            <div className="tags">
              <span className="tag">Payments</span>
              <span className="tag">Fintech</span>
              <span className="tag">Reconciliation</span>
            </div>
          </div>
        </div>

        <h4>The Challenge</h4>
        <p>
          As ride-hailing platforms reshape urban mobility across Asia, the underlying payment
          infrastructure must deliver reliability, speed, and flexibility at scale. A rapidly
          growing Hong Kong-based mobility platform required a payment ecosystem capable of
          supporting its ambitious growth trajectory while navigating the unique complexities of the
          local market.
        </p>
        <p>
          The platform needed to accept every payment method their riders preferred—from
          international cards to local digital wallets—while simultaneously managing the intricate
          financial flows between riders, drivers, and payment networks.
        </p>

        <h4>The Approach</h4>
        <p>
          We architected and delivered an enterprise-grade payment infrastructure designed for the
          specific demands of marketplace platforms.
        </p>

        <p>
          <strong>Multi-Rail Payment Gateway</strong>
          <br />
          The solution integrates across the full spectrum of Hong Kong payment methods:
        </p>
        <ul>
          <li>
            <strong>Card Networks:</strong> Visa, Mastercard, UnionPay (CUP)
          </li>
          <li>
            <strong>Digital Wallets:</strong> Alipay, WeChat Pay
          </li>
          <li>
            <strong>Local Payment Rails:</strong> Octopus Card integration
          </li>
        </ul>
        <p>
          Both online (in-app) and offline (terminal-based) payment flows are supported through a
          unified integration layer.
        </p>

        <p>
          <strong>Master Merchant Architecture</strong>
          <br />
          We designed and implemented a sophisticated sub-merchant management system enabling the
          platform to operate as a master merchant. The architecture handles automated fund
          distribution, transparent fee calculations, and settlement orchestration across drivers,
          the platform, and payment providers.
        </p>

        <p>
          <strong>Automated Reconciliation Engine</strong>
          <br />
          High-volume transaction environments demand precision. Our reconciliation system processes
          daily transaction flows across multiple payment rails, eliminating manual matching
          processes and enabling same-day financial visibility.
        </p>

        <h4>The Impact</h4>

        <table>
          <thead>
            <tr>
              <th>Outcome</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Rider Experience</td>
              <td>Frictionless payment across all major Hong Kong payment methods</td>
            </tr>
            <tr>
              <td>Operational Automation</td>
              <td>Fully automated reconciliation—zero manual intervention</td>
            </tr>
            <tr>
              <td>Platform Scalability</td>
              <td>Architecture supports the city&apos;s 40,000+ taxi driver network</td>
            </tr>
            <tr>
              <td>Financial Transparency</td>
              <td>Real-time settlement visibility for all marketplace participants</td>
            </tr>
          </tbody>
        </table>

        <div className="highlight-box">
          <div className="highlight-box__title">Technical Highlights</div>
          <div className="two-col" style={{ marginTop: "var(--space-sm)" }}>
            <div>
              <p style={{ marginBottom: "var(--space-xs)" }}>
                <strong>6+</strong> payment methods integrated
              </p>
              <p style={{ marginBottom: 0 }}>
                <strong>Online & Offline</strong> payment flows
              </p>
            </div>
            <div>
              <p style={{ marginBottom: "var(--space-xs)" }}>
                <strong>Same-day</strong> reconciliation
              </p>
              <p style={{ marginBottom: 0 }}>
                <strong>Automated</strong> sub-merchant settlement
              </p>
            </div>
          </div>
        </div>

        <div className="page-footer">
          <span>Confidential Client</span>
          <span>© 2026 Your Company</span>
        </div>
      </div>
    </div>
  );
}
