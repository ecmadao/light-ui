import React, { cloneElement } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import styles from './base_tipso.css';

class BaseTipso extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: props.show
    };
    this.handleShowChange = this.handleShowChange.bind(this);
    this.onOutsideClick = this.onOutsideClick.bind(this);
  }

  componentDidMount() {
    if (document.addEventListener) {
      document.addEventListener('mousedown', this.onOutsideClick, true);
    } else {
      document.attachEvent('onmousedown', this.onOutsideClick);
    }
  }

  componentWillUnmount() {
    if (document.removeEventListener) {
      document.removeEventListener('mousedown', this.onOutsideClick, true);
    } else {
      document.detachEvent('onmousedown', this.onOutsideClick);
    }
  }

  handleShowChange(show) {
    const { onTipClose } = this.props;
    return () => {
      this.setState({ show });
      !show && onTipClose && onTipClose();
    };
  }

  onOutsideClick(e) {
    e = e || window.event;
    const mouseTarget = (typeof e.which !== 'undefined') ? e.which : e.button;
    const isDescendantOfRoot = ReactDOM.findDOMNode(this.tipso).contains(e.target);
    if (!isDescendantOfRoot && mouseTarget === 1) {
      this.handleShowChange(false)();
    }
  }

  get triggerFunc() {
    const { trigger } = this.props;

    switch (trigger) {
      case 'hover':
        return {
          onMouseOver: this.handleShowChange(true).bind(this),
          onMouseEnter: this.handleShowChange(true).bind(this),
          onMouseOut: this.handleShowChange(false).bind(this),
          onMouseLeave: this.handleShowChange(false).bind(this)
        };
      case 'click':
        return {
          onClick: this.handleShowChange(true).bind(this),
        };
      case 'focus':
        return {
          onFocus: this.handleShowChange(true).bind(this),
        };
      default:
        return {};
    }
  }

  render() {
    const { show } = this.state;
    const {
      theme,
      disabled,
      position,
      children,
      className,
      tipsoStyle,
      wrapperClass,
      wrapperStyle,
      tipsoContent,
      activeClassName
    } = this.props;
    const containerClass = cx(
      styles['tipso-container'],
      styles[theme],
      styles[position],
      !disabled && (this.props.show || show) && styles.active,
      !disabled && (this.props.show || show) && activeClassName,
      className
    );

    const triggerFunc = this.triggerFunc;
    const tipsoTrigger = cloneElement(children, triggerFunc);

    return (
      <div
        style={wrapperStyle}
        ref={ref => (this.tipso = ref)}
        className={cx(styles['tipso-wrapper'], wrapperClass)}
      >
        {tipsoTrigger}
        {tipsoContent ? (
          <div
            style={tipsoStyle}
            className={containerClass}>
            <div>
              {tipsoContent}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}

BaseTipso.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.array,
    PropTypes.string
  ]),
  tipsoContent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.array,
    PropTypes.string
  ]),
  className: PropTypes.string,
  theme: PropTypes.string,
  trigger: PropTypes.string,
  tipsoStyle: PropTypes.object,
  wrapperStyle: PropTypes.object,
  wrapperClass: PropTypes.string,
  position: PropTypes.string,
  show: PropTypes.bool,
  disabled: PropTypes.bool,
  onTipClose: PropTypes.func,
};

BaseTipso.defaultProps = {
  children: (<div></div>),
  tipsoContent: null,
  className: '',
  theme: 'light',
  trigger: 'hover',
  tipsoStyle: {},
  wrapperStyle: {},
  wrapperClass: '',
  position: 'top',
  show: false,
  disabled: false,
  onTipClose: () => {},
};

export default BaseTipso;
