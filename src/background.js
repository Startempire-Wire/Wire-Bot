'use strict';

// With background scripts you can communicate with sidepanel
// and contentScript files.
// For more information on background script,
// See https://developer.chrome.com/extensions/background_pages

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'GREETINGS') {
    const message =
      "Hi Syd, my name is Bac. I am from Background. It's great to hear from you.";

    // Log message coming from the `request` parameter
    console.log(request.payload.message);
    // Send a response message
    sendResponse({
      message,
    });
  }
});

// Check if the sidePanel API is available
if (chrome && chrome.sidePanel) {
  // Try to set the panel behavior
  chrome.sidePanel.setPanelBehavior({ openPanelOnActionClick: true })
    .catch(e => {
      // Log any errors
      console.error(e);
    });
}
