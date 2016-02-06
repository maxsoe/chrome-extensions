/* globals chrome */

console.log("Hello for OOP with persistent data. This is background.js");

var background = {
  init: function() {
    chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
      console.log("message received", request);
    })
  }
};

// Start it up
background.init();
