import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import cx from 'classnames';

import Input from '../Input';
import Tipso from '../../Tipso/Tipso';
import styles from './input_group.css';

class InputGroup extends React.Component {
  render() {
    const {
      children,
      wrapperStyle,
      inputClassName,
      wrapperClassName
    } = this.props;

    return (
      <Tipso
        trigger="focus"
        wrapperStyle={{
          ...wrapperStyle,
          margin: '0 5px'
        }}
        wrapperClass={wrapperClassName}
        tipsoContent={children}>
        <Input
          {...this.props}
          className={cx(styles.input, inputClassName)}
        />
      </Tipso>
    )
  }
}

InputGroup.propTypes = {
  inputClassName: PropTypes.string,
  wrapperClassName: PropTypes.string,
  wrapperStyle: PropTypes.object,
};

InputGroup.defaultProps = {
  inputClassName: '',
  wrapperClassName: '',
  wrapperStyle: {}
};

export default InputGroup;