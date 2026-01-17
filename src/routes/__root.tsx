import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4">
          <Link to="/" className="text-xl font-bold text-gray-900">
            Portfolio
          </Link>
          <div className="flex gap-6">
            <Link
              to="/"
              className="text-gray-600 hover:text-gray-900 [&.active]:font-semibold [&.active]:text-gray-900"
            >
              Home
            </Link>
            <Link
              to="/portfolio"
              className="text-gray-600 hover:text-gray-900 [&.active]:font-semibold [&.active]:text-gray-900"
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-gray-900 [&.active]:font-semibold [&.active]:text-gray-900"
            >
              About
            </Link>
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}
