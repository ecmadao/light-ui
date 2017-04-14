import React, { PropTypes } from 'react';
import Portal from 'react-portal';
import BaseModal from '../BaseModal';

const PortalModal = (props) => {
  const { closeOnEsc, showModal, onClose, closeOnOutsideClick, children } = props;
  return (
    <Portal
      closeOnEsc={closeOnEsc}
      isOpened={showModal}
      onClose={onClose}
      closeOnOutsideClick={closeOnOutsideClick}>
      <BaseModal showModal={true} onClose={onClose}>
        {children}
      </BaseModal>
    </Portal>
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
  ])
};

PortalModal.defaultProps = {
  closeOnEsc: true,
  showModal: false,
  closeOnOutsideClick: false,
  onClose: () => {},
  children: (<div></div>)
};

export default PortalModal;
