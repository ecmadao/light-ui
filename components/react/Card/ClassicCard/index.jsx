
import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import styles from './card.css'

const ClassicCard = (props) => {
  const {
    flat,
    style,
    onClick,
    children,
    className,
    bgClassName
  } = props

  return (
    <div
      style={style}
      className={cx(
        styles.infoCard,
        styles.classic,
        flat && styles.flat,
        className,
        onClick !== null && styles.clickable
      )}
      onClick={onClick || Function.prototype}
    >
      <div className={cx(styles.bg, bgClassName)}>
        {children}
      </div>
    </div>
  )
}

ClassicCard.propTypes = {
  flat: PropTypes.bool,
  className: PropTypes.string,
  bgClassName: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func
}

ClassicCard.defaultProps = {
  flat: false,
  className: '',
  bgClassName: '',
  style: {},
  onClick: null
}

export default ClassicCard
