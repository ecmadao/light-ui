
import React from 'react'
import cx from 'classnames'
import styles from './button.css'

class ClassicButton extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      pressed: false
    }

    this.onMouseDown = this.onMouseDown.bind(this)
    this.onMouseUp = this.onMouseUp.bind(this)
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }

  onMouseDown() {
    this.setState({ pressed: true })
  }

  onMouseUp() {
    this.setState({ pressed: false })
  }

  onMouseEnter() {
    const { onMouseEnter } = this.props
    onMouseEnter && onMouseEnter()
  }

  onMouseLeave() {
    this.onMouseUp()
    const { onMouseLeave } = this.props
    onMouseLeave && onMouseLeave()
  }

  render() {
    const {
      theme, // light or dark
      disabled,
      content,
      children,
      className,
      onTransitionEnd,
      buttonWrapperClassName,
      buttonContainerClassName
    } = this.props
    const { pressed } = this.state
    const onClick = disabled ? Function.prototype : this.props.onClick

    return (
      <div
        onClick={onClick || Function.prototype}
        className={cx(
          styles.buttonContainer,
          buttonContainerClassName
        )}
      >
        <div
          className={cx(
            styles.buttonWrapper,
            styles[`wrapper_${theme}`],
            disabled && styles.disabled,
            !disabled && pressed && styles.pressDown,
            buttonWrapperClassName
          )}
          onMouseUp={this.onMouseUp}
          onMouseOut={this.onMouseUp}
          onMouseDown={this.onMouseDown}
          onMouseLeave={this.onMouseLeave}
          onMouseEnter={this.onMouseEnter}
          onTransitionEnd={onTransitionEnd}
        >
          <div className={cx(styles.buttonContent, className)}>
            {children || content}
          </div>
        </div>
      </div>
    )
  }
}

export default ClassicButton
