import { z } from "zod"

/* Schemas */

export const draftAuthSchema = z.object({
    FirstName: z.string(),
    LastName: z.string(),
    CompanyName: z.string(),
    Location: z.string(),
    Email: z.string(),
    Password: z.string(),
    PasswordConfirm: z.string(),
    CheckBox: z.boolean()
})

export const authSchema = z.object({
    Id: z.number(),
    FirstName: z.string(),
    LastName: z.string(),
    CompanyName: z.string(),
    Location: z.string(),
    Email: z.string(),
    Password: z.string(),
    PasswordConfirm: z.string(),
    CheckBox: z.boolean()
})

/* Types */

export type UserAuth = z.infer<typeof authSchema>;
export type DraftUserAuth = z.infer<typeof draftAuthSchema>
export type AuthLogin = Pick<UserAuth, 'Email' | 'Password'>