import { createClient } from "@sanity/client";

// Read-only client (CDN, for portal pages)
export const portalClient = createClient({
  projectId: "e2zxlxam",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

// Write client (no CDN, for client data submissions)
export const portalWriteClient = createClient({
  projectId: "e2zxlxam",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
});

// --- Auth queries ---

export async function findClientByAccessCode(accessCode: string) {
  return portalClient.fetch(
    `*[_type == "portalClient" && accessCode == $code && isActive == true][0] {
      _id,
      name,
      slug,
      industry,
      primaryKPI,
      "logoUrl": logo.asset->url
    }`,
    { code: accessCode }
  );
}

// --- Dashboard queries ---

export async function getClientProfile(clientId: string) {
  return portalClient.fetch(
    `*[_type == "portalClient" && _id == $clientId][0] {
      _id,
      name,
      industry,
      primaryKPI,
      "logoUrl": logo.asset->url
    }`,
    { clientId }
  );
}

export async function getClientMetrics(clientId: string, limit = 12) {
  return portalClient.fetch(
    `*[_type == "portalMetric" && client._ref == $clientId] | order(period desc) [0...$limit] {
      _id,
      period,
      source,
      adSpend,
      impressions,
      clicks,
      conversions,
      phoneCalls,
      jobsCompleted,
      costPerCall,
      revenue,
      roas,
      transactions,
      avgOrderValue,
      clientNote
    }`,
    { clientId, limit }
  );
}

// --- Reports queries ---

export async function getClientReports(clientId: string) {
  return portalClient.fetch(
    `*[_type == "portalReport" && client._ref == $clientId] | order(publishedAt desc) {
      _id,
      title,
      period,
      reportType,
      description,
      publishedAt,
      "fileUrl": file.asset->url
    }`,
    { clientId }
  );
}

// --- Write operations (client data entry) ---

export async function createClientMetric(data: {
  clientId: string;
  period: string;
  phoneCalls?: number;
  jobsCompleted?: number;
  clientNote?: string;
}) {
  return portalWriteClient.create({
    _type: "portalMetric",
    client: { _type: "reference", _ref: data.clientId },
    period: data.period,
    source: "client",
    phoneCalls: data.phoneCalls,
    jobsCompleted: data.jobsCompleted,
    clientNote: data.clientNote,
  });
}
