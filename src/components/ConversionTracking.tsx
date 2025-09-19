import { useEffect } from 'react';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

interface ConversionTrackingProps {
  conversionId?: string;
  conversionLabel?: string;
}

const ConversionTracking = ({ 
  conversionId = 'AW-17574639487', 
  conversionLabel 
}: ConversionTrackingProps) => {
  
  // Track phone call conversions
  const trackPhoneCall = () => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': `${conversionId}/phone_call`,
        'event_category': 'contact',
        'event_label': 'phone_call_conversion',
        'value': 1.0,
        'currency': 'SAR'
      });
    }
  };

  // Track WhatsApp conversions
  const trackWhatsAppClick = () => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': `${conversionId}/whatsapp_click`,
        'event_category': 'contact',
        'event_label': 'whatsapp_conversion',
        'value': 1.0,
        'currency': 'SAR'
      });
    }
  };

  // Track form submissions
  const trackFormSubmission = () => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': `${conversionId}/form_submission`,
        'event_category': 'lead',
        'event_label': 'contact_form_conversion',
        'value': 5.0,
        'currency': 'SAR'
      });
    }
  };

  // Track service requests
  const trackServiceRequest = (serviceType: string) => {
    if (window.gtag) {
      window.gtag('event', 'conversion', {
        'send_to': `${conversionId}/service_request`,
        'event_category': 'service',
        'event_label': serviceType,
        'value': 10.0,
        'currency': 'SAR'
      });
    }
  };

  // Track contact page conversions
  const trackContactConversion = () => {
    if (window.gtag) {
      // Fire the specific event snippet for contact conversion
      window.gtag('event', 'conversion', {
        'send_to': 'AW-17574639487/KH9BCMvsqZ0bEP_unrxB'
      });
    }
  };

  useEffect(() => {
    // Make tracking functions globally available
    (window as any).trackPhoneCall = trackPhoneCall;
    (window as any).trackWhatsAppClick = trackWhatsAppClick;
    (window as any).trackFormSubmission = trackFormSubmission;
    (window as any).trackServiceRequest = trackServiceRequest;
    (window as any).trackContactConversion = trackContactConversion;
  }, []);

  return null; // This component doesn't render anything
};

export default ConversionTracking;
export { ConversionTracking };