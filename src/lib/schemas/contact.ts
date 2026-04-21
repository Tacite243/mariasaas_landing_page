import { z } from "zod";

export const contactSchema = z.object({
    name: z
        .string()
        .min(2, { message: "Le nom doit contenir au moins 2 caractères." }),

    email: z
        .string()
        .email({ message: "Veuillez saisir une adresse e-mail valide." }),

    type: z.enum(["pharmacien", "developpeur"], {
        error: "Veuillez sélectionner un type de profil.",
    }),

    message: z
        .string()
        .min(10, { message: "Le message doit contenir au moins 10 caractères." }),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
