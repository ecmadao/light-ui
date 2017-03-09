import React, { PropTypes, cloneElement } from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import styles from './base_tipso.css';

class BaseTipso extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
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
    return () => this.setState({ show });
  }

  onOutsideClick(e) {
    e = e || window.event;
    const mouseTarget = (typeof e.which !== "undefined") ? e.which : e.button;
    const isDescendantOfRoot = ReactDOM.findDOMNode(this.tipso).contains(e.target);
    if (!isDescendantOfRoot && mouseTarget === 1) {
      this.handleShowChange(false)();
    }
  }

  get triggerFunc() {
    const { trigger } = this.props;
    const func = {
      hover: {
        onMouseOver: this.handleShowChange(true),
        onMouseEnter: this.handleShowChange(true),
        onMouseOut: this.handleShowChange(false),
        onMouseLeave: this.handleShowChange(false)
      },
      click: {
        onClick: this.handleShowChange(true),
      },
      focus: {
        onFocus: this.handleShowChange(true),
      }
    };
    return func[trigger] || {};
  }

  render() {
    const { show } = this.state;
    const {
      theme,
      children,
      className,
      tipsoContent,
      tipsoStyle,
      wrapperStyle
    } = this.props;
    const containerClass = cx(
      styles["tipso-container"],
      styles[theme],
      show && styles["active"],
      className
    );

    const triggerFunc = this.triggerFunc;
    const tipsoTrigger = cloneElement(children, triggerFunc);

    return (
      <div
        ref={ref => this.tipso = ref}
        style={wrapperStyle}
        className={styles['tipso-wrapper']}>
        {tipsoTrigger}
        <div
          style={tipsoStyle}
          className={containerClass}>
          <div>
            {tipsoContent}
          </div>
        </div>
      </div>
    )
  }
}


BaseTipso.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node
  ]),
  tipsoContent: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node
  ]),
  className: PropTypes.string,
  theme: PropTypes.string,
  trigger: PropTypes.string,
  tipsoStyle: PropTypes.object,
  wrapperStyle: PropTypes.object,
};

BaseTipso.defaultProps = {
  children: (<div></div>),
  tipsoContent: (<div></div>),
  className: '',
  theme: 'light',
  trigger: 'hover',
  tipsoStyle: {},
  wrapperStyle: {}
};

export default BaseTipso;
