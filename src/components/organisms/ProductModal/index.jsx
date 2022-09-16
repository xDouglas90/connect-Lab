import Modal from 'react-modal';
import PropTypes from 'prop-types';

Modal.setAppElement('#root');

export const ProductModal = ({ children, isOpen, onRequestClose }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="modal-overlay"
      className="modal-container"
    >
      {children}
    </Modal>
  );
};

ProductModal.propTypes = {
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func.isRequired,
};
