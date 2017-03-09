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
      customStyle,
      inputClassName
    } = this.props;

    return (
      <Tipso
        trigger="focus"
        wrapperStyle={{
          margin: '0 5px'
        }}
        tipsoContent={children}>
        <Input
          {...this.props}
          className={cx(styles.input, inputClassName)}
        />
      </Tipso>
    )
  }
}

InputGroup.defaultProps = {
  customStyle: '',
  inputClassName: ''
};

export default InputGroup;
