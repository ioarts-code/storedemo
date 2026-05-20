'use client';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { ReactNode } from 'react';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface StripeProviderProps {
  children: ReactNode;
  clientSecret: string;
}

export function StripeProvider({ children, clientSecret }: StripeProviderProps) {
  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {
          theme: 'dark',
          variables: {
            colorPrimary: '#ffffff',
            colorBackground: '#1f2937',
            colorText: '#ffffff',
            colorDanger: '#ef4444',
            borderRadius: '8px',
          },
        },
      }}
    >
      {children}
    </Elements>
  );
}
