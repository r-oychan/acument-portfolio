import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@/styles/portfolio.css";
import { portfolioItems, allTags } from "@/portfolioData";

export const Route = createFileRoute("/portfolio/")({
  component: PortfolioPage,
});

type PortfolioRoute =
  | "/portfolio/disneyland"
  | "/portfolio/mobility"
  | "/portfolio/tuition"
  | "/portfolio/remittance"
  | "/portfolio/luxury"
  | "/portfolio/financial";

function PortfolioPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

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

  // Toggle tag selection
  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Clear all filters
  const clearFilters = () => {
    setSelectedTags([]);
    setSearchQuery("");
  };

  // Filter portfolio items based on selected tags and search query
  const filteredItems = useMemo(() => {
    return portfolioItems.filter((item) => {
      // Filter by selected tags
      const matchesTags =
        selectedTags.length === 0 || selectedTags.some((tag) => item.tags.includes(tag));

      // Filter by search query (search in tags, client name, description)
      const matchesSearch =
        searchQuery === "" ||
        item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.industry.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTags && matchesSearch;
    });
  }, [selectedTags, searchQuery]);

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

        {/* Filter Section */}
        <div style={{ marginTop: "var(--space-lg)", marginBottom: "var(--space-lg)" }}>
          {/* Search Input */}
          <div style={{ marginBottom: "var(--space-md)" }}>
            <input
              type="text"
              placeholder="Search by tag, industry, or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                width: "100%",
                padding: "0.75rem 1rem",
                fontSize: "0.95rem",
                border: "1px solid #e0e0e0",
                borderRadius: "6px",
                outline: "none",
                transition: "border-color 0.2s ease",
              }}
              onFocus={(e) => {
                e.target.style.borderColor = "var(--color-primary)";
              }}
              onBlur={(e) => {
                e.target.style.borderColor = "#e0e0e0";
              }}
            />
          </div>

          {/* Tag Filter Chips */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                marginBottom: "0.5rem",
                fontSize: "0.85rem",
                color: "var(--color-text-muted)",
              }}
            >
              <span style={{ fontWeight: 500 }}>Filter by tag:</span>
              {(selectedTags.length > 0 || searchQuery !== "") && (
                <button
                  onClick={clearFilters}
                  style={{
                    padding: "0.25rem 0.75rem",
                    fontSize: "0.8rem",
                    background: "transparent",
                    color: "var(--color-primary)",
                    border: "1px solid var(--color-primary)",
                    borderRadius: "4px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "var(--color-primary)";
                    e.currentTarget.style.color = "white";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = "var(--color-primary)";
                  }}
                >
                  Clear filters
                </button>
              )}
            </div>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
              }}
            >
              {allTags.map((tag) => (
                <motion.button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    padding: "0.5rem 1rem",
                    fontSize: "0.85rem",
                    background: selectedTags.includes(tag) ? "var(--color-primary)" : "#f5f5f5",
                    color: selectedTags.includes(tag) ? "white" : "var(--color-text)",
                    border: selectedTags.includes(tag)
                      ? "1px solid var(--color-primary)"
                      : "1px solid #e0e0e0",
                    borderRadius: "20px",
                    cursor: "pointer",
                    transition: "all 0.2s ease",
                    fontWeight: selectedTags.includes(tag) ? 500 : 400,
                  }}
                >
                  {tag}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <div
            style={{
              marginTop: "var(--space-md)",
              fontSize: "0.9rem",
              color: "var(--color-text-muted)",
            }}
          >
            Showing {filteredItems.length} of {portfolioItems.length} case studies
          </div>
        </div>

        {/* Animated Portfolio Table */}
        <table style={{ marginTop: "var(--space-lg)" }}>
          <thead>
            <tr>
              <th style={{ width: "50%" }}>Case Study</th>
              <th>Industry</th>
              <th style={{ textAlign: "right" }}>View</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.tr
                  key={item.id}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  layout
                >
                  <td>
                    <Link
                      to={`/portfolio/${item.id}` as PortfolioRoute}
                      className="text-blue-600 hover:text-blue-800 font-semibold"
                    >
                      {item.clientName}
                    </Link>
                    <br />
                    <em style={{ fontWeight: "normal", color: "var(--color-text-muted)" }}>
                      {item.description}
                    </em>
                  </td>
                  <td>{item.industry}</td>
                  <td style={{ textAlign: "right" }}>
                    <Link
                      to={`/portfolio/${item.id}` as PortfolioRoute}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      →
                    </Link>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
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
