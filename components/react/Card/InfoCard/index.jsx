
import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Tipso from '../../Tipso/Tipso'
import styles from './card.css'
import icons from '../../../shared/utils/icons'

const InfoCard = (props) => {
  const {
    icon,
    tipso,
    theme,
    style,
    subText,
    mainText,
    onClick,
    children,
    className,
    tipsoTheme,
    subTextStyle,
    tipsoTrigger,
    mainTextStyle
  } = props

  if (children) {
    return (
      <div
        style={style}
        className={cx(
          styles.infoCard,
          theme && styles[theme],
          className,
          onClick !== null && styles.clickable
        )}
        onClick={onClick || Function.prototype}
      >
        <div className={styles.bg}>{children}</div>
      </div>
    )
  }

  const iconElement = typeof icon === 'string'
    ? <i className={`fa fa-${icon}`} aria-hidden="true" />
    : icon
  const tipsoIcon = tipso && typeof tipso.icon === 'object'
    ? tipso.icon : (icons.info)

  let tipsoDOM = null
  if (tipso !== null) {
    if (!tipso.text && !tipso.icon) {
      tipsoDOM = tipso
    } else {
      tipsoDOM = (
        <Tipso
          theme={tipsoTheme}
          trigger={tipsoTrigger}
          tipsoStyle={tipso.style || {}}
          className={styles.infoTipso}
          wrapperClass={styles.infoTipsoWrapper}
          tipsoContent={(<span>{tipso.text}</span>)}>
          {tipsoIcon}
        </Tipso>
      )
    }
  }

  return (
    <div
      style={style}
      className={cx(
        styles.infoCard,
        theme && styles[theme],
        tipso && styles.withTipso,
        className,
        onClick !== null && styles.clickable
      )}
      onClick={onClick || Function.prototype}
    >
      <div className={styles.bg}>
        {tipsoDOM}
        <div className={cx(styles.infoMainText, mainTextStyle)}>
          {icon ? iconElement : null}
          {mainText}
        </div>
        {typeof subText === 'string' ? (
          <div className={cx(styles.infoSubText, subTextStyle)}>
            {subText}
          </div>
        ) : subText}
      </div>
    </div>
  )
}

InfoCard.propTypes = {
  mainText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.element,
  ]),
  subText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.node,
    PropTypes.element,
  ]),
  mainTextStyle: PropTypes.string,
  subTextStyle: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string
  ]),
  tipso: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.object
  ]),
  tipsoTrigger: PropTypes.string,
  style: PropTypes.object,
  theme: PropTypes.string,
  tipsoTheme: PropTypes.string,
  onClick: PropTypes.func
}

InfoCard.defaultProps = {
  mainText: '',
  subText: '',
  mainTextStyle: '',
  subTextStyle: '',
  className: '',
  icon: null,
  tipso: null,
  tipsoTrigger: 'hover',
  style: {},
  theme: 'material',
  tipsoTheme: 'light',
  onClick: null
}

export default InfoCard
