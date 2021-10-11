import { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

import classes from '../assets/styles/modal.module.css';

const Backdrop = () => <div className={classes.backdrop} />;

const ModalOverlay = ({ children }) => (
  <div className={classes.modal}>
    <div className={classes.content}>{children}</div>
  </div>
);

const portalElement = document.getElementById('overlays');

const Modal = ({ children }) => (
  <>
    {ReactDOM.createPortal(<Backdrop />, portalElement)}
    {ReactDOM.createPortal(
      <ModalOverlay>{children}</ModalOverlay>,
      portalElement,
    )}
  </>
);

ModalOverlay.propTypes = {
  children: PropTypes.node.isRequired,
};

Modal.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Modal;
