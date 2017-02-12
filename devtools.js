var panelPromise = new Promise(function(resolve) {
    chrome.devtools.panels.create('Components', null, 'panel.html', resolve);
});

panelPromise.then(function(panel) {
    panel.onShown.addListener(function onShown(window) {
        panel.onShown.removeListener(onShown);
        var componentsPromise = new Promise(function(resolve, reject) {
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
        componentsPromise.then(
            function(components) {
                window.showComponents(components);
            },
            function(error) {
                alert(JSON.stringify(error));
            }
        );
    });
});
