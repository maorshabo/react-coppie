"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TransformOrigin = exports.cssExtend = exports.deepExtend = void 0;

var StyleRelated = require('./styleStuff');

var deepExtend = function deepExtend(destination, source) {
  destination = destination || {};

  for (var property in source) {
    if (!source.hasOwnProperty(property)) continue;

    if (source[property] && source[property].constructor && source[property].constructor === Object) {
      if (destination[property] && destination[property].constructor && destination[property].constructor === Object) deepExtend(destination[property], source[property]);else {
        destination[property] = {};
        deepExtend(destination[property], source[property]);
      }
    } else {
      destination[property] = source[property];
    }
  }

  return destination;
};

exports.deepExtend = deepExtend;

var cssExtend = function cssExtend(source, old) {
  for (var key in old) {
    if (!old.hasOwnProperty(key)) continue;
    if (!source[key]) source[key] = old[key];
  }

  return source;
};

exports.cssExtend = cssExtend;

var TransformOrigin = function TransformOrigin(el) {
  if (!el || !el.style[StyleRelated.CSS_TRANS_ORG]) {
    this.x = 0;
    this.y = 0;
    return;
  }

  var css = el.style[StyleRelated.CSS_TRANS_ORG].split(' ');
  this.x = parseFloat(css[0]);
  this.y = parseFloat(css[1]);
};

exports.TransformOrigin = TransformOrigin;

TransformOrigin.prototype.toString = function () {
  return this.x + 'px ' + this.y + 'px';
};