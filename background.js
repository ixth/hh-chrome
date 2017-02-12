chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    var tabId = message.tabId;
    chrome.tabs.executeScript(tabId, { file: 'content.js' }, function() {
        chrome.tabs.sendMessage(tabId, {}, sendResponse);
    });
    return true;
});
