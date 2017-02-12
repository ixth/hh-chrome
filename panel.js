function showComponents(components) {
    document.querySelector('.empty-view').classList.add('hidden');
    document.querySelector('.components-view').appendChild(buildTable(components));
}

function buildTable(components) {
    var keys = Object.keys(components[0]);

    var table = document.createElement('table');
    table.innerHTML = buildHeader(keys) + components.map(buildRow).join('');

    return table;

    function buildHeader(keys) {
        var cells = keys.map(key => `<th>${key}</th>`);
        return `<tr>${cells.join('')}</tr>`;
    }


    function buildRow(component) {
        var cells = keys.map(key => `<td>${component[key]}</td>`);
        return `<tr>${cells.join('')}</tr>`;
    }
}
