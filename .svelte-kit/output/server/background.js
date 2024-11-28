let sidePanelPort = null;
chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name == "sidepanel");
  sidePanelPort = port;
  port.onDisconnect.addListener(function() {
    sidePanelPort = null;
  });
});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.type === "buttonClicked") {
    if (sidePanelPort) {
      sidePanelPort.postMessage({ message: request.message });
    }
  }
});
chrome.runtime.onMessageExternal.addListener(function(request, sender, sendResponse) {
  console.log(sender.url + " sent a message: " + JSON.stringify(request));
  if (sidePanelPort) {
    sidePanelPort.postMessage({ message: request.message });
  }
  sendResponse({ message: request.message });
  return true;
});
