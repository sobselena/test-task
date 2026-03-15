import { z } from 'zod';

export const userSchema = z.object({
  fullName: z.string(),
  email: z.string().email('Не соответствует формату почты'),
  phone: z.string().regex(/^\+?[\d\s()-.x]{7,20}$/, 'Некорректный номер телефона'),
  jobType: z.string(),
});
