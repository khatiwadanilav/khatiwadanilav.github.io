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
  if (userIdFromSession) {
    console.log(`UserId ${userIdFromSession} exists`)
    appendUserId(userIdFromSession)
  }
}

function appendEvents() {
  gtag('event', 'video_played', {
    'video_id': 'id_11234_youtube',
    'video_progress': '50%',
    'video_playback_speed': '1x'
  });

  gtag('event', 'audio_played', {
    'audio_id': 'id_7777_spotify',
    'audio_progress': '90%',
    'audio_playback_speed': '4x',
  });
}

function getEventDataForTable() {
  return [
    { column1: 'video_played', column2: ["video_id", "video_progress", "video_playback_speed"], column3: ["id_11234_youtube", "50%", "1x"] },
    { column1: 'audio_played', column2: ["audio_id", "audio_progress", "audio_playback_speed"], column3: ["id_7777_spotify", "90%", "4x"] }
  ];
}

function processGoogleAnalyticsData() {
  checkAndAppendUserId()
  appendEvents()
  generatePopUpContents("Event")
  generateTable(getEventDataForTable());
  applyAlternateRowColors();

  setTimeout(showPopup, 1100);

}

document.addEventListener("DOMContentLoaded", function () {
  processGoogleAnalyticsData();
  console.log("Processing GA Data completed!!!")
})
