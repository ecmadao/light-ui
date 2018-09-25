import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import styles from './slider.css';
import Tipso from '../Tipso/Tipso';
import darg from '../../shared/utils/darg';

class Dragger extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      draging: false,
      showTipso: props.showTipso
    };

    this.setLeft = this.setLeft.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
  }

  componentDidMount() {
    if (document.addEventListener) {
      document.addEventListener('mousemove', this.handleMouseMove, true);
      document.addEventListener('mouseup', this.handleMouseUp, true);
    } else {
      document.attachEvent('onmousemove', this.handleMouseMove);
      document.attachEvent('onmouseup', this.handleMouseUp);
    }
  }

  componentWillUnmount() {
    if (document.removeEventListener) {
      document.removeEventListener('mousemove', this.handleMouseMove, true);
      document.removeEventListener('mouseup', this.handleMouseUp, true);
    } else {
      document.detachEvent('onmousemove', this.handleMouseMove);
      document.detachEvent('onmouseup', this.handleMouseUp);
    }
  }

  handleMouseMove(e) {
    const event = e || window.event;
    if (this.state.draging) {
      const pos = darg.mousePosition(event);
      this.setLeft(pos);
    }
  }

  handleMouseUp(e) {
    const event = e || window.event;
    if (this.state.draging) {
      this.setState({
        draging: false,
        showTipso: false,
      });
      const pos = darg.mousePosition(event);
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
  }

  setLeft(position, mouseUp = false) {
    const dragX = position.x;
    const {
      min,
      max,
      jump,
      maxDis,
      maxLeft,
      minJump,
      maxValue,
      minValue,
      onDragEnd,
      onDraging,
    } = this.props;
    const leftLength = dragX - maxLeft;
    const offsetPercentage = leftLength / maxDis;

    let validateLeft = darg.getStandardAbsolutePosition(offsetPercentage, min, max);
    if (jump) {
      let val = validateLeft * (maxValue - minValue);
      const offset = val % minJump;
      val = offset > (minJump / 2)
        ? val - offset + minJump
        : val - offset;
      validateLeft = val / (maxValue - minValue);
    }
    onDraging && onDraging(validateLeft);
    if (mouseUp) {
      onDragEnd && onDragEnd(validateLeft);
    }
  }

  render() {
    const {
      left,
      color,
      value,
      useTipso,
      showTipso,
      tipsoClass,
      tipsoTrigger,
      tipFormatter,
      draggerClass,
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
        show={showTipso}
        disabled={!useTipso}
        trigger={tipsoTrigger}
        show={this.state.draging}
        tipsoContent={(
          <div
            style={{
              textAlign: 'center',
              minWidth: `${(tipsoValue.length + 1) * 5}px`
            }}
          >
            {tipsoValue}
          </div>
        )}
        className={cx(
          styles.tipso,
          tipsoClass
        )}
        wrapperClass={styles.draggerContainer}
        wrapperStyle={{ left: `${left * 100}%` }}
      >
        <div
          className={dragClass}
          ref={ref => (this.dragger = ref)}
          onMouseDown={this.handleMouseDown}
        />
      </Tipso>
    );
  }
}

Dragger.propTypes = {
  color: PropTypes.string,
  left: PropTypes.number,
  value: PropTypes.number,
  maxDis: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onDragEnd: PropTypes.func,
  onDraging: PropTypes.func,
  useTipso: PropTypes.bool,
  showTipso: PropTypes.bool,
  draggerClass: PropTypes.string,
  tipsoClass: PropTypes.string,
  tipsoTrigger: PropTypes.string,
};

Dragger.defaultProps = {
  left: 0,
  value: 0,
  maxDis: 0,
  min: 0,
  max: 0,
  color: 'green',
  onDragEnd: Function.prototype,
  onDraging: Function.prototype,
  useTipso: true,
  showTipso: false,
  draggerClass: '',
  tipsoClass: '',
  tipsoTrigger: 'hover',
};

export default Dragger;
