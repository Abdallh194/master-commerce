import { z } from "zod";

const SigupSchema = z.object({
  email: z.string().min(5, { message: "Email Adress is Required" }).email(),
  name: z.string().min(3, { message: "Name is Required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});

type SignupType = z.infer<typeof SigupSchema>;
export { SigupSchema, type SignupType };
