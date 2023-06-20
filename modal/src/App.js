import React, { useState, useEffect } from 'react';
import Modal from './Components/Modal.jsx';
import './app.css'

export default function App() {
  // State variable for modal visibility
  const [showModal, setShowModal] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      // Disable form inputs and scroll when the modal is open
      document.body.style.overflow = 'hidden';
      document.querySelectorAll('input, select, textarea').forEach((el) => {
        el.setAttribute('disabled', 'disabled');
      });

      // Close the confirmation modal with escape
      document.addEventListener('keydown', handleKeyDown);
      return () => {
        document.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'auto';
      document.querySelectorAll('input, select, textarea').forEach((el) => {
        el.removeAttribute('disabled');
      });
    }
  }, [isModalOpen]);

  // Function to open the confirmation modal
  const openConfirmModal = () => {
    setShowModal(true);
    setIsModalOpen(true);
  };

  // Function to close the confirmation modal
  const closeConfirmModal = () => {
    setShowModal(false);
    setIsModalOpen(false);
  };

  // Function to close the confirmation modal with escape
  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeConfirmModal();
    }
  };

  return (
    <div className='test-modal'>
      <button onClick={openConfirmModal}>Test open modal</button>
      {showModal && <Modal closeConfirmModal={closeConfirmModal} />}
    </div>
  );
}
