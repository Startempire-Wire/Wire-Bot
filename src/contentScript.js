document.addEventListener('DOMContentLoaded', function() {
  window.addEventListener('message', function(event) {

    // Only accept messages from the same frame
    if (event.source !== window) {
      return;
    }

    // Check the origin of the message
    if (!/^https?:\/\/(.+\.)?gpt-stuff\.local$/.test(event.origin)) {
      return;
    }

    var message = event.data;

    // Only accept messages that we sent to ourselves
    if (typeof message !== 'object' || message === null || message.source !== 'my-website') {
      return;
    }

    // Send the message to the extension
    chrome.runtime.sendMessage({source: 'contentScript', payload: message}, function(response) {
      console.log('Message sent from contentScript.js :', response.response);
    });

    // Output the message to the side panel
    var messageElement = document.getElementById('messageContainer');
    if (messageElement && message && message.message) {
      messageElement.textContent = message.message;
    }


  });
});
