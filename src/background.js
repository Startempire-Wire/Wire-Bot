'use strict';

let sidePanelPort = null;

// Listen for connections from the side panel
chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name == "sidepanel");

  sidePanelPort = port;   // Store the port when a connection is established

  port.onDisconnect.addListener(function() {
    sidePanelPort = null; // Clear the port when the connection is closed
  });

});

// Listen for messages from the content script
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === 'buttonClicked') {
    // The button was clicked, send the message to the side panel
    if (sidePanelPort) {
      sidePanelPort.postMessage({message: request.message});
    }
  }
});

// Listen for messages from the web page
chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
  console.log(sender.url + ' sent a message: ' + JSON.stringify(request));

  // Forward the message to the sidebar
  if (sidePanelPort) {
    sidePanelPort.postMessage({message: request.message});
  }

  sendResponse({message: request.message});
  return true;
});

// Handle extension installation
chrome.runtime.onInstalled.addListener((details) => {
  if (details.reason === 'install') {
    // Initialize extension data
  }
});

// Handle messages from content scripts and popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  // Handle extension messaging
});

