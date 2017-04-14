import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import objectAssign from 'object-assign';
import Dragger from './Dragger';
import ProgressBar from './ProgressBar';
import styles from './slider.css';
import Helper from '../../../shared/utils/helper';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = objectAssign({}, this.initialState(props), {
      maxDis: 0
    });
    this.onChange = this.onChange.bind(this);
    this.onDraging = this.onDraging.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
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
    const { value } = nextProps;
    const values = Helper.isArray(value) ? value : [value];
    if (!Helper.isEqual(values, this.state.values)) {
      this.setState({
        ...this.initialState(nextProps)
      });
    }
  }

  initialState(props) {
    const { value, max, min } = props;
    const values = Helper.isArray(value) ? value : [value];
    const positions = values.map((item) => {
      const left = (item - min) / (max - min);
      return {
        left,
        originLeft: left
      };
    });
    return {
      positions,
      values
    };
  }

  resetOrigin() {
    const pathway = ReactDOM.findDOMNode(this.pathway).getBoundingClientRect();
    const maxDis = pathway.width;
    this.setState({ maxDis });
  }

  onChange(index) {
    const { positions } = this.state;
    const { onChange } = this.props;
    return (left) => {
      this.onDragEnd(left, index);
      const value = this.getValue(left);
      const returnValue = position => this.getValue(position.left);
      const results = [
        ...positions.slice(0, index).map(returnValue),
        value,
        ...positions.slice(index + 1).map(returnValue)
      ];
      onChange(results.length > 1 ? results : results[0]);
    };
  }

  getValue(left) {
    const { max, min } = this.props;
    return parseInt(left * (max - min) + min, 10);
  }

  onDraging(index) {
    return left => this.changePosition(index, { left });
  }

  onDragEnd(left, index) {
    this.changePosition(index, { originLeft: left });
  }

  changePosition(index, position) {
    const { positions } = this.state;
    this.setState({
      positions: [
        ...positions.slice(0, index),
        objectAssign({}, positions[index], position),
        ...positions.slice(index + 1)
      ]
    });
  }

  renderDrager() {
    const { positions, maxDis } = this.state;
    const { color, tipFormatter, minRange, max, min } = this.props;
    const minDis = minRange / (max - min);
    return positions.map((item, index) => {
      const { left, originLeft } = item;
      const value = this.getValue(left);
      const minPosition = index - 1 >= 0
        ? positions[index - 1].left + minDis
        : 0;
      const maxPosition = index + 1 < positions.length
        ? positions[index + 1].left - minDis
        : 1;
      return (
        <Dragger
          key={index}
          left={left}
          originLeft={originLeft}
          maxDis={maxDis}
          color={color}
          value={value}
          max={maxPosition}
          min={minPosition}
          onDragEnd={this.onChange(index)}
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
    const right = positions.slice(-1)[0].left;
    return (
      <ProgressBar
        color={color}
        left={left}
        right={right}
      />
    );
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
          ref={ref => this.pathway = ref}>
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
  onChange: PropTypes.func
};

Slider.defaultProps = {
  className: '',
  tipFormatter: null,
  min: 0,
  max: 100,
  value: 10,
  minRange: 0,
  color: 'green',
  onChange: () => {}
};

export default Slider;
