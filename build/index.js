"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (content, words) {
  var reg = new RegExp(words.join("|"), "ig");
  return content.replace(reg, '***');
};