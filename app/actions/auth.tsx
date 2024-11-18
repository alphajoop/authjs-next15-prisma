'use server';
/*import { db } from '@/app/lib/db';
import {
  FormState,
  SigninFormSchema,
  SignupFormSchema,
} from '@/app/lib/definitions';*
import { saltAndHashPassword } from '@/utils/helper';
import { AuthError } from 'next-auth';
*/

import { signIn, signOut } from '@/auth';
import { revalidatePath } from 'next/cache';

export const login = async (provider: string) => {
  await signIn(provider, { redirectTo: '/' });
  revalidatePath('/');
};

export const logout = async () => {
  await signOut({ redirectTo: '/' });
  revalidatePath('/');
};
