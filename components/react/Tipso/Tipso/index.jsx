import React from 'react';
import PropTypes from 'prop-types';
import BaseTipso from '../BaseTipso';

const Tipso = (props) => {
  const { children } = props;
  const baseProps = Object.assign({}, props);

  delete baseProps.children;
  return (
    <BaseTipso {...baseProps}>
      {children}
    </BaseTipso>
  );
};

Tipso.propTypes = {
  trigger: PropTypes.string,
  wrapperStyle: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]),
};

Tipso.defaultProps = {
  trigger: 'hover',
  wrapperStyle: {},
  children: <div />
};

export default Tipso;
