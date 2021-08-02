"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _core = require("@material-ui/core");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var _default = {
  Add: /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/_react.default.createElement(_core.Icon, (0, _extends2.default)({}, props, {
      ref: ref
    }), "add_box");
  }),
  Check: /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/_react.default.createElement(_core.Icon, (0, _extends2.default)({}, props, {
      ref: ref
    }), "check");
  }),
  Clear: /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/_react.default.createElement(_core.Icon, (0, _extends2.default)({}, props, {
      ref: ref
    }), "clear");
  }),
  Delete: /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/_react.default.createElement(_core.Icon, (0, _extends2.default)({}, props, {
      ref: ref
    }), "delete_outline");
  }),
  DetailPanel: /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/_react.default.createElement(_core.Icon, (0, _extends2.default)({}, props, {
      ref: ref
    }), "chevron_right");
  }),
  Edit: /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/_react.default.createElement(_core.Icon, (0, _extends2.default)({}, props, {
      ref: ref
    }), "edit");
  }),
  Export: /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/_react.default.createElement(_core.Icon, (0, _extends2.default)({}, props, {
      ref: ref
    }), "save_alt");
  }),
  Filter: /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/_react.default.createElement(_core.Icon, (0, _extends2.default)({}, props, {
      ref: ref
    }), "filter_list");
  }),
  FirstPage: /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/_react.default.createElement(_core.Icon, (0, _extends2.default)({}, props, {
      ref: ref
    }), "first_page");
  }),
  LastPage: /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/_react.default.createElement(_core.Icon, (0, _extends2.default)({}, props, {
      ref: ref
    }), "last_page");
  }),
  NextPage: /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/_react.default.createElement(_core.Icon, (0, _extends2.default)({}, props, {
      ref: ref
    }), "chevron_right");
  }),
  PreviousPage: /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/_react.default.createElement(_core.Icon, (0, _extends2.default)({}, props, {
      ref: ref
    }), "chevron_left");
  }),
  ResetSearch: /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/_react.default.createElement(_core.Icon, (0, _extends2.default)({}, props, {
      ref: ref
    }), "clear");
  }),
  Resize: /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/_react.default.createElement(_core.Icon, (0, _extends2.default)({}, props, {
      ref: ref,
      style: _objectSpread(_objectSpread({}, props.style), {}, {
        transform: 'rotate(90deg)'
      })
    }), "drag_handle");
  }),
  Search: /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/_react.default.createElement(_core.Icon, (0, _extends2.default)({}, props, {
      ref: ref
    }), "search");
  }),
  SortArrow: /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/_react.default.createElement(_core.Icon, (0, _extends2.default)({}, props, {
      ref: ref
    }), "arrow_downward");
  }),
  ThirdStateCheck: /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/_react.default.createElement(_core.Icon, (0, _extends2.default)({}, props, {
      ref: ref
    }), "remove");
  }),
  ViewColumn: /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/_react.default.createElement(_core.Icon, (0, _extends2.default)({}, props, {
      ref: ref
    }), "view_column");
  }),
  Retry: /*#__PURE__*/(0, _react.forwardRef)(function (props, ref) {
    return /*#__PURE__*/_react.default.createElement(_core.Icon, (0, _extends2.default)({}, props, {
      ref: ref
    }), "replay");
  })
};
exports.default = _default;