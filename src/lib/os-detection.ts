import type { UserOS } from "@/types";

/**
 * Derives the user's operating system from a User-Agent string.
 *
 * Design notes:
 * - Pure function — no side-effects, no `window` access — so it can be safely
 *   used in both server and client contexts.
 * - Detection order matters: "Mac" must be checked before "Win" because some
 *   UA strings contain both substrings on macOS. Linux is tested last.
 */
export function getUserOS(userAgent: string): UserOS {
    const ua = userAgent.toLowerCase();

    if (ua.includes("win")) return "windows";
    if (ua.includes("mac")) return "mac";
    if (ua.includes("linux")) return "linux";

    return "unknown";
}
