import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div style={{ minHeight: "100vh", backgroundColor: "var(--cds-background)" }}>
      <header
        style={{
          backgroundColor: "#161616",
          height: "48px",
          display: "flex",
          alignItems: "center",
          width: "100%",
        }}
        data-no-print
      >
        <nav
          style={{
            maxWidth: "1584px",
            width: "100%",
            margin: "0 auto",
            padding: "0 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <Link
            to="/"
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: "14px",
              fontWeight: 600,
              letterSpacing: "0.16px",
              color: "#ffffff",
              textDecoration: "none",
            }}
          >
            Acument Portfolio
          </Link>
          <div style={{ display: "flex", gap: "0", alignItems: "center" }}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/portfolio">Portfolio</NavLink>
            <NavLink to="/about">About</NavLink>
          </div>
        </nav>
      </header>
      <main
        style={{
          maxWidth: "1584px",
          margin: "0 auto",
          padding: "48px 32px",
        }}
      >
        <Outlet />
      </main>
    </div>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      style={{
        fontFamily: "var(--font-sans)",
        fontSize: "14px",
        fontWeight: 400,
        color: "#c6c6c6",
        textDecoration: "none",
        padding: "0 16px",
        height: "48px",
        display: "flex",
        alignItems: "center",
        position: "relative",
      }}
      activeProps={{
        style: {
          color: "#ffffff",
          borderBottom: "2px solid #ffffff",
        },
      }}
      onMouseEnter={(e) => {
        if (!e.currentTarget.classList.contains("active")) {
          e.currentTarget.style.color = "#ffffff";
        }
      }}
      onMouseLeave={(e) => {
        if (!e.currentTarget.classList.contains("active")) {
          e.currentTarget.style.color = "#c6c6c6";
        }
      }}
    >
      {children}
    </Link>
  );
}
