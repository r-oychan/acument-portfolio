import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900">Welcome to My Portfolio</h1>
      <p className="mt-4 text-lg text-gray-600">
        A modern portfolio built with React, TypeScript, and TanStack Router.
      </p>
    </div>
  );
}
