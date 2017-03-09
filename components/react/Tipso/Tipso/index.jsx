import React, { PropTypes, cloneElement } from 'react';
import BaseTipso from '../BaseTipso';

const Tipso = (props) => {

  return (
    <BaseTipso
      {...props} >
      {props.children}
    </BaseTipso>
  )
};

Tipso.propTypes = {
  trigger: PropTypes.string,
  wrapperStyle: PropTypes.object,
  children: PropTypes.element
};

Tipso.defaultProps = {
  trigger: 'hover',
  wrapperStyle: {}
};

export default Tipso;
