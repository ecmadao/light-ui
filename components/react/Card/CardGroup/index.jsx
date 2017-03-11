import React, { PropTypes, cloneElement } from 'react';
import cx from 'classnames';
import styles from './card_group.css';

const CardGroup = (props) => {
  const { className, children, theme, style } = props;
  let hasCardGroup = false;

  const cards = Array.isArray(children) ? children.map((child, index) => {
    const isCardGroup = child.type.prototype === CardGroup.prototype;
    if (isCardGroup) { hasCardGroup = true }

    const childProps = isCardGroup ? {
      key: index,
      className: styles['cards-child']
    } : {
      key: index,
      theme: 'ghost',
      className: styles['card']
    };
    return cloneElement(child, childProps);
  }) : cloneElement(children, {
    theme: 'ghost',
    className: styles['card']
  });


  const groupClass = cx(
    styles['cards-container'],
    hasCardGroup && styles['cards-container-wrapper'],
    theme && hasCardGroup && styles[theme],
    className
  );

  return (
    <div className={groupClass} style={style}>
      {cards}
    </div>
  )
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
};

CardGroup.defaultProps = {
  children: (<div></div>),
  className: '',
  theme: null,
  style: {}
};

export default CardGroup
