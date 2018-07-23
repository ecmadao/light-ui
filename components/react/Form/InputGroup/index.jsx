import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';

import Input from '../Input';
import Tipso from '../../Tipso/Tipso';
import styles from './group.css';

class InputGroup extends React.Component {
  render() {
    const {
      children,
      tipsoStyle,
      tipsoTheme,
      onTipClose,
      wrapperStyle,
      tipsoPosition,
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
        theme={tipsoTheme}
        tipsoContent={children}
        onTipClose={onTipClose}
        position={tipsoPosition}
        className={tipsoClassName}
        tipsoStyle={{...tipsoStyle}}
        wrapperClass={wrapperClassName}
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
  children: <div />,
};

export default InputGroup;
