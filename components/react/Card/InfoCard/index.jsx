import React, { PropTypes } from 'react';
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
    mainText,
    subText,
    className,
    mainTextStyle,
    subTextStyle
  } = props;

  const infoClass = cx(
    styles["info-card"],
    theme && styles[theme],
    tipso && styles["with-tipso"],
    className
  );

  const iconElement = typeof icon === 'string' ?
    (<i className={`fa fa-${icon}`} aria-hidden="true"></i>) :
    icon;
  const tipsoIcon = tipso && typeof tipso.icon === 'object' ?
    tipso.icon : (icons.info);

  return (
    <div className={infoClass} style={style}>
      {tipso ? (
        <Tipso
          tipsoStyle={tipso.style || {}}
          className={styles["info_tipso"]}
          wrapperClass={styles["info_tipso_wrapper"]}
          tipsoContent={(<span>{tipso.text}</span>)}>
          {tipsoIcon}
        </Tipso>
      ) : ''}
      <div className={cx(styles["info_main_text"], mainTextStyle)}>
        {icon ? iconElement : ''}
        {mainText}
      </div>
      <div className={cx(styles["info_sub_text"], subTextStyle)}>
        {subText}
      </div>
    </div>
  )
};


InfoCard.propTypes = {
  mainText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  subText: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  mainTextStyle: PropTypes.string,
  subTextStyle: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.string
  ]),
  tipso: PropTypes.object,
  style: PropTypes.object,
  theme: PropTypes.string
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
  theme: 'material'
};

export default InfoCard;
