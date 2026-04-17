import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
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
          About
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
          Learn more about me and my work.
        </p>
      </section>
    </div>
  );
}
