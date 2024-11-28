document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("message", function(event) {
    if (event.source !== window) {
      return;
    }
    if (!/^https?:\/\/(.+\.)?gpt-stuff\.local$/.test(event.origin)) {
      return;
    }
    var message = event.data;
    if (typeof message !== "object" || message === null || message.source !== "my-website") {
      return;
    }
    chrome.runtime.sendMessage({ source: "contentScript", payload: message }, function(response) {
      console.log("Message sent from contentScript.js :", response.response);
    });
    var messageElement = document.getElementById("messageContainer");
    if (messageElement && message && message.message) {
      messageElement.textContent = message.message;
    }
  });
});
