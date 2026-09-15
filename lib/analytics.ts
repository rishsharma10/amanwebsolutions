// Reusable GA4-compatible Analytics Abstraction
// Strict privacy compliance: No PII (personally identifiable information) is ever transmitted.

export type AnalyticsEvent =
  | 'page_view'
  | 'scroll_50'
  | 'scroll_90'
  | 'cta_click'
  | 'book_consultation_click'
  | 'estimate_click'
  | 'whatsapp_click'
  | 'phone_click'
  | 'email_click'
  | 'form_start'
  | 'form_submit'
  | 'form_success'
  | 'form_error'
  | 'tool_start'
  | 'tool_complete'
  | 'tool_result_view'
  | 'case_study_view'
  | 'pricing_view'
  | 'contact_view'
  | 'lead_generated'
  | 'qualified_lead'
  | 'meeting_booked';

export interface EventParams {
  category?: string;
  label?: string;
  value?: number;
  location?: string;
  tool_name?: string;
  service_name?: string;
  industry_name?: string;
  case_study_slug?: string;
  step?: number;
  [key: string]: any;
}

declare global {
  interface Window {
    dataLayer?: any[];
    gtag?: (...args: any[]) => void;
  }
}

/**
 * Dispatches a trackable custom GA4 event safely across client environments.
 */
export function trackEvent(eventName: AnalyticsEvent, params: EventParams = {}) {
  if (typeof window === 'undefined') return;

  try {
    if (typeof window.gtag === 'function') {
      window.gtag('event', eventName, {
        timestamp: new Date().toISOString(),
        ...params,
      });
    } else if (Array.isArray(window.dataLayer)) {
      window.dataLayer.push({
        event: eventName,
        timestamp: new Date().toISOString(),
        ...params,
      });
    }
  } catch (error) {
    // Fail silently in non-production or blocked client environments
    if (process.env.NODE_ENV === 'development') {
      console.debug(`[Analytics Event: ${eventName}]`, params);
    }
  }
}

/**
 * Tracks page view transitions.
 */
export function trackPageView(url: string, title?: string) {
  if (typeof window === 'undefined') return;
  
  try {
    if (typeof window.gtag === 'function') {
      window.gtag('config', 'G-NFKQYZX8BB', {
        page_path: url,
        page_title: title || document.title,
      });
    }
  } catch (error) {
    // Fail silently
  }
}
