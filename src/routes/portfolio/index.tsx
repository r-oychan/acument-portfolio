import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "@/styles/portfolio.css";
import { portfolioItems, allTags, allIndustries } from "@/portfolioData";

export const Route = createFileRoute("/portfolio/")({
  component: PortfolioPage,
});

type PortfolioRoute =
  | "/portfolio/theme-park"
  | "/portfolio/mobility"
  | "/portfolio/tuition"
  | "/portfolio/remittance"
  | "/portfolio/luxury"
  | "/portfolio/financial"
  | "/portfolio/sourcing";

function PortfolioPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const toggleIndustry = (industry: string) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry) ? prev.filter((i) => i !== industry) : [...prev, industry]
    );
  };

  const clearFilters = () => {
    setSelectedTags([]);
    setSelectedIndustries([]);
    setSearchQuery("");
  };

  const filteredItems = useMemo(() => {
    return portfolioItems.filter((item) => {
      const matchesTags =
        selectedTags.length === 0 || selectedTags.some((tag) => item.tags.includes(tag));
      const matchesIndustries =
        selectedIndustries.length === 0 || selectedIndustries.includes(item.industry);
      const matchesSearch =
        searchQuery === "" ||
        item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.clientName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.industry.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesTags && matchesIndustries && matchesSearch;
    });
  }, [selectedTags, selectedIndustries, searchQuery]);

  return (
    <div className="portfolio-page">
      <div className="page">
        <div className="page-header">
          <span className="page-header__logo">Acument Intelligence</span>
          <span className="page-header__title">Client Success Stories</span>
        </div>

        <div style={{ marginBottom: "48px" }}>
          <div className="case-number">Portfolio</div>
          <h1>Client Success Stories</h1>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--cds-text-secondary)",
              maxWidth: "720px",
              margin: 0,
            }}
          >
            Case studies demonstrating measurable impact across payments, commerce, and financial
            services.
          </p>
        </div>

        {/* Search */}
        <div style={{ marginBottom: "32px" }}>
          <div className="filter-label">Search</div>
          <input
            type="text"
            placeholder="Search by tag, industry, or keyword..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="cds-input"
          />
        </div>

        {/* Tag filters */}
        <div style={{ marginBottom: "24px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
              marginBottom: "8px",
            }}
          >
            <span className="filter-label" style={{ marginBottom: 0 }}>
              Filter by tag
            </span>
            {(selectedTags.length > 0 || selectedIndustries.length > 0 || searchQuery !== "") && (
              <button onClick={clearFilters} className="clear-btn">
                Clear filters
              </button>
            )}
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {allTags.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => toggleTag(tag)}
                className="filter-chip"
                data-selected={selectedTags.includes(tag)}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Industry filters */}
        <div style={{ marginBottom: "32px" }}>
          <div className="filter-label">Industry</div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {allIndustries.map((industry) => (
              <button
                key={industry}
                type="button"
                onClick={() => toggleIndustry(industry)}
                className="filter-chip"
                data-selected={selectedIndustries.includes(industry)}
              >
                {industry}
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            fontSize: "0.75rem",
            letterSpacing: "0.32px",
            color: "var(--cds-text-secondary)",
            marginBottom: "16px",
          }}
        >
          Showing {filteredItems.length} of {portfolioItems.length} case studies
        </div>

        {/* Portfolio table */}
        <table>
          <thead>
            <tr>
              <th style={{ width: "45%" }}>Case Study</th>
              <th>Industry</th>
              <th>Tags</th>
              <th style={{ textAlign: "right" }}>View</th>
            </tr>
          </thead>
          <tbody>
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.tr
                  key={item.id}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.2 }}
                  layout
                >
                  <td>
                    <Link to={`/portfolio/${item.id}` as PortfolioRoute}>{item.clientName}</Link>
                    <div
                      style={{
                        color: "var(--cds-text-secondary)",
                        fontSize: "0.875rem",
                        letterSpacing: "0.16px",
                        marginTop: "4px",
                      }}
                    >
                      {item.description}
                    </div>
                  </td>
                  <td>{item.industry}</td>
                  <td>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "4px" }}>
                      {item.tags.map((tag) => (
                        <span key={tag} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td style={{ textAlign: "right" }}>
                    <Link
                      to={`/portfolio/${item.id}` as PortfolioRoute}
                      aria-label={`View ${item.clientName} case study`}
                    >
                      →
                    </Link>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>

        <div style={{ marginTop: "64px" }}>
          <h4>Our Capabilities</h4>
          <div className="two-col" style={{ marginTop: "16px" }}>
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
          <span>Portfolio</span>
        </div>
      </div>
    </div>
  );
}
