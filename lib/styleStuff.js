"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var StyleRelated = {
  cssPrefixes: ['Webkit', 'Moz', 'ms'],
  emptyStyles: document.createElement('div').style,
  CSS_TRANS_ORG: null,
  CSS_TRANSFORM: null,
  CSS_USERSELECT: null,
  vendorPrefix: function vendorPrefix(prop) {
    if (prop in this.emptyStyles) {
      return prop;
    }

    var capProp = prop[0].toUpperCase() + prop.slice(1);
    var i = this.cssPrefixes.length;

    while (i--) {
      prop = this.cssPrefixes[i] + capProp;

      if (prop in this.emptyStyles) {
        return prop;
      }
    }
  }
};
StyleRelated.CSS_TRANSFORM = StyleRelated.vendorPrefix('transform');
StyleRelated.CSS_TRANS_ORG = StyleRelated.vendorPrefix('transformOrigin');
StyleRelated.CSS_USERSELECT = StyleRelated.vendorPrefix('userSelect');
var _default = StyleRelated;
exports["default"] = _default;