import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
  component: RootLayout,
});

function RootLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm print:hidden">
        <nav className="mx-auto flex max-w-7xl flex-col items-center gap-2 px-4 py-3 sm:flex-row sm:justify-between sm:gap-0 sm:py-4">
          <Link to="/" className="text-xl font-bold text-gray-900">
            Portfolio
          </Link>
          <div className="flex gap-4 sm:gap-6">
            <Link
              to="/"
              className="text-sm text-gray-600 hover:text-gray-900 sm:text-base [&.active]:font-semibold [&.active]:text-gray-900"
            >
              Home
            </Link>
            <Link
              to="/portfolio"
              className="text-sm text-gray-600 hover:text-gray-900 sm:text-base [&.active]:font-semibold [&.active]:text-gray-900"
            >
              Portfolio
            </Link>
            <Link
              to="/about"
              className="text-sm text-gray-600 hover:text-gray-900 sm:text-base [&.active]:font-semibold [&.active]:text-gray-900"
            >
              About
            </Link>
          </div>
        </nav>
      </header>
      <main className="mx-auto max-w-7xl px-4 py-8 print:max-w-none print:p-0">
        <Outlet />
      </main>
    </div>
  );
}
