'use server';
/*import { db } from '@/app/lib/db';
import {
  FormState,
  SigninFormSchema,
  SignupFormSchema,
} from '@/app/lib/definitions';*
import { saltAndHashPassword } from '@/utils/helper';
*/

import { signIn, signOut } from '@/auth';
import { FormState, SigninFormSchema } from '@/lib/definitions';
import { AuthError } from 'next-auth';
import { revalidatePath } from 'next/cache';

export const login = async (provider: string) => {
  await signIn(provider, { redirectTo: '/' });
  revalidatePath('/');
};

export const logout = async () => {
  await signOut({ redirectTo: '/' });
  revalidatePath('/');
};

export const LoginWithCredentials = async (
  state: FormState,
  formData: FormData,
) => {
  // Validate form fields
  const validatedFields = SigninFormSchema.safeParse({
    email: formData.get('email'),
    password: formData.get('password'),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  try {
    await signIn('credentials', {
      email: formData.get('email'),
      password: formData.get('password'),
      redirectTo: '/',
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Invalid credentials' };
        default:
          return { error: 'Something went wrong' };
      }
    }
    throw error;
  }
  revalidatePath('/');
};
