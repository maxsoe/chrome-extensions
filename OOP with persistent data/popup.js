/* globals chrome, document */

var console = chrome.extension.getBackgroundPage().console;

console.log("hello from popup.js");

var app = {
  init: function() {
    // cache some element references
    var $sku = document.getElementById("sku");
    var $skuInput = document.getElementById("useSku");

    // add a click event on the button
    $skuInput.addEventListener("click", function() {
      console.log("button click", $sku.value);

      // Send a message to the background page using a key-value pairs
      chrome.runtime.sendMessage({fn: "setSku", sku: $sku.value});
    })
  }
};

// app start
document.addEventListener("DOMContentLoaded", function() {
  app.init();
});
