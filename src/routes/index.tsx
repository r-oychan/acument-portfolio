import { createFileRoute, Link } from "@tanstack/react-router";
import { portfolioItems } from "@/portfolioData";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  const featured = portfolioItems.slice(0, 3);

  return (
    <div>
      <section style={{ padding: "80px 0 48px", borderBottom: "1px solid #e0e0e0" }}>
        <div
          style={{
            fontSize: "0.75rem",
            fontWeight: 400,
            letterSpacing: "0.32px",
            textTransform: "uppercase",
            color: "var(--cds-link-primary)",
            marginBottom: "16px",
          }}
        >
          Acument Intelligence
        </div>
        <h1
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "60px",
            fontWeight: 300,
            lineHeight: 1.17,
            color: "var(--cds-text-primary)",
            margin: 0,
            maxWidth: "960px",
          }}
        >
          Engineering payments, commerce, and AI platforms for the enterprise.
        </h1>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: 1.5,
            color: "var(--cds-text-secondary)",
            marginTop: "24px",
            maxWidth: "640px",
          }}
        >
          A portfolio of measurable outcomes across fintech, digital commerce, and applied AI —
          delivered for category-leading organizations across Asia-Pacific.
        </p>
        <div style={{ marginTop: "32px", display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Link
            to="/portfolio"
            style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "var(--cds-button-primary)",
              color: "#ffffff",
              padding: "14px 63px 14px 15px",
              border: "1px solid transparent",
              borderRadius: "0px",
              height: "48px",
              fontSize: "14px",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              letterSpacing: "0.16px",
              textDecoration: "none",
            }}
          >
            View Client Success Stories
          </Link>
          <Link
            to="/about"
            style={{
              display: "inline-flex",
              alignItems: "center",
              backgroundColor: "transparent",
              color: "var(--cds-link-primary)",
              padding: "14px 15px",
              border: "1px solid var(--cds-link-primary)",
              borderRadius: "0px",
              height: "48px",
              fontSize: "14px",
              fontFamily: "var(--font-sans)",
              fontWeight: 400,
              letterSpacing: "0.16px",
              textDecoration: "none",
            }}
          >
            About
          </Link>
        </div>
      </section>

      <section style={{ padding: "64px 0" }}>
        <div
          style={{
            fontSize: "0.75rem",
            fontWeight: 600,
            letterSpacing: "0.32px",
            textTransform: "uppercase",
            color: "var(--cds-link-primary)",
            marginBottom: "16px",
          }}
        >
          Featured Case Studies
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1px",
            background: "var(--cds-border-subtle)",
          }}
        >
          {featured.map((item) => (
            <Link
              key={item.id}
              to={`/portfolio/${item.id}` as "/portfolio"}
              style={{
                display: "block",
                padding: "24px",
                background: "var(--cds-layer-01)",
                textDecoration: "none",
                color: "inherit",
                minHeight: "200px",
                transition: "background-color 0.15s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--cds-layer-01-hover)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--cds-layer-01)";
              }}
            >
              <div
                style={{
                  fontSize: "0.75rem",
                  letterSpacing: "0.32px",
                  textTransform: "uppercase",
                  color: "var(--cds-link-primary)",
                  marginBottom: "8px",
                }}
              >
                {item.caseNumber}
              </div>
              <div
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 400,
                  lineHeight: 1.4,
                  color: "var(--cds-text-primary)",
                  marginBottom: "8px",
                }}
              >
                {item.clientName}
              </div>
              <div
                style={{
                  fontSize: "0.875rem",
                  letterSpacing: "0.16px",
                  lineHeight: 1.29,
                  color: "var(--cds-text-secondary)",
                }}
              >
                {item.description}
              </div>
              <div
                style={{
                  marginTop: "24px",
                  fontSize: "0.875rem",
                  color: "var(--cds-link-primary)",
                }}
              >
                View case study →
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
