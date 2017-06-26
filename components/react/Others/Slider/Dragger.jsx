import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import styles from './slider.css';
import Tipso from '../../Tipso/Tipso';
import darg from '../../../shared/utils/darg';

class Dragger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      draging: false
    };
    this.startX = 0;

    this.setLeft = this.setLeft.bind(this);
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
    const {
      min,
      max,
      jump,
      maxValue,
      minValue,
      minJump,
      maxDis,
      onDragEnd,
      onDraging,
    } = this.props;
    if (this.startX !== dragX) {
      const percentage = (dragX - this.startX) / maxDis;
      let validateLeft = darg.validatePosition(
        this.props.originLeft + percentage, min, max);

      if (jump) {
        let val = validateLeft * (maxValue - minValue);
        const integerVal = Math.floor(val);
        if ((val - integerVal) > minJump / 2) {
          val = integerVal + 1;
        } else {
          val = integerVal;
        }
        validateLeft = val / (maxValue - minValue);
      }
      onDraging && onDraging(validateLeft);
      if (mouseUp) {
        onDragEnd && onDragEnd(validateLeft);
      }
    }
  }

  render() {
    const {
      color,
      left,
      value,
      tipFormatter,
      useTipso,
      draggerClass,
      tipsoClass
    } = this.props;
    const dragClass = cx(
      styles.dragger,
      color && styles[color],
      draggerClass
    );
    const tipsoValue = tipFormatter ? tipFormatter(value) : value;
    return (
      <Tipso
        theme="dark"
        disabled={!useTipso}
        show={this.state.draging}
        tipsoContent={(
          <div
            style={{
              textAlign: 'center',
              minWidth: `${(tipsoValue.length + 1) * 5}px`
            }}
          >{tipsoValue}</div>
        )}
        className={cx(
          styles.tipso,
          tipsoClass
        )}
        wrapperClass={styles['dragger-container']}
        wrapperStyle={{
          left: `${left * 100}%`
        }}>
        <div
          className={dragClass}
          ref={ref => this.dragger = ref}
          onMouseDown={this.handleMouseDown}></div>
      </Tipso>
    );
  }
}

Dragger.propTypes = {
  color: PropTypes.string,
  left: PropTypes.number,
  value: PropTypes.number,
  originLeft: PropTypes.number,
  maxDis: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onDragEnd: PropTypes.func,
  onDraging: PropTypes.func,
  useTipso: PropTypes.bool,
  draggerClass: PropTypes.string,
  tipsoClass: PropTypes.string,
};

Dragger.defaultProps = {
  left: 0,
  value: 0,
  originLeft: 0,
  maxDis: 0,
  min: 0,
  max: 0,
  color: 'green',
  onDragEnd: () => {},
  onDraging: () => {},
  useTipso: true,
  draggerClass: '',
  tipsoClass: '',
};

export default Dragger;
