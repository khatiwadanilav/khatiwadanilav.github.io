window.dataLayer = window.dataLayer || [];

function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());

gtag('config', 'G-NH0N0MRJNX');


function appendUserId(user_id) {
  console.log("HERE")
  gtag('set', {
    'user_id': user_id
  });
}


function checkAndAppendUserId() {
  const userIdFromSession = window.sessionStorage.getItem('userId')
  console.log(`userIdFromSession ${userIdFromSession}`)
  if (userIdFromSession) {
    console.log(`UserId ${userIdFromSession} exists`)
    appendUserId(userIdFromSession)
  }
}

function appendConversionEvents() {
  gtag('event', 'payment_completed', {
    'payment_id': 'azn-order-1234',
    'payment_method': 'cash',
    'payment_amount': '5000¥'
  });

  gtag('event', 'order_placed', {
    'order_id': 'rk-order-9999',
    'order_method': 'Credit Card',
    'order_amount': '1599¥'
  });

  gtag('event', 'post_liked', {
    'post_content': 'Article of GA4',
    'post_url': 'https://google.com',
    'post_time': '2024-03-25'
  });
}


function getConversionDataForTable() {
  return [
    { column1: 'payment_completed', column2: ["payment_id", "payment_method", "payment_amount"], column3: ["azn-order-1234", "cash", "5000¥"] },
    { column1: 'order_placed', column2: ["order_id", "order_method", "order_amount"], column3: ["rk-order-9999", "Credit Card", "1599¥"] },
    { column1: 'post_liked', column2: ["post_content", "post_url", "post_time"], column3: ["Article of GA4", "https://google.com", "2024-03-25"] },
  ];
}

function processGoogleAnalyticsData() {
  checkAndAppendUserId()
  appendConversionEvents()

  generatePopUpContents("Conversion")

  generateTable(getConversionDataForTable());
  applyAlternateRowColors();

  setTimeout(showPopup, 1100);
}

document.addEventListener("DOMContentLoaded", function () {
  processGoogleAnalyticsData();
  console.log("Processing GA Data completed!!!")
})

