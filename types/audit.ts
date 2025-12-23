export interface AuditResults {
  scores: {
    performance: number;
    accessibility: number;
    seo: number;
  };
  metrics: {
    lcp: string;
    cls: string;
    tbt: string;
    fcp: string;
    speedIndex: string;
  };
  diagnostics: {
    domSize: string;
    networkRequests: string;
  };
}
