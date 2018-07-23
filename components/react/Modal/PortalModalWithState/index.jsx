import React from 'react';
import PropTypes from 'prop-types';
import { PortalWithState } from 'react-portal';
import BaseModal from '../BaseModal';

const PortalModalWithState = (props) => {
  const {
    onClose,
    children,
    showModal,
    closeOnEsc,
    defaultOpen,
    closeOnOutsideClick,
  } = props;
  return (
    <PortalWithState
      closeOnEsc={closeOnEsc}
      onClose={onClose}
      defaultOpen={defaultOpen}
      closeOnOutsideClick={closeOnOutsideClick}
    >
      {
        ({ openPortal, closePortal, isOpen, portal }) => {
          if (showModal) {
            openPortal();
          } else {
            closePortal();
          }
          return portal(
            <BaseModal showModal={true} onClose={onClose}>
              {children}
            </BaseModal>
          );
        }
      }
    </PortalWithState>
  );
};

PortalModalWithState.propTypes = {
  closeOnEsc: PropTypes.bool,
  showModal: PropTypes.bool,
  closeOnOutsideClick: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]),
  defaultOpen: PropTypes.bool
};

PortalModalWithState.defaultProps = {
  closeOnEsc: true,
  showModal: false,
  closeOnOutsideClick: false,
  onClose: Function.prototype,
  children: <div />,
  defaultOpen: false,
};

export default PortalModalWithState;
