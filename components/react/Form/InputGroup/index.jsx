import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import Input from '../Input';
import Tipso from '../../Tipso/Tipso';
import styles from './input_group.css';

class InputGroup extends React.Component {
  render() {
    const {
      children,
      tipsoStyle,
      tipsoTheme,
      onTipClose,
      tipsoPosition,
      wrapperStyle,
      tipsoClassName,
      inputClassName,
      wrapperClassName,
    } = this.props;

    return (
      <Tipso
        trigger="focus"
        wrapperStyle={{
          ...wrapperStyle,
          margin: '0 5px'
        }}
        position={tipsoPosition}
        tipsoStyle={{...tipsoStyle}}
        theme={tipsoTheme}
        wrapperClass={wrapperClassName}
        className={tipsoClassName}
        tipsoContent={children}
        onTipClose={onTipClose}
      >
        <Input
          {...this.props}
          className={cx(styles.input, inputClassName)}
        />
      </Tipso>
    );
  }
}

InputGroup.propTypes = {
  tipsoTheme: PropTypes.string,
  tipsoPosition: PropTypes.string,
  inputClassName: PropTypes.string,
  tipsoClassName: PropTypes.string,
  wrapperClassName: PropTypes.string,
  wrapperStyle: PropTypes.object,
  tipsoStyle: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]),
};

InputGroup.defaultProps = {
  tipsoTheme: 'light',
  tipsoPosition: 'top',
  inputClassName: '',
  tipsoClassName: '',
  wrapperClassName: '',
  wrapperStyle: {},
  tipsoStyle: {},
  children: (<div></div>),
};

export default InputGroup;
