import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import styles from './dragger.css';
import darg from '../../../shared/utils/darg';

class Dragger extends React.Component {
  constructor(props) {
    super(props);
    const { max, min, value } = props;
    const left = value / (max - min);
    this.state = {
      draging: false,
      left: left
    };
    this.startX = 0;
    this.originLeft = left;

    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.resetOrigin = this.resetOrigin.bind(this);
  }

  componentDidMount() {
    this.resetOrigin();
    if (window.addEventListener) {
      window.addEventListener('resize', this.resetOrigin, true);
    } else {
      window.addEventListener('onresize', this.resetOrigin);
    }
    if (document.addEventListener) {
      document.addEventListener('scroll', this.resetOrigin, true);
      document.addEventListener('mousemove', this.handleMouseMove, true);
      document.addEventListener('mouseup', this.handleMouseUp, true);
    } else {
      document.addEventListener('onscroll', this.resetOrigin);
      document.attachEvent('onmousemove', this.handleMouseMove);
      document.attachEvent('onmouseup', this.handleMouseUp);
    }
  }

  componentWillUnmount() {
    if (window.addEventListener) {
      window.removeEventListener('resize', this.resetOrigin, true);
    } else {
      window.detachEvent('onresize', this.resetOrigin);
    }
    if (document.removeEventListener) {
      document.removeEventListener('scroll', this.resetOrigin, true);
      document.removeEventListener('mousemove', this.handleMouseMove, true);
      document.removeEventListener('mouseup', this.handleMouseUp, true);
    } else {
      document.detachEvent('onscroll', this.resetOrigin);
      document.detachEvent('onmousemove', this.handleMouseMove);
      document.detachEvent('onmouseup', this.handleMouseUp);
    }
  }

  componentWillReceiveProps(nextProps) {
    const { value, max, min } = nextProps;
    const nextLeft = value / (max - min);
    if (nextLeft !== this.state.left) {
      this.setState({ left: nextLeft });
    }
  }

  resetOrigin() {
    const centerPoint = ReactDOM.findDOMNode(this.dragger);
    const centerPointPos = centerPoint.getBoundingClientRect();
    this.startX = centerPointPos.left + centerPoint.clientWidth;
  }

  handleMouseMove(e) {
    if (this.state.draging) {
      const pos = darg.mousePosition(e);
      this.setLeft(pos);
    }
  }

  handleMouseUp(e) {
    if (this.state.draging) {
      this.setState({
        draging: false
      });
      const pos = darg.mousePosition(e);
      this.setLeft(pos, true);
    }
  }

  handleMouseDown(e) {
    const event = e || window.event;
    event.preventDefault();
    event.stopPropagation();
    this.setState({
      draging: true
    });
    const pos = darg.mousePosition(event);
    this.startX = pos.x;
  }

  setLeft(position, mouseUp = false) {
    const dragX = position.x;
    const { maxDis, onChange } = this.props;
    if (this.startX !== dragX) {
      const percentage = (dragX - this.startX) / maxDis;
      const validateLeft = darg.validatePosition(this.originLeft + percentage, 0, 1);
      this.setState({
        left: validateLeft
      });
      if (mouseUp) {
        this.originLeft = validateLeft;
        onChange && onChange(validateLeft);
      }
    }
  }

  render() {
    const { color } = this.props;
    const { left } = this.state;
    const dragClass = cx(
      styles.dragger,
      color && styles[color]
    );
    return (
      <div
        className={dragClass}
        style={{
          left: `${left * 100}%`
        }}
        ref={ref => this.dragger = ref}
        onMouseDown={this.handleMouseDown}></div>
    );
  }
}

Dragger.propTypes = {
  color: PropTypes.string,
  max: PropTypes.number,
  min: PropTypes.number,
  value: PropTypes.number,
  onChange: PropTypes.func,
};

Dragger.defaultProps = {
  max: 0,
  min: 0,
  value: 0,
  color: 'green',
  onChange: () => {},
};

export default Dragger;
