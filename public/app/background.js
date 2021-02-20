const defaultFilters = [
	"*://*.facebook.com/*",
	"*://*.twitter.com/*",
	"*://*.linkedin.com/*",
	"*://*.reddit.com/*",
	"*://*.youtube.com/*",
	"*://*.instagram.com/*",
	"*://*.pinterest.com/*",
	"*://web.whatsapp.com/*"
]



chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.timerOn === true) {
    sendResponse({ message: "timer running" });
    chrome.webRequest.onBeforeRequest.addListener(
      function (details) {
        return { cancel: true };
      },
      { urls: [...defaultFilters] },
      ["blocking"]
    );
  }
});
