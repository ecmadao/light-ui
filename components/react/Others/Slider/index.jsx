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
    this.state = this.initialState();
    this.onChange = this.onChange.bind(this);
    this.onDraging = this.onDraging.bind(this);
    this.onDragEnd = this.onDragEnd.bind(this);
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
    const { value, max, min } = nextProps;
    const nextLeft = value / (max - min);
    if (nextLeft !== this.state.left) {
      this.setState({
        left: nextLeft,
        originLeft: nextLeft
      });
    }
  }

  initialState() {
    const { value, max, min } = this.props;
    const values = Helper.isArray(value) ? value : [value];
    const positions = values.map((item) => {
      const left = item / (max - min);
      return {
        left,
        originLeft: left
      };
    });
    return {
      maxDis: 0,
      positions
    };
  }

  resetOrigin() {
    const pathway = ReactDOM.findDOMNode(this.pathway).getBoundingClientRect();
    const maxDis = pathway.width;
    this.setState({ maxDis });
  }

  onChange(index) {
    return (left) => {
      this.onDragEnd(left, index);
      const { positions } = this.props;
      const { onChange, max } = this.props;
      const value = parseInt(left * max, 10);
      const getValue = position => parseInt(position.left * max, 10);
      const results = [
        ...positions.slice(0, index).map(getValue),
        value,
        ...positions.slice(index + 1).map(getValue)
      ];
      onChange(results.length > 1 ? results : results[0]);
    };
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
    const { color, min, max, tipFormatter } = this.props;
    return positions.map((item, index) => {
      const { left, originLeft } = item;
      const value = parseInt((max - min) * left, 10);
      const minPosition = index === 0 ? 0 : positions[0].left;
      const maxPosition = index === positions.length - 1 ? 1 : positions.slice(-1)[0].left;
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
  color: PropTypes.string,
  onChange: PropTypes.func
};

Slider.defaultProps = {
  className: '',
  tipFormatter: null,
  min: 0,
  max: 100,
  value: 10,
  color: 'green',
  onChange: () => {}
};

export default Slider;
