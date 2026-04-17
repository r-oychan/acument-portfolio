import { createFileRoute } from "@tanstack/react-router";
import "@/styles/portfolio.css";
import { DownloadCaseStudyLink } from "@/components/DownloadCaseStudyLink";

export const Route = createFileRoute("/portfolio/disneyland")({
  component: DisneylandCaseStudy,
});

function DisneylandCaseStudy() {
  return (
    <div className="portfolio-page">
      <div className="page">
        <div className="page-header">
          <span className="page-header__logo">Acument Intelligence</span>
          <span className="page-header__title">Case Study</span>
        </div>

        <div className="case-title-section">
          <div className="case-number">Case Study 01</div>
          <div className="case-client">Hong Kong Most Popular Theme Park</div>
          <div className="case-project-title">
            Reimagining the Guest Journey Through End-to-End Digital Commerce
          </div>
        </div>

        <figure className="case-hero">
          <img
            src="/acument-portfolio/international-theme-park-company/images/castle.png"
            alt="Illustrated castle at sunset — the destination at the heart of the guest journey."
          />
        </figure>

        <div className="case-meta">
          <div className="case-meta__item">
            <span className="case-meta__label">Industry</span>
            <span className="case-meta__value">Travel & Hospitality</span>
          </div>
          <div className="case-meta__item">
            <span className="case-meta__label">Engagement</span>
            <span className="case-meta__value">Direct Engagement</span>
          </div>
          <div className="case-meta__item">
            <span className="case-meta__label">Focus Areas</span>
            <div className="tags">
              <span className="tag">Digital Commerce</span>
              <span className="tag">Payments</span>
              <span className="tag">API Development</span>
            </div>
          </div>
        </div>

        <h4>The Challenge</h4>
        <p>
          In an era where consumers expect seamless digital experiences, one of Asia&apos;s most
          iconic theme park destinations faced a critical inflection point. Legacy ticketing
          processes—heavily reliant on paper tickets and manual operations—created friction at every
          touchpoint: long queues at entry gates, limited flexibility for guests purchasing bundled
          experiences, and constrained visibility into guest behavior patterns.
        </p>
        <p>
          The park&apos;s leadership recognized that digital transformation was no longer optional.
          To remain competitive and deliver the world-class experiences guests expect, they needed
          to fundamentally reimagine how visitors discover, purchase, and redeem their park
          experiences.
        </p>

        <h4>The Approach</h4>
        <div className="figure-clear">
          <figure className="figure-inline">
            <div className="figure-inline__media">
              <img
                src="/acument-portfolio/international-theme-park-company/images/turnstile.png"
                alt="Guest scanning a mobile QR ticket at a theme-park turnstile."
              />
            </div>
            <figcaption className="figure-inline__caption">
              FIG. 01 — The moment the digital journey meets the physical park.
            </figcaption>
          </figure>

          <p>
            We partnered with the resort to architect and deliver a comprehensive digital commerce
            ecosystem—one that would serve as the foundation for the guest experience from the
            moment of purchase through park departure.
          </p>

          <p>
            <strong>Unified Commerce Platform</strong>
            <br />
            We designed and implemented a scalable eCommerce engine capable of handling complex
            product configurations: standalone day tickets, multi-day passes, hotel-and-ticket
            packages, and premium entitlement bundles including priority access passes and dining
            credits. The platform integrates seamlessly with the park&apos;s existing ticketing
            infrastructure.
          </p>

          <p>
            <strong>Omnichannel Payment Integration</strong>
            <br />
            Recognizing the diverse payment preferences of international visitors, we engineered a
            payment orchestration layer supporting major credit cards and regional payment
            methods—ensuring frictionless checkout regardless of guest origin.
          </p>
        </div>

        <p>
          <strong>Operations Command Center</strong>
          <br />
          For park operations teams, we delivered an administrative portal providing end-to-end
          transaction visibility: real-time query capabilities, amendment workflows, and streamlined
          refund processing. The platform also empowers merchandising teams to rapidly configure and
          launch new packages without engineering dependencies.
        </p>

        <p>
          <strong>Brand-Aligned Experience Design</strong>
          <br />
          Every interface element was crafted in close collaboration with the client&apos;s design
          teams, ensuring pixel-perfect alignment with Disney&apos;s exacting brand standards and
          user experience principles.
        </p>

        <h4>The Impact</h4>

        <div className="impact-grid">
          <div className="impact-card">
            <div className="impact-card__metric">Fully Digital Journey</div>
            <div className="impact-card__label">
              End-to-end guest experience from discovery to park entry
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-card__metric">Paper Elimination</div>
            <div className="impact-card__label">
              Reduced operational overhead and printing costs
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-card__metric">Faster Entry</div>
            <div className="impact-card__label">
              Accelerated turnstile velocity with no manual validation
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-card__metric">Revenue Uplift</div>
            <div className="impact-card__label">
              Increased attachment rates through intelligent bundling
            </div>
          </div>
        </div>

        <blockquote>
          <p>
            The transformation established a digital foundation that continues to power new guest
            experiences and revenue opportunities.
          </p>
        </blockquote>

        <div className="highlight-box">
          <div className="highlight-box__title">Key Deliverables</div>
          <ul style={{ margin: 0, paddingLeft: "24px" }}>
            <li>Scalable eCommerce platform with complex product configuration</li>
            <li>Multi-gateway payment integration</li>
            <li>Real-time administrative portal</li>
            <li>Guest footprint tracking and redemption analytics</li>
          </ul>
        </div>

        <DownloadCaseStudyLink caseStudyId="disneyland" />

        <div className="page-footer">
          <span>Hong Kong Most Popular Theme Park</span>
          <span>© 2026 Acument Intelligence</span>
        </div>
      </div>
    </div>
  );
}
