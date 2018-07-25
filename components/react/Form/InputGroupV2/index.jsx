
import React from 'react';
import cx from 'classnames';
import Input from '../Input';
import styles from './group.css';

class InputGroup2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: false,
      focus: false,
    };

    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onCheck = this.onCheck.bind(this);
  }

  onCheck(error) {
    this.setState({ error });
  }

  onFocus() {
    this.setState({ focus: true });
  }

  onBlur() {
    this.setState({ focus: false });
  }

  render() {
    const {
      theme,
      style,
      sections,
      className
    } = this.props;
    const { error, focus } = this.state;

    const inputs = sections.map((section, index) => (
      <Input
        key={index}
        {...section}
        theme="ghost"
        className={cx(
          styles.input,
          section.className
        )}
        onBlur={this.onBlur}
        onFocus={this.onFocus}
        onCheck={this.onCheck}
      />
    ));

    return (
      <div
        style={style}
        className={cx(
          styles.group,
          styles[theme],
          focus && styles.focus,
          error && styles.error,
          className
        )}
      >
        {inputs}
      </div>
    );
  }
}

InputGroup2.defaultProps = {
  style: {},
  sections: [],
  className: '',
  theme: 'material',
};

export default InputGroup2;
