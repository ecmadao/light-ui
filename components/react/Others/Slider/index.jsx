import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import Dragger from './Dragger';
import ProgressBar from './ProgressBar';
import styles from './slider.css';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    const { max, min, value } = props;
    const left = value / (max - min);
    this.state = {
      max: 0,
      left: left,
      originLeft: left
    };
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

  resetOrigin() {
    const pathway = ReactDOM.findDOMNode(this.pathway).getBoundingClientRect();
    const max = pathway.width;
    this.setState({ max });
  }

  onChange(left) {
    this.onDragEnd(left);
    const { onChange, max } = this.props;
    const value = left * max;
    onChange(parseInt(value, 10));
  }

  onDraging(left) {
    this.setState({ left: left });
  }

  onDragEnd(left) {
    this.setState({ originLeft: left });
  }

  render() {
    const { className, color } = this.props;
    const { left, originLeft, max } = this.state;
    const containerClass = cx(
      styles.container,
      className
    );
    return (
      <div className={containerClass}>
        <div
          className={styles.pathway}
          ref={ref => this.pathway = ref}>
          <Dragger
            left={left}
            originLeft={originLeft}
            maxDis={max}
            color={color}
            onDragEnd={this.onChange}
            onDraging={this.onDraging}
          />
          <ProgressBar
            color={color}
            width={left}
          />
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
  value: PropTypes.number,
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
