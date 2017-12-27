import {Element as PolymerElement}
from "../../bower_components/polymer/polymer-element.html"

// Added "export" to export the MyApp symbol from the module
export class MyView404 extends PolymerElement {
  static get is() { return 'my-view404'; }
  static get properties() {
    return {
      // This shouldn't be neccessary, but the Analyzer isn't picking up
      // Polymer.Element#rootPath
      rootPath: String,
    };
  }
}
window.customElements.define(MyView404.is, MyView404);