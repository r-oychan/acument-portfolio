import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import "@/styles/portfolio.css";

export const Route = createFileRoute("/portfolio/financial")({
  component: FinancialCaseStudy,
});

function FinancialCaseStudy() {
  useEffect(() => {
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

  return (
    <div className="portfolio-page">
      <div className="page">
        <div className="page-header">
          <span className="page-header__logo">Your Company</span>
          <span className="page-header__title">Case Study</span>
        </div>

        <div className="case-title-section">
          <div className="case-number">Case Study 06</div>
          <div className="case-client">Financial Services Firm</div>
          <div className="case-project-title">
            Building a Vision-Enabled AI Assistant for Market Intelligence
          </div>
        </div>

        <div className="case-meta">
          <div className="case-meta__item">
            <span className="case-meta__label">Industry</span>
            <span className="case-meta__value">Financial Services</span>
          </div>
          <div className="case-meta__item">
            <span className="case-meta__label">Engagement</span>
            <span className="case-meta__value">Direct Engagement</span>
          </div>
          <div className="case-meta__item">
            <span className="case-meta__label">Focus Areas</span>
            <div className="tags">
              <span className="tag">AI/ML</span>
              <span className="tag">Computer Vision</span>
              <span className="tag">Knowledge Mgmt</span>
            </div>
          </div>
        </div>

        <h4>The Challenge</h4>
        <p>
          A leading financial services firm sought to democratize access to market intelligence.
          Their internal insights team maintained a wealth of research—market data, analyst reports,
          trend analyses—that could drive better decision-making across the organization.
        </p>
        <p>
          The client initially explored Microsoft Copilot Studio as the foundation for a
          conversational AI assistant. However, a critical limitation emerged: financial research is
          inherently visual. Reports are dense with charts, graphs, and data visualizations that
          convey meaning no text summary can capture. Out-of-the-box, Copilot Studio struggled to
          interpret these visual elements.
        </p>
        <p>
          The firm needed an AI assistant that could truly <em>see</em> and understand their
          research—not just read it.
        </p>

        <h4>The Approach</h4>
        <p>
          We architected and delivered a custom Retrieval-Augmented Generation (RAG) solution with
          multimodal capabilities.
        </p>

        <p>
          <strong>Multimodal Document Processing Pipeline</strong>
          <br />
          We built a sophisticated ingestion pipeline that processes research documents
          holistically. Text is extracted and chunked for semantic search, while charts, graphs, and
          visualizations are processed through computer vision models that generate rich
          descriptions of visual content.
        </p>

        <p>
          <strong>Azure AI Search with Vision-Enhanced Indexing</strong>
          <br />
          All processed content—text chunks and visual descriptions alike—flows into Azure AI
          Search, creating a unified knowledge index that retrieves context from both textual and
          visual sources.
        </p>

        <p>
          <strong>Vision-Capable Language Model Integration</strong>
          <br />
          For response generation, we integrated vision-capable models that can reference and reason
          about visual content. When a user asks about market trends, the assistant draws insights
          from chart analyses, explains visualizations, and synthesizes findings across multiple
          reports.
        </p>

        <p>
          <strong>Seamless Conversational Interface</strong>
          <br />
          The final solution delivers a natural chat experience where users can ask complex
          questions like "What does our Q3 analysis show about emerging market performance?" and
          receive answers incorporating insights from both written analysis and supporting
          visualizations.
        </p>

        <h4>The Impact</h4>

        <table>
          <thead>
            <tr>
              <th>Outcome</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Query Accuracy</td>
              <td>High-fidelity responses incorporating visual data insights</td>
            </tr>
            <tr>
              <td>Time Savings</td>
              <td>Analysts access intelligence in seconds vs. hours</td>
            </tr>
            <tr>
              <td>Knowledge Utilization</td>
              <td>Previously underutilized visual research now discoverable</td>
            </tr>
            <tr>
              <td>Scalability</td>
              <td>Self-service access reduces demand on insights team</td>
            </tr>
            <tr>
              <td>Decision Quality</td>
              <td>Faster, data-informed decisions across the organization</td>
            </tr>
          </tbody>
        </table>

        <blockquote>
          <p>
            The solution unlocked the full value of the firm&apos;s research library—transforming
            static reports into an interactive, queryable intelligence asset.
          </p>
        </blockquote>

        <div className="highlight-box">
          <div className="highlight-box__title">Technology Stack</div>
          <p style={{ marginBottom: 0 }}>
            Custom RAG architecture • Azure AI Search • Vision-capable LLMs • Computer Vision
            document processing • Multimodal embeddings
          </p>
        </div>

        <div className="page-footer">
          <span>Confidential Client</span>
          <span>© 2026 Your Company</span>
        </div>
      </div>
    </div>
  );
}
