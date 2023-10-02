var recorder = null;

function onAccessApproved(stream) {
  recorder = new MediaRecorder(stream);

  recorder.start();

  recorder.onstop = function () {
    stream.getTracks().forEach(function (track) {
      if (track.readyState === "live") {
        track.stop();
      }
    });

    // Redirect to another page after stopping the recording
    window.location.href = "redirect-page.html";
  };

  recorder.ondataavailable = function (event) {
    let recordedBlob = event.data;

    let date = new Date();
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let time = date.getTime();

    let title = `Untitled_Video_${year}${month}${day}${time}.webm`;

    let formData = new FormData();
    formData.append("video", recordedBlob, title);
    formData.append("title", title);

    fetch("https://screen-record-api.onrender.com/api", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (response.status) {
          console.log(response.status);
        } else {
          console.error("Failed to upload video.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === "request_recording") {
    console.log("requesting recording");

    sendResponse(`processed: ${message.action}`);

    navigator.mediaDevices
      .getDisplayMedia({
        audio: true,
        video: {
          width: 1920,
          height: 1080,
        },
      })
      .then((stream) => {
        onAccessApproved(stream);
      });
  }

  if (message.action === "stopvideo") {
    console.log("stopping video");
    sendResponse(`processed: ${message.action}`);
    if (!recorder) return console.log("no recorder");

    recorder.stop();

     const newURL = "https://helpmeout-iota.vercel.app/";
     chrome.tabs.update(tabs[0].id, { url: newURL });
  }
});
