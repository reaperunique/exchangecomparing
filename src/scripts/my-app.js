import {Element as PolymerElement}
    from "../../node_modules/@polymer/polymer/polymer-element.js"

// Added "export" to export the MyApp symbol from the module
export class MyApp extends PolymerElement {
      static get is() { return 'my-app'; }

      static get properties() {
        return {
          page: {
            type: String,
            reflectToAttribute: true,
            observer: '_pageChanged',
          },
          routeData: Object,
          subroute: String,
          rootPath: String
        };
      }

      static get observers() {
        return [
          '_routePageChanged(routeData.page)',
        ];
      }

      _routePageChanged(page) {
        // If no page was found in the route data, page will be an empty string.
        // Default to 'main-view' in that case.
        this.page = page || 'main-view';
      }

      _pageChanged(page) {
        console.log(page);
        // Load page import on demand. Show 404 page if fails
        var resolvedPageUrl = this.resolveUrl(page + '.html');
        console.log(resolvedPageUrl);
        Polymer.importHref(
            resolvedPageUrl,
            null,
            this._showPage404.bind(this),
            true);
      }

      _showPage404() {
        this.page = 'view404';
      }
    }
    window.customElements.define(MyApp.is, MyApp);