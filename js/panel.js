var ComponentsPanel = Marionette.View.extend({
    className: 'components-panel',
    template() {
        return `<div class="components-panel__placeholder">Components</div>
                <div class="components-panel__content"></div>`;
    },
    regions: {
       content: '.components-panel__content'
    },
    ui: {
        placeholder: '.components-panel__placeholder'
    },
    setComponents(components) {
        if (!components.length) {
            return;
        }
        this.getUI('placeholder').hide();
        this.showChildView('content', new Table({
            collection: new ComponentsCollection(components)
        }));
    }
});

var componentsPanel = new ComponentsPanel();
componentsPanel.render().$el.appendTo(document.body);
