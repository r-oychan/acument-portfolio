import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div>
      <section style={{ padding: "80px 0 48px" }}>
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
          About
        </div>
        <h1
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: "60px",
            fontWeight: 300,
            lineHeight: 1.17,
            color: "var(--cds-text-primary)",
            margin: 0,
          }}
        >
          A practice focused on outcomes.
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
          Acument Intelligence partners with organizations to engineer payments infrastructure,
          digital commerce platforms, and applied AI systems that move measurable business metrics.
        </p>
      </section>

      <section style={{ padding: "48px 0", borderTop: "1px solid #e0e0e0" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "32px",
          }}
        >
          <Capability
            title="Payments"
            body="Multi-rail gateway integration, reconciliation engines, sub-merchant architectures, PCI DSS-ready infrastructure."
          />
          <Capability
            title="Digital Commerce"
            body="Product-configurable eCommerce platforms, omnichannel payment orchestration, administrative tooling."
          />
          <Capability
            title="Applied AI"
            body="Retrieval-Augmented Generation, multimodal document processing, ML classification pipelines."
          />
          <Capability
            title="Automation"
            body="Microsoft Power Platform, SharePoint taxonomy design, workflow orchestration."
          />
        </div>
      </section>
    </div>
  );
}

function Capability({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <div
        style={{
          fontSize: "1.25rem",
          fontWeight: 600,
          lineHeight: 1.4,
          color: "var(--cds-text-primary)",
          marginBottom: "8px",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: "0.875rem",
          letterSpacing: "0.16px",
          lineHeight: 1.29,
          color: "var(--cds-text-secondary)",
        }}
      >
        {body}
      </div>
    </div>
  );
}
