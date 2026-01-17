import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import "@/styles/portfolio.css";

export const Route = createFileRoute("/portfolio")({
  component: PortfolioPage,
});

function PortfolioPage() {
  useEffect(() => {
    // Load Google Fonts
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
      {/* COVER PAGE */}
      <div className="page page--cover">
        <div className="cover-logo">Your Company</div>
        <div className="cover-eyebrow">Client Success Stories</div>
        <h1 className="cover-title">Driving Digital Transformation</h1>
        <p className="cover-subtitle">
          Case studies demonstrating measurable impact across payments, commerce, and financial
          services.
        </p>
        <div className="cover-date">January 2026</div>
        <div className="page-footer">
          <span>Confidential</span>
          <span>Page 1</span>
        </div>
      </div>

      {/* TABLE OF CONTENTS */}
      <div className="page">
        <div className="page-header">
          <span className="page-header__logo">Your Company</span>
          <span className="page-header__title">Client Success Stories</span>
        </div>

        <h2>Contents</h2>

        <table style={{ marginTop: "var(--space-lg)" }}>
          <thead>
            <tr>
              <th style={{ width: "50%" }}>Case Study</th>
              <th>Industry</th>
              <th style={{ textAlign: "right" }}>Page</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Hong Kong Disneyland Resort
                <br />
                <em style={{ fontWeight: "normal", color: "var(--color-text-muted)" }}>
                  Digital Commerce Platform
                </em>
              </td>
              <td>Travel & Hospitality</td>
              <td style={{ textAlign: "right" }}>3</td>
            </tr>
            <tr>
              <td>
                Leading HK Mobility Platform
                <br />
                <em style={{ fontWeight: "normal", color: "var(--color-text-muted)" }}>
                  Payment Infrastructure
                </em>
              </td>
              <td>Transportation</td>
              <td style={{ textAlign: "right" }}>5</td>
            </tr>
            <tr>
              <td>
                Cross-Border Payment Company
                <br />
                <em style={{ fontWeight: "normal", color: "var(--color-text-muted)" }}>
                  International Tuition Payment Portal
                </em>
              </td>
              <td>Financial Services</td>
              <td style={{ textAlign: "right" }}>7</td>
            </tr>
            <tr>
              <td>
                Cross-Border Payment Company
                <br />
                <em style={{ fontWeight: "normal", color: "var(--color-text-muted)" }}>
                  B2B Remittance API Platform
                </em>
              </td>
              <td>Financial Services</td>
              <td style={{ textAlign: "right" }}>9</td>
            </tr>
            <tr>
              <td>
                Global Luxury Brand
                <br />
                <em style={{ fontWeight: "normal", color: "var(--color-text-muted)" }}>
                  Security Case Automation
                </em>
              </td>
              <td>Retail & Luxury</td>
              <td style={{ textAlign: "right" }}>11</td>
            </tr>
            <tr>
              <td>
                Financial Services Firm
                <br />
                <em style={{ fontWeight: "normal", color: "var(--color-text-muted)" }}>
                  Vision-Enabled Market Intelligence
                </em>
              </td>
              <td>Financial Services</td>
              <td style={{ textAlign: "right" }}>13</td>
            </tr>
          </tbody>
        </table>

        <div style={{ marginTop: "var(--space-xl)" }}>
          <h4>Our Capabilities</h4>
          <div className="two-col" style={{ marginTop: "var(--space-md)" }}>
            <div>
              <p>
                <strong>Payment Systems</strong>
                <br />
                Gateway integration, multi-currency processing, reconciliation engines
              </p>
              <p>
                <strong>Platform Architecture</strong>
                <br />
                API design, microservices, event-driven systems
              </p>
            </div>
            <div>
              <p>
                <strong>AI & Automation</strong>
                <br />
                Machine learning, RAG systems, process automation
              </p>
              <p>
                <strong>Compliance & Security</strong>
                <br />
                PCI DSS, maker/checker controls, audit infrastructure
              </p>
            </div>
          </div>
        </div>

        <div className="page-footer">
          <span>© 2026 Your Company</span>
          <span>Page 2</span>
        </div>
      </div>

      {/* CASE STUDY 1: HONG KONG DISNEYLAND - PAGE 1 */}
      <div className="page">
        <div className="page-header">
          <span className="page-header__logo">Your Company</span>
          <span className="page-header__title">Case Study</span>
        </div>

        <div className="case-title-section">
          <div className="case-number">Case Study 01</div>
          <div className="case-client">Hong Kong Disneyland Resort</div>
          <div className="case-project-title">
            Reimagining the Guest Journey Through End-to-End Digital Commerce
          </div>
        </div>

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
        <p>
          We partnered with the resort to architect and deliver a comprehensive digital commerce
          ecosystem—one that would serve as the foundation for the guest experience from the moment
          of purchase through park departure.
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

        <div className="page-footer">
          <span>Hong Kong Disneyland Resort</span>
          <span>Page 3</span>
        </div>
      </div>

      {/* CASE STUDY 1: HONG KONG DISNEYLAND - PAGE 2 */}
      <div className="page">
        <div className="page-header">
          <span className="page-header__logo">Your Company</span>
          <span className="page-header__title">Case Study 01 — Hong Kong Disneyland</span>
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
          <ul style={{ margin: 0, paddingLeft: "var(--space-md)" }}>
            <li>Scalable eCommerce platform with complex product configuration</li>
            <li>Multi-gateway payment integration</li>
            <li>Real-time administrative portal</li>
            <li>Guest footprint tracking and redemption analytics</li>
          </ul>
        </div>

        <div className="page-footer">
          <span>Hong Kong Disneyland Resort</span>
          <span>Page 4</span>
        </div>
      </div>

      {/* CASE STUDY 2: HK MOBILITY PLATFORM - PAGE 1 */}
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

        <div className="page-footer">
          <span>Confidential Client</span>
          <span>Page 5</span>
        </div>
      </div>

      {/* CASE STUDY 2: HK MOBILITY PLATFORM - PAGE 2 */}
      <div className="page">
        <div className="page-header">
          <span className="page-header__logo">Your Company</span>
          <span className="page-header__title">Case Study 02 — HK Mobility Platform</span>
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
          <span>Page 6</span>
        </div>
      </div>

      {/* CASE STUDY 3: GEOSWIFT PAYTUITIONNOW - PAGE 1 */}
      <div className="page">
        <div className="page-header">
          <span className="page-header__logo">Your Company</span>
          <span className="page-header__title">Case Study</span>
        </div>

        <div className="case-title-section">
          <div className="case-number">Case Study 03</div>
          <div className="case-client">Cross-Border Payment Company</div>
          <div className="case-project-title">International Tuition Payment Portal</div>
        </div>

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

        <div className="page-footer">
          <span>Cross-Border Payment Company</span>
          <span>Page 7</span>
        </div>
      </div>

      {/* CASE STUDY 3: GEOSWIFT PAYTUITIONNOW - PAGE 2 */}
      <div className="page">
        <div className="page-header">
          <span className="page-header__logo">Your Company</span>
          <span className="page-header__title">Case Study 03 — Tuition Payment Portal</span>
        </div>

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

        <div className="page-footer">
          <span>Cross-Border Payment Company</span>
          <span>Page 8</span>
        </div>
      </div>

      {/* CASE STUDY 4: GEOSWIFT GEOREMITTANCE - PAGE 1 */}
      <div className="page">
        <div className="page-header">
          <span className="page-header__logo">Your Company</span>
          <span className="page-header__title">Case Study</span>
        </div>

        <div className="case-title-section">
          <div className="case-number">Case Study 04</div>
          <div className="case-client">Cross-Border Payment Company</div>
          <div className="case-project-title">B2B Remittance API Platform</div>
        </div>

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
              <span className="tag">API Development</span>
              <span className="tag">Cross-Border</span>
              <span className="tag">PCI DSS</span>
            </div>
          </div>
        </div>

        <h4>The Challenge</h4>
        <p>
          Global enterprises increasingly need to pay vendors, partners, and employees in China—but
          traditional banking infrastructure moves too slowly, costs too much, and lacks the
          flexibility modern businesses require. The client sought to create an API-first solution
          enabling foreign companies to initiate compliant, cost-effective payments to Chinese
          recipients.
        </p>

        <h4>The Approach</h4>
        <p>
          We architected and delivered a comprehensive B2B payment platform encompassing APIs,
          administrative tooling, and compliance infrastructure.
        </p>

        <p>
          <strong>Enterprise API Suite</strong>
          <br />
          The REST API platform enables programmatic payment initiation with sophisticated business
          logic:
        </p>
        <ul>
          <li>
            <strong>Dynamic Fee Calculation:</strong> Configurable transaction fee structures with
            markup rules
          </li>
          <li>
            <strong>Real-Time FX Management:</strong> Live exchange rates with spread configuration
          </li>
          <li>
            <strong>Wallet Functionality:</strong> Pre-funded balance management for high-volume
            senders
          </li>
        </ul>

        <p>
          <strong>Compliance & Security Infrastructure</strong>
          <br />
          Financial services demand rigorous security and auditability. We implemented maker/checker
          workflows for dual-approval fund management, complete audit trails for regulatory
          reporting, and architecture enabling successful PCI DSS certification.
        </p>

        <div className="page-footer">
          <span>Cross-Border Payment Company</span>
          <span>Page 9</span>
        </div>
      </div>

      {/* CASE STUDY 4: GEOSWIFT GEOREMITTANCE - PAGE 2 */}
      <div className="page">
        <div className="page-header">
          <span className="page-header__logo">Your Company</span>
          <span className="page-header__title">Case Study 04 — B2B Remittance Platform</span>
        </div>

        <p>
          <strong>Operations Portal</strong>
          <br />
          The administrative interface provides real-time rate monitoring, transaction tracking, and
          comprehensive compliance reporting—giving operations teams full visibility into payment
          flows.
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
              <td>Transaction Volume</td>
              <td>
                <strong>$5M+ USD</strong> processed monthly
              </td>
            </tr>
            <tr>
              <td>Compliance Achievement</td>
              <td>
                <strong>PCI DSS certified</strong> platform
              </td>
            </tr>
            <tr>
              <td>Market Reach</td>
              <td>
                Connected to <strong>400+ institutions</strong> across 9 countries
              </td>
            </tr>
            <tr>
              <td>Operational Excellence</td>
              <td>Automated processing with minimal manual intervention</td>
            </tr>
            <tr>
              <td>Knowledge Transfer</td>
              <td>Successful handover to internal team for ongoing maintenance</td>
            </tr>
          </tbody>
        </table>

        <blockquote>
          <p>
            The platform continues to scale, supporting the growing demand for transparent,
            compliant China cross-border payments.
          </p>
        </blockquote>

        <div className="highlight-box">
          <div className="highlight-box__title">Platform Capabilities</div>
          <p style={{ marginBottom: 0 }}>
            A full-featured B2B payment platform enabling foreign companies to pay vendors in China
            with real-time FX, configurable fees, and complete regulatory compliance.
          </p>
        </div>

        <div className="page-footer">
          <span>Cross-Border Payment Company</span>
          <span>Page 10</span>
        </div>
      </div>

      {/* CASE STUDY 5: LUXURY BRAND SECURITY - PAGE 1 */}
      <div className="page">
        <div className="page-header">
          <span className="page-header__logo">Your Company</span>
          <span className="page-header__title">Case Study</span>
        </div>

        <div className="case-title-section">
          <div className="case-number">Case Study 05</div>
          <div className="case-client">Global Luxury Brand</div>
          <div className="case-project-title">
            Transforming Security Operations Through Intelligent Case Automation
          </div>
        </div>

        <div className="case-meta">
          <div className="case-meta__item">
            <span className="case-meta__label">Industry</span>
            <span className="case-meta__value">Retail & Luxury Goods</span>
          </div>
          <div className="case-meta__item">
            <span className="case-meta__label">Engagement</span>
            <span className="case-meta__value">Direct Engagement</span>
          </div>
          <div className="case-meta__item">
            <span className="case-meta__label">Focus Areas</span>
            <div className="tags">
              <span className="tag">Security Ops</span>
              <span className="tag">Automation</span>
              <span className="tag">AI/ML</span>
            </div>
          </div>
        </div>

        <h4>The Challenge</h4>
        <p>
          For a prestigious global luxury brand, protecting the business from security threats
          requires constant vigilance. The security operations team relied on email-based alerts
          generated by existing filtering rules—a system that successfully flagged unusual
          activities but produced a significant volume of false positives.
        </p>
        <p>
          Security officers faced a daily deluge of alerts arriving in their inboxes. Each case
          demanded manual investigation: reading through email threads, cross-referencing historical
          incidents, and determining whether the alert warranted action. Critical alerts risked
          being buried in overflowing inboxes, and institutional knowledge remained trapped in
          scattered email chains.
        </p>

        <h4>The Approach</h4>
        <p>
          We designed and implemented an intelligent security case management platform that
          transforms raw alerts into actionable intelligence.
        </p>

        <p>
          <strong>Automated Alert Ingestion & Enrichment</strong>
          <br />
          Using Microsoft Power Automate, we built integration pipelines that capture alerts from
          the existing email filtering system and ingest them into Microsoft Dataverse. Each alert
          is automatically enriched with contextual data, creating structured case records.
        </p>

        <p>
          <strong>Machine Learning Classification</strong>
          <br />
          Rather than treating every alert equally, we implemented ML models that analyze each case
          against historical patterns. The system learns from officer feedback, continuously
          improving its ability to distinguish genuine threats from false positives.
        </p>

        <div className="page-footer">
          <span>Confidential Client</span>
          <span>Page 11</span>
        </div>
      </div>

      {/* CASE STUDY 5: LUXURY BRAND SECURITY - PAGE 2 */}
      <div className="page">
        <div className="page-header">
          <span className="page-header__logo">Your Company</span>
          <span className="page-header__title">Case Study 05 — Global Luxury Brand</span>
        </div>

        <p>
          <strong>Real-Time Teams Integration</strong>
          <br />
          Security officers now receive intelligent notifications directly in Microsoft Teams. Each
          alert card includes case summary, risk assessment, and one-click action buttons—enabling
          officers to flag, escalate, or dismiss cases without leaving their workflow.
        </p>

        <p>
          <strong>Conversational Intelligence with Copilot Studio</strong>
          <br />
          We deployed a custom Copilot Studio agent that enables security teams to query historical
          cases through natural conversation. Officers can ask questions like "Show me similar cases
          from this user in the past 6 months"—surfacing insights that previously required hours of
          email archaeology.
        </p>

        <p>
          <strong>Unified Analytics & Continuous Improvement</strong>
          <br />
          With all case data consolidated in Dataverse, we delivered Power BI dashboards providing
          real-time visibility into alert volumes, response times, and team performance. The unified
          data layer enables continuous refinement of ML models.
        </p>

        <h4>The Impact</h4>

        <div className="impact-grid">
          <div className="impact-card">
            <div className="impact-card__metric">Hours → Minutes</div>
            <div className="impact-card__label">Response time with Teams-based triage</div>
          </div>
          <div className="impact-card">
            <div className="impact-card__metric">Unified Data</div>
            <div className="impact-card__label">All historical cases searchable via AI</div>
          </div>
          <div className="impact-card">
            <div className="impact-card__metric">Continuous Learning</div>
            <div className="impact-card__label">ML improvement based on officer feedback</div>
          </div>
          <div className="impact-card">
            <div className="impact-card__metric">Full Visibility</div>
            <div className="impact-card__label">Real-time dashboards for leadership</div>
          </div>
        </div>

        <blockquote>
          <p>
            The platform transformed security operations from reactive email monitoring to
            proactive, intelligence-driven threat management.
          </p>
        </blockquote>

        <div className="page-footer">
          <span>Confidential Client</span>
          <span>Page 12</span>
        </div>
      </div>

      {/* CASE STUDY 6: FINANCIAL SERVICES AI - PAGE 1 */}
      <div className="page">
        <div className="page-header">
          <span className="page-header__logo">Your Company</span>
          <span className="page-header__title">Case Study</span>
        </div>

        <div className="case-title-section">
          <div className="case-number">Case Study 06</div>
          <div className="case-client">Financial Services Firm</div>
          <div className="case-project-title">
            Building a Vision-Enabled AI Assistant for Market Intelligence
          </div>
        </div>

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
              <span className="tag">AI/ML</span>
              <span className="tag">Computer Vision</span>
              <span className="tag">Knowledge Mgmt</span>
            </div>
          </div>
        </div>

        <h4>The Challenge</h4>
        <p>
          A leading financial services firm sought to democratize access to market intelligence.
          Their internal insights team maintained a wealth of research—market data, analyst reports,
          trend analyses—that could drive better decision-making across the organization.
        </p>
        <p>
          The client initially explored Microsoft Copilot Studio as the foundation for a
          conversational AI assistant. However, a critical limitation emerged: financial research is
          inherently visual. Reports are dense with charts, graphs, and data visualizations that
          convey meaning no text summary can capture. Out-of-the-box, Copilot Studio struggled to
          interpret these visual elements.
        </p>
        <p>
          The firm needed an AI assistant that could truly <em>see</em> and understand their
          research—not just read it.
        </p>

        <h4>The Approach</h4>
        <p>
          We architected and delivered a custom Retrieval-Augmented Generation (RAG) solution with
          multimodal capabilities.
        </p>

        <p>
          <strong>Multimodal Document Processing Pipeline</strong>
          <br />
          We built a sophisticated ingestion pipeline that processes research documents
          holistically. Text is extracted and chunked for semantic search, while charts, graphs, and
          visualizations are processed through computer vision models that generate rich
          descriptions of visual content.
        </p>

        <p>
          <strong>Azure AI Search with Vision-Enhanced Indexing</strong>
          <br />
          All processed content—text chunks and visual descriptions alike—flows into Azure AI
          Search, creating a unified knowledge index that retrieves context from both textual and
          visual sources.
        </p>

        <div className="page-footer">
          <span>Confidential Client</span>
          <span>Page 13</span>
        </div>
      </div>

      {/* CASE STUDY 6: FINANCIAL SERVICES AI - PAGE 2 */}
      <div className="page">
        <div className="page-header">
          <span className="page-header__logo">Your Company</span>
          <span className="page-header__title">Case Study 06 — Financial Services Firm</span>
        </div>

        <p>
          <strong>Vision-Capable Language Model Integration</strong>
          <br />
          For response generation, we integrated vision-capable models that can reference and reason
          about visual content. When a user asks about market trends, the assistant draws insights
          from chart analyses, explains visualizations, and synthesizes findings across multiple
          reports.
        </p>

        <p>
          <strong>Seamless Conversational Interface</strong>
          <br />
          The final solution delivers a natural chat experience where users can ask complex
          questions like "What does our Q3 analysis show about emerging market performance?" and
          receive answers incorporating insights from both written analysis and supporting
          visualizations.
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
              <td>Query Accuracy</td>
              <td>High-fidelity responses incorporating visual data insights</td>
            </tr>
            <tr>
              <td>Time Savings</td>
              <td>Analysts access intelligence in seconds vs. hours</td>
            </tr>
            <tr>
              <td>Knowledge Utilization</td>
              <td>Previously underutilized visual research now discoverable</td>
            </tr>
            <tr>
              <td>Scalability</td>
              <td>Self-service access reduces demand on insights team</td>
            </tr>
            <tr>
              <td>Decision Quality</td>
              <td>Faster, data-informed decisions across the organization</td>
            </tr>
          </tbody>
        </table>

        <blockquote>
          <p>
            The solution unlocked the full value of the firm&apos;s research library—transforming
            static reports into an interactive, queryable intelligence asset.
          </p>
        </blockquote>

        <div className="highlight-box">
          <div className="highlight-box__title">Technology Stack</div>
          <p style={{ marginBottom: 0 }}>
            Custom RAG architecture • Azure AI Search • Vision-capable LLMs • Computer Vision
            document processing • Multimodal embeddings
          </p>
        </div>

        <div className="page-footer">
          <span>Confidential Client</span>
          <span>Page 14</span>
        </div>
      </div>

      {/* CONTACT / BACK COVER */}
      <div className="page page--cover">
        <div className="cover-logo">Your Company</div>
        <div className="cover-eyebrow">Let&apos;s Connect</div>
        <h1 className="cover-title" style={{ fontSize: "2.5rem" }}>
          Ready to Transform Your Business?
        </h1>
        <p className="cover-subtitle">
          We partner with organizations navigating complex technology transformations in payments,
          commerce, AI, and financial services.
        </p>

        <div style={{ marginTop: "var(--space-xl)", opacity: 0.9 }}>
          <p style={{ color: "white", marginBottom: "var(--space-xs)" }}>
            <strong>Email:</strong> hello@yourcompany.com
          </p>
          <p style={{ color: "white", marginBottom: "var(--space-xs)" }}>
            <strong>Website:</strong> www.yourcompany.com
          </p>
          <p style={{ color: "white" }}>
            <strong>Location:</strong> Hong Kong
          </p>
        </div>

        <div className="page-footer">
          <span>© 2026 Your Company. All rights reserved.</span>
          <span>Page 15</span>
        </div>
      </div>
    </div>
  );
}
