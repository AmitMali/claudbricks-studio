"use server";

interface AuditScore {
  scores: { performance: number; accessibility: number; seo: number };
  metrics: {
    lcp: string;
    cls: string;
    tbt: string;
    fcp: string;
    speedIndex: string;
  };
  diagnostics: { domSize: string; networkRequests: string };
}

export async function getAuditScore(url: string): Promise<AuditScore> {
  // 1. Force the protocol if it's missing
  let sanitizedUrl = url.trim();
  if (!/^https?:\/\//i.test(sanitizedUrl)) {
    sanitizedUrl = `https://${sanitizedUrl}`;
  }

  const target = encodeURIComponent(sanitizedUrl);
  const apiKey = process.env.PAGESPEED_API_KEY;

  console.log(
    `&ndash;&ndash;&ndash; STARTING_AUDIT: ${sanitizedUrl} &ndash;&ndash;&ndash;`
  );

  const apiURL = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${target}&category=PERFORMANCE&category=ACCESSIBILITY&category=SEO&strategy=desktop${
    apiKey ? `&key=${apiKey}` : ""
  }`;

  try {
    const res = await fetch(apiURL, { next: { revalidate: 60 } });

    if (!res.ok) {
      const errorData = await res.json();
      console.error(
        "GOOGLE_API_REJECTION:",
        JSON.stringify(errorData, null, 2)
      );

      // Give a user-friendly message based on Google's response
      const msg = errorData.error?.message || `Status ${res.status}`;
      throw new Error(msg);
    }

    const data = await res.json();

    if (!data.lighthouseResult) {
      throw new Error("Lighthouse failed to analyze this domain.");
    }

    const audits = data.lighthouseResult.audits;
    const categories = data.lighthouseResult.categories;

    return {
      scores: {
        performance: (categories.performance?.score || 0) * 100,
        accessibility: (categories.accessibility?.score || 0) * 100,
        seo: (categories.seo?.score || 0) * 100,
      },
      metrics: {
        lcp: audits["largest-contentful-paint"]?.displayValue || "0s",
        cls: audits["cumulative-layout-shift"]?.displayValue || "0",
        tbt: audits["total-blocking-time"]?.displayValue || "0ms",
        fcp: audits["first-contentful-paint"]?.displayValue || "0s",
        speedIndex: audits["speed-index"]?.displayValue || "0s",
      },
      diagnostics: {
        domSize: audits["dom-size"]?.displayValue || "0",
        networkRequests: audits["network-requests"]?.displayValue || "0",
      },
    };
  } catch (error: unknown) {
    const rawMessage = error instanceof Error ? error.message : "UNKNOWN_ERROR";
    console.error("AUDIT_ACTION_CRASH:", rawMessage);

    // Human-friendly translation logic
    let friendlyMessage =
      "We couldn&apos;t reach this website. Please check the spelling and try again.";

    if (
      rawMessage.includes("FAILED_DOCUMENT_REQUEST") ||
      rawMessage.includes("ERR_CONNECTION_FAILED")
    ) {
      friendlyMessage =
        "Site Unreachable: This domain doesn&apos;t seem to exist or is blocking our connection. Double-check the URL.";
    } else if (rawMessage.includes("INVALID_ARGUMENT")) {
      friendlyMessage =
        "Invalid URL: Please enter a valid domain name (e.g., example.com).";
    } else if (rawMessage.includes("ER_TIMEOUT")) {
      friendlyMessage =
        "Connection Timeout: The website is taking too long to respond. It might be down.";
    } else if (rawMessage.includes("429")) {
      friendlyMessage =
        "System Congested: We&apos;re processing too many requests. Please wait a minute.";
    }

    throw new Error(friendlyMessage);
  }
}
