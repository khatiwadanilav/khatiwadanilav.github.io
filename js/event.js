window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments); 
}
gtag('js', new Date());

gtag('config', 'G-NH0N0MRJNX');

gtag('event', 'custom_event_for_event_1', {
    'custom_event_attribute_1': 'first custom attribute for event',
    'custom_event_attribute_2': 'second custom attribute for event',
    'custom_event_attribute_3': 'third custom attribute for event'
  });