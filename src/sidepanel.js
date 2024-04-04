'use strict';

import './sidepanel.css';

(function () {
  function initList(tabs) {
    const list = document.getElementById('tabs-list');

    const listItem = tabs.map((tab) => {
      return `
      <li>
        <div data-tab-id="${tab.id}" class="tab-container">
          ${
            tab.favIconUrl
              ? `<img src="${tab.favIconUrl}" alt="" class="tab-image" />`
              : '<span class="tab-image tab-image-placeholder">&#x2750;</span>'
          }
          <p class="tab-title" title="${tab.title}">${tab.title}</p>
        </div>
      </li>
      `;
    });

    list.innerHTML = listItem.join('\n');

    list.addEventListener('click', (event) => {
      if (event.target && event.target.closest('.tab-container')) {
        const tabId = event.target
          .closest('.tab-container')
          .getAttribute('data-tab-id');

        chrome.tabs.update(Number(tabId), {
          active: true,
        });
      }
    });
  }


  function setupTabList() {
    if (chrome.tabs) {
      chrome.tabs.query(
        {
          currentWindow: true,
        },
        (tabs) => {
          initList(tabs);
        }
      );

    } else {
      console.log('chrome.tabs is not available');
    }
  }


  function setupTabListeners() {
    if (chrome.tabs) {
      chrome.tabs.onCreated.addListener(setupTabList);
      chrome.tabs.onMoved.addListener(setupTabList);
      chrome.tabs.onRemoved.addListener(setupTabList);
      chrome.tabs.onUpdated.addListener(setupTabList);
    } else {
      console.log('chrome.tabs is not available');
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    setupTabList();
    setupTabListeners();
  });

  // Communicate with background file by sending a message
  if(chrome.runtime) {
    chrome.runtime.sendMessage(
      {
        type: 'GREETINGS',
        payload: {
          message: 'Hello, my name is Syd. I am from SidePanel.',
        },
      },
      (response) => {
        console.log(response.message);
      }
    );
  } else {
    console.log('chrome.runtime is not available');
  }

// Chrome extension script
window.addEventListener('message', function(event) {
  // Only accept messages from the same frame
  if (event.source !== window) {
    return;
  }

  // Check the origin of the message
  if (event.origin !== 'http://gpt-stuff.local' && event.origin !== 'https://gpt-stuff.local') {
    return;
  }

  var message = event.data;

  // Only accept messages that we sent to ourselves
  if (typeof message !== 'object' || message === null || message.source !== 'my-website') {
    return;
  }

  // Output the message to the side panel
  var messageElement = document.getElementById('message');
  if (messageElement) {
    messageElement.textContent = message.message;
  }

  console.log('Received message:', message.message);
});


})();
