import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import "@/styles/portfolio.css";

export const Route = createFileRoute("/portfolio/remittance")({
  component: RemittanceCaseStudy,
});

function RemittanceCaseStudy() {
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
          <span>© 2026 Your Company</span>
        </div>
      </div>
    </div>
  );
}
