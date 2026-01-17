import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold text-gray-900">About</h1>
      <p className="mt-4 text-lg text-gray-600">Learn more about me and my work.</p>
    </div>
  );
}
