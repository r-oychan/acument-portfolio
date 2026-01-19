import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect } from "react";
import "@/styles/portfolio.css";

export const Route = createFileRoute("/portfolio/")({
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
        <img
          src="https://www.acument.group/assets/web%20images/Asset%2010@300x.png"
          alt="Acument Intelligence"
          className="cover-logo-img"
          style={{
            height: "40px",
            width: "auto",
            objectFit: "contain",
            marginBottom: "var(--space-lg)",
          }}
        />
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
          <span className="page-header__logo">Acument Intelligence</span>
          <span className="page-header__title">Client Success Stories</span>
        </div>

        <h2>Contents</h2>

        <table style={{ marginTop: "var(--space-lg)" }}>
          <thead>
            <tr>
              <th style={{ width: "50%" }}>Case Study</th>
              <th>Industry</th>
              <th style={{ textAlign: "right" }}>View</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Link
                  to="/portfolio/disneyland"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Hong Kong Most Popular Theme Park
                </Link>
                <br />
                <em style={{ fontWeight: "normal", color: "var(--color-text-muted)" }}>
                  Digital Commerce Platform
                </em>
              </td>
              <td>Travel & Hospitality</td>
              <td style={{ textAlign: "right" }}>
                <Link to="/portfolio/disneyland" className="text-blue-600 hover:text-blue-800">
                  →
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/portfolio/mobility"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Leading HK Mobility Platform
                </Link>
                <br />
                <em style={{ fontWeight: "normal", color: "var(--color-text-muted)" }}>
                  Payment Infrastructure
                </em>
              </td>
              <td>Transportation</td>
              <td style={{ textAlign: "right" }}>
                <Link to="/portfolio/mobility" className="text-blue-600 hover:text-blue-800">
                  →
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/portfolio/tuition"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Cross-Border Payment Company
                </Link>
                <br />
                <em style={{ fontWeight: "normal", color: "var(--color-text-muted)" }}>
                  International Tuition Payment Portal
                </em>
              </td>
              <td>Financial Services</td>
              <td style={{ textAlign: "right" }}>
                <Link to="/portfolio/tuition" className="text-blue-600 hover:text-blue-800">
                  →
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/portfolio/remittance"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Cross-Border Payment Company
                </Link>
                <br />
                <em style={{ fontWeight: "normal", color: "var(--color-text-muted)" }}>
                  B2B Remittance API Platform
                </em>
              </td>
              <td>Financial Services</td>
              <td style={{ textAlign: "right" }}>
                <Link to="/portfolio/remittance" className="text-blue-600 hover:text-blue-800">
                  →
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/portfolio/luxury"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Global Luxury Brand
                </Link>
                <br />
                <em style={{ fontWeight: "normal", color: "var(--color-text-muted)" }}>
                  Security Case Automation
                </em>
              </td>
              <td>Retail & Luxury</td>
              <td style={{ textAlign: "right" }}>
                <Link to="/portfolio/luxury" className="text-blue-600 hover:text-blue-800">
                  →
                </Link>
              </td>
            </tr>
            <tr>
              <td>
                <Link
                  to="/portfolio/financial"
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  Global Luxury Brand
                </Link>
                <br />
                <em style={{ fontWeight: "normal", color: "var(--color-text-muted)" }}>
                  Vision-Enabled Brand Intelligence
                </em>
              </td>
              <td>Retail & Luxury</td>
              <td style={{ textAlign: "right" }}>
                <Link to="/portfolio/financial" className="text-blue-600 hover:text-blue-800">
                  →
                </Link>
              </td>
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
          <span>© 2026 Acument Intelligence</span>
          <span>Page 2</span>
        </div>
      </div>
    </div>
  );
}
