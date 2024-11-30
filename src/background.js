'use strict';

// Port management for sidepanel communication
let sidePanelPort = null;

// Initialize storage on installation
chrome.runtime.onInstalled.addListener(async (details) => {
  if (details.reason === 'install') {
    await chrome.storage.local.set({
      preferences: {
        theme: 'light',
        notifications: true
      },
      membershipCache: null,
      authTokens: null
    });
  }
});

// Listen for connections from the side panel
chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name === "sidepanel");
  sidePanelPort = port;

  port.onDisconnect.addListener(function() {
    sidePanelPort = null;
  });
});

// Message handling system
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  switch (request.type) {
    case 'buttonClicked':
      if (sidePanelPort) {
        sidePanelPort.postMessage({message: request.message});
      }
      break;
    case 'auth':
      handleAuthMessage(request, sender, sendResponse);
      break;
    default:
      console.log('Unknown message type:', request.type);
  }
  return true; // Keep message channel open for async responses
});

// Handle external messages (from web pages)
chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
  console.log(`Message from ${sender.url}:`, request);
  
  if (sidePanelPort) {
    sidePanelPort.postMessage({message: request.message});
  }
  
  sendResponse({message: request.message});
  return true;
});

// Auth message handler
async function handleAuthMessage(request, sender, sendResponse) {
  try {
    switch (request.action) {
      case 'login':
        const authResult = await auth.login();
        sendResponse({ success: true, data: authResult });
        break;
      case 'logout':
        await auth.logout();
        sendResponse({ success: true });
        break;
      case 'checkAuth':
        const stored = await chrome.storage.local.get(['auth']);
        sendResponse({ 
          isAuthenticated: stored.auth?.isAuthenticated || false,
          membershipLevel: stored.auth?.membershipLevel || null
        });
        break;
    }
  } catch (error) {
    console.error('Auth handler error:', error);
    sendResponse({ error: error.message });
  }
}

