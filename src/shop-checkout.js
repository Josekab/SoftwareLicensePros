import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-route.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js';
import './shop-button.js';
import './shop-common-styles.js';
import './shop-form-styles.js';
import './shop-input.js';
import './shop-select.js';
import './shop-checkbox.js';
import { Debouncer } from '@polymer/polymer/lib/utils/debounce.js';
import { timeOut } from '@polymer/polymer/lib/utils/async.js';

class ShopCheckout extends PolymerElement {
  static get template() {
    return html`
    <style include="shop-common-styles shop-button shop-form-styles shop-input shop-select shop-checkbox">

      .main-frame {
        transition: opacity 0.5s;
      }

      :host([waiting]) .main-frame {
        opacity: 0.1;
      }

      shop-input, shop-select {
        font-size: 16px;
      }

      shop-select {
        margin-bottom: 20px;
      }

      paper-spinner-lite {
        position: fixed;
        top: calc(50% - 14px);
        left: calc(50% - 14px);
      }

      .billing-address-picker {
        margin: 28px 0;
        height: 20px;
        @apply --layout-horizontal;
      }

      .billing-address-picker > label {
        margin-left: 12px;
      }

      .grid {
        margin-top: 40px;
        @apply --layout-horizontal;
      }

      .grid > section {
        @apply --layout-flex;
      }

      .grid > section:not(:first-child) {
        margin-left: 80px;
      }

      .row {
        @apply --layout-horizontal;
        @apply --layout-end;
      }

      .column {
        @apply --layout-vertical;
      }

      .row > .flex,
      .input-row > * {
        @apply --layout-flex;
      }

      .input-row > *:not(:first-child) {
        margin-left: 8px;
      }

      .shop-select-label {
        line-height: 20px;
      }

      .order-summary-row {
        line-height: 24px;
      }

      .total-row {
        font-weight: 500;
        margin: 30px 0;
      }

      @media (max-width: 767px) {

        .grid {
          display: block;
          margin-top: 0;
        }

        .grid > section:not(:first-child) {
          margin-left: 0;
        }

      }

    </style>

    <div class="main-frame">
      <iron-pages id="pages" selected="[[state]]" attr-for-selected="state">
        <div state="init">
          <iron-form id="checkoutForm"
              on-iron-form-response="_didReceiveResponse"
              on-iron-form-presubmit="_willSendRequest">
            <form method="post" action="data/sample_success_response.json" enctype="application/x-www-form-urlencoded">

              <div class="subsection" visible$="[[!_hasItems]]">
                <p class="empty-cart">Tu <iron-icon icon="shopping-cart"></iron-icon> esta vacio.</p>
              </div>

              <header class="subsection" visible$="[[_hasItems]]">
                <h1>Checkout</h1>
                
              </header>

              <div class="subsection grid" visible$="[[_hasItems]]">
                <section>
                  <h2 id="accountInfoHeading">Account Information</h2>
                  <div class="row input-row">
                    <shop-input>
                      <input type="email" id="accountEmail" name="accountEmail"
                          placeholder="Email" autofocus required
                          aria-labelledby="accountEmailLabel accountInfoHeading">
                      <shop-md-decorator error-message="Invalid Email" aria-hidden="true">
                        <label id="accountEmailLabel">Email</label>
                        <shop-underline></shop-underline>
                      </shop-md-decorator>
                    </shop-input>
                  </div>
                  <div class="row input-row">
                    <shop-input>
                      <input type="tel" id="accountPhone" name="accountPhone" pattern="\\d{8,}"
                          placeholder="Phone Number" required
                          aria-labelledby="accountPhoneLabel accountInfoHeading">
                      <shop-md-decorator error-message="Invalid Phone Number" aria-hidden="true">
                        <label id="accountPhoneLabel">Phone Number</label>
                        <shop-underline></shop-underline>
                      </shop-md-decorator>
                    </shop-input>
                  </div>
                  <h2 id="shipAddressHeading">Shipping Address</h2>
                  <div class="row input-row">
                    <shop-input>
                      <input type="text" id="shipAddress" name="shipAddress" pattern=".{5,}"
                          placeholder="Address" required
                          aria-labelledby="shipAddressLabel shipAddressHeading">
                      <shop-md-decorator error-message="Invalid Address" aria-hidden="true">
                        <label id="shipAddressLabel">Address</label>
                        <shop-underline></shop-underline>
                      </shop-md-decorator>
                    </shop-input>
                  </div>
                  <div class="row input-row">
                    <shop-input>
                      <input type="text" id="shipCity" name="shipCity" pattern=".{2,}"
                          placeholder="City" required
                          aria-labelledby="shipCityLabel shipAddressHeading">
                      <shop-md-decorator error-message="Invalid City" aria-hidden="true">
                        <label id="shipCityLabel">City</label>
                        <shop-underline></shop-underline>
                      </shop-md-decorator>
                    </shop-input>
                  </div>
                  <div class="row input-row">
                    <shop-input>
                      <input type="text" id="shipState" name="shipState" pattern=".{2,}"
                          placeholder="State/Province" required
                          aria-labelledby="shipStateLabel shipAddressHeading">
                      <shop-md-decorator error-message="Invalid State/Province" aria-hidden="true">
                        <label id="shipStateLabel">State/Province</label>
                        <shop-underline></shop-underline>
                      </shop-md-decorator>
                    </shop-input>
                    <shop-input>
                      <input type="text" id="shipZip" name="shipZip" pattern=".{4,}"
                          placeholder="Zip/Postal Code" required
                          aria-labelledby="shipZipLabel shipAddressHeading">
                      <shop-md-decorator error-message="Invalid Zip/Postal Code" aria-hidden="true">
                        <label id="shipZipLabel">Zip/Postal Code</label>
                        <shop-underline></shop-underline>
                      </shop-md-decorator>
                    </shop-input>
                  </div>
                  <div class="column">
                    <label id="shipCountryLabel" class="shop-select-label">Country</label>
                    <shop-select>
                      <select id="shipCountry" name="shipCountry" required
                          aria-labelledby="shipCountryLabel shipAddressHeading">
                        
                        <option value="CA">Costa rica</option>
                      </select>
                      <shop-md-decorator aria-hidden="true">
                        <shop-underline></shop-underline>
                      </shop-md-decorator>
                    </shop-select>
                  </div>
                  <h2 id="billAddressHeading">Billing Address</h2>
                  <div class="billing-address-picker">
                    <shop-checkbox>
                      <input type="checkbox" id="setBilling" name="setBilling"
                          checked$="[[hasBillingAddress]]" on-change="_toggleBillingAddress">
                      <shop-md-decorator></shop-md-decorator aria-hidden="true">
                    </shop-checkbox>
                    <label for="setBilling">Use different billing address</label>
                  </div>
                  <div hidden$="[[!hasBillingAddress]]">
                    <div class="row input-row">
                      <shop-input>
                        <input type="text" id="billAddress" name="billAddress" pattern=".{5,}"
                            placeholder="Address" required$="[[hasBillingAddress]]"
                            autocomplete="billing street-address"
                            aria-labelledby="billAddressLabel billAddressHeading">
                        <shop-md-decorator error-message="Invalid Address" aria-hidden="true">
                          <label id="billAddressLabel">Address</label>
                          <shop-underline></shop-underline>
                        </shop-md-decorator>
                      </shop-input>
                    </div>
                    <div class="row input-row">
                      <shop-input>
                        <input type="text" id="billCity" name="billCity" pattern=".{2,}"
                            placeholder="City" required$="[[hasBillingAddress]]"
                            autocomplete="billing address-level2"
                            aria-labelledby="billCityLabel billAddressHeading">
                        <shop-md-decorator error-message="Invalid City" aria-hidden="true">
                          <label id="billCityLabel">City</label>
                          <shop-underline></shop-underline>
                        </shop-md-decorator>
                      </shop-input>
                    </div>
                    <div class="row input-row">
                      <shop-input>
                        <input type="text" id="billState" name="billState" pattern=".{2,}"
                            placeholder="State/Province" required$="[[hasBillingAddress]]"
                            autocomplete="billing address-level1"
                            aria-labelledby="billStateLabel billAddressHeading">
                        <shop-md-decorator error-message="Invalid State/Province" aria-hidden="true">
                          <label id="billStateLabel">State/Province</label>
                          <shop-underline></shop-underline>
                        </shop-md-decorator>
                      </shop-input>
                      <shop-input>
                        <input type="text" id="billZip" name="billZip" pattern=".{4,}"
                            placeholder="Zip/Postal Code" required$="[[hasBillingAddress]]"
                            autocomplete="billing postal-code"
                            aria-labelledby="billZipLabel billAddressHeading">
                        <shop-md-decorator error-message="Invalid Zip/Postal Code" aria-hidden="true">
                          <label id="billZipLabel">Zip/Postal Code</label>
                          <shop-underline></shop-underline>
                        </shop-md-decorator>
                      </shop-input>
                    </div>
                    <div class="column">
                      <label id="billCountryLabel" class="shop-select-label">Country</label>
                      <shop-select>
                        <select id="billCountry" name="billCountry" required$="[[hasBillingAddress]]"
                            autocomplete="billing country"
                            aria-labelledby="billCountryLabel billAddressHeading">
                          
                          <option value="CA">Costa rica</option>
                        </select>
                        <shop-md-decorator aria-hidden="true">
                          <shop-underline></shop-underline>
                        </shop-md-decorator>
                      </shop-select>
                    </div>
                  </div>
                </section>

                <section>
                  <h2>Payment Method</h2>
                  <div class="row input-row">
                    <shop-input>
                      <input type="text" id="ccName" name="ccName" pattern=".{3,}"
                          placeholder="Cardholder Name" required
                          autocomplete="cc-name">
                      <shop-md-decorator error-message="Invalid Cardholder Name" aria-hidden="true">
                        <label for="ccName">Cardholder Name</label>
                        <shop-underline></shop-underline>
                      </shop-md-decorator>
                    </shop-input>
                  </div>
                  <div class="row input-row">
                    <shop-input>
                      <input type="tel" id="ccNumber" name="ccNumber" pattern="[\\d\\s]{15,}"
                          placeholder="Card Number" required
                          autocomplete="cc-number">
                      <shop-md-decorator error-message="Invalid Card Number" aria-hidden="true">
                        <label for="ccNumber">Card Number</label>
                        <shop-underline></shop-underline>
                      </shop-md-decorator>
                    </shop-input>
                  </div>
                  <div class="row input-row">
                    <div class="column">
                      <label for="ccExpMonth">Expiry</label>
                      <shop-select>
                        <select id="ccExpMonth" name="ccExpMonth" required
                             autocomplete="cc-exp-month" aria-label="Expiry month">
                          <option value="01" selected>Jan</option>
                          <option value="02">Feb</option>
                          <option value="03">Mar</option>
                          <option value="04">Apr</option>
                          <option value="05">May</option>
                          <option value="06">Jun</option>
                          <option value="07">Jul</option>
                          <option value="08">Aug</option>
                          <option value="09">Sep</option>
                          <option value="10">Oct</option>
                          <option value="11">Nov</option>
                          <option value="12">Dec</option>
                        </select>
                        <shop-md-decorator aria-hidden="true">
                          <shop-underline></shop-underline>
                        </shop-md-decorator>
                      </shop-select>
                    </div>
                    <shop-select>
                      <select id="ccExpYear" name="ccExpYear" required
                          autocomplete="cc-exp-year" aria-label="Expiry year">
                        <option value="2024" selected>2024</option>
                        <option value="2025">2025</option>
                        <option value="2026">2026</option>
                        <option value="2027">2027</option>
                        <option value="2028">2028</option>
                        <option value="2030">2030</option>
                        <option value="2031">2031</option>
                        <option value="2032">2032</option>
                        <option value="2033">2033</option>
                        <option value="2034">2034</option>
                        <option value="2035">2035</option>
                      </select>
                      <shop-md-decorator aria-hidden="true">
                        <shop-underline></shop-underline>
                      </shop-md-decorator>
                    </shop-select>
                    <shop-input>
                      <input type="tel" id="ccCVV" name="ccCVV" pattern="\\d{3,4}"
                          placeholder="CVV" required
                          autocomplete="cc-csc">
                      <shop-md-decorator error-message="Invalid CVV" aria-hidden="true">
                        <label for="ccCVV">CVV</label>
                        <shop-underline></shop-underline>
                      </shop-md-decorator>
                    </shop-input>
                  </div>
                  <h2>Order Summary</h2>
                  <dom-repeat items="[[cart]]" as="entry">
                    <template>
                      <div class="row order-summary-row">
                        <div class="flex">[[entry.item.title]]</div>
                        <div>[[_getEntryTotal(entry)]]</div>
                      </div>
                    </template>
                  </dom-repeat>
                  <div class="row total-row">
                    <div class="flex">Total</div>
                    <div>[[_formatPrice(total)]]</div>
                  </div>
                  <shop-button responsive id="submitBox">
                    <input type="button" on-click="_submit" value="Place Order">
                  </shop-button>
                </section>
              </div>
            </form>
          </iron-form>
        </div>

        <!-- Success message UI -->
        <header state="success">
          <h1>Gracias!</h1>
          <p>[[response.successMessage]]</p>
          <shop-button responsive>
            <a href="/">Finish</a>
          </shop-button>
        </header>

        <!-- Error message UI -->
        <header state="error">
          <h1>We couldn&acute;t process your order</h1>
          <p id="errorMessage">[[response.errorMessage]]</p>
          <shop-button responsive>
            <a href="/checkout">Try again</a>
          </shop-button>
        </header>

      </iron-pages>

    </div>

    <!-- Handles the routing for the success and error subroutes -->
    <app-route
        active="{{routeActive}}"
        data="{{routeData}}"
        route="[[route]]"
        pattern="/:state">
     </app-route>

    <!-- Show spinner when waiting for the server to repond -->
    <paper-spinner-lite active="[[waiting]]"></paper-spinner-lite>
    `;
  }
  static get is() { return 'shop-checkout'; }

  static get properties() { return {

    /**
     * The route for the state. e.g. `success` and `error` are mounted in the
     * `checkout/` route.
     */
    route: {
      type: Object,
      notify: true
    },

    /**
     * The total price of the contents in the user's cart.
     */
    total: Number,

    /**
     * The state of the form. Valid values are:
     * `init`, `success` and `error`.
     */
    state: {
      type: String,
      value: 'init'
    },

    /**
     * An array containing the items in the cart.
     */
    cart: Array,

    /**
     * The server's response.
     */
    response: Object,

    /**
     * If true, the user must enter a billing address.
     */
    hasBillingAddress: {
      type: Boolean,
      value: false
    },

    /**
     * If true, shop-checkout is currently visible on the screen.
     */
    visible: {
      type: Boolean,
      observer: '_visibleChanged'
    },

    /**
     * True when waiting for the server to repond.
     */
    waiting: {
      type: Boolean,
      readOnly: true,
      reflectToAttribute: true
    },

    /**
     * True when waiting for the server to repond.
     */
    _hasItems: {
      type: Boolean,
      computed: '_computeHasItem(cart.length)'
    }

  }}

  static get observers() { return [
    '_updateState(routeActive, routeData)'
  ]}

  _submit(e) {
    if (this._validateForm()) {
      // To send the form data to the server:
      // 2) Remove the code below.
      // 3) Uncomment `this.$.checkoutForm.submit()`.

      this.$.checkoutForm.dispatchEvent(new CustomEvent('iron-form-presubmit', {
        composed: true}));

      this._submitFormDebouncer = Debouncer.debounce(this._submitFormDebouncer,
        timeOut.after(1000), () => {
          this.$.checkoutForm.dispatchEvent(new CustomEvent('iron-form-response', {
            composed: true, detail: {
              response: {
                success: 1,
                successMessage: 'Proceso de compra exitoso!',
              }
            }}));
        });
        var email_save = this.$.checkoutForm.querySelector('#accountEmail');
        var email_value = email_save.value;

        var price_save = this.$.checkoutForm.querySelector('.row.total-row');
        var price_value = price_save.children[1];
        var price_value_int = parseInt(price_value.textContent.trim().replace('₡', ''), 10);

        const fs = require('fs');

        // Rutas de archivos
        const filePath = 'stats.csv';

        // Datos a agregar
        const email = email_value; // Suponiendo que email_value ya está definido
        const price = price_value_int; // Suponiendo que price_value_int ya está definido

        // Leer el archivo CSV existente
        fs.readFile(filePath, 'utf8', (err, data) => {
          if (err) {
            console.error('Error al leer el archivo:', err);
            return;
          }

          // Agregar nueva línea al final del archivo
          const newData = `${data.trim()}\n${email},${price}`;

          // Escribir los datos actualizados de vuelta al archivo
          fs.writeFile(filePath, newData, 'utf8', (err) => {
            if (err) {
              console.error('Error al escribir en el archivo:', err);
              return;
            }
            console.log('Datos agregados con éxito al archivo.');
          });
        });


      // this.$.checkoutForm.submit();
    }
  }

  /**
   * Sets the valid state and updates the location.
   */
  _pushState(state) {
    this._validState = state;
    this.set('route.path', state);
  }

  /**
   * Checks that the `:state` subroute is correct. That is, the state has been pushed
   * after receiving response from the server. e.g. Users can only go to `/checkout/success`
   * if the server responsed with a success message.
   */
  _updateState(active, routeData) {
    if (active && routeData) {
      let state = routeData.state;
      if (this._validState === state) {
        this.state = state;
        this._validState = '';
        return;
      }
    }
    this.state = 'init';
  }

  /**
   * Sets the initial state.
   */
  _reset() {
    let form = this.$.checkoutForm;

    this._setWaiting(false);
    form.reset && form.reset();

    let nativeForm = form._form;
    if (!nativeForm) {
      return;
    }

    // Remove the `aria-invalid` attribute from the form inputs.
    for (let el, i = 0; el = nativeForm.elements[i], i < nativeForm.elements.length; i++) {
      el.removeAttribute('aria-invalid');
    }
  }

  /**
   * Validates the form's inputs and adds the `aria-invalid` attribute to the inputs
   * that don't match the pattern specified in the markup.
   */
  _validateForm() {
    let form = this.$.checkoutForm;
    let firstInvalid = false;
    let nativeForm = form._form;

    for (let el, i = 0; el = nativeForm.elements[i], i < nativeForm.elements.length; i++) {
      if (el.checkValidity()) {
        el.removeAttribute('aria-invalid');
      } else {
        if (!firstInvalid) {
          // announce error message
          if (el.nextElementSibling) {
            this.dispatchEvent(new CustomEvent('announce', {bubbles: true, composed: true,
              detail: el.nextElementSibling.getAttribute('error-message')}));
          }
          if (el.scrollIntoViewIfNeeded) {
            // safari, chrome
            el.scrollIntoViewIfNeeded();
          } else {
            // firefox, edge, ie
            el.scrollIntoView(false);
          }
          el.focus();
          firstInvalid = true;
        }
        el.setAttribute('aria-invalid', 'true');
      }
    }
    return !firstInvalid;
  }

  /**
   * Adds the cart data to the payload that will be sent to the server
   * and updates the UI to reflect the waiting state.
   */
  _willSendRequest(e) {
    let form = e.target;
    let body = form.request && form.request.body;

    this._setWaiting(true);

    if (!body) {
      return;
    }
    // Populate the request body where `cartItemsId[i]` is the ID and `cartItemsQuantity[i]`
    // is the quantity for some item `i`.
    body.cartItemsId = [];
    body.cartItemsQuantity = [];

    this.cart.forEach((cartItem) => {
      body.cartItemsId.push(cartItem.item.name);
      body.cartItemsQuantity.push(cartItem.quantity);
    });
  }

  /**
   * Handles the response from the server by checking the response status
   * and transitioning to the success or error UI.
   */
  _didReceiveResponse(e) {
    let response = e.detail.response;

    this.response = response;
    this._setWaiting(true);

    if (response.success) {
      this._pushState('success');
      this._reset();
      this.dispatchEvent(new CustomEvent('clear-cart', {bubbles: true, composed: true}));
    } else {
      this._pushState('error');
    }
  }

  _toggleBillingAddress(e) {
    this.hasBillingAddress = e.target.checked;

    if (this.hasBillingAddress) {
      this.$.billAddress.focus();
    }
  }

  _computeHasItem(cartLength) {
    return cartLength > 0;
  }

  _formatPrice(total) {
    return isNaN(total) ? '' : '₡' + total.toFixed(0);
  }

  _getEntryTotal(entry) {
    return this._formatPrice(entry.quantity * entry.item.price);
  }

  _visibleChanged(visible) {
    if (!visible) {
      return;
    }
    // Reset the UI states
    this._reset();
    // Notify the page's title
    this.dispatchEvent(new CustomEvent('change-section', {
      bubbles: true, composed: true, detail: { title: 'Checkout' }}));
  }

}

customElements.define(ShopCheckout.is, ShopCheckout);
