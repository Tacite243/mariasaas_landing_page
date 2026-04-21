"use client";

import { WifiOff, Banknote, ShieldCheck, BrainCircuit } from "lucide-react";

interface Feature {
    title: string;
    description: string;
    icon: React.ElementType;
}

const FEATURES: Feature[] = [
    {
        title: "100% Offline-First",
        description: "Travaillez sans interruption, même sans internet.",
        icon: WifiOff,
    },
    {
        title: "Gestion Multi-devise",
        description: "Taux de change dynamique USD/CDF intégré.",
        icon: Banknote,
    },
    {
        title: "Traçabilité GxP",
        description: "Algorithme FEFO pour une gestion des lots sans erreurs.",
        icon: ShieldCheck,
    },
    {
        title: "Maria Live AI",
        description: "Assistant intelligent pour l'aide à la décision.",
        icon: BrainCircuit,
    },
];

export function FeaturesGrid() {
    return (
        <section id="features" className="py-24 sm:py-32 bg-slate-950">
            <div className="mx-auto max-w-6xl px-6">
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12">
                    {FEATURES.map((feature, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col items-start gap-4 rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30 hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-emerald-900/20"
                        >
                            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-600/10 text-emerald-600 transition-colors group-hover:bg-emerald-600/20">
                                <feature.icon className="h-6 w-6" aria-hidden="true" />
                            </div>
                            <h3 className="text-xl font-bold text-white tracking-tight">
                                {feature.title}
                            </h3>
                            <p className="text-slate-400 leading-relaxed text-sm lg:text-base">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
