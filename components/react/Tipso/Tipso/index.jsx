import React from 'react';
import PropTypes from 'prop-types';
import BaseTipso from '../BaseTipso';
import objectAssign from '../../../shared/utils/objectAssign';

const Tipso = (props) => {
  const { children } = props;
  const baseProps = objectAssign({}, props);

  delete baseProps.children;

  return (
    <BaseTipso
      {...baseProps}>
      {children}
    </BaseTipso>
  );
};

Tipso.propTypes = {
  trigger: PropTypes.string,
  wrapperStyle: PropTypes.object,
  children: PropTypes.element
};

Tipso.defaultProps = {
  trigger: 'hover',
  wrapperStyle: {},
  children: (<div></div>)
};

export default Tipso;
