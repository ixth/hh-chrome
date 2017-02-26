var TableHead = Marionette.View.extend({
    tagName: 'thead',
    template(data) {
        return '<tr>' + _.keys(data).map(key => `<th>${key}</th>`).join('') + '</tr>';
    }
});

var BodyRow = Marionette.View.extend({
    tagName: 'tr',
    template(data) {
        return _.map(data, value => `<td>${value}</td>`).join('');
    }
});

var TableBody = Marionette.CollectionView.extend({
    tagName: 'tbody',
    childView: BodyRow
});

var Table = Marionette.View.extend({
    tagName: 'table',
    template() {
        return `
            <thead/>
            <tbody/>`;
    },
    regions: {
        head: {
            el: 'thead',
            replaceElement: true
        },
        body: {
            el: 'tbody',
            replaceElement: true
        }
    },
    initialize({ collection }) {
        this.collection = collection;
    },
    onRender() {
        this.showChildView('head', new TableHead({ model: this.collection.at(0) }));
        this.showChildView('body', new TableBody({ collection: this.collection }));
    }
});
