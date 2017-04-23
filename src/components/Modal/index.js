import React from 'react';
import PropTypes from 'prop-types';

// components
import Icon from 'components/Icon';

// styles
import styles from './styles.scss';

const propTypes = {
  handleClose: PropTypes.func,
  children: PropTypes.element,
};

const Modal = ({ children, handleClose }) => (
  <div className="modal-bg" onClick={handleClose}>
    <div className="modal-container" onClick={e => e.stopPropagation()}>
      <div className="modal-icon-close">
        <Icon icon="close" handle={handleClose} />
      </div>
      { children }
    </div>
  </div>
);

Modal.propTypes = propTypes;

export default Modal;
