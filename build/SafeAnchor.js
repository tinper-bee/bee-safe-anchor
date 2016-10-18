'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _elementType = require('react-prop-types/lib/elementType');

var _elementType2 = _interopRequireDefault(_elementType);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var propTypes = {
  /**
   * 目标地址
   */
  href: _react2["default"].PropTypes.string,
  /**
   * 点击事件
   */
  onClick: _react2["default"].PropTypes.func,
  /**
   * 是否禁用
   */
  disabled: _react2["default"].PropTypes.bool,
  /**
   * 点击事件
   */
  role: _react2["default"].PropTypes.string,
  /**
   * tab切换目标
   */
  tabIndex: _react2["default"].PropTypes.oneOfType([_react2["default"].PropTypes.number, _react2["default"].PropTypes.string]),
  /**
   * 组件元素
   */
  componentClass: _elementType2["default"]
};

var defaultProps = {
  componentClass: 'a'
};

function isTrivialHref(href) {
  return !href || href.trim() === '#';
}

var SafeAnchor = function (_React$Component) {
  _inherits(SafeAnchor, _React$Component);

  function SafeAnchor(props, context) {
    _classCallCheck(this, SafeAnchor);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.handleClick = _this.handleClick.bind(_this);
    return _this;
  }

  SafeAnchor.prototype.handleClick = function handleClick(event) {
    var _props = this.props;
    var disabled = _props.disabled;
    var href = _props.href;
    var onClick = _props.onClick;


    if (disabled || isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  SafeAnchor.prototype.render = function render() {
    var _props2 = this.props;
    var Component = _props2.componentClass;
    var disabled = _props2.disabled;

    var props = _objectWithoutProperties(_props2, ['componentClass', 'disabled']);

    if (isTrivialHref(props.href)) {
      props.role = props.role || 'button';
      // we want to make sure there is a href attribute on the node
      // otherwise, the cursor incorrectly styled (except with role='button')
      props.href = props.href || '';
    }

    if (disabled) {
      props.tabIndex = -1;
      props.style = _extends({ pointerEvents: 'none' }, props.style);
    }

    return _react2["default"].createElement(Component, _extends({}, props, {
      onClick: this.handleClick
    }));
  };

  return SafeAnchor;
}(_react2["default"].Component);

SafeAnchor.propTypes = propTypes;
SafeAnchor.defaultProps = defaultProps;

exports["default"] = SafeAnchor;
module.exports = exports['default'];