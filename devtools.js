Promise.all([
    createPanel(),
    getComponents()
]).then(function([panel, components]) {
    panel.onShown.addListener(function onShown(window) {
        panel.onShown.removeListener(onShown);
        window.componentsPanel.setComponents(components);
    });
});

function createPanel() {
    return new Promise(function(resolve) {
        chrome.devtools.panels.create('Components', null, 'panel.html', resolve);
    });
}

function getComponents() {
    return new Promise(function(resolve, reject) {
        chrome.runtime.sendMessage({
            tabId: chrome.devtools.inspectedWindow.tabId
        }, function(response) {
            if (chrome.runtime.lastError) {
                reject(chrome.runtime.lastError);
            } else {
                resolve(response);
            }
        });
    });
}
