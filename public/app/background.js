chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
      return {cancel: true};
    },
    {urls: ["<all_urls>"]},
    ["blocking"]
  );

  chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
      if (request.timerOn === true) {
        sendResponse({message: "hi to you"});
        chrome.webRequest.onBeforeRequest.addListener(
            function(details) {
              return {cancel: true};
            },
            {urls: ["<all_urls>"]},
            ["blocking"]
          );
      }
    });