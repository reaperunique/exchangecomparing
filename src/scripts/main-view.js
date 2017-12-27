import {Element as PolymerElement}
    from "../../node_modules/@polymer/polymer/polymer-element.js"

// Added "export" to export the MyApp symbol from the module
export class MainView extends PolymerElement {
  static get is() { return 'main-view'; }

  static get properties() {
    return {
      exchangeType: {
        type: String,
        value: "forex",
        reflectToAttribute: true
      }
    };
  }

  exchangeSelected(event) {
    this.exchangeType = event.target.attributes.name.value;
  }
}
window.customElements.define(MainView.is,MainView);

