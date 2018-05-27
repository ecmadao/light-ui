
import React, { cloneElement } from 'react';

const STATUS = {
  HIDDEN: 'hidden',
  ENTERED: 'entered',
  EXITING: 'exiting',
  ENTERING: 'entering'
};

class AnimationComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: STATUS.HIDDEN
    };
    this.onExit = this.onExit.bind(this);
    this.onTransitionEnd = this.onTransitionEnd.bind(this);
  }

  componentDidMount(){
    setTimeout(this.mountAnimation.bind(this), 10);
  }

  componentWillUnmount() {
    clearTimeout(this.exitingTimeout);
  }

  onTransitionEnd() {
    this.setState({
      status: STATUS.ENTERED
    });
  }

  onExit(callback) {
    this.exitingTimeout = setTimeout(() => callback && callback(), 100);
    this.unmountAnimation();
  }

  unmountAnimation() {
    this.setState({
      status: STATUS.EXITING
    });
  }

  mountAnimation() {
    this.setState({
      status: STATUS.ENTERING
    });
  }

  render() {
    const { status } = this.state;
    const children = cloneElement(this.props.children, {
      status,
      onExit: this.onExit,
      onTransitionEnd: this.onTransitionEnd,
    });

    return children;
  }
}

export default AnimationComponent;
