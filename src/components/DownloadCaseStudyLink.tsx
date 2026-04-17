import { portfolioPdfPath } from "@/portfolioData";

interface DownloadCaseStudyLinkProps {
  caseStudyId: string;
  label?: string;
}

export function DownloadCaseStudyLink({
  caseStudyId,
  label = "Download case study (PDF)",
}: DownloadCaseStudyLinkProps) {
  return (
    <div style={{ marginTop: "48px" }} data-no-print>
      <a
        href={portfolioPdfPath(caseStudyId)}
        download={`portfolio-${caseStudyId}.pdf`}
        className="download-btn"
      >
        <span>{label}</span>
        <span className="download-btn__icon" aria-hidden="true">
          ↓
        </span>
      </a>
    </div>
  );
}
