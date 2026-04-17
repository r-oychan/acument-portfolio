import { createFileRoute } from "@tanstack/react-router";
import "@/styles/portfolio.css";
import { DownloadCaseStudyLink } from "@/components/DownloadCaseStudyLink";

export const Route = createFileRoute("/portfolio/mobility")({
  component: MobilityCaseStudy,
});

function MobilityCaseStudy() {
  return (
    <div className="portfolio-page">
      <div className="page">
        <div className="page-header">
          <span className="page-header__logo">Acument Intelligence</span>
          <span className="page-header__title">Case Study</span>
        </div>

        <div className="case-title-section">
          <div className="case-number">Case Study 02</div>
          <div className="case-client">Leading Hong Kong Mobility Platform</div>
          <div className="case-project-title">
            Building the Payment Backbone for Urban Transportation
          </div>
        </div>

        <figure className="case-hero">
          <img
            src="/acument-portfolio/mobility/hero.png"
            alt="Illustrated commuter heading to their ride — the start of an everyday urban journey."
          />
        </figure>

        <div className="case-meta">
          <div className="case-meta__item">
            <span className="case-meta__label">Industry</span>
            <span className="case-meta__value">Transportation & Mobility</span>
          </div>
          <div className="case-meta__item">
            <span className="case-meta__label">Engagement</span>
            <span className="case-meta__value">Team Work</span>
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
        <div className="figure-clear">
          <figure className="figure-inline">
            <div className="figure-inline__media">
              <img
                src="/acument-portfolio/mobility/taxi-lamp.png"
                alt="Illustrated taxi roof dome — a familiar sight on Hong Kong streets."
              />
            </div>
            <figcaption className="figure-inline__caption">
              The everyday icon at the heart of urban mobility.
            </figcaption>
          </figure>

          <p>
            As ride-hailing platforms reshape urban mobility across Asia, the underlying payment
            infrastructure must deliver reliability, speed, and flexibility at scale. A rapidly
            growing Hong Kong-based mobility platform required a payment ecosystem capable of
            supporting its ambitious growth trajectory while navigating the unique complexities of
            the local market.
          </p>
          <p>
            The platform needed to accept every payment method their riders preferred—from
            international cards to local digital wallets—while simultaneously managing the intricate
            financial flows between riders, drivers, and payment networks.
          </p>
        </div>

        <h4>The Approach</h4>
        <div className="figure-clear">
          <figure className="figure-inline">
            <div className="figure-inline__media">
              <img
                src="/acument-portfolio/mobility/credit-card-payment.png"
                alt="Illustrated hand holding a contactless card at a payment moment."
              />
            </div>
            <figcaption className="figure-inline__caption">
              The tap that settles across every rail.
            </figcaption>
          </figure>

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
        </div>

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
          <div className="two-col" style={{ marginTop: "16px" }}>
            <div>
              <p style={{ marginBottom: "8px" }}>
                <strong>6+</strong> payment methods integrated
              </p>
              <p style={{ marginBottom: 0 }}>
                <strong>Online & Offline</strong> payment flows
              </p>
            </div>
            <div>
              <p style={{ marginBottom: "8px" }}>
                <strong>Same-day</strong> reconciliation
              </p>
              <p style={{ marginBottom: 0 }}>
                <strong>Automated</strong> sub-merchant settlement
              </p>
            </div>
          </div>
        </div>

        <DownloadCaseStudyLink caseStudyId="mobility" />

        <div className="page-footer">
          <span>Confidential Client</span>
          <span>© 2026 Acument Intelligence</span>
        </div>
      </div>
    </div>
  );
}
