"use client";

import { Download } from "lucide-react";

function GitHubIcon({ className }: { className?: string }) {
    return (
        <svg className={className} aria-hidden="true" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.741 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
    );
}

export function HeroSection() {
    return (
        <section className="relative isolate overflow-hidden bg-slate-950 min-h-screen flex items-center">

            {/* ── Rich gradient background ─────────────────────────────────── */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
                {/* Base mesh */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(16,185,129,0.18),transparent)]" />
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_80%,rgba(14,165,233,0.14),transparent)]" />
                {/* Soft blobs */}
                <div className="absolute -left-40 -top-40 h-[42rem] w-[42rem] rounded-full bg-emerald-600/10 blur-[120px]" />
                <div className="absolute -bottom-40 -right-40 h-[42rem] w-[42rem] rounded-full bg-sky-600/10 blur-[120px]" />
                <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/5 blur-3xl" />
                {/* Subtle grid */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage:
                            "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)",
                        backgroundSize: "64px 64px",
                    }}
                />
            </div>

            <div className="mx-auto w-full max-w-5xl px-6 py-24 sm:py-32 lg:py-40 text-center">

                {/* Badge pill */}
                <div className="mb-8 flex justify-center">
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-emerald-400 backdrop-blur-sm ring-1 ring-inset ring-emerald-500/20">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Open Source · MIT License
                    </span>
                </div>

                {/* H1 */}
                <h1 className="mx-auto max-w-3xl text-5xl font-black leading-[1.08] tracking-tighter text-white sm:text-6xl lg:text-7xl">
                    L&apos;ERP{" "}
                    <span className="bg-gradient-to-r from-emerald-400 via-teal-300 to-sky-400 bg-clip-text text-transparent">
                        pensé pour les pharmacies
                    </span>{" "}
                    en RDC.
                </h1>

                {/* Sub-headline */}
                <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-slate-400">
                    Gérez vos stocks, ventes et ordonnances{" "}
                    <span className="text-slate-200 font-medium">sans connexion internet</span>.
                    SQLite local, multi-devise{" "}
                    <strong className="text-slate-200 font-semibold">USD/CDF</strong>,
                    traçabilité{" "}
                    <strong className="text-slate-200 font-semibold">GxP&nbsp;(FEFO)</strong>{" "}
                    et intelligence artificielle{" "}
                    <strong className="text-emerald-400 font-semibold">Maria&nbsp;IA</strong>.
                </p>

                {/* ── Glassmorphism card ────────────────────────────────────── */}
                <div className="mt-12 flex justify-center">
                    <div className="flex flex-col items-center gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-emerald-950/40 backdrop-blur-xl sm:flex-row sm:gap-5 sm:p-8 ring-1 ring-inset ring-white/[0.06]">

                        {/* Primary CTA */}
                        <a
                            href="https://github.com/TaciteWK/MariaSaas/releases/latest"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative inline-flex items-center gap-2.5 overflow-hidden rounded-xl bg-gradient-to-br from-emerald-500 to-emerald-600 px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-white shadow-lg shadow-emerald-600/30 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:translate-y-0"
                        >
                            {/* Shine sweep */}
                            <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-500 group-hover:translate-x-full" aria-hidden="true" />
                            <Download className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5" aria-hidden="true" />
                            Télécharger gratuitement
                        </a>

                        {/* Secondary CTA */}
                        <a
                            href="https://github.com/TaciteWK/MariaSaas"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-bold uppercase tracking-widest text-slate-300 backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-sky-500/40 hover:bg-sky-900/20 hover:text-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 active:translate-y-0"
                        >
                            <GitHubIcon className="h-4 w-4" />
                            Voir sur GitHub
                        </a>
                    </div>
                </div>

                {/* Trust line */}
                <p className="mt-8 text-xs text-slate-600">
                    Gratuit · Open&nbsp;Source · MIT&nbsp;License · Electron&nbsp;(Desktop)
                </p>
            </div>
        </section>
    );
}
