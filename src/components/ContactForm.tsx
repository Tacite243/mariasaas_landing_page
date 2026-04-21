"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle2 } from "lucide-react";
import { contactSchema, type ContactFormValues } from "@/lib/schemas/contact";

export function ContactForm() {
    const [isSuccess, setIsSuccess] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<ContactFormValues>({
        resolver: zodResolver(contactSchema),
    });

    const onSubmit = async (data: ContactFormValues) => {
        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1000));
        console.log("Form submitted:", data);
        setIsSuccess(true);
        reset();
    };

    if (isSuccess) {
        return (
            <div className="flex flex-col items-center justify-center space-y-4 rounded-[2rem] border border-emerald-500/20 bg-emerald-500/5 p-12 text-center backdrop-blur-sm">
                <div className="rounded-full bg-emerald-500/20 p-3">
                    <CheckCircle2 className="h-12 w-12 text-emerald-500" />
                </div>
                <h3 className="text-2xl font-bold text-white">Merci !</h3>
                <p className="text-slate-400">Nous vous recontacterons très prochainement.</p>
                <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-4 text-sm font-semibold text-emerald-500 hover:text-emerald-400 transition-colors"
                >
                    Envoyer un autre message
                </button>
            </div>
        );
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 gap-6 rounded-[2rem] border border-white/5 bg-white/[0.02] p-8 shadow-2xl backdrop-blur-sm sm:p-12"
        >
            <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-slate-300">
                    Nom complet
                </label>
                <input
                    {...register("name")}
                    id="name"
                    placeholder="Jean Dupont"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-slate-600 transition-all focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
                {errors.name && (
                    <p className="text-xs font-medium text-red-500">{errors.name.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-slate-300">
                    Email
                </label>
                <input
                    {...register("email")}
                    id="email"
                    type="email"
                    placeholder="contact@exemple.com"
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-slate-600 transition-all focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                />
                {errors.email && (
                    <p className="text-xs font-medium text-red-500">{errors.email.message}</p>
                )}
            </div>

            <div className="space-y-2">
                <label htmlFor="type" className="text-sm font-medium text-slate-300">
                    Vous êtes...
                </label>
                <select
                    {...register("type")}
                    id="type"
                    className="w-full appearance-none rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white transition-all focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20"
                >
                    <option value="" disabled selected className="bg-slate-900">
                        Sélectionner un profil
                    </option>
                    <option value="pharmacien" className="bg-slate-900">
                        Pharmacien
                    </option>
                    <option value="developpeur" className="bg-slate-900">
                        Développeur
                    </option>
                </select>
                {errors.type && (
                    <p className="text-xs font-medium text-red-500">Veuillez sélectionner un profil.</p>
                )}
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">
                    Message
                </label>
                <textarea
                    {...register("message")}
                    id="message"
                    rows={4}
                    placeholder="Décrivez votre besoin..."
                    className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3.5 text-white placeholder:text-slate-600 transition-all focus:border-emerald-500/50 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 resize-none"
                />
                {errors.message && (
                    <p className="text-xs font-medium text-red-500">{errors.message.message}</p>
                )}
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-2xl bg-emerald-600 py-4 text-sm font-black uppercase tracking-widest text-white shadow-lg shadow-emerald-600/30 transition-all hover:bg-emerald-500 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:opacity-50"
            >
                {isSubmitting ? (
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                ) : (
                    <>
                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        Envoyer le message
                    </>
                )}
                {/* Shine effect */}
                <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-500 group-hover:translate-x-full" />
            </button>
        </form>
    );
}
