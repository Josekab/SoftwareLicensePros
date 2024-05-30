import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class ShopAbout extends PolymerElement {
  static get template() {
    return html`
      <style>
        /* Estilos personalizados para la página Acerca de */
        :host {
          display: block;
          padding: 16px;
        }
      </style>
      <h1>Acerca de</h1>
      <p>Esta es la página de información sobre nuestra empresa y servicios.</p>
      <a href="/">Volver a la página principal</a>
    `;
  }
  static get is() { return 'shop-about'; }
}

customElements.define(ShopAbout.is, ShopAbout);
