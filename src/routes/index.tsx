import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div>
      <section
        style={{
          padding: "80px 0 48px",
        }}
      >
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
          Welcome to My Portfolio
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
          A modern portfolio built with React, TypeScript, and TanStack Router.
        </p>
        <div style={{ marginTop: "32px" }}>
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
              cursor: "pointer",
            }}
          >
            View Client Success Stories
          </Link>
        </div>
      </section>
    </div>
  );
}
