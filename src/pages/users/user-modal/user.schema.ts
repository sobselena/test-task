import { z } from 'zod';

export const userSchema = z.object({
  fullName: z.string(),
  email: z.string(),
  phone: z.string(),
  jobType: z.string(),
});
