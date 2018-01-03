'use strict';

var _ = require('.');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

test('Replaces blacklisted words with asterisks', function () {
  expect((0, _2.default)("Name of the NX will be the Nintendo Switch.", ["switch"])).toBe("Name of the NX will be the Nintendo ***.");
});

test('Replaces multiple instances of blacklisted words', function () {
  expect((0, _2.default)("Name of the NX will be the Nintendo Switch. The switch will be awesome.", ["switch"])).toBe("Name of the NX will be the Nintendo ***. The *** will be awesome.");
});