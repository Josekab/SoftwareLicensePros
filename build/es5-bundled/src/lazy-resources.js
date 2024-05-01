define(["exports","./shop-app.js"],function(_exports,_shopApp){"use strict";Object.defineProperty(_exports,"__esModule",{value:!0/* ignoreName */ /* skipSlots */});_exports._composedTreeContains=_composedTreeContains;_exports._getScrollInfo=_getScrollInfo;_exports._getScrollableNodes=_getScrollableNodes;_exports._getScrollingNode=_getScrollingNode;_exports._hasCachedLockedElement=_hasCachedLockedElement;_exports._hasCachedUnlockedElement=_hasCachedUnlockedElement;_exports._lockScrollInteractions=_lockScrollInteractions;_exports._scrollInteractionHandler=_scrollInteractionHandler;_exports._shouldPreventScrolling=_shouldPreventScrolling;_exports._unlockScrollInteractions=_unlockScrollInteractions;_exports.elementIsScrollLocked=elementIsScrollLocked;_exports.pushScrollLock=pushScrollLock;_exports.removeScrollLock=removeScrollLock;_exports.currentLockingElement=_exports._unlockedElementCache=_exports._lockingElements=_exports._lockedElementCache=_exports._boundScrollHandler=_exports.PaperSpinnerBehavior=_exports.PaperRippleBehavior=_exports.PaperInkyFocusBehaviorImpl=_exports.PaperInkyFocusBehavior=_exports.IronOverlayManagerClass=_exports.IronOverlayManager=_exports.IronOverlayBehaviorImpl=_exports.IronOverlayBehavior=_exports.IronMeta=_exports.IronFocusablesHelper=_exports.IronFitBehavior=_exports.IronControlState=_exports.IronButtonStateImpl=_exports.IronButtonState=_exports.IronA11yKeysBehavior=_exports.AppStorageBehavior=_exports.$paperSpinnerBehavior=_exports.$paperRippleBehavior=_exports.$paperInkyFocusBehavior=_exports.$ironScrollManager=_exports.$ironOverlayManager=_exports.$ironOverlayBehavior=_exports.$ironMeta=_exports.$ironFocusablesHelper=_exports.$ironFitBehavior=_exports.$ironControlState=_exports.$ironButtonState=_exports.$ironA11yKeysBehavior=_exports.$appStorageBehavior=void 0;function _templateObject19_3f0e9a00e61411ee9d65b9d111681715(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"shop-select\">\n\n      :host {\n        @apply --layout-horizontal;\n        position: relative;\n        margin-bottom: 24px;\n      }\n\n      shop-image {\n        width: 72px;\n        height: 72px;\n      }\n\n      shop-select > select {\n        font-size: 16px;\n        padding-left: 40px;\n      }\n\n      shop-select > shop-md-decorator {\n        font-size: 12px;\n        border: none;\n      }\n\n      .name {\n        @apply --layout-flex-auto;\n        line-height: 20px;\n        font-weight: 500;\n        float: left;\n        width: calc(100% - 438px);\n        margin-top: 26px;\n        margin-right: 30px;\n      }\n\n      .name a {\n        display: inline-block;\n        max-width: 100%;\n        text-decoration: none;\n        color: var(--app-primary-color);\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      .price, .size {\n        display: inline-block;\n        white-space: nowrap;\n        color: var(--app-secondary-color);\n      }\n\n      .size {\n        min-width: 70px;\n        width: 144px;\n      }\n\n      .size > span {\n        margin-left: 10px;\n      }\n\n      .price {\n        min-width: 70px;\n        width: 100px;\n      }\n\n      .quantity {\n        min-width: 80px;\n        width: 160px;\n      }\n\n      .delete-button {\n        width: 34px;\n        height: 34px;\n        color: var(--app-secondary-color);\n        position: absolute;\n        top: 18px;\n        right: 0;\n      }\n\n      .flex {\n        @apply --layout-horizontal;\n        @apply --layout-flex-auto;\n        margin-left: 24px;\n      }\n\n      .detail {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        margin-top: 26px;\n        margin-right: 30px;\n        height: 20px;\n      }\n\n      @media (max-width: 767px) {\n        .flex {\n          @apply --layout-vertical;\n          margin-left: 10px;\n        }\n\n        .name {\n          margin-top: 16px;\n          margin-right: 0;\n          width: calc(100% - 40px);\n        }\n\n        .detail {\n          @apply --layout-self-end;\n          margin: 10px 10px 0 0;\n        }\n\n        .quantity, .size, .price {\n          text-align: right;\n          width: auto;\n        }\n\n        .delete-button {\n          top: 8px;\n        }\n      }\n\n      @media (max-width: 360px) {\n        .name {\n          margin-top: 0;\n        }\n\n        .detail {\n          @apply --layout-vertical;\n          @apply --layout-start;\n          @apply --layout-self-start;\n          height: auto;\n          margin-top: 0;\n        }\n\n        .delete-button {\n          top: -6px;\n        }\n\n        shop-select > select {\n          padding: 2px 24px 2px 40px;\n        }\n\n        .quantity, .size, .price {\n          text-align: left;\n          width: auto;\n        }\n      }\n\n    </style>\n\n    <a href$=\"/detail/[[entry.item.category]]/[[entry.item.name]]\" title$=\"[[entry.item.title]]\">\n      <shop-image src=\"[[entry.item.image]]\" alt=\"[[entry.item.title]]\"></shop-image>\n    </a>\n    <div class=\"flex\">\n      <div class=\"name\">\n        <a href$=\"/detail/[[entry.item.category]]/[[entry.item.name]]\">[[entry.item.title]]</a>\n      </div>\n      <div class=\"detail\">\n        <div class=\"quantity\">\n          <shop-select>\n            <label prefix=\"\">Qty:</label>\n            <select id=\"quantitySelect\" aria-label=\"Change quantity\" value=\"[[entry.quantity]]\" on-change=\"_quantityChange\">\n              <option value=\"1\">1</option>\n              <option value=\"2\">2</option>\n              <option value=\"3\">3</option>\n              <option value=\"4\">4</option>\n              <option value=\"5\">5</option>\n              <option value=\"6\">6</option>\n              <option value=\"7\">7</option>\n              <option value=\"8\">8</option>\n              <option value=\"9\">9</option>\n              <option value=\"10\">10</option>\n              <option value=\"11\">11</option>\n              <option value=\"12\">12</option>\n            </select>\n            <shop-md-decorator aria-hidden=\"true\"></shop-md-decorator>\n          </shop-select>\n        </div>\n        <div class=\"size\">Size: <span>[[entry.size]]</span></div>\n        <div class=\"price\">[[_formatPrice(entry.item.price)]]</div>\n\n        <!--\n          Use on-click instead of on-tap to prevent the next cart item to be focused\n        -->\n        <paper-icon-button class=\"delete-button\" icon=\"close\" aria-label$=\"Delete item [[entry.item.title]]\" on-click=\"_removeItem\"></paper-icon-button>\n      </div>\n    </div>\n    "],["\n    <style include=\"shop-select\">\n\n      :host {\n        @apply --layout-horizontal;\n        position: relative;\n        margin-bottom: 24px;\n      }\n\n      shop-image {\n        width: 72px;\n        height: 72px;\n      }\n\n      shop-select > select {\n        font-size: 16px;\n        padding-left: 40px;\n      }\n\n      shop-select > shop-md-decorator {\n        font-size: 12px;\n        border: none;\n      }\n\n      .name {\n        @apply --layout-flex-auto;\n        line-height: 20px;\n        font-weight: 500;\n        float: left;\n        width: calc(100% - 438px);\n        margin-top: 26px;\n        margin-right: 30px;\n      }\n\n      .name a {\n        display: inline-block;\n        max-width: 100%;\n        text-decoration: none;\n        color: var(--app-primary-color);\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      .price, .size {\n        display: inline-block;\n        white-space: nowrap;\n        color: var(--app-secondary-color);\n      }\n\n      .size {\n        min-width: 70px;\n        width: 144px;\n      }\n\n      .size > span {\n        margin-left: 10px;\n      }\n\n      .price {\n        min-width: 70px;\n        width: 100px;\n      }\n\n      .quantity {\n        min-width: 80px;\n        width: 160px;\n      }\n\n      .delete-button {\n        width: 34px;\n        height: 34px;\n        color: var(--app-secondary-color);\n        position: absolute;\n        top: 18px;\n        right: 0;\n      }\n\n      .flex {\n        @apply --layout-horizontal;\n        @apply --layout-flex-auto;\n        margin-left: 24px;\n      }\n\n      .detail {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        margin-top: 26px;\n        margin-right: 30px;\n        height: 20px;\n      }\n\n      @media (max-width: 767px) {\n        .flex {\n          @apply --layout-vertical;\n          margin-left: 10px;\n        }\n\n        .name {\n          margin-top: 16px;\n          margin-right: 0;\n          width: calc(100% - 40px);\n        }\n\n        .detail {\n          @apply --layout-self-end;\n          margin: 10px 10px 0 0;\n        }\n\n        .quantity, .size, .price {\n          text-align: right;\n          width: auto;\n        }\n\n        .delete-button {\n          top: 8px;\n        }\n      }\n\n      @media (max-width: 360px) {\n        .name {\n          margin-top: 0;\n        }\n\n        .detail {\n          @apply --layout-vertical;\n          @apply --layout-start;\n          @apply --layout-self-start;\n          height: auto;\n          margin-top: 0;\n        }\n\n        .delete-button {\n          top: -6px;\n        }\n\n        shop-select > select {\n          padding: 2px 24px 2px 40px;\n        }\n\n        .quantity, .size, .price {\n          text-align: left;\n          width: auto;\n        }\n      }\n\n    </style>\n\n    <a href\\$=\"/detail/[[entry.item.category]]/[[entry.item.name]]\" title\\$=\"[[entry.item.title]]\">\n      <shop-image src=\"[[entry.item.image]]\" alt=\"[[entry.item.title]]\"></shop-image>\n    </a>\n    <div class=\"flex\">\n      <div class=\"name\">\n        <a href\\$=\"/detail/[[entry.item.category]]/[[entry.item.name]]\">[[entry.item.title]]</a>\n      </div>\n      <div class=\"detail\">\n        <div class=\"quantity\">\n          <shop-select>\n            <label prefix=\"\">Qty:</label>\n            <select id=\"quantitySelect\" aria-label=\"Change quantity\" value=\"[[entry.quantity]]\" on-change=\"_quantityChange\">\n              <option value=\"1\">1</option>\n              <option value=\"2\">2</option>\n              <option value=\"3\">3</option>\n              <option value=\"4\">4</option>\n              <option value=\"5\">5</option>\n              <option value=\"6\">6</option>\n              <option value=\"7\">7</option>\n              <option value=\"8\">8</option>\n              <option value=\"9\">9</option>\n              <option value=\"10\">10</option>\n              <option value=\"11\">11</option>\n              <option value=\"12\">12</option>\n            </select>\n            <shop-md-decorator aria-hidden=\"true\"></shop-md-decorator>\n          </shop-select>\n        </div>\n        <div class=\"size\">Size: <span>[[entry.size]]</span></div>\n        <div class=\"price\">[[_formatPrice(entry.item.price)]]</div>\n\n        <!--\n          Use on-click instead of on-tap to prevent the next cart item to be focused\n        -->\n        <paper-icon-button class=\"delete-button\" icon=\"close\" aria-label\\$=\"Delete item [[entry.item.title]]\" on-click=\"_removeItem\"></paper-icon-button>\n      </div>\n    </div>\n    "]);_templateObject19_3f0e9a00e61411ee9d65b9d111681715=function _templateObject19_3f0e9a00e61411ee9d65b9d111681715(){return data};return data}function _templateObject18_3f0e9a00e61411ee9d65b9d111681715(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"shop-button\">\n\n      :host {\n        display: block;\n        text-align: center;\n        color: var(--app-secondary-color);\n      }\n\n      iron-icon {\n        display: inline-block;\n        width: 60px;\n        height: 60px;\n      }\n\n      h1 {\n        margin: 50px 0 50px 0;\n        font-weight: 300;\n      }\n\n    </style>\n\n    <div>\n      <iron-icon icon=\"error\"></iron-icon>\n      <h1>Sorry, we couldn't find that page</h1>\n    </div>\n    <shop-button>\n      <a href=\"/\">Go to the home page</a>\n    </shop-button>\n"]);_templateObject18_3f0e9a00e61411ee9d65b9d111681715=function _templateObject18_3f0e9a00e61411ee9d65b9d111681715(){return data};return data}function _templateObject17_3f0e9a00e61411ee9d65b9d111681715(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"shop-button\">\n\n      :host {\n        display: block;\n        padding: 40px 20px;\n        text-align: center;\n        color: var(--app-secondary-color);\n      }\n\n      iron-icon {\n        display: inline-block;\n        width: 30px;\n        height: 30px;\n      }\n\n      h1 {\n        margin: 50px 0 10px 0;\n        font-weight: 300;\n      }\n\n      p {\n        margin: 0;\n      }\n\n      shop-button {\n        margin-top: 50px;\n      }\n\n    </style>\n\n    <div hidden$=\"[[offline]]\">\n      <h1>Couldn't reach the server</h1>\n    </div>\n    <div hidden$=\"[[!offline]]\">\n      <iron-icon icon=\"perm-scan-wifi\"></iron-icon>\n      <h1>No internet connection</h1>\n      <p>Check if your device is connected to a mobile network or WiFi.</p>\n    </div>\n    <shop-button>\n      <button on-click=\"_tryReconnect\">Try Again</button>\n    </shop-button>\n"],["\n    <style include=\"shop-button\">\n\n      :host {\n        display: block;\n        padding: 40px 20px;\n        text-align: center;\n        color: var(--app-secondary-color);\n      }\n\n      iron-icon {\n        display: inline-block;\n        width: 30px;\n        height: 30px;\n      }\n\n      h1 {\n        margin: 50px 0 10px 0;\n        font-weight: 300;\n      }\n\n      p {\n        margin: 0;\n      }\n\n      shop-button {\n        margin-top: 50px;\n      }\n\n    </style>\n\n    <div hidden\\$=\"[[offline]]\">\n      <h1>Couldn't reach the server</h1>\n    </div>\n    <div hidden\\$=\"[[!offline]]\">\n      <iron-icon icon=\"perm-scan-wifi\"></iron-icon>\n      <h1>No internet connection</h1>\n      <p>Check if your device is connected to a mobile network or WiFi.</p>\n    </div>\n    <shop-button>\n      <button on-click=\"_tryReconnect\">Try Again</button>\n    </shop-button>\n"]);_templateObject17_3f0e9a00e61411ee9d65b9d111681715=function _templateObject17_3f0e9a00e61411ee9d65b9d111681715(){return data};return data}function _templateObject16_3f0e9a00e61411ee9d65b9d111681715(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      [hidden] {\n        display: none !important;\n      }\n\n      :host {\n        display: inline-block;\n        position: relative;\n      }\n\n      #overlay {\n        pointer-events: none;\n        display: none;\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        @apply --shop-tab-overlay;\n      }\n\n      :host(.shop-tabs-overlay-static-above) #overlay {\n        display: block;\n      }\n    </style>\n    <div id=\"overlay\"></div>\n    <shop-ripple-container>\n      <slot></slot>\n    </shop-ripple-container>\n    "]);_templateObject16_3f0e9a00e61411ee9d65b9d111681715=function _templateObject16_3f0e9a00e61411ee9d65b9d111681715(){return data};return data}function _templateObject15_3f0e9a00e61411ee9d65b9d111681715(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n      }\n\n      paper-ripple {\n        color: var(--app-accent-color);\n      }\n    </style>\n    <slot></slot>\n    "]);_templateObject15_3f0e9a00e61411ee9d65b9d111681715=function _templateObject15_3f0e9a00e61411ee9d65b9d111681715(){return data};return data}function _templateObject14_3f0e9a00e61411ee9d65b9d111681715(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        @apply --layout;\n        @apply --layout-center-center;\n      }\n\n      #container {\n        position: relative;\n      }\n\n      shop-tabs-overlay {\n        @apply --shop-tab-overlay;\n      }\n    </style>\n    <div id=\"container\">\n      <shop-tabs-overlay id=\"overlay\"></shop-tabs-overlay>\n      <slot></slot>\n    </div>\n    "]);_templateObject14_3f0e9a00e61411ee9d65b9d111681715=function _templateObject14_3f0e9a00e61411ee9d65b9d111681715(){return data};return data}function _templateObject13_3f0e9a00e61411ee9d65b9d111681715(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        position: absolute;\n        display: none;\n        pointer-events: none;\n        opacity: 0;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        transition-property: top, right, bottom, left, opacity;\n      }\n    </style>\n    "]);_templateObject13_3f0e9a00e61411ee9d65b9d111681715=function _templateObject13_3f0e9a00e61411ee9d65b9d111681715(){return data};return data}function _templateObject12_3f0e9a00e61411ee9d65b9d111681715(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        position: fixed;\n        left: calc(50% - 160px);\n        right: calc(50% - 160px);\n        bottom: 0;\n        background-color: var(--app-primary-color);\n        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n        color: white;\n        width: 320px;\n        padding: 12px;\n        visibility: hidden;\n        text-align: center;\n        will-change: transform;\n        -webkit-transform: translate3d(0, 100%, 0);\n        transform: translate3d(0, 100%, 0);\n        transition-property: visibility, -webkit-transform, opacity;\n        transition-property: visibility, transform, opacity;\n        transition-duration: 0.2s;\n      }\n      :host(.opened) {\n        visibility: visible;\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0);\n      }\n      @media (max-width: 767px) {\n        :host {\n          top: auto;\n          bottom: 0;\n          left: 0;\n          right: 0;\n          width: auto;\n          -webkit-transform: translate3d(0, 100%, 0);\n          transform: translate3d(0, 100%, 0);\n          z-index: 1;\n        }\n      }\n    </style>\n\n    <slot></slot>\n"]);_templateObject12_3f0e9a00e61411ee9d65b9d111681715=function _templateObject12_3f0e9a00e61411ee9d65b9d111681715(){return data};return data}function _templateObject11_3f0e9a00e61411ee9d65b9d111681715(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style include=\"shop-button\">\n\n      :host {\n        display: block;\n        position: fixed;\n        background-color: #FFF;\n        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);\n        width: 320px;\n        padding: 12px;\n        visibility: hidden;\n        will-change: transform;\n        top: 56px;\n        right: 16px;\n        -webkit-transform: translate3d(calc(100% + 16px), 0, 0);\n        transform: translate3d(calc(100% + 16px), 0, 0);\n        transition-property: visibility, -webkit-transform;\n        transition-property: visibility, transform;\n        transition-duration: 0.2s;\n        transition-delay: 0.1s;\n      }\n\n      :host(.opened) {\n        visibility: visible;\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0);\n      }\n\n      .layout-horizontal {\n        @apply --layout-horizontal;\n      }\n\n      .label {\n        @apply --layout-flex;\n        line-height: 24px;\n        margin: 8px;\n      }\n\n      .modal-button {\n        @apply --layout-flex;\n        margin: 16px 8px;\n      }\n\n      .modal-button > a {\n        box-sizing: border-box;\n        width: 100%;\n        padding: 8px 24px;\n      }\n\n      #closeBtn {\n        position: absolute;\n        right: 5px;\n        top: 5px;\n      }\n\n      @media (max-width: 767px) {\n\n        :host {\n          top: auto;\n          bottom: 0;\n          left: 0;\n          right: 0;\n          width: auto;\n          -webkit-transform: translate3d(0, 100%, 0);\n          transform: translate3d(0, 100%, 0);\n        }\n\n      }\n\n    </style>\n\n    <div class=\"layout-horizontal\">\n      <div class=\"label\">Added to cart</div>\n    </div>\n    <div class=\"layout-horizontal\">\n      <shop-button class=\"modal-button\">\n        <a href=\"/cart\" on-click=\"close\" id=\"viewCartAnchor\">View Cart</a>\n      </shop-button>\n      <shop-button class=\"modal-button\">\n        <a href=\"/checkout\" on-click=\"close\">Checkout</a>\n      </shop-button>\n    </div>\n\n    <paper-icon-button icon=\"close\" id=\"closeBtn\" aria-label=\"Close dialog\" on-click=\"close\"></paper-icon-button>\n"]);_templateObject11_3f0e9a00e61411ee9d65b9d111681715=function _templateObject11_3f0e9a00e61411ee9d65b9d111681715(){return data};return data}function _templateObject10_3f0e9a00e61411ee9d65b9d111681715(){var data=babelHelpers.taggedTemplateLiteral(["\n    <app-localstorage-document key=\"shop-cart-data\" data=\"{{cart}}\"></app-localstorage-document>\n"]);_templateObject10_3f0e9a00e61411ee9d65b9d111681715=function _templateObject10_3f0e9a00e61411ee9d65b9d111681715(){return data};return data}function _templateObject9_3f0e9a00e61411ee9d65b9d111681715(){var data=babelHelpers.taggedTemplateLiteral(["\n  <style include=\"paper-spinner-styles\"></style>\n\n  <div id=\"spinnerContainer\" class-name=\"[[__computeContainerClasses(active, __coolingDown)]]\" on-animationend=\"__reset\" on-webkit-animation-end=\"__reset\">\n    <div class=\"spinner-layer\">\n      <div class=\"circle-clipper left\"></div>\n      <div class=\"circle-clipper right\"></div>\n    </div>\n  </div>\n"]);_templateObject9_3f0e9a00e61411ee9d65b9d111681715=function _templateObject9_3f0e9a00e61411ee9d65b9d111681715(){return data};return data}function _templateObject8_3f0e9a00e61411ee9d65b9d111681715(){var data=babelHelpers.taggedTemplateLiteral(["\n<dom-module id=\"paper-icon-button\">\n  <template strip-whitespace>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        padding: 8px;\n        outline: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        cursor: pointer;\n        z-index: 0;\n        line-height: 1;\n\n        width: 40px;\n        height: 40px;\n\n        /* NOTE: Both values are needed, since some phones require the value to be `transparent`. */\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-tap-highlight-color: transparent;\n\n        /* Because of polymer/2558, this style has lower specificity than * */\n        box-sizing: border-box !important;\n\n        @apply --paper-icon-button;\n      }\n\n      :host #ink {\n        color: var(--paper-icon-button-ink-color, var(--primary-text-color));\n        opacity: 0.6;\n      }\n\n      :host([disabled]) {\n        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));\n        pointer-events: none;\n        cursor: auto;\n\n        @apply --paper-icon-button-disabled;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host(:hover) {\n        @apply --paper-icon-button-hover;\n      }\n\n      iron-icon {\n        --iron-icon-width: 100%;\n        --iron-icon-height: 100%;\n      }\n    </style>\n\n    <iron-icon id=\"icon\" src=\"[[src]]\" icon=\"[[icon]]\" alt$=\"[[alt]]\"></iron-icon>\n  </template>\n</dom-module>\n"],["\n<dom-module id=\"paper-icon-button\">\n  <template strip-whitespace>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        padding: 8px;\n        outline: none;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        cursor: pointer;\n        z-index: 0;\n        line-height: 1;\n\n        width: 40px;\n        height: 40px;\n\n        /* NOTE: Both values are needed, since some phones require the value to be \\`transparent\\`. */\n        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        -webkit-tap-highlight-color: transparent;\n\n        /* Because of polymer/2558, this style has lower specificity than * */\n        box-sizing: border-box !important;\n\n        @apply --paper-icon-button;\n      }\n\n      :host #ink {\n        color: var(--paper-icon-button-ink-color, var(--primary-text-color));\n        opacity: 0.6;\n      }\n\n      :host([disabled]) {\n        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));\n        pointer-events: none;\n        cursor: auto;\n\n        @apply --paper-icon-button-disabled;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host(:hover) {\n        @apply --paper-icon-button-hover;\n      }\n\n      iron-icon {\n        --iron-icon-width: 100%;\n        --iron-icon-height: 100%;\n      }\n    </style>\n\n    <iron-icon id=\"icon\" src=\"[[src]]\" icon=\"[[icon]]\" alt\\$=\"[[alt]]\"></iron-icon>\n  </template>\n</dom-module>\n"]);_templateObject8_3f0e9a00e61411ee9d65b9d111681715=function _templateObject8_3f0e9a00e61411ee9d65b9d111681715(){return data};return data}function _templateObject7_3f0e9a00e61411ee9d65b9d111681715(){var data=babelHelpers.taggedTemplateLiteral(["\n<custom-style>\n  <style is=\"custom-style\">\n    html {\n      /*\n       * You can use these generic variables in your elements for easy theming.\n       * For example, if all your elements use `--primary-text-color` as its main\n       * color, then switching from a light to a dark theme is just a matter of\n       * changing the value of `--primary-text-color` in your application.\n       */\n      --primary-text-color: var(--light-theme-text-color);\n      --primary-background-color: var(--light-theme-background-color);\n      --secondary-text-color: var(--light-theme-secondary-color);\n      --disabled-text-color: var(--light-theme-disabled-color);\n      --divider-color: var(--light-theme-divider-color);\n      --error-color: var(--paper-deep-orange-a700);\n\n      /*\n       * Primary and accent colors. Also see color.js for more colors.\n       */\n      --primary-color: var(--paper-indigo-500);\n      --light-primary-color: var(--paper-indigo-100);\n      --dark-primary-color: var(--paper-indigo-700);\n\n      --accent-color: var(--paper-pink-a200);\n      --light-accent-color: var(--paper-pink-a100);\n      --dark-accent-color: var(--paper-pink-a400);\n\n\n      /*\n       * Material Design Light background theme\n       */\n      --light-theme-background-color: #ffffff;\n      --light-theme-base-color: #000000;\n      --light-theme-text-color: var(--paper-grey-900);\n      --light-theme-secondary-color: #737373;  /* for secondary text and icons */\n      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */\n      --light-theme-divider-color: #dbdbdb;\n\n      /*\n       * Material Design Dark background theme\n       */\n      --dark-theme-background-color: var(--paper-grey-900);\n      --dark-theme-base-color: #ffffff;\n      --dark-theme-text-color: #ffffff;\n      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */\n      --dark-theme-disabled-color: #646464;  /* disabled/hint text */\n      --dark-theme-divider-color: #3c3c3c;\n\n      /*\n       * Deprecated values because of their confusing names.\n       */\n      --text-primary-color: var(--dark-theme-text-color);\n      --default-primary-color: var(--primary-color);\n    }\n  </style>\n</custom-style>"],["\n<custom-style>\n  <style is=\"custom-style\">\n    html {\n      /*\n       * You can use these generic variables in your elements for easy theming.\n       * For example, if all your elements use \\`--primary-text-color\\` as its main\n       * color, then switching from a light to a dark theme is just a matter of\n       * changing the value of \\`--primary-text-color\\` in your application.\n       */\n      --primary-text-color: var(--light-theme-text-color);\n      --primary-background-color: var(--light-theme-background-color);\n      --secondary-text-color: var(--light-theme-secondary-color);\n      --disabled-text-color: var(--light-theme-disabled-color);\n      --divider-color: var(--light-theme-divider-color);\n      --error-color: var(--paper-deep-orange-a700);\n\n      /*\n       * Primary and accent colors. Also see color.js for more colors.\n       */\n      --primary-color: var(--paper-indigo-500);\n      --light-primary-color: var(--paper-indigo-100);\n      --dark-primary-color: var(--paper-indigo-700);\n\n      --accent-color: var(--paper-pink-a200);\n      --light-accent-color: var(--paper-pink-a100);\n      --dark-accent-color: var(--paper-pink-a400);\n\n\n      /*\n       * Material Design Light background theme\n       */\n      --light-theme-background-color: #ffffff;\n      --light-theme-base-color: #000000;\n      --light-theme-text-color: var(--paper-grey-900);\n      --light-theme-secondary-color: #737373;  /* for secondary text and icons */\n      --light-theme-disabled-color: #9b9b9b;  /* disabled/hint text */\n      --light-theme-divider-color: #dbdbdb;\n\n      /*\n       * Material Design Dark background theme\n       */\n      --dark-theme-background-color: var(--paper-grey-900);\n      --dark-theme-base-color: #ffffff;\n      --dark-theme-text-color: #ffffff;\n      --dark-theme-secondary-color: #bcbcbc;  /* for secondary text and icons */\n      --dark-theme-disabled-color: #646464;  /* disabled/hint text */\n      --dark-theme-divider-color: #3c3c3c;\n\n      /*\n       * Deprecated values because of their confusing names.\n       */\n      --text-primary-color: var(--dark-theme-text-color);\n      --default-primary-color: var(--primary-color);\n    }\n  </style>\n</custom-style>"]);_templateObject7_3f0e9a00e61411ee9d65b9d111681715=function _templateObject7_3f0e9a00e61411ee9d65b9d111681715(){return data};return data}function _templateObject6_3f0e9a00e61411ee9d65b9d111681715(){var data=babelHelpers.taggedTemplateLiteral(["\n<custom-style>\n  <style is=\"custom-style\">\n    html {\n\n      /* Material Design color palette for Google products */\n\n      --google-red-100: #f4c7c3;\n      --google-red-300: #e67c73;\n      --google-red-500: #db4437;\n      --google-red-700: #c53929;\n\n      --google-blue-100: #c6dafc;\n      --google-blue-300: #7baaf7;\n      --google-blue-500: #4285f4;\n      --google-blue-700: #3367d6;\n\n      --google-green-100: #b7e1cd;\n      --google-green-300: #57bb8a;\n      --google-green-500: #0f9d58;\n      --google-green-700: #0b8043;\n\n      --google-yellow-100: #fce8b2;\n      --google-yellow-300: #f7cb4d;\n      --google-yellow-500: #f4b400;\n      --google-yellow-700: #f09300;\n\n      --google-grey-100: #f5f5f5;\n      --google-grey-300: #e0e0e0;\n      --google-grey-500: #9e9e9e;\n      --google-grey-700: #616161;\n\n      /* Material Design color palette from online spec document */\n\n      --paper-red-50: #ffebee;\n      --paper-red-100: #ffcdd2;\n      --paper-red-200: #ef9a9a;\n      --paper-red-300: #e57373;\n      --paper-red-400: #ef5350;\n      --paper-red-500: #f44336;\n      --paper-red-600: #e53935;\n      --paper-red-700: #d32f2f;\n      --paper-red-800: #c62828;\n      --paper-red-900: #b71c1c;\n      --paper-red-a100: #ff8a80;\n      --paper-red-a200: #ff5252;\n      --paper-red-a400: #ff1744;\n      --paper-red-a700: #d50000;\n\n      --paper-pink-50: #fce4ec;\n      --paper-pink-100: #f8bbd0;\n      --paper-pink-200: #f48fb1;\n      --paper-pink-300: #f06292;\n      --paper-pink-400: #ec407a;\n      --paper-pink-500: #e91e63;\n      --paper-pink-600: #d81b60;\n      --paper-pink-700: #c2185b;\n      --paper-pink-800: #ad1457;\n      --paper-pink-900: #880e4f;\n      --paper-pink-a100: #ff80ab;\n      --paper-pink-a200: #ff4081;\n      --paper-pink-a400: #f50057;\n      --paper-pink-a700: #c51162;\n\n      --paper-purple-50: #f3e5f5;\n      --paper-purple-100: #e1bee7;\n      --paper-purple-200: #ce93d8;\n      --paper-purple-300: #ba68c8;\n      --paper-purple-400: #ab47bc;\n      --paper-purple-500: #9c27b0;\n      --paper-purple-600: #8e24aa;\n      --paper-purple-700: #7b1fa2;\n      --paper-purple-800: #6a1b9a;\n      --paper-purple-900: #4a148c;\n      --paper-purple-a100: #ea80fc;\n      --paper-purple-a200: #e040fb;\n      --paper-purple-a400: #d500f9;\n      --paper-purple-a700: #aa00ff;\n\n      --paper-deep-purple-50: #ede7f6;\n      --paper-deep-purple-100: #d1c4e9;\n      --paper-deep-purple-200: #b39ddb;\n      --paper-deep-purple-300: #9575cd;\n      --paper-deep-purple-400: #7e57c2;\n      --paper-deep-purple-500: #673ab7;\n      --paper-deep-purple-600: #5e35b1;\n      --paper-deep-purple-700: #512da8;\n      --paper-deep-purple-800: #4527a0;\n      --paper-deep-purple-900: #311b92;\n      --paper-deep-purple-a100: #b388ff;\n      --paper-deep-purple-a200: #7c4dff;\n      --paper-deep-purple-a400: #651fff;\n      --paper-deep-purple-a700: #6200ea;\n\n      --paper-indigo-50: #e8eaf6;\n      --paper-indigo-100: #c5cae9;\n      --paper-indigo-200: #9fa8da;\n      --paper-indigo-300: #7986cb;\n      --paper-indigo-400: #5c6bc0;\n      --paper-indigo-500: #3f51b5;\n      --paper-indigo-600: #3949ab;\n      --paper-indigo-700: #303f9f;\n      --paper-indigo-800: #283593;\n      --paper-indigo-900: #1a237e;\n      --paper-indigo-a100: #8c9eff;\n      --paper-indigo-a200: #536dfe;\n      --paper-indigo-a400: #3d5afe;\n      --paper-indigo-a700: #304ffe;\n\n      --paper-blue-50: #e3f2fd;\n      --paper-blue-100: #bbdefb;\n      --paper-blue-200: #90caf9;\n      --paper-blue-300: #64b5f6;\n      --paper-blue-400: #42a5f5;\n      --paper-blue-500: #2196f3;\n      --paper-blue-600: #1e88e5;\n      --paper-blue-700: #1976d2;\n      --paper-blue-800: #1565c0;\n      --paper-blue-900: #0d47a1;\n      --paper-blue-a100: #82b1ff;\n      --paper-blue-a200: #448aff;\n      --paper-blue-a400: #2979ff;\n      --paper-blue-a700: #2962ff;\n\n      --paper-light-blue-50: #e1f5fe;\n      --paper-light-blue-100: #b3e5fc;\n      --paper-light-blue-200: #81d4fa;\n      --paper-light-blue-300: #4fc3f7;\n      --paper-light-blue-400: #29b6f6;\n      --paper-light-blue-500: #03a9f4;\n      --paper-light-blue-600: #039be5;\n      --paper-light-blue-700: #0288d1;\n      --paper-light-blue-800: #0277bd;\n      --paper-light-blue-900: #01579b;\n      --paper-light-blue-a100: #80d8ff;\n      --paper-light-blue-a200: #40c4ff;\n      --paper-light-blue-a400: #00b0ff;\n      --paper-light-blue-a700: #0091ea;\n\n      --paper-cyan-50: #e0f7fa;\n      --paper-cyan-100: #b2ebf2;\n      --paper-cyan-200: #80deea;\n      --paper-cyan-300: #4dd0e1;\n      --paper-cyan-400: #26c6da;\n      --paper-cyan-500: #00bcd4;\n      --paper-cyan-600: #00acc1;\n      --paper-cyan-700: #0097a7;\n      --paper-cyan-800: #00838f;\n      --paper-cyan-900: #006064;\n      --paper-cyan-a100: #84ffff;\n      --paper-cyan-a200: #18ffff;\n      --paper-cyan-a400: #00e5ff;\n      --paper-cyan-a700: #00b8d4;\n\n      --paper-teal-50: #e0f2f1;\n      --paper-teal-100: #b2dfdb;\n      --paper-teal-200: #80cbc4;\n      --paper-teal-300: #4db6ac;\n      --paper-teal-400: #26a69a;\n      --paper-teal-500: #009688;\n      --paper-teal-600: #00897b;\n      --paper-teal-700: #00796b;\n      --paper-teal-800: #00695c;\n      --paper-teal-900: #004d40;\n      --paper-teal-a100: #a7ffeb;\n      --paper-teal-a200: #64ffda;\n      --paper-teal-a400: #1de9b6;\n      --paper-teal-a700: #00bfa5;\n\n      --paper-green-50: #e8f5e9;\n      --paper-green-100: #c8e6c9;\n      --paper-green-200: #a5d6a7;\n      --paper-green-300: #81c784;\n      --paper-green-400: #66bb6a;\n      --paper-green-500: #4caf50;\n      --paper-green-600: #43a047;\n      --paper-green-700: #388e3c;\n      --paper-green-800: #2e7d32;\n      --paper-green-900: #1b5e20;\n      --paper-green-a100: #b9f6ca;\n      --paper-green-a200: #69f0ae;\n      --paper-green-a400: #00e676;\n      --paper-green-a700: #00c853;\n\n      --paper-light-green-50: #f1f8e9;\n      --paper-light-green-100: #dcedc8;\n      --paper-light-green-200: #c5e1a5;\n      --paper-light-green-300: #aed581;\n      --paper-light-green-400: #9ccc65;\n      --paper-light-green-500: #8bc34a;\n      --paper-light-green-600: #7cb342;\n      --paper-light-green-700: #689f38;\n      --paper-light-green-800: #558b2f;\n      --paper-light-green-900: #33691e;\n      --paper-light-green-a100: #ccff90;\n      --paper-light-green-a200: #b2ff59;\n      --paper-light-green-a400: #76ff03;\n      --paper-light-green-a700: #64dd17;\n\n      --paper-lime-50: #f9fbe7;\n      --paper-lime-100: #f0f4c3;\n      --paper-lime-200: #e6ee9c;\n      --paper-lime-300: #dce775;\n      --paper-lime-400: #d4e157;\n      --paper-lime-500: #cddc39;\n      --paper-lime-600: #c0ca33;\n      --paper-lime-700: #afb42b;\n      --paper-lime-800: #9e9d24;\n      --paper-lime-900: #827717;\n      --paper-lime-a100: #f4ff81;\n      --paper-lime-a200: #eeff41;\n      --paper-lime-a400: #c6ff00;\n      --paper-lime-a700: #aeea00;\n\n      --paper-yellow-50: #fffde7;\n      --paper-yellow-100: #fff9c4;\n      --paper-yellow-200: #fff59d;\n      --paper-yellow-300: #fff176;\n      --paper-yellow-400: #ffee58;\n      --paper-yellow-500: #ffeb3b;\n      --paper-yellow-600: #fdd835;\n      --paper-yellow-700: #fbc02d;\n      --paper-yellow-800: #f9a825;\n      --paper-yellow-900: #f57f17;\n      --paper-yellow-a100: #ffff8d;\n      --paper-yellow-a200: #ffff00;\n      --paper-yellow-a400: #ffea00;\n      --paper-yellow-a700: #ffd600;\n\n      --paper-amber-50: #fff8e1;\n      --paper-amber-100: #ffecb3;\n      --paper-amber-200: #ffe082;\n      --paper-amber-300: #ffd54f;\n      --paper-amber-400: #ffca28;\n      --paper-amber-500: #ffc107;\n      --paper-amber-600: #ffb300;\n      --paper-amber-700: #ffa000;\n      --paper-amber-800: #ff8f00;\n      --paper-amber-900: #ff6f00;\n      --paper-amber-a100: #ffe57f;\n      --paper-amber-a200: #ffd740;\n      --paper-amber-a400: #ffc400;\n      --paper-amber-a700: #ffab00;\n\n      --paper-orange-50: #fff3e0;\n      --paper-orange-100: #ffe0b2;\n      --paper-orange-200: #ffcc80;\n      --paper-orange-300: #ffb74d;\n      --paper-orange-400: #ffa726;\n      --paper-orange-500: #ff9800;\n      --paper-orange-600: #fb8c00;\n      --paper-orange-700: #f57c00;\n      --paper-orange-800: #ef6c00;\n      --paper-orange-900: #e65100;\n      --paper-orange-a100: #ffd180;\n      --paper-orange-a200: #ffab40;\n      --paper-orange-a400: #ff9100;\n      --paper-orange-a700: #ff6500;\n\n      --paper-deep-orange-50: #fbe9e7;\n      --paper-deep-orange-100: #ffccbc;\n      --paper-deep-orange-200: #ffab91;\n      --paper-deep-orange-300: #ff8a65;\n      --paper-deep-orange-400: #ff7043;\n      --paper-deep-orange-500: #ff5722;\n      --paper-deep-orange-600: #f4511e;\n      --paper-deep-orange-700: #e64a19;\n      --paper-deep-orange-800: #d84315;\n      --paper-deep-orange-900: #bf360c;\n      --paper-deep-orange-a100: #ff9e80;\n      --paper-deep-orange-a200: #ff6e40;\n      --paper-deep-orange-a400: #ff3d00;\n      --paper-deep-orange-a700: #dd2c00;\n\n      --paper-brown-50: #efebe9;\n      --paper-brown-100: #d7ccc8;\n      --paper-brown-200: #bcaaa4;\n      --paper-brown-300: #a1887f;\n      --paper-brown-400: #8d6e63;\n      --paper-brown-500: #795548;\n      --paper-brown-600: #6d4c41;\n      --paper-brown-700: #5d4037;\n      --paper-brown-800: #4e342e;\n      --paper-brown-900: #3e2723;\n\n      --paper-grey-50: #fafafa;\n      --paper-grey-100: #f5f5f5;\n      --paper-grey-200: #eeeeee;\n      --paper-grey-300: #e0e0e0;\n      --paper-grey-400: #bdbdbd;\n      --paper-grey-500: #9e9e9e;\n      --paper-grey-600: #757575;\n      --paper-grey-700: #616161;\n      --paper-grey-800: #424242;\n      --paper-grey-900: #212121;\n\n      --paper-blue-grey-50: #eceff1;\n      --paper-blue-grey-100: #cfd8dc;\n      --paper-blue-grey-200: #b0bec5;\n      --paper-blue-grey-300: #90a4ae;\n      --paper-blue-grey-400: #78909c;\n      --paper-blue-grey-500: #607d8b;\n      --paper-blue-grey-600: #546e7a;\n      --paper-blue-grey-700: #455a64;\n      --paper-blue-grey-800: #37474f;\n      --paper-blue-grey-900: #263238;\n\n      /* opacity for dark text on a light background */\n      --dark-divider-opacity: 0.12;\n      --dark-disabled-opacity: 0.38; /* or hint text or icon */\n      --dark-secondary-opacity: 0.54;\n      --dark-primary-opacity: 0.87;\n\n      /* opacity for light text on a dark background */\n      --light-divider-opacity: 0.12;\n      --light-disabled-opacity: 0.3; /* or hint text or icon */\n      --light-secondary-opacity: 0.7;\n      --light-primary-opacity: 1.0;\n\n    }\n\n  </style>\n</custom-style>\n"]);_templateObject6_3f0e9a00e61411ee9d65b9d111681715=function _templateObject6_3f0e9a00e61411ee9d65b9d111681715(){return data};return data}function _templateObject5_3f0e9a00e61411ee9d65b9d111681715(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        position: absolute;\n        border-radius: inherit;\n        overflow: hidden;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n\n        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,\n         * creating a node (with a position:absolute) in the middle of an event\n         * handler \"interrupts\" that event handler (which happens when the\n         * ripple is created on demand) */\n        pointer-events: none;\n      }\n\n      :host([animating]) {\n        /* This resolves a rendering issue in Chrome (as of 40) where the\n           ripple is not properly clipped by its parent (which may have\n           rounded corners). See: http://jsbin.com/temexa/4\n\n           Note: We only apply this style conditionally. Otherwise, the browser\n           will create a new compositing layer for every ripple element on the\n           page, and that would be bad. */\n        -webkit-transform: translate(0, 0);\n        transform: translate3d(0, 0, 0);\n      }\n\n      #background,\n      #waves,\n      .wave-container,\n      .wave {\n        pointer-events: none;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n\n      #background,\n      .wave {\n        opacity: 0;\n      }\n\n      #waves,\n      .wave {\n        overflow: hidden;\n      }\n\n      .wave-container,\n      .wave {\n        border-radius: 50%;\n      }\n\n      :host(.circle) #background,\n      :host(.circle) #waves {\n        border-radius: 50%;\n      }\n\n      :host(.circle) .wave-container {\n        overflow: hidden;\n      }\n    </style>\n\n    <div id=\"background\"></div>\n    <div id=\"waves\"></div>\n"]);_templateObject5_3f0e9a00e61411ee9d65b9d111681715=function _templateObject5_3f0e9a00e61411ee9d65b9d111681715(){return data};return data}function _templateObject4_3f0e9a00e61411ee9d65b9d111681715(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: var(--iron-overlay-backdrop-background-color, #000);\n        opacity: 0;\n        transition: opacity 0.2s;\n        pointer-events: none;\n        @apply --iron-overlay-backdrop;\n      }\n\n      :host(.opened) {\n        opacity: var(--iron-overlay-backdrop-opacity, 0.6);\n        pointer-events: auto;\n        @apply --iron-overlay-backdrop-opened;\n      }\n    </style>\n\n    <slot></slot>\n"]);_templateObject4_3f0e9a00e61411ee9d65b9d111681715=function _templateObject4_3f0e9a00e61411ee9d65b9d111681715(){return data};return data}function _templateObject3_3f0e9a00e61411ee9d65b9d111681715(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        @apply --layout-inline;\n        @apply --layout-center-center;\n        position: relative;\n\n        vertical-align: middle;\n\n        fill: var(--iron-icon-fill-color, currentcolor);\n        stroke: var(--iron-icon-stroke-color, none);\n\n        width: var(--iron-icon-width, 24px);\n        height: var(--iron-icon-height, 24px);\n        @apply --iron-icon;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n    </style>\n"]);_templateObject3_3f0e9a00e61411ee9d65b9d111681715=function _templateObject3_3f0e9a00e61411ee9d65b9d111681715(){return data};return data}function _templateObject2_3f0e9a00e61411ee9d65b9d111681715(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n\n    <!-- This form is used to collect the elements that should be submitted -->\n    <slot></slot>\n\n    <!-- This form is used for submission -->\n    <form id=\"helper\" action$=\"[[action]]\" method$=\"[[method]]\" enctype$=\"[[enctype]]\"></form>\n"],["\n    <style>\n      :host {\n        display: block;\n      }\n    </style>\n\n    <!-- This form is used to collect the elements that should be submitted -->\n    <slot></slot>\n\n    <!-- This form is used for submission -->\n    <form id=\"helper\" action\\$=\"[[action]]\" method\\$=\"[[method]]\" enctype\\$=\"[[enctype]]\"></form>\n"]);_templateObject2_3f0e9a00e61411ee9d65b9d111681715=function _templateObject2_3f0e9a00e61411ee9d65b9d111681715(){return data};return data}function _templateObject_3f0e9a00e61411ee9d65b9d111681715(){var data=babelHelpers.taggedTemplateLiteral(["\n    <style>\n      :host {\n        position: fixed;\n        top: -120px;\n        right: 0;\n        bottom: -120px;\n        left: 0;\n\n        visibility: hidden;\n\n        transition-property: visibility;\n      }\n\n      :host([opened]) {\n        visibility: visible;\n      }\n\n      :host([persistent]) {\n        width: var(--app-drawer-width, 256px);\n      }\n\n      :host([persistent][position=left]) {\n        right: auto;\n      }\n\n      :host([persistent][position=right]) {\n        left: auto;\n      }\n\n      #contentContainer {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n\n        width: var(--app-drawer-width, 256px);\n        padding: 120px 0;\n\n        transition-property: -webkit-transform;\n        transition-property: transform;\n        -webkit-transform: translate3d(-100%, 0, 0);\n        transform: translate3d(-100%, 0, 0);\n\n        background-color: #FFF;\n\n        @apply --app-drawer-content-container;\n      }\n\n      #contentContainer[persistent] {\n        width: 100%;\n      }\n\n      #contentContainer[position=right] {\n        right: 0;\n        left: auto;\n\n        -webkit-transform: translate3d(100%, 0, 0);\n        transform: translate3d(100%, 0, 0);\n      }\n\n      #contentContainer[swipe-open]::after {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 100%;\n\n        visibility: visible;\n\n        width: 20px;\n\n        content: '';\n      }\n\n      #contentContainer[swipe-open][position=right]::after {\n        right: 100%;\n        left: auto;\n      }\n\n      #contentContainer[opened] {\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0);\n      }\n\n      #scrim {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n\n        transition-property: opacity;\n        -webkit-transform: translateZ(0);\n        transform:  translateZ(0);\n\n        opacity: 0;\n        background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5));\n      }\n\n      #scrim.visible {\n        opacity: 1;\n      }\n\n      :host([no-transition]) #contentContainer {\n        transition-property: none;\n      }\n    </style>\n\n    <div id=\"scrim\" on-click=\"close\"></div>\n\n    <!-- HACK(keanulee): Bind attributes here (in addition to :host) for styling to workaround Safari\n    bug. https://bugs.webkit.org/show_bug.cgi?id=170762 -->\n    <div id=\"contentContainer\" opened$=\"[[opened]]\" persistent$=\"[[persistent]]\" position$=\"[[position]]\" swipe-open$=\"[[swipeOpen]]\">\n      <slot></slot>\n    </div>\n"],["\n    <style>\n      :host {\n        position: fixed;\n        top: -120px;\n        right: 0;\n        bottom: -120px;\n        left: 0;\n\n        visibility: hidden;\n\n        transition-property: visibility;\n      }\n\n      :host([opened]) {\n        visibility: visible;\n      }\n\n      :host([persistent]) {\n        width: var(--app-drawer-width, 256px);\n      }\n\n      :host([persistent][position=left]) {\n        right: auto;\n      }\n\n      :host([persistent][position=right]) {\n        left: auto;\n      }\n\n      #contentContainer {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n\n        width: var(--app-drawer-width, 256px);\n        padding: 120px 0;\n\n        transition-property: -webkit-transform;\n        transition-property: transform;\n        -webkit-transform: translate3d(-100%, 0, 0);\n        transform: translate3d(-100%, 0, 0);\n\n        background-color: #FFF;\n\n        @apply --app-drawer-content-container;\n      }\n\n      #contentContainer[persistent] {\n        width: 100%;\n      }\n\n      #contentContainer[position=right] {\n        right: 0;\n        left: auto;\n\n        -webkit-transform: translate3d(100%, 0, 0);\n        transform: translate3d(100%, 0, 0);\n      }\n\n      #contentContainer[swipe-open]::after {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 100%;\n\n        visibility: visible;\n\n        width: 20px;\n\n        content: '';\n      }\n\n      #contentContainer[swipe-open][position=right]::after {\n        right: 100%;\n        left: auto;\n      }\n\n      #contentContainer[opened] {\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0);\n      }\n\n      #scrim {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n\n        transition-property: opacity;\n        -webkit-transform: translateZ(0);\n        transform:  translateZ(0);\n\n        opacity: 0;\n        background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5));\n      }\n\n      #scrim.visible {\n        opacity: 1;\n      }\n\n      :host([no-transition]) #contentContainer {\n        transition-property: none;\n      }\n    </style>\n\n    <div id=\"scrim\" on-click=\"close\"></div>\n\n    <!-- HACK(keanulee): Bind attributes here (in addition to :host) for styling to workaround Safari\n    bug. https://bugs.webkit.org/show_bug.cgi?id=170762 -->\n    <div id=\"contentContainer\" opened\\$=\"[[opened]]\" persistent\\$=\"[[persistent]]\" position\\$=\"[[position]]\" swipe-open\\$=\"[[swipeOpen]]\">\n      <slot></slot>\n    </div>\n"]);_templateObject_3f0e9a00e61411ee9d65b9d111681715=function _templateObject_3f0e9a00e61411ee9d65b9d111681715(){return data};return data}(0,_shopApp.Polymer)({_template:(0,_shopApp.html$1)(_templateObject_3f0e9a00e61411ee9d65b9d111681715()),is:"app-drawer",properties:{/**
     * The opened state of the drawer.
     */opened:{type:Boolean,value:/* ignoreName */!1/* skipSlots */ /* skipSlots */,notify:!0,reflectToAttribute:!0},/**
     * The drawer does not have a scrim and cannot be swiped close.
     */persistent:{type:Boolean,value:!1,reflectToAttribute:!0},/**
     * The transition duration of the drawer in milliseconds.
     */transitionDuration:{type:Number,value:200},/**
     * The alignment of the drawer on the screen ('left', 'right', 'start' or
     * 'end'). 'start' computes to left and 'end' to right in LTR layout and
     * vice versa in RTL layout.
     */align:{type:String,value:"left"},/**
     * The computed, read-only position of the drawer on the screen ('left' or
     * 'right').
     */position:{type:String,readOnly:!0,reflectToAttribute:!0},/**
     * Create an area at the edge of the screen to swipe open the drawer.
     */swipeOpen:{type:Boolean,value:!1,reflectToAttribute:!0},/**
     * Trap keyboard focus when the drawer is opened and not persistent.
     */noFocusTrap:{type:Boolean,value:!1},/**
     * Disables swiping on the drawer.
     */disableSwipe:{type:Boolean,value:!1}},observers:["resetLayout(position, isAttached)","_resetPosition(align, isAttached)","_styleTransitionDuration(transitionDuration)","_openedPersistentChanged(opened, persistent)"],_translateOffset:0,_trackDetails:null,_drawerState:0,_boundEscKeydownHandler:null,_firstTabStop:null,_lastTabStop:null,attached:function attached(){(0,_shopApp.afterNextRender)(this,function(){this._boundEscKeydownHandler=this._escKeydownHandler.bind(this);this.addEventListener("keydown",this._tabKeydownHandler.bind(this));// Only listen for horizontal track so you can vertically scroll
// inside the drawer.
this.listen(this,"track","_track");this.setScrollDirection("y")});this.fire("app-reset-layout")},detached:function detached(){document.removeEventListener("keydown",this._boundEscKeydownHandler)},/**
   * Opens the drawer.
   */open:function open(){this.opened=!0},/**
   * Closes the drawer.
   */close:function close(){this.opened=!1},/**
   * Toggles the drawer open and close.
   */toggle:function toggle(){this.opened=!this.opened},/**
   * Gets the width of the drawer.
   *
   * @return {number} The width of the drawer in pixels.
   */getWidth:function getWidth(){return this._savedWidth||this.$.contentContainer.offsetWidth},_isRTL:function _isRTL(){return"rtl"===window.getComputedStyle(this).direction},_resetPosition:function _resetPosition(){switch(this.align){case"start":this._setPosition(this._isRTL()?"right":"left");return;case"end":this._setPosition(this._isRTL()?"left":"right");return;}this._setPosition(this.align)},_escKeydownHandler:function _escKeydownHandler(event){var ESC_KEYCODE=27;if(event.keyCode===ESC_KEYCODE){// Prevent any side effects if app-drawer closes.
event.preventDefault();this.close()}},_track:function _track(event){if(this.persistent||this.disableSwipe){return}// Disable user selection on desktop.
event.preventDefault();switch(event.detail.state){case"start":this._trackStart(event);break;case"track":this._trackMove(event);break;case"end":this._trackEnd(event);break;}},_trackStart:function _trackStart(event){this._drawerState=this._DRAWER_STATE.TRACKING;var rect=this.$.contentContainer.getBoundingClientRect();this._savedWidth=rect.width;if("left"===this.position){this._translateOffset=rect.left}else{this._translateOffset=rect.right-window.innerWidth}this._trackDetails=[];// Disable transitions since style attributes will reflect user track
// events.
this._styleTransitionDuration(0);this.style.visibility="visible"},_trackMove:function _trackMove(event){this._translateDrawer(event.detail.dx+this._translateOffset);// Use Date.now() since event.timeStamp is inconsistent across browsers
// (e.g. most browsers use milliseconds but FF 44 uses microseconds).
this._trackDetails.push({dx:event.detail.dx,timeStamp:Date.now()})},_trackEnd:function _trackEnd(event){var x=event.detail.dx+this._translateOffset,drawerWidth=this.getWidth(),isPositionLeft="left"===this.position,isInEndState=isPositionLeft?0<=x||x<=-drawerWidth:0>=x||x>=drawerWidth;if(!isInEndState){// No longer need the track events after this method returns - allow them
// to be GC'd.
var trackDetails=this._trackDetails;this._trackDetails=null;this._flingDrawer(event,trackDetails);if(this._drawerState===this._DRAWER_STATE.FLINGING){return}}// If the drawer is not flinging, toggle the opened state based on the
// position of the drawer.
var halfWidth=drawerWidth/2;if(event.detail.dx<-halfWidth){this.opened="right"===this.position}else if(event.detail.dx>halfWidth){this.opened="left"===this.position}if(isInEndState){this.debounce("_resetDrawerState",this._resetDrawerState)}else{this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration)}this._styleTransitionDuration(this.transitionDuration);this._resetDrawerTranslate();this.style.visibility=""},_calculateVelocity:function _calculateVelocity(event,trackDetails){// Find the oldest track event that is within 100ms using binary search.
var now=Date.now(),timeLowerBound=now-100,trackDetail,min=0,max=trackDetails.length-1;while(min<=max){// Floor of average of min and max.
var mid=min+max>>1,d=trackDetails[mid];if(d.timeStamp>=timeLowerBound){trackDetail=d;max=mid-1}else{min=mid+1}}if(trackDetail){var dx=event.detail.dx-trackDetail.dx,dt=now-trackDetail.timeStamp||1;return dx/dt}return 0},_flingDrawer:function _flingDrawer(event,trackDetails){var velocity=this._calculateVelocity(event,trackDetails);// Do not fling if velocity is not above a threshold.
if(Math.abs(velocity)<this._MIN_FLING_THRESHOLD){return}this._drawerState=this._DRAWER_STATE.FLINGING;var x=event.detail.dx+this._translateOffset,drawerWidth=this.getWidth(),isPositionLeft="left"===this.position,isVelocityPositive=0<velocity,isClosingLeft=!isVelocityPositive&&isPositionLeft,isClosingRight=isVelocityPositive&&!isPositionLeft,dx;if(isClosingLeft){dx=-(x+drawerWidth)}else if(isClosingRight){dx=drawerWidth-x}else{dx=-x}// Enforce a minimum transition velocity to make the drawer feel snappy.
if(isVelocityPositive){velocity=Math.max(velocity,this._MIN_TRANSITION_VELOCITY);this.opened="left"===this.position}else{velocity=Math.min(velocity,-this._MIN_TRANSITION_VELOCITY);this.opened="right"===this.position}// Calculate the amount of time needed to finish the transition based on the
// initial slope of the timing function.
var t=this._FLING_INITIAL_SLOPE*dx/velocity;this._styleTransitionDuration(t);this._styleTransitionTimingFunction(this._FLING_TIMING_FUNCTION);this._resetDrawerTranslate();this.debounce("_resetDrawerState",this._resetDrawerState,t)},_styleTransitionDuration:function _styleTransitionDuration(duration){this.style.transitionDuration=duration+"ms";this.$.contentContainer.style.transitionDuration=duration+"ms";this.$.scrim.style.transitionDuration=duration+"ms"},_styleTransitionTimingFunction:function _styleTransitionTimingFunction(timingFunction){this.$.contentContainer.style.transitionTimingFunction=timingFunction;this.$.scrim.style.transitionTimingFunction=timingFunction},_translateDrawer:function _translateDrawer(x){var drawerWidth=this.getWidth();if("left"===this.position){x=Math.max(-drawerWidth,Math.min(x,0));this.$.scrim.style.opacity=1+x/drawerWidth}else{x=Math.max(0,Math.min(x,drawerWidth));this.$.scrim.style.opacity=1-x/drawerWidth}this.translate3d(x+"px","0","0",this.$.contentContainer)},_resetDrawerTranslate:function _resetDrawerTranslate(){this.$.scrim.style.opacity="";this.transform("",this.$.contentContainer)},_resetDrawerState:function _resetDrawerState(){var oldState=this._drawerState;// If the drawer was flinging, we need to reset the style attributes.
if(oldState===this._DRAWER_STATE.FLINGING){this._styleTransitionDuration(this.transitionDuration);this._styleTransitionTimingFunction("");this.style.visibility=""}this._savedWidth=null;if(this.opened){this._drawerState=this.persistent?this._DRAWER_STATE.OPENED_PERSISTENT:this._DRAWER_STATE.OPENED}else{this._drawerState=this._DRAWER_STATE.CLOSED}if(oldState!==this._drawerState){if(this._drawerState===this._DRAWER_STATE.OPENED){this._setKeyboardFocusTrap();document.addEventListener("keydown",this._boundEscKeydownHandler);document.body.style.overflow="hidden"}else{document.removeEventListener("keydown",this._boundEscKeydownHandler);document.body.style.overflow=""}// Don't fire the event on initial load.
if(oldState!==this._DRAWER_STATE.INIT){this.fire("app-drawer-transitioned")}}},/**
   * Resets the layout.
   *
   * @method resetLayout
   */resetLayout:function resetLayout(){this.fire("app-reset-layout")},_setKeyboardFocusTrap:function _setKeyboardFocusTrap(){if(this.noFocusTrap){return}// NOTE: Unless we use /deep/ (which we shouldn't since it's deprecated),
// this will not select focusable elements inside shadow roots.
var focusableElementsSelector=["a[href]:not([tabindex=\"-1\"])","area[href]:not([tabindex=\"-1\"])","input:not([disabled]):not([tabindex=\"-1\"])","select:not([disabled]):not([tabindex=\"-1\"])","textarea:not([disabled]):not([tabindex=\"-1\"])","button:not([disabled]):not([tabindex=\"-1\"])","iframe:not([tabindex=\"-1\"])","[tabindex]:not([tabindex=\"-1\"])","[contentEditable=true]:not([tabindex=\"-1\"])"].join(","),focusableElements=(0,_shopApp.dom)(this).querySelectorAll(focusableElementsSelector);if(0<focusableElements.length){this._firstTabStop=focusableElements[0];this._lastTabStop=focusableElements[focusableElements.length-1]}else{// Reset saved tab stops when there are no focusable elements in the
// drawer.
this._firstTabStop=null;this._lastTabStop=null}// Focus on app-drawer if it has non-zero tabindex. Otherwise, focus the
// first focusable element in the drawer, if it exists. Use the tabindex
// attribute since the this.tabIndex property in IE/Edge returns 0 (instead
// of -1) when the attribute is not set.
var tabindex=this.getAttribute("tabindex");if(tabindex&&-1<parseInt(tabindex,10)){this.focus()}else if(this._firstTabStop){this._firstTabStop.focus()}},_tabKeydownHandler:function _tabKeydownHandler(event){if(this.noFocusTrap){return}var TAB_KEYCODE=9;if(this._drawerState===this._DRAWER_STATE.OPENED&&event.keyCode===TAB_KEYCODE){if(event.shiftKey){if(this._firstTabStop&&(0,_shopApp.dom)(event).localTarget===this._firstTabStop){event.preventDefault();this._lastTabStop.focus()}}else{if(this._lastTabStop&&(0,_shopApp.dom)(event).localTarget===this._lastTabStop){event.preventDefault();this._firstTabStop.focus()}}}},_openedPersistentChanged:function _openedPersistentChanged(opened,persistent){this.toggleClass("visible",opened&&!persistent,this.$.scrim);// Use a debounce timer instead of transitionend since transitionend won't
// fire when app-drawer is display: none.
this.debounce("_resetDrawerState",this._resetDrawerState,this.transitionDuration)},_MIN_FLING_THRESHOLD:.2,_MIN_TRANSITION_VELOCITY:1.2,_FLING_TIMING_FUNCTION:"cubic-bezier(0.667, 1, 0.667, 1)",_FLING_INITIAL_SLOPE:1.5,_DRAWER_STATE:{INIT:0,OPENED:1,OPENED_PERSISTENT:2,CLOSED:3,TRACKING:4,FLINGING:5/**
                 * Fired when the layout of app-drawer has changed.
                 *
                 * @event app-reset-layout
                 */ /**
                     * Fired when app-drawer has finished transitioning.
                     *
                     * @event app-drawer-transitioned
                     */}});var SPLICES_RX=/\.splices$/,LENGTH_RX=/\.length$/,NUMBER_RX=/\.?#?([0-9]+)$/,AppStorageBehavior={properties:{/**
     * The data to synchronize.
     */data:{type:Object,notify:!0,value:function value(){return this.zeroValue}},/**
     * If this is true transactions will happen one after the other,
     * never in parallel.
     *
     * Specifically, no transaction will begin until every previously
     * enqueued transaction by this element has completed.
     *
     * If it is false, new transactions will be executed as they are
     * received.
     */sequentialTransactions:{type:Boolean,value:!1},/**
     * When true, will perform detailed logging.
     */log:{type:Boolean,value:!1}},observers:["__dataChanged(data.*)"],created:function created(){this.__initialized=!1;this.__syncingToMemory=!1;this.__initializingStoredValue=null;this.__transactionQueueAdvances=Promise.resolve()},ready:function ready(){this._initializeStoredValue()},/**
   * Override this getter to return true if the value has never been
   * persisted to storage.
   *
   * @return {boolean}
   */get isNew(){return!0},/**
   * A promise that will resolve once all queued transactions
   * have completed.
   *
   * This field is updated as new transactions are enqueued, so it will
   * only wait for transactions which were enqueued when the field
   * was accessed.
   *
   * This promise never rejects.
   *
   * @return {Promise}
   */get transactionsComplete(){return this.__transactionQueueAdvances},/**
   * Override this getter to define the default value to use when
   * there's no data stored.
   *
   * @return {*}
   */get zeroValue(){return void 0},/**
   * Override this method.
   *
   * If the data value represented by this storage instance is new, this
   * method generates an attempt to write the value to storage.
   *
   *
   * @param {*} args
   * @return {Promise} a Promise that settles only once the write has.
   */saveValue:function saveValue(args){return Promise.resolve()},/**
   * Optional. Override this method to clear out the mapping of this
   * storage object and a logical location within storage.
   *
   * If this method is supported, after it's called, isNew() should be
   * true.
   */reset:function reset(){},/**
   * Remove the data from storage.
   *
   * @return {Promise} A promise that settles once the destruction is
   *   complete.
   */destroy:function destroy(){this.data=this.zeroValue;return this.saveValue()},/**
   * Perform the initial sync between storage and memory. This method
   * is called automatically while the element is being initialized.
   * Implementations may override it.
   *
   * If an implementation intends to call this method, it should instead
   * call _initializeStoredValue, which provides reentrancy protection.
   *
   * @return {Promise} A promise that settles once this process is
   *     complete.
   */initializeStoredValue:function initializeStoredValue(){if(this.isNew){return Promise.resolve()}// If this is not a "new" model, then we should attempt
// to read an initial value from storage:
return this._getStoredValue("data").then(function(data){this._log("Got stored value!",data,this.data);if(null==data){return this._setStoredValue("data",this.data||this.zeroValue)}else{this.syncToMemory(function(){this.set("data",data)})}}.bind(this))},/**
   * Override this method to implement reading a value from storage.
   *
   *
   * @param {string} storagePath The path (through storage) of the value to
   *   create, relative to the root of storage associated with this instance.
   * @return {Promise} A promise that resolves with the canonical value stored
   *   at the provided path when the transaction has completed. _If there is no
   *   such value at the provided path through storage, then the promise will
   *   resolve to `undefined`._ The promise will be rejected if the transaction
   *   fails for any reason.
   */getStoredValue:function getStoredValue(storagePath){return Promise.resolve()},/**
   * Override this method to implement creating and updating
   * stored values.
   *
   *
   * @param {string} storagePath The path of the value to update, relative
   *   to the root storage path configured for this instance.
   * @param {*} value The updated in-memory value to apply to the stored value
   *   at the provided path.
   * @return {Promise} A promise that resolves with the canonical value stored
   *   at the provided path when the transaction has completed. The promise
   *   will be rejected if the transaction fails for any reason.
   */setStoredValue:function setStoredValue(storagePath,value){return Promise.resolve(value)},/**
   * Maps a Polymer databinding path to the corresponding path in the
   * storage system. Override to define a custom mapping.
   *
   * The inverse of storagePathToMemoryPath.
   *
   * @param {string} path An in-memory path through a storage object.
   * @return {string} The provided path mapped to the equivalent location in
   *   storage. This mapped version of the path is suitable for use with the
   *   CRUD operations on both memory and storage.
   */memoryPathToStoragePath:function memoryPathToStoragePath(path){return path},/**
   * Maps a storage path to the corresponding Polymer databinding path.
   * Override to define a custom mapping.
   *
   * The inverse of memoryPathToStoragePath.
   *
   * @param {string} path The storage path through a storage object.
   * @return {string} The provided path through storage mapped to the
   *   equivalent Polymer path through the in-memory representation of storage.
   */storagePathToMemoryPath:function storagePathToMemoryPath(path){return path},/**
   * Enables performing transformations on the in-memory representation of
   * storage without activating observers that will cause those
   * transformations to be re-applied to the storage backend. This is useful
   * for preventing redundant (or cyclical) application of transformations.
   *
   * @param {Function} operation A function that will perform the desired
   *   transformation. It will be called synchronously, when it is safe to
   *   apply the transformation.
   */syncToMemory:function syncToMemory(operation){if(this.__syncingToMemory){return}this._group("Sync to memory.");this.__syncingToMemory=!0;operation.call(this);this.__syncingToMemory=!1;this._groupEnd("Sync to memory.")},/**
   * A convenience method. Returns true iff value is null, undefined,
   * an empty array, or an object with no keys.
   */valueIsEmpty:function valueIsEmpty(value){if(Array.isArray(value)){return 0===value.length}else if(Object.prototype.isPrototypeOf(value)){return 0===Object.keys(value).length}else{return null==value}},/**
   * Like `getStoredValue` but called with a Polymer path rather than
   * a storage path.
   *
   * @param {string} path The Polymer path to get.
   * @return {Promise} A Promise of the value stored at that path.
   */_getStoredValue:function _getStoredValue(path){return this.getStoredValue(this.memoryPathToStoragePath(path))},/**
   * Like `setStoredValue` but called with a Polymer path rather than
   * a storage path.
   *
   * @param {string} path The Polymer path to update.
   * @param {*} value The updated in-memory value to apply to the stored value
   *   at the provided path.
   * @return {Promise} A promise that resolves with the canonical value stored
   *   at the provided path when the transaction has completed. The promise
   *   will be rejected if the transaction fails for any reason.
   */_setStoredValue:function _setStoredValue(path,value){return this.setStoredValue(this.memoryPathToStoragePath(path),value)},/**
   * Enqueues the given function in the transaction queue.
   *
   * The transaction queue allows for optional parallelism/sequentiality
   * via the `sequentialTransactions` boolean property, as well as giving
   * the user a convenient way to wait for all pending transactions to
   * finish.
   *
   * The given function may be called immediately or after an arbitrary
   * delay. Its `this` context will be bound to the element.
   *
   * If the transaction performs any asynchronous operations it must
   * return a promise.
   *
   * @param {Function} transaction A function implementing the transaction.
   * @return {Promise} A promise that resolves once the transaction has
   *   finished. This promise will never reject.
   */_enqueueTransaction:function _enqueueTransaction(transaction){if(this.sequentialTransactions){transaction=transaction.bind(this)}else{var result=transaction.call(this);transaction=function transaction(){return result}}return this.__transactionQueueAdvances=this.__transactionQueueAdvances.then(transaction).catch(function(error){this._error("Error performing queued transaction.",error)}.bind(this))},/**
   * A wrapper around `console.log`.
   */_log:function _log(){if(this.log){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key]}console.log.apply(console,args)}},/**
   * A wrapper around `console.error`.
   */_error:function _error(){if(this.log){for(var _len2=arguments.length,args=Array(_len2),_key2=0;_key2<_len2;_key2++){args[_key2]=arguments[_key2]}console.error.apply(console,args)}},/**
   * A wrapper around `console.group`.
   */_group:function _group(){if(this.log){for(var _len3=arguments.length,args=Array(_len3),_key3=0;_key3<_len3;_key3++){args[_key3]=arguments[_key3]}console.group.apply(console,args)}},/**
   * A wrapper around `console.groupEnd`.
   */_groupEnd:function _groupEnd(){if(this.log){for(var _len4=arguments.length,args=Array(_len4),_key4=0;_key4<_len4;_key4++){args[_key4]=arguments[_key4]}console.groupEnd.apply(console,args)}},/**
   * A reentrancy-save wrapper around `this.initializeStoredValue`.
   * Prefer calling this method over that one.
   *
   * @return {Promise} The result of calling `initializeStoredValue`,
   *   or `undefined` if called while initializing.
   */_initializeStoredValue:function _initializeStoredValue(){if(this.__initializingStoredValue){return}this._group("Initializing stored value.");var initializingStoredValue=this.__initializingStoredValue=this.initializeStoredValue().then(function(){this.__initialized=!0;this.__initializingStoredValue=null;this._groupEnd("Initializing stored value.")}.bind(this)).catch(function(e){this.__initializingStoredValue=null;this._groupEnd("Initializing stored value.")}.bind(this));return this._enqueueTransaction(function(){return initializingStoredValue})},__dataChanged:function __dataChanged(change){if(this.isNew||this.__syncingToMemory||!this.__initialized||this.__pathCanBeIgnored(change.path)){return}var path=this.__normalizeMemoryPath(change.path),value=change.value,indexSplices=value&&value.indexSplices;this._enqueueTransaction(function(){this._log("Setting",path+":",indexSplices||value);if(indexSplices&&this.__pathIsSplices(path)){path=this.__parentPath(path);value=this.get(path)}return this._setStoredValue(path,value)})},__normalizeMemoryPath:function __normalizeMemoryPath(path){for(var parts=path.split("."),parentPath=[],currentPath=[],normalizedPath=[],index,i=0;i<parts.length;++i){currentPath.push(parts[i]);if(/^#/.test(parts[i])){normalizedPath.push(this.get(parentPath).indexOf(this.get(currentPath)))}else{normalizedPath.push(parts[i])}parentPath.push(parts[i])}return normalizedPath.join(".")},__parentPath:function __parentPath(path){var parentPath=path.split(".");return parentPath.slice(0,parentPath.length-1).join(".")},__pathCanBeIgnored:function __pathCanBeIgnored(path){return LENGTH_RX.test(path)&&Array.isArray(this.get(this.__parentPath(path)))},__pathIsSplices:function __pathIsSplices(path){return SPLICES_RX.test(path)&&Array.isArray(this.get(this.__parentPath(path)))},__pathRefersToArray:function __pathRefersToArray(path){return(SPLICES_RX.test(path)||LENGTH_RX.test(path))&&Array.isArray(this.get(this.__parentPath(path)))},__pathTailToIndex:function __pathTailToIndex(path){var tail=path.split(".").pop();return window.parseInt(tail.replace(NUMBER_RX,"$1"),10)}};_exports.AppStorageBehavior=AppStorageBehavior;var appStorageBehavior={AppStorageBehavior:AppStorageBehavior};_exports.$appStorageBehavior=appStorageBehavior;(0,_shopApp.Polymer)({is:"app-localstorage-document",behaviors:[AppStorageBehavior],properties:{/**
     * Defines the logical location to store the data.
     *
     * @type{String}
     */key:{type:String,notify:!0},/**
     * If true, the data will automatically be cleared from storage when
     * the page session ends (i.e. when the user has navigated away from
     * the page).
     */sessionOnly:{type:Boolean,value:!1},/**
     * Either `window.localStorage` or `window.sessionStorage`, depending on
     * `this.sessionOnly`.
     */storage:{type:Object,computed:"__computeStorage(sessionOnly)"}},observers:["__storageSourceChanged(storage, key)"],attached:function attached(){this.listen(window,"storage","__onStorage");this.listen(window.top,"app-local-storage-changed","__onAppLocalStorageChanged")},detached:function detached(){this.unlisten(window,"storage","__onStorage");this.unlisten(window.top,"app-local-storage-changed","__onAppLocalStorageChanged")},get isNew(){return!this.key},/**
   * Stores a value at the given key, and if successful, updates this.key.
   *
   * @param {*} key The new key to use.
   * @return {Promise}
   */saveValue:function saveValue(key){try{this.__setStorageValue(/*{@type if (key ty){String}}*/key,this.data)}catch(e){return Promise.reject(e)}this.key=/** @type {String} */key;return Promise.resolve()},reset:function reset(){this.key=null;this.data=this.zeroValue},destroy:function destroy(){try{this.storage.removeItem(this.key);this.reset()}catch(e){return Promise.reject(e)}return Promise.resolve()},getStoredValue:function getStoredValue(path){var value;if(null!=this.key){try{value=this.__parseValueFromStorage();if(null!=value){value=this.get(path,{data:value})}else{value=void 0}}catch(e){return Promise.reject(e)}}return Promise.resolve(value)},setStoredValue:function setStoredValue(path,value){if(null!=this.key){try{this.__setStorageValue(this.key,this.data)}catch(e){return Promise.reject(e)}this.fire("app-local-storage-changed",this,{node:window.top})}return Promise.resolve(value)},__computeStorage:function __computeStorage(sessionOnly){return sessionOnly?window.sessionStorage:window.localStorage},__storageSourceChanged:function __storageSourceChanged(storage,key){this._initializeStoredValue()},__onStorage:function __onStorage(event){if(event.key!==this.key||event.storageArea!==this.storage){return}this.syncToMemory(function(){this.set("data",this.__parseValueFromStorage())})},__onAppLocalStorageChanged:function __onAppLocalStorageChanged(event){if(event.detail===this||event.detail.key!==this.key||event.detail.storage!==this.storage){return}this.syncToMemory(function(){this.set("data",event.detail.data)})},__parseValueFromStorage:function __parseValueFromStorage(){try{return JSON.parse(this.storage.getItem(this.key))}catch(e){console.error("Failed to parse value from storage for",this.key)}},__setStorageValue:function __setStorageValue(key,value){if("undefined"===typeof value)value=null;this.storage.setItem(key,JSON.stringify(value))}});var KEY_IDENTIFIER={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},KEY_CODE={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},MODIFIER_KEYS={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},KEY_CHAR=/[a-z0-9*]/,IDENT_CHAR=/U\+/,ARROW_KEY=/^arrow/,SPACE_KEY=/^space(bar)?/,ESC_KEY=/^escape$/;/**
    * Special table for KeyboardEvent.keyCode.
    * KeyboardEvent.keyIdentifier is better, and KeyBoardEvent.key is even better
    * than that.
    *
    * Values from:
    * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent.keyCode#Value_of_keyCode
    */ /**
                           * Transforms the key.
                           * @param {string} key The KeyBoardEvent.key
                           * @param {Boolean} [noSpecialChars] Limits the transformation to
                           * alpha-numeric characters.
                           */function transformKey(key,noSpecialChars){var validKey="";if(key){var lKey=key.toLowerCase();if(" "===lKey||SPACE_KEY.test(lKey)){validKey="space"}else if(ESC_KEY.test(lKey)){validKey="esc"}else if(1==lKey.length){if(!noSpecialChars||KEY_CHAR.test(lKey)){validKey=lKey}}else if(ARROW_KEY.test(lKey)){validKey=lKey.replace("arrow","")}else if("multiply"==lKey){// numpad '*' can map to Multiply on IE/Windows
validKey="*"}else{validKey=lKey}}return validKey}function transformKeyIdentifier(keyIdent){var validKey="";if(keyIdent){if(keyIdent in KEY_IDENTIFIER){validKey=KEY_IDENTIFIER[keyIdent]}else if(IDENT_CHAR.test(keyIdent)){keyIdent=parseInt(keyIdent.replace("U+","0x"),16);validKey=String.fromCharCode(keyIdent).toLowerCase()}else{validKey=keyIdent.toLowerCase()}}return validKey}function transformKeyCode(keyCode){var validKey="";if(+keyCode){if(65<=keyCode&&90>=keyCode){// ascii a-z
// lowercase is 32 offset from uppercase
validKey=String.fromCharCode(32+keyCode)}else if(112<=keyCode&&123>=keyCode){// function keys f1-f12
validKey="f"+(keyCode-112+1)}else if(48<=keyCode&&57>=keyCode){// top 0-9 keys
validKey=keyCode-48+""}else if(96<=keyCode&&105>=keyCode){// num pad 0-9
validKey=keyCode-96+""}else{validKey=KEY_CODE[keyCode]}}return validKey}/**
   * Calculates the normalized key for a KeyboardEvent.
   * @param {KeyboardEvent} keyEvent
   * @param {Boolean} [noSpecialChars] Set to true to limit keyEvent.key
   * transformation to alpha-numeric chars. This is useful with key
   * combinations like shift + 2, which on FF for MacOS produces
   * keyEvent.key = @
   * To get 2 returned, set noSpecialChars = true
   * To get @ returned, set noSpecialChars = false
   */function normalizedKeyForEvent(keyEvent,noSpecialChars){// Fall back from .key, to .detail.key for artifical keyboard events,
// and then to deprecated .keyIdentifier and .keyCode.
if(keyEvent.key){return transformKey(keyEvent.key,noSpecialChars)}if(keyEvent.detail&&keyEvent.detail.key){return transformKey(keyEvent.detail.key,noSpecialChars)}return transformKeyIdentifier(keyEvent.keyIdentifier)||transformKeyCode(keyEvent.keyCode)||""}function keyComboMatchesEvent(keyCombo,event){// For combos with modifiers we support only alpha-numeric keys
var keyEvent=normalizedKeyForEvent(event,keyCombo.hasModifiers);return keyEvent===keyCombo.key&&(!keyCombo.hasModifiers||!!event.shiftKey===!!keyCombo.shiftKey&&!!event.ctrlKey===!!keyCombo.ctrlKey&&!!event.altKey===!!keyCombo.altKey&&!!event.metaKey===!!keyCombo.metaKey)}function parseKeyComboString(keyComboString){if(1===keyComboString.length){return{combo:keyComboString,key:keyComboString,event:"keydown"}}return keyComboString.split("+").reduce(function(parsedKeyCombo,keyComboPart){var eventParts=keyComboPart.split(":"),keyName=eventParts[0],event=eventParts[1];if(keyName in MODIFIER_KEYS){parsedKeyCombo[MODIFIER_KEYS[keyName]]=!0;parsedKeyCombo.hasModifiers=!0}else{parsedKeyCombo.key=keyName;parsedKeyCombo.event=event||"keydown"}return parsedKeyCombo},{combo:keyComboString.split(":").shift()})}function parseEventString(eventString){return eventString.trim().split(" ").map(function(keyComboString){return parseKeyComboString(keyComboString)})}/**
   * `Polymer.IronA11yKeysBehavior` provides a normalized interface for processing
   * keyboard commands that pertain to [WAI-ARIA best
   * practices](http://www.w3.org/TR/wai-aria-practices/#kbd_general_binding). The
   * element takes care of browser differences with respect to Keyboard events and
   * uses an expressive syntax to filter key presses.
   *
   * Use the `keyBindings` prototype property to express what combination of keys
   * will trigger the callback. A key binding has the format
   * `"KEY+MODIFIER:EVENT": "callback"` (`"KEY": "callback"` or
   * `"KEY:EVENT": "callback"` are valid as well). Some examples:
   *
   *      keyBindings: {
   *        'space': '_onKeydown', // same as 'space:keydown'
   *        'shift+tab': '_onKeydown',
   *        'enter:keypress': '_onKeypress',
   *        'esc:keyup': '_onKeyup'
   *      }
   *
   * The callback will receive with an event containing the following information
   * in `event.detail`:
   *
   *      _onKeydown: function(event) {
   *        console.log(event.detail.combo); // KEY+MODIFIER, e.g. "shift+tab"
   *        console.log(event.detail.key); // KEY only, e.g. "tab"
   *        console.log(event.detail.event); // EVENT, e.g. "keydown"
   *        console.log(event.detail.keyboardEvent); // the original KeyboardEvent
   *      }
   *
   * Use the `keyEventTarget` attribute to set up event handlers on a specific
   * node.
   *
   * See the [demo source
   * code](https://github.com/PolymerElements/iron-a11y-keys-behavior/blob/master/demo/x-key-aware.html)
   * for an example.
   *
   * @demo demo/index.html
   * @polymerBehavior
   */var IronA11yKeysBehavior={properties:{/**
     * The EventTarget that will be firing relevant KeyboardEvents. Set it to
     * `null` to disable the listeners.
     * @type {?EventTarget}
     */keyEventTarget:{type:Object,value:function value(){return this}},/**
     * If true, this property will cause the implementing element to
     * automatically stop propagation on any handled KeyboardEvents.
     */stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function value(){return[]}},// We use this due to a limitation in IE10 where instances will have
// own properties of everything on the "prototype".
_imperativeKeyBindings:{type:Object,value:function value(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],/**
   * To be used to express what combination of keys  will trigger the relative
   * callback. e.g. `keyBindings: { 'esc': '_onEscPressed'}`
   * @type {!Object}
   */keyBindings:{},registered:function registered(){this._prepKeyBindings()},attached:function attached(){this._listenKeyEventListeners()},detached:function detached(){this._unlistenKeyEventListeners()},/**
   * Can be used to imperatively add a key binding to the implementing
   * element. This is the imperative equivalent of declaring a keybinding
   * in the `keyBindings` prototype property.
   *
   * @param {string} eventString
   * @param {string} handlerName
   */addOwnKeyBinding:function addOwnKeyBinding(eventString,handlerName){this._imperativeKeyBindings[eventString]=handlerName;this._prepKeyBindings();this._resetKeyEventListeners()},/**
   * When called, will remove all imperatively-added key bindings.
   */removeOwnKeyBindings:function removeOwnKeyBindings(){this._imperativeKeyBindings={};this._prepKeyBindings();this._resetKeyEventListeners()},/**
   * Returns true if a keyboard event matches `eventString`.
   *
   * @param {KeyboardEvent} event
   * @param {string} eventString
   * @return {boolean}
   */keyboardEventMatchesKeys:function keyboardEventMatchesKeys(event,eventString){for(var keyCombos=parseEventString(eventString),i=0;i<keyCombos.length;++i){if(keyComboMatchesEvent(keyCombos[i],event)){return!0}}return!1},_collectKeyBindings:function _collectKeyBindings(){var keyBindings=this.behaviors.map(function(behavior){return behavior.keyBindings});if(-1===keyBindings.indexOf(this.keyBindings)){keyBindings.push(this.keyBindings)}return keyBindings},_prepKeyBindings:function _prepKeyBindings(){this._keyBindings={};this._collectKeyBindings().forEach(function(keyBindings){for(var eventString in keyBindings){this._addKeyBinding(eventString,keyBindings[eventString])}},this);for(var eventString in this._imperativeKeyBindings){this._addKeyBinding(eventString,this._imperativeKeyBindings[eventString])}// Give precedence to combos with modifiers to be checked first.
for(var eventName in this._keyBindings){this._keyBindings[eventName].sort(function(kb1,kb2){var b1=kb1[0].hasModifiers,b2=kb2[0].hasModifiers;return b1===b2?0:b1?-1:1})}},_addKeyBinding:function _addKeyBinding(eventString,handlerName){parseEventString(eventString).forEach(function(keyCombo){this._keyBindings[keyCombo.event]=this._keyBindings[keyCombo.event]||[];this._keyBindings[keyCombo.event].push([keyCombo,handlerName])},this)},_resetKeyEventListeners:function _resetKeyEventListeners(){this._unlistenKeyEventListeners();if(this.isAttached){this._listenKeyEventListeners()}},_listenKeyEventListeners:function _listenKeyEventListeners(){if(!this.keyEventTarget){return}Object.keys(this._keyBindings).forEach(function(eventName){var keyBindings=this._keyBindings[eventName],boundKeyHandler=this._onKeyBindingEvent.bind(this,keyBindings);this._boundKeyHandlers.push([this.keyEventTarget,eventName,boundKeyHandler]);this.keyEventTarget.addEventListener(eventName,boundKeyHandler)},this)},_unlistenKeyEventListeners:function _unlistenKeyEventListeners(){var keyHandlerTuple,keyEventTarget,eventName,boundKeyHandler;while(this._boundKeyHandlers.length){// My kingdom for block-scope binding and destructuring assignment..
keyHandlerTuple=this._boundKeyHandlers.pop();keyEventTarget=keyHandlerTuple[0];eventName=keyHandlerTuple[1];boundKeyHandler=keyHandlerTuple[2];keyEventTarget.removeEventListener(eventName,boundKeyHandler)}},_onKeyBindingEvent:function _onKeyBindingEvent(keyBindings,event){if(this.stopKeyboardEventPropagation){event.stopPropagation()}// if event has been already prevented, don't do anything
if(event.defaultPrevented){return}for(var i=0;i<keyBindings.length;i++){var keyCombo=keyBindings[i][0],handlerName=keyBindings[i][1];if(keyComboMatchesEvent(keyCombo,event)){this._triggerKeyHandler(keyCombo,handlerName,event);// exit the loop if eventDefault was prevented
if(event.defaultPrevented){return}}}},_triggerKeyHandler:function _triggerKeyHandler(keyCombo,handlerName,keyboardEvent){var detail=Object.create(keyCombo);detail.keyboardEvent=keyboardEvent;var event=new CustomEvent(keyCombo.event,{detail:detail,cancelable:!0});this[handlerName].call(this,event);if(event.defaultPrevented){keyboardEvent.preventDefault()}}};_exports.IronA11yKeysBehavior=IronA11yKeysBehavior;var ironA11yKeysBehavior={IronA11yKeysBehavior:IronA11yKeysBehavior};_exports.$ironA11yKeysBehavior=ironA11yKeysBehavior;(0,_shopApp.Polymer)({is:"iron-request",hostAttributes:{hidden:!0},properties:{/**
     * A reference to the XMLHttpRequest instance used to generate the
     * network request.
     *
     * @type {XMLHttpRequest}
     */xhr:{type:Object,notify:!0,readOnly:!0,value:function value(){return new XMLHttpRequest}},/**
     * A reference to the parsed response body, if the `xhr` has completely
     * resolved.
     *
     * @type {*}
     * @default null
     */response:{type:Object,notify:!0,readOnly:!0,value:function value(){return null}},/**
     * A reference to the status code, if the `xhr` has completely resolved.
     */status:{type:Number,notify:!0,readOnly:!0,value:0},/**
     * A reference to the status text, if the `xhr` has completely resolved.
     */statusText:{type:String,notify:!0,readOnly:!0,value:""},/**
     * A promise that resolves when the `xhr` response comes back, or rejects
     * if there is an error before the `xhr` completes.
     * The resolve callback is called with the original request as an argument.
     * By default, the reject callback is called with an `Error` as an argument.
     * If `rejectWithRequest` is true, the reject callback is called with an
     * object with two keys: `request`, the original request, and `error`, the
     * error object.
     *
     * @type {Promise}
     */completes:{type:Object,readOnly:!0,notify:!0,value:function value(){return new Promise(function(resolve,reject){this.resolveCompletes=resolve;this.rejectCompletes=reject}.bind(this))}},/**
     * An object that contains progress information emitted by the XHR if
     * available.
     *
     * @default {}
     */progress:{type:Object,notify:!0,readOnly:!0,value:function value(){return{}}},/**
     * Aborted will be true if an abort of the request is attempted.
     */aborted:{type:Boolean,notify:!0,readOnly:!0,value:!1},/**
     * Errored will be true if the browser fired an error event from the
     * XHR object (mainly network errors).
     */errored:{type:Boolean,notify:!0,readOnly:!0,value:!1},/**
     * TimedOut will be true if the XHR threw a timeout event.
     */timedOut:{type:Boolean,notify:!0,readOnly:!0,value:!1}},/**
   * Succeeded is true if the request succeeded. The request succeeded if it
   * loaded without error, wasn't aborted, and the status code is ≥ 200, and
   * < 300, or if the status code is 0.
   *
   * The status code 0 is accepted as a success because some schemes - e.g.
   * file:// - don't provide status codes.
   *
   * @return {boolean}
   */get succeeded(){if(this.errored||this.aborted||this.timedOut){return!1}var status=this.xhr.status||0;// Note: if we are using the file:// protocol, the status code will be 0
// for all outcomes (successful or otherwise).
return 0===status||200<=status&&300>status},/**
   * Sends an HTTP request to the server and returns a promise (see the
   * `completes` property for details).
   *
   * The handling of the `body` parameter will vary based on the Content-Type
   * header. See the docs for iron-ajax's `body` property for details.
   *
   * @param {{
   *   url: string,
   *   method: (string|undefined),
   *   async: (boolean|undefined),
   *   body:
   * (ArrayBuffer|ArrayBufferView|Blob|Document|FormData|null|string|undefined|Object),
   *   headers: (Object|undefined),
   *   handleAs: (string|undefined),
   *   jsonPrefix: (string|undefined),
   *   withCredentials: (boolean|undefined),
   *   timeout: (number|undefined),
   *   rejectWithRequest: (boolean|undefined)}} options -
   *   - url The url to which the request is sent.
   *   - method The HTTP method to use, default is GET.
   *   - async By default, all requests are sent asynchronously. To send
   * synchronous requests, set to false.
   *   -  body The content for the request body for POST method.
   *   -  headers HTTP request headers.
   *   -  handleAs The response type. Default is 'text'.
   *   -  withCredentials Whether or not to send credentials on the request.
   * Default is false.
   *   -  timeout - Timeout for request, in milliseconds.
   *   -  rejectWithRequest Set to true to include the request object with
   * promise rejections.
   * @return {Promise}
   */send:function send(options){var xhr=this.xhr;if(0<xhr.readyState){return null}xhr.addEventListener("progress",function(progress){this._setProgress({lengthComputable:progress.lengthComputable,loaded:progress.loaded,total:progress.total});// Webcomponents v1 spec does not fire *-changed events when not connected
this.fire("iron-request-progress-changed",{value:this.progress})}.bind(this));xhr.addEventListener("error",function(error){this._setErrored(!0);this._updateStatus();var response=options.rejectWithRequest?{error:error,request:this}:error;this.rejectCompletes(response)}.bind(this));xhr.addEventListener("timeout",function(error){this._setTimedOut(!0);this._updateStatus();var response=options.rejectWithRequest?{error:error,request:this}:error;this.rejectCompletes(response)}.bind(this));xhr.addEventListener("abort",function(){this._setAborted(!0);this._updateStatus();var error=new Error("Request aborted."),response=options.rejectWithRequest?{error:error,request:this}:error;this.rejectCompletes(response)}.bind(this));// Called after all of the above.
xhr.addEventListener("loadend",function(){this._updateStatus();this._setResponse(this.parseResponse());if(!this.succeeded){var error=new Error("The request failed with status code: "+this.xhr.status),response=options.rejectWithRequest?{error:error,request:this}:error;this.rejectCompletes(response);return}this.resolveCompletes(this)}.bind(this));this.url=options.url;var isXHRAsync=!1!==options.async;xhr.open(options.method||"GET",options.url,isXHRAsync);var acceptType={json:"application/json",text:"text/plain",html:"text/html",xml:"application/xml",arraybuffer:"application/octet-stream"}[options.handleAs],headers=options.headers||Object.create(null),newHeaders=Object.create(null);for(var key in headers){newHeaders[key.toLowerCase()]=headers[key]}headers=newHeaders;if(acceptType&&!headers.accept){headers.accept=acceptType}Object.keys(headers).forEach(function(requestHeader){if(/[A-Z]/.test(requestHeader)){_shopApp.Base._error("Headers must be lower case, got",requestHeader)}xhr.setRequestHeader(requestHeader,headers[requestHeader])},this);if(isXHRAsync){xhr.timeout=options.timeout;var handleAs=options.handleAs;// If a JSON prefix is present, the responseType must be 'text' or the
// browser won’t be able to parse the response.
if(!!options.jsonPrefix||!handleAs){handleAs="text"}// In IE, `xhr.responseType` is an empty string when the response
// returns. Hence, caching it as `xhr._responseType`.
xhr.responseType=xhr._responseType=handleAs;// Cache the JSON prefix, if it exists.
if(!!options.jsonPrefix){xhr._jsonPrefix=options.jsonPrefix}}xhr.withCredentials=!!options.withCredentials;var body=this._encodeBodyObject(options.body,headers["content-type"]);xhr.send(/**
                 @type {ArrayBuffer|ArrayBufferView|Blob|Document|FormData|
                         null|string|undefined}
               */body);return this.completes},/**
   * Attempts to parse the response body of the XHR. If parsing succeeds,
   * the value returned will be deserialized based on the `responseType`
   * set on the XHR.
   *
   * @return {*} The parsed response,
   * or undefined if there was an empty response or parsing failed.
   */parseResponse:function parseResponse(){var xhr=this.xhr,responseType=xhr.responseType||xhr._responseType,preferResponseText=!this.xhr.responseType,prefixLen=xhr._jsonPrefix&&xhr._jsonPrefix.length||0;try{switch(responseType){case"json":// If the xhr object doesn't have a natural `xhr.responseType`,
// we can assume that the browser hasn't parsed the response for us,
// and so parsing is our responsibility. Likewise if response is
// undefined, as there's no way to encode undefined in JSON.
if(preferResponseText||xhr.response===void 0){// Try to emulate the JSON section of the response body section of
// the spec: https://xhr.spec.whatwg.org/#response-body
// That is to say, we try to parse as JSON, but if anything goes
// wrong return null.
try{return JSON.parse(xhr.responseText)}catch(_){console.warn("Failed to parse JSON sent from "+xhr.responseURL);return null}}return xhr.response;case"xml":return xhr.responseXML;case"blob":case"document":case"arraybuffer":return xhr.response;case"text":default:{// If `prefixLen` is set, it implies the response should be parsed
// as JSON once the prefix of length `prefixLen` is stripped from
// it. Emulate the behavior above where null is returned on failure
// to parse.
if(prefixLen){try{return JSON.parse(xhr.responseText.substring(prefixLen))}catch(_){console.warn("Failed to parse JSON sent from "+xhr.responseURL);return null}}return xhr.responseText}}}catch(e){this.rejectCompletes(new Error("Could not parse response. "+e.message))}},/**
   * Aborts the request.
   */abort:function abort(){this._setAborted(!0);this.xhr.abort()},/**
   * @param {*} body The given body of the request to try and encode.
   * @param {?string} contentType The given content type, to infer an encoding
   *     from.
   * @return {*} Either the encoded body as a string, if successful,
   *     or the unaltered body object if no encoding could be inferred.
   */_encodeBodyObject:function _encodeBodyObject(body,contentType){if("string"==typeof body){return body;// Already encoded.
}var bodyObj=/** @type {Object} */body;switch(contentType){case"application/json":return JSON.stringify(bodyObj);case"application/x-www-form-urlencoded":return this._wwwFormUrlEncode(bodyObj);}return body},/**
   * @param {Object} object The object to encode as x-www-form-urlencoded.
   * @return {string} .
   */_wwwFormUrlEncode:function _wwwFormUrlEncode(object){if(!object){return""}var pieces=[];Object.keys(object).forEach(function(key){// TODO(rictic): handle array values here, in a consistent way with
//   iron-ajax params.
pieces.push(this._wwwFormUrlEncodePiece(key)+"="+this._wwwFormUrlEncodePiece(object[key]))},this);return pieces.join("&")},/**
   * @param {*} str A key or value to encode as x-www-form-urlencoded.
   * @return {string} .
   */_wwwFormUrlEncodePiece:function _wwwFormUrlEncodePiece(str){// Spec says to normalize newlines to \r\n and replace %20 spaces with +.
// jQuery does this as well, so this is likely to be widely compatible.
if(null===str||str===void 0||!str.toString){return""}return encodeURIComponent(str.toString().replace(/\r?\n/g,"\r\n")).replace(/%20/g,"+")},/**
   * Updates the status code and status text.
   */_updateStatus:function _updateStatus(){this._setStatus(this.xhr.status);this._setStatusText(this.xhr.statusText===void 0?"":this.xhr.statusText)}});(0,_shopApp.Polymer)({is:"iron-ajax",/**
   * Fired before a request is sent.
   *
   * @event iron-ajax-presend
   */ /**
       * Fired when a request is sent.
       *
       * @event request
       */ /**
           * Fired when a request is sent.
           *
           * @event iron-ajax-request
           */ /**
               * Fired when a response is received.
               *
               * @event response
               */ /**
                   * Fired when a response is received.
                   *
                   * @event iron-ajax-response
                   */ /**
                       * Fired when an error is received.
                       *
                       * @event error
                       */ /**
                           * Fired when an error is received.
                           *
                           * @event iron-ajax-error
                           */hostAttributes:{hidden:!0},properties:{/**
     * The URL target of the request.
     */url:{type:String},/**
     * An object that contains query parameters to be appended to the
     * specified `url` when generating a request. If you wish to set the body
     * content when making a POST request, you should use the `body` property
     * instead.
     */params:{type:Object,value:function value(){return{}}},/**
     * The HTTP method to use such as 'GET', 'POST', 'PUT', or 'DELETE'.
     * Default is 'GET'.
     */method:{type:String,value:"GET"},/**
     * HTTP request headers to send.
     *
     * Example:
     *
     *     <iron-ajax
     *         auto
     *         url="http://somesite.com"
     *         headers='{"X-Requested-With": "XMLHttpRequest"}'
     *         handle-as="json"></iron-ajax>
     *
     * Note: setting a `Content-Type` header here will override the value
     * specified by the `contentType` property of this element.
     */headers:{type:Object,value:function value(){return{}}},/**
     * Content type to use when sending data. If the `contentType` property
     * is set and a `Content-Type` header is specified in the `headers`
     * property, the `headers` property value will take precedence.
     *
     * Varies the handling of the `body` param.
     */contentType:{type:String,value:null},/**
     * Body content to send with the request, typically used with "POST"
     * requests.
     *
     * If body is a string it will be sent unmodified.
     *
     * If Content-Type is set to a value listed below, then
     * the body will be encoded accordingly.
     *
     *    * `content-type="application/json"`
     *      * body is encoded like `{"foo":"bar baz","x":1}`
     *    * `content-type="application/x-www-form-urlencoded"`
     *      * body is encoded like `foo=bar+baz&x=1`
     *
     * Otherwise the body will be passed to the browser unmodified, and it
     * will handle any encoding (e.g. for FormData, Blob, ArrayBuffer).
     *
     * @type
     * (ArrayBuffer|ArrayBufferView|Blob|Document|FormData|null|string|undefined|Object)
     */body:{type:Object,value:null},/**
     * Toggle whether XHR is synchronous or asynchronous. Don't change this
     * to true unless You Know What You Are Doing™.
     */sync:{type:Boolean,value:!1},/**
     * Specifies what data to store in the `response` property, and
     * to deliver as `event.detail.response` in `response` events.
     *
     * One of:
     *
     *    `text`: uses `XHR.responseText`.
     *
     *    `xml`: uses `XHR.responseXML`.
     *
     *    `json`: uses `XHR.responseText` parsed as JSON.
     *
     *    `arraybuffer`: uses `XHR.response`.
     *
     *    `blob`: uses `XHR.response`.
     *
     *    `document`: uses `XHR.response`.
     */handleAs:{type:String,value:"json"},/**
     * Set the withCredentials flag on the request.
     */withCredentials:{type:Boolean,value:!1},/**
     * Set the timeout flag on the request.
     */timeout:{type:Number,value:0},/**
     * If true, automatically performs an Ajax request when either `url` or
     * `params` changes.
     */auto:{type:Boolean,value:!1},/**
     * If true, error messages will automatically be logged to the console.
     */verbose:{type:Boolean,value:!1},/**
     * The most recent request made by this iron-ajax element.
     *
     * @type {Object|undefined}
     */lastRequest:{type:Object,notify:!0,readOnly:!0},/**
     * The `progress` property of this element's `lastRequest`.
     *
     * @type {Object|undefined}
     */lastProgress:{type:Object,notify:!0,readOnly:!0},/**
     * True while lastRequest is in flight.
     */loading:{type:Boolean,notify:!0,readOnly:!0},/**
     * lastRequest's response.
     *
     * Note that lastResponse and lastError are set when lastRequest finishes,
     * so if loading is true, then lastResponse and lastError will correspond
     * to the result of the previous request.
     *
     * The type of the response is determined by the value of `handleAs` at
     * the time that the request was generated.
     *
     * @type {Object}
     */lastResponse:{type:Object,notify:!0,readOnly:!0},/**
     * lastRequest's error, if any.
     *
     * @type {Object}
     */lastError:{type:Object,notify:!0,readOnly:!0},/**
     * An Array of all in-flight requests originating from this iron-ajax
     * element.
     */activeRequests:{type:Array,notify:!0,readOnly:!0,value:function value(){return[]}},/**
     * Length of time in milliseconds to debounce multiple automatically
     * generated requests.
     */debounceDuration:{type:Number,value:0,notify:!0},/**
     * Prefix to be stripped from a JSON response before parsing it.
     *
     * In order to prevent an attack using CSRF with Array responses
     * (http://haacked.com/archive/2008/11/20/anatomy-of-a-subtle-json-vulnerability.aspx/)
     * many backends will mitigate this by prefixing all JSON response bodies
     * with a string that would be nonsensical to a JavaScript parser.
     *
     */jsonPrefix:{type:String,value:""},/**
     * By default, iron-ajax's events do not bubble. Setting this attribute will
     * cause its request and response events as well as its iron-ajax-request,
     * -response,  and -error events to bubble to the window object. The vanilla
     * error event never bubbles when using shadow dom even if this.bubbles is
     * true because a scoped flag is not passed with it (first link) and because
     * the shadow dom spec did not used to allow certain events, including
     * events named error, to leak outside of shadow trees (second link).
     * https://www.w3.org/TR/shadow-dom/#scoped-flag
     * https://www.w3.org/TR/2015/WD-shadow-dom-20151215/#events-that-are-not-leaked-into-ancestor-trees
     */bubbles:{type:Boolean,value:!1},/**
     * Changes the [`completes`](iron-request#property-completes) promise chain
     * from `generateRequest` to reject with an object
     * containing the original request, as well an error message.
     * If false (default), the promise rejects with an error message only.
     */rejectWithRequest:{type:Boolean,value:!1},_boundHandleResponse:{type:Function,value:function value(){return this._handleResponse.bind(this)}}},observers:["_requestOptionsChanged(url, method, params.*, headers, contentType, "+"body, sync, handleAs, jsonPrefix, withCredentials, timeout, auto)"],created:function created(){this._boundOnProgressChanged=this._onProgressChanged.bind(this)},/**
   * The query string that should be appended to the `url`, serialized from
   * the current value of `params`.
   *
   * @return {string}
   */get queryString(){var queryParts=[],param,value;for(param in this.params){value=this.params[param];param=window.encodeURIComponent(param);if(Array.isArray(value)){for(var i=0;i<value.length;i++){queryParts.push(param+"="+window.encodeURIComponent(value[i]))}}else if(null!==value){queryParts.push(param+"="+window.encodeURIComponent(value))}else{queryParts.push(param)}}return queryParts.join("&")},/**
   * The `url` with query string (if `params` are specified), suitable for
   * providing to an `iron-request` instance.
   *
   * @return {string}
   */get requestUrl(){var queryString=this.queryString,url=this.url||"";if(queryString){var bindingChar=0<=url.indexOf("?")?"&":"?";return url+bindingChar+queryString}return url},/**
   * An object that maps header names to header values, first applying the
   * the value of `Content-Type` and then overlaying the headers specified
   * in the `headers` property.
   *
   * @return {Object}
   */get requestHeaders(){var headers={},contentType=this.contentType;if(null==contentType&&"string"===typeof this.body){contentType="application/x-www-form-urlencoded"}if(contentType){headers["content-type"]=contentType}var header;if("object"===babelHelpers.typeof(this.headers)){for(header in this.headers){headers[header]=this.headers[header].toString()}}return headers},_onProgressChanged:function _onProgressChanged(event){this._setLastProgress(event.detail.value)},/**
   * Request options suitable for generating an `iron-request` instance based
   * on the current state of the `iron-ajax` instance's properties.
   *
   * @return {{
   *   url: string,
   *   method: (string|undefined),
   *   async: (boolean|undefined),
   *   body:
   * (ArrayBuffer|ArrayBufferView|Blob|Document|FormData|null|string|undefined|Object),
   *   headers: (Object|undefined),
   *   handleAs: (string|undefined),
   *   jsonPrefix: (string|undefined),
   *   withCredentials: (boolean|undefined)}}
   */toRequestOptions:function toRequestOptions(){return{url:this.requestUrl||"",method:this.method,headers:this.requestHeaders,body:this.body,async:!this.sync,handleAs:this.handleAs,jsonPrefix:this.jsonPrefix,withCredentials:this.withCredentials,timeout:this.timeout,rejectWithRequest:this.rejectWithRequest}},/**
   * Performs an AJAX request to the specified URL.
   *
   * @return {!IronRequestElement}
   */generateRequest:function generateRequest(){var request=/** @type {!IronRequestElement} */document.createElement("iron-request"),requestOptions=this.toRequestOptions();this.push("activeRequests",request);request.completes.then(this._boundHandleResponse).catch(this._handleError.bind(this,request)).then(this._discardRequest.bind(this,request));var evt=this.fire("iron-ajax-presend",{request:request,options:requestOptions},{bubbles:this.bubbles,cancelable:!0});if(evt.defaultPrevented){request.abort();request.rejectCompletes(request);return request}if(this.lastRequest){this.lastRequest.removeEventListener("iron-request-progress-changed",this._boundOnProgressChanged)}request.addEventListener("iron-request-progress-changed",this._boundOnProgressChanged);request.send(requestOptions);this._setLastProgress(null);this._setLastRequest(request);this._setLoading(!0);this.fire("request",{request:request,options:requestOptions},{bubbles:this.bubbles,composed:!0});this.fire("iron-ajax-request",{request:request,options:requestOptions},{bubbles:this.bubbles,composed:!0});return request},_handleResponse:function _handleResponse(request){if(request===this.lastRequest){this._setLastResponse(request.response);this._setLastError(null);this._setLoading(!1)}this.fire("response",request,{bubbles:this.bubbles,composed:!0});this.fire("iron-ajax-response",request,{bubbles:this.bubbles,composed:!0})},_handleError:function _handleError(request,error){if(this.verbose){_shopApp.Base._error(error)}if(request===this.lastRequest){this._setLastError({request:request,error:error,status:request.xhr.status,statusText:request.xhr.statusText,response:request.xhr.response});this._setLastResponse(null);this._setLoading(!1)}// Tests fail if this goes after the normal this.fire('error', ...)
this.fire("iron-ajax-error",{request:request,error:error},{bubbles:this.bubbles,composed:!0});this.fire("error",{request:request,error:error},{bubbles:this.bubbles,composed:!0})},_discardRequest:function _discardRequest(request){var requestIndex=this.activeRequests.indexOf(request);if(-1<requestIndex){this.splice("activeRequests",requestIndex,1)}},_requestOptionsChanged:function _requestOptionsChanged(){this.debounce("generate-request",function(){if(null==this.url){return}if(this.auto){this.generateRequest()}},this.debounceDuration)}});var IronControlState={properties:{/**
     * If true, the element currently has focus.
     */focused:{type:Boolean,value:!1,notify:!0,readOnly:!0,reflectToAttribute:!0},/**
     * If true, the user cannot interact with this element.
     */disabled:{type:Boolean,value:!1,notify:!0,observer:"_disabledChanged",reflectToAttribute:!0},/**
     * Value of the `tabindex` attribute before `disabled` was activated.
     * `null` means the attribute was not present.
     * @type {?string|undefined}
     */_oldTabIndex:{type:String},_boundFocusBlurHandler:{type:Function,value:function value(){return this._focusBlurHandler.bind(this)}}},observers:["_changedControlState(focused, disabled)"],/**
   * @return {void}
   */ready:function ready(){this.addEventListener("focus",this._boundFocusBlurHandler,!0);this.addEventListener("blur",this._boundFocusBlurHandler,!0)},_focusBlurHandler:function _focusBlurHandler(event){// Polymer takes care of retargeting events.
this._setFocused("focus"===event.type);return},_disabledChanged:function _disabledChanged(disabled,old){this.setAttribute("aria-disabled",disabled?"true":"false");this.style.pointerEvents=disabled?"none":"";if(disabled){// Read the `tabindex` attribute instead of the `tabIndex` property.
// The property returns `-1` if there is no `tabindex` attribute.
// This distinction is important when restoring the value because
// leaving `-1` hides shadow root children from the tab order.
this._oldTabIndex=this.getAttribute("tabindex");this._setFocused(!1);this.tabIndex=-1;this.blur()}else if(this._oldTabIndex!==void 0){if(null===this._oldTabIndex){this.removeAttribute("tabindex")}else{this.setAttribute("tabindex",this._oldTabIndex)}}},_changedControlState:function _changedControlState(){// _controlStateChanged is abstract, follow-on behaviors may implement it
if(this._controlStateChanged){this._controlStateChanged()}}};_exports.IronControlState=IronControlState;var ironControlState={IronControlState:IronControlState};_exports.$ironControlState=ironControlState;var IronButtonStateImpl={properties:{/**
     * If true, the user is currently holding down the button.
     */pressed:{type:Boolean,readOnly:!0,value:!1,reflectToAttribute:!0,observer:"_pressedChanged"},/**
     * If true, the button toggles the active state with each tap or press
     * of the spacebar.
     */toggles:{type:Boolean,value:!1,reflectToAttribute:!0},/**
     * If true, the button is a toggle and is currently in the active state.
     */active:{type:Boolean,value:!1,notify:!0,reflectToAttribute:!0},/**
     * True if the element is currently being pressed by a "pointer," which
     * is loosely defined as mouse or touch input (but specifically excluding
     * keyboard input).
     */pointerDown:{type:Boolean,readOnly:!0,value:!1},/**
     * True if the input device that caused the element to receive focus
     * was a keyboard.
     */receivedFocusFromKeyboard:{type:Boolean,readOnly:!0},/**
     * The aria attribute to be set if the button is a toggle and in the
     * active state.
     */ariaActiveAttribute:{type:String,value:"aria-pressed",observer:"_ariaActiveAttributeChanged"}},listeners:{down:"_downHandler",up:"_upHandler",tap:"_tapHandler"},observers:["_focusChanged(focused)","_activeChanged(active, ariaActiveAttribute)"],/**
   * @type {!Object}
   */keyBindings:{"enter:keydown":"_asyncClick","space:keydown":"_spaceKeyDownHandler","space:keyup":"_spaceKeyUpHandler"},_mouseEventRe:/^mouse/,_tapHandler:function _tapHandler(){if(this.toggles){// a tap is needed to toggle the active state
this._userActivate(!this.active)}else{this.active=!1}},_focusChanged:function _focusChanged(focused){this._detectKeyboardFocus(focused);if(!focused){this._setPressed(!1)}},_detectKeyboardFocus:function _detectKeyboardFocus(focused){this._setReceivedFocusFromKeyboard(!this.pointerDown&&focused)},// to emulate native checkbox, (de-)activations from a user interaction fire
// 'change' events
_userActivate:function _userActivate(active){if(this.active!==active){this.active=active;this.fire("change")}},_downHandler:function _downHandler(event){this._setPointerDown(!0);this._setPressed(!0);this._setReceivedFocusFromKeyboard(!1)},_upHandler:function _upHandler(){this._setPointerDown(!1);this._setPressed(!1)},/**
   * @param {!KeyboardEvent} event .
   */_spaceKeyDownHandler:function _spaceKeyDownHandler(event){var keyboardEvent=event.detail.keyboardEvent,target=(0,_shopApp.dom)(keyboardEvent).localTarget;// Ignore the event if this is coming from a focused light child, since that
// element will deal with it.
if(this.isLightDescendant(/** @type {Node} */target))return;keyboardEvent.preventDefault();keyboardEvent.stopImmediatePropagation();this._setPressed(!0)},/**
   * @param {!KeyboardEvent} event .
   */_spaceKeyUpHandler:function _spaceKeyUpHandler(event){var keyboardEvent=event.detail.keyboardEvent,target=(0,_shopApp.dom)(keyboardEvent).localTarget;// Ignore the event if this is coming from a focused light child, since that
// element will deal with it.
if(this.isLightDescendant(/** @type {Node} */target))return;if(this.pressed){this._asyncClick()}this._setPressed(!1)},// trigger click asynchronously, the asynchrony is useful to allow one
// event handler to unwind before triggering another event
_asyncClick:function _asyncClick(){this.async(function(){this.click()},1)},// any of these changes are considered a change to button state
_pressedChanged:function _pressedChanged(pressed){this._changedButtonState()},_ariaActiveAttributeChanged:function _ariaActiveAttributeChanged(value,oldValue){if(oldValue&&oldValue!=value&&this.hasAttribute(oldValue)){this.removeAttribute(oldValue)}},_activeChanged:function _activeChanged(active,ariaActiveAttribute){if(this.toggles){this.setAttribute(this.ariaActiveAttribute,active?"true":"false")}else{this.removeAttribute(this.ariaActiveAttribute)}this._changedButtonState()},_controlStateChanged:function _controlStateChanged(){if(this.disabled){this._setPressed(!1)}else{this._changedButtonState()}},// provide hook for follow-on behaviors to react to button-state
_changedButtonState:function _changedButtonState(){if(this._buttonStateChanged){this._buttonStateChanged();// abstract
}}};/** @polymerBehavior */_exports.IronButtonStateImpl=IronButtonStateImpl;var IronButtonState=[IronA11yKeysBehavior,IronButtonStateImpl];_exports.IronButtonState=IronButtonState;var ironButtonState={IronButtonStateImpl:IronButtonStateImpl,IronButtonState:IronButtonState};_exports.$ironButtonState=ironButtonState;var IronFitBehavior={properties:{/**
     * The element that will receive a `max-height`/`width`. By default it is
     * the same as `this`, but it can be set to a child element. This is useful,
     * for example, for implementing a scrolling region inside the element.
     * @type {!Element}
     */sizingTarget:{type:Object,value:function value(){return this}},/**
     * The element to fit `this` into.
     */fitInto:{type:Object,value:window},/**
     * Will position the element around the positionTarget without overlapping
     * it.
     */noOverlap:{type:Boolean},/**
     * The element that should be used to position the element. If not set, it
     * will default to the parent node.
     * @type {!Element}
     */positionTarget:{type:Element},/**
     * The orientation against which to align the element horizontally
     * relative to the `positionTarget`. Possible values are "left", "right",
     * "center", "auto".
     */horizontalAlign:{type:String},/**
     * The orientation against which to align the element vertically
     * relative to the `positionTarget`. Possible values are "top", "bottom",
     * "middle", "auto".
     */verticalAlign:{type:String},/**
     * If true, it will use `horizontalAlign` and `verticalAlign` values as
     * preferred alignment and if there's not enough space, it will pick the
     * values which minimize the cropping.
     */dynamicAlign:{type:Boolean},/**
     * A pixel value that will be added to the position calculated for the
     * given `horizontalAlign`, in the direction of alignment. You can think
     * of it as increasing or decreasing the distance to the side of the
     * screen given by `horizontalAlign`.
     *
     * If `horizontalAlign` is "left" or "center", this offset will increase or
     * decrease the distance to the left side of the screen: a negative offset
     * will move the dropdown to the left; a positive one, to the right.
     *
     * Conversely if `horizontalAlign` is "right", this offset will increase
     * or decrease the distance to the right side of the screen: a negative
     * offset will move the dropdown to the right; a positive one, to the left.
     */horizontalOffset:{type:Number,value:0,notify:!0},/**
     * A pixel value that will be added to the position calculated for the
     * given `verticalAlign`, in the direction of alignment. You can think
     * of it as increasing or decreasing the distance to the side of the
     * screen given by `verticalAlign`.
     *
     * If `verticalAlign` is "top" or "middle", this offset will increase or
     * decrease the distance to the top side of the screen: a negative offset
     * will move the dropdown upwards; a positive one, downwards.
     *
     * Conversely if `verticalAlign` is "bottom", this offset will increase
     * or decrease the distance to the bottom side of the screen: a negative
     * offset will move the dropdown downwards; a positive one, upwards.
     */verticalOffset:{type:Number,value:0,notify:!0},/**
     * Set to true to auto-fit on attach.
     */autoFitOnAttach:{type:Boolean,value:!1},/** @type {?Object} */_fitInfo:{type:Object}},get _fitWidth(){var fitWidth;if(this.fitInto===window){fitWidth=this.fitInto.innerWidth}else{fitWidth=this.fitInto.getBoundingClientRect().width}return fitWidth},get _fitHeight(){var fitHeight;if(this.fitInto===window){fitHeight=this.fitInto.innerHeight}else{fitHeight=this.fitInto.getBoundingClientRect().height}return fitHeight},get _fitLeft(){var fitLeft;if(this.fitInto===window){fitLeft=0}else{fitLeft=this.fitInto.getBoundingClientRect().left}return fitLeft},get _fitTop(){var fitTop;if(this.fitInto===window){fitTop=0}else{fitTop=this.fitInto.getBoundingClientRect().top}return fitTop},/**
   * The element that should be used to position the element,
   * if no position target is configured.
   */get _defaultPositionTarget(){var parent=(0,_shopApp.dom)(this).parentNode;if(parent&&parent.nodeType===Node.DOCUMENT_FRAGMENT_NODE){parent=parent.host}return parent},/**
   * The horizontal align value, accounting for the RTL/LTR text direction.
   */get _localeHorizontalAlign(){if(this._isRTL){// In RTL, "left" becomes "right".
if("right"===this.horizontalAlign){return"left"}if("left"===this.horizontalAlign){return"right"}}return this.horizontalAlign},/**
   * True if the element should be positioned instead of centered.
   * @private
   */get __shouldPosition(){return(this.horizontalAlign||this.verticalAlign)&&this.positionTarget},attached:function attached(){// Memoize this to avoid expensive calculations & relayouts.
// Make sure we do it only once
if("undefined"===typeof this._isRTL){this._isRTL="rtl"==window.getComputedStyle(this).direction}this.positionTarget=this.positionTarget||this._defaultPositionTarget;if(this.autoFitOnAttach){if("none"===window.getComputedStyle(this).display){setTimeout(function(){this.fit()}.bind(this))}else{// NOTE: shadydom applies distribution asynchronously
// for performance reasons webcomponents/shadydom#120
// Flush to get correct layout info.
window.ShadyDOM&&ShadyDOM.flush();this.fit()}}},detached:function detached(){if(this.__deferredFit){clearTimeout(this.__deferredFit);this.__deferredFit=null}},/**
   * Positions and fits the element into the `fitInto` element.
   */fit:function fit(){this.position();this.constrain();this.center()},/**
   * Memoize information needed to position and size the target element.
   * @suppress {deprecated}
   */_discoverInfo:function _discoverInfo(){if(this._fitInfo){return}var target=window.getComputedStyle(this),sizer=window.getComputedStyle(this.sizingTarget);this._fitInfo={inlineStyle:{top:this.style.top||"",left:this.style.left||"",position:this.style.position||""},sizerInlineStyle:{maxWidth:this.sizingTarget.style.maxWidth||"",maxHeight:this.sizingTarget.style.maxHeight||"",boxSizing:this.sizingTarget.style.boxSizing||""},positionedBy:{vertically:"auto"!==target.top?"top":"auto"!==target.bottom?"bottom":null,horizontally:"auto"!==target.left?"left":"auto"!==target.right?"right":null},sizedBy:{height:"none"!==sizer.maxHeight,width:"none"!==sizer.maxWidth,minWidth:parseInt(sizer.minWidth,10)||0,minHeight:parseInt(sizer.minHeight,10)||0},margin:{top:parseInt(target.marginTop,10)||0,right:parseInt(target.marginRight,10)||0,bottom:parseInt(target.marginBottom,10)||0,left:parseInt(target.marginLeft,10)||0}}},/**
   * Resets the target element's position and size constraints, and clear
   * the memoized data.
   */resetFit:function resetFit(){var info=this._fitInfo||{};for(var property in info.sizerInlineStyle){this.sizingTarget.style[property]=info.sizerInlineStyle[property]}for(var property in info.inlineStyle){this.style[property]=info.inlineStyle[property]}this._fitInfo=null},/**
   * Equivalent to calling `resetFit()` and `fit()`. Useful to call this after
   * the element or the `fitInto` element has been resized, or if any of the
   * positioning properties (e.g. `horizontalAlign, verticalAlign`) is updated.
   * It preserves the scroll position of the sizingTarget.
   */refit:function refit(){var scrollLeft=this.sizingTarget.scrollLeft,scrollTop=this.sizingTarget.scrollTop;this.resetFit();this.fit();this.sizingTarget.scrollLeft=scrollLeft;this.sizingTarget.scrollTop=scrollTop},/**
   * Positions the element according to `horizontalAlign, verticalAlign`.
   */position:function position(){if(!this.__shouldPosition){// needs to be centered, and it is done after constrain.
return}this._discoverInfo();this.style.position="fixed";// Need border-box for margin/padding.
this.sizingTarget.style.boxSizing="border-box";// Set to 0, 0 in order to discover any offset caused by parent stacking
// contexts.
this.style.left="0px";this.style.top="0px";var rect=this.getBoundingClientRect(),positionRect=this.__getNormalizedRect(this.positionTarget),fitRect=this.__getNormalizedRect(this.fitInto),margin=this._fitInfo.margin,size={width:rect.width+margin.left+margin.right,height:rect.height+margin.top+margin.bottom},position=this.__getPosition(this._localeHorizontalAlign,this.verticalAlign,size,rect,positionRect,fitRect),left=position.left+margin.left,top=position.top+margin.top,right=Math.min(fitRect.right-margin.right,left+rect.width),bottom=Math.min(fitRect.bottom-margin.bottom,top+rect.height);// Keep left/top within fitInto respecting the margin.
left=Math.max(fitRect.left+margin.left,Math.min(left,right-this._fitInfo.sizedBy.minWidth));top=Math.max(fitRect.top+margin.top,Math.min(top,bottom-this._fitInfo.sizedBy.minHeight));// Use right/bottom to set maxWidth/maxHeight, and respect
// minWidth/minHeight.
this.sizingTarget.style.maxWidth=Math.max(right-left,this._fitInfo.sizedBy.minWidth)+"px";this.sizingTarget.style.maxHeight=Math.max(bottom-top,this._fitInfo.sizedBy.minHeight)+"px";// Remove the offset caused by any stacking context.
this.style.left=left-rect.left+"px";this.style.top=top-rect.top+"px"},/**
   * Constrains the size of the element to `fitInto` by setting `max-height`
   * and/or `max-width`.
   */constrain:function constrain(){if(this.__shouldPosition){return}this._discoverInfo();var info=this._fitInfo;// position at (0px, 0px) if not already positioned, so we can measure the
// natural size.
if(!info.positionedBy.vertically){this.style.position="fixed";this.style.top="0px"}if(!info.positionedBy.horizontally){this.style.position="fixed";this.style.left="0px"}// need border-box for margin/padding
this.sizingTarget.style.boxSizing="border-box";// constrain the width and height if not already set
var rect=this.getBoundingClientRect();if(!info.sizedBy.height){this.__sizeDimension(rect,info.positionedBy.vertically,"top","bottom","Height")}if(!info.sizedBy.width){this.__sizeDimension(rect,info.positionedBy.horizontally,"left","right","Width")}},/**
   * @protected
   * @deprecated
   */_sizeDimension:function _sizeDimension(rect,positionedBy,start,end,extent){this.__sizeDimension(rect,positionedBy,start,end,extent)},/**
   * @private
   */__sizeDimension:function __sizeDimension(rect,positionedBy,start,end,extent){var info=this._fitInfo,fitRect=this.__getNormalizedRect(this.fitInto),max="Width"===extent?fitRect.width:fitRect.height,flip=positionedBy===end,offset=flip?max-rect[end]:rect[start],margin=info.margin[flip?start:end],offsetExtent="offset"+extent,sizingOffset=this[offsetExtent]-this.sizingTarget[offsetExtent];this.sizingTarget.style["max"+extent]=max-margin-offset-sizingOffset+"px"},/**
   * Centers horizontally and vertically if not already positioned. This also
   * sets `position:fixed`.
   */center:function center(){if(this.__shouldPosition){return}this._discoverInfo();var positionedBy=this._fitInfo.positionedBy;if(positionedBy.vertically&&positionedBy.horizontally){// Already positioned.
return}// Need position:fixed to center
this.style.position="fixed";// Take into account the offset caused by parents that create stacking
// contexts (e.g. with transform: translate3d). Translate to 0,0 and
// measure the bounding rect.
if(!positionedBy.vertically){this.style.top="0px"}if(!positionedBy.horizontally){this.style.left="0px"}// It will take in consideration margins and transforms
var rect=this.getBoundingClientRect(),fitRect=this.__getNormalizedRect(this.fitInto);if(!positionedBy.vertically){var top=fitRect.top-rect.top+(fitRect.height-rect.height)/2;this.style.top=top+"px"}if(!positionedBy.horizontally){var left=fitRect.left-rect.left+(fitRect.width-rect.width)/2;this.style.left=left+"px"}},__getNormalizedRect:function __getNormalizedRect(target){if(target===document.documentElement||target===window){return{top:0,left:0,width:window.innerWidth,height:window.innerHeight,right:window.innerWidth,bottom:window.innerHeight}}return target.getBoundingClientRect()},__getOffscreenArea:function __getOffscreenArea(position,size,fitRect){var verticalCrop=Math.min(0,position.top)+Math.min(0,fitRect.bottom-(position.top+size.height)),horizontalCrop=Math.min(0,position.left)+Math.min(0,fitRect.right-(position.left+size.width));return Math.abs(verticalCrop)*size.width+Math.abs(horizontalCrop)*size.height},__getPosition:function __getPosition(hAlign,vAlign,size,sizeNoMargins,positionRect,fitRect){// All the possible configurations.
// Ordered as top-left, top-right, bottom-left, bottom-right.
var positions=[{verticalAlign:"top",horizontalAlign:"left",top:positionRect.top+this.verticalOffset,left:positionRect.left+this.horizontalOffset},{verticalAlign:"top",horizontalAlign:"right",top:positionRect.top+this.verticalOffset,left:positionRect.right-size.width-this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"left",top:positionRect.bottom-size.height-this.verticalOffset,left:positionRect.left+this.horizontalOffset},{verticalAlign:"bottom",horizontalAlign:"right",top:positionRect.bottom-size.height-this.verticalOffset,left:positionRect.right-size.width-this.horizontalOffset}];if(this.noOverlap){// Duplicate.
for(var i=0,l=positions.length,copy;i<l;i++){copy={};for(var key in positions[i]){copy[key]=positions[i][key]}positions.push(copy)}// Horizontal overlap only.
positions[0].top=positions[1].top+=positionRect.height;positions[2].top=positions[3].top-=positionRect.height;// Vertical overlap only.
positions[4].left=positions[6].left+=positionRect.width;positions[5].left=positions[7].left-=positionRect.width}// Consider auto as null for coding convenience.
vAlign="auto"===vAlign?null:vAlign;hAlign="auto"===hAlign?null:hAlign;if(!hAlign||"center"===hAlign){positions.push({verticalAlign:"top",horizontalAlign:"center",top:positionRect.top+this.verticalOffset+(this.noOverlap?positionRect.height:0),left:positionRect.left-sizeNoMargins.width/2+positionRect.width/2+this.horizontalOffset});positions.push({verticalAlign:"bottom",horizontalAlign:"center",top:positionRect.bottom-size.height-this.verticalOffset-(this.noOverlap?positionRect.height:0),left:positionRect.left-sizeNoMargins.width/2+positionRect.width/2+this.horizontalOffset})}if(!vAlign||"middle"===vAlign){positions.push({verticalAlign:"middle",horizontalAlign:"left",top:positionRect.top-sizeNoMargins.height/2+positionRect.height/2+this.verticalOffset,left:positionRect.left+this.horizontalOffset+(this.noOverlap?positionRect.width:0)});positions.push({verticalAlign:"middle",horizontalAlign:"right",top:positionRect.top-sizeNoMargins.height/2+positionRect.height/2+this.verticalOffset,left:positionRect.right-size.width-this.horizontalOffset-(this.noOverlap?positionRect.width:0)})}if("middle"===vAlign&&"center"===hAlign){positions.push({verticalAlign:"middle",horizontalAlign:"center",top:positionRect.top-sizeNoMargins.height/2+positionRect.height/2+this.verticalOffset,left:positionRect.left-sizeNoMargins.width/2+positionRect.width/2+this.horizontalOffset})}for(var position,i=0;i<positions.length;i++){var candidate=positions[i],vAlignOk=candidate.verticalAlign===vAlign,hAlignOk=candidate.horizontalAlign===hAlign;// If both vAlign and hAlign are defined, return exact match.
// For dynamicAlign and noOverlap we'll have more than one candidate, so
// we'll have to check the offscreenArea to make the best choice.
if(!this.dynamicAlign&&!this.noOverlap&&vAlignOk&&hAlignOk){position=candidate;break}// Align is ok if alignment preferences are respected. If no preferences,
// it is considered ok.
var alignOk=(!vAlign||vAlignOk)&&(!hAlign||hAlignOk);// Filter out elements that don't match the alignment (if defined).
// With dynamicAlign, we need to consider all the positions to find the
// one that minimizes the cropped area.
if(!this.dynamicAlign&&!alignOk){continue}candidate.offscreenArea=this.__getOffscreenArea(candidate,size,fitRect);// If not cropped and respects the align requirements, keep it.
// This allows to prefer positions overlapping horizontally over the
// ones overlapping vertically.
if(0===candidate.offscreenArea&&alignOk){position=candidate;break}position=position||candidate;var diff=candidate.offscreenArea-position.offscreenArea;// Check which crops less. If it crops equally, check if at least one
// align setting is ok.
if(0>diff||0===diff&&(vAlignOk||hAlignOk)){position=candidate}}return position}};_exports.IronFitBehavior=IronFitBehavior;var ironFitBehavior={IronFitBehavior:IronFitBehavior};_exports.$ironFitBehavior=ironFitBehavior;(0,_shopApp.Polymer)({_template:(0,_shopApp.html$1)(_templateObject2_3f0e9a00e61411ee9d65b9d111681715()),is:"iron-form",properties:{/*
     * Set this to true if you don't want the form to be submitted through an
     * ajax request, and you want the page to redirect to the action URL
     * after the form has been submitted.
     */allowRedirect:{type:Boolean,value:!1},/**
     * HTTP request headers to send. See PolymerElements/iron-ajax for
     * more details. Only works when `allowRedirect` is false.
     */headers:{type:Object,value:function value(){return{}}},/**
     * Set the `withCredentials` flag on the request. See
     * PolymerElements/iron-ajax for more details. Only works when
     * `allowRedirect` is false.
     */withCredentials:{type:Boolean,value:!1}},/**
   * Fired if the form cannot be submitted because it's invalid.
   *
   * @event iron-form-invalid
   */ /**
       * Fired after the form is submitted.
       *
       * @event iron-form-submit
       */ /**
           * Fired before the form is submitted.
           *
           * @event iron-form-presubmit
           */ /**
               * Fired after the form is reset.
               *
               * @event iron-form-reset
               */ /**
                   * Fired after the form is submitted and a response is received. An
                   * IronRequestElement is included as the event.detail object.
                   *
                   * @event iron-form-response
                   */ /**
                       * Fired after the form is submitted and an error is received. An
                       * error message is included in event.detail.error and an
                       * IronRequestElement is included in event.detail.request.
                       *
                       * @event iron-form-error
                       */ /**
                           * @return {void}
                           */attached:function attached(){// We might have been detached then re-attached.
// Avoid searching again for the <form> if we already found it.
if(this._form){return}// Search for the `<form>`, if we don't find it, observe for
// mutations.
this._form=(0,_shopApp.dom)(this).querySelector("form");if(this._form){this._init();// Since some elements might not be upgraded yet at this time,
// we won't be able to look into their shadowRoots for submittables.
// We wait a tick and check again for any missing submittable default
// values.
this.async(this._saveInitialValues.bind(this),1)}else{this._nodeObserver=(0,_shopApp.dom)(this).observeNodes(function(mutations){for(var i=0;i<mutations.addedNodes.length;i++){if("FORM"===mutations.addedNodes[i].tagName){this._form=mutations.addedNodes[i];// At this point in time, all custom elements are expected
// to be upgraded, hence we'll be able to traverse their
// shadowRoots.
this._init();(0,_shopApp.dom)(this).unobserveNodes(this._nodeObserver);this._nodeObserver=null}}}.bind(this))}},/**
   * @return {void}
   */detached:function detached(){if(this._nodeObserver){(0,_shopApp.dom)(this).unobserveNodes(this._nodeObserver);this._nodeObserver=null}},_init:function _init(){this._form.addEventListener("submit",this.submit.bind(this));this._form.addEventListener("reset",this.reset.bind(this));// Save the initial values.
this._defaults=this._defaults||new WeakMap;this._saveInitialValues()},/**
   * Saves the values of all form elements that will be used when resetting
   * the form. Initially called asynchronously on attach. Any time you
   * call this function, the previously saved values for a form element will
   * be overwritten.
   *
   * This function is useful if you are dynamically adding elements to
   * the form, or if your elements are asynchronously setting their values.
   * @return {void}
   */saveResetValues:function saveResetValues(){this._saveInitialValues(!0)},/**
   * @param {boolean=} overwriteValues
   * @return {void}
   */_saveInitialValues:function _saveInitialValues(overwriteValues){for(var nodes=this._getValidatableElements(),i=0,node;i<nodes.length;i++){node=nodes[i];if(!this._defaults.has(node)||overwriteValues){// Submittables are expected to have `value` property,
// that's what gets serialized.
var defaults={value:node.value};if("checked"in node){defaults.checked=node.checked}// In 1.x iron-form would reset `invalid`, so
// keep it here for backwards compat.
if("invalid"in node){defaults.invalid=node.invalid}this._defaults.set(node,defaults)}}},/**
   * Validates all the required elements (custom and native) in the form.
   * @return {boolean} True if all the elements are valid.
   */validate:function validate(){// If you've called this before distribution happened, bail out.
if(!this._form){return!1}if(""===this._form.getAttribute("novalidate"))return!0;// Start by making the form check the native elements it knows about.
// Go through all the elements, and validate the custom ones.
for(var valid=this._form.checkValidity(),elements=this._getValidatableElements(),el,i=0,validatable;el=elements[i],i<elements.length;i++){// This is weird to appease the compiler. We assume the custom element
// has a validate() method, otherwise we can't check it.
validatable=/** @type {{validate: (function() : boolean)}} */el;if(validatable.validate){valid=!!validatable.validate()&&valid}}return valid},/**
   * Submits the form.
   *
   * @param {Event=} event
   * @return {void}
   */submit:function submit(event){// We are not using this form for submission, so always cancel its event.
if(event){event.preventDefault()}// If you've called this before distribution happened, bail out.
if(!this._form){return}if(!this.validate()){this.fire("iron-form-invalid");return}// Remove any existing children in the submission form (from a previous
// submit).
this.$.helper.textContent="";var json=this.serializeForm();// If we want a redirect, submit the form natively.
if(this.allowRedirect){// If we're submitting the form natively, then create a hidden element for
// each of the values.
for(var element in json){this.$.helper.appendChild(this._createHiddenElement(element,json[element]))}// Copy the original form attributes.
this.$.helper.action=this._form.getAttribute("action");this.$.helper.method=this._form.getAttribute("method")||"GET";this.$.helper.contentType=this._form.getAttribute("enctype")||"application/x-www-form-urlencoded";this.$.helper.submit();this.fire("iron-form-submit")}else{this._makeAjaxRequest(json)}},/**
   * Resets the form to the default values.
   *
   * @param {Event=} event
   * @return {void}
   */reset:function reset(event){// We are not using this form for submission, so always cancel its event.
if(event)event.preventDefault();// If you've called this before distribution happened, bail out.
if(!this._form){return}// Ensure the native form fired the `reset` event.
// User might have bound `<button on-click="_resetIronForm">`, or directly
// called `ironForm.reset()`. In these cases we want to first reset the
// native form.
if(!event||"reset"!==event.type||event.target!==this._form){this._form.reset();return}// Load the initial values.
for(var nodes=this._getValidatableElements(),i=0,node;i<nodes.length;i++){node=nodes[i];if(this._defaults.has(node)){var defaults=this._defaults.get(node);for(var propName in defaults){node[propName]=defaults[propName]}}}this.fire("iron-form-reset")},/**
   * Serializes the form as will be used in submission. Note that `serialize`
   * is a Polymer reserved keyword, so calling `someIronForm`.serialize()`
   * will give you unexpected results.
   * @return {!Object<string, *>} An object containing name-value pairs for elements that
   *                  would be submitted.
   */serializeForm:function serializeForm(){// Only elements that have a `name` and are not disabled are submittable.
for(var elements=this._getSubmittableElements(),json={},i=0,values;i<elements.length;i++){values=this._serializeElementValues(elements[i]);for(var v=0;v<values.length;v++){this._addSerializedElement(json,elements[i].name,values[v])}}return json},_handleFormResponse:function _handleFormResponse(event){this.fire("iron-form-response",event.detail)},_handleFormError:function _handleFormError(event){this.fire("iron-form-error",event.detail)},_makeAjaxRequest:function _makeAjaxRequest(json){// Initialize the iron-ajax element if we haven't already.
if(!this.request){this.request=document.createElement("iron-ajax");this.request.addEventListener("response",this._handleFormResponse.bind(this));this.request.addEventListener("error",this._handleFormError.bind(this))}// Native forms can also index elements magically by their name (can't make
// this up if I tried) so we need to get the correct attributes, not the
// elements with those names.
this.request.url=this._form.getAttribute("action");this.request.method=this._form.getAttribute("method")||"GET";this.request.contentType=this._form.getAttribute("enctype")||"application/x-www-form-urlencoded";this.request.withCredentials=this.withCredentials;this.request.headers=this.headers;if("POST"===this._form.method.toUpperCase()){this.request.body=json}else{this.request.params=json}// Allow for a presubmit hook
var event=this.fire("iron-form-presubmit",{},{cancelable:!0});if(!event.defaultPrevented){this.request.generateRequest();this.fire("iron-form-submit",json)}},_getValidatableElements:function _getValidatableElements(){return this._findElements(this._form,!0,!1)},_getSubmittableElements:function _getSubmittableElements(){return this._findElements(this._form,!1,!1)},/**
   * Traverse the parent element to find and add all submittable nodes to
   * `submittable`.
   * @param  {!Node} parent The parent node
   * @param  {!boolean} ignoreName  Whether the name of the submittable nodes should be disregarded
   * @param  {!boolean} skipSlots  Whether to skip traversing of slot elements
   * @param  {!Array<!Node>=} submittable Reference to the array of submittables
   * @return {!Array<!Node>}
   * @private
   */_findElements:function _findElements(parent,ignoreName,skipSlots,submittable){submittable=submittable||[];for(var nodes=(0,_shopApp.dom)(parent).querySelectorAll("*"),i=0;i<nodes.length;i++){// An element is submittable if it is not disabled, and if it has a
// name attribute.
if(!skipSlots&&("slot"===nodes[i].localName||"content"===nodes[i].localName)){this._searchSubmittableInSlot(submittable,nodes[i],ignoreName)}else{this._searchSubmittable(submittable,nodes[i],ignoreName)}}return submittable},/**
   * Traverse the distributed nodes of a slot or content element
   * and add all submittable nodes to `submittable`.
   * @param  {!Array<!Node>} submittable Reference to the array of submittables
   * @param  {!Node} node The slot or content node
   * @param  {!boolean} ignoreName  Whether the name of the submittable nodes should be disregarded
   * @return {void}
   * @private
   */_searchSubmittableInSlot:function _searchSubmittableInSlot(submittable,node,ignoreName){for(var assignedNodes=(0,_shopApp.dom)(node).getDistributedNodes(),i=0;i<assignedNodes.length;i++){if(assignedNodes[i].nodeType===Node.TEXT_NODE){continue}// Note: assignedNodes does not contain <slot> or <content> because
// getDistributedNodes flattens the tree.
this._searchSubmittable(submittable,assignedNodes[i],ignoreName);for(var nestedAssignedNodes=(0,_shopApp.dom)(assignedNodes[i]).querySelectorAll("*"),j=0;j<nestedAssignedNodes.length;j++){this._searchSubmittable(submittable,nestedAssignedNodes[j],ignoreName)}}},/**
   * Traverse the distributed nodes of a slot or content element
   * and add all submittable nodes to `submittable`.
   * @param  {!Array<!Node>} submittable Reference to the array of submittables
   * @param  {!Node} node The node to be
   * @param  {!boolean} ignoreName  Whether the name of the submittable nodes should be disregarded
   * @return {void}
   * @private
   */_searchSubmittable:function _searchSubmittable(submittable,node,ignoreName){if(this._isSubmittable(node,ignoreName)){submittable.push(node)}else if(node.root){this._findElements(node.root,ignoreName,!0,submittable)}},/**
   * An element is submittable if it is not disabled, and if it has a
   * 'name' attribute. If we ignore the name, check if is validatable.
   * This allows `_findElements` to decide if to explore an element's shadowRoot
   * or not: an element implementing `validate()` is considered validatable, and
   * we don't search for validatables in its shadowRoot.
   * @param {!Node} node
   * @param {!boolean} ignoreName
   * @return {boolean}
   * @private
   */_isSubmittable:function _isSubmittable(node,ignoreName){return!node.disabled&&(ignoreName?node.name||"function"===typeof node.validate:node.name)},_serializeElementValues:function _serializeElementValues(element){// We will assume that every custom element that needs to be serialized
// has a `value` property, and it contains the correct value.
// The only weird one is an element that implements
// IronCheckedElementBehaviour, in which case like the native checkbox/radio
// button, it's only used when checked. For native elements, from
// https://www.w3.org/TR/html5/forms.html#the-form-element. Native
// submittable elements: button, input, keygen, object, select, textarea;
// 1. We will skip `keygen and `object` for this iteration, and deal with
// them if they're actually required.
// 2. <button> and <textarea> have a `value` property, so they behave like
//    the custom elements.
// 3. <select> can have multiple options selected, in which case its
//    `value` is incorrect, and we must use the values of each of its
//    `selectedOptions`
// 4. <input> can have a whole bunch of behaviours, so it's handled
// separately.
// 5. Buttons are hard. The button that was clicked to submit the form
//    is the one who's name/value gets sent to the server.
var tag=element.tagName.toLowerCase();if("button"===tag||"input"===tag&&("submit"===element.type||"reset"===element.type)){return[]}if("select"===tag){return this._serializeSelectValues(element)}else if("input"===tag){return this._serializeInputValues(element)}else{if(element._hasIronCheckedElementBehavior&&!element.checked)return[];return[element.value]}},_serializeSelectValues:function _serializeSelectValues(element){// A <select multiple> has an array of options, some of which can be
// selected.
for(var values=[],i=0;i<element.options.length;i++){if(element.options[i].selected){values.push(element.options[i].value)}}return values},_serializeInputValues:function _serializeInputValues(element){// Most of the inputs use their 'value' attribute, with the exception
// of radio buttons, checkboxes and file.
var type=element.type.toLowerCase();// Don't do anything for unchecked checkboxes/radio buttons.
// Don't do anything for file, since that requires a different request.
if(("checkbox"===type||"radio"===type)&&!element.checked||"file"===type){return[]}return[element.value]},_createHiddenElement:function _createHiddenElement(name,value){var input=document.createElement("input");input.setAttribute("type","hidden");input.setAttribute("name",name);input.setAttribute("value",value);return input},_addSerializedElement:function _addSerializedElement(json,name,value){// If the name doesn't exist, add it. Otherwise, serialize it to
// an array,
if(json[name]===void 0){json[name]=value}else{if(!Array.isArray(json[name])){json[name]=[json[name]]}json[name].push(value)}}});var IronMeta=/*#__PURE__*/function(){/**
   * @param {{
   *   type: (string|null|undefined),
   *   key: (string|null|undefined),
   *   value: *,
   * }=} options
   */function IronMeta(options){babelHelpers.classCallCheck(this,IronMeta);IronMeta[" "](options);/** @type {string} */this.type=options&&options.type||"default";/** @type {string|null|undefined} */this.key=options&&options.key;if(options&&"value"in options){/** @type {*} */this.value=options.value}}/** @return {*} */babelHelpers.createClass(IronMeta,[{key:"byKey",/**
     * @param {string} key
     * @return {*}
     */value:function byKey(key){this.key=key;return this.value}},{key:"value",get:function get(){var type=this.type,key=this.key;if(type&&key){return IronMeta.types[type]&&IronMeta.types[type][key]}}/** @param {*} value */,set:function set(value){var type=this.type,key=this.key;if(type&&key){type=IronMeta.types[type]=IronMeta.types[type]||{};if(null==value){delete type[key]}else{type[key]=value}}}/** @return {!Array<*>} */},{key:"list",get:function get(){var type=this.type;if(type){var items=IronMeta.types[this.type];if(!items){return[]}return Object.keys(items).map(function(key){return metaDatas[this.type][key]},this)}}}]);return IronMeta}();_exports.IronMeta=IronMeta;;// This function is used to convince Closure not to remove constructor calls
// for instances that are not held anywhere. For example, when
// `new IronMeta({...})` is used only for the side effect of adding a value.
IronMeta[" "]=function(){};IronMeta.types={};var metaDatas=IronMeta.types;/**
                                `iron-meta` is a generic element you can use for sharing information across the
                                DOM tree. It uses [monostate pattern](http://c2.com/cgi/wiki?MonostatePattern)
                                such that any instance of iron-meta has access to the shared information. You
                                can use `iron-meta` to share whatever you want (or create an extension [like
                                x-meta] for enhancements).
                                
                                The `iron-meta` instances containing your actual data can be loaded in an
                                import, or constructed in any way you see fit. The only requirement is that you
                                create them before you try to access them.
                                
                                Examples:
                                
                                If I create an instance like this:
                                
                                    <iron-meta key="info" value="foo/bar"></iron-meta>
                                
                                Note that value="foo/bar" is the metadata I've defined. I could define more
                                attributes or use child nodes to define additional metadata.
                                
                                Now I can access that element (and it's metadata) from any iron-meta instance
                                via the byKey method, e.g.
                                
                                    meta.byKey('info');
                                
                                Pure imperative form would be like:
                                
                                    document.createElement('iron-meta').byKey('info');
                                
                                Or, in a Polymer element, you can include a meta in your template:
                                
                                    <iron-meta id="meta"></iron-meta>
                                    ...
                                    this.$.meta.byKey('info');
                                
                                @group Iron Elements
                                @demo demo/index.html
                                @element iron-meta
                                */(0,_shopApp.Polymer)({is:"iron-meta",properties:{/**
     * The type of meta-data.  All meta-data of the same type is stored
     * together.
     * @type {string}
     */type:{type:String,value:"default"},/**
     * The key used to store `value` under the `type` namespace.
     * @type {?string}
     */key:{type:String},/**
     * The meta-data to store or retrieve.
     * @type {*}
     */value:{type:String,notify:!0},/**
     * If true, `value` is set to the iron-meta instance itself.
     */self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function __computeMeta(type,key,value){var meta=new IronMeta({type:type,key:key});if(value!==void 0&&value!==meta.value){meta.value=value}else if(this.value!==meta.value){this.value=meta.value}return meta},get list(){return this.__meta&&this.__meta.list},_selfChanged:function _selfChanged(self){if(self){this.value=this}},/**
   * Retrieves meta data value by key.
   *
   * @method byKey
   * @param {string} key The key of the meta-data to be returned.
   * @return {*}
   */byKey:function byKey(key){return new IronMeta({type:this.type,key:key}).value}});var ironMeta={IronMeta:IronMeta};_exports.$ironMeta=ironMeta;(0,_shopApp.Polymer)({_template:(0,_shopApp.html$1)(_templateObject3_3f0e9a00e61411ee9d65b9d111681715()),is:"iron-icon",properties:{/**
     * The name of the icon to use. The name should be of the form:
     * `iconset_name:icon_name`.
     */icon:{type:String},/**
     * The name of the theme to used, if one is specified by the
     * iconset.
     */theme:{type:String},/**
     * If using iron-icon without an iconset, you can set the src to be
     * the URL of an individual icon image file. Note that this will take
     * precedence over a given icon attribute.
     */src:{type:String},/**
     * @type {!IronMeta}
     */_meta:{value:_shopApp.Base.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function _iconChanged(icon){var parts=(icon||"").split(":");this._iconName=parts.pop();this._iconsetName=parts.pop()||this._DEFAULT_ICONSET;this._updateIcon()},_srcChanged:function _srcChanged(src){this._updateIcon()},_usesIconset:function _usesIconset(){return this.icon||!this.src},/** @suppress {visibility} */_updateIcon:function _updateIcon(){if(this._usesIconset()){if(this._img&&this._img.parentNode){(0,_shopApp.dom)(this.root).removeChild(this._img)}if(""===this._iconName){if(this._iconset){this._iconset.removeIcon(this)}}else if(this._iconsetName&&this._meta){this._iconset=/** @type {?Polymer.Iconset} */this._meta.byKey(this._iconsetName);if(this._iconset){this._iconset.applyIcon(this,this._iconName,this.theme);this.unlisten(window,"iron-iconset-added","_updateIcon")}else{this.listen(window,"iron-iconset-added","_updateIcon")}}}else{if(this._iconset){this._iconset.removeIcon(this)}if(!this._img){this._img=document.createElement("img");this._img.style.width="100%";this._img.style.height="100%";this._img.draggable=!1}this._img.src=this.src;(0,_shopApp.dom)(this.root).appendChild(this._img)}}});(0,_shopApp.Polymer)({is:"iron-iconset-svg",properties:{/**
     * The name of the iconset.
     */name:{type:String,observer:"_nameChanged"},/**
     * The size of an individual icon. Note that icons must be square.
     */size:{type:Number,value:24},/**
     * Set to true to enable mirroring of icons where specified when they are
     * stamped. Icons that should be mirrored should be decorated with a
     * `mirror-in-rtl` attribute.
     *
     * NOTE: For performance reasons, direction will be resolved once per
     * document per iconset, so moving icons in and out of RTL subtrees will
     * not cause their mirrored state to change.
     */rtlMirroring:{type:Boolean,value:!1},/**
     * Set to true to measure RTL based on the dir attribute on the body or
     * html elements (measured on document.body or document.documentElement as
     * available).
     */useGlobalRtlAttribute:{type:Boolean,value:!1}},created:function created(){this._meta=new IronMeta({type:"iconset",key:null,value:null})},attached:function attached(){this.style.display="none"},/**
   * Construct an array of all icon names in this iconset.
   *
   * @return {!Array} Array of icon names.
   */getIconNames:function getIconNames(){this._icons=this._createIconMap();return Object.keys(this._icons).map(function(n){return this.name+":"+n},this)},/**
   * Applies an icon to the given element.
   *
   * An svg icon is prepended to the element's shadowRoot if it exists,
   * otherwise to the element itself.
   *
   * If RTL mirroring is enabled, and the icon is marked to be mirrored in
   * RTL, the element will be tested (once and only once ever for each
   * iconset) to determine the direction of the subtree the element is in.
   * This direction will apply to all future icon applications, although only
   * icons marked to be mirrored will be affected.
   *
   * @method applyIcon
   * @param {Element} element Element to which the icon is applied.
   * @param {string} iconName Name of the icon to apply.
   * @return {?Element} The svg element which renders the icon.
   */applyIcon:function applyIcon(element,iconName){// Remove old svg element
this.removeIcon(element);// install new svg element
var svg=this._cloneIcon(iconName,this.rtlMirroring&&this._targetIsRTL(element));if(svg){// insert svg element into shadow root, if it exists
var pde=(0,_shopApp.dom)(element.root||element);pde.insertBefore(svg,pde.childNodes[0]);return element._svgIcon=svg}return null},/**
   * Remove an icon from the given element by undoing the changes effected
   * by `applyIcon`.
   *
   * @param {Element} element The element from which the icon is removed.
   */removeIcon:function removeIcon(element){// Remove old svg element
if(element._svgIcon){(0,_shopApp.dom)(element.root||element).removeChild(element._svgIcon);element._svgIcon=null}},/**
   * Measures and memoizes the direction of the element. Note that this
   * measurement is only done once and the result is memoized for future
   * invocations.
   */_targetIsRTL:function _targetIsRTL(target){if(null==this.__targetIsRTL){if(this.useGlobalRtlAttribute){var globalElement=document.body&&document.body.hasAttribute("dir")?document.body:document.documentElement;this.__targetIsRTL="rtl"===globalElement.getAttribute("dir")}else{if(target&&target.nodeType!==Node.ELEMENT_NODE){target=target.host}this.__targetIsRTL=target&&"rtl"===window.getComputedStyle(target).direction}}return this.__targetIsRTL},/**
   *
   * When name is changed, register iconset metadata
   *
   */_nameChanged:function _nameChanged(){this._meta.value=null;this._meta.key=this.name;this._meta.value=this;this.async(function(){this.fire("iron-iconset-added",this,{node:window})})},/**
   * Create a map of child SVG elements by id.
   *
   * @return {!Object} Map of id's to SVG elements.
   */_createIconMap:function _createIconMap(){// Objects chained to Object.prototype (`{}`) have members. Specifically,
// on FF there is a `watch` method that confuses the icon map, so we
// need to use a null-based object here.
var icons=Object.create(null);(0,_shopApp.dom)(this).querySelectorAll("[id]").forEach(function(icon){icons[icon.id]=icon});return icons},/**
   * Produce installable clone of the SVG element matching `id` in this
   * iconset, or `undefined` if there is no matching element.
   *
   * @return {Element} Returns an installable clone of the SVG element
   * matching `id`.
   */_cloneIcon:function _cloneIcon(id,mirrorAllowed){// create the icon map on-demand, since the iconset itself has no discrete
// signal to know when it's children are fully parsed
this._icons=this._icons||this._createIconMap();return this._prepareSvgClone(this._icons[id],this.size,mirrorAllowed)},/**
   * @param {Element} sourceSvg
   * @param {number} size
   * @param {Boolean} mirrorAllowed
   * @return {Element}
   */_prepareSvgClone:function _prepareSvgClone(sourceSvg,size,mirrorAllowed){if(sourceSvg){var content=sourceSvg.cloneNode(!0),svg=document.createElementNS("http://www.w3.org/2000/svg","svg"),viewBox=content.getAttribute("viewBox")||"0 0 "+size+" "+size,cssText="pointer-events: none; display: block; width: 100%; height: 100%;";if(mirrorAllowed&&content.hasAttribute("mirror-in-rtl")){cssText+="-webkit-transform:scale(-1,1);transform:scale(-1,1);transform-origin:center;"}svg.setAttribute("viewBox",viewBox);svg.setAttribute("preserveAspectRatio","xMidYMid meet");svg.setAttribute("focusable","false");// TODO(dfreedm): `pointer-events: none` works around
// https://crbug.com/370136
// TODO(sjmiles): inline style may not be ideal, but avoids requiring a
// shadow-root
svg.style.cssText=cssText;svg.appendChild(content).removeAttribute("id");return svg}return null}});var p=Element.prototype,matches=p.matches||p.matchesSelector||p.mozMatchesSelector||p.msMatchesSelector||p.oMatchesSelector||p.webkitMatchesSelector,IronFocusablesHelper={/**
   * Returns a sorted array of tabbable nodes, including the root node.
   * It searches the tabbable nodes in the light and shadow dom of the chidren,
   * sorting the result by tabindex.
   * @param {!Node} node
   * @return {!Array<!HTMLElement>}
   */getTabbableNodes:function getTabbableNodes(node){var result=[],needsSortByTabIndex=this._collectTabbableNodes(node,result);// If there is at least one element with tabindex > 0, we need to sort
// the final array by tabindex.
if(needsSortByTabIndex){return this._sortByTabIndex(result)}return result},/**
   * Returns if a element is focusable.
   * @param {!HTMLElement} element
   * @return {boolean}
   */isFocusable:function isFocusable(element){// From http://stackoverflow.com/a/1600194/4228703:
// There isn't a definite list, it's up to the browser. The only
// standard we have is DOM Level 2 HTML
// https://www.w3.org/TR/DOM-Level-2-HTML/html.html, according to which the
// only elements that have a focus() method are HTMLInputElement,
// HTMLSelectElement, HTMLTextAreaElement and HTMLAnchorElement. This
// notably omits HTMLButtonElement and HTMLAreaElement. Referring to these
// tests with tabbables in different browsers
// http://allyjs.io/data-tables/focusable.html
// Elements that cannot be focused if they have [disabled] attribute.
if(matches.call(element,"input, select, textarea, button, object")){return matches.call(element,":not([disabled])")}// Elements that can be focused even if they have [disabled] attribute.
return matches.call(element,"a[href], area[href], iframe, [tabindex], [contentEditable]")},/**
   * Returns if a element is tabbable. To be tabbable, a element must be
   * focusable, visible, and with a tabindex !== -1.
   * @param {!HTMLElement} element
   * @return {boolean}
   */isTabbable:function isTabbable(element){return this.isFocusable(element)&&matches.call(element,":not([tabindex=\"-1\"])")&&this._isVisible(element)},/**
   * Returns the normalized element tabindex. If not focusable, returns -1.
   * It checks for the attribute "tabindex" instead of the element property
   * `tabIndex` since browsers assign different values to it.
   * e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
   * @param {!HTMLElement} element
   * @return {!number}
   * @private
   */_normalizedTabIndex:function _normalizedTabIndex(element){if(this.isFocusable(element)){var tabIndex=element.getAttribute("tabindex")||0;return+tabIndex}return-1},/**
   * Searches for nodes that are tabbable and adds them to the `result` array.
   * Returns if the `result` array needs to be sorted by tabindex.
   * @param {!Node} node The starting point for the search; added to `result`
   * if tabbable.
   * @param {!Array<!HTMLElement>} result
   * @return {boolean}
   * @private
   */_collectTabbableNodes:function _collectTabbableNodes(node,result){// If not an element or not visible, no need to explore children.
if(node.nodeType!==Node.ELEMENT_NODE||!this._isVisible(node)){return!1}var element=/** @type {!HTMLElement} */node,tabIndex=this._normalizedTabIndex(element),needsSort=0<tabIndex;if(0<=tabIndex){result.push(element)}// In ShadowDOM v1, tab order is affected by the order of distrubution.
// E.g. getTabbableNodes(#root) in ShadowDOM v1 should return [#A, #B];
// in ShadowDOM v0 tab order is not affected by the distrubution order,
// in fact getTabbableNodes(#root) returns [#B, #A].
//  <div id="root">
//   <!-- shadow -->
//     <slot name="a">
//     <slot name="b">
//   <!-- /shadow -->
//   <input id="A" slot="a">
//   <input id="B" slot="b" tabindex="1">
//  </div>
// TODO(valdrin) support ShadowDOM v1 when upgrading to Polymer v2.0.
var children;if("content"===element.localName||"slot"===element.localName){children=(0,_shopApp.dom)(element).getDistributedNodes()}else{// Use shadow root if possible, will check for distributed nodes.
children=(0,_shopApp.dom)(element.root||element).children}for(var i=0;i<children.length;i++){// Ensure method is always invoked to collect tabbable children.
needsSort=this._collectTabbableNodes(children[i],result)||needsSort}return needsSort},/**
   * Returns false if the element has `visibility: hidden` or `display: none`
   * @param {!HTMLElement} element
   * @return {boolean}
   * @private
   */_isVisible:function _isVisible(element){// Check inline style first to save a re-flow. If looks good, check also
// computed style.
var style=element.style;if("hidden"!==style.visibility&&"none"!==style.display){style=window.getComputedStyle(element);return"hidden"!==style.visibility&&"none"!==style.display}return!1},/**
   * Sorts an array of tabbable elements by tabindex. Returns a new array.
   * @param {!Array<!HTMLElement>} tabbables
   * @return {!Array<!HTMLElement>}
   * @private
   */_sortByTabIndex:function _sortByTabIndex(tabbables){// Implement a merge sort as Array.prototype.sort does a non-stable sort
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
var len=tabbables.length;if(2>len){return tabbables}var pivot=Math.ceil(len/2),left=this._sortByTabIndex(tabbables.slice(0,pivot)),right=this._sortByTabIndex(tabbables.slice(pivot));return this._mergeSortByTabIndex(left,right)},/**
   * Merge sort iterator, merges the two arrays into one, sorted by tab index.
   * @param {!Array<!HTMLElement>} left
   * @param {!Array<!HTMLElement>} right
   * @return {!Array<!HTMLElement>}
   * @private
   */_mergeSortByTabIndex:function _mergeSortByTabIndex(left,right){var result=[];while(0<left.length&&0<right.length){if(this._hasLowerTabOrder(left[0],right[0])){result.push(right.shift())}else{result.push(left.shift())}}return result.concat(left,right)},/**
   * Returns if element `a` has lower tab order compared to element `b`
   * (both elements are assumed to be focusable and tabbable).
   * Elements with tabindex = 0 have lower tab order compared to elements
   * with tabindex > 0.
   * If both have same tabindex, it returns false.
   * @param {!HTMLElement} a
   * @param {!HTMLElement} b
   * @return {boolean}
   * @private
   */_hasLowerTabOrder:function _hasLowerTabOrder(a,b){// Normalize tabIndexes
// e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
var ati=Math.max(a.tabIndex,0),bti=Math.max(b.tabIndex,0);return 0===ati||0===bti?bti>ati:ati>bti}};_exports.IronFocusablesHelper=IronFocusablesHelper;var ironFocusablesHelper={IronFocusablesHelper:IronFocusablesHelper};_exports.$ironFocusablesHelper=ironFocusablesHelper;(0,_shopApp.Polymer)({_template:(0,_shopApp.html$1)(_templateObject4_3f0e9a00e61411ee9d65b9d111681715()),is:"iron-overlay-backdrop",properties:{/**
     * Returns true if the backdrop is opened.
     */opened:{reflectToAttribute:!0,type:Boolean,value:!1,observer:"_openedChanged"}},listeners:{transitionend:"_onTransitionend"},created:function created(){// Used to cancel previous requestAnimationFrame calls when opened changes.
this.__openedRaf=null},attached:function attached(){this.opened&&this._openedChanged(this.opened)},/**
   * Appends the backdrop to document body if needed.
   */prepare:function prepare(){if(this.opened&&!this.parentNode){(0,_shopApp.dom)(document.body).appendChild(this)}},/**
   * Shows the backdrop.
   */open:function open(){this.opened=!0},/**
   * Hides the backdrop.
   */close:function close(){this.opened=!1},/**
   * Removes the backdrop from document body if needed.
   */complete:function complete(){if(!this.opened&&this.parentNode===document.body){(0,_shopApp.dom)(this.parentNode).removeChild(this)}},_onTransitionend:function _onTransitionend(event){if(event&&event.target===this){this.complete()}},/**
   * @param {boolean} opened
   * @private
   */_openedChanged:function _openedChanged(opened){if(opened){// Auto-attach.
this.prepare()}else{// Animation might be disabled via the mixin or opacity custom property.
// If it is disabled in other ways, it's up to the user to call complete.
var cs=window.getComputedStyle(this);if("0s"===cs.transitionDuration||0==cs.opacity){this.complete()}}if(!this.isAttached){return}// Always cancel previous requestAnimationFrame.
if(this.__openedRaf){window.cancelAnimationFrame(this.__openedRaf);this.__openedRaf=null}// Force relayout to ensure proper transitions.
this.scrollTop=this.scrollTop;this.__openedRaf=window.requestAnimationFrame(function(){this.__openedRaf=null;this.toggleClass("opened",this.opened)}.bind(this))}});var IronOverlayManagerClass=function IronOverlayManagerClass(){/**
   * Used to keep track of the opened overlays.
   * @private {!Array<!Element>}
   */this._overlays=[];/**
                           * iframes have a default z-index of 100,
                           * so this default should be at least that.
                           * @private {number}
                           */this._minimumZ=101;/**
                         * Memoized backdrop element.
                         * @private {Element|null}
                         */this._backdropElement=null;// Enable document-wide tap recognizer.
// NOTE: Use useCapture=true to avoid accidentally prevention of the closing
// of an overlay via event.stopPropagation(). The only way to prevent
// closing of an overlay should be through its APIs.
// NOTE: enable tap on <html> to workaround Polymer/polymer#4459
// Pass no-op function because MSEdge 15 doesn't handle null as 2nd argument
// https://github.com/Microsoft/ChakraCore/issues/3863
(0,_shopApp.add)(document.documentElement,"tap",function(){});document.addEventListener("tap",this._onCaptureClick.bind(this),!0);document.addEventListener("focus",this._onCaptureFocus.bind(this),!0);document.addEventListener("keydown",this._onCaptureKeyDown.bind(this),!0)};_exports.IronOverlayManagerClass=IronOverlayManagerClass;IronOverlayManagerClass.prototype={constructor:IronOverlayManagerClass,/**
   * The shared backdrop element.
   * @return {!Element} backdropElement
   */get backdropElement(){if(!this._backdropElement){this._backdropElement=document.createElement("iron-overlay-backdrop")}return this._backdropElement},/**
   * The deepest active element.
   * @return {!Element} activeElement the active element
   */get deepActiveElement(){var active=document.activeElement;// document.activeElement can be null
// https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement
// In IE 11, it can also be an object when operating in iframes.
// In these cases, default it to document.body.
if(!active||!1===babelHelpers.instanceof(active,Element)){active=document.body}while(active.root&&(0,_shopApp.dom)(active.root).activeElement){active=(0,_shopApp.dom)(active.root).activeElement}return active},/**
   * Brings the overlay at the specified index to the front.
   * @param {number} i
   * @private
   */_bringOverlayAtIndexToFront:function _bringOverlayAtIndexToFront(i){var overlay=this._overlays[i];if(!overlay){return}var lastI=this._overlays.length-1,currentOverlay=this._overlays[lastI];// Ensure always-on-top overlay stays on top.
if(currentOverlay&&this._shouldBeBehindOverlay(overlay,currentOverlay)){lastI--}// If already the top element, return.
if(i>=lastI){return}// Update z-index to be on top.
var minimumZ=Math.max(this.currentOverlayZ(),this._minimumZ);if(this._getZ(overlay)<=minimumZ){this._applyOverlayZ(overlay,minimumZ)}// Shift other overlays behind the new on top.
while(i<lastI){this._overlays[i]=this._overlays[i+1];i++}this._overlays[lastI]=overlay},/**
   * Adds the overlay and updates its z-index if it's opened, or removes it if
   * it's closed. Also updates the backdrop z-index.
   * @param {!Element} overlay
   */addOrRemoveOverlay:function addOrRemoveOverlay(overlay){if(overlay.opened){this.addOverlay(overlay)}else{this.removeOverlay(overlay)}},/**
   * Tracks overlays for z-index and focus management.
   * Ensures the last added overlay with always-on-top remains on top.
   * @param {!Element} overlay
   */addOverlay:function addOverlay(overlay){var i=this._overlays.indexOf(overlay);if(0<=i){this._bringOverlayAtIndexToFront(i);this.trackBackdrop();return}var insertionIndex=this._overlays.length,currentOverlay=this._overlays[insertionIndex-1],minimumZ=Math.max(this._getZ(currentOverlay),this._minimumZ),newZ=this._getZ(overlay);// Ensure always-on-top overlay stays on top.
if(currentOverlay&&this._shouldBeBehindOverlay(overlay,currentOverlay)){// This bumps the z-index of +2.
this._applyOverlayZ(currentOverlay,minimumZ);insertionIndex--;// Update minimumZ to match previous overlay's z-index.
var previousOverlay=this._overlays[insertionIndex-1];minimumZ=Math.max(this._getZ(previousOverlay),this._minimumZ)}// Update z-index and insert overlay.
if(newZ<=minimumZ){this._applyOverlayZ(overlay,minimumZ)}this._overlays.splice(insertionIndex,0,overlay);this.trackBackdrop()},/**
   * @param {!Element} overlay
   */removeOverlay:function removeOverlay(overlay){var i=this._overlays.indexOf(overlay);if(-1===i){return}this._overlays.splice(i,1);this.trackBackdrop()},/**
   * Returns the current overlay.
   * @return {!Element|undefined}
   */currentOverlay:function currentOverlay(){var i=this._overlays.length-1;return this._overlays[i]},/**
   * Returns the current overlay z-index.
   * @return {number}
   */currentOverlayZ:function currentOverlayZ(){return this._getZ(this.currentOverlay())},/**
   * Ensures that the minimum z-index of new overlays is at least `minimumZ`.
   * This does not effect the z-index of any existing overlays.
   * @param {number} minimumZ
   */ensureMinimumZ:function ensureMinimumZ(minimumZ){this._minimumZ=Math.max(this._minimumZ,minimumZ)},focusOverlay:function focusOverlay(){var current=/** @type {?} */this.currentOverlay();if(current){current._applyFocus()}},/**
   * Updates the backdrop z-index.
   */trackBackdrop:function trackBackdrop(){var overlay=this._overlayWithBackdrop();// Avoid creating the backdrop if there is no overlay with backdrop.
if(!overlay&&!this._backdropElement){return}this.backdropElement.style.zIndex=this._getZ(overlay)-1;this.backdropElement.opened=!!overlay;// Property observers are not fired until element is attached
// in Polymer 2.x, so we ensure element is attached if needed.
// https://github.com/Polymer/polymer/issues/4526
this.backdropElement.prepare()},/**
   * @return {!Array<!Element>}
   */getBackdrops:function getBackdrops(){for(var backdrops=[],i=0;i<this._overlays.length;i++){if(this._overlays[i].withBackdrop){backdrops.push(this._overlays[i])}}return backdrops},/**
   * Returns the z-index for the backdrop.
   * @return {number}
   */backdropZ:function backdropZ(){return this._getZ(this._overlayWithBackdrop())-1},/**
   * Returns the top opened overlay that has a backdrop.
   * @return {!Element|undefined}
   * @private
   */_overlayWithBackdrop:function _overlayWithBackdrop(){for(var i=this._overlays.length-1;0<=i;i--){if(this._overlays[i].withBackdrop){return this._overlays[i]}}},/**
   * Calculates the minimum z-index for the overlay.
   * @param {Element=} overlay
   * @private
   */_getZ:function _getZ(overlay){var z=this._minimumZ;if(overlay){var z1=+(overlay.style.zIndex||window.getComputedStyle(overlay).zIndex);// Check if is a number
// Number.isNaN not supported in IE 10+
if(z1===z1){z=z1}}return z},/**
   * @param {!Element} element
   * @param {number|string} z
   * @private
   */_setZ:function _setZ(element,z){element.style.zIndex=z},/**
   * @param {!Element} overlay
   * @param {number} aboveZ
   * @private
   */_applyOverlayZ:function _applyOverlayZ(overlay,aboveZ){this._setZ(overlay,aboveZ+2)},/**
   * Returns the deepest overlay in the path.
   * @param {!Array<!Element>=} path
   * @return {!Element|undefined}
   * @suppress {missingProperties}
   * @private
   */_overlayInPath:function _overlayInPath(path){path=path||[];for(var i=0;i<path.length;i++){if(path[i]._manager===this){return path[i]}}},/**
   * Ensures the click event is delegated to the right overlay.
   * @param {!Event} event
   * @private
   */_onCaptureClick:function _onCaptureClick(event){var i=this._overlays.length-1;if(-1===i)return;var path=/** @type {!Array<!EventTarget>} */(0,_shopApp.dom)(event).path,overlay;// Check if clicked outside of overlay.
while((overlay=/** @type {?} */this._overlays[i])&&this._overlayInPath(path)!==overlay){overlay._onCaptureClick(event);if(overlay.allowClickThrough){i--}else{break}}},/**
   * Ensures the focus event is delegated to the right overlay.
   * @param {!Event} event
   * @private
   */_onCaptureFocus:function _onCaptureFocus(event){var overlay=/** @type {?} */this.currentOverlay();if(overlay){overlay._onCaptureFocus(event)}},/**
   * Ensures TAB and ESC keyboard events are delegated to the right overlay.
   * @param {!Event} event
   * @private
   */_onCaptureKeyDown:function _onCaptureKeyDown(event){var overlay=/** @type {?} */this.currentOverlay();if(overlay){if(IronA11yKeysBehavior.keyboardEventMatchesKeys(event,"esc")){overlay._onCaptureEsc(event)}else if(IronA11yKeysBehavior.keyboardEventMatchesKeys(event,"tab")){overlay._onCaptureTab(event)}}},/**
   * Returns if the overlay1 should be behind overlay2.
   * @param {!Element} overlay1
   * @param {!Element} overlay2
   * @return {boolean}
   * @suppress {missingProperties}
   * @private
   */_shouldBeBehindOverlay:function _shouldBeBehindOverlay(overlay1,overlay2){return!overlay1.alwaysOnTop&&overlay2.alwaysOnTop}};var IronOverlayManager=new IronOverlayManagerClass;_exports.IronOverlayManager=IronOverlayManager;var ironOverlayManager={IronOverlayManagerClass:IronOverlayManagerClass,IronOverlayManager:IronOverlayManager};_exports.$ironOverlayManager=ironOverlayManager;var lastTouchPosition={pageX:0,pageY:0},lastRootTarget=null,lastScrollableNodes=[],scrollEvents=[// Modern `wheel` event for mouse wheel scrolling:
"wheel",// Older, non-standard `mousewheel` event for some FF:
"mousewheel",// IE:
"DOMMouseScroll",// Touch enabled devices
"touchstart","touchmove"],_boundScrollHandler;/**
    * Used to avoid computing event.path and filter scrollable nodes (better perf).
    * @type {?EventTarget}
    */_exports._boundScrollHandler=_boundScrollHandler;var currentLockingElement;/**
                            * The IronScrollManager is intended to provide a central source
                            * of authority and control over which elements in a document are currently
                            * allowed to scroll.
                            *
                            */_exports.currentLockingElement=currentLockingElement;"TODO(modulizer): A namespace named Polymer.IronScrollManager was\ndeclared here. The surrounding comments should be reviewed,\nand this string can then be deleted";/**
                                       * The current element that defines the DOM boundaries of the
                                       * scroll lock. This is always the most recently locking element.
                                       *
                                       * @return {!Node|undefined}
                                       */function elementIsScrollLocked(element){var lockingElement=currentLockingElement;if(lockingElement===void 0){return!1}var scrollLocked;if(_hasCachedLockedElement(element)){return!0}if(_hasCachedUnlockedElement(element)){return!1}scrollLocked=!!lockingElement&&lockingElement!==element&&!_composedTreeContains(lockingElement,element);if(scrollLocked){_lockedElementCache.push(element)}else{_unlockedElementCache.push(element)}return scrollLocked}/**
   * Push an element onto the current scroll lock stack. The most recently
   * pushed element and its children will be considered scrollable. All
   * other elements will not be scrollable.
   *
   * Scroll locking is implemented as a stack so that cases such as
   * dropdowns within dropdowns are handled well.
   *
   * @param {!HTMLElement} element The element that should lock scroll.
   */function pushScrollLock(element){// Prevent pushing the same element twice
if(0<=_lockingElements.indexOf(element)){return}if(0===_lockingElements.length){_lockScrollInteractions()}_lockingElements.push(element);_exports.currentLockingElement=currentLockingElement=_lockingElements[_lockingElements.length-1];_exports._lockedElementCache=_lockedElementCache=[];_exports._unlockedElementCache=_unlockedElementCache=[]}/**
   * Remove an element from the scroll lock stack. The element being
   * removed does not need to be the most recently pushed element. However,
   * the scroll lock constraints only change when the most recently pushed
   * element is removed.
   *
   * @param {!HTMLElement} element The element to remove from the scroll
   * lock stack.
   */function removeScrollLock(element){var index=_lockingElements.indexOf(element);if(-1===index){return}_lockingElements.splice(index,1);_exports.currentLockingElement=currentLockingElement=_lockingElements[_lockingElements.length-1];_exports._lockedElementCache=_lockedElementCache=[];_exports._unlockedElementCache=_unlockedElementCache=[];if(0===_lockingElements.length){_unlockScrollInteractions()}}var _lockingElements=[];_exports._lockingElements=_lockingElements;var _lockedElementCache=null;_exports._lockedElementCache=_lockedElementCache;var _unlockedElementCache=null;_exports._unlockedElementCache=_unlockedElementCache;function _hasCachedLockedElement(element){return-1<_lockedElementCache.indexOf(element)}function _hasCachedUnlockedElement(element){return-1<_unlockedElementCache.indexOf(element)}function _composedTreeContains(element,child){// NOTE(cdata): This method iterates over content elements and their
// corresponding distributed nodes to implement a contains-like method
// that pierces through the composed tree of the ShadowDOM. Results of
// this operation are cached (elsewhere) on a per-scroll-lock basis, to
// guard against potentially expensive lookups happening repeatedly as
// a user scrolls / touchmoves.
var contentElements,distributedNodes,contentIndex,nodeIndex;if(element.contains(child)){return!0}contentElements=(0,_shopApp.dom)(element).querySelectorAll("content,slot");for(contentIndex=0;contentIndex<contentElements.length;++contentIndex){distributedNodes=(0,_shopApp.dom)(contentElements[contentIndex]).getDistributedNodes();for(nodeIndex=0;nodeIndex<distributedNodes.length;++nodeIndex){// Polymer 2.x returns slot.assignedNodes which can contain text nodes.
if(distributedNodes[nodeIndex].nodeType!==Node.ELEMENT_NODE)continue;if(_composedTreeContains(distributedNodes[nodeIndex],child)){return!0}}}return!1}function _scrollInteractionHandler(event){// Avoid canceling an event with cancelable=false, e.g. scrolling is in
// progress and cannot be interrupted.
if(event.cancelable&&_shouldPreventScrolling(event)){event.preventDefault()}// If event has targetTouches (touch event), update last touch position.
if(event.targetTouches){var touch=event.targetTouches[0];lastTouchPosition.pageX=touch.pageX;lastTouchPosition.pageY=touch.pageY}}/**
   * @private
   */function _lockScrollInteractions(){_exports._boundScrollHandler=_boundScrollHandler=_boundScrollHandler||_scrollInteractionHandler.bind(void 0);for(var i=0,l=scrollEvents.length;i<l;i++){// NOTE: browsers that don't support objects as third arg will
// interpret it as boolean, hence useCapture = true in this case.
document.addEventListener(scrollEvents[i],_boundScrollHandler,{capture:!0,passive:!1})}}function _unlockScrollInteractions(){for(var i=0,l=scrollEvents.length;i<l;i++){// NOTE: browsers that don't support objects as third arg will
// interpret it as boolean, hence useCapture = true in this case.
document.removeEventListener(scrollEvents[i],_boundScrollHandler,{capture:!0,passive:!1})}}/**
   * Returns true if the event causes scroll outside the current locking
   * element, e.g. pointer/keyboard interactions, or scroll "leaking"
   * outside the locking element when it is already at its scroll boundaries.
   * @param {!Event} event
   * @return {boolean}
   * @private
   */function _shouldPreventScrolling(event){// Update if root target changed. For touch events, ensure we don't
// update during touchmove.
var target=(0,_shopApp.dom)(event).rootTarget;if("touchmove"!==event.type&&lastRootTarget!==target){lastRootTarget=target;lastScrollableNodes=_getScrollableNodes((0,_shopApp.dom)(event).path)}// Prevent event if no scrollable nodes.
if(!lastScrollableNodes.length){return!0}// Don't prevent touchstart event inside the locking element when it has
// scrollable nodes.
if("touchstart"===event.type){return!1}// Get deltaX/Y.
var info=_getScrollInfo(event);// Prevent if there is no child that can scroll.
return!_getScrollingNode(lastScrollableNodes,info.deltaX,info.deltaY)}/**
   * Returns an array of scrollable nodes up to the current locking element,
   * which is included too if scrollable.
   * @param {!Array<!Node>} nodes
   * @return {!Array<!Node>} scrollables
   * @private
   */function _getScrollableNodes(nodes){// Loop from root target to locking element (included).
for(var scrollables=[],lockingIndex=nodes.indexOf(currentLockingElement),i=0;i<=lockingIndex;i++){// Skip non-Element nodes.
if(nodes[i].nodeType!==Node.ELEMENT_NODE){continue}var node=/** @type {!Element} */nodes[i],style=node.style;// Check inline style before checking computed style.
if("scroll"!==style.overflow&&"auto"!==style.overflow){style=window.getComputedStyle(node)}if("scroll"===style.overflow||"auto"===style.overflow){scrollables.push(node)}}return scrollables}/**
   * Returns the node that is scrolling. If there is no scrolling,
   * returns undefined.
   * @param {!Array<!Node>} nodes
   * @param {number} deltaX Scroll delta on the x-axis
   * @param {number} deltaY Scroll delta on the y-axis
   * @return {!Node|undefined}
   * @private
   */function _getScrollingNode(nodes,deltaX,deltaY){// No scroll.
if(!deltaX&&!deltaY){return}// Check only one axis according to where there is more scroll.
// Prefer vertical to horizontal.
for(var verticalScroll=Math.abs(deltaY)>=Math.abs(deltaX),i=0;i<nodes.length;i++){var node=nodes[i],canScroll=!1;if(verticalScroll){// delta < 0 is scroll up, delta > 0 is scroll down.
canScroll=0>deltaY?0<node.scrollTop:node.scrollTop<node.scrollHeight-node.clientHeight}else{// delta < 0 is scroll left, delta > 0 is scroll right.
canScroll=0>deltaX?0<node.scrollLeft:node.scrollLeft<node.scrollWidth-node.clientWidth}if(canScroll){return node}}}/**
   * Returns scroll `deltaX` and `deltaY`.
   * @param {!Event} event The scroll event
   * @return {{deltaX: number, deltaY: number}} Object containing the
   * x-axis scroll delta (positive: scroll right, negative: scroll left,
   * 0: no scroll), and the y-axis scroll delta (positive: scroll down,
   * negative: scroll up, 0: no scroll).
   * @private
   */function _getScrollInfo(event){var info={deltaX:event.deltaX,deltaY:event.deltaY};// Already available.
if("deltaX"in event){}// do nothing, values are already good.
// Safari has scroll info in `wheelDeltaX/Y`.
else if("wheelDeltaX"in event&&"wheelDeltaY"in event){info.deltaX=-event.wheelDeltaX;info.deltaY=-event.wheelDeltaY}// IE10 has only vertical scroll info in `wheelDelta`.
else if("wheelDelta"in event){info.deltaX=0;info.deltaY=-event.wheelDelta}// Firefox has scroll info in `detail` and `axis`.
else if("axis"in event){info.deltaX=1===event.axis?event.detail:0;info.deltaY=2===event.axis?event.detail:0}// On mobile devices, calculate scroll direction.
else if(event.targetTouches){var touch=event.targetTouches[0];// Touch moves from right to left => scrolling goes right.
info.deltaX=lastTouchPosition.pageX-touch.pageX;// Touch moves from down to up => scrolling goes down.
info.deltaY=lastTouchPosition.pageY-touch.pageY}return info}var ironScrollManager={get currentLockingElement(){return currentLockingElement},elementIsScrollLocked:elementIsScrollLocked,pushScrollLock:pushScrollLock,removeScrollLock:removeScrollLock,_lockingElements:_lockingElements,get _lockedElementCache(){return _lockedElementCache},get _unlockedElementCache(){return _unlockedElementCache},_hasCachedLockedElement:_hasCachedLockedElement,_hasCachedUnlockedElement:_hasCachedUnlockedElement,_composedTreeContains:_composedTreeContains,_scrollInteractionHandler:_scrollInteractionHandler,get _boundScrollHandler(){return _boundScrollHandler},_lockScrollInteractions:_lockScrollInteractions,_unlockScrollInteractions:_unlockScrollInteractions,_shouldPreventScrolling:_shouldPreventScrolling,_getScrollableNodes:_getScrollableNodes,_getScrollingNode:_getScrollingNode,_getScrollInfo:_getScrollInfo};_exports.$ironScrollManager=ironScrollManager;var IronOverlayBehaviorImpl={properties:{/**
     * True if the overlay is currently displayed.
     */opened:{observer:"_openedChanged",type:Boolean,value:!1,notify:!0},/**
     * True if the overlay was canceled when it was last closed.
     */canceled:{observer:"_canceledChanged",readOnly:!0,type:Boolean,value:!1},/**
     * Set to true to display a backdrop behind the overlay. It traps the focus
     * within the light DOM of the overlay.
     */withBackdrop:{observer:"_withBackdropChanged",type:Boolean},/**
     * Set to true to disable auto-focusing the overlay or child nodes with
     * the `autofocus` attribute` when the overlay is opened.
     */noAutoFocus:{type:Boolean,value:!1},/**
     * Set to true to disable canceling the overlay with the ESC key.
     */noCancelOnEscKey:{type:Boolean,value:!1},/**
     * Set to true to disable canceling the overlay by clicking outside it.
     */noCancelOnOutsideClick:{type:Boolean,value:!1},/**
     * Contains the reason(s) this overlay was last closed (see
     * `iron-overlay-closed`). `IronOverlayBehavior` provides the `canceled`
     * reason; implementers of the behavior can provide other reasons in
     * addition to `canceled`.
     */closingReason:{// was a getter before, but needs to be a property so other
// behaviors can override this.
type:Object},/**
     * Set to true to enable restoring of focus when overlay is closed.
     */restoreFocusOnClose:{type:Boolean,value:!1},/**
     * Set to true to allow clicks to go through overlays.
     * When the user clicks outside this overlay, the click may
     * close the overlay below.
     */allowClickThrough:{type:Boolean},/**
     * Set to true to keep overlay always on top.
     */alwaysOnTop:{type:Boolean},/**
     * Determines which action to perform when scroll outside an opened overlay
     * happens. Possible values: lock - blocks scrolling from happening, refit -
     * computes the new position on the overlay cancel - causes the overlay to
     * close
     */scrollAction:{type:String},/**
     * Shortcut to access to the overlay manager.
     * @private
     * @type {!IronOverlayManagerClass}
     */_manager:{type:Object,value:IronOverlayManager},/**
     * The node being focused.
     * @type {?Node}
     */_focusedChild:{type:Object}},listeners:{"iron-resize":"_onIronResize"},observers:["__updateScrollObservers(isAttached, opened, scrollAction)"],/**
   * The backdrop element.
   * @return {!Element}
   */get backdropElement(){return this._manager.backdropElement},/**
   * Returns the node to give focus to.
   * @return {!Node}
   */get _focusNode(){return this._focusedChild||(0,_shopApp.dom)(this).querySelector("[autofocus]")||this},/**
   * Array of nodes that can receive focus (overlay included), ordered by
   * `tabindex`. This is used to retrieve which is the first and last focusable
   * nodes in order to wrap the focus for overlays `with-backdrop`.
   *
   * If you know what is your content (specifically the first and last focusable
   * children), you can override this method to return only `[firstFocusable,
   * lastFocusable];`
   * @return {!Array<!Node>}
   * @protected
   */get _focusableNodes(){return IronFocusablesHelper.getTabbableNodes(this)},/**
   * @return {void}
   */ready:function ready(){// Used to skip calls to notifyResize and refit while the overlay is
// animating.
this.__isAnimating=!1;// with-backdrop needs tabindex to be set in order to trap the focus.
// If it is not set, IronOverlayBehavior will set it, and remove it if
// with-backdrop = false.
this.__shouldRemoveTabIndex=!1;// Used for wrapping the focus on TAB / Shift+TAB.
this.__firstFocusableNode=this.__lastFocusableNode=null;// Used by to keep track of the RAF callbacks.
this.__rafs={};// Focused node before overlay gets opened. Can be restored on close.
this.__restoreFocusNode=null;// Scroll info to be restored.
this.__scrollTop=this.__scrollLeft=null;this.__onCaptureScroll=this.__onCaptureScroll.bind(this);// Root nodes hosting the overlay, used to listen for scroll events on them.
this.__rootNodes=null;this._ensureSetup()},attached:function attached(){// Call _openedChanged here so that position can be computed correctly.
if(this.opened){this._openedChanged(this.opened)}this._observer=(0,_shopApp.dom)(this).observeNodes(this._onNodesChange)},detached:function detached(){(0,_shopApp.dom)(this).unobserveNodes(this._observer);this._observer=null;for(var cb in this.__rafs){if(null!==this.__rafs[cb]){cancelAnimationFrame(this.__rafs[cb])}}this.__rafs={};this._manager.removeOverlay(this);// We got detached while animating, ensure we show/hide the overlay
// and fire iron-overlay-opened/closed event!
if(this.__isAnimating){if(this.opened){this._finishRenderOpened()}else{// Restore the focus if necessary.
this._applyFocus();this._finishRenderClosed()}}},/**
   * Toggle the opened state of the overlay.
   */toggle:function toggle(){this._setCanceled(!1);this.opened=!this.opened},/**
   * Open the overlay.
   */open:function open(){this._setCanceled(!1);this.opened=!0},/**
   * Close the overlay.
   */close:function close(){this._setCanceled(!1);this.opened=!1},/**
   * Cancels the overlay.
   * @param {Event=} event The original event
   */cancel:function cancel(event){var cancelEvent=this.fire("iron-overlay-canceled",event,{cancelable:!0});if(cancelEvent.defaultPrevented){return}this._setCanceled(!0);this.opened=!1},/**
   * Invalidates the cached tabbable nodes. To be called when any of the
   * focusable content changes (e.g. a button is disabled).
   */invalidateTabbables:function invalidateTabbables(){this.__firstFocusableNode=this.__lastFocusableNode=null},_ensureSetup:function _ensureSetup(){if(this._overlaySetup){return}this._overlaySetup=!0;this.style.outline="none";this.style.display="none"},/**
   * Called when `opened` changes.
   * @param {boolean=} opened
   * @protected
   */_openedChanged:function _openedChanged(opened){if(opened){this.removeAttribute("aria-hidden")}else{this.setAttribute("aria-hidden","true")}// Defer any animation-related code on attached
// (_openedChanged gets called again on attached).
if(!this.isAttached){return}this.__isAnimating=!0;// Deraf for non-blocking rendering.
this.__deraf("__openedChanged",this.__openedChanged)},_canceledChanged:function _canceledChanged(){this.closingReason=this.closingReason||{};this.closingReason.canceled=this.canceled},_withBackdropChanged:function _withBackdropChanged(){// If tabindex is already set, no need to override it.
if(this.withBackdrop&&!this.hasAttribute("tabindex")){this.setAttribute("tabindex","-1");this.__shouldRemoveTabIndex=!0}else if(this.__shouldRemoveTabIndex){this.removeAttribute("tabindex");this.__shouldRemoveTabIndex=!1}if(this.opened&&this.isAttached){this._manager.trackBackdrop()}},/**
   * tasks which must occur before opening; e.g. making the element visible.
   * @protected
   */_prepareRenderOpened:function _prepareRenderOpened(){// Store focused node.
this.__restoreFocusNode=this._manager.deepActiveElement;// Needed to calculate the size of the overlay so that transitions on its
// size will have the correct starting points.
this._preparePositioning();this.refit();this._finishPositioning();// Safari will apply the focus to the autofocus element when displayed
// for the first time, so we make sure to return the focus where it was.
if(this.noAutoFocus&&document.activeElement===this._focusNode){this._focusNode.blur();this.__restoreFocusNode.focus()}},/**
   * Tasks which cause the overlay to actually open; typically play an
   * animation.
   * @protected
   */_renderOpened:function _renderOpened(){this._finishRenderOpened()},/**
   * Tasks which cause the overlay to actually close; typically play an
   * animation.
   * @protected
   */_renderClosed:function _renderClosed(){this._finishRenderClosed()},/**
   * Tasks to be performed at the end of open action. Will fire
   * `iron-overlay-opened`.
   * @protected
   */_finishRenderOpened:function _finishRenderOpened(){this.notifyResize();this.__isAnimating=!1;this.fire("iron-overlay-opened")},/**
   * Tasks to be performed at the end of close action. Will fire
   * `iron-overlay-closed`.
   * @protected
   */_finishRenderClosed:function _finishRenderClosed(){// Hide the overlay.
this.style.display="none";// Reset z-index only at the end of the animation.
this.style.zIndex="";this.notifyResize();this.__isAnimating=!1;this.fire("iron-overlay-closed",this.closingReason)},_preparePositioning:function _preparePositioning(){this.style.transition=this.style.webkitTransition="none";this.style.transform=this.style.webkitTransform="none";this.style.display=""},_finishPositioning:function _finishPositioning(){// First, make it invisible & reactivate animations.
this.style.display="none";// Force reflow before re-enabling animations so that they don't start.
// Set scrollTop to itself so that Closure Compiler doesn't remove this.
this.scrollTop=this.scrollTop;this.style.transition=this.style.webkitTransition="";this.style.transform=this.style.webkitTransform="";// Now that animations are enabled, make it visible again
this.style.display="";// Force reflow, so that following animations are properly started.
// Set scrollTop to itself so that Closure Compiler doesn't remove this.
this.scrollTop=this.scrollTop},/**
   * Applies focus according to the opened state.
   * @protected
   */_applyFocus:function _applyFocus(){if(this.opened){if(!this.noAutoFocus){this._focusNode.focus()}}else{// Restore focus.
if(this.restoreFocusOnClose&&this.__restoreFocusNode){// If the activeElement is `<body>` or inside the overlay,
// we are allowed to restore the focus. In all the other
// cases focus might have been moved elsewhere by another
// component or by an user interaction (e.g. click on a
// button outside the overlay).
var activeElement=this._manager.deepActiveElement;if(activeElement===document.body||(0,_shopApp.dom)(this).deepContains(activeElement)){this.__restoreFocusNode.focus()}}this.__restoreFocusNode=null;this._focusNode.blur();this._focusedChild=null}},/**
   * Cancels (closes) the overlay. Call when click happens outside the overlay.
   * @param {!Event} event
   * @protected
   */_onCaptureClick:function _onCaptureClick(event){if(!this.noCancelOnOutsideClick){this.cancel(event)}},/**
   * Keeps track of the focused child. If withBackdrop, traps focus within
   * overlay.
   * @param {!Event} event
   * @protected
   */_onCaptureFocus:function _onCaptureFocus(event){if(!this.withBackdrop){return}var path=(0,_shopApp.dom)(event).path;if(-1===path.indexOf(this)){event.stopPropagation();this._applyFocus()}else{this._focusedChild=path[0]}},/**
   * Handles the ESC key event and cancels (closes) the overlay.
   * @param {!Event} event
   * @protected
   */_onCaptureEsc:function _onCaptureEsc(event){if(!this.noCancelOnEscKey){this.cancel(event)}},/**
   * Handles TAB key events to track focus changes.
   * Will wrap focus for overlays withBackdrop.
   * @param {!Event} event
   * @protected
   */_onCaptureTab:function _onCaptureTab(event){if(!this.withBackdrop){return}this.__ensureFirstLastFocusables();// TAB wraps from last to first focusable.
// Shift + TAB wraps from first to last focusable.
var shift=event.shiftKey,nodeToCheck=shift?this.__firstFocusableNode:this.__lastFocusableNode,nodeToSet=shift?this.__lastFocusableNode:this.__firstFocusableNode,shouldWrap=!1;if(nodeToCheck===nodeToSet){// If nodeToCheck is the same as nodeToSet, it means we have an overlay
// with 0 or 1 focusables; in either case we still need to trap the
// focus within the overlay.
shouldWrap=!0}else{// In dom=shadow, the manager will receive focus changes on the main
// root but not the ones within other shadow roots, so we can't rely on
// _focusedChild, but we should check the deepest active element.
var focusedNode=this._manager.deepActiveElement;// If the active element is not the nodeToCheck but the overlay itself,
// it means the focus is about to go outside the overlay, hence we
// should prevent that (e.g. user opens the overlay and hit Shift+TAB).
shouldWrap=focusedNode===nodeToCheck||focusedNode===this}if(shouldWrap){// When the overlay contains the last focusable element of the document
// and it's already focused, pressing TAB would move the focus outside
// the document (e.g. to the browser search bar). Similarly, when the
// overlay contains the first focusable element of the document and it's
// already focused, pressing Shift+TAB would move the focus outside the
// document (e.g. to the browser search bar).
// In both cases, we would not receive a focus event, but only a blur.
// In order to achieve focus wrapping, we prevent this TAB event and
// force the focus. This will also prevent the focus to temporarily move
// outside the overlay, which might cause scrolling.
event.preventDefault();this._focusedChild=nodeToSet;this._applyFocus()}},/**
   * Refits if the overlay is opened and not animating.
   * @protected
   */_onIronResize:function _onIronResize(){if(this.opened&&!this.__isAnimating){this.__deraf("refit",this.refit)}},/**
   * Will call notifyResize if overlay is opened.
   * Can be overridden in order to avoid multiple observers on the same node.
   * @protected
   */_onNodesChange:function _onNodesChange(){if(this.opened&&!this.__isAnimating){// It might have added focusable nodes, so invalidate cached values.
this.invalidateTabbables();this.notifyResize()}},/**
   * Updates the references to the first and last focusable nodes.
   * @private
   */__ensureFirstLastFocusables:function __ensureFirstLastFocusables(){var focusableNodes=this._focusableNodes;this.__firstFocusableNode=focusableNodes[0];this.__lastFocusableNode=focusableNodes[focusableNodes.length-1]},/**
   * Tasks executed when opened changes: prepare for the opening, move the
   * focus, update the manager, render opened/closed.
   * @private
   */__openedChanged:function __openedChanged(){if(this.opened){// Make overlay visible, then add it to the manager.
this._prepareRenderOpened();this._manager.addOverlay(this);// Move the focus to the child node with [autofocus].
this._applyFocus();this._renderOpened()}else{// Remove overlay, then restore the focus before actually closing.
this._manager.removeOverlay(this);this._applyFocus();this._renderClosed()}},/**
   * Debounces the execution of a callback to the next animation frame.
   * @param {!string} jobname
   * @param {!Function} callback Always bound to `this`
   * @private
   */__deraf:function __deraf(jobname,callback){var rafs=this.__rafs;if(null!==rafs[jobname]){cancelAnimationFrame(rafs[jobname])}rafs[jobname]=requestAnimationFrame(function nextAnimationFrame(){rafs[jobname]=null;callback.call(this)}.bind(this))},/**
   * @param {boolean} isAttached
   * @param {boolean} opened
   * @param {string=} scrollAction
   * @private
   */__updateScrollObservers:function __updateScrollObservers(isAttached,opened,scrollAction){if(!isAttached||!opened||!this.__isValidScrollAction(scrollAction)){removeScrollLock(this);this.__removeScrollListeners()}else{if("lock"===scrollAction){this.__saveScrollPosition();pushScrollLock(this)}this.__addScrollListeners()}},/**
   * @private
   */__addScrollListeners:function __addScrollListeners(){if(!this.__rootNodes){this.__rootNodes=[];// Listen for scroll events in all shadowRoots hosting this overlay only
// when in native ShadowDOM.
if(_shopApp.useShadow){var node=this;while(node){if(node.nodeType===Node.DOCUMENT_FRAGMENT_NODE&&node.host){this.__rootNodes.push(node)}node=node.host||node.assignedSlot||node.parentNode}}this.__rootNodes.push(document)}this.__rootNodes.forEach(function(el){el.addEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})},this)},/**
   * @private
   */__removeScrollListeners:function __removeScrollListeners(){if(this.__rootNodes){this.__rootNodes.forEach(function(el){el.removeEventListener("scroll",this.__onCaptureScroll,{capture:!0,passive:!0})},this)}if(!this.isAttached){this.__rootNodes=null}},/**
   * @param {string=} scrollAction
   * @return {boolean}
   * @private
   */__isValidScrollAction:function __isValidScrollAction(scrollAction){return"lock"===scrollAction||"refit"===scrollAction||"cancel"===scrollAction},/**
   * @private
   */__onCaptureScroll:function __onCaptureScroll(event){if(this.__isAnimating){return}// Check if scroll outside the overlay.
if(0<=(0,_shopApp.dom)(event).path.indexOf(this)){return}switch(this.scrollAction){case"lock":// NOTE: scrolling might happen if a scroll event is not cancellable, or
// if user pressed keys that cause scrolling (they're not prevented in
// order not to break a11y features like navigate with arrow keys).
this.__restoreScrollPosition();break;case"refit":this.__deraf("refit",this.refit);break;case"cancel":this.cancel(event);break;}},/**
   * Memoizes the scroll position of the outside scrolling element.
   * @private
   */__saveScrollPosition:function __saveScrollPosition(){if(document.scrollingElement){this.__scrollTop=document.scrollingElement.scrollTop;this.__scrollLeft=document.scrollingElement.scrollLeft}else{// Since we don't know if is the body or html, get max.
this.__scrollTop=Math.max(document.documentElement.scrollTop,document.body.scrollTop);this.__scrollLeft=Math.max(document.documentElement.scrollLeft,document.body.scrollLeft)}},/**
   * Resets the scroll position of the outside scrolling element.
   * @private
   */__restoreScrollPosition:function __restoreScrollPosition(){if(document.scrollingElement){document.scrollingElement.scrollTop=this.__scrollTop;document.scrollingElement.scrollLeft=this.__scrollLeft}else{// Since we don't know if is the body or html, set both.
document.documentElement.scrollTop=document.body.scrollTop=this.__scrollTop;document.documentElement.scrollLeft=document.body.scrollLeft=this.__scrollLeft}}};/**
     Use `Polymer.IronOverlayBehavior` to implement an element that can be hidden
     or shown, and displays on top of other content. It includes an optional
     backdrop, and can be used to implement a variety of UI controls including
     dialogs and drop downs. Multiple overlays may be displayed at once.
   
     See the [demo source
     code](https://github.com/PolymerElements/iron-overlay-behavior/blob/master/demo/simple-overlay.html)
     for an example.
   
     ### Closing and canceling
   
     An overlay may be hidden by closing or canceling. The difference between close
     and cancel is user intent. Closing generally implies that the user
     acknowledged the content on the overlay. By default, it will cancel whenever
     the user taps outside it or presses the escape key. This behavior is
     configurable with the `no-cancel-on-esc-key` and the
     `no-cancel-on-outside-click` properties. `close()` should be called explicitly
     by the implementer when the user interacts with a control in the overlay
     element. When the dialog is canceled, the overlay fires an
     'iron-overlay-canceled' event. Call `preventDefault` on this event to prevent
     the overlay from closing.
   
     ### Positioning
   
     By default the element is sized and positioned to fit and centered inside the
     window. You can position and size it manually using CSS. See
     `Polymer.IronFitBehavior`.
   
     ### Backdrop
   
     Set the `with-backdrop` attribute to display a backdrop behind the overlay.
     The backdrop is appended to `<body>` and is of type `<iron-overlay-backdrop>`.
     See its doc page for styling options.
   
     In addition, `with-backdrop` will wrap the focus within the content in the
     light DOM. Override the [`_focusableNodes`
     getter](#Polymer.IronOverlayBehavior:property-_focusableNodes) to achieve a
     different behavior.
   
     ### Limitations
   
     The element is styled to appear on top of other content by setting its
     `z-index` property. You must ensure no element has a stacking context with a
     higher `z-index` than its parent stacking context. You should place this
     element as a child of `<body>` whenever possible.
   
     @demo demo/index.html
     @polymerBehavior
    */_exports.IronOverlayBehaviorImpl=IronOverlayBehaviorImpl;var IronOverlayBehavior=[IronFitBehavior,_shopApp.IronResizableBehavior,IronOverlayBehaviorImpl];/**
                                                                                                       * Fired after the overlay opens.
                                                                                                       * @event iron-overlay-opened
                                                                                                       */ /**
                                                                                                           * Fired when the overlay is canceled, but before it is closed.
                                                                                                           * @event iron-overlay-canceled
                                                                                                           * @param {Event} event The closing of the overlay can be prevented
                                                                                                           * by calling `event.preventDefault()`. The `event.detail` is the original event
                                                                                                           * that originated the canceling (e.g. ESC keyboard event or click event outside
                                                                                                           * the overlay).
                                                                                                           */ /**
                                                                                                               * Fired after the overlay closes.
                                                                                                               * @event iron-overlay-closed
                                                                                                               * @param {Event} event The `event.detail` is the `closingReason` property
                                                                                                               * (contains `canceled`, whether the overlay was canceled).
                                                                                                               */_exports.IronOverlayBehavior=IronOverlayBehavior;var ironOverlayBehavior={IronOverlayBehaviorImpl:IronOverlayBehaviorImpl,IronOverlayBehavior:IronOverlayBehavior};_exports.$ironOverlayBehavior=ironOverlayBehavior;var Utility={distance:function distance(x1,y1,x2,y2){var xDelta=x1-x2,yDelta=y1-y2;return Math.sqrt(xDelta*xDelta+yDelta*yDelta)},now:window.performance&&window.performance.now?window.performance.now.bind(window.performance):Date.now};/**
    * @param {HTMLElement} element
    * @constructor
    */function ElementMetrics(element){this.element=element;this.width=this.boundingRect.width;this.height=this.boundingRect.height;this.size=Math.max(this.width,this.height)}ElementMetrics.prototype={get boundingRect(){return this.element.getBoundingClientRect()},furthestCornerDistanceFrom:function furthestCornerDistanceFrom(x,y){var topLeft=Utility.distance(x,y,0,0),topRight=Utility.distance(x,y,this.width,0),bottomLeft=Utility.distance(x,y,0,this.height),bottomRight=Utility.distance(x,y,this.width,this.height);return Math.max(topLeft,topRight,bottomLeft,bottomRight)}};/**
    * @param {HTMLElement} element
    * @constructor
    */function Ripple(element){this.element=element;this.color=window.getComputedStyle(element).color;this.wave=document.createElement("div");this.waveContainer=document.createElement("div");this.wave.style.backgroundColor=this.color;this.wave.classList.add("wave");this.waveContainer.classList.add("wave-container");(0,_shopApp.dom)(this.waveContainer).appendChild(this.wave);this.resetInteractionState()}Ripple.MAX_RADIUS=300;Ripple.prototype={get recenters(){return this.element.recenters},get center(){return this.element.center},get mouseDownElapsed(){var elapsed;if(!this.mouseDownStart){return 0}elapsed=Utility.now()-this.mouseDownStart;if(this.mouseUpStart){elapsed-=this.mouseUpElapsed}return elapsed},get mouseUpElapsed(){return this.mouseUpStart?Utility.now()-this.mouseUpStart:0},get mouseDownElapsedSeconds(){return this.mouseDownElapsed/1e3},get mouseUpElapsedSeconds(){return this.mouseUpElapsed/1e3},get mouseInteractionSeconds(){return this.mouseDownElapsedSeconds+this.mouseUpElapsedSeconds},get initialOpacity(){return this.element.initialOpacity},get opacityDecayVelocity(){return this.element.opacityDecayVelocity},get radius(){var width2=this.containerMetrics.width*this.containerMetrics.width,height2=this.containerMetrics.height*this.containerMetrics.height,waveRadius=1.1*Math.min(Math.sqrt(width2+height2),Ripple.MAX_RADIUS)+5,duration=1.1-.2*(waveRadius/Ripple.MAX_RADIUS),timeNow=this.mouseInteractionSeconds/duration,size=waveRadius*(1-Math.pow(80,-timeNow));return Math.abs(size)},get opacity(){if(!this.mouseUpStart){return this.initialOpacity}return Math.max(0,this.initialOpacity-this.mouseUpElapsedSeconds*this.opacityDecayVelocity)},get outerOpacity(){// Linear increase in background opacity, capped at the opacity
// of the wavefront (waveOpacity).
var outerOpacity=.3*this.mouseUpElapsedSeconds,waveOpacity=this.opacity;return Math.max(0,Math.min(outerOpacity,waveOpacity))},get isOpacityFullyDecayed(){return .01>this.opacity&&this.radius>=Math.min(this.maxRadius,Ripple.MAX_RADIUS)},get isRestingAtMaxRadius(){return this.opacity>=this.initialOpacity&&this.radius>=Math.min(this.maxRadius,Ripple.MAX_RADIUS)},get isAnimationComplete(){return this.mouseUpStart?this.isOpacityFullyDecayed:this.isRestingAtMaxRadius},get translationFraction(){return Math.min(1,2*(this.radius/this.containerMetrics.size)/Math.sqrt(2))},get xNow(){if(this.xEnd){return this.xStart+this.translationFraction*(this.xEnd-this.xStart)}return this.xStart},get yNow(){if(this.yEnd){return this.yStart+this.translationFraction*(this.yEnd-this.yStart)}return this.yStart},get isMouseDown(){return this.mouseDownStart&&!this.mouseUpStart},resetInteractionState:function resetInteractionState(){this.maxRadius=0;this.mouseDownStart=0;this.mouseUpStart=0;this.xStart=0;this.yStart=0;this.xEnd=0;this.yEnd=0;this.slideDistance=0;this.containerMetrics=new ElementMetrics(this.element)},draw:function draw(){var scale,dx,dy;this.wave.style.opacity=this.opacity;scale=this.radius/(this.containerMetrics.size/2);dx=this.xNow-this.containerMetrics.width/2;dy=this.yNow-this.containerMetrics.height/2;// 2d transform for safari because of border-radius and overflow:hidden
// clipping bug. https://bugs.webkit.org/show_bug.cgi?id=98538
this.waveContainer.style.webkitTransform="translate("+dx+"px, "+dy+"px)";this.waveContainer.style.transform="translate3d("+dx+"px, "+dy+"px, 0)";this.wave.style.webkitTransform="scale("+scale+","+scale+")";this.wave.style.transform="scale3d("+scale+","+scale+",1)"},/** @param {Event=} event */downAction:function downAction(event){var xCenter=this.containerMetrics.width/2,yCenter=this.containerMetrics.height/2;this.resetInteractionState();this.mouseDownStart=Utility.now();if(this.center){this.xStart=xCenter;this.yStart=yCenter;this.slideDistance=Utility.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)}else{this.xStart=event?event.detail.x-this.containerMetrics.boundingRect.left:this.containerMetrics.width/2;this.yStart=event?event.detail.y-this.containerMetrics.boundingRect.top:this.containerMetrics.height/2}if(this.recenters){this.xEnd=xCenter;this.yEnd=yCenter;this.slideDistance=Utility.distance(this.xStart,this.yStart,this.xEnd,this.yEnd)}this.maxRadius=this.containerMetrics.furthestCornerDistanceFrom(this.xStart,this.yStart);this.waveContainer.style.top=(this.containerMetrics.height-this.containerMetrics.size)/2+"px";this.waveContainer.style.left=(this.containerMetrics.width-this.containerMetrics.size)/2+"px";this.waveContainer.style.width=this.containerMetrics.size+"px";this.waveContainer.style.height=this.containerMetrics.size+"px"},/** @param {Event=} event */upAction:function upAction(event){if(!this.isMouseDown){return}this.mouseUpStart=Utility.now()},remove:function remove(){(0,_shopApp.dom)(this.waveContainer.parentNode).removeChild(this.waveContainer)}};/**
   Material design: [Surface
   reaction](https://www.google.com/design/spec/animation/responsive-interaction.html#responsive-interaction-surface-reaction)
   
   `paper-ripple` provides a visual effect that other paper elements can
   use to simulate a rippling effect emanating from the point of contact.  The
   effect can be visualized as a concentric circle with motion.
   
   Example:
   
       <div style="position:relative">
         <paper-ripple></paper-ripple>
       </div>
   
   Note, it's important that the parent container of the ripple be relative
   position, otherwise the ripple will emanate outside of the desired container.
   
   `paper-ripple` listens to "mousedown" and "mouseup" events so it would display
   ripple effect when touches on it.  You can also defeat the default behavior and
   manually route the down and up actions to the ripple element.  Note that it is
   important if you call `downAction()` you will have to make sure to call
   `upAction()` so that `paper-ripple` would end the animation loop.
   
   Example:
   
       <paper-ripple id="ripple" style="pointer-events: none;"></paper-ripple>
       ...
       downAction: function(e) {
         this.$.ripple.downAction(e.detail);
       },
       upAction: function(e) {
         this.$.ripple.upAction();
       }
   
   Styling ripple effect:
   
     Use CSS color property to style the ripple:
   
       paper-ripple {
         color: #4285f4;
       }
   
     Note that CSS color property is inherited so it is not required to set it on
     the `paper-ripple` element directly.
   
   By default, the ripple is centered on the point of contact.  Apply the
   `recenters` attribute to have the ripple grow toward the center of its
   container.
   
       <paper-ripple recenters></paper-ripple>
   
   You can also  center the ripple inside its container from the start.
   
       <paper-ripple center></paper-ripple>
   
   Apply `circle` class to make the rippling effect within a circle.
   
       <paper-ripple class="circle"></paper-ripple>
   
   @group Paper Elements
   @element paper-ripple
   @hero hero.svg
   @demo demo/index.html
   */(0,_shopApp.Polymer)({_template:(0,_shopApp.html$1)(_templateObject5_3f0e9a00e61411ee9d65b9d111681715()),is:"paper-ripple",behaviors:[IronA11yKeysBehavior],properties:{/**
     * The initial opacity set on the wave.
     *
     * @attribute initialOpacity
     * @type number
     * @default 0.25
     */initialOpacity:{type:Number,value:.25},/**
     * How fast (opacity per second) the wave fades out.
     *
     * @attribute opacityDecayVelocity
     * @type number
     * @default 0.8
     */opacityDecayVelocity:{type:Number,value:.8},/**
     * If true, ripples will exhibit a gravitational pull towards
     * the center of their container as they fade away.
     *
     * @attribute recenters
     * @type boolean
     * @default false
     */recenters:{type:Boolean,value:!1},/**
     * If true, ripples will center inside its container
     *
     * @attribute recenters
     * @type boolean
     * @default false
     */center:{type:Boolean,value:!1},/**
     * A list of the visual ripples.
     *
     * @attribute ripples
     * @type Array
     * @default []
     */ripples:{type:Array,value:function value(){return[]}},/**
     * True when there are visible ripples animating within the
     * element.
     */animating:{type:Boolean,readOnly:!0,reflectToAttribute:!0,value:!1},/**
     * If true, the ripple will remain in the "down" state until `holdDown`
     * is set to false again.
     */holdDown:{type:Boolean,value:!1,observer:"_holdDownChanged"},/**
     * If true, the ripple will not generate a ripple effect
     * via pointer interaction.
     * Calling ripple's imperative api like `simulatedRipple` will
     * still generate the ripple effect.
     */noink:{type:Boolean,value:!1},_animating:{type:Boolean},_boundAnimate:{type:Function,value:function value(){return this.animate.bind(this)}}},get target(){return this.keyEventTarget},/**
   * @type {!Object}
   */keyBindings:{"enter:keydown":"_onEnterKeydown","space:keydown":"_onSpaceKeydown","space:keyup":"_onSpaceKeyup"},attached:function attached(){// Set up a11yKeysBehavior to listen to key events on the target,
// so that space and enter activate the ripple even if the target doesn't
// handle key events. The key handlers deal with `noink` themselves.
if(11==this.parentNode.nodeType){// DOCUMENT_FRAGMENT_NODE
this.keyEventTarget=(0,_shopApp.dom)(this).getOwnerRoot().host}else{this.keyEventTarget=this.parentNode}var keyEventTarget=/** @type {!EventTarget} */this.keyEventTarget;this.listen(keyEventTarget,"up","uiUpAction");this.listen(keyEventTarget,"down","uiDownAction")},detached:function detached(){this.unlisten(this.keyEventTarget,"up","uiUpAction");this.unlisten(this.keyEventTarget,"down","uiDownAction");this.keyEventTarget=null},get shouldKeepAnimating(){for(var index=0;index<this.ripples.length;++index){if(!this.ripples[index].isAnimationComplete){return!0}}return!1},simulatedRipple:function simulatedRipple(){this.downAction(null);// Please see polymer/polymer#1305
this.async(function(){this.upAction()},1)},/**
   * Provokes a ripple down effect via a UI event,
   * respecting the `noink` property.
   * @param {Event=} event
   */uiDownAction:function uiDownAction(event){if(!this.noink){this.downAction(event)}},/**
   * Provokes a ripple down effect via a UI event,
   * *not* respecting the `noink` property.
   * @param {Event=} event
   */downAction:function downAction(event){if(this.holdDown&&0<this.ripples.length){return}var ripple=this.addRipple();ripple.downAction(event);if(!this._animating){this._animating=!0;this.animate()}},/**
   * Provokes a ripple up effect via a UI event,
   * respecting the `noink` property.
   * @param {Event=} event
   */uiUpAction:function uiUpAction(event){if(!this.noink){this.upAction(event)}},/**
   * Provokes a ripple up effect via a UI event,
   * *not* respecting the `noink` property.
   * @param {Event=} event
   */upAction:function upAction(event){if(this.holdDown){return}this.ripples.forEach(function(ripple){ripple.upAction(event)});this._animating=!0;this.animate()},onAnimationComplete:function onAnimationComplete(){this._animating=!1;this.$.background.style.backgroundColor=null;this.fire("transitionend")},addRipple:function addRipple(){var ripple=new Ripple(this);(0,_shopApp.dom)(this.$.waves).appendChild(ripple.waveContainer);this.$.background.style.backgroundColor=ripple.color;this.ripples.push(ripple);this._setAnimating(!0);return ripple},removeRipple:function removeRipple(ripple){var rippleIndex=this.ripples.indexOf(ripple);if(0>rippleIndex){return}this.ripples.splice(rippleIndex,1);ripple.remove();if(!this.ripples.length){this._setAnimating(!1)}},/**
   * Deprecated. Please use animateRipple() instead.
   *
   * This method name conflicts with Element#animate().
   * https://developer.mozilla.org/en-US/docs/Web/API/Element/animate.
   *
   * @suppress {checkTypes}
   */animate:function animate(){if(!this._animating){return}var index,ripple;for(index=0;index<this.ripples.length;++index){ripple=this.ripples[index];ripple.draw();this.$.background.style.opacity=ripple.outerOpacity;if(ripple.isOpacityFullyDecayed&&!ripple.isRestingAtMaxRadius){this.removeRipple(ripple)}}if(!this.shouldKeepAnimating&&0===this.ripples.length){this.onAnimationComplete()}else{window.requestAnimationFrame(this._boundAnimate)}},/**
   * An alias for animate() whose name does not conflict with the platform
   * Element.animate() method.
   */animateRipple:function animateRipple(){return this.animate()},_onEnterKeydown:function _onEnterKeydown(){this.uiDownAction();this.async(this.uiUpAction,1)},_onSpaceKeydown:function _onSpaceKeydown(){this.uiDownAction()},_onSpaceKeyup:function _onSpaceKeyup(){this.uiUpAction()},// note: holdDown does not respect noink since it can be a focus based
// effect.
_holdDownChanged:function _holdDownChanged(newVal,oldVal){if(oldVal===void 0){return}if(newVal){this.downAction()}else{this.upAction()}}/**
    Fired when the animation finishes.
    This is useful if you want to wait until
    the ripple animation finishes to perform some action.
     @event transitionend
    @param {{node: Object}} detail Contains the animated node.
    */});var PaperRippleBehavior={properties:{/**
     * If true, the element will not produce a ripple effect when interacted
     * with via the pointer.
     */noink:{type:Boolean,observer:"_noinkChanged"},/**
     * @type {Element|undefined}
     */_rippleContainer:{type:Object}},/**
   * Ensures a `<paper-ripple>` element is available when the element is
   * focused.
   */_buttonStateChanged:function _buttonStateChanged(){if(this.focused){this.ensureRipple()}},/**
   * In addition to the functionality provided in `IronButtonState`, ensures
   * a ripple effect is created when the element is in a `pressed` state.
   */_downHandler:function _downHandler(event){IronButtonStateImpl._downHandler.call(this,event);if(this.pressed){this.ensureRipple(event)}},/**
   * Ensures this element contains a ripple effect. For startup efficiency
   * the ripple effect is dynamically on demand when needed.
   * @param {!Event=} optTriggeringEvent (optional) event that triggered the
   * ripple.
   */ensureRipple:function ensureRipple(optTriggeringEvent){if(!this.hasRipple()){this._ripple=this._createRipple();this._ripple.noink=this.noink;var rippleContainer=this._rippleContainer||this.root;if(rippleContainer){(0,_shopApp.dom)(rippleContainer).appendChild(this._ripple)}if(optTriggeringEvent){// Check if the event happened inside of the ripple container
// Fall back to host instead of the root because distributed text
// nodes are not valid event targets
var domContainer=(0,_shopApp.dom)(this._rippleContainer||this),target=(0,_shopApp.dom)(optTriggeringEvent).rootTarget;if(domContainer.deepContains(/** @type {Node} */target)){this._ripple.uiDownAction(optTriggeringEvent)}}}},/**
   * Returns the `<paper-ripple>` element used by this element to create
   * ripple effects. The element's ripple is created on demand, when
   * necessary, and calling this method will force the
   * ripple to be created.
   */getRipple:function getRipple(){this.ensureRipple();return this._ripple},/**
   * Returns true if this element currently contains a ripple effect.
   * @return {boolean}
   */hasRipple:function hasRipple(){return!!this._ripple},/**
   * Create the element's ripple effect via creating a `<paper-ripple>`.
   * Override this method to customize the ripple element.
   * @return {!PaperRippleElement} Returns a `<paper-ripple>` element.
   */_createRipple:function _createRipple(){var element=/** @type {!PaperRippleElement} */document.createElement("paper-ripple");return element},_noinkChanged:function _noinkChanged(noink){if(this.hasRipple()){this._ripple.noink=noink}}};_exports.PaperRippleBehavior=PaperRippleBehavior;var paperRippleBehavior={PaperRippleBehavior:PaperRippleBehavior};_exports.$paperRippleBehavior=paperRippleBehavior;var PaperInkyFocusBehaviorImpl={observers:["_focusedChanged(receivedFocusFromKeyboard)"],_focusedChanged:function _focusedChanged(receivedFocusFromKeyboard){if(receivedFocusFromKeyboard){this.ensureRipple()}if(this.hasRipple()){this._ripple.holdDown=receivedFocusFromKeyboard}},_createRipple:function _createRipple(){var ripple=PaperRippleBehavior._createRipple();ripple.id="ink";ripple.setAttribute("center","");ripple.classList.add("circle");return ripple}};/** @polymerBehavior */_exports.PaperInkyFocusBehaviorImpl=PaperInkyFocusBehaviorImpl;var PaperInkyFocusBehavior=[IronButtonState,IronControlState,PaperRippleBehavior,PaperInkyFocusBehaviorImpl];_exports.PaperInkyFocusBehavior=PaperInkyFocusBehavior;var paperInkyFocusBehavior={PaperInkyFocusBehaviorImpl:PaperInkyFocusBehaviorImpl,PaperInkyFocusBehavior:PaperInkyFocusBehavior};_exports.$paperInkyFocusBehavior=paperInkyFocusBehavior;var template=(0,_shopApp.html$1)(_templateObject6_3f0e9a00e61411ee9d65b9d111681715());template.setAttribute("style","display: none;");document.head.appendChild(template.content);var template$1=(0,_shopApp.html$1)(_templateObject7_3f0e9a00e61411ee9d65b9d111681715());template$1.setAttribute("style","display: none;");document.head.appendChild(template$1.content);var template$2=(0,_shopApp.html$1)(_templateObject8_3f0e9a00e61411ee9d65b9d111681715());template$2.setAttribute("style","display: none;");document.body.appendChild(template$2.content);/**
                                               Material design: [Icon
                                               toggles](https://www.google.com/design/spec/components/buttons.html#buttons-toggle-buttons)
                                                                                           `paper-icon-button` is a button with an image placed at the center. When the
                                               user touches the button, a ripple effect emanates from the center of the button.
                                                                                           `paper-icon-button` does not include a default icon set. To use icons from the
                                               default set, include `PolymerElements/iron-icons/iron-icons.html`, and use the
                                               `icon` attribute to specify which icon from the icon set to use.
                                                                                               <paper-icon-button icon="menu"></paper-icon-button>
                                                                                           See [`iron-iconset`](iron-iconset) for more information about
                                               how to use a custom icon set.
                                                                                           Example:
                                                                                               <script type="module">
                                                   import '@polymer/iron-icons/iron-icons.js';
                                                 </script>
                                                                                               <paper-icon-button icon="favorite"></paper-icon-button>
                                                 <paper-icon-button src="star.png"></paper-icon-button>
                                                                                           To use `paper-icon-button` as a link, wrap it in an anchor tag. Since
                                               `paper-icon-button` will already receive focus, you may want to prevent the
                                               anchor tag from receiving focus as well by setting its tabindex to -1.
                                                                                               <a href="https://www.polymer-project.org" tabindex="-1">
                                                   <paper-icon-button icon="polymer"></paper-icon-button>
                                                 </a>
                                                                                           ### Styling
                                                                                           Style the button with CSS as you would a normal DOM element. If you are using
                                               the icons provided by `iron-icons`, they will inherit the foreground color of
                                               the button.
                                                                                               /* make a red "favorite" button *\/
                                                 <paper-icon-button icon="favorite" style="color: red;"></paper-icon-button>
                                                                                           By default, the ripple is the same color as the foreground at 25% opacity. You
                                               may customize the color using the `--paper-icon-button-ink-color` custom
                                               property.
                                                                                           The following custom properties and mixins are available for styling:
                                                                                           Custom property | Description | Default
                                               ----------------|-------------|----------
                                               `--paper-icon-button-disabled-text` | The color of the disabled button | `--disabled-text-color`
                                               `--paper-icon-button-ink-color` | Selected/focus ripple color | `--primary-text-color`
                                               `--paper-icon-button` | Mixin for a button | `{}`
                                               `--paper-icon-button-disabled` | Mixin for a disabled button | `{}`
                                               `--paper-icon-button-hover` | Mixin for button on hover | `{}`
                                                                                           @group Paper Elements
                                               @element paper-icon-button
                                               @demo demo/index.html
                                               */(0,_shopApp.Polymer)({is:"paper-icon-button",hostAttributes:{role:"button",tabindex:"0"},behaviors:[PaperInkyFocusBehavior],properties:{/**
     * The URL of an image for the icon. If the src property is specified,
     * the icon property should not be.
     */src:{type:String},/**
     * Specifies the icon name or index in the set of icons available in
     * the icon's icon set. If the icon property is specified,
     * the src property should not be.
     */icon:{type:String},/**
     * Specifies the alternate text for the button, for accessibility.
     */alt:{type:String,observer:"_altChanged"}},_altChanged:function _altChanged(newValue,oldValue){var label=this.getAttribute("aria-label");// Don't stomp over a user-set aria-label.
if(!label||oldValue==label){this.setAttribute("aria-label",newValue)}}});var PaperSpinnerBehavior={properties:{/**
     * Displays the spinner.
     */active:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"__activeChanged"},/**
     * Alternative text content for accessibility support.
     * If alt is present, it will add an aria-label whose content matches alt
     * when active. If alt is not present, it will default to 'loading' as the
     * alt value.
     */alt:{type:String,value:"loading",observer:"__altChanged"},__coolingDown:{type:Boolean,value:!1}},__computeContainerClasses:function __computeContainerClasses(active,coolingDown){return[active||coolingDown?"active":"",coolingDown?"cooldown":""].join(" ")},__activeChanged:function __activeChanged(active,old){this.__setAriaHidden(!active);this.__coolingDown=!active&&old},__altChanged:function __altChanged(alt){// user-provided `aria-label` takes precedence over prototype default
if("loading"===alt){this.alt=this.getAttribute("aria-label")||alt}else{this.__setAriaHidden(""===alt);this.setAttribute("aria-label",alt)}},__setAriaHidden:function __setAriaHidden(hidden){var attr="aria-hidden";if(hidden){this.setAttribute(attr,"true")}else{this.removeAttribute(attr)}},__reset:function __reset(){this.active=!1;this.__coolingDown=!1}};_exports.PaperSpinnerBehavior=PaperSpinnerBehavior;var paperSpinnerBehavior={PaperSpinnerBehavior:PaperSpinnerBehavior};/**
   @license
   Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at
   http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
   http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
   found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
   part of the polymer project is also subject to an additional IP rights grant
   found at http://polymer.github.io/PATENTS.txt
   */_exports.$paperSpinnerBehavior=paperSpinnerBehavior;var $_documentContainer=document.createElement("template");$_documentContainer.setAttribute("style","display: none;");$_documentContainer.innerHTML="<dom-module id=\"paper-spinner-styles\">\n  <template>\n    <style>\n      /*\n      /**************************/\n      /* STYLES FOR THE SPINNER */\n      /**************************/\n\n      /*\n       * Constants:\n       *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)\n       *      ARCTIME     = 1333ms (time it takes to expand and contract arc)\n       *      ARCSTARTROT = 216 degrees (how much the start location of the arc\n       *                                should rotate each time, 216 gives us a\n       *                                5 pointed star shape (it's 360/5 * 3).\n       *                                For a 7 pointed star, we might do\n       *                                360/7 * 3 = 154.286)\n       *      SHRINK_TIME = 400ms\n       */\n\n      :host {\n        display: inline-block;\n        position: relative;\n        width: 28px;\n        height: 28px;\n\n        /* 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */\n        --paper-spinner-container-rotation-duration: 1568ms;\n\n        /* ARCTIME */\n        --paper-spinner-expand-contract-duration: 1333ms;\n\n        /* 4 * ARCTIME */\n        --paper-spinner-full-cycle-duration: 5332ms;\n\n        /* SHRINK_TIME */\n        --paper-spinner-cooldown-duration: 400ms;\n      }\n\n      #spinnerContainer {\n        width: 100%;\n        height: 100%;\n\n        /* The spinner does not have any contents that would have to be\n         * flipped if the direction changes. Always use ltr so that the\n         * style works out correctly in both cases. */\n        direction: ltr;\n      }\n\n      #spinnerContainer.active {\n        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;\n        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;\n      }\n\n      @-webkit-keyframes container-rotate {\n        to { -webkit-transform: rotate(360deg) }\n      }\n\n      @keyframes container-rotate {\n        to { transform: rotate(360deg) }\n      }\n\n      .spinner-layer {\n        position: absolute;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        white-space: nowrap;\n        color: var(--paper-spinner-color, var(--google-blue-500));\n      }\n\n      .layer-1 {\n        color: var(--paper-spinner-layer-1-color, var(--google-blue-500));\n      }\n\n      .layer-2 {\n        color: var(--paper-spinner-layer-2-color, var(--google-red-500));\n      }\n\n      .layer-3 {\n        color: var(--paper-spinner-layer-3-color, var(--google-yellow-500));\n      }\n\n      .layer-4 {\n        color: var(--paper-spinner-layer-4-color, var(--google-green-500));\n      }\n\n      /**\n       * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):\n       *\n       * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't\n       * guarantee that the animation will start _exactly_ after that value. So we avoid using\n       * animation-delay and instead set custom keyframes for each color (as layer-2undant as it\n       * seems).\n       */\n      .active .spinner-layer {\n        -webkit-animation-name: fill-unfill-rotate;\n        -webkit-animation-duration: var(--paper-spinner-full-cycle-duration);\n        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        -webkit-animation-iteration-count: infinite;\n        animation-name: fill-unfill-rotate;\n        animation-duration: var(--paper-spinner-full-cycle-duration);\n        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation-iteration-count: infinite;\n        opacity: 1;\n      }\n\n      .active .spinner-layer.layer-1 {\n        -webkit-animation-name: fill-unfill-rotate, layer-1-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-1-fade-in-out;\n      }\n\n      .active .spinner-layer.layer-2 {\n        -webkit-animation-name: fill-unfill-rotate, layer-2-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-2-fade-in-out;\n      }\n\n      .active .spinner-layer.layer-3 {\n        -webkit-animation-name: fill-unfill-rotate, layer-3-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-3-fade-in-out;\n      }\n\n      .active .spinner-layer.layer-4 {\n        -webkit-animation-name: fill-unfill-rotate, layer-4-fade-in-out;\n        animation-name: fill-unfill-rotate, layer-4-fade-in-out;\n      }\n\n      @-webkit-keyframes fill-unfill-rotate {\n        12.5% { -webkit-transform: rotate(135deg) } /* 0.5 * ARCSIZE */\n        25%   { -webkit-transform: rotate(270deg) } /* 1   * ARCSIZE */\n        37.5% { -webkit-transform: rotate(405deg) } /* 1.5 * ARCSIZE */\n        50%   { -webkit-transform: rotate(540deg) } /* 2   * ARCSIZE */\n        62.5% { -webkit-transform: rotate(675deg) } /* 2.5 * ARCSIZE */\n        75%   { -webkit-transform: rotate(810deg) } /* 3   * ARCSIZE */\n        87.5% { -webkit-transform: rotate(945deg) } /* 3.5 * ARCSIZE */\n        to    { -webkit-transform: rotate(1080deg) } /* 4   * ARCSIZE */\n      }\n\n      @keyframes fill-unfill-rotate {\n        12.5% { transform: rotate(135deg) } /* 0.5 * ARCSIZE */\n        25%   { transform: rotate(270deg) } /* 1   * ARCSIZE */\n        37.5% { transform: rotate(405deg) } /* 1.5 * ARCSIZE */\n        50%   { transform: rotate(540deg) } /* 2   * ARCSIZE */\n        62.5% { transform: rotate(675deg) } /* 2.5 * ARCSIZE */\n        75%   { transform: rotate(810deg) } /* 3   * ARCSIZE */\n        87.5% { transform: rotate(945deg) } /* 3.5 * ARCSIZE */\n        to    { transform: rotate(1080deg) } /* 4   * ARCSIZE */\n      }\n\n      @-webkit-keyframes layer-1-fade-in-out {\n        0% { opacity: 1 }\n        25% { opacity: 1 }\n        26% { opacity: 0 }\n        89% { opacity: 0 }\n        90% { opacity: 1 }\n        to { opacity: 1 }\n      }\n\n      @keyframes layer-1-fade-in-out {\n        0% { opacity: 1 }\n        25% { opacity: 1 }\n        26% { opacity: 0 }\n        89% { opacity: 0 }\n        90% { opacity: 1 }\n        to { opacity: 1 }\n      }\n\n      @-webkit-keyframes layer-2-fade-in-out {\n        0% { opacity: 0 }\n        15% { opacity: 0 }\n        25% { opacity: 1 }\n        50% { opacity: 1 }\n        51% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @keyframes layer-2-fade-in-out {\n        0% { opacity: 0 }\n        15% { opacity: 0 }\n        25% { opacity: 1 }\n        50% { opacity: 1 }\n        51% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @-webkit-keyframes layer-3-fade-in-out {\n        0% { opacity: 0 }\n        40% { opacity: 0 }\n        50% { opacity: 1 }\n        75% { opacity: 1 }\n        76% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @keyframes layer-3-fade-in-out {\n        0% { opacity: 0 }\n        40% { opacity: 0 }\n        50% { opacity: 1 }\n        75% { opacity: 1 }\n        76% { opacity: 0 }\n        to { opacity: 0 }\n      }\n\n      @-webkit-keyframes layer-4-fade-in-out {\n        0% { opacity: 0 }\n        65% { opacity: 0 }\n        75% { opacity: 1 }\n        90% { opacity: 1 }\n        to { opacity: 0 }\n      }\n\n      @keyframes layer-4-fade-in-out {\n        0% { opacity: 0 }\n        65% { opacity: 0 }\n        75% { opacity: 1 }\n        90% { opacity: 1 }\n        to { opacity: 0 }\n      }\n\n      .circle-clipper {\n        display: inline-block;\n        position: relative;\n        width: 50%;\n        height: 100%;\n        overflow: hidden;\n      }\n\n      /**\n       * Patch the gap that appear between the two adjacent div.circle-clipper while the\n       * spinner is rotating (appears on Chrome 50, Safari 9.1.1, and Edge).\n       */\n      .spinner-layer::after {\n        left: 45%;\n        width: 10%;\n        border-top-style: solid;\n      }\n\n      .spinner-layer::after,\n      .circle-clipper::after {\n        content: '';\n        box-sizing: border-box;\n        position: absolute;\n        top: 0;\n        border-width: var(--paper-spinner-stroke-width, 3px);\n        border-radius: 50%;\n      }\n\n      .circle-clipper::after {\n        bottom: 0;\n        width: 200%;\n        border-style: solid;\n        border-bottom-color: transparent !important;\n      }\n\n      .circle-clipper.left::after {\n        left: 0;\n        border-right-color: transparent !important;\n        -webkit-transform: rotate(129deg);\n        transform: rotate(129deg);\n      }\n\n      .circle-clipper.right::after {\n        left: -100%;\n        border-left-color: transparent !important;\n        -webkit-transform: rotate(-129deg);\n        transform: rotate(-129deg);\n      }\n\n      .active .gap-patch::after,\n      .active .circle-clipper::after {\n        -webkit-animation-duration: var(--paper-spinner-expand-contract-duration);\n        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        -webkit-animation-iteration-count: infinite;\n        animation-duration: var(--paper-spinner-expand-contract-duration);\n        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation-iteration-count: infinite;\n      }\n\n      .active .circle-clipper.left::after {\n        -webkit-animation-name: left-spin;\n        animation-name: left-spin;\n      }\n\n      .active .circle-clipper.right::after {\n        -webkit-animation-name: right-spin;\n        animation-name: right-spin;\n      }\n\n      @-webkit-keyframes left-spin {\n        0% { -webkit-transform: rotate(130deg) }\n        50% { -webkit-transform: rotate(-5deg) }\n        to { -webkit-transform: rotate(130deg) }\n      }\n\n      @keyframes left-spin {\n        0% { transform: rotate(130deg) }\n        50% { transform: rotate(-5deg) }\n        to { transform: rotate(130deg) }\n      }\n\n      @-webkit-keyframes right-spin {\n        0% { -webkit-transform: rotate(-130deg) }\n        50% { -webkit-transform: rotate(5deg) }\n        to { -webkit-transform: rotate(-130deg) }\n      }\n\n      @keyframes right-spin {\n        0% { transform: rotate(-130deg) }\n        50% { transform: rotate(5deg) }\n        to { transform: rotate(-130deg) }\n      }\n\n      #spinnerContainer.cooldown {\n        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);\n        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);\n      }\n\n      @-webkit-keyframes fade-out {\n        0% { opacity: 1 }\n        to { opacity: 0 }\n      }\n\n      @keyframes fade-out {\n        0% { opacity: 1 }\n        to { opacity: 0 }\n      }\n    </style>\n  </template>\n</dom-module>";document.head.appendChild($_documentContainer.content);var template$3=(0,_shopApp.html$1)(_templateObject9_3f0e9a00e61411ee9d65b9d111681715());template$3.setAttribute("strip-whitespace","");/**
                                                 Material design: [Progress &
                                                 activity](https://www.google.com/design/spec/components/progress-activity.html)
                                                                                               Element providing a single color material design circular spinner.
                                                                                                   <paper-spinner-lite active></paper-spinner-lite>
                                                                                               The default spinner is blue. It can be customized to be a different color.
                                                                                               ### Accessibility
                                                                                               Alt attribute should be set to provide adequate context for accessibility. If
                                                 not provided, it defaults to 'loading'. Empty alt can be provided to mark the
                                                 element as decorative if alternative content is provided in another form (e.g. a
                                                 text block following the spinner).
                                                                                                   <paper-spinner-lite alt="Loading contacts list" active></paper-spinner-lite>
                                                                                               ### Styling
                                                                                               The following custom properties and mixins are available for styling:
                                                                                               Custom property | Description | Default
                                                 ----------------|-------------|----------
                                                 `--paper-spinner-color` | Color of the spinner | `--google-blue-500`
                                                 `--paper-spinner-stroke-width` | The width of the spinner stroke | 3px
                                                                                               @group Paper Elements
                                                 @element paper-spinner-lite
                                                 @hero hero.svg
                                                 @demo demo/index.html
                                                 */(0,_shopApp.Polymer)({_template:template$3,is:"paper-spinner-lite",behaviors:[PaperSpinnerBehavior]});var $_documentContainer$1=document.createElement("template");$_documentContainer$1.innerHTML="<iron-iconset-svg style=\"display:none\" name=\"icons\" size=\"24\">\n<svg><defs>\n<g id=\"arrow-back\"><path d=\"M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z\"></path></g>\n<g id=\"menu\"><path d=\"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z\"></path></g>\n<g id=\"shopping-cart\"><path d=\"M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z\"></path></g>\n<g id=\"close\"><path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"></path></g>\n<g id=\"perm-scan-wifi\"><path d=\"M12 3C6.95 3 3.15 4.85 0 7.23L12 22 24 7.25C20.85 4.87 17.05 3 12 3zm1 13h-2v-6h2v6zm-2-8V6h2v2h-2z\"></path></g>\n<g id=\"error\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z\"></path></g>\n</defs></svg>\n</iron-iconset-svg>";document.head.appendChild($_documentContainer$1.content);var ShopAnalytics=/*#__PURE__*/function(_HTMLElement){babelHelpers.inherits(ShopAnalytics,_HTMLElement);function ShopAnalytics(){babelHelpers.classCallCheck(this,ShopAnalytics);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ShopAnalytics).apply(this,arguments))}babelHelpers.createClass(ShopAnalytics,[{key:"connectedCallback",value:function connectedCallback(){// track metrics with google analytics...
(function(i,s,o,g,r,a,m){i.GoogleAnalyticsObject=r;i[r]=i[r]||function(){(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date;a=s.createElement(o),m=s.getElementsByTagName("body")[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)})(window,document,"script","//www.google-analytics.com/analytics.js","ga");ga("create",this.getAttribute("key"),"auto");ga("send","pageview")}}]);return ShopAnalytics}(babelHelpers.wrapNativeSuper(HTMLElement));customElements.define("shop-analytics",ShopAnalytics);var ShopCartData=/*#__PURE__*/function(_PolymerElement){babelHelpers.inherits(ShopCartData,_PolymerElement);function ShopCartData(){babelHelpers.classCallCheck(this,ShopCartData);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ShopCartData).apply(this,arguments))}babelHelpers.createClass(ShopCartData,[{key:"addItem",value:function addItem(detail){var i=this._indexOfEntry(detail.item.name,detail.size);if(-1!==i){detail.quantity+=this.cart[i].quantity}this.setItem(detail)}},{key:"setItem",value:function setItem(detail){var i=this._indexOfEntry(detail.item.name,detail.size);if(0===detail.quantity){// Remove item from cart when the new quantity is 0.
if(-1!==i){this.splice("cart",i,1)}}else{// Use Polymer's array mutation methods (`splice`, `push`) so that observers
// on `cart.splices` are triggered.
if(-1!==i){this.splice("cart",i,1,detail)}else{this.push("cart",detail)}}}},{key:"clearCart",value:function clearCart(){this.cart=[]}},{key:"_computeNumItems",value:function _computeNumItems(){if(this.cart){return this.cart.reduce(function(total,entry){return total+entry.quantity},0)}return 0}},{key:"_computeTotal",value:function _computeTotal(){if(this.cart){return this.cart.reduce(function(total,entry){return total+entry.quantity*entry.item.price},0)}return 0}},{key:"_indexOfEntry",value:function _indexOfEntry(name,size){if(this.cart){for(var i=0,entry;i<this.cart.length;++i){entry=this.cart[i];if(entry.item.name===name&&entry.size===size){return i}}}return-1}}],[{key:"template",get:function get(){return(0,_shopApp.html)(_templateObject10_3f0e9a00e61411ee9d65b9d111681715())}},{key:"is",get:function get(){return"shop-cart-data"}},{key:"properties",get:function get(){return{cart:{type:Array,value:function value(){return[]},notify:!0},numItems:{type:Number,computed:"_computeNumItems(cart.splices)",notify:!0},total:{type:Number,computed:"_computeTotal(cart.splices)",notify:!0}}}}]);return ShopCartData}(_shopApp.PolymerElement);customElements.define(ShopCartData.is,ShopCartData);var ShopCartModal=/*#__PURE__*/function(_mixinBehaviors){babelHelpers.inherits(ShopCartModal,_mixinBehaviors);function ShopCartModal(){babelHelpers.classCallCheck(this,ShopCartModal);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ShopCartModal).apply(this,arguments))}babelHelpers.createClass(ShopCartModal,[{key:"ready",value:function ready(){var _this=this;babelHelpers.get(babelHelpers.getPrototypeOf(ShopCartModal.prototype),"ready",this).call(this);this.setAttribute("role","dialog");this.setAttribute("aria-modal","true");this.addEventListener("transitionend",function(e){return _this._transitionEnd(e)});this.addEventListener("iron-overlay-canceled",function(e){return _this._onCancel(e)})}},{key:"_renderOpened",value:function _renderOpened(){this.restoreFocusOnClose=!0;this.backdropElement.style.display="none";this.classList.add("opened")}},{key:"_renderClosed",value:function _renderClosed(){this.classList.remove("opened")}},{key:"_onCancel",value:function _onCancel(e){// Don't restore focus when the overlay is closed after a mouse event
if(babelHelpers.instanceof(e.detail,MouseEvent)){this.restoreFocusOnClose=!1}}},{key:"_transitionEnd",value:function _transitionEnd(e){if(e.target!==this||"transform"!==e.propertyName){return}if(this.opened){this._finishRenderOpened();this.fire("announce","Item added to the cart")}else{this._finishRenderClosed();this.backdropElement.style.display=""}}},{key:"refit",value:function refit(){}},{key:"notifyResize",value:function notifyResize(){}},{key:"_focusableNodes",get:function get(){return[this.$.viewCartAnchor,this.$.closeBtn]}}],[{key:"template",get:function get(){return(0,_shopApp.html)(_templateObject11_3f0e9a00e61411ee9d65b9d111681715())}},{key:"is",get:function get(){return"shop-cart-modal"}},{key:"properties",get:function get(){return{withBackdrop:{type:Boolean,value:!0}}}}]);return ShopCartModal}((0,_shopApp.mixinBehaviors)([IronOverlayBehaviorImpl],_shopApp.PolymerElement));customElements.define(ShopCartModal.is,ShopCartModal);var ShopSnackbar=/*#__PURE__*/function(_PolymerElement2){babelHelpers.inherits(ShopSnackbar,_PolymerElement2);function ShopSnackbar(){babelHelpers.classCallCheck(this,ShopSnackbar);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ShopSnackbar).apply(this,arguments))}babelHelpers.createClass(ShopSnackbar,[{key:"open",value:function open(){(0,_shopApp.flush)();this.offsetHeight&&this.classList.add("opened");this._closeDebouncer=_shopApp.Debouncer.debounce(this._closeDebouncer,_shopApp.timeOut.after(4e3),this.close.bind(this))}},{key:"close",value:function close(){this.classList.remove("opened")}}],[{key:"template",get:function get(){return(0,_shopApp.html)(_templateObject12_3f0e9a00e61411ee9d65b9d111681715())}},{key:"is",get:function get(){return"shop-snackbar"}}]);return ShopSnackbar}(_shopApp.PolymerElement);customElements.define(ShopSnackbar.is,ShopSnackbar);var ShopTabsOverlay=/*#__PURE__*/function(_PolymerElement3){babelHelpers.inherits(ShopTabsOverlay,_PolymerElement3);babelHelpers.createClass(ShopTabsOverlay,null,[{key:"template",get:function get(){return(0,_shopApp.html)(_templateObject13_3f0e9a00e61411ee9d65b9d111681715())}},{key:"is",get:function get(){return"shop-tabs-overlay"}},{key:"properties",get:function get(){return{/**
       * The element the overlay should cover.
       */target:{type:Object,observer:"_targetChanged"}}}}]);function ShopTabsOverlay(){var _this2;babelHelpers.classCallCheck(this,ShopTabsOverlay);_this2=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ShopTabsOverlay).call(this));_this2._lastTarget=void 0;_this2._transitionsInFlight=[];return _this2}babelHelpers.createClass(ShopTabsOverlay,[{key:"ready",value:function ready(){var _this3=this;babelHelpers.get(babelHelpers.getPrototypeOf(ShopTabsOverlay.prototype),"ready",this).call(this);this.addEventListener("transitionend",function(e){return _this3._onTransitionend(e)})}},{key:"_targetChanged",value:function _targetChanged(newTarget,oldTarget){if(!this._transitionsInFlight.length){if(this._lastTarget){this._lastTarget.classList.remove("shop-tabs-overlay-static-above")}this.style.display="block";this._move(oldTarget,newTarget);this._lastTarget=this.target}}},{key:"_onTransitionend",value:function _onTransitionend(event){var index=this._transitionsInFlight.indexOf(event.propertyName);if(0<=index){this._transitionsInFlight.splice(index,1)}if(!this._transitionsInFlight.length){this._moveComplete()}}},{key:"_moveComplete",value:function _moveComplete(){if(this._lastTarget!==this.target){this._move(this._lastTarget,this.target);this._lastTarget=this.target}else{if(this._lastTarget){this._lastTarget.classList.add("shop-tabs-overlay-static-above")}this.style.display="none"}}},{key:"_move",value:function _move(oldTarget,newTarget){var _this4=this,from=oldTarget||newTarget,to=newTarget||oldTarget;if(!from&&!to)return;var fromOpacity=oldTarget?1:0,toOpacity=newTarget?1:0;(0,_shopApp.flush)();var thisRect=this.getBoundingClientRect(),thisStyle=window.getComputedStyle(this),fromRect=from.getBoundingClientRect(),toRect=to.getBoundingClientRect();if(0===toRect.top&&0===toRect.right&&0===toRect.bottom&&0===toRect.left&&0===toRect.width&&0===toRect.height){this.style.transitionProperty="none";this.style.opacity=toOpacity;this._transitionsInFlight=[];_shopApp.microTask.run(this._moveComplete.bind(this));return}else{this.style.transitionProperty=""}var top=parseFloat(thisStyle.top||"0")+(fromRect.top-thisRect.top),right=parseFloat(thisStyle.right||"0")-(fromRect.right-thisRect.right),bottom=parseFloat(thisStyle.bottom||"0")-(fromRect.bottom-thisRect.bottom),left=parseFloat(thisStyle.left||"0")+(fromRect.left-thisRect.left);this.style.transitionDuration="0s";this.style.transitionDelay="0s";var startValues=[this.style.top=top+"px",this.style.right=right+"px",this.style.bottom=bottom+"px",this.style.left=left+"px",this.style.opacity=fromOpacity+""];top+=toRect.top-fromRect.top;right-=toRect.right-fromRect.right;bottom-=toRect.bottom-fromRect.bottom;left+=toRect.left-fromRect.left;var durations=[.2,.2,.2,.2,.2],delays=[0,0,0,0,0];// Delay left / right transitions if element is left / right of the target.
if(fromRect.left<toRect.left&&fromRect.right<toRect.right){delays[3]=.1}else if(fromRect.left>toRect.left&&fromRect.right>toRect.right){delays[1]=.1}// Delay top / bottom transitions if element is above / below the target.
if(fromRect.top<toRect.top&&fromRect.bottom<toRect.bottom){delays[0]=.1}else if(fromRect.top>toRect.top&&fromRect.bottom>toRect.bottom){delays[2]=.1}for(var endValues=[top+"px",right+"px",bottom+"px",left+"px",toOpacity+""],names=["top","right","bottom","left","opacity"],i=0;i<startValues.length;i++){if(startValues[i]===endValues[i])continue;if(0===durations[i]&&0===delays[i])continue;this._transitionsInFlight.push(names[i])}_shopApp.timeOut.run(function(){_this4.style.transitionDuration=durations.map(function(x){return x+"s"}).join(", ");_this4.style.transitionDelay=delays.map(function(x){return x+"s"}).join(", ");_this4.style.top=top+"px";_this4.style.right=right+"px";_this4.style.bottom=bottom+"px";_this4.style.left=left+"px";_this4.style.opacity=toOpacity+""},1)}}]);return ShopTabsOverlay}(_shopApp.PolymerElement);customElements.define(ShopTabsOverlay.is,ShopTabsOverlay);var ShopTabs=/*#__PURE__*/function(_mixinBehaviors2){babelHelpers.inherits(ShopTabs,_mixinBehaviors2);function ShopTabs(){babelHelpers.classCallCheck(this,ShopTabs);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ShopTabs).apply(this,arguments))}babelHelpers.createClass(ShopTabs,[{key:"_onSelectedItemChanged",value:function _onSelectedItemChanged(selectedItem){if(selectedItem===void 0&&this.selected)return;this.$.overlay.target=selectedItem}}],[{key:"template",get:function get(){return(0,_shopApp.html)(_templateObject14_3f0e9a00e61411ee9d65b9d111681715())}},{key:"is",get:function get(){return"shop-tabs"}},{key:"observers",get:function get(){return["_onSelectedItemChanged(selectedItem)"]}}]);return ShopTabs}((0,_shopApp.mixinBehaviors)([_shopApp.IronSelectableBehavior],_shopApp.PolymerElement));customElements.define(ShopTabs.is,ShopTabs);var ShopRippleContainer=/*#__PURE__*/function(_mixinBehaviors3){babelHelpers.inherits(ShopRippleContainer,_mixinBehaviors3);babelHelpers.createClass(ShopRippleContainer,null,[{key:"template",get:function get(){return(0,_shopApp.html)(_templateObject15_3f0e9a00e61411ee9d65b9d111681715())}},{key:"is",get:function get(){return"shop-ripple-container"}}]);function ShopRippleContainer(){var _this5;babelHelpers.classCallCheck(this,ShopRippleContainer);_this5=babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ShopRippleContainer).call(this));_this5._isDown=!1;return _this5}babelHelpers.createClass(ShopRippleContainer,[{key:"ready",value:function ready(){var _this6=this;babelHelpers.get(babelHelpers.getPrototypeOf(ShopRippleContainer.prototype),"ready",this).call(this);this.addEventListener("focus",function(e){return _this6._onFocus(e)},!0);this.addEventListener("blur",function(e){return _this6._onBlur(e)},!0);(0,_shopApp.addListener)(this,"down",this._rippleDown);(0,_shopApp.addListener)(this,"up",this._rippleUp)}},{key:"_onFocus",value:function _onFocus(event){// Prevent second ripple when clicking causes both focus and down.
if(!this._isDown){this._rippleDown(event)}}},{key:"_onBlur",value:function _onBlur(event){this._rippleUp(event)}},{key:"_rippleDown",value:function _rippleDown(event){this._isDown=!0;this.getRipple().downAction(event)}},{key:"_rippleUp",value:function _rippleUp(event){this._isDown=!1;this.getRipple().upAction(event)}}]);return ShopRippleContainer}((0,_shopApp.mixinBehaviors)([PaperRippleBehavior],_shopApp.PolymerElement));customElements.define(ShopRippleContainer.is,ShopRippleContainer);var ShopTab=/*#__PURE__*/function(_PolymerElement4){babelHelpers.inherits(ShopTab,_PolymerElement4);function ShopTab(){babelHelpers.classCallCheck(this,ShopTab);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ShopTab).apply(this,arguments))}babelHelpers.createClass(ShopTab,null,[{key:"template",get:function get(){return(0,_shopApp.html)(_templateObject16_3f0e9a00e61411ee9d65b9d111681715())}},{key:"is",get:function get(){return"shop-tab"}}]);return ShopTab}(_shopApp.PolymerElement);customElements.define(ShopTab.is,ShopTab);var ShopNetworkWarning=/*#__PURE__*/function(_PolymerElement5){babelHelpers.inherits(ShopNetworkWarning,_PolymerElement5);function ShopNetworkWarning(){babelHelpers.classCallCheck(this,ShopNetworkWarning);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ShopNetworkWarning).apply(this,arguments))}babelHelpers.createClass(ShopNetworkWarning,[{key:"_tryReconnect",value:function _tryReconnect(){this.dispatchEvent(new CustomEvent("try-reconnect",{composed:!0}))}}],[{key:"template",get:function get(){return(0,_shopApp.html)(_templateObject17_3f0e9a00e61411ee9d65b9d111681715())}},{key:"is",get:function get(){return"shop-network-warning"}},{key:"properties",get:function get(){return{offline:Boolean}}}]);return ShopNetworkWarning}(_shopApp.PolymerElement);customElements.define(ShopNetworkWarning.is,ShopNetworkWarning);var Shop404Warning=/*#__PURE__*/function(_PolymerElement6){babelHelpers.inherits(Shop404Warning,_PolymerElement6);function Shop404Warning(){babelHelpers.classCallCheck(this,Shop404Warning);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(Shop404Warning).apply(this,arguments))}babelHelpers.createClass(Shop404Warning,null,[{key:"template",get:function get(){return(0,_shopApp.html)(_templateObject18_3f0e9a00e61411ee9d65b9d111681715())}},{key:"is",get:function get(){return"shop-404-warning"}}]);return Shop404Warning}(_shopApp.PolymerElement);customElements.define(Shop404Warning.is,Shop404Warning);var ShopCartItem=/*#__PURE__*/function(_PolymerElement7){babelHelpers.inherits(ShopCartItem,_PolymerElement7);function ShopCartItem(){babelHelpers.classCallCheck(this,ShopCartItem);return babelHelpers.possibleConstructorReturn(this,babelHelpers.getPrototypeOf(ShopCartItem).apply(this,arguments))}babelHelpers.createClass(ShopCartItem,[{key:"_quantityChange",value:function _quantityChange(){this._setCartItem(parseInt(this.$.quantitySelect.value,10))}},{key:"_setCartItem",value:function _setCartItem(quantity){this.dispatchEvent(new CustomEvent("set-cart-item",{bubbles:!0,composed:!0,detail:{item:this.entry.item,quantity:quantity,size:this.entry.size}}))}},{key:"_formatPrice",value:function _formatPrice(price){return price?"$"+price.toFixed(2):""}},{key:"_removeItem",value:function _removeItem(){this._setCartItem(0)}}],[{key:"template",get:function get(){return(0,_shopApp.html)(_templateObject19_3f0e9a00e61411ee9d65b9d111681715())}},{key:"is",get:function get(){return"shop-cart-item"}},{key:"properties",get:function get(){return{entry:Object}}}]);return ShopCartItem}(_shopApp.PolymerElement);customElements.define(ShopCartItem.is,ShopCartItem);// shop-app
});