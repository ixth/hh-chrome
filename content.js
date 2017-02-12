chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    sendResponse(getComponents());
});

function getComponents() {
    var elements = document.querySelectorAll('script[data-name]');
    return Array.from(elements).map(element => {
        return {
            name: element.dataset.name,
            params: parseParams(element.dataset.params),
            element
        };
    });
}

function parseParams(params) {
    try {
        return JSON.parse(params);
    } catch (e) {
        return `Couldn't get params: "${e.message}"`
    }
}
