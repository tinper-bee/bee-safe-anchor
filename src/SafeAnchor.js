import React from 'react';
import elementType from 'react-prop-types/lib/elementType';

const propTypes = {
  /**
   * 目标地址
   */
  href: React.PropTypes.string,
  /**
   * 点击事件
   */
  onClick: React.PropTypes.func,
  /**
   * 是否禁用
   */
  disabled: React.PropTypes.bool,
  /**
   * 点击事件
   */
  role: React.PropTypes.string,
  /**
   * tab切换目标
   */
  tabIndex: React.PropTypes.oneOfType([
    React.PropTypes.number,
    React.PropTypes.string
  ]),
  /**
   * 组件元素
   */
  componentClass: elementType,
};

const defaultProps = {
  componentClass: 'a',
  disabled: false
};

function isTrivialHref(href) {
  return !href || href.trim() === '#';
}


class SafeAnchor extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { disabled, href, onClick } = this.props;

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
  }

  render() {
    const { componentClass: Component, disabled, ...props } = this.props;

    if (isTrivialHref(props.href)) {
      props.role = props.role || 'button';
      // we want to make sure there is a href attribute on the node
      // otherwise, the cursor incorrectly styled (except with role='button')
      props.href = props.href || '';
    }

    if (disabled) {
      props.tabIndex = -1;
      props.style = { pointerEvents: 'none', ...props.style };
    }

    return (
      <Component
        {...props}
        onClick={this.handleClick}
      />
    );
  }
}

SafeAnchor.propTypes = propTypes;
SafeAnchor.defaultProps = defaultProps;

export default SafeAnchor;
