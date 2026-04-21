import type { z } from "zod";
import type { contactSchema } from "@/lib/schemas/contact";

// ---------------------------------------------------------------------------
// OS Detection
// ---------------------------------------------------------------------------

export type UserOS = "windows" | "mac" | "linux" | "unknown";

// ---------------------------------------------------------------------------
// Contact Form
// ---------------------------------------------------------------------------

/**
 * Inferred from the Zod schema so the type and validations stay in sync
 * automatically — no manual duplication required.
 */
export type ContactFormValues = z.infer<typeof contactSchema>;
