import { z } from "zod";

const LoginSchema = z.object({
  email: z.string().min(5, { message: "Email Adress is Required" }).email(),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

type LoginType = z.infer<typeof LoginSchema>;
export { LoginSchema, type LoginType };
