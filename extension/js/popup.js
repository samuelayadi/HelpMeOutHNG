document.addEventListener("DOMContentLoaded", () => {

  const startVideoButton = document.querySelector("#startvideo");
  const stopVideoButton = document.querySelector("#stopvideo");


  startVideoButton.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs && tabs.length > 0) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { action: "request_recording" },
          function (response) {
            if (!chrome.runtime.lastError) {
              console.log(response);
            } else {
              console.log(chrome.runtime.lastError, "error line 17");
            }
          }
        );
      } else {
        console.log("No active tab found.");
      }
    });
  });

  stopVideoButton.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      if (tabs && tabs.length > 0) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { action: "stopvideo" },
          function (response) {
            if (!chrome.runtime.lastError) {
              console.log(response);
            } else {
              console.log(chrome.runtime.lastError, "error line 33");
            }

          }
        );
      } else {
        console.log("No active tab found.");
      }
    });
  });
});
