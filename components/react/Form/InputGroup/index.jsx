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
      wrapperStyle,
      tipsoStyle,
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
        tipsoStyle={{...tipsoStyle}}
        wrapperClass={wrapperClassName}
        tipsoContent={children}>
        <Input
          {...this.props}
          className={cx(styles.input, inputClassName)}
        />
      </Tipso>
    );
  }
}

InputGroup.propTypes = {
  inputClassName: PropTypes.string,
  wrapperClassName: PropTypes.string,
  wrapperStyle: PropTypes.object,
  tipsoStyle: PropTypes.object,
  children: PropTypes.element
};

InputGroup.defaultProps = {
  inputClassName: '',
  wrapperClassName: '',
  wrapperStyle: {},
  tipsoStyle: {},
  children: (<div></div>),
};

export default InputGroup;
