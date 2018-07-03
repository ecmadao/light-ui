import React from 'react';
import cx from 'classnames';
import PropTypes from 'prop-types';
import styles from './base_modal.css';

class BaseModal extends React.Component {
  onClose() {
    const {onClose} = this.props;
    onClose && onClose();
  }

  render() {
    const { children, showModal, className } = this.props;
    const modalClass = cx(
      styles.modalComponent,
      showModal && styles.active,
      className
    );
    return (
      <div className={modalClass}>
        <div
          className={styles.modalWrapper}
          onClick={this.onClose.bind(this)}
        />
        {children}
      </div>
    );
  }
}

BaseModal.propTypes = {
  showModal: PropTypes.bool,
  onClose: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.element,
    PropTypes.string,
    PropTypes.array
  ]),
};

BaseModal.defaultProps = {
  showModal: true,
  onClose: () => {},
  className: '',
  children: (<div></div>)
};

export default BaseModal;
