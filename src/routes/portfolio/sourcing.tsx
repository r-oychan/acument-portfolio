import { createFileRoute } from "@tanstack/react-router";
import "@/styles/portfolio.css";
import { DownloadCaseStudyLink } from "@/components/DownloadCaseStudyLink";

export const Route = createFileRoute("/portfolio/sourcing")({
  component: SourcingCaseStudy,
});

function SourcingCaseStudy() {
  return (
    <div className="portfolio-page">
      <div className="page">
        <div className="page-header">
          <span className="page-header__logo">Acument Intelligence</span>
          <span className="page-header__title">Case Study</span>
        </div>

        <div className="case-title-section">
          <div className="case-number">Case Study 07</div>
          <div className="case-client">Global Fashion & Lifestyle Brand</div>
          <div className="case-project-title">
            Centralizing Global Sourcing Operations with Intelligent Digital File Management
          </div>
        </div>

        <div className="case-meta">
          <div className="case-meta__item">
            <span className="case-meta__label">Industry</span>
            <span className="case-meta__value">Retail & Luxury Goods</span>
          </div>
          <div className="case-meta__item">
            <span className="case-meta__label">Engagement</span>
            <span className="case-meta__value">Direct Engagement</span>
          </div>
          <div className="case-meta__item">
            <span className="case-meta__label">Focus Areas</span>
            <div className="tags">
              <span className="tag">SharePoint</span>
              <span className="tag">Power Platform</span>
              <span className="tag">Automation</span>
            </div>
          </div>
        </div>

        <h4>The Challenge</h4>
        <p>
          A global fashion and lifestyle brand with sourcing operations spanning APAC, EMEA, and
          North America needed to modernize how its teams manage sourcing documents. Hundreds of
          external factory partners regularly exchanged PDF files—tech packs, compliance
          certificates, shipping documents—through fragmented channels with no standardized naming,
          storage, or retention policies.
        </p>
        <p>
          Internal sourcing teams lacked a unified view of documents across regions. Files were
          scattered across email threads, local drives, and ad-hoc shared folders. Factory
          onboarding was manual, file retrieval was time-consuming, and there was no automated
          mechanism to enforce document retention or generate operational reports.
        </p>

        <h4>The Approach</h4>
        <p>
          We designed and delivered a centralized, region-based digital file storage platform built
          on Microsoft SharePoint Online, Power Pages, and Power Automate—providing structured
          document management with self-service portals for both internal users and external factory
          partners.
        </p>

        <p>
          <strong>SharePoint Site Architecture & Taxonomy</strong>
          <br />
          We reviewed and guided the setup of a hierarchical SharePoint structure with regional
          subsites for APAC, EMEA, and NA. Within each subsite, a four-level folder taxonomy
          organizes documents by merchandise category, product type, factory, and season—ensuring
          every file lands in a predictable, auditable location.
        </p>

        <p>
          <strong>Master Data Configuration</strong>
          <br />
          We configured SharePoint lists to manage reference data including factory profiles, season
          codes, upload records, and retention policies. These master lists serve as the backbone
          for automated folder creation, file routing, and lifecycle management across all regions.
        </p>

        <p>
          <strong>Internal Factory Management Portal</strong>
          <br />
          Using Power Pages, we built an internal portal enabling sourcing users to onboard, modify,
          and remove factory profiles. Each action triggers automated workflows that create the
          corresponding folder structures in SharePoint and maintain factory authentication records
          in Dataverse.
        </p>

        <p>
          <strong>External Factory Upload Portal</strong>
          <br />
          We developed a secure, external-facing portal where factory users authenticate using their
          credentials and upload sourcing documents with required metadata—merchandise organization,
          category, season, style number, and first ex-factory date. The system automatically
          renames files following a standardized convention and routes them to the correct
          SharePoint location.
        </p>

        <p>
          <strong>Automated Workflows</strong>
          <br />
          Power Automate flows handle the heavy lifting: factory folder provisioning, intelligent
          file renaming and routing, monthly upload reporting broken down by merchandise category,
          and retention-based housekeeping that automatically archives and removes expired documents
          based on configurable retention periods.
        </p>

        <p>
          <strong>Regional Reuse Architecture</strong>
          <br />
          The entire solution—portals, workflows, and configurations—was built once targeting the
          APAC subsite and designed for seamless replication across EMEA and NA with minimal
          parameter adjustments, dramatically reducing deployment effort for subsequent regions.
        </p>

        <h4>The Impact</h4>

        <div className="impact-grid">
          <div className="impact-card">
            <div className="impact-card__metric">3 Regions</div>
            <div className="impact-card__label">
              Unified document management across APAC, EMEA & NA
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-card__metric">100% Automated</div>
            <div className="impact-card__label">
              File naming, routing & folder creation with zero manual effort
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-card__metric">Self-Service</div>
            <div className="impact-card__label">
              Factory partners upload documents independently via secure portal
            </div>
          </div>
          <div className="impact-card">
            <div className="impact-card__metric">Build Once, Deploy 3×</div>
            <div className="impact-card__label">
              Reusable architecture across all regional subsites
            </div>
          </div>
        </div>

        <blockquote>
          <p>
            The platform replaced fragmented, email-driven document exchange with a structured,
            automated system—giving sourcing teams instant access to the right files, in the right
            place, with full lifecycle governance.
          </p>
        </blockquote>

        <DownloadCaseStudyLink caseStudyId="sourcing" />

        <div className="page-footer">
          <span>Confidential Client</span>
          <span>© 2026 Acument Intelligence</span>
        </div>
      </div>
    </div>
  );
}
