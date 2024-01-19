import { z } from 'zod';

export const SignupSchema = z.object({
  username: z.string().min(1, 'Username is required'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
});

export interface Message {
  status: 'create' | 'update' | 'error'
  message: string
}
