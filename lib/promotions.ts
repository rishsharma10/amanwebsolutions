/**
 * Promotions and seasonal campaign utilities.
 */

// Diwali 2026 Special Offer valid till November 10, 2026, 23:59:59 IST (UTC+05:30)
export const DIWALI_OFFER_EXPIRY_DATE = new Date('2026-11-10T23:59:59+05:30');

/**
 * Checks if the Diwali 2026 promotional campaign is currently active.
 * Automatically returns false after November 10, 2026.
 */
export function isDiwaliOfferActive(): boolean {
  try {
    const now = new Date();
    return now.getTime() <= DIWALI_OFFER_EXPIRY_DATE.getTime();
  } catch {
    return false;
  }
}

export function getDiwaliOfferExpiryDate(): Date {
  return DIWALI_OFFER_EXPIRY_DATE;
}
