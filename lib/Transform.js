"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _styleStuff = _interopRequireDefault(require("./styleStuff"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _TRANSLATE = 'translate3d';
var _TRANSLATE_SUFFIX = ', 0px';

var Transform =
/*#__PURE__*/
function () {
  function Transform(x, y, scale) {
    _classCallCheck(this, Transform);

    this.x = parseFloat(x);
    this.y = parseFloat(y);
    this.scale = parseFloat(scale);
  }

  _createClass(Transform, [{
    key: "toString",
    value: function toString() {
      return _TRANSLATE + '(' + this.x + 'px, ' + this.y + 'px' + _TRANSLATE_SUFFIX + ') scale(' + this.scale + ')';
    }
  }], [{
    key: "parse",
    value: function parse(v) {
      // console.log("StylesRelated.CSS_TRANSFORM",StylesRelated.CSS_TRANSFORM);
      if (v.style) {
        return Transform.parse(v.style[_styleStuff["default"].CSS_TRANSFORM]);
      } else if (v.indexOf('matrix') > -1 || v.indexOf('none') > -1) {
        return Transform.fromMatrix(v);
      } else {
        return Transform.fromString(v);
      }
    }
  }, {
    key: "fromMatrix",
    value: function fromMatrix(v) {
      var vals = v.substring(7).split(',');

      if (!vals.length || v === 'none') {
        vals = [1, 0, 0, 1, 0, 0];
      }

      return new Transform(parseInt(vals[4], 10), parseInt(vals[5], 10), parseFloat(vals[0]));
    }
  }, {
    key: "fromString",
    value: function fromString(v) {
      var values = v.split(') ');
      var translate = values[0].substring(_TRANSLATE.length + 1).split(',');
      var scale = values.length > 1 ? values[1].substring(6) : 1;
      var x = translate.length > 1 ? translate[0] : 0;
      var y = translate.length > 1 ? translate[1] : 0;
      return new Transform(x, y, scale);
    }
  }]);

  return Transform;
}();

var _default = Transform;
exports["default"] = _default;