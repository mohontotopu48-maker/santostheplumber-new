import { NextRequest, NextResponse } from "next/server";

/**
 * NXLBYLDR / GHL CRM Lead Submission Endpoint
 *
 * This endpoint receives form data from the multi-step popup and:
 * 1. Creates/updates a lead in NXLBYLDR CRM (GHL) via API
 * 2. Triggers an instant SMS to the homeowner from (909) 256-9224
 * 3. Sends an internal notification to the lead specialist
 *
 * Environment variables required (set in .env):
 * - GHL_API_KEY: GoHighLevel / NXLBYLDR API key
 * - GHL_LOCATION_ID: GHL location/sub-account ID
 * - GHL_PIPELINE_ID: Pipeline for inbound plumbing leads
 * - TWILIO_PHONE: (909) 256-9224 — verified caller ID
 *
 * During development, the endpoint returns a 200 with the parsed
 * lead data so the popup flow works end-to-end without CRM creds.
 */

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const firstName = formData.get("firstName") as string;
    const lastName = formData.get("lastName") as string;
    const phone = formData.get("phone") as string;
    const issue = formData.get("issue") as string;

    // ── Collect all photo files (photo_0, photo_1, photo_2, …) ──
    const photos: File[] = [];
    let i = 0;
    while (true) {
      const photo = formData.get(`photo_${i}`) as File | null;
      if (!photo) break;
      photos.push(photo);
      i++;
    }

    // ── Basic validation ──
    if (!firstName?.trim() || !lastName?.trim() || !phone?.trim()) {
      return NextResponse.json(
        { error: "First name, last name, and phone are required." },
        { status: 400 }
      );
    }

    // ── Build CRM payload ──
    const leadData = {
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      phone: phone.trim(),
      issue: issue?.trim() || "",
      photoCount: photos.length,
      photoNames: photos.map((p) => p.name),
      source: "santos-plumbing-website",
      tags: ["website-lead", "multi-step-form"],
    };

    // ── NXLBYLDR CRM (GHL) Integration ──
    const ghlApiKey = process.env.GHL_API_KEY;
    const ghlLocationId = process.env.GHL_LOCATION_ID;

    if (ghlApiKey && ghlLocationId) {
      // 1. Create or update contact in GHL
      const contactRes = await fetch(
        "https://services.leadconnectorhq.com/contacts/",
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${ghlApiKey}`,
            "Content-Type": "application/json",
            Version: "2021-07-28",
          },
          body: JSON.stringify({
            locationId: ghlLocationId,
            firstName: leadData.firstName,
            lastName: leadData.lastName,
            phone: leadData.phone,
            tags: leadData.tags,
            source: leadData.source,
            customFields: [
              { id: "issue_description", value: leadData.issue },
            ],
          }),
        }
      );

      if (contactRes.ok) {
        const contactData = await contactRes.json();
        const contactId = contactData.contact?.id;

        // 2. Trigger instant SMS to the homeowner
        await fetch(
          "https://services.leadconnectorhq.com/conversations/messages",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${ghlApiKey}`,
              "Content-Type": "application/json",
              Version: "2021-07-28",
            },
            body: JSON.stringify({
              locationId: ghlLocationId,
              contactId,
              type: 1, // SMS
              message: `Hi ${leadData.firstName}, I've got your info${leadData.photoCount > 0 ? ` and ${leadData.photoCount} photo${leadData.photoCount > 1 ? "s" : ""}` : ""}. I'll text you back a preliminary estimate in just a few minutes! - Santos`,
            }),
          }
        );

        // 3. Internal notification to lead specialist
        await fetch(
          "https://services.leadconnectorhq.com/conversations/messages",
          {
            method: "POST",
            headers: {
              Authorization: `Bearer ${ghlApiKey}`,
              "Content-Type": "application/json",
              Version: "2021-07-28",
            },
            body: JSON.stringify({
              locationId: ghlLocationId,
              contactId,
              type: 1,
              message: `NEW LEAD: ${leadData.firstName} ${leadData.lastName} — ${leadData.issue || "No issue description"}${leadData.photoCount > 0 ? ` [${leadData.photoCount} PHOTO${leadData.photoCount > 1 ? "S" : ""} ATTACHED]` : " [No photo]"} — Call/text: ${leadData.phone}`,
              assignTo: process.env.GHL_LEAD_SPECIALIST_ID || undefined,
            }),
          }
        );

        // 4. Upload photos to contact if provided
        if (photos.length > 0 && contactId) {
          // Photo upload requires multipart — log the reference for now
          // In production, use GHL file upload endpoint with the contact's ID
          photos.forEach((photo, idx) => {
            console.log(
              `[CRM] Photo ${idx + 1} received for contact ${contactId}: ${photo.name} (${(photo.size / 1024).toFixed(1)}KB)`
            );
          });
        }
      } else {
        console.error(
          "[CRM] Contact creation failed:",
          contactRes.status,
          await contactRes.text()
        );
      }
    } else {
      // Dev mode — log lead data to console
      console.log("[DEV] Lead received (CRM not configured):", leadData);
    }

    return NextResponse.json({
      success: true,
      message: "Lead captured successfully.",
      data: leadData,
    });
  } catch (error) {
    console.error("[CRM] Lead submission error:", error);
    return NextResponse.json(
      { error: "Failed to process lead." },
      { status: 500 }
    );
  }
}
