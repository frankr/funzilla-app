export type ActivityStatusFilter = "all" | "ready" | "needs_review" | "attention";

export type ActivityListItem = {
  externalId: string;
  name: string;
  location: string | null;
  websiteUrl: string | null;
  heroImageUrl: string | null;
  category: string;
  status: "active" | "inactive";
  approvedImageCount: number;
  hasFullImageSet: boolean;
  readyForLive: boolean;
  openIssueCount: number;
  hasLocationQualityIssue: boolean;
  belowRecommendedImages: boolean;
  needsAttention: boolean;
};

export type ActivitiesResponse = {
  page: number;
  pageSize: number;
  total: number;
  items: ActivityListItem[];
};

export type ActivityDetailImage = {
  rankOrder: number;
  status: "pending" | "ready" | "rejected";
  publicUrl: string | null;
  sourceFilename: string | null;
  reviewClassification: string | null;
  altText: string | null;
  approvedAt: string | null;
};

export type ActivityDetailIssue = {
  fieldName: string;
  issueCode: string;
  issueMessage: string;
};

export type ActivityDetail = {
  externalId: string;
  name: string;
  description: string | null;
  websiteUrl: string | null;
  status: "active" | "inactive";
  hoursRaw: string | null;
  email: string | null;
  phoneRaw: string | null;
  phoneNormalized: string | null;
  locationType: string | null;
  primaryLocation: string | null;
  indoorOutdoor: "indoor" | "outdoor" | "both" | null;
  goodForParties: boolean | null;
  seasonal: boolean | null;
  petFriendly: boolean | null;
  parkingAvailable: boolean | null;
  priceLevel: number | null;
  approvedImageCount: number;
  hasFullImageSet: boolean;
  readyForLive: boolean;
  ageGroups: string[];
  activityTypes: string[];
  images: ActivityDetailImage[];
  openIssues: ActivityDetailIssue[];
};

type FetchActivitiesParams = {
  city?: string;
  page?: number;
  pageSize?: number;
  search?: string;
  status?: ActivityStatusFilter;
};

const DEFAULT_CITY = "HOU";
const DEFAULT_BASE_URL = "http://localhost:5173";

function normalizeBaseUrl(rawValue: string | undefined): string {
  const value = (rawValue ?? "").trim();
  if (!value) {
    return DEFAULT_BASE_URL;
  }
  return value.replace(/\/+$/, "");
}

function getApiBaseUrl(): string {
  return normalizeBaseUrl(process.env.EXPO_PUBLIC_API_BASE_URL);
}

async function readJson<T>(url: string): Promise<T> {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }
  return (await response.json()) as T;
}

export async function fetchActivities(params: FetchActivitiesParams = {}): Promise<ActivitiesResponse> {
  const query = new URLSearchParams({
    city: params.city ?? DEFAULT_CITY,
    page: String(params.page ?? 1),
    pageSize: String(params.pageSize ?? 25),
    search: params.search ?? "",
    status: params.status ?? "all",
  });

  const baseUrl = getApiBaseUrl();
  return readJson<ActivitiesResponse>(`${baseUrl}/api/activities?${query.toString()}`);
}

export async function fetchActivityDetail(externalId: string, city = DEFAULT_CITY): Promise<ActivityDetail> {
  const baseUrl = getApiBaseUrl();
  const safeId = encodeURIComponent(externalId);
  const safeCity = encodeURIComponent(city);
  return readJson<ActivityDetail>(`${baseUrl}/api/activities/${safeId}?city=${safeCity}`);
}
