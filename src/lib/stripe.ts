import { brand } from '../content/siteCopy';

export function getStripeUrl(): string {
  const origin = typeof window !== 'undefined' ? window.location.origin : brand.url;
  return `${brand.stripeLink}?success_url=${encodeURIComponent(`${origin}/thank-you`)}`;
}
