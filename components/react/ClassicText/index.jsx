
import React from 'react'
import cx from 'classnames'
import styles from './text.css'

const ClassicText = (props) => {
  const {
    className,
    theme = 'light',
    text = '',
    onTransitionEnd,
    onClick = Function.prototype
  } = props

  return (
    <div
      className={cx(
        styles.logoContainer,
        className,
        styles[`logo_${theme}`]
      )}
      onClick={onClick}
      onTransitionEnd={onTransitionEnd}
    >
      <div className={styles.logoFront}>{text}</div>
      <div className={styles.logoBack}>{text}</div>
    </div>
  )
}

export default ClassicText
