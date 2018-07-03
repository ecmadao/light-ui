
import cx from 'classnames';
import PropTypes from 'prop-types';
import React, { cloneElement } from 'react';

import styles from './card_group.css';
import Helper from '../../../shared/utils/helper';

const CardGroup = (props) => {
  const {
    style,
    theme,
    children,
    className,
    onTransitionEnd
  } = props;

  let hasCardGroup = false;

  const cards = Helper.isArray(children) ? children.map((child, index) => {
    const isCardGroup = child.type.prototype === CardGroup.prototype;
    if (isCardGroup) hasCardGroup = true;

    const childProps = isCardGroup ? {
      key: index,
      className: styles.cardsChild
    } : {
      key: index,
      theme: 'ghost',
      className: styles.card
    };
    return cloneElement(child, childProps);
  }) : cloneElement(children, {
    theme: 'ghost',
    className: styles.card
  });

  const groupClass = cx(
    styles.cardsContainer,
    hasCardGroup && styles.cardsContainerWrapper,
    theme && hasCardGroup && styles[theme],
    className
  );

  return (
    <div
      style={style}
      className={groupClass}
      onTransitionEnd={onTransitionEnd}
    >
      {cards}
    </div>
  );
};

CardGroup.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.node,
    PropTypes.array
  ]),
  className: PropTypes.string,
  theme: PropTypes.string,
  style: PropTypes.object,
  onTransitionEnd: PropTypes.func
};

CardGroup.defaultProps = {
  children: (<div></div>),
  className: '',
  theme: null,
  style: {}
};

export default CardGroup;
