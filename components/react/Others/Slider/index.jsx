import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import objectAssign from 'object-assign';
import Dragger from './Dragger';
import ProgressBar from './ProgressBar';
import styles from './slider.css';
import Utils from '../../../shared/utils/helper';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = objectAssign(
      {},
      this.initialState(props),
      {
        maxDis: 0
      }
    );
    this.onChange = this.onChange.bind(this);
    this.onDraging = this.onDraging.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
    this.onDragMove = this.onDragMove.bind(this);
    this.changePosition = this.changePosition.bind(this);
  }

  componentDidMount() {
    this.resetOrigin();
    if (window.addEventListener) {
      window.addEventListener('resize', this.resetOrigin, true);
    } else {
      window.addEventListener('onresize', this.resetOrigin);
    }
  }

  componentWillUnmount() {
    if (window.addEventListener) {
      window.removeEventListener('resize', this.resetOrigin, true);
    } else {
      window.detachEvent('onresize', this.resetOrigin);
    }
  }

  componentWillReceiveProps(nextProps) {
    const values = this.validateValues(nextProps);
    if (!Utils.isEqual(values, this.state.values)) {
      this.setState({
        ...this.initialState(nextProps)
      });
    }
  }

  validateValues(props) {
    const { value } = props;
    const values = Utils.isArray(value) ? value : [value];
    return values;
  }

  initialState(props) {
    const { max, min } = props;
    const values = this.validateValues(props);
    const positions = values.map((item) => {
      const left = (item - min) / (max - min);
      return { left };
    });
    return {
      values,
      positions,
    };
  }

  resetOrigin() {
    const pathway = ReactDOM.findDOMNode(this.pathway).getBoundingClientRect();
    const maxDis = pathway.width;
    const maxLeft = pathway.left;
    this.setState({ maxDis, maxLeft });
  }

  onChange(options = {}) {
    const {
      index,
      left,
      pos = null
    } = options;
    const positions = pos || this.state.positions;
    const { onChange } = this.props;
    const value = this.getValue(left);
    const returnValue = position => this.getValue(position.left);
    const results = [
      ...positions.slice(0, index).map(returnValue),
      value,
      ...positions.slice(index + 1).map(returnValue)
    ];
    if (!Utils.checkSameArray(results, this.validateValues(this.props))) {
      const result = results.length > 1 ? results : results[0];
      onChange(result);
    }
  }

  getValue(left) {
    const { max, min } = this.props;
    return Math.round(left * (max - min) + min);
  }

  onDraging(index) {
    const { updateWhenDrag } = this.props;
    return left => {
      const pos = this.changePosition(index, { left });
      if (updateWhenDrag) {
        this.onChange({
          pos,
          left,
          index,
        });
      }
    };
  }

  onDragEnd(index) {
    return left => {
      const pos = this.changePosition(index, { left });
      this.onChange({
        index,
        left,
        pos
      });
    };
  }

  onDragMove(leftPos) {
    return () => {
      const { positions } = this.state;
      const leftOffsets = positions.map(
        position => Math.abs(position.left - leftPos)
      );
      const minLeftOffset = Math.min(...leftOffsets).toFixed(2);
      const index = Utils.findFirstIndex({
        array: positions,
        getVal: (position) => position.left,
        check: val => Math.abs(val - leftPos).toFixed(2) === minLeftOffset
      });
      this.onDragEnd(index)(leftPos);
    };
  }

  changePosition(index, position) {
    if (index <= -1) return null;
    const { positions } = this.state;
    const newPos = [
      ...positions.slice(0, index),
      objectAssign({}, positions[index], position),
      ...positions.slice(index + 1)
    ];
    this.setState({
      positions: newPos
    });
    return newPos;
  }

  renderDrager() {
    const { positions, maxDis, maxLeft } = this.state;
    const {
      max,
      min,
      jump,
      color,
      minJump,
      minRange,
      useTipso,
      showTipso,
      tipsoClass,
      draggerClass,
      tipFormatter,
    } = this.props;
    const minDis = minRange / (max - min);
    return positions.map((item, index) => {
      const { left } = item;
      const value = this.getValue(left);
      const minPosition = index - 1 >= 0
        ? positions[index - 1].left + minDis
        : 0;
      const maxPosition = index + 1 < positions.length
        ? positions[index + 1].left - minDis
        : 1;
      return (
        <Dragger
          jump={jump}
          key={index}
          left={left}
          maxDis={maxDis}
          maxLeft={maxLeft}
          color={color}
          value={value}
          max={maxPosition}
          min={minPosition}
          maxValue={max}
          minValue={min}
          minJump={minJump}
          useTipso={useTipso}
          showTipso={showTipso}
          draggerClass={draggerClass}
          tipsoClass={tipsoClass}
          onDragEnd={this.onDragEnd(index)}
          onDraging={this.onDraging(index)}
          tipFormatter={tipFormatter}
        />
      );
    });
  }

  renderProgressBar() {
    const { positions } = this.state;
    const { color } = this.props;
    const left = positions.length > 1 ? positions[0].left : 0;
    const right = 1 - positions.slice(-1)[0].left;
    return (
      <ProgressBar
        color={color}
        left={left}
        right={right}
      />
    );
  }

  renderSections() {
    const { clickable, max, min, minJump, jump } = this.props;
    if (!clickable || !jump || minJump <= 0) return null;
    const { positions } = this.state;
    const lefts = positions.map(position => position.left);
    let maxLeft = Math.min(...lefts);
    const maxRight = Math.max(...lefts);
    if (positions.length === 1) {
      maxLeft = 0;
    }
    const length = (max - min) / minJump;
    return Utils.createArray(length + 2).map((val, index) => {
      const left = index / length;
      return (
        <div
          key={index}
          style={{ left: `${left * 100}%` }}
          className={cx(
            styles.dragSection,
            left >= maxLeft && left <= maxRight && styles.light
          )}
          onClick={this.onDragMove(left)}
        />
      );
    });
  }

  render() {
    const { className } = this.props;
    const containerClass = cx(
      styles.container,
      className
    );
    return (
      <div className={containerClass}>
        <div
          className={styles.pathway}
          ref={ref => this.pathway = ref}
        >
          {this.renderSections()}
          {this.renderDrager()}
          {this.renderProgressBar()}
        </div>
      </div>
    );
  }
}

Slider.propTypes = {
  className: PropTypes.string,
  tipFormatter: PropTypes.func,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.array
  ]),
  minRange: PropTypes.number,
  color: PropTypes.string,
  draggerClass: PropTypes.string,
  tipsoClass: PropTypes.string,
  onChange: PropTypes.func,
  useTipso: PropTypes.bool,
  showTipso: PropTypes.bool,
  jump: PropTypes.bool,
  minJump: PropTypes.number,
  clickable: PropTypes.bool,
  updateWhenDrag: PropTypes.bool,
};

Slider.defaultProps = {
  className: '',
  tipFormatter: null,
  min: 0,
  max: 100,
  value: 10,
  minRange: 1,
  color: 'green',
  onChange: () => {},
  useTipso: true,
  showTipso: false,
  draggerClass: '',
  tipsoClass: '',
  jump: false,
  minJump: 1,
  clickable: false,
  updateWhenDrag: false,
};

export default Slider;
