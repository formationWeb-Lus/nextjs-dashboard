'use server';

import { signIn } from '@/auth';
import { AuthError } from 'next-auth';

/* --------------------------- AUTHENTICATION --------------------------- */

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn('credentials', formData);
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return 'Invalid credentials.';
        default:
          return 'Something went wrong.';
      }
    }
    throw error;
  }
}

/* --------------------------- CREATE INVOICE --------------------------- */

export async function createInvoice(formData: FormData) {
  const customerId = formData.get('customerId');
  const amount = formData.get('amount');
  const status = formData.get('status');

  // TODO: Ajouter l'insertion en DB ici si tu veux
  console.log("Invoice submitted:", { customerId, amount, status });

  // Optionnel : redirection après succès
  // revalidatePath('/dashboard/invoices');
  // redirect('/dashboard/invoices');
}
