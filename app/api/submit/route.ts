import { NextRequest, NextResponse } from "next/server";
import { applicationSchema } from "@/lib/validators";

/**
 * POST /api/submit
 *
 * Mock form submission endpoint.
 * Validates the payload against the Zod schema, logs it server-side,
 * and returns a success response.
 *
 * In production, replace this with real CRM / database integration.
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Validate with Zod (strip extras, coerce types)
    const parsed = applicationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: parsed.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    // ── In production, integrate with CRM / DB here ─────────────────────────
    // Example: await crm.createLead({ ...data });
    // For now, log to server console (visible in `npm run dev`)
    console.log("[/api/submit] New application received:", {
      name: data.fullName,
      email: data.email,
      program: data.program,
      timestamp: new Date().toISOString(),
    });

    // Simulate a small processing delay (remove in production)
    await new Promise((resolve) => setTimeout(resolve, 400));

    return NextResponse.json(
      {
        success: true,
        message: "Application submitted successfully",
        applicationId: `SIU-${Date.now()}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("[/api/submit] Unexpected error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}

/** Only allow POST */
export async function GET() {
  return NextResponse.json({ message: "Method not allowed" }, { status: 405 });
}
