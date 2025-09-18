// Google Tag Configuration for Enhanced Conversions
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}

// Initialize Google Analytics
gtag('js', new Date());
gtag('config', 'G-JEDDAH2024KM', {
  page_title: 'صيانة مطابخ الألمنيوم في جدة',
  page_location: window.location.href,
  send_page_view: true
});

// Initialize Google Ads with enhanced conversions
gtag('config', 'AW-17574639487', {
  allow_enhanced_conversions: true,
  send_page_view: true,
  conversion_linker: true
});

// Define conversion actions
const CONVERSION_ACTIONS = {
  PHONE_CALL: 'AW-17574639487/phone_call',
  WHATSAPP_CLICK: 'AW-17574639487/whatsapp_click', 
  FORM_SUBMISSION: 'AW-17574639487/form_submission',
  SERVICE_REQUEST: 'AW-17574639487/service_request'
};

// Enhanced conversion tracking functions
window.trackConversion = function(action, value = 1, currency = 'SAR') {
  gtag('event', 'conversion', {
    send_to: action,
    value: value,
    currency: currency,
    transaction_id: Date.now().toString()
  });
};

// Specific tracking functions
window.trackPhoneCall = function() {
  window.trackConversion(CONVERSION_ACTIONS.PHONE_CALL, 1);
};

window.trackWhatsAppClick = function() {
  window.trackConversion(CONVERSION_ACTIONS.WHATSAPP_CLICK, 1);
};

window.trackFormSubmission = function() {
  window.trackConversion(CONVERSION_ACTIONS.FORM_SUBMISSION, 5);
};

window.trackServiceRequest = function(serviceType) {
  window.trackConversion(CONVERSION_ACTIONS.SERVICE_REQUEST, 10);
  
  // Additional service-specific tracking
  gtag('event', 'service_inquiry', {
    event_category: 'service',
    event_label: serviceType,
    value: 10,
    currency: 'SAR'
  });
};