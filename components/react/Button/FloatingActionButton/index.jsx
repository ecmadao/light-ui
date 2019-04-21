import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import styles from './fab.css'
import BaseButton from '../BaseButton'

const FloatingActionButton = (props) => {
  const { icon, style, className } = props
  const baseProps = Object.assign({}, props)

  const iconElement = typeof icon === 'string'
    ? (<i className={`fa fa-${icon}`} aria-hidden="true" />)
    : icon

  delete baseProps.style
  delete baseProps.icon

  return (
    <BaseButton
      {...baseProps}
      style={{
        ...style,
        width: '50px',
        height: '50px'
      }}
      className={cx(className, styles.fab)}
      type="floating-action-button"
    >
      {iconElement}
    </BaseButton>
  )
}

FloatingActionButton.propTypes = {
  style: PropTypes.object,
  onClick: PropTypes.func,
  className: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ])
}

FloatingActionButton.defaultProps = {
  style: {},
  onClick: Function.prototype,
  className: '',
  icon: ''
}

export default FloatingActionButton
