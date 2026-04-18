import { createFileRoute } from "@tanstack/react-router";
import "@/styles/portfolio.css";
import { DownloadCaseStudyLink } from "@/components/DownloadCaseStudyLink";

export const Route = createFileRoute("/portfolio/tuition")({
  component: TuitionCaseStudy,
});

function TuitionCaseStudy() {
  return (
    <div className="portfolio-page">
      <div className="page">
        <div className="page-header">
          <span className="page-header__logo">Acument Intelligence</span>
          <span className="page-header__title">Case Study</span>
        </div>

        <div className="case-title-section">
          <div className="case-number">Case Study 03</div>
          <div className="case-client">Cross-Border Payment Company</div>
          <div className="case-project-title">International Tuition Payment Portal</div>
        </div>

        <figure className="case-hero">
          <img
            src="/acument-portfolio/fintech-tuition-portal/university.png"
            alt="Illustrated university façade — the destination for cross-border tuition flows."
          />
        </figure>

        <div className="case-meta">
          <div className="case-meta__item">
            <span className="case-meta__label">Industry</span>
            <span className="case-meta__value">Financial Services</span>
          </div>
          <div className="case-meta__item">
            <span className="case-meta__label">Engagement</span>
            <span className="case-meta__value">Direct Engagement</span>
          </div>
          <div className="case-meta__item">
            <span className="case-meta__label">Focus Areas</span>
            <div className="tags">
              <span className="tag">Cross-Border</span>
              <span className="tag">Payments</span>
              <span className="tag">Compliance</span>
            </div>
          </div>
        </div>

        <h4>The Challenge</h4>
        <p>
          For hundreds of thousands of Chinese families, paying overseas tuition represents one of
          the most complex financial transactions they will undertake. Traditional banking channels
          are slow, expensive, and opaque. Universities, meanwhile, struggle with fragmented payment
          collection across currencies and payment methods.
        </p>
        <p>
          A leading cross-border payment company identified an opportunity to create a purpose-built
          solution connecting Chinese families with educational institutions worldwide.
        </p>

        <h4>The Approach</h4>
        <p>
          We designed and built an <strong>International Tuition Payment Portal</strong>—a
          consumer-facing platform enabling Chinese families to pay tuition fees in RMB while
          universities receive funds in their local currency.
        </p>

        <p>
          <strong>Consumer Experience</strong>
          <br />
          The platform supports multiple payment channels familiar to Chinese consumers: UnionPay
          card payments, Alipay, WeChat Pay, and bank transfers. Real-time currency conversion with
          transparent exchange rates eliminates hidden fees and uncertainty.
        </p>

        <p>
          <strong>Global University Network</strong>
          <br />
          Through integration with partner networks including Western Union Business Solutions and
          UnionPay International, the platform connects families to 400+ universities and higher
          education institutions across nine countries spanning North America, Europe, and
          Asia-Pacific.
        </p>

        <p>
          <strong>Compliance by Design</strong>
          <br />
          Cross-border payments into and out of China require meticulous attention to regulatory
          requirements. The platform incorporates automated compliance checks aligned with Chinese
          foreign exchange regulations and international AML standards.
        </p>

        <h4>The Impact</h4>

        <div className="impact-grid">
          <div className="impact-card">
            <div className="impact-card__metric">400+</div>
            <div className="impact-card__label">Universities connected across 9 countries</div>
          </div>
          <div className="impact-card">
            <div className="impact-card__metric">4+ Payment Methods</div>
            <div className="impact-card__label">UnionPay, Alipay, WeChat Pay, Bank Transfer</div>
          </div>
          <div className="impact-card">
            <div className="impact-card__metric">Real-Time FX</div>
            <div className="impact-card__label">Transparent exchange rates with no hidden fees</div>
          </div>
          <div className="impact-card">
            <div className="impact-card__metric">Fully Compliant</div>
            <div className="impact-card__label">
              Automated regulatory checks for cross-border transfers
            </div>
          </div>
        </div>

        <blockquote>
          <p>
            The portal transformed a complex, opaque process into a seamless experience—enabling
            Chinese families to pay overseas tuition with confidence.
          </p>
        </blockquote>

        <div className="highlight-box">
          <div className="highlight-box__title">Partner Ecosystem</div>
          <p style={{ marginBottom: 0 }}>
            The platform operates in partnership with major global payment networks, providing
            end-to-end payment services from Chinese consumers to global educational institutions.
          </p>
        </div>

        <DownloadCaseStudyLink caseStudyId="tuition" />

        <div className="page-footer">
          <span>Cross-Border Payment Company</span>
          <span>© 2026 Acument Intelligence</span>
        </div>
      </div>
    </div>
  );
}
