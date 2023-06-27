"use strict";

require("core-js/modules/es.object.define-property.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Modal;
var _react = _interopRequireDefault(require("react"));
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function Modal(_ref) {
  var closeConfirmModal = _ref.closeConfirmModal;
  return /*#__PURE__*/_react.default.createElement("dialog", {
    className: "backgroundModal",
    "aria-modal": "true",
    "aria-hidden": "true"
  }, /*#__PURE__*/_react.default.createElement("div", {
    id: "confirmation",
    className: "modal",
    role: "dialog"
  }, /*#__PURE__*/_react.default.createElement("span", null, "Employee Created!"), /*#__PURE__*/_react.default.createElement("button", {
    onClick: closeConfirmModal,
    className: "closeBtn",
    "aria-label": "Close"
  }, /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
    icon: _freeSolidSvgIcons.faTimes
  }))));
}