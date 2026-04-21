"use client";

import { Monitor, Apple, Terminal, Download } from "lucide-react";

interface OSBlock {
    name: string;
    extension: string;
    icon: React.ElementType;
}

const OS_PLATFORMS: OSBlock[] = [
    { name: "Windows", extension: ".exe", icon: Monitor },
    { name: "macOS", extension: ".dmg", icon: Apple },
    { name: "Linux", extension: ".deb / .AppImage", icon: Terminal },
];

export function DownloadSection() {
    return (
        <section id="downloads" className="py-24 sm:py-32 bg-slate-900/50">
            <div className="mx-auto max-w-6xl px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
                        Disponible sur toutes les plateformes
                    </h2>
                    <p className="mt-4 text-slate-400">
                        Téléchargez la version native pour votre système d&apos;exploitation.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                    {OS_PLATFORMS.map((os, index) => (
                        <div
                            key={index}
                            className="flex flex-col items-center justify-between gap-8 rounded-[2rem] border border-white/5 bg-slate-950/40 p-10 text-center shadow-xl backdrop-blur-sm ring-1 ring-inset ring-white/[0.04]"
                        >
                            <div className="flex flex-col items-center gap-4">
                                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5 text-slate-300">
                                    <os.icon className="h-8 w-8" aria-hidden="true" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-white">{os.name}</h3>
                                    <p className="mt-1 text-sm text-slate-500 font-mono">
                                        {os.extension}
                                    </p>
                                </div>
                            </div>

                            <button
                                type="button"
                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-600 px-6 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5 hover:bg-emerald-500 hover:shadow-emerald-500/30 active:translate-y-0"
                            >
                                <Download className="h-4 w-4" aria-hidden="true" />
                                Télécharger
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
