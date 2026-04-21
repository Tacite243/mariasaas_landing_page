"use client";

import { useState } from "react";
import Link from "next/link";
import { Plus, Menu, X, ExternalLink } from "lucide-react";

// ---------------------------------------------------------------------------
// Nav link data
// ---------------------------------------------------------------------------

interface NavLink {
    label: string;
    href: string;
}

const NAV_LINKS: NavLink[] = [
    { label: "Fonctionnalités", href: "#features" },
    { label: "Téléchargements", href: "#downloads" },
    { label: "Communauté", href: "#community" },
];

// ---------------------------------------------------------------------------
// Navbar
// ---------------------------------------------------------------------------

export function Navbar() {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <header className="sticky top-0 z-50 w-full border-b border-white/8 bg-slate-950/70 backdrop-blur-md">
            <nav
                className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3"
                aria-label="Navigation principale"
            >
                {/* ── Logo ───────────────────────────────────────────────── */}
                <Link
                    href="/"
                    className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-lg"
                    aria-label="MariaSaaS — accueil"
                >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-600 shadow-lg shadow-emerald-600/30">
                        <Plus className="h-5 w-5 text-white" strokeWidth={3} aria-hidden="true" />
                    </span>
                    <span className="text-lg font-black tracking-tight">
                        <span className="text-white">Maria</span>
                        <span className="text-emerald-400">SaaS</span>
                    </span>
                </Link>

                {/* ── Desktop nav links ───────────────────────────────────── */}
                <ul className="hidden md:flex items-center gap-1" role="list">
                    {NAV_LINKS.map(({ label, href }) => (
                        <li key={href}>
                            <a
                                href={href}
                                className="rounded-lg px-3.5 py-2 text-sm font-medium text-slate-400 transition-colors duration-150 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                            >
                                {label}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* ── Right side ─────────────────────────────────────────── */}
                <div className="flex items-center gap-3">
                    {/* CTA — desktop */}
                    <a
                        href="https://github.com/TaciteWK/MariaSaas"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden md:inline-flex items-center gap-1.5 rounded-xl bg-sky-600 px-4 py-2 text-sm font-bold text-white shadow-md shadow-sky-700/30 transition-all duration-150 hover:-translate-y-px hover:bg-sky-500 hover:shadow-lg hover:shadow-sky-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:translate-y-0"
                    >
                        <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                        Contribuer
                    </a>

                    {/* Burger — mobile */}
                    <button
                        type="button"
                        onClick={() => setOpen((prev) => !prev)}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
                        className="flex md:hidden items-center justify-center rounded-lg p-2 text-slate-400 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                    >
                        {open ? (
                            <X className="h-5 w-5" aria-hidden="true" />
                        ) : (
                            <Menu className="h-5 w-5" aria-hidden="true" />
                        )}
                    </button>
                </div>
            </nav>

            {/* ── Mobile menu ────────────────────────────────────────────── */}
            {open && (
                <div
                    id="mobile-menu"
                    className="md:hidden border-t border-white/8 bg-slate-950/90 backdrop-blur-md px-6 pb-5 pt-3"
                >
                    <ul className="flex flex-col gap-1" role="list">
                        {NAV_LINKS.map(({ label, href }) => (
                            <li key={href}>
                                <a
                                    href={href}
                                    onClick={() => setOpen(false)}
                                    className="block rounded-lg px-3 py-2.5 text-sm font-medium text-slate-300 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-4 border-t border-white/8 pt-4">
                        <a
                            href="https://github.com/TaciteWK/MariaSaas"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-2 rounded-xl bg-sky-600 px-4 py-2.5 text-sm font-bold text-white shadow-md shadow-sky-700/30 transition-all hover:bg-sky-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                        >
                            <ExternalLink className="h-4 w-4" aria-hidden="true" />
                            Contribuer sur GitHub
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
