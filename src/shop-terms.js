import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class ShopTerms extends PolymerElement {
  static get template() {
    return html`
      <style>
        /* Estilos personalizados para la página Términos y Condiciones */
        :host {
          display: block;
          padding: 16px;
        }
      </style>
      <h1>Términos y Condiciones</h1>
      <p>Estos son los términos y condiciones de uso de nuestro sitio web y servicios.</p>
      <a href="/">Volver a la página principal</a>
    `;
  }
  static get is() { return 'shop-terms'; }
}

customElements.define(ShopTerms.is, ShopTerms);
