import React, { PropTypes, Component } from 'react';
import { elementType } from 'tinper-bee-core';
import classnames from 'classnames';

const propTypes = {
  /**
   * 目标地址
   */
  href: PropTypes.string,
  /**
   * 点击事件
   */
  onClick: PropTypes.func,
  /**
   * 是否禁用
   */
  disabled: PropTypes.bool,
  /**
   *  渲染规则
   */
  role: PropTypes.string,
  /**
   * tab切换目标
   */
  tabIndex: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),
  /**
   * 组件元素
   */
  componentClass: elementType,
  offsetBottom:PropTypes.number,
  offsetTop:PropTypes.number,
};

const defaultProps = {
  componentClass: 'a',
  clsPrefix: 'u-anchor'
};

function isTrivialHref(href) {
  return !href || href.trim() === '#';
}


class SafeAnchor extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const {disabled,
            href,
            onClick } = this.props;

    if (disabled || isTrivialHref(href)) {
        if(event) event.preventDefault();
    }

    if (disabled) {
      if(event) event.stopPropagation();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  }

  render() {
    const {
        componentClass: Component,
        clsPrefix,
        disabled,
        ...props } = this.props;

    if (isTrivialHref(props.href)) {
      props.role = props.role || 'button';
      //我们要确保节点上有一个href属性//否则样式不正确（除了role ='button'）
      props.href = props.href || '';
    }
    const classes = {
        [`${clsPrefix}`]: true,
        [`${clsPrefix}-disabled`]: disabled
    };

    if (disabled) {
      props.tabIndex = -1;
    }

    return (
      <Component
        className={classnames(classes)}
        {...props}
        onClick={this.handleClick}
      />
    );
  }
}

SafeAnchor.propTypes = propTypes;
SafeAnchor.defaultProps = defaultProps;

export default SafeAnchor;
