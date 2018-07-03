import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

const propTypes = {
  children: PropTypes.node,
  onKeydown: PropTypes.func,
  targetKey: PropTypes.number,
  onOutsideClick: PropTypes.func,
  responseKeydown: PropTypes.bool,
  responseOutsideClick: PropTypes.bool,
};

const defaultProps = {
  targetKey: null,
  responseKeydown: false,
  responseOutsideClick: true,
  children: <span />,
  onOutsideClick: () => {},
  onKeydown: () => {},
};

class OutsideClickHandler extends React.Component {
  constructor(props) {
    super(props);
    this.onKeydown = this.onKeydown.bind(this);
    this.onOutsideClick = this.onOutsideClick.bind(this);
  }

  componentDidMount() {
    const {
      responseKeydown,
      responseOutsideClick
    } = this.props;
    if (responseOutsideClick) {
      if (document.addEventListener) {
        document.addEventListener('mousedown', this.onOutsideClick, true);
      } else {
        document.attachEvent('onmousedown', this.onOutsideClick);
      }
    }
    if (responseKeydown) {
      if (document.addEventListener) {
        document.addEventListener('keydown', this.onKeydown, true);
      } else {
        document.attachEvent('keydown', this.onKeydown);
      }
    }
  }

  componentWillUnmount() {
    const {
      responseKeydown,
      responseOutsideClick
    } = this.props;
    if (responseOutsideClick) {
      if (document.removeEventListener) {
        document.removeEventListener('mousedown', this.onOutsideClick, true);
      } else {
        document.detachEvent('onmousedown', this.onOutsideClick);
      }
    }
    if (responseKeydown) {
      if (document.removeEventListener) {
        document.removeEventListener('keydown', this.onKeydown, true);
      } else {
        document.detachEvent('keydown', this.onKeydown);
      }
    }
  }

  onOutsideClick(e) {
    e = e || window.event;
    const mouseTarget = (typeof e.which !== "undefined") ? e.which : e.button;
    const isDescendantOfRoot = ReactDOM.findDOMNode(this.childNode).contains(e.target);
    if (!isDescendantOfRoot && mouseTarget === 1) {
      const { onOutsideClick } = this.props;
      onOutsideClick && onOutsideClick(e);
    }
  }

  onKeydown(e) {
    const { targetKey, onKeydown } = this.props;
    if (e.keyCode === targetKey) {
      onKeydown && onKeydown(e);
    }
  }

  render() {
    return (
      <div ref={c => (this.childNode = c)}>
        {this.props.children}
      </div>
    );
  }
}

OutsideClickHandler.propTypes = propTypes;
OutsideClickHandler.defaultProps = defaultProps;

export default OutsideClickHandler;
