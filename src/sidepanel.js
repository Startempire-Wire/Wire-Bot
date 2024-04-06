'use strict';

import './sidepanel.css';

(function () {



  // Establish a connection with the background script
  var port = chrome.runtime.connect({name: "sidepanel"});

  // Listen for messages from the background script
  port.onMessage.addListener(function(msg) {
    if (msg.message) {
      // The message was received, update the messageContainer element
      var messageElement = document.getElementById('messageContainer');
      if (messageElement) {
        messageElement.textContent = msg.message;
      }
    }
  });

  chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.type === 'buttonClicked') {
      // The button was clicked, update the messageContainer element
      var messageElement = document.getElementById('messageContainer');
      if (messageElement) {
        messageElement.textContent = request.message;
      }
    }
  });




})();
