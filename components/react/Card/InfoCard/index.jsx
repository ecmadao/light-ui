import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import icons from '../../../shared/utils/icons';
import Tipso from '../../Tipso/Tipso';
import styles from './info_card.css';

const InfoCard = (props) => {
  const {
    icon,
    tipso,
    theme,
    style,
    subText,
    mainText,
    className,
    tipsoTheme,
    subTextStyle,
    mainTextStyle,
  } = props;

  const infoClass = cx(
    styles["info-card"],
    theme && styles[theme],
    tipso && styles["with-tipso"],
    className
  );
  const iconElement = typeof icon === 'string'
  ? (<i className={`fa fa-${icon}`} aria-hidden="true"></i>)
  : icon;
  const tipsoIcon = tipso && typeof tipso.icon === 'object'
    ? tipso.icon : (icons.info);

  let tipsoDOM = null;
  if (tipso !== null) {
    if (!tipso.text && !tipso.icon) {
      tipsoDOM = tipso;
    } else {
      tipsoDOM = (
        <Tipso
          theme={tipsoTheme}
          tipsoStyle={tipso.style || {}}
          className={styles["info_tipso"]}
          wrapperClass={styles["info_tipso_wrapper"]}
          tipsoContent={(<span>{tipso.text}</span>)}>
          {tipsoIcon}
        </Tipso>
      );
    }
  }

  return (
    <div className={infoClass} style={style}>
      {tipsoDOM}
      <div className={cx(styles["info_main_text"], mainTextStyle)}>
        {icon ? iconElement : ''}
        {mainText}
      </div>
      {typeof subText === 'string' ? (
        <div className={cx(styles["info_sub_text"], subTextStyle)}>
          {subText}
        </div>
      ) : subText}
    </div>
  );
};

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
  style: PropTypes.object,
  theme: PropTypes.string,
  tipsoTheme: PropTypes.string,
};

InfoCard.defaultProps = {
  mainText: '',
  subText: '',
  mainTextStyle: '',
  subTextStyle: '',
  className: '',
  icon: null,
  tipso: null,
  style: {},
  theme: 'material',
  tipsoTheme: 'light',
};

export default InfoCard;
