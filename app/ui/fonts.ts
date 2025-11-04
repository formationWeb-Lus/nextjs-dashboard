import { Lusitana } from 'next/font/google';

// Import de la police Lusitana avec différents poids
export const lusitana = Lusitana({
  subsets: ['latin'],      // sous-ensemble latin
  weight: ['400', '700'],  // poids normal et gras
  display: 'swap',         // améliore le rendu
});
