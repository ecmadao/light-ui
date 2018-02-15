import React from 'react';
import PropTypes from 'prop-types';
import { Portal } from 'react-portal';
import BaseModal from '../BaseModal';
import OutsideClickHandler from '../../Others/OutsideClickHandler';

const PortalModal = (props) => {
  const {
    onClose,
    children,
    showModal,
    closeOnEsc,
    closeOnOutsideClick,
  } = props;
  return (
    <OutsideClickHandler
      targetKey={27}
      onKeydown={onClose}
      onOutsideClick={onClose}
      responseKeydown={closeOnEsc}
      responseOutsideClick={closeOnOutsideClick}
    >
      <Portal>
        <BaseModal showModal={showModal} onClose={onClose}>
          {children}
        </BaseModal>
      </Portal>
    </OutsideClickHandler>
  );
};

PortalModal.propTypes = {
  closeOnEsc: PropTypes.bool,
  showModal: PropTypes.bool,
  closeOnOutsideClick: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array
  ]),
};

PortalModal.defaultProps = {
  closeOnEsc: true,
  showModal: false,
  closeOnOutsideClick: false,
  onClose: () => {},
  children: (<div></div>),
};

export default PortalModal;
