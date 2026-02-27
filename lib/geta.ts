/**
 * geta.ai CRM integration
 * POST /api/v1/workspace/contacts/submit-contact  — lead capture
 * PUT  /api/v1/workspace/contact-update           — full admissions data
 */

const GETA_HOST =
  "eUllS0ZKdFBUMFUySWFpZjo3ZGFhNWQ0MmIwM2I3NTg1NmViODc3Mzc5OWNiNmNjMDIyZTJjYWYxYjAzZWQ2ZGZlMDMzOGNkNDVmNWM2OGNiMzJlMmIyNmUzMTYyM2Q2YWY3ZjcxMDdmNzhlYWViZDJmNWI4Yzk1NmY5ZTJhZjk1YTVkZWViZjViNTRjODg5Mg==";

const GETA_SUBMIT_URL =
  "https://api-core.geta.ai/api/v1/workspace/contacts/submit-contact";

const GETA_UPDATE_URL =
  "https://api-core.geta.ai/api/v1/workspace/contact-update";

export interface GetaPayload {
  name: string;
  mobile_phone_number: string; // digits only, e.g. "971501234567"
  email: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
}

export interface GetaUpdatePayload {
  name: string;
  mobile_phone_number: string;
  email: string;
  // referral_code?: string;
  // have_you_applied_through_an_agent_?: string;
  program_of_interest?: string;
  which_grade_are_you_currently_in_?: string;
  
}

export interface GetaResult {
  ok: boolean;
  status: number;
  data: unknown;
  error?: string;
}

/**
 * Submit a contact to geta.ai CRM.
 * Always resolves (never throws) — returns ok:false on failure so callers
 * can decide whether to block the UX or continue silently.
 */
export async function submitToGeta(payload: GetaPayload): Promise<GetaResult> {
  const body = JSON.stringify(payload);

  console.group("📤 geta.ai → submit-contact");
  console.log("URL   :", GETA_SUBMIT_URL);
  console.log("Payload:", JSON.parse(body));

  try {
    const res = await fetch(GETA_SUBMIT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "geta-host": GETA_HOST,
      },
      body,
    });

    let data: unknown = null;
    try {
      data = await res.json();
    } catch {
      data = await res.text().catch(() => null);
    }

    if (res.ok) {
      console.log("✅ Success  status:", res.status);
      console.log("   Response:", data);
    } else {
      console.warn("⚠️  Non-2xx   status:", res.status);
      console.warn("   Response:", data);
    }
    console.groupEnd();

    return { ok: res.ok, status: res.status, data };
  } catch (err) {
    const error = err instanceof Error ? err.message : String(err);
    console.error("❌ Network error:", error);
    console.groupEnd();
    return { ok: false, status: 0, data: null, error };
  }
}

/**
 * Update a contact in geta.ai CRM with full admissions data.
 * Uses PUT contact-update endpoint.
 * Always resolves (never throws).
 */
export async function updateContactInGeta(
  payload: GetaUpdatePayload
): Promise<GetaResult> {
  const body = JSON.stringify(payload);

  console.group("📤 geta.ai → contact-update");
  console.log("URL   :", GETA_UPDATE_URL);
  console.log("Payload:", JSON.parse(body));

  try {
    const res = await fetch(GETA_UPDATE_URL, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "geta-host": GETA_HOST,
      },
      body,
    });

    let data: unknown = null;
    try {
      data = await res.json();
    } catch {
      data = await res.text().catch(() => null);
    }

    if (res.ok) {
      console.log("✅ Success  status:", res.status);
      console.log("   Response:", data);
    } else {
      console.warn("⚠️  Non-2xx   status:", res.status);
      console.warn("   Response:", data);
    }
    console.groupEnd();

    return { ok: res.ok, status: res.status, data };
  } catch (err) {
    const error = err instanceof Error ? err.message : String(err);
    console.error("❌ Network error:", error);
    console.groupEnd();
    return { ok: false, status: 0, data: null, error };
  }
}
