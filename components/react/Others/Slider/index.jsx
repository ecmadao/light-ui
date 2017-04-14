import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';
import Dragger from './Dragger';
import styles from './slider.css';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      max: 0
    };
    this.onChange = this.onChange.bind(this);
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

  resetOrigin() {
    const pathway = ReactDOM.findDOMNode(this.pathway).getBoundingClientRect();
    const max = pathway.width;
    this.setState({ max });
  }

  onChange(left) {
    const { onChange, max } = this.props;
    const value = left * max;
    onChange(parseInt(value, 10));
  }

  render() {
    const { className, max, min, value } = this.props;
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
            value={value}
            max={max}
            min={min}
            maxDis={this.state.max}
            onChange={this.onChange}
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
  onChange: PropTypes.func
};

Slider.defaultProps = {
  className: '',
  tipFormatter: null,
  min: 0,
  max: 100,
  value: 10,
  onChange: () => {}
};

export default Slider;
