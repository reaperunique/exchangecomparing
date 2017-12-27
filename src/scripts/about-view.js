import {Element as PolymerElement}
    from "../../node_modules/@polymer/polymer/polymer-element.js"

// Added "export" to export the MyApp symbol from the module
export class AboutView extends PolymerElement {
  static get is() { return 'about-view'; }
}

window.customElements.define(AboutView.is, AboutView);